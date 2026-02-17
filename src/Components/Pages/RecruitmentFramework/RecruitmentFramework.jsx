import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineBookOpen, 
  HiOutlineComputerDesktop, 
  HiOutlineUserGroup, 
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineListBullet,
  HiOutlineBriefcase,
  HiArrowRight
} from 'react-icons/hi2';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const RecruitmentJourney = () => {
  const journeySteps = [
    {
      level: "01",
      title: "Eligibility for Examination",
      tag: "The Gateway",
      icon: <HiOutlineClipboardCheck />,
      color: "from-blue-500 to-blue-600",
      content: "Candidates must satisfy strict criteria prior to appearing for final assessments.",
      requirements: [
        "Minimum 90% attendance",
        "Completion of all course stages",
        "Submission of required work",
        "Maintenance of trading journal",
        "No disciplinary or compliance violations"
      ]
    },
    {
      level: "02",
      title: "Level I: Theoretical Examination",
      tag: "Knowledge Benchmark",
      icon: <HiOutlineBookOpen />,
      color: "from-indigo-500 to-indigo-600",
      content: "Evaluates conceptual understanding across program modules. 100 MCQs | 2 Hours duration.",
      metric: "70% Passing Score",
      subContent: "Performance: 70-79% (Pass) | 80-89% (Distinction) | 90%+ (High Distinction)"
    },
    {
      level: "03",
      title: "Level II: Practical Assessment",
      tag: "Applied Intelligence",
      icon: <HiOutlineComputerDesktop />,
      color: "from-cyan-500 to-cyan-600",
      content: "Evaluates applied skills through live simulations, coding, portfolio construction, or documentation.",
      requirements: [
        "Technical accuracy & methodology",
        "Risk management discipline",
        "Analytical reasoning quality",
        "Professional reporting standards"
      ],
      metric: "Minimum Score: 75%"
    },
    {
      level: "04",
      title: "Level III: Professional Simulation",
      tag: "The Stress Test",
      icon: <HiOutlineShieldCheck />,
      color: "from-emerald-500 to-emerald-600",
      content: "Supervised simulation testing real-time decision making and risk response under structured case scenarios.",
      metric: "Qualifying Score: 75%"
    },
    {
      level: "05",
      title: "Final Panel Interview",
      tag: "Executive Review",
      icon: <HiOutlineUserGroup />,
      color: "from-slate-700 to-slate-800",
      content: "Structured evaluation with the leadership board focusing on strategy and alignment.",
      requirements: [
        "Technical evaluation & strategy",
        "Risk & compliance scenarios",
        "Behavioral & ethical evaluation",
        "Organizational alignment"
      ]
    },
    {
      level: "06",
      title: "Verification & Offer Approval",
      tag: "Final Checklist",
      icon: <HiOutlineDocumentText />,
      color: "from-blue-600 to-blue-800",
      content: "Internal compliance clearance and final documentation prior to formal employment.",
      requirements: [
        "Project approval & exam clearance",
        "Identity & document verification",
        "Execution of NDA & Code of Ethics",
        "Internal compliance clearance"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-color mb-6"
          >
            <HiOutlineSparkles className="text-sm" />
            <span className="text-[10px] font-bold uppercase tracking-widest">FINANSHAM Recruitment Framework</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6 leading-tight">
            90-Day Professional Certification <br />
            <span className="text-color italic ">& Examination Journey.</span>
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
            This document outlines the structured examination, evaluation, and recruitment framework applicable to candidates at <span className="text-slate-900 font-bold tracking-tight">FINANSHAM</span>.
          </p>
        </div>

        {/* The Journey Path */}
        <div className="relative">
          <div className="absolute left-8 lg:left-[50%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-slate-400 to-transparent hidden md:block" />

          <div className="space-y-20">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content Area */}
                <div className="flex-1 w-full text-left lg:px-12">
                  <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-blue-600 font-mono text-sm font-bold">STAGE {step.level}</span>
                       <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[9px] font-bold uppercase tracking-tighter">{step.tag}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md">
                      {step.content}
                    </p>
                    
                    {step.subContent && (
                      <p className="text-[11px] text-blue-500 font-bold mb-4 uppercase tracking-tight">{step.subContent}</p>
                    )}

                    <div className={`flex flex-wrap gap-4 ${index % 2 !== 0 ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}>
                      {step.requirements?.map((req, i) => (
                        <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded-lg text-sm font-semibold text-slate-600 shadow-sm">
                          <HiOutlineListBullet className="text-blue-500" />
                          {req}
                        </span>
                      ))}
                      {step.metric && (
                        <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-lg text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                          {step.metric}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* The "Step Node" */}
                <div className="relative shrink-0 z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} shadow-2xl flex items-center justify-center text-3xl text-white`}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="absolute inset-0 bg-blue-500/20 blur-2xl -z-10 rounded-full" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Employment Section */}
       <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 relative overflow-hidden rounded-[4rem] bg-slate-900 p-1 md:p-1.5"
        >
          <div className="relative bg-slate-950 rounded-[3.8rem] p-12 md:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#1e293b_0%,transparent_50%)]" />
            
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Final Destination</div>
              <h3 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tighter leading-none">The <span className="italic text-blue-500">Finamsham</span> Offer.</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                Successful graduates receive a structured employment offer integrated with global risk management protocols.
              </p>
            </div>

            <Link to={"/signup"} className='cursor-pointer'>
            <motion.button 
              whileHover={{ x: 5 }}
              className="relative z-10 px-12 py-6 bg-primary-color text-slate-900 rounded-4xl font-bold text-xs uppercase tracking-widest flex items-center gap-3 shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Start Your Journey <HiArrowRight className="text-lg" />
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
       
    </section>
  );
};

export default RecruitmentJourney;