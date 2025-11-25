import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const velocityData = [
  { time: "0h", shares: 12 },
  { time: "2h", shares: 34 },
  { time: "4h", shares: 156 },
  { time: "6h", shares: 487 },
  { time: "8h", shares: 1243 },
  { time: "10h", shares: 2891 },
  { time: "12h", shares: 4567 },
];

export function NetworkGraph() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#00E5FF]/20">
        <h4 className="text-[#E2E8F0] mb-4">Amplification Velocity</h4>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={velocityData}>
            <defs>
              <linearGradient id="shareGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
            <XAxis dataKey="time" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "1px solid #00E5FF",
                borderRadius: "12px",
                color: "#E2E8F0"
              }}
            />
            <Area
              type="monotone"
              dataKey="shares"
              stroke="#00E5FF"
              strokeWidth={2}
              fill="url(#shareGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
          <div className="text-xs text-[#94A3B8] mb-1">First Seen</div>
          <div className="text-lg text-[#E2E8F0]">Nairobi County</div>
        </div>
        <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
          <div className="text-xs text-[#94A3B8] mb-1">Coordinated Accounts</div>
          <div className="text-lg text-[#FF6B6B]">47 identified</div>
        </div>
        <div className="bg-[#0F172A] rounded-2xl p-4 border border-white/5">
          <div className="text-xs text-[#94A3B8] mb-1">Bot Score</div>
          <div className="text-lg text-[#FF6B6B]">78%</div>
        </div>
      </div>
      
      <div className="bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 rounded-2xl p-4">
        <p className="text-sm text-[#FF6B6B]">
          <strong>Suspicious Pattern:</strong> Content spread 340% faster than organic baseline. Coordinated amplification detected.
        </p>
      </div>
    </div>
  );
}
