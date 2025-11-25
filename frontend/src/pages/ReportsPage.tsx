import { motion } from "motion/react";
import { Search, Filter, Download, Eye } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Link } from "../App";

const reports = [
  {
    id: "KS-2025-00147",
    date: "Nov 25, 2025 14:32",
    source: "Twitter/X",
    verdict: "SYNTHETIC",
    confidence: 94,
    type: "Video"
  },
  {
    id: "KS-2025-00146",
    date: "Nov 25, 2025 12:18",
    source: "YouTube",
    verdict: "AUTHENTIC",
    confidence: 87,
    type: "Audio"
  },
  {
    id: "KS-2025-00145",
    date: "Nov 25, 2025 09:45",
    source: "Facebook",
    verdict: "UNCERTAIN",
    confidence: 52,
    type: "Image"
  },
  {
    id: "KS-2025-00144",
    date: "Nov 24, 2025 18:22",
    source: "TikTok",
    verdict: "SYNTHETIC",
    confidence: 91,
    type: "Video"
  },
  {
    id: "KS-2025-00143",
    date: "Nov 24, 2025 15:30",
    source: "WhatsApp",
    verdict: "AUTHENTIC",
    confidence: 89,
    type: "Audio"
  },
  {
    id: "KS-2025-00142",
    date: "Nov 24, 2025 11:05",
    source: "Instagram",
    verdict: "SYNTHETIC",
    confidence: 96,
    type: "Video"
  }
];

export function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "SYNTHETIC": return "#FF6B6B";
      case "AUTHENTIC": return "#10B981";
      case "UNCERTAIN": return "#F59E0B";
      default: return "#94A3B8";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="mb-4">Analysis Reports</h1>
          <p className="text-[#94A3B8]">
            Browse and manage all forensic analyses
          </p>
        </motion.div>

        {/* Search & Filters */}
        <GlassCard className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search by Case ID, source, or date..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  w-full pl-12 pr-4 py-3 rounded-2xl
                  bg-[#0F172A] border border-white/10
                  text-[#E2E8F0] placeholder:text-[#94A3B8]
                  focus:outline-none focus:border-[#00E5FF]
                  transition-all
                "
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1E293B] text-[#E2E8F0] hover:bg-[#334155] transition-colors">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </GlassCard>

        {/* Reports Table */}
        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-[#94A3B8]">Case ID</th>
                  <th className="text-left py-4 px-4 text-[#94A3B8]">Date</th>
                  <th className="text-left py-4 px-4 text-[#94A3B8]">Source</th>
                  <th className="text-left py-4 px-4 text-[#94A3B8]">Type</th>
                  <th className="text-left py-4 px-4 text-[#94A3B8]">Verdict</th>
                  <th className="text-left py-4 px-4 text-[#94A3B8]">Confidence</th>
                  <th className="text-right py-4 px-4 text-[#94A3B8]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, i) => (
                  <motion.tr
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="text-[#00E5FF] font-mono">{report.id}</span>
                    </td>
                    <td className="py-4 px-4 text-[#94A3B8]">{report.date}</td>
                    <td className="py-4 px-4 text-[#E2E8F0]">{report.source}</td>
                    <td className="py-4 px-4 text-[#E2E8F0]">{report.type}</td>
                    <td className="py-4 px-4">
                      <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: `${getVerdictColor(report.verdict)}20`,
                          color: getVerdictColor(report.verdict),
                          border: `1px solid ${getVerdictColor(report.verdict)}`
                        }}
                      >
                        {report.verdict}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#E2E8F0]">{report.confidence}%</td>
                    <td className="py-4 px-4">
                      <div className="flex justify-end gap-2">
                        <Link href="/analyze/demo">
                          <button className="p-2 rounded-xl hover:bg-white/10 transition-colors text-[#00E5FF]">
                            <Eye className="w-4 h-4" />
                          </button>
                        </Link>
                        <button className="p-2 rounded-xl hover:bg-white/10 transition-colors text-[#94A3B8]">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-[#94A3B8]">
              Showing 1-6 of 147 reports
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl bg-[#0F172A] text-[#94A3B8] hover:bg-[#1E293B] transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-xl bg-[#00E5FF] text-[#0A0F1C] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all">
                Next
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}