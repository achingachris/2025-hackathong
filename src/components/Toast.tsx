import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type = "info", onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />
  };

  const colors = {
    success: { bg: "#10B981", border: "#10B981" },
    error: { bg: "#FF6B6B", border: "#FF6B6B" },
    info: { bg: "#00E5FF", border: "#00E5FF" }
  };

  const { bg, border } = colors[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 max-w-md"
    >
      <div
        className="bg-[#1E293B]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border flex items-center gap-3"
        style={{ borderColor: border }}
      >
        <div style={{ color: bg }}>{icons[type]}</div>
        <p className="text-[#E2E8F0] flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
