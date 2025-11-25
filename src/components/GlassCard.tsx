import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { scale: 1.02 } : {}}
      className={`
        bg-[#1E293B]/80 backdrop-blur-xl rounded-3xl p-6
        border border-white/5
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
        ${hover ? 'hover:shadow-[0_0_30px_rgba(0,229,255,0.15),inset_0_1px_0_0_rgba(255,255,255,0.05)]' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
