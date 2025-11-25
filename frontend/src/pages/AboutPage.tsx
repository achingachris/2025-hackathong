import { motion } from "motion/react";
import { Shield, Target, Users, Zap, Globe, Lock } from "lucide-react";
import { GlassCard } from "../components/GlassCard";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Sovereign AI",
    description: "Built in Kenya, for Kenya. Your data stays within our borders."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-time Analysis",
    description: "Multi-modal forensics in under 2 seconds per content piece."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Multi-Platform",
    description: "Works with Twitter/X, YouTube, Facebook, TikTok, WhatsApp, and more."
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Privacy First",
    description: "End-to-end encryption and zero data retention policy."
  }
];

const team = [
  {
    name: "Dr. Amani Mwangi",
    role: "AI Research Lead",
    specialty: "Deepfake Detection"
  },
  {
    name: "James Ochieng",
    role: "Security Architect",
    specialty: "Forensic Systems"
  },
  {
    name: "Sarah Wanjiru",
    role: "Data Scientist",
    specialty: "NLP & Propaganda Analysis"
  },
  {
    name: "Kevin Mutua",
    role: "Full Stack Engineer",
    specialty: "Platform Development"
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#00E5FF] to-[#00E5FF]/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              <Shield className="w-9 h-9 text-[#0A0F1C]" />
            </div>
          </div>
          <h1 className="mb-6">About Kilinda-Sauti</h1>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Kenya's first sovereign deepfake and misinformation detection platform. 
            Empowering truth, protecting democracy, one analysis at a time.
          </p>
        </motion.div>

        {/* Mission */}
        <GlassCard className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Target className="w-8 h-8 text-[#00E5FF] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl mb-4">Our Mission</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                In an era where synthetic media threatens the fabric of truth, Kilinda-Sauti stands as Kenya's 
                digital guardian. We combine cutting-edge AI forensics with local context awareness to detect 
                deepfakes, manipulated audio, and coordinated misinformation campaigns before they spread.
              </p>
              <p className="text-[#94A3B8] leading-relaxed mt-4">
                Our name, "Kilinda-Sauti" (Swahili: "Protect the Voice"), reflects our commitment to preserving 
                authentic communication in Kenya's digital ecosystem. Built during the NIRU AI Hackathon 2025, 
                we're proud to serve as a defense mechanism for democratic discourse.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl text-center mb-8">Platform Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div className="text-[#00E5FF]">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl mb-2">{feature.title}</h3>
                      <p className="text-[#94A3B8]">{feature.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <GlassCard className="mb-12">
          <h2 className="text-2xl mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Next.js 15",
              "Tailwind CSS",
              "Motion/React",
              "PyTorch",
              "Whisper AI",
              "OpenCV",
              "Recharts",
              "Supabase"
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#0F172A] rounded-2xl p-4 text-center border border-white/5 hover:border-[#00E5FF]/30 transition-colors"
              >
                <span className="text-[#E2E8F0]">{tech}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* Team */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-[#00E5FF]" />
            <h2 className="text-2xl">The Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#00E5FF]/30 mx-auto mb-4 flex items-center justify-center text-3xl">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-[#00E5FF] mb-2">{member.role}</p>
                    <p className="text-xs text-[#94A3B8]">{member.specialty}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <GlassCard className="text-center">
          <h2 className="text-2xl mb-4">Partner With Us</h2>
          <p className="text-[#94A3B8] mb-6 max-w-2xl mx-auto">
            We're working with government agencies, media organizations, and civil society to combat 
            misinformation at scale. Interested in collaboration?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-2xl bg-[#00E5FF] text-[#0A0F1C] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all">
              Contact Us
            </button>
            <button className="px-8 py-3 rounded-2xl border-2 border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#0A0F1C] transition-all">
              View Documentation
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
