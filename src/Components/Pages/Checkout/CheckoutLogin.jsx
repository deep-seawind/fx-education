import React from "react"; 
import { HiOutlineUserPlus, HiOutlineShieldCheck } from "react-icons/hi2";
import { Link } from "react-router-dom";

const CheckoutLogin = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      {/* Container with Modern Depth */}
      <div className="relative p-10 md:p-14 rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Subtle Decorative Background Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0e5da0]/5 rounded-full -translate-y-12 translate-x-12 blur-3xl" />

        {/* Header Icon */}
        <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-blue-100/50">
          <HiOutlineUserPlus className="text-3xl text-[#0e5da0]" />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-slate-900 leading-tight">
            Checkout
            <span className="text-[#0e5da0] ps-2">Authentication</span>
          </h1>

          <div className="space-y-5">
            <p className="text-[15px] leading-relaxed text-slate-500 font-medium">
              A{" "}
              <span className="text-slate-900 font-bold">
                Forex Mastery account
              </span>{" "}
              is required to access your purchased courses. Please verify that
              your email address is correct, as we’ll use it to send your order
              confirmation.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <Link to={"/login"}>
              <button className="group w-full py-6 bg-[#0e5da0] text-white rounded-4xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                Create Account & Continue
                <HiOutlineShieldCheck className="text-xl group-hover:scale-110 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Social Proof Footer */}
          <div className="pt-8 mt-8 border-t border-slate-50 flex items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Secure Protocol
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLogin;
