import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { useRef, useState } from "react";

interface AnomalyMarker {
  time: number;
  type: "audio" | "visual" | "sync";
}

interface VideoPlayerProps {
  thumbnail?: string;
  anomalies?: AnomalyMarker[];
}

export function VideoPlayer({ thumbnail, anomalies = [] }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(23);
  const duration = 120; // 2 minutes mock

  return (
    <div className="space-y-4">
      {/* Video area */}
      <div className="relative aspect-video bg-[#0F172A] rounded-3xl overflow-hidden group">
        {thumbnail ? (
          <img src={thumbnail} alt="Video" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Play className="w-20 h-20 text-[#00E5FF]" />
          </div>
        )}
        
        {/* Controls overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
            {/* Timeline with anomaly markers */}
            <div className="relative h-2 bg-white/20 rounded-full cursor-pointer">
              <div 
                className="absolute h-full bg-[#00E5FF] rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
              {anomalies.map((anomaly, i) => (
                <div
                  key={i}
                  className="absolute top-0 w-1 h-full bg-[#FF6B6B] shadow-[0_0_10px_#FF6B6B]"
                  style={{ left: `${(anomaly.time / duration) * 100}%` }}
                  title={`${anomaly.type} anomaly at ${anomaly.time}s`}
                />
              ))}
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-[#00E5FF] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-[#0A0F1C]" />
                  ) : (
                    <Play className="w-6 h-6 text-[#0A0F1C] ml-1" />
                  )}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:text-[#00E5FF] transition-colors"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
                <span className="text-white">
                  {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
                </span>
              </div>
              <button className="text-white hover:text-[#00E5FF] transition-colors">
                <Maximize className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Anomaly legend */}
      {anomalies.length > 0 && (
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF6B6B] rounded-full" />
            <span className="text-[#94A3B8]">{anomalies.length} anomalies detected</span>
          </div>
        </div>
      )}
    </div>
  );
}
