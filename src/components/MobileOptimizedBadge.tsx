import { motion } from "motion/react";
import { Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileOptimizedBadge() {
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show || !isMobile) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-24 left-4 right-4 z-40 md:hidden"
    >
      <div className="bg-[#00E5FF]/10 backdrop-blur-xl border border-[#00E5FF]/30 rounded-2xl p-3 flex items-center gap-3">
        <Smartphone className="w-5 h-5 text-[#00E5FF] flex-shrink-0" />
        <div className="flex-1 text-sm">
          <p className="text-[#00E5FF]">Mobile-First Design</p>
          <p className="text-xs text-[#94A3B8]">Optimized for your device</p>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-[#94A3B8] hover:text-[#00E5FF]"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
}
