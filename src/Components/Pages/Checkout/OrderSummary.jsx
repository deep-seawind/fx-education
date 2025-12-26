import React from "react";
import {
  HiOutlineTicket,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const OrderSummary = () => {
  return (
    <aside className="lg:col-span-5 lg:sticky lg:top-10">
      <div className="p-2 rounded-[3rem] bg-linear-to-b from-[#0e5da0] via-slate-900 to-slate-950 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden">
        
        {/* Decorative Circle */}
        <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/5 rounded-full blur-3xl" />

        <div className="p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6">Order Summary</h3>

          {/* Course Mini Card */}
          <div className="flex gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <img
              src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1600&q=80"
              className="w-20 h-20 rounded-2xl object-cover"
              alt="Course"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-1">
                Beginner 2026
              </p>
              <h4 className="font-semibold text-sm leading-snug">
                Forex Trading Mastery: MT4/MT5 Strategy
              </h4>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center text-sm font-medium text-slate-400">
              <span>Course Price</span>
              <span className="text-white line-through">₹799</span>
            </div>

            <div className="flex justify-between items-center text-sm font-medium text-slate-400">
              <span>Discount (31% Off)</span>
              <span className="text-emerald-400">-₹250</span>
            </div>

            <div className="h-px bg-white/10 w-full" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Amount</span>
              <span className="text-3xl font-semibold text-white tracking-tighter">
                ₹549
              </span>
            </div>
          </div>

          {/* Coupon */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full py-4 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-500/50 transition-all text-sm font-medium"
            />
            <HiOutlineTicket className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-semibold uppercase tracking-widest hover:bg-blue-50 transition-colors">
              Apply
            </button>
          </div>

          {/* Pay Button */}
          <button className="w-full py-5 bg-[#0e5da0] text-white rounded-4xl font-semibold text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-900/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
            Pay Now ₹549 <HiOutlineShieldCheck className="text-xl" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;
