import React from "react";
import { BiUser, BiEnvelope, BiLockAlt, BiChevronRight } from "react-icons/bi";

const SigForm = () => {
  return (
    <>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 pb-2">
              First Name
            </label>
            <div className="relative group">
              <BiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-color transition-colors" />
              <input
                type="text"
                placeholder="Alexander"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-hidden focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium text-slate-900 mt-2"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Pierce"
              className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-hidden focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium text-slate-900 mt-2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
            Email Address
          </label>
          <div className="relative group">
            <BiEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-color transition-colors" />
            <input
              type="email"
              placeholder="alex@institutional.com"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-hidden focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium text-slate-900 mt-2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
            Security Password
          </label>
          <div className="relative group">
            <BiLockAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-color transition-colors" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-hidden focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium text-slate-900 mt-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 py-2">
          <input
            type="checkbox"
            className="w-5 h-5 rounded-lg border-slate-200 text-color focus:ring-indigo-500"
          />
          <p className="text-sm text-slate-500 font-medium">
            I agree to the{" "}
            <span className="text-color font-bold hover:underline cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>

        <button className="w-1/2 py-5 bg-slate-900 text-white rounded-3xl font-bold flex items-center justify-center gap-3 group hover:bg-color transition-all shadow-xl shadow-slate-200 active:scale-[0.98]">
          Complete Registration
          <BiChevronRight className="text-2xl group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </>
  );
};

export default SigForm;
