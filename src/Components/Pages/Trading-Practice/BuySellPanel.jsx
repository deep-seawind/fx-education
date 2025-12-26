import { useState, useEffect } from "react";
import {  HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { useTrading } from "./TradingContext";
import { HiOutlineLightningBolt } from "react-icons/hi";

const BuySellPanel = () => {
  const { buy, sell, currentPrice } = useTrading();
  const [qty, setQty] = useState(1); // Standard Forex Micro-lot
  const [livePrice, setLivePrice] = useState(currentPrice);
  const [priceColor, setPriceColor] = useState("text-white");

  useEffect(() => {
    // Visual feedback for price movement
    if (currentPrice > livePrice) setPriceColor("text-emerald-400");
    else if (currentPrice < livePrice) setPriceColor("text-rose-400");
    
    setLivePrice(currentPrice);

    const timer = setTimeout(() => setPriceColor("text-white"), 500);
    return () => clearTimeout(timer);
  }, [currentPrice]);


  return (
    <div className="relative p-8 rounded-[3rem] bg-linear-to-t from-[#0e5da0] via-slate-900 to-slate-950 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-[#0e5da0] to-transparent opacity-50" />

      <div className="flex items-center justify-between mb-10">
        <h3 className="text-sm font-bold tracking-[0.25em] text-slate-300 flex items-center gap-2">
          <HiOutlineLightningBolt className="text-[#0e5da0]" /> Instant Execution
        </h3>
        <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
           <span className="text-[9px] font-bold text-slate-400 tracking-widest">Market</span>
        </div>
      </div>

      {/* PRICE DISPLAY BLOCK */}
      <div className="mb-10 p-6 rounded-4xl bg-white/2 border border-white/5 text-center relative group">
        <p className="text-[10px] font-bold   tracking-widest text-slate-300 mb-2">Live Quote</p>
        <div className={`text-4xl font-bold tracking-tighter transition-colors duration-300 ${priceColor}`}>
          ${livePrice || "1.0842"}
        </div>
        {/* Decorative Grid behind price */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '12px 12px' }} />
      </div>

      {/* QUANTITY SELECTOR */}
      <div className="space-y-4 mb-10">
        <label className="text-[10px] font-bold tracking-[0.15em] text-slate-300 ml-2">Position Size (Lots)</label>
        <div className="flex items-center gap-3"> 
          
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="flex-1 h-14 bg-transparent border-2 border-white/5 rounded-2xl text-center font-bold text-xl text-white outline-none focus:border-[#0e5da0]/50 transition-all"
          /> 
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 gap-4">
        {/* BUY BUTTON */}
        <button
          onClick={() => buy(Number(qty))}
          className="group relative h-15 rounded-3xl bg-emerald-400 overflow-hidden shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-[0.98] transition-all"
        >
          <div className="relative z-10 flex flex-col items-center justify-center text-slate-950">
            <BiTrendingUp className="text-2xl mb-1 group-hover:scale-125 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Long / Buy</span>
          </div>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
        </button>

        {/* SELL BUTTON */}
        <button
          onClick={() => sell(Number(qty))}
          className="group relative h-15 rounded-3xl bg-rose-500 overflow-hidden shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)] hover:-translate-y-1 active:scale-[0.98] transition-all"
        >
          <div className="relative z-10 flex flex-col items-center justify-center text-white">
            <BiTrendingDown className="text-2xl mb-1 group-hover:scale-125 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Short / Sell</span>
          </div>
          <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform" />
        </button>
      </div> 
    </div>
  );
};

export default BuySellPanel;