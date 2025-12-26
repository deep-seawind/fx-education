import React from "react";
import {
  BiEnvelope,
  BiLockAlt,
  BiChevronRight,
  BiShieldQuarter,
  BiBarChartSquare,
  BiStation,
  BiSupport,
  BiInfoCircle,
} from "react-icons/bi";
import Breadcrumbs from "../../common/Breadcrumbs.jsx";
import LogForm from "./LoginForm.jsx";
import { Link } from "react-router-dom";

const LoginFormUI = () => {
  return (
    <>
      <Breadcrumbs paths={["Authentication", "Institutional Login"]} />

      <div className="min-h-screen bg-[#fafbff] flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-160 h-160 bg-indigo-50 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-5%] w-120 h-120 bg-blue-50 rounded-full blur-[100px] -z-10" />

        <div className="w-full max-w-6xl bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(79,70,229,0.1)] border border-slate-100 flex flex-col lg:flex-row overflow-hidden relative">
          {/* LEFT SIDE: MARKET INTELLIGENCE SIDEBAR */}
          <div className="lg:w-5/12 bg-slate-900 p-12 lg:p-16 relative flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-color rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-indigo-500/40">
                <BiShieldQuarter className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tighter leading-tight mb-6">
                Institutional
                <span className="text-secondary-color ps-2">Market</span> <br />
                Intelligence.
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed">
                Log in to access your proprietary data clusters and global
                execution tools.
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              {[
                { icon: <BiBarChartSquare />, text: "Real-time Order Flow" },
                { icon: <BiStation />, text: "Tier-1 Liquidity Access" },
                { icon: <BiSupport />, text: "Dedicated Desk Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-white/80 group"
                >
                  <div className="text-indigo-400 group-hover:scale-125 transition-transform text-2xl">
                    {item.icon}
                  </div>
                  <span className="font-bold tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 pt-10 border-t border-white/10 mt-10">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                  Global Servers Operational
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE LOGIN FORM */}
          <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
            <div className="max-w-lg mx-auto">
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-slate-900 tracking-tighter mb-2">
                  Secure Login
                </h3>
                <p className="text-slate-500 font-medium">
                  Need terminal access?{" "}
                  <Link to={"/signup"}>
                    <span className="text-color font-bold cursor-pointer hover:underline">
                      Register Now
                    </span>
                  </Link>
                </p>
              </div>

              {/* Security Notice Box */}
              <div className="mb-8 p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex items-start gap-3">
                <BiInfoCircle className="text-color text-xl shrink-0 mt-0.5" />
                <p className="text-xs text-indigo-900 leading-relaxed font-medium">
                  You are accessing a secure institutional environment. Ensure
                  your connection is private before authenticating.
                </p>
              </div>

              <LogForm />

              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between opacity-60">
                <div className="text-[9px] font-black tracking-widest uppercase text-slate-400">
                  AES-256 Encrypted
                </div>
                <div className="text-[9px] font-black tracking-widest uppercase text-slate-400">
                  Session ID: 492-XPL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginFormUI;
