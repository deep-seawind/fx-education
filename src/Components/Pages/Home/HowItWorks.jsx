import {
  BiBookOpen,
  BiLineChart,
  BiCheckShield,
  BiAward,
  BiBriefcaseAlt,
  BiChevronRight,
  BiRocket,
} from "react-icons/bi";

const steps = [
  {
    icon: BiBookOpen,
    title: "Master the Theory",
    description:
      "Deep-dive into institutional modules curated by top-tier fund managers.",
    step: "01",
    color: "indigo",
    offset: "lg:mt-0",
  },
  {
    icon: BiLineChart,
    title: "Live Simulation",
    description:
      "Execute trades with real-time data in our high-fidelity trading lab.",
    step: "02",
    color: "blue",
    offset: "lg:mt-16",
  },
  {
    icon: BiCheckShield,
    title: "Vetted Exams",
    description:
      "Pass rigorous assessments to validate your professional proficiency.",
    step: "03",
    color: "emerald",
    offset: "lg:mt-0",
  },
  {
    icon: BiAward,
    title: "Get Certified",
    description:
      "Earn credentials recognized by our global institutional partners.",
    step: "04",
    color: "violet",
    offset: "lg:mt-16",
  },
  {
    icon: BiBriefcaseAlt,
    title: "Global Placement",
    description:
      "Direct career pathway into Radiant Global Fund's analyst teams.",
    step: "05",
    color: "slate",
    offset: "lg:mt-0",
  },
];

const colorTheme = {
  indigo: "from-indigo-500 to-indigo-600 shadow-indigo-100",
  blue: "from-blue-500 to-blue-600 shadow-blue-100",
  emerald: "from-emerald-500 to-emerald-600 shadow-emerald-100",
  violet: "from-violet-500 to-violet-600 shadow-violet-100",
  slate: "from-slate-700 to-slate-900 shadow-slate-100",
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-10 bg-zinc-100 relative overflow-hidden"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-50/50 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-50/50 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Creative Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-slate-400" />
            <span className="text-xs font-black tracking-[0.3em] capitalize text-color">
              The Roadmap
            </span>
            <div className="h-px w-12 bg-slate-400" />
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tighter leading-none mb-8 font-bold">
            From Learning to{" "}
            <span className="text-color">
              Earning.
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Our structured 5-step framework is built to bypass traditional
            barriers and place you directly into the world of high-finance.
          </p>
        </div>

        {/* Steps Journey */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {/* Decorative Path Line (Desktop) */}
          <svg
            className="hidden lg:block absolute top-1/2 left-0 w-full h-24 -translate-y-full opacity-20 pointer-events-none"
            viewBox="0 0 1000 100"
            fill="none"
          >
            <path
              d="M0 50 Q 125 0, 250 50 T 500 50 T 750 50 T 1000 50"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeDasharray="10 10"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1000" y2="0">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative group ${step.offset} transition-all duration-500`}
            >
              {/* Step Number Badge */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div
                  className={`w-12 h-12 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-sm font-black text-slate-900 group-hover:bg-[#135f9b] group-hover:text-white transition-all duration-500 z-20`}
                >
                  {step.step}
                </div>
              </div>

              {/* Card Container */}
              <div className="relative p-1 rounded-[2.5rem] bg-linear-to-b from-slate-100 to-transparent group-hover:from-indigo-200 transition-all duration-500">
                <div className="bg-white rounded-[2.4rem] p-8 h-full shadow-[0_4px_25px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] transition-all duration-500">
                  {/* Icon Box */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${
                      colorTheme[step.color]
                    } flex items-center justify-center mb-8 shadow-lg shadow-opacity-20 group-hover:-rotate-6 transition-transform duration-500`}
                  >
                    <step.icon className="text-3xl text-white" />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                    {step.description}
                  </p>

                  {/* Mobile Indicator */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-8 flex justify-center">
                      <div className="h-12 w-px bg-linear-to-b from-indigo-500 to-transparent" />
                    </div>
                  )}
                </div>
              </div>

              {/* Connecting Desktop Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-2 text-slate-200">
                  <BiChevronRight className="text-2xl" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Success Indicator */}
        <div className="mt-20 mb-10 flex flex-col items-center">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 w-full max-w-5xl relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BiRocket className="text-9xl text-white" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to start Level 01?
                </h4>
                <p className="text-slate-400 font-medium italic">
                  Join the next cohort starting this Monday.
                </p>
              </div>
              <button className="px-10 py-5 bg-color hover:bg-white hover:text-color text-white font-black rounded-2xl shadow-xl transition-all duration-300 active:scale-95 flex items-center gap-3">
                Join the Program <BiChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
