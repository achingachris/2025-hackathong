import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  verdict?: string;
}

export function ProgressRing({ 
  percentage, 
  size = 280, 
  strokeWidth = 16,
  label = "CONFIDENCE SCORE",
  verdict = "LIKELY SYNTHETIC"
}: ProgressRingProps) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getColor = () => {
    if (percentage >= 70) return "#FF6B6B"; // Danger - likely fake
    if (percentage >= 40) return "#F59E0B"; // Warning
    return "#10B981"; // Success - likely real
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1E293B"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={getColor()}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 10px ${getColor()})`
            }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            className="text-center"
          >
            <div className="text-6xl mb-2" style={{ color: getColor() }}>
              {Math.round(progress)}%
            </div>
            <div className="text-xs text-[#94A3B8] tracking-wider">{label}</div>
          </motion.div>
        </div>
      </div>
      
      {verdict && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="px-6 py-3 rounded-2xl"
          style={{ 
            backgroundColor: `${getColor()}20`,
            color: getColor(),
            border: `2px solid ${getColor()}`
          }}
        >
          {verdict}
        </motion.div>
      )}
    </div>
  );
}
