import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChartBar, HiOutlineGlobeAlt} from 'react-icons/hi2';

const AboutHero = () => {
  const brandColor = "#0e5da0";

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-white">
      
      {/* Dynamic Financial Mesh Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.12] blur-[120px]" 
          style={{ backgroundColor: brandColor }}
        />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
           
          {/* Main Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-8 leading-[0.95]"
          >
            Master the <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)` }}>Global</span> <br />
            <span className="italic font-serif font-light" style={{ color: brandColor }}>Financial Markets.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className=" text-slate-500 font-medium leading-relaxed"
          >
            Join over 50,000+ traders worldwide. We provide the <span className="text-slate-900 font-bold">tools, psychology, and precision</span> 
            needed to navigate the Forex markets with institutional-level edge.
          </motion.p>
        </div>

        {/* The "Trading Desk" Bento Stack */}
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Main Visual: Trading Setup/Analytics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-12 lg:col-span-7 relative group"
          >
            <div 
              className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-20" 
              style={{ backgroundColor: brandColor }}
            />
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1611974717482-9831d6196f6a?auto=format&fit=crop&q=80&w=1200" 
                alt="Forex Charts Analytics"
                className="w-full h-130 object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Data Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Live Market Access</p>
                </div>
                <h3 className="text-4xl font-bold">Trade Like a <br/><span style={{ color: brandColor }}>Professional.</span></h3>
              </div>
            </div>
          </motion.div>

          {/* Side Stack */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            
            {/* Value Prop 1: Global Reach */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-slate-50 p-10 rounded-[2.5rem] border border-white flex flex-col justify-between h-1/2 relative overflow-hidden group"
            >
              <HiOutlineGlobeAlt 
                className="absolute -right-6 -top-6 text-[12rem] rotate-12 opacity-[0.03]" 
                style={{ color: brandColor }}
              />
              <div className="flex justify-between items-start">
                <h2 className="text-6xl font-bold" style={{ color: brandColor }}>24/7</h2>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold">MARKET HOURS</span>
              </div>
              <p className="text-slate-600 text-lg font-semibold leading-snug">
                Structured learning designed for <span style={{ color: brandColor }}>every time zone</span>, from London Open to New York Close.
              </p>
            </motion.div>

            {/* Value Prop 2: Practical Mastery */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 rounded-[2.5rem] text-white h-1/2 flex items-center gap-8 relative overflow-hidden shadow-2xl"
              style={{ backgroundColor: brandColor }}
            >
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-white/10 skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000" />
              
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-4xl border border-white/20 backdrop-blur-md">
                <HiOutlineChartBar className="text-emerald-300" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">Elite Curriculum</h4>
                <p className="text-white/70 font-medium text-sm">From basics to advanced Smart Money Concepts (SMC).</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;