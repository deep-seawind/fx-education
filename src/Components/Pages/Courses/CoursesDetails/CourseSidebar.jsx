import React from "react";
import { HiOutlinePlay, HiOutlineDevicePhoneMobile, HiOutlineShieldCheck } from "react-icons/hi2";
import { GoInfinity } from "react-icons/go";
import { Link } from "react-router-dom";

const CourseSidebar = () => {
  return (
    <div className="lg:sticky lg:top-44 space-y-4">
      <div className="p-6 md:p-8 rounded-3xl md:rounded-[3rem] bg-white border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]">
        {/* Pricing Section */}
        <div className="mb-6">
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <span className="text-4xl md:text-5xl font-bold text-slate-900">₹549</span>
            <span className="text-base md:text-lg text-slate-400 line-through decoration-rose-500/30">₹799</span>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-lg">31% OFF</span>
          </div>

          <div className="flex items-center gap-2 mt-4 p-3 bg-rose-50 rounded-2xl border border-rose-100/50">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </div>
            <p className="text-[10px] md:text-[11px] font-semibold text-rose-600 tracking-tight">
              12 hours left at this price!
            </p>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="space-y-3 mb-6 md:mb-8">
            <Link to={"/checkout"}>
          <button className="w-full py-4 md:py-4 bg-[#0e5da0] text-white rounded-2xl text-xl font-semibold tracking-widest shadow-xl shadow-[#0e5da0]/20 hover:-translate-y-1 active:scale-95 transition-all">
            Enroll Now
          </button>  
          </Link>
        </div>

        {/* Features List */}
        <div className="pt-6 border-t border-slate-50">
          <p className="text-[10px] font-bold text-slate-400 tracking-widest mb-4">
            This course includes:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: HiOutlinePlay, text: "On-demand video" },
              { icon: HiOutlineDevicePhoneMobile, text: "Access on all devices" },
              { icon: GoInfinity, text: "Full lifetime access" },
              { icon: HiOutlineShieldCheck, text: "Certificate of completion" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-600 group">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#0e5da0]/10 transition-colors">
                  <item.icon className="text-lg text-[#0e5da0]/70" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
