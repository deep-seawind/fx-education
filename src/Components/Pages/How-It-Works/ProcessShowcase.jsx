import React from "react";
import {
  HiOutlineChartBarSquare,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import Image_1 from "../../../assets/how-it-works/image-1.jpg";
import Image_2 from "../../../assets/how-it-works/image-2.jpg";

const ProcessShowcase = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const brandColor = "#0e5da0";

  return (
    <div className="space-y-32 pt-20 bg-[#FDFEFF]">
      {/* SECTION 1: THE TERMINAL (Image Left, Content Right) */}
      <motion.section
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: The "Image" */}
          <motion.div
            className="relative group"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={Image_1}
                alt="Forex Terminal"
                className="w-full h-100 object-cover"
              />
              <div className="absolute bottom-6 left-6 p-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl">
                <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                  Platform Sync
                </p>
                <p className="text-sm font-bold text-white mt-1">
                  Live MT5 Integration
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Content */}
          <motion.div
            className="space-y-8"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0e5da0]/5 border border-[#0e5da0]/10">
              <HiOutlineSparkles className="text-[#0e5da0]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e5da0]">
                The Environment
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight">
              Master the{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)`,
                }}
              >
                Trading Terminal
              </span>
            </h2>

            <p className="text-slate-500 font-medium leading-relaxed">
              Don't just watch videos. We provide custom templates for MT4/MT5
              and TradingView. You'll learn how to set up your workspace like a
              pro institutional trader.
            </p>

            <ul className="space-y-4">
              {[
                "Custom Indicator Blueprints",
                "Automated Setup Detection",
                "Mobile & Desktop Workspace Sync",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-bold"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                    <HiOutlineShieldCheck className="text-[#0e5da0] text-sm" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#0e5da0] group">
              Explore Software Modules
              <HiOutlineArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 2: THE BLUEPRINT (Content Left, Image Right) */}
      <motion.section
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: The Content */}
          <motion.div
            className="order-2 lg:order-1 space-y-8"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
              <HiOutlineChartBarSquare className="text-indigo-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
                The Strategy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight">
              A High-Precision{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)`,
                }}
              >
                85% Accuracy
              </span>{" "}
              Framework
            </h2>

            <p className="text-slate-500 font-medium leading-relaxed">
              Our 2026 Strategy focuses on the intersection of liquidity and
              institutional flow. Learn to identify high-probability setups
              before they happen on the chart.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-4xl bg-slate-50 border border-slate-100 shadow-inner">
                <h4 className="text-2xl font-bold text-slate-900">1:3+</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Risk Reward Ratio
                </p>
              </div>
              <div className="p-6 rounded-4xl bg-slate-50 border border-slate-100 shadow-inner">
                <h4 className="text-2xl font-bold text-slate-900">Pure</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Price Action Logic
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Image */}
          <motion.div
            className="order-1 lg:order-2 relative group"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={Image_2}
                alt="Strategy Results"
                className="w-full h-100 object-cover"
              />
              <div className="absolute top-6 right-6 p-6 backdrop-blur-xl bg-slate-900/80 border border-white/10 rounded-4xl text-white shadow-2xl">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-400">
                  Winning Probability
                </p>
                <p className="text-3xl font-bold mt-1">85.4%</p>
                <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-indigo-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProcessShowcase;
