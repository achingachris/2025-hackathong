import { motion } from "motion/react";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "../App";
import { ContactModal } from "./ContactModal";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E5FF] to-[#00E5FF]/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                <Shield className="w-7 h-7 text-[#0A0F1C]" />
              </motion.div>
              <div>
                <h1 className="text-2xl text-[#E2E8F0] group-hover:text-[#00E5FF] transition-colors">
                  Kilinda-Sauti
                </h1>
                <p className="text-xs text-[#94A3B8]">Truth in Every Voice</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                Analyze
              </Link>
              <Link href="/reports" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                Reports
              </Link>
              <Link href="/about" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                About
              </Link>
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-6 py-2 rounded-2xl bg-[#00E5FF] text-[#0A0F1C] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all"
              >
                Contact DCI
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#E2E8F0]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 space-y-4"
            >
              <Link
                href="/"
                className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Analyze
              </Link>
              <Link
                href="/reports"
                className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reports
              </Link>
              <Link
                href="/about"
                className="block text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <button
                onClick={() => {
                  setContactModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-2xl bg-[#00E5FF] text-[#0A0F1C]"
              >
                Contact DCI
              </button>
            </motion.nav>
          )}
        </div>
      </header>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}