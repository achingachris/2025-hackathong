import { motion } from "motion/react";
import { useEffect } from "react";
import { useRouterHook } from "../App";

export function ProcessingPage() {
  const { push } = useRouterHook();

  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timer = setTimeout(() => {
      push("/analyze/demo");
    }, 3000);
    return () => clearTimeout(timer);
  }, [push]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Pulsing Ring */}
        <motion.div
          className="relative mx-auto mb-8"
          style={{ width: 200, height: 200 }}
        >
          {/* Outer pulse */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full border-4 border-[#00E5FF]"
          />
          
          {/* Middle pulse */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="absolute inset-4 rounded-full border-4 border-[#00E5FF]"
          />
          
          {/* Inner ring */}
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-8 rounded-full border-4 border-transparent border-t-[#00E5FF]"
            style={{ boxShadow: "0 0 20px rgba(0, 229, 255, 0.5)" }}
          />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl"
            >
              🔍
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl text-[#E2E8F0] mb-4">
            Analyzing Content
          </h2>
          <p className="text-[#94A3B8] mb-6">
            Running multi-modal forensic analysis...
          </p>
          
          {/* Progress steps */}
          <div className="max-w-md mx-auto space-y-3">
            {[
              { label: "Audio extraction", delay: 0 },
              { label: "Visual frame analysis", delay: 0.5 },
              { label: "Text & metadata scan", delay: 1 },
              { label: "Network amplification check", delay: 1.5 }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: step.delay }}
                className="flex items-center gap-3 bg-[#1E293B]/60 rounded-2xl px-4 py-3 border border-white/5"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: step.delay
                  }}
                  className="w-2 h-2 rounded-full bg-[#00E5FF]"
                  style={{ boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)" }}
                />
                <span className="text-sm text-[#94A3B8]">{step.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-6 text-sm text-[#00E5FF]"
          >
            Estimated time: 1.8s
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}