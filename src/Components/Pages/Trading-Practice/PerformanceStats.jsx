import { useTrading } from "./TradingContext";
import { HiOutlineWallet, HiOutlineCube, HiOutlineChartPie, HiOutlineArrowTrendingUp } from "react-icons/hi2";

const PerformanceStats = () => {
  const { balance, position, unrealizedPnL } = useTrading();
  const equity = balance + unrealizedPnL;
  const isProfit = unrealizedPnL >= 0;

  return (
    <div className="relative group p-8 rounded-[3rem] bg-linear-to-b from-[#0e5da0] via-slate-900 to-slate-950  shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Dynamic Background Aura - Changes color based on PnL */}
      <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] transition-colors duration-1000 ${
        isProfit ? "bg-emerald-500/10" : "bg-rose-500/10"
      }`} />

      <div className="flex items-center justify-between mb-10 relative z-10">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-200 flex items-center gap-2">
          <HiOutlineChartPie className="text-white text-lg" /> Account Metrics
        </h3>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
           <div className={`w-1.5 h-1.5 rounded-full ${isProfit ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
           <span className="text-[9px] font-semibold text-slate-300 uppercase tracking-widest">Live Equity</span>
        </div>
      </div>

      {/* PRIMARY STAT: MAIN BALANCE */}
      <div className="mb-8 relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 ml-1">Total Account Balance</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-semibold text-white tracking-tighter">
            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">USD</span>
        </div>
      </div>

      {/* DATA GRID BENTO */}
      <div className="grid grid-cols-1 gap-4 relative z-10">
        
        {/* Unrealized PnL Card */}
        <div className={`p-5 rounded-4xl border transition-all duration-500 ${
          isProfit 
          ? "bg-emerald-500/5 border-emerald-500/10 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)]" 
          : "bg-rose-500/5 border-rose-500/10 shadow-[0_20px_40px_-15px_rgba(244,63,94,0.1)]"
        }`}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Unrealized PnL</span>
            <HiOutlineArrowTrendingUp className={isProfit ? "text-emerald-500" : "text-rose-500 rotate-180"} />
          </div>
          <div className={`text-2xl font-semibold tracking-tight ${isProfit ? "text-emerald-400" : "text-rose-400"}`}>
            {isProfit ? "+" : ""}${unrealizedPnL.toFixed(2)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Position Size */}
          <div className="p-5 rounded-4xl bg-white/3 border border-white/5 group-hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <HiOutlineCube className="text-[#0e5da0] text-sm" />
              <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-300">Open Lots</span>
            </div>
            <div className="text-xl font-semibold text-white">{position || "0.00"}</div>
          </div>

          {/* Wallet/Equity */}
          <div className="p-5 rounded-4xl bg-white/3 border border-white/5 group-hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <HiOutlineWallet className="text-[#0e5da0] text-sm" />
              <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-300">Net Equity</span>
            </div>
            <div className="text-xl font-semibold text-white">${equity.toFixed(2)}</div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PerformanceStats;