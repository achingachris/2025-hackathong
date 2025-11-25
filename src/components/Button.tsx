import { motion } from "motion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  children: ReactNode;
  className?: string;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#00E5FF] text-[#0A0F1C] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:scale-105",
    secondary: "bg-[#1E293B] text-[#E2E8F0] hover:bg-[#334155]",
    outline: "border-2 border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#0A0F1C]",
    danger: "bg-[#FF6B6B] text-white hover:shadow-[0_0_20px_rgba(255,107,107,0.5)] hover:scale-105"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
