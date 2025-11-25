import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./Button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1E293B] border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl text-[#E2E8F0] mb-2">Contact DCI Cybercrime Unit</h3>
                  <p className="text-sm text-[#94A3B8]">
                    Report deepfakes and misinformation to Kenya's authorities
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-1">24/7 Hotline</div>
                      <div className="text-[#E2E8F0]">+254-20-341-0000</div>
                      <div className="text-[#E2E8F0]">0800-722-203 (Toll Free)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-1">Email</div>
                      <a
                        href="mailto:cybercrime@cid.go.ke"
                        className="text-[#00E5FF] hover:underline"
                      >
                        cybercrime@cid.go.ke
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-1">Office Location</div>
                      <div className="text-[#E2E8F0]">
                        DCI Headquarters, Kiambu Road<br />
                        Nairobi, Kenya
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/30 rounded-2xl p-4 mb-6">
                <h4 className="text-[#E2E8F0] mb-3">Quick Report Actions</h4>
                <div className="space-y-2 text-sm text-[#94A3B8]">
                  <p>✓ Have your analysis report ready (Case ID: KS-2025-XXXXX)</p>
                  <p>✓ Include source URL and any additional context</p>
                  <p>✓ Attach screenshots or evidence files</p>
                  <p>✓ Note the date and time of discovery</p>
                </div>
              </div>

              {/* External Links */}
              <div className="space-y-3">
                <a
                  href="https://www.cid.go.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#0F172A] rounded-2xl border border-white/5 hover:border-[#00E5FF]/30 transition-all group"
                >
                  <span className="text-[#E2E8F0] group-hover:text-[#00E5FF] transition-colors">
                    DCI Official Website
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#00E5FF] transition-colors" />
                </a>

                <a
                  href="https://www.cid.go.ke/cybercrime-report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#0F172A] rounded-2xl border border-white/5 hover:border-[#00E5FF]/30 transition-all group"
                >
                  <span className="text-[#E2E8F0] group-hover:text-[#00E5FF] transition-colors">
                    Online Report Portal
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#00E5FF] transition-colors" />
                </a>
              </div>

              {/* Warning */}
              <div className="mt-6 p-4 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-2xl">
                <p className="text-xs text-[#94A3B8]">
                  <span className="text-[#F59E0B]">Note:</span> For emergencies or immediate threats, please call 999 or 112.
                  False reports are a criminal offense under the Computer Misuse and Cybercrimes Act 2018.
                </p>
              </div>

              {/* Close Button */}
              <div className="mt-6 flex justify-end">
                <Button onClick={onClose} variant="secondary">
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
