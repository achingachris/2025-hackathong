import { motion } from "motion/react";
import { Eye } from "lucide-react";

export function BlinkTimeline() {
  const blinks = [
    { time: 2.1, natural: true },
    { time: 4.3, natural: true },
    { time: 7.8, natural: false },
    { time: 11.2, natural: true },
    { time: 15.7, natural: false },
    { time: 19.3, natural: true },
    { time: 23.1, natural: false },
    { time: 28.4, natural: true },
  ];

  const duration = 30;

  return (
    <div className="space-y-4">
      <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#00E5FF]/20">
        <div className="flex items-center gap-2 mb-4">
          <Eye className="w-5 h-5 text-[#00E5FF]" />
          <h4 className="text-[#E2E8F0]">Eye Blink Analysis</h4>
        </div>
        
        <div className="relative h-32 bg-[#0A0F1C] rounded-xl p-4">
          {/* Timeline */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-white/10 -translate-y-1/2" />
          
          {/* Blink markers */}
          {blinks.map((blink, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${(blink.time / duration) * 100}%` }}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  blink.natural 
                    ? 'bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)]' 
                    : 'bg-[#FF6B6B] shadow-[0_0_10px_rgba(255,107,107,0.8)]'
                }`}
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#94A3B8] whitespace-nowrap">
                {blink.time}s
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#10B981] rounded-full" />
            <span className="text-[#94A3B8]">Natural ({blinks.filter(b => b.natural).length})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF6B6B] rounded-full" />
            <span className="text-[#94A3B8]">Anomalous ({blinks.filter(b => !b.natural).length})</span>
          </div>
        </div>
      </div>
      
      <div className="bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 rounded-2xl p-4">
        <p className="text-sm text-[#FF6B6B]">
          <strong>Alert:</strong> Blink rate 37% below natural human baseline. Likely AI-generated.
        </p>
      </div>
    </div>
  );
}
