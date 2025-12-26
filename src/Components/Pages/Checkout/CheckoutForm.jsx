import React, { useState } from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineBuildingLibrary,
  HiOutlineQrCode,
  HiOutlineIdentification,
  HiOutlineInformationCircle,
  HiOutlineLockClosed,
  HiOutlineBolt,
} from "react-icons/hi2";

const ForexCheckoutForm = () => {
  const [paymentType, setPaymentType] = useState("qr");

  return (
    <div className="space-y-10">
      {/* HEADER WITH TRUST BADGE */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-[#0e5da0]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0e5da0]">
              Institutional Grade
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-slate-900">
            Secure <span className="text-[#0e5da0]">Checkout</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Unlock 85% Accuracy Strategy & 2026 Live Setups.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <HiOutlineLockClosed className="text-[#0e5da0] text-xl" />
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">
              Security
            </span>
            <span className="text-xs font-bold text-slate-700">
              SSL Encrypted
            </span>
          </div>
        </div>
      </div>

      {/* STEP 1: BILLING DETAILS */}
      <section className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_30px_60px_-15px_rgba(14,93,160,0.08)] relative">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#0e5da0] flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
            1
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Billing Information
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Required for tax compliance and certification.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* First Name */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 ml-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#0e5da0]/10 focus:bg-white transition-all outline-none font-bold text-slate-700 shadow-sm placeholder:text-slate-300"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 ml-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#0e5da0]/10 focus:bg-white transition-all outline-none font-bold text-slate-700 shadow-sm placeholder:text-slate-300"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="alex@example.com"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#0e5da0]/10 focus:bg-white transition-all outline-none font-bold text-slate-700 shadow-sm placeholder:text-slate-300"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 ml-1">
              Phone Number
            </label>
            <div className="flex gap-2">
              <div className="w-15 px-3 py-4 bg-slate-100 border-2 border-transparent rounded-2xl font-bold text-slate-500 text-center">
                +91
              </div>
              <input
                type="tel"
                placeholder="00000 00000"
                className="flex-1 w-40 px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#0e5da0]/10 focus:bg-white transition-all outline-none font-bold text-slate-700 shadow-sm placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Country Selection */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 ml-1">
              <HiOutlineGlobeAsiaAustralia className="text-sm text-[#0e5da0]" />{" "}
              Country of Residence
            </label>
            <div className="relative group/select">
              <select className="w-full appearance-none px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#0e5da0]/10 focus:bg-white transition-all outline-none font-bold text-slate-700 cursor-pointer shadow-sm">
                <option>India</option>
                <option>United Kingdom</option>
                <option>Singapore</option>
                <option>UAE</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300 group-hover/select:text-[#0e5da0] transition-colors">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* State Selection */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 ml-1">
              <HiOutlineBuildingLibrary className="text-sm text-[#0e5da0]" />{" "}
              State / Union Territory
            </label>
            <div className="relative group/select">
              <select className="w-full appearance-none px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-[#0e5da0]/10 focus:bg-white transition-all outline-none font-bold text-slate-700 cursor-pointer shadow-sm">
                <option>Please select...</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Gujarat</option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Uttar Pradesh</option>
                <option>West Bengal</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300 group-hover/select:text-[#0e5da0] transition-colors">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Forex Mastery Custom Legal Note */}
        <div className="mt-10 p-5 rounded-3xl bg-blue-50/40 border border-blue-100 flex gap-4">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
            <HiOutlineInformationCircle className="text-[#0e5da0] text-lg" />
          </div>
          <p className="text-[11px] leading-relaxed text-slate-600 font-medium italic">
            <strong className="text-slate-800">Compliance Note:</strong> Forex
            Mastery Education is required by global financial regulations to
            collect applicable transaction taxes based on your jurisdiction.
            Your data is protected by the Digital Privacy Act.
          </p>
        </div>
      </section>

      {/* STEP 2: PAYMENT GATEWAY */}
      <section className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_30px_60px_-15px_rgba(14,93,160,0.08)]">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#0e5da0] flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Payment Selection
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                Secure, real-time transaction processing.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
            <HiOutlineShieldCheck className="text-lg" />
            <span className="text-[9px] font-bold uppercase tracking-wider">
              Encrypted Node
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <HiOutlineBolt className="text-amber-500" />
            <p className="text-sm font-bold text-slate-700">
              UPI Instant Settlement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* QR Code Option */}
            <div
              onClick={() => setPaymentType("qr")}
              className={`group/opt p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                paymentType === "qr"
                  ? "border-[#0e5da0] bg-blue-50/20 shadow-inner"
                  : "border-slate-100 bg-white hover:border-blue-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center mb-4 transition-all ${
                  paymentType === "qr"
                    ? "bg-[#0e5da0] text-white shadow-xl rotate-3"
                    : "bg-slate-50 text-slate-400 group-hover/opt:bg-blue-50"
                }`}
              >
                <HiOutlineQrCode className="text-3xl" />
              </div>
              <h4
                className={`font-bold text-[10px] uppercase tracking-widest mb-1 transition-colors ${
                  paymentType === "qr" ? "text-[#0e5da0]" : "text-slate-400"
                }`}
              >
                Recommended
              </h4>
              <p className="font-extrabold text-slate-900">QR Code Scan</p>
              {paymentType === "qr" && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#0e5da0] animate-ping" />
              )}
            </div>

            {/* UPI ID Option */}
            <div
              onClick={() => setPaymentType("id")}
              className={`group/opt p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                paymentType === "id"
                  ? "border-[#0e5da0] bg-blue-50/20 shadow-inner"
                  : "border-slate-100 bg-white hover:border-blue-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center mb-4 transition-all ${
                  paymentType === "id"
                    ? "bg-[#0e5da0] text-white shadow-xl -rotate-3"
                    : "bg-slate-50 text-slate-400 group-hover/opt:bg-blue-50"
                }`}
              >
                <HiOutlineIdentification className="text-3xl" />
              </div>
              <h4
                className={`font-bold text-[10px] uppercase tracking-widest mb-1 transition-colors ${
                  paymentType === "id" ? "text-[#0e5da0]" : "text-slate-400"
                }`}
              >
                Direct Pay
              </h4>
              <p className="font-extrabold text-slate-900">Virtual UPI ID</p>
            </div>
          </div>

          {/* Contextual Instructions with Glassmorphism Effect */}
          <div className="p-6 rounded-4xl bg-slate-900/5 border border-slate-100 backdrop-blur-sm relative">
            <p className="text-xs text-slate-500 leading-relaxed font-bold">
              {paymentType === "qr"
                ? "Generate a unique merchant QR. Scan via GPay, PhonePe, or Paytm to authorize the course enrollment instantly."
                : "Enter your UPI handle (e.g. name@upi). We will push a payment request notification to your mobile device."}
            </p>
          </div>

          <button className="group/btn w-full py-6 bg-[#0e5da0] text-white rounded-4xl font-bold text-sm uppercase tracking-[0.25em] shadow-2xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
            Authorize & Proceed
            <HiOutlineShieldCheck className="text-xl group-hover/btn:animate-bounce" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForexCheckoutForm;
