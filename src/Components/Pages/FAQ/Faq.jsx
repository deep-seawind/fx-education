import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronDown, HiOutlineQuestionMarkCircle, HiOutlineShieldCheck, HiOutlineCurrencyDollar, HiOutlineAcademicCap } from 'react-icons/hi2';

const Faq = () => {
  const brandColor = "#0e5da0";
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      category: "Trading Curriculum",
      icon: <HiOutlineAcademicCap />,
      question: "Do I need previous trading experience to join?",
      answer: "Absolutely not. Our curriculum is structured in levels, starting from 'Foundation' for complete beginners to 'Elite SMC' for advanced traders looking for institutional edge."
    },
    {
      category: "Funding & Prop Firms",
      icon: <HiOutlineCurrencyDollar />,
      question: "Will this course help me pass Prop-Firm challenges?",
      answer: "Yes. In fact, 70% of our members join specifically to pass challenges like FTMO and E8. We provide the exact risk management models required by these firms."
    },
    {
      category: "Security & Access",
      icon: <HiOutlineShieldCheck />,
      question: "Is there lifetime access to the community?",
      answer: "Once you enroll, you get lifetime access to the video modules and the private Discord mastermind where we share daily market markups."
    }
  ];

  return (
    <section className="relative py-24 bg-[#fafafa] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none">
        <HiOutlineQuestionMarkCircle size={600} style={{ color: brandColor }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Static Content */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 block" style={{ color: brandColor }}>
                Knowledge Base
              </span>
              <h2 className="text-5xl font-semibold text-slate-900 tracking-tighter mb-6 leading-tight">
                Frequently Asked <br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)` }}>
                  Questions.
                </span>
              </h2>
              <p className="text-slate-500 text-lg mb-8">
                Can't find what you're looking for? Reach out to our 24/7 support desk.
              </p>
              
              <div className="p-6 rounded-3xl bg-white shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: brandColor }}>
                  <HiOutlineQuestionMarkCircle size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Still have questions?</h4>
                  <p className="text-sm text-slate-400">support@NIFESDforex.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive Accordion */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`cursor-pointer overflow-hidden rounded-4xl border transition-all duration-500 ${
                    activeIndex === index 
                    ? 'bg-white border-blue-100 shadow-2xl' 
                    : 'bg-white/50 border-slate-100 hover:border-blue-200'
                  }`}
                >
                  <div className="p-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          activeIndex === index ? 'text-white scale-110' : 'bg-slate-50 text-slate-400'
                        }`}
                        style={{ backgroundColor: activeIndex === index ? brandColor : '' }}
                      >
                        {faq.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1 block">
                          {faq.category}
                        </span>
                        <h3 className={`text-xl font-semibold transition-colors ${activeIndex === index ? 'text-slate-900' : 'text-slate-600'}`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}>
                      <HiOutlineChevronDown size={20} className={activeIndex === index ? 'text-blue-600' : 'text-slate-300'} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 ml-18 border-t border-slate-50 pt-6">
                          <p className="text-slate-500 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;