import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ScoreBarProps {
  label: string;
  score: number;
  weight: number;
  icon?: React.ReactNode;
  delay?: number;
}

export function ScoreBar({ label, score, weight, icon, delay = 0 }: ScoreBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(score), delay);
    return () => clearTimeout(timer);
  }, [score, delay]);

  const getColor = () => {
    if (score >= 70) return "#FF6B6B";
    if (score >= 40) return "#F59E0B";
    return "#10B981";
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-[#00E5FF]">{icon}</span>}
          <span className="text-[#E2E8F0]">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#94A3B8]">Weight: {weight}%</span>
          <span className="text-[#E2E8F0]" style={{ color: getColor() }}>
            {score}%
          </span>
        </div>
      </div>
      
      <div className="h-3 bg-[#0F172A] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, delay: delay / 1000 }}
          className="h-full rounded-full"
          style={{
            backgroundColor: getColor(),
            boxShadow: `0 0 10px ${getColor()}`
          }}
        />
      </div>
    </div>
  );
}
