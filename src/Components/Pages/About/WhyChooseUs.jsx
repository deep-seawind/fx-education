import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlinePresentationChartBar,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Logo from "../../../assets/logo/white-logo.jpg";

const WhyChooseUs = () => {
  const brandColor = "#0e5da0";

  const features = [
    {
      title: "Smart Money Concepts",
      desc: "Learn to identify institutional footprints and trade alongside the big banks, not against them.",
      icon: <HiOutlinePresentationChartBar />,
      position: "top-0 left-0",
    },
    {
      title: "Psychology Coaching",
      desc: "Master the 90% of trading that happens in your mind. We build disciplined, emotionless execution.",
      icon: <HiOutlineShieldCheck />,
      position: "top-0 right-0",
    },
    {
      title: "Elite Mentorship",
      desc: "Direct access to 7-figure funded traders via our private discord and weekly live webinars.",
      icon: <HiOutlineUserGroup />,
      position: "bottom-0 left-0",
    },
    {
      title: "Prop-Firm Ready",
      desc: "Our curriculum is specifically designed to help you pass $100k+ funding challenges.",
      icon: <HiOutlineAcademicCap />,
      position: "bottom-0 right-0",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0a0d14] overflow-hidden text-white">
      {/* Background Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 opacity-20 blur-[120px] rounded-full"
        style={{ backgroundColor: brandColor }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400 mb-4 block"
          >
            The Competitive Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-semibold tracking-tighter"
          >
            Why Professional Traders <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, white, ${brandColor})`,
              }}
            >
              Choose Our Academy.
            </span>
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Visual: Institutional Trading Desk */}
          <div className="hidden lg:flex justify-center items-center py-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-125 h-125 rounded-full border border-white/10 flex items-center justify-center"
            >
              {/* Spinning Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/20 animate-spin-slow" />
              <div className="absolute inset-10 rounded-full border border-blue-500/20 animate-reverse-spin" />

              {/* Main Icon */}
              <div className="relative z-10 w-72 h-72 bg-slate-900 rounded-full border border-white/10 shadow-2xl flex items-center justify-center group overflow-hidden">
                <img
                  src={Logo}
                  alt="Market Analysis"
                  className="w-full h-full object-contain bg-white p-5 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:block">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`lg:absolute ${item.position} p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md w-full lg:w-[320px] transition-all duration-300 hover:bg-white/10 group mb-6 lg:mb-0`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:shadow-blue-500/20 transition-all bg-primary-color"
                   
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-semibold italic text-2xl tracking-tighter">
            METATRADER 5
          </span>
          <span className="font-semibold italic text-2xl tracking-tighter">
            TRADINGVIEW
          </span>
          <span className="font-semibold italic text-2xl tracking-tighter">
            FTMO FUNDED
          </span>
          <span className="font-semibold italic text-2xl tracking-tighter">
            MYFOREXFUNDS
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
