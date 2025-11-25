import { Shield, Twitter, Github, Mail } from "lucide-react";
import { Link } from "../App";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function Footer() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00E5FF] to-[#00E5FF]/50 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#0A0F1C]" />
                </div>
                <div>
                  <div className="text-xl text-[#E2E8F0]">Kilinda-Sauti</div>
                  <div className="text-xs text-[#94A3B8]">Truth in Every Voice</div>
                </div>
              </div>
              <p className="text-sm text-[#94A3B8] max-w-md">
                Kenya's sovereign deepfake and misinformation detection platform. 
                Protecting democratic discourse through advanced AI forensics.
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://twitter.com/kilinda_sauti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/kilinda-sauti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:info@kilinda-sauti.ke" 
                  className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#E2E8F0] mb-4">Platform</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                  Analyze Content
                </Link>
                <Link href="/reports" className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                  View Reports
                </Link>
                <Link href="/about" className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                  About Us
                </Link>
                <Link href="/about#api" className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                  API Docs
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[#E2E8F0] mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <Link href="/about#privacy" className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/about#terms" className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                  Terms of Service
                </Link>
                <Link href="/about#data" className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                  Data Protection
                </Link>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors text-left"
                >
                  Contact DCI
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94A3B8]">
            <p>© 2025 Kilinda-Sauti. Built for NIRU AI Hackathon 2025.</p>
            <p>Made with ❤️ in Kenya 🇰🇪</p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}