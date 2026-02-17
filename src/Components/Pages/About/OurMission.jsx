import React from 'react';
import { motion } from 'framer-motion';
// Using Hi2 for cleaner line weights
import { 
  HiOutlineLightBulb, 
  HiOutlineShieldCheck,  
  HiOutlineUserGroup,
  HiOutlineEye,
  HiOutlineGlobeAlt,
  HiOutlineSparkles
} from 'react-icons/hi2';
import { HiOutlineTrendingUp } from 'react-icons/hi';

const MissionVision = () => {
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
      color: "#10b981"
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
    <div className="bg-white">
      {/* --- EXISTING MISSION UI (UNCHANGED) --- */}
      <section className="relative lg:py-24 py-16 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
          <h2 className="text-[30rem] font-semibold text-center leading-none uppercase tracking-tighter">Mission</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
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
              <h2 className="text-3xl lg:text-5xl font-semibold text-slate-900 leading-[1.1] mb-8">
                Empowering the Next <br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)` }}>
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

            <div className="grid sm:grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 blur-[100px] opacity-10 rounded-full" style={{ backgroundColor: brandColor }} />
              {missions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`p-8 rounded-[2.5rem] border border-slate-100 bg-white/60 backdrop-blur-xl shadow-xl transition-all duration-300 ${index % 2 !== 0 ? 'sm:translate-y-12' : ''}`}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ENHANCED UNIQUE VISION UI --- */}
      <section className="relative lg:py-20 lg:pt-5  py-10 bg-slate-50/30 overflow-hidden">
       
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
           
            <div className="flex-1 relative order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-125 mx-auto">
                
                
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-full shadow-[0_0_50px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center z-20"
                >
                  <HiOutlineEye className="text-4xl text-slate-900" />
                </motion.div>
 
                <div className="absolute inset-0 border-[1.5px] border-dashed border-slate-200 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-12 border border-slate-100 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

               
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-0 left-0 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 max-w-50 z-30"
                >
                  <HiOutlineGlobeAlt className="text-2xl text-emerald-500 mb-2" />
                  <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">Global Standard</p>
                  <p className="text-[11px] text-slate-500 mt-1">Establishing the benchmark for trading excellence worldwide.</p>
                </motion.div>

               
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-10 right-0 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600 max-w-50 z-30"
                >
                  <HiOutlineSparkles className="text-2xl text-blue-600 mb-2" />
                  <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">AI Integration</p>
                  <p className="text-[11px] text-slate-500 mt-1">Pioneering the future of data-driven market psychology.</p>
                </motion.div>
              </div>
            </div>

            
            <div className="flex-1 order-1 lg:order-2">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                <h6 className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-blue-100">
                  Towards 2030
                </h6>
                <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                  Our <span className="italic font-serif">Vision</span> for the <br /> 
                  Digital Economy.
                </h2>
                
                <div className="space-y-8">
                  <div className="group flex gap-6">
                    <div className="text-4xl font-light text-slate-200 group-hover:text-emerald-500 transition-colors duration-500">01</div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">Technological Sovereignty</h4>
                      <p className="text-slate-500 leading-relaxed">We envision a future where every individual possesses the tools to navigate global markets without intermediaries or institutional gatekeepers.</p>
                    </div>
                  </div>

                  <div className="group flex gap-6 border-t border-slate-100 pt-8">
                    <div className="text-4xl font-light text-slate-200 group-hover:text-blue-600 transition-colors duration-500">02</div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">The Education Paradigm</h4>
                      <p className="text-slate-500 leading-relaxed">Our goal is to certify 1 million elite traders, creating a new middle class built on skill, discipline, and data-driven intelligence.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;