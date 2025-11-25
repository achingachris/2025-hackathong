import { motion } from "motion/react";
import { Share2, Download, Send, Eye, Clock, Globe, Copy, CheckCircle2, AlertTriangle, Shield, TrendingUp, Users, Target } from "lucide-react";
import { useState } from "react";
import { ProgressRing } from "../components/ProgressRing";
import { ScoreBar } from "../components/ScoreBar";
import { VideoPlayer } from "../components/VideoPlayer";
import { CollapsibleSection } from "../components/CollapsibleSection";
import { Spectrogram } from "../components/Spectrogram";
import { BlinkTimeline } from "../components/BlinkTimeline";
import { NetworkGraph } from "../components/NetworkGraph";
import { Button } from "../components/Button";
import { Mic, Video, FileText, Network } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { ContactModal } from "../components/ContactModal";

export function AnalysisPage() {
  const [copied, setCopied] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const anomalies = [
    { time: 12, type: "audio" as const },
    { time: 34, type: "visual" as const },
    { time: 56, type: "sync" as const },
    { time: 78, type: "audio" as const },
    { time: 95, type: "visual" as const },
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-[#1E293B]/60 backdrop-blur-xl rounded-3xl p-6 border border-white/5"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-[#94A3B8]">Case ID:</span>
              <span className="px-3 py-1 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] text-sm border border-[#00E5FF]/30">
                KS-2025-00147
              </span>
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <Clock className="w-4 h-4" />
                Nov 25, 2025 14:32 EAT
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
              <Globe className="w-4 h-4" />
              <span className="truncate max-w-md">
                https://twitter.com/example/status/1234567890
              </span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2" onClick={handleCopy}>
              {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
            <Button variant="secondary" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Main Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Progress Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center bg-[#1E293B]/60 backdrop-blur-xl rounded-3xl p-8 border border-white/5"
          >
            <ProgressRing percentage={94} verdict="LIKELY SYNTHETIC" />
          </motion.div>

          {/* Right: Module Scores */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 bg-[#1E293B]/60 backdrop-blur-xl rounded-3xl p-8 border border-white/5"
          >
            <h3 className="text-xl text-[#E2E8F0] mb-6">Forensic Breakdown</h3>
            
            <ScoreBar
              label="Audio Forensics"
              score={91}
              weight={30}
              icon={<Mic className="w-5 h-5" />}
              delay={200}
            />
            
            <ScoreBar
              label="Visual Forensics"
              score={89}
              weight={35}
              icon={<Video className="w-5 h-5" />}
              delay={400}
            />
            
            <ScoreBar
              label="Text & Propaganda"
              score={67}
              weight={20}
              icon={<FileText className="w-5 h-5" />}
              delay={600}
            />
            
            <ScoreBar
              label="Network Analysis"
              score={82}
              weight={15}
              icon={<Network className="w-5 h-5" />}
              delay={800}
            />

            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-[#94A3B8]">
                Weighted score calculated from multi-modal AI forensics. 
                <span className="text-[#FF6B6B]"> High confidence of synthetic manipulation.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Detailed Classification Report */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <GlassCard>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/20 border border-[#FF6B6B]/30 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-[#FF6B6B]" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#E2E8F0]">Detailed Classification Report</h3>
                  <p className="text-sm text-[#94A3B8]">Comprehensive analysis and risk assessment</p>
                </div>
              </div>

              {/* Classification Summary */}
              <div className="bg-[#FF6B6B]/10 border-2 border-[#FF6B6B]/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-[#FF6B6B] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-lg text-[#E2E8F0] mb-2">Content Classification: DEEPFAKE / SYNTHETIC MEDIA</h4>
                    <p className="text-[#94A3B8] mb-4">
                      This content has been classified as <span className="text-[#FF6B6B]">highly likely to be synthetically generated or manipulated</span> using AI-based deepfake technology. Multiple forensic indicators across audio, visual, and metadata analysis support this classification.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-[#0F172A] rounded-xl p-3 border border-white/10">
                        <div className="text-xs text-[#94A3B8] mb-1">Confidence Level</div>
                        <div className="text-xl text-[#FF6B6B]">94%</div>
                      </div>
                      <div className="bg-[#0F172A] rounded-xl p-3 border border-white/10">
                        <div className="text-xs text-[#94A3B8] mb-1">Risk Level</div>
                        <div className="text-xl text-[#FF6B6B]">CRITICAL</div>
                      </div>
                      <div className="bg-[#0F172A] rounded-xl p-3 border border-white/10">
                        <div className="text-xs text-[#94A3B8] mb-1">Threat Category</div>
                        <div className="text-xl text-[#FF6B6B]">Political</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div className="space-y-4">
                <h4 className="text-lg text-[#E2E8F0]">Key Findings</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Audio Analysis */}
                  <div className="bg-[#0F172A] rounded-2xl p-5 border border-[#FF6B6B]/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Mic className="w-5 h-5 text-[#FF6B6B]" />
                      <h5 className="text-[#E2E8F0]">Audio Manipulation Detected</h5>
                    </div>
                    <ul className="space-y-2 text-sm text-[#94A3B8]">
                      <li>• Voice cloning artifacts present (confidence: 91%)</li>
                      <li>• Unnatural frequency patterns in 2.5-4kHz range</li>
                      <li>• Spectral inconsistencies at phrase boundaries</li>
                      <li>• Missing environmental acoustics</li>
                    </ul>
                  </div>

                  {/* Visual Analysis */}
                  <div className="bg-[#0F172A] rounded-2xl p-5 border border-[#FF6B6B]/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Video className="w-5 h-5 text-[#FF6B6B]" />
                      <h5 className="text-[#E2E8F0]">Visual Inconsistencies</h5>
                    </div>
                    <ul className="space-y-2 text-sm text-[#94A3B8]">
                      <li>• Abnormal blinking patterns (0.2 blinks/min vs 15-20 normal)</li>
                      <li>• Lip-sync desynchronization (±180ms)</li>
                      <li>• Face boundary artifacts detected</li>
                      <li>• Lighting inconsistencies on facial features</li>
                    </ul>
                  </div>

                  {/* Text Analysis */}
                  <div className="bg-[#0F172A] rounded-2xl p-5 border border-[#F59E0B]/30">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-5 h-5 text-[#F59E0B]" />
                      <h5 className="text-[#E2E8F0]">Propaganda Indicators</h5>
                    </div>
                    <ul className="space-y-2 text-sm text-[#94A3B8]">
                      <li>• Emotional manipulation techniques identified</li>
                      <li>• Authority undermining narrative (67% score)</li>
                      <li>• 89% similarity to known disinformation cluster</li>
                      <li>• Crisis framing and urgency tactics used</li>
                    </ul>
                  </div>

                  {/* Network Analysis */}
                  <div className="bg-[#0F172A] rounded-2xl p-5 border border-[#F59E0B]/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Network className="w-5 h-5 text-[#F59E0B]" />
                      <h5 className="text-[#E2E8F0]">Distribution Patterns</h5>
                    </div>
                    <ul className="space-y-2 text-sm text-[#94A3B8]">
                      <li>• Coordinated amplification detected (82% confidence)</li>
                      <li>• 47 bot accounts identified in sharing network</li>
                      <li>• Rapid spread pattern (2,400 shares in 3 hours)</li>
                      <li>• Linked to previously flagged disinformation campaign</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF6B6B]/5 border border-[#FF6B6B]/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-[#FF6B6B] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-lg text-[#E2E8F0] mb-3">Impact & Risk Assessment</h4>
                    <div className="space-y-3 text-sm text-[#94A3B8]">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#E2E8F0]">Viral Potential:</span> HIGH - Content has already reached 2,400+ users with exponential growth trajectory
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#E2E8F0]">Target Audience:</span> Kenyan citizens, particularly those engaged in political discourse
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#E2E8F0]">Potential Harm:</span> Political instability, erosion of trust in institutions, incitement of public unrest
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Actions */}
              <div className="bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-2xl p-6">
                <h4 className="text-lg text-[#E2E8F0] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  Recommended Actions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm text-[#00E5FF]">Immediate Actions:</div>
                    <ul className="space-y-1 text-sm text-[#94A3B8]">
                      <li>✓ Flag content on platform for review</li>
                      <li>✓ Report to platform moderators</li>
                      <li>✓ Share this analysis with community</li>
                      <li>✓ Avoid resharing or amplifying</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-[#00E5FF]">Escalation Options:</div>
                    <ul className="space-y-1 text-sm text-[#94A3B8]">
                      <li>✓ Submit report to DCI Cybercrime Unit</li>
                      <li>✓ Request expert forensic verification</li>
                      <li>✓ File legal complaint if appropriate</li>
                      <li>✓ Coordinate with fact-checking organizations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Evidence Summary */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-lg text-[#E2E8F0] mb-4">Evidence Summary</h4>
                <div className="bg-[#0F172A] rounded-2xl p-5 border border-white/10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl text-[#FF6B6B] mb-1">17</div>
                      <div className="text-xs text-[#94A3B8]">Audio Anomalies</div>
                    </div>
                    <div>
                      <div className="text-2xl text-[#FF6B6B] mb-1">23</div>
                      <div className="text-xs text-[#94A3B8]">Visual Artifacts</div>
                    </div>
                    <div>
                      <div className="text-2xl text-[#F59E0B] mb-1">8</div>
                      <div className="text-xs text-[#94A3B8]">Propaganda Markers</div>
                    </div>
                    <div>
                      <div className="text-2xl text-[#FF6B6B] mb-1">47</div>
                      <div className="text-xs text-[#94A3B8]">Bot Accounts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8 bg-[#1E293B]/60 backdrop-blur-xl rounded-3xl p-6 border border-white/5"
        >
          <h3 className="text-xl text-[#E2E8F0] mb-4">Source Content</h3>
          <VideoPlayer anomalies={anomalies} />
        </motion.div>

        {/* Forensic Sections */}
        <div className="space-y-6">
          <CollapsibleSection
            title="Audio Forensics"
            icon={<Mic className="w-6 h-6" />}
            defaultOpen={true}
          >
            <Spectrogram />
          </CollapsibleSection>

          <CollapsibleSection
            title="Visual Forensics"
            icon={<Eye className="w-6 h-6" />}
          >
            <div className="space-y-6">
              <BlinkTimeline />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
                  <div className="text-xs text-[#94A3B8] mb-1">Lip-Sync Error</div>
                  <div className="text-lg text-[#FF6B6B]">±180ms average</div>
                </div>
                <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
                  <div className="text-xs text-[#94A3B8] mb-1">Face Consistency</div>
                  <div className="text-lg text-[#FF6B6B]">73% (Low)</div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Text & Propaganda Analysis"
            icon={<FileText className="w-6 h-6" />}
          >
            <div className="space-y-4">
              <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#00E5FF]/20">
                <h4 className="text-[#E2E8F0] mb-3">Transcript</h4>
                <p className="text-[#94A3B8] mb-4">
                  "Wakenya, lazima tuangalie ukweli wa mambo. Serikali imefanya makosa makubwa..."
                </p>
                <p className="text-[#E2E8F0] text-sm italic">
                  Translation: "Kenyans, we must look at the truth of things. The government has made big mistakes..."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 rounded-2xl p-4">
                  <div className="text-xs text-[#94A3B8] mb-2">Propaganda Triggers</div>
                  <div className="space-y-1 text-sm">
                    <div className="text-[#FF6B6B]">• Emotional manipulation</div>
                    <div className="text-[#FF6B6B]">• Authority undermining</div>
                    <div className="text-[#FF6B6B]">• Crisis framing</div>
                  </div>
                </div>
                <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
                  <div className="text-xs text-[#94A3B8] mb-1">PolitiKweli Match</div>
                  <div className="text-lg text-[#FF6B6B]">89% similar to known disinfo cluster</div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Network Forensics"
            icon={<Network className="w-6 h-6" />}
          >
            <NetworkGraph />
          </CollapsibleSection>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 bg-[#1E293B]/95 backdrop-blur-xl border-t border-white/10 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p className="text-[#94A3B8]">
              Need expert verification or legal action?
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button variant="secondary" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="gap-2" onClick={() => setContactModalOpen(true)}>
                <Send className="w-4 h-4" />
                Send to DCI
              </Button>
              <Button variant="primary" className="gap-2" onClick={() => setContactModalOpen(true)}>
                <Eye className="w-4 h-4" />
                Request Expert Review
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}