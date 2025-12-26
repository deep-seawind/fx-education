import React from "react";
import {
  HiOutlinePresentationChartLine,
  HiOutlineLightBulb,
  HiOutlineCursorArrowRays,
  HiOutlineTrophy,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import Breadcrumbs from "../../common/Breadcrumbs";
import ProcessShowcase from "./ProcessShowcase";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Enroll & Access",
      desc: "Gain instant access to our institutional-grade modules and 2026 strategy blueprints.",
      icon: HiOutlineCursorArrowRays,
      color: "from-blue-500 to-indigo-600",
      delay: "border-blue-100",
    },
    {
      id: "02",
      title: "Master the Logic",
      desc: "Learn the 85% accuracy framework behind MT4/MT5 setups and live price action.",
      icon: HiOutlineLightBulb,
      color: "from-[#0e5da0] to-cyan-500",
      delay: "border-cyan-100",
    },
    {
      id: "03",
      title: "Practice Live",
      desc: "Apply your knowledge with our real-time TradingView templates and community signals.",
      icon: HiOutlinePresentationChartLine,
      color: "from-indigo-600 to-purple-600",
      delay: "border-indigo-100",
    },
    {
      id: "04",
      title: "Trade & Scale",
      desc: "Execute with confidence and join our elite circle of 450+ profitable traders.",
      icon: HiOutlineTrophy,
      color: "from-emerald-500 to-teal-600",
      delay: "border-emerald-100",
    },
  ];

  /* Motion Variants */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const brandColor = "#0e5da0";

  return (
    <>
      <Breadcrumbs paths={["Home", "Learning Roadmap", "How It Works"]} />

      <section className="py-16 bg-[#FDFEFF] overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="flex flex-col items-center text-center mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0e5da0] text-[10px] font-semibold uppercase tracking-[0.3em] mb-4 border border-blue-100">
              The Roadmap
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tighter mb-6">
              Your Path to <span className="text-transparent bg-clip-text"  style={{
                    backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)`,
                  }}>Consistent Profits</span>
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              We’ve distilled years of institutional trading into a 4-step
              execution framework designed for the 2026 market cycle.
            </p>
          </motion.div>

          {/* The Bento Staircase Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Decorative Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`group relative p-8 rounded-[3rem] bg-white border border-slate-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(14,93,160,0.12)] ${
                  index % 2 === 0 ? "lg:mt-12" : "lg:mb-12"
                }`}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Step Number Glow */}
                <div className="absolute top-6 right-8 text-6xl font-semibold text-slate-50 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
                  {step.id}
                </div>

                {/* Icon Header */}
                <div
                  className={`w-16 h-16 rounded-3xl bg-linear-to-br ${step.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-6 transition-transform`}
                >
                  <step.icon className="text-3xl" />
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Progress Indicator */}
                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Phase {step.id}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full bg-linear-to-br ${step.color} animate-pulse`}
                  />
                </div>

                {/* Hover Arrow */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-color rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all group-hover:bottom-6 shadow-xl shadow-blue-200">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Hook */}
          <motion.div
            className="mt-24 p-10 rounded-4xl bg-slate-900 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-color rounded-full blur-[100px] opacity-20" />
            <div className="relative z-10">
              <h4 className="text-2xl font-semibold mb-2">
                Ready to change your trading curve?
              </h4>
              <p className="text-slate-400 text-sm">
                Join the next cohort starting in 10/2025.
              </p>
            </div>
            <button className="relative z-10 px-10 py-5 bg-primary-color rounded-2xl font-semibold shadow-2xl">
              Get Started Now
            </button>
          </motion.div>

          <ProcessShowcase />
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
