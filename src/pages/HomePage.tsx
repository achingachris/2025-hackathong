import { motion } from "motion/react";
import { Upload, Link as LinkIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { RecentCheckCard } from "../components/RecentCheckCard";
import { useRouterHook, Link } from "../App";

const recentChecks = [
  {
    id: "KS-2025-00147",
    verdict: "synthetic" as const,
    confidence: 94,
    timestamp: "2 min ago"
  },
  {
    id: "KS-2025-00146",
    verdict: "authentic" as const,
    confidence: 87,
    timestamp: "15 min ago"
  },
  {
    id: "KS-2025-00145",
    verdict: "uncertain" as const,
    confidence: 52,
    timestamp: "1 hr ago"
  },
  {
    id: "KS-2025-00144",
    verdict: "synthetic" as const,
    confidence: 91,
    timestamp: "3 hrs ago"
  }
];

export function HomePage() {
  const [url, setUrl] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const { push } = useRouterHook();

  const handleAnalyze = () => {
    // Navigate to mock analysis page
    push("/analyze/demo");
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-sm text-[#00E5FF]">Powered by Sovereign AI</span>
          </motion.div>

          <h1 className="mb-6 bg-gradient-to-r from-[#E2E8F0] to-[#00E5FF] bg-clip-text text-transparent">
            Kilinda-Sauti
          </h1>
          
          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-2xl mx-auto mb-4">
            Kenya's Deepfake & Misinformation Detector
          </p>
          
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            Advanced forensic analysis for audio, video, and text authenticity.
            Protecting truth in the digital age.
          </p>
        </motion.div>

        {/* Upload Section */}
        <GlassCard className="max-w-3xl mx-auto mb-12">
          {/* Dropzone */}
          <div
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              setDragActive(false);
              handleAnalyze();
            }}
            className={`
              relative border-2 border-dashed rounded-3xl p-12 text-center transition-all cursor-pointer
              ${dragActive 
                ? 'border-[#00E5FF] bg-[#00E5FF]/5' 
                : 'border-[#94A3B8]/30 hover:border-[#00E5FF]/50'
              }
            `}
          >
            <Upload className="w-16 h-16 text-[#00E5FF] mx-auto mb-4" />
            <h3 className="text-xl text-[#E2E8F0] mb-2">
              Drop your file here
            </h3>
            <p className="text-[#94A3B8] mb-4">
              Video, audio, or image • Max 500MB
            </p>
            <Button variant="secondary">
              Choose File
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[#1E293B] text-[#94A3B8]">or paste URL</span>
            </div>
          </div>

          {/* URL Input */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                <input
                  type="text"
                  placeholder="https://twitter.com/... or YouTube URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="
                    w-full pl-12 pr-4 py-4 rounded-2xl
                    bg-[#0F172A] border border-white/10
                    text-[#E2E8F0] placeholder:text-[#94A3B8]
                    focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.2)]
                    transition-all
                  "
                />
              </div>
              <Button onClick={handleAnalyze}>
                Analyze Now
              </Button>
            </div>
            
            <p className="text-xs text-[#94A3B8] text-center">
              Supports: Twitter/X, YouTube, Facebook, TikTok, Instagram, WhatsApp
            </p>
          </div>
        </GlassCard>

        {/* Recent Checks */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-[#E2E8F0]">Recent Analyses</h2>
            <Link href="/reports" className="text-[#00E5FF] hover:underline">
              View all →
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {recentChecks.map((check) => (
              <RecentCheckCard key={check.id} check={check} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard hover={false}>
            <div className="text-center">
              <div className="text-4xl text-[#00E5FF] mb-2">12,847</div>
              <div className="text-[#94A3B8]">Content Analyzed</div>
            </div>
          </GlassCard>
          <GlassCard hover={false}>
            <div className="text-center">
              <div className="text-4xl text-[#FF6B6B] mb-2">3,241</div>
              <div className="text-[#94A3B8]">Deepfakes Detected</div>
            </div>
          </GlassCard>
          <GlassCard hover={false}>
            <div className="text-center">
              <div className="text-4xl text-[#10B981] mb-2">94.3%</div>
              <div className="text-[#94A3B8]">Accuracy Rate</div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}