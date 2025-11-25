import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { Link } from "../App";

interface RecentCheck {
  id: string;
  thumbnail?: string;
  verdict: "synthetic" | "authentic" | "uncertain";
  confidence: number;
  timestamp: string;
}

export function RecentCheckCard({ check }: { check: RecentCheck }) {
  const verdictColors = {
    synthetic: { bg: "#FF6B6B", text: "SYNTHETIC" },
    authentic: { bg: "#10B981", text: "AUTHENTIC" },
    uncertain: { bg: "#F59E0B", text: "UNCERTAIN" }
  };

  const { bg, text } = verdictColors[check.verdict];

  return (
    <Link href={`/analyze/${check.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex-shrink-0 w-64 bg-[#1E293B]/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 cursor-pointer"
      >
        {/* Thumbnail */}
        <div className="aspect-video bg-[#0F172A] relative">
          {check.thumbnail ? (
            <img src={check.thumbnail} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#94A3B8]">
              No preview
            </div>
          )}
          
          {/* Verdict badge */}
          <div 
            className="absolute top-2 right-2 px-3 py-1 rounded-full text-xs backdrop-blur-md"
            style={{ 
              backgroundColor: `${bg}30`,
              border: `1px solid ${bg}`,
              color: bg
            }}
          >
            {text}
          </div>
        </div>
        
        {/* Info */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#E2E8F0]">{check.confidence}% confidence</span>
            <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
              <Clock className="w-3 h-3" />
              {check.timestamp}
            </div>
          </div>
          <div className="text-xs text-[#94A3B8] truncate">ID: {check.id}</div>
        </div>
      </motion.div>
    </Link>
  );
}