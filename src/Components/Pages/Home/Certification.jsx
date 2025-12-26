import { 
  BiAward, 
  BiQrScan, 
  BiBadgeCheck, 
  BiChevronRight, 
  BiCheckCircle,
  BiShieldQuarter,
} from "react-icons/bi";

const levels = [
  { level: "01", title: "Market Foundation", description: "Institutional micro-structures & liquidity", status: "Completed" },
  { level: "02", title: "Execution Strategy", description: "Advanced technical & quantitative risk", status: "Completed" },
  { level: "03", title: "Asset Management", description: "Multi-asset portfolio & hedge logic", status: "Active" },
  { level: "04", title: "Fund Management", description: "Proprietary capital allocation rights", status: "Locked" },
];

const CertificationUI = () => {
  return (
    <section id="certifications" className="py-24 lg:py-16 bg-[#020617] relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 -left-20 w-150 h-150 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* LEFT: THE INTERACTIVE CERTIFICATE STACK */}
      <div className="w-full lg:w-1/2 relative">
  {/* Background Decorative Frame */}
  <div className="absolute top-6 left-6 w-full h-full border border-slate-200 rounded-[3rem] -z-10 bg-white" />

  <div className="bg-white rounded-[3rem] p-12 shadow-[0_30px_80px_rgba(15,23,42,0.12)] border border-slate-200 relative group overflow-hidden">
    
    {/* Subtle Pattern Overlay */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

    {/* Header */}
    <div className="flex justify-between items-start mb-16 relative">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-[#0e5da0] mb-2">
          <BiShieldQuarter className="text-2xl" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Official Credentials
          </span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tighter">
          Board of Governors
        </h3>
      </div>

      <div className="w-16 h-16 rounded-2xl bg-[#0e5da0]/10 flex items-center justify-center shadow-md">
        <BiAward className="text-3xl text-[#0e5da0]" />
      </div>
    </div>

    {/* Awarded To */}
    <div className="mb-20 relative">
      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
        Awarded To
      </p>
      <div className="relative inline-block">
        <h4 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
          Alexander Pierce
        </h4>
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-[#0e5da0] to-transparent rounded-full" />
      </div>
    </div>

    {/* Level */}
    <div className="flex items-center gap-6 mb-16">
      <div className="px-5 py-2 rounded-full bg-[#0e5da0] text-white text-xs font-black tracking-widest uppercase shadow">
        Level 04 Certified
      </div>
      <div className="h-px flex-1 bg-slate-200" />
    </div>

    {/* Footer */}
    <div className="flex items-end justify-between relative">
      <div className="space-y-4">
        <BiQrScan className="text-5xl text-slate-300 group-hover:text-[#0e5da0] transition-colors duration-500" />
        <div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Verification Hash
          </p>
          <p className="text-xs font-mono text-slate-700">
            0x882...94XP
          </p>
        </div>
      </div>

      <div className="text-center">
        <BiBadgeCheck className="text-5xl text-emerald-500 mx-auto mb-2 drop-shadow-sm" />
        <p className="text-[10px] font-black text-slate-900 capitalize tracking-widest">
          Authenticated
        </p>
      </div>
    </div>
  </div>

  {/* Floating Achievement Widget */}
  <div className="absolute -bottom-10 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-200 hidden md:block border-l-4 border-l-emerald-500">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-2xl">
        <BiCheckCircle />
      </div>
      <div>
        <p className="text-xs font-black text-slate-900 tracking-tight">
          Placement Ready
        </p>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
          Score: 98/100
        </p>
      </div>
    </div>
  </div>
</div>


          {/* RIGHT: CONTENT & PATHWAY */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 rounded-full text-color font-bold text-[10px] uppercase tracking-widest mb-8 border border-blue-500/20">
                <span className="relative flex h-2 w-2"> 
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-color"></span>
                </span>
                Career Placement Protocol
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none mb-8">
                The Proof of <span className=" text-color">Skill Pathway.</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                We don't sell courses; we vet talent. Our levels act as a rigorous filter, ensuring only the top 1% manage institutional funds.
              </p>
            </div>

            <div className="space-y-4">
              {levels.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-6 p-6 rounded-4xl border transition-all duration-500 group cursor-default
                  ${item.status === 'Locked' ? 'bg-slate-900/20 border-white/5 opacity-40' : 'bg-slate-900/40 border-white/10 hover:border-indigo-500/50 hover:bg-slate-800/60 shadow-xl shadow-black/20'}
                `}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-all
                    ${item.status === 'Locked' ? 'bg-slate-500 text-slate-300' : 'bg-white text-slate-950 group-hover:bg-[#0e5da0] group-hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'}
                  `}>
                    {item.level}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-white tracking-tight">{item.title}</h4>
                      {item.status === 'Completed' && <BiCheckCircle className="text-emerald-500 shadow-emerald-500" />}
                    </div>
                    <p className="text-sm text-slate-400 font-medium leading-tight">{item.description}</p>
                  </div>
                  <div className={`text-[10px] font-black uppercase tracking-widest transition-colors
                    ${item.status === 'Active' ? 'text-indigo-400' : 'text-slate-200 group-hover:text-indigo-400'}
                  `}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationUI;