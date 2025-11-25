import { motion } from "motion/react";

export function Spectrogram() {
  // Generate mock spectrogram bars
  const bars = Array.from({ length: 60 }, (_, i) => ({
    height: Math.random() * 100,
    suspicious: i % 8 === 0 || i % 13 === 0
  }));

  return (
    <div className="space-y-4">
      <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#00E5FF]/20">
        <div className="flex items-end gap-1 h-48">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${bar.height}%` }}
              transition={{ delay: i * 0.01, duration: 0.3 }}
              className={`flex-1 rounded-t ${
                bar.suspicious 
                  ? 'bg-gradient-to-t from-[#FF6B6B] to-[#FF6B6B]/50' 
                  : 'bg-gradient-to-t from-[#00E5FF] to-[#00E5FF]/50'
              }`}
              style={{
                boxShadow: bar.suspicious 
                  ? '0 0 10px rgba(255, 107, 107, 0.5)' 
                  : '0 0 5px rgba(0, 229, 255, 0.3)'
              }}
            />
          ))}
        </div>
        
        <div className="mt-4 flex justify-between text-xs text-[#94A3B8]">
          <span>0s</span>
          <span>30s</span>
          <span>60s</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
          <div className="text-xs text-[#94A3B8] mb-1">Detected Engine</div>
          <div className="text-lg text-[#FF6B6B]">ElevenLabs (87% match)</div>
        </div>
        <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
          <div className="text-xs text-[#94A3B8] mb-1">Accent Profile</div>
          <div className="text-lg text-[#E2E8F0]">Nairobi Urban</div>
        </div>
      </div>
    </div>
  );
}
