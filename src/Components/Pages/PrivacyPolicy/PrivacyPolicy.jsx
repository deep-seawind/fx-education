import React, { useState } from 'react';
import { FiShield, FiLock, FiEye, FiUserCheck, FiFileText, FiArrowRight, FiCheckCircle, FiDatabase, FiGlobe } from 'react-icons/fi';
import Breadcrumbs from '../../common/Breadcrumbs';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const brandBlue = "#0e5da0";

  const sections = [
    { id: 'introduction', title: 'Institutional Privacy', icon: FiFileText },
    { id: 'data-collection', title: 'Information Gathering', icon: FiEye },
    { id: 'data-usage', title: 'Compliance Framework', icon: FiDatabase },
    { id: 'security', title: 'Financial-Grade Security', icon: FiLock },
    { id: 'your-rights', title: 'Student Entitlements', icon: FiUserCheck },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <Breadcrumbs paths={["Home", "Institutional Privacy Policy"]} />

      <section className="bg-[#FCFCFC] min-h-screen py-24">
        {/* HERO HEADER */}
        <div className="container mx-auto px-6 lg:px-12 mb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-[0_20px_40px_-10px_rgba(14,93,160,0.3)]"
                style={{ backgroundColor: brandBlue }}
              >
                <FiShield className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span style={{ color: brandBlue }} className="text-[10px] font-semibold tracking-[0.5em] uppercase">
                  Finansham Compliance
                </span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">ISO 27001 Certified Standards</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tighter mb-8 leading-none">
              Data <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0e5da0] to-blue-400">Governance</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-2xl font-medium leading-relaxed">
              As a premier financial education institute, Finansham ensures that your academic and financial records are protected by the same encryption standards used by global banking institutions.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* STICKY NAVIGATION */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-2 p-3 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 my-4 pl-4 flex items-center gap-2">
                  <FiGlobe className="text-[#0e5da0]" /> Legal Navigation
                </p>
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-4 px-5 py-5 rounded-2xl transition-all duration-500 group ${
                      activeSection === item.id 
                      ? 'bg-[#0e5da0] text-white shadow-xl shadow-blue-900/20 translate-x-2' 
                      : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeSection === item.id ? 'text-white' : 'text-slate-400'}`} />
                    <span className="text-xs font-semibold uppercase tracking-wider">{item.title}</span>
                  </button>
                ))}
                 
              </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="lg:w-3/4 space-y-20">
              
              {/* 01. INTRODUCTION */}
              <article id="introduction" className="scroll-mt-10">
                <div className="flex items-center gap-6 mb-12">
                  <span style={{ color: `${brandBlue}15` }} className="text-8xl font-semibold italic select-none">01</span>
                  <div>
                    <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Institutional Privacy</h2>
                    <p className="text-[#0e5da0] font-bold text-xs uppercase tracking-widest mt-1">Foundational Commitment</p>
                  </div>
                </div>
                <div className="prose prose-xl max-w-none text-slate-600 font-medium leading-relaxed">
                  <p className="mb-8">
                    The <strong>National Institute of Financial Education & Skill Development (Finansham)</strong> recognizes the sensitivity of financial learning data. This policy establishes the global standards by which student, faculty, and stakeholder information is managed.
                  </p>
                  <div className={`p-10 border-l-[6px] rounded-r-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden`} style={{ borderColor: brandBlue }}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                    <p className="italic text-lg font-light leading-relaxed relative z-10 text-blue-100">
                      "Empowering financial literacy requires a foundation of absolute transparency. At Finansham, your data privacy is our primary regulatory obligation."
                    </p>
                  </div>
                </div>
              </article>

              {/* 02. DATA COLLECTION */}
              <article id="data-collection" className="scroll-mt-10">
                <div className="flex items-center gap-6 mb-12">
                  <span style={{ color: `${brandBlue}15` }} className="text-8xl font-semibold italic select-none">02</span>
                  <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Information Gathering</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-[#0e5da0] transition-colors duration-500">
                      <FiUserCheck className="w-7 h-7 group-hover:text-white transition-colors" style={{ color: brandBlue }} />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">Academic Registration</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Collection of KYC documents, enrollment details, and academic progress tracking for certification purposes.</p>
                  </div>
                  <div className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-[#0e5da0] transition-colors duration-500">
                      <FiEye className="w-7 h-7 group-hover:text-white transition-colors" style={{ color: brandBlue }} />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">Behavioral Analytics</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Monitoring interaction with financial simulators and course modules to optimize learning outcomes and UI efficiency.</p>
                  </div>
                </div>
              </article>

              {/* 03. COMPLIANCE FRAMEWORK */}
              <article id="data-usage" className="scroll-mt-10">
                <div className="flex items-center gap-6 mb-12">
                  <span style={{ color: `${brandBlue}15` }} className="text-8xl font-semibold italic select-none">03</span>
                  <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Compliance Framework</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'LMS Personalization', 
                    'Financial Certification Delivery', 
                    'Placement Assistance Tracking', 
                    'Regulatory Audit Compliance'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center justify-between p-8 rounded-3xl bg-white border border-slate-100 group hover:bg-slate-50 transition-all cursor-default">
                      <span className="font-bold text-slate-700 tracking-tight uppercase text-xs">{text}</span>
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                         <FiCheckCircle className="text-emerald-500 text-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* 04. SECURITY PROTOCOL */}
              <article id="security" className="scroll-mt-10">
                <div 
                  className="p-16 rounded-[4rem] text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(14,93,160,0.4)]"
                  style={{ backgroundColor: brandBlue }}
                >
                  <div className="absolute top-0 right-0 w-125 h-125 bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-semibold mb-8 leading-none">Financial-Grade <br/>Security Protocol</h2>
                        <p className="text-xl font-light leading-relaxed opacity-90">
                          Finansham utilizes **Military-Grade AES-256 Encryption** for all stored data. Our servers are monitored 24/7 by cyber-security experts to prevent unauthorized access and ensure your financial skill-building journey remains a secure sanctuary.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <FiLock className="text-[12rem] opacity-20" />
                    </div>
                  </div>
                </div>
              </article>

              {/* 05. STUDENT RIGHTS */}
              <article id="your-rights" className="scroll-mt-10 pb-40">
                <div className="flex items-center gap-6 mb-12">
                  <span style={{ color: `${brandBlue}15` }} className="text-8xl font-semibold italic select-none">04</span>
                  <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Student Entitlements</h2>
                </div>
                <p className="text-slate-600 font-medium text-2xl leading-relaxed mb-12 max-w-3xl">
                  Ownership of intellectual property and personal identity remains with the student. You maintain the right to revoke data consent or audit your records.
                </p>
                <div className="flex flex-wrap gap-6">
                    <button 
                        className="group flex items-center gap-6 px-12 py-6 rounded-3xl text-white font-semibold transition-all duration-500 shadow-2xl shadow-blue-900/30 hover:scale-105 active:scale-95"
                        style={{ backgroundColor: brandBlue }}
                    >
                        <span className="uppercase tracking-[0.3em] text-xs">Access Data Vault</span>
                        <FiArrowRight className="group-hover:translate-x-2 transition-transform text-lg" />
                    </button>
                    <button className="px-12 py-6 rounded-3xl border-2 border-slate-200 text-slate-500 font-semibold text-xs uppercase tracking-[0.3em] hover:bg-slate-50 transition-all">
                        Legal Inquiry
                    </button>
                </div>
              </article>

            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;