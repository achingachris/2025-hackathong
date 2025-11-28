import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import librosa
from transformers import BertTokenizer, BertModel
import torchvision.models

class AudioDeepfakeDetector(nn.Module):
    """
    CNN-LSTM hybrid model for audio deepfake detection
    Analyzes spectral features to identify synthetic speech patterns
    """
    def __init__(self, input_features=128, hidden_size=256, num_layers=2):
        super(AudioDeepfakeDetector, self).__init__()
        
        # CNN layers for feature extraction
        self.conv1 = nn.Conv1d(input_features, 256, kernel_size=3, padding=1)
        self.bn1 = nn.BatchNorm1d(256)
        self.conv2 = nn.Conv1d(256, 512, kernel_size=3, padding=1)
        self.bn2 = nn.BatchNorm1d(512)
        self.conv3 = nn.Conv1d(512, 256, kernel_size=3, padding=1)
        self.bn3 = nn.BatchNorm1d(256)
        
        self.pool = nn.MaxPool1d(2)
        self.dropout = nn.Dropout(0.3)
        
        # LSTM for temporal analysis
        self.lstm = nn.LSTM(256, hidden_size, num_layers, 
                           batch_first=True, bidirectional=True)
        
        # Attention mechanism
        self.attention = nn.Linear(hidden_size * 2, 1)
        
        # Classification layers
        self.fc1 = nn.Linear(hidden_size * 2, 128)
        self.fc2 = nn.Linear(128, 2)  # Binary: real vs fake
        
    def forward(self, x):
        # x shape: (batch, features, time)
        x = F.relu(self.bn1(self.conv1(x)))
        x = self.pool(x)
        x = self.dropout(x)
        
        x = F.relu(self.bn2(self.conv2(x)))
        x = self.pool(x)
        x = self.dropout(x)
        
        x = F.relu(self.bn3(self.conv3(x)))
        x = self.pool(x)
        
        # Reshape for LSTM: (batch, time, features)
        x = x.transpose(1, 2)
        
        # LSTM
        lstm_out, _ = self.lstm(x)
        
        # Attention mechanism
        attn_weights = F.softmax(self.attention(lstm_out), dim=1)
        context = torch.sum(attn_weights * lstm_out, dim=1)
        
        # Classification
        x = F.relu(self.fc1(context))
        x = self.dropout(x)
        output = self.fc2(x)
        
        return output, attn_weights

class VideoDeepfakeDetector(nn.Module):
    """
    CNN-LSTM based model for detecting video deepfakes.
    Extracts spatial features from frames using a pre-trained CNN and models temporal dependencies with an LSTM.
    """
    def __init__(self, num_classes=2, hidden_size=256, num_layers=2, dropout_rate=0.5):
        super(VideoDeepfakeDetector, self).__init__()

        # Feature extractor: Pre-trained ResNet-18
        # We remove the final classification layer (avgpool and fc)
        resnet = torchvision.models.resnet18(weights=torchvision.models.ResNet18_Weights.DEFAULT)
        self.feature_extractor = nn.Sequential(*list(resnet.children())[:-1])

        # Freeze CNN layers initially
        for param in self.feature_extractor.parameters():
            param.requires_grad = False

        # The output features from ResNet-18 before the final FC layer is 512 (after global average pooling)
        cnn_output_dim = 512 

        # LSTM for temporal modeling
        self.lstm = nn.LSTM(cnn_output_dim, hidden_size, num_layers,
                            batch_first=True, bidirectional=True)

        # Classification head
        self.dropout = nn.Dropout(dropout_rate)
        # Bidirectional LSTM output is hidden_size * 2
        self.fc1 = nn.Linear(hidden_size * 2, 128) 
        self.fc2 = nn.Linear(128, num_classes)

    def forward(self, x):
        # x shape: (batch_size, num_frames, channels, height, width)
        batch_size, num_frames, C, H, W = x.size()

        # Reshape to process frames individually through CNN
        # (batch_size * num_frames, channels, height, width)
        x_reshaped = x.view(-1, C, H, W)

        # Extract features using CNN
        # Output shape: (batch_size * num_frames, cnn_output_dim, 1, 1)
        cnn_features = self.feature_extractor(x_reshaped)

        # Flatten CNN features: (batch_size * num_frames, cnn_output_dim)
        cnn_features = cnn_features.view(batch_size * num_frames, -1)

        # Reshape for LSTM: (batch_size, num_frames, cnn_output_dim)
        lstm_input = cnn_features.view(batch_size, num_frames, -1)

        # Process through LSTM
        # lstm_out shape: (batch_size, num_frames, hidden_size * 2)
        lstm_out, _ = self.lstm(lstm_input)

        # Take the output of the last time step for classification
        # Or, if using attention, apply attention here. For simplicity, we'll use the last hidden state.
        # Alternatively, one could use global average pooling over the time dimension:
        # context = torch.mean(lstm_out, dim=1)
        
        # Using the last hidden state of the LSTM (for batch_first=True)
        context = lstm_out[:, -1, :] 

        # Classification
        x = F.relu(self.fc1(context))
        x = self.dropout(x)
        output = self.fc2(x)
        
        return output


class TextAIDetector(nn.Module):
    """
    BERT-based model for detecting AI-generated text
    Analyzes linguistic patterns and coherence
    """
    def __init__(self, bert_model='bert-base-uncased', hidden_size=256):
        super(TextAIDetector, self).__init__()
        
        self.bert = BertModel.from_pretrained(bert_model)
        self.dropout = nn.Dropout(0.3)
        
        # Additional feature extraction layers
        self.lstm = nn.LSTM(768, hidden_size, 2, 
                           batch_first=True, bidirectional=True)
        
        # Statistical feature analyzer
        self.stat_fc = nn.Linear(10, 64)  # For statistical features
        
        # Combined classifier
        self.fc1 = nn.Linear(hidden_size * 2 + 64, 256)
        self.fc2 = nn.Linear(256, 128)
        self.fc3 = nn.Linear(128, 2)  # Binary: human vs AI
        
    def forward(self, input_ids, attention_mask, stat_features):
        # BERT encoding
        outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        sequence_output = outputs.last_hidden_state
        
        # LSTM for additional context
        lstm_out, _ = self.lstm(sequence_output)
        pooled = torch.mean(lstm_out, dim=1)
        
        # Statistical features
        stat_out = F.relu(self.stat_fc(stat_features))
        
        # Combine features
        combined = torch.cat([pooled, stat_out], dim=1)
        
        x = F.relu(self.fc1(combined))
        x = self.dropout(x)
        x = F.relu(self.fc2(x))
        x = self.dropout(x)
        output = self.fc3(x)
        
        return output