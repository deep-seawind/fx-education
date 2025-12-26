import React from "react";
import {
  BiUser,
  BiEnvelope,
  BiLockAlt,
  BiChevronRight,
  BiCheckCircle,
  BiShieldQuarter,
  BiGlobe,
  BiTrendingUp,
} from "react-icons/bi";
import Breadcrumbs from "../../common/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import SigForm from "./SignupForm.jsx";

const SignupFormUI = () => {
  return (
    <>
      <Breadcrumbs paths={["Authentication", "Secure Signup"]} />

      <div className="  bg-[#fafbff] flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-160 h-160 bg-indigo-50 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-120 h-120 bg-blue-50 rounded-full blur-[100px] -z-10" />

        <div className="w-full max-w-6xl bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(79,70,229,0.1)] border border-slate-100 flex flex-col lg:flex-row overflow-hidden relative">
          {/* LEFT SIDE: CREATIVE IDENTITY & SOCIAL PROOF */}
          <div className="lg:w-5/12 bg-slate-900 p-12 lg:p-16 relative flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-color rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-indigo-500/40">
                <BiShieldQuarter className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tighter leading-tight mb-6 ">
                Start your
                <span className="text-secondary-color ps-2">Institutional</span> <br />
                journey today.
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed">
                Join 12,000+ traders accessing Tier-1 liquidity and
                professional-grade education.
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              {[
                { icon: <BiCheckCircle />, text: "Instant Sandbox Access" },
                { icon: <BiGlobe />, text: "Global Market Data" },
                { icon: <BiTrendingUp />, text: "Advanced Analytics" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-white/80 group"
                >
                  <div className="text-indigo-400 group-hover:scale-125 transition-transform text-2xl">
                    {item.icon}
                  </div>
                  <span className=" font-bold tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 pt-10 border-t border-white/10 mt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Official Partner of
              </p>
              <div className="flex gap-6 mt-4 opacity-50 grayscale contrast-125">
                <div className="font-bold text-white italic">TRUSTED</div>
                <div className="font-bold text-white italic">SECURE</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM */}
          <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
            <div className="max-w-lg mx-auto">
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-slate-900 tracking-tighter mb-2">
                  Create Account
                </h3>
                <p className="text-slate-500 font-medium">
                  Already have an account?{" "}
                  <Link to={"/login"}>
                    <span className="text-color font-bold cursor-pointer hover:underline">
                      Login
                    </span>
                  </Link>
                </p>
              </div>

              <SigForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupFormUI;
