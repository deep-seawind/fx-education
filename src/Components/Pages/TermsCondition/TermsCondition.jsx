import React, { useState, useEffect } from 'react';
import { 
  FiFileText, FiShield, FiAlertCircle, 
  FiClock, FiCheck, FiArrowRight, FiInfo 
} from 'react-icons/fi';
import Breadcrumbs from '../../common/Breadcrumbs';
import { FaBalanceScale } from 'react-icons/fa';

const TermsCondition = () => {
  const [activeSection, setActiveSection] = useState('agreement');
  const brandBlue = "#0e5da0";

  const sections = [
    { id: 'agreement', title: 'Legal Agreement', icon: FiFileText },
    { id: 'eligibility', title: 'User Eligibility', icon: FaBalanceScale },
    { id: 'intellectual', title: 'Intellectual Property', icon: FiShield },
    { id: 'conduct', title: 'Code of Conduct', icon: FiAlertCircle },
    { id: 'termination', title: 'Account Termination', icon: FiClock },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <Breadcrumbs paths={["Home", "Terms & Conditions"]} />

      {/* 1. HERO SECTION: High-Impact Design */}
      <section className="py-16 border-b border-slate-100 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className=" ">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0e5da0] animate-pulse" />
                  <span className="text-[10px] font-semibold text-[#0e5da0] uppercase tracking-widest">Effective Dec 2025</span>
                </div>
              </div>
              <h1 className="text-6xl lg:text-5xl font-semibold text-slate-900 tracking-tighter leading-[0.9] mb-8">
                The <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0e5da0] to-blue-500">Foundation</span> of Trust.
              </h1>
              <p className="text-slate-500 text-xl font-medium max-w-xl leading-relaxed">
                NIFESD provides a professional environment for financial growth. By accessing our platform, you commit to our institutional standards and ethical guidelines.
              </p>
            </div>
            
     
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* STICKY SIDEBAR NAV */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <FiInfo className="text-[#0e5da0]" /> Document Sections
                </p>
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-between px-6 py-5 rounded-3xl transition-all duration-500 group ${
                      activeSection === item.id 
                      ? 'bg-white shadow-xl shadow-slate-200/60 text-[#0e5da0] ring-1 ring-slate-100' 
                      : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className={`w-5 h-5 ${activeSection === item.id ? 'text-[#0e5da0]' : 'text-slate-300'}`} />
                      <span className="text-xs font-semibold uppercase tracking-wider">{item.title}</span>
                    </div>
                    {activeSection === item.id && <div className="w-1.5 h-1.5 rounded-full bg-[#0e5da0]" />}
                  </button>
                ))}
 
              </div>
            </aside>

            {/* 3. SCROLLABLE ARTICLE ENGINE */}
            <main className="lg:w-3/4 space-y-32">
              
              <article id="agreement" className="scroll-mt-40 group">
                <div className="flex items-center gap-6 mb-12">
                  <div className="text-8xl font-semibold text-slate-100 group-hover:text-blue-50 transition-colors duration-500 italic">01</div>
                  <div>
                    <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Legal Agreement</h2>
                    <div className="h-1 w-12 bg-[#0e5da0] mt-2 rounded-full" />
                  </div>
                </div>
                <div className="prose prose-xl max-w-none text-slate-600 font-medium leading-relaxed">
                  <p className="mb-8">
                    By using the services of the <strong>National Institute of Financial Education & Skill Development (NIFESD)</strong>, you represent that you have read, understood, and agreed to be bound by these terms. This document constitutes a legally binding agreement between you and NIFESD.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                     <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                        <FiCheck className="text-emerald-500 mb-4 text-xl" />
                        <h4 className="font-semibold text-slate-900 uppercase text-xs mb-2">Acceptance</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed">Navigating our software confirms your digital signature to these protocols.</p>
                     </div>
                     <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                        <FiCheck className="text-emerald-500 mb-4 text-xl" />
                        <h4 className="font-semibold text-slate-900 uppercase text-xs mb-2">Modification</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed">NIFESD reserves the right to refine these terms as the financial landscape evolves.</p>
                     </div>
                  </div>
                </div>
              </article>

              <article id="eligibility" className="scroll-mt-40 group">
                <div className="flex items-center gap-6 mb-12">
                  <div className="text-8xl font-semibold text-slate-100 group-hover:text-blue-50 transition-colors duration-500 italic">02</div>
                  <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">User Eligibility</h2>
                </div>
                <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-3xl">
                  Our programs are designed for individuals dedicated to professional mastery. Users must be at least 18 years of age or have legal guardian consent to participate in advanced financial simulations.
                </p>
              </article>

              <article id="intellectual" className="scroll-mt-40">
                <div className="p-16 rounded-[4rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                   <FiShield className="absolute -bottom-10 -right-10 text-[15rem] text-white/5 rotate-12" />
                   <div className="relative z-10">
                      <h2 className="text-4xl font-semibold mb-8">Intellectual Property</h2>
                      <p className="text-xl font-light opacity-80 leading-relaxed max-w-2xl mb-10">
                        All curriculum material, trading simulator algorithms, and proprietary financial modules are the sole property of NIFESD. Redistribution, unauthorized broadcasting, or reverse engineering of our codebase is strictly prohibited and subject to international legal action.
                      </p>
                      <div className="items-center gap-4 text-xs font-semibold tracking-widest uppercase py-3 px-6 rounded-full bg-white/10 border border-white/20 inline-flex">
                         <span className="w-2 h-2 rounded-full bg-blue-400" /> No Reproduction Allowed
                      </div>
                   </div>
                </div>
              </article>

              <article id="conduct" className="scroll-mt-40 pb-40">
                <div className="flex items-center gap-6 mb-12">
                  <div className="text-8xl font-semibold text-slate-100 group-hover:text-blue-50 transition-colors duration-500 italic">03</div>
                  <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Code of Conduct</h2>
                </div>
                <div className="space-y-4">
                  {[
                    'Students must provide truthful academic and financial documentation.',
                    'Any attempt to manipulate the NIFESD trading simulator data is a breach of trust.',
                    'Platform sharing is strictly prohibited; one license per individual user.',
                    'Users must maintain professional decorum in all community financial forums.'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-6 p-8 rounded-3xl bg-white border border-slate-100 group hover:border-blue-200 transition-all">
                       <div className="w-8 h-8 rounded-full bg-blue-50 shrink-0 flex items-center justify-center text-[#0e5da0] font-semibold text-xs">
                         {i + 1}
                       </div>
                       <p className="text-slate-600 font-bold text-sm tracking-tight">{text}</p>
                    </div>
                  ))}
                </div>
              </article>

            </main>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      {/* <section className="bg-white py-24 border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-semibold text-slate-900 mb-6">Ready to commit to your growth?</h3>
            <button className="group flex items-center gap-6 px-12 py-6 rounded-full text-white font-semibold transition-all duration-500 shadow-2xl shadow-blue-900/30 hover:scale-105 mx-auto" style={{ backgroundColor: brandBlue }}>
                <span className="uppercase tracking-[0.3em] text-xs">I Agree to the Terms</span>
                <FiArrowRight className="group-hover:translate-x-2 transition-transform text-lg" />
            </button>
         </div>
      </section> */}
    </div>
  );
};

export default TermsCondition;