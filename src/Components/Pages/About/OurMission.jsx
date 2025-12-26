import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineTrendingUp, HiOutlineUserGroup } from 'react-icons/hi';

const OurMission = () => {
  const brandColor = "#0e5da0";

  const missions = [
    {
      title: "Democratic Access",
      desc: "Breaking down the barriers to institutional-grade financial markets for every retail trader.",
      icon: <HiOutlineTrendingUp />,
      color: brandColor
    },
    {
      title: "Risk Intelligence",
      desc: "Prioritizing capital preservation through rigorous psychological training and risk management.",
      icon: <HiOutlineShieldCheck />,
      color: "#10b981" // Emerald
    },
    {
      title: "Adaptive Growth",
      desc: "Constantly evolving our strategies to match the shifting liquidity of the global markets.",
      icon: <HiOutlineLightBulb />,
      color: brandColor
    },
    {
      title: "Global Community",
      desc: "Building a mastermind of elite traders sharing insights across 48+ different countries.",
      icon: <HiOutlineUserGroup />,
      color: "#10b981"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Subtle Branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <h2 className="text-[30rem] font-semibold text-center leading-none uppercase tracking-tighter">
          Mission
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: brandColor }}>
                Our Core Purpose
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-[1.1] mb-8">
              Empowering the Next <br />
              <span className="text-transparent bg-clip-text"style={{ backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)` }}>
                Generation of Elites.
              </span>
            </h2>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
              Our mission is simple: To bridge the gap between retail trading and professional institutional banking. We provide the roadmap to financial sovereignty through disciplined education.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-semibold text-slate-900 italic">99%</h4>
                <p className="text-xs uppercase font-semibold text-slate-400 tracking-widest mt-1">Success Rate in Labs</p>
              </div>
              <div>
                <h4 className="text-3xl font-semibold text-slate-900 italic">50K+</h4>
                <p className="text-xs uppercase font-semibold text-slate-400 tracking-widest mt-1">Traders Empowered</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            {/* Decorative Glow behind cards */}
            <div 
              className="absolute inset-0 blur-[100px] opacity-10 rounded-full" 
              style={{ backgroundColor: brandColor }}
            />
            
            {missions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-8 rounded-[2.5rem] border border-slate-100 bg-white/60 backdrop-blur-xl shadow-xl transition-all duration-300 ${
                  index % 2 !== 0 ? 'sm:translate-y-12' : ''
                }`}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurMission;