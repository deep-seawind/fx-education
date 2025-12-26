import React from "react";
import { BiEnvelope, BiLockAlt, BiChevronRight } from "react-icons/bi";

const LogForm = () => {
  return (
    <>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 ml-1">
            Account Email
          </label>
          <div className="relative group">
            <BiEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-color transition-colors" />
            <input
              type="email"
              placeholder="trader@institutional.com"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium text-slate-900 mt-2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Security Password
            </label>
            <span className="text-[10px] font-semibold text-color cursor-pointer hover:underline">
              Forgot?
            </span>
          </div>
          <div className="relative group">
            <BiLockAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-color transition-colors" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium text-slate-900 mt-2"
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-lg border-slate-200 text-color focus:ring-indigo-500 cursor-pointer"
            />
            <p className="text-sm text-slate-500 font-medium cursor-pointer">
              Stay authenticated
            </p>
          </div>
        </div>

        <button className="w-1/2 py-5 bg-slate-900 text-white rounded-3xl font-semibold flex items-center justify-center gap-3 group hover:bg-color transition-all shadow-xl shadow-slate-200 active:scale-[0.98]">
          Initialize Terminal
          <BiChevronRight className="text-2xl group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </>
  );
};

export default LogForm;
