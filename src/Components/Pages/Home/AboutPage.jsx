import {
  BiChevronRight,
  BiGlobe,
  BiStats,
  BiShieldQuarter,
  BiBarChartSquare,
} from "react-icons/bi";
import AboutUs from "../../../assets/about-us/about-us.avif";
import AboutBanner from "../../../assets/about-us/about-us-background.jpg";
import { motion } from "framer-motion";

const AboutPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="bg-[#fcfcfd] overflow-hidden">
      {/* --- Section 1: Hero Context --- */}
      <section className="py-16 relative">
        {/* Modernist Geometric Decorations */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-indigo-50/40 to-transparent -z-10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
            <motion.div
              className="relative col-span-3"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Premium Breadcrumb Tag */}
              <div className="inline-flex items-center gap-3 px-2 py-1 bg-white border border-slate-200 rounded-full mb-8 shadow-sm">
                <span className="bg-color text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  New Era
                </span>
                <span className="text-[10px] font-bold text-slate-500 pr-3 uppercase tracking-widest">
                  Institutional Finance 2.0
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter mb-8 leading-[1.1]">
                We are redefining
                <span className="relative ms-4">
                  <span className="relative z-10 text-color italic font-serif">
                    Institutional
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-indigo-100"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5C50 5 150 0 200 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="block mt-2">Trading execution.</span>
              </h1>

              <div className="grid grid-cols-1 gap-6 mb-10">
                <div className="p-6 bg-white border-l-4 border-indigo-600 rounded-r-3xl shadow-sm shadow-indigo-100/50">
                  <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                    "Bridging the gap between retail curiosity and institutional
                    execution through world-class simulation."
                  </p>
                </div>
                <p className="text-lg text-slate-500 font-medium leading-relaxed pl-2">
                  By focusing on practical skills and global market exposure, we
                  empower learners to build the discipline required to succeed
                  in today’s competitive financial ecosystem.
                </p>
              </div>

              {/* Action Group */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-color text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all hover:shadow-xl hover:shadow-indigo-200">
                  Explore Programs <BiChevronRight className="text-xl" />
                </button>
                <div className="flex -space-x-3 items-center ml-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="student"
                      />
                    </div>
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-4">
                    +2k Students
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Creative Multi-Layer Image Composition */}
            <motion.div
              className="relative col-span-2"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Back Decorative Frame */}
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-dashed border-indigo-200 rounded-[4rem] -z-10 rotate-3" />

              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-indigo-100 transition-transform hover:rotate-0 duration-700">
                <img
                  src={AboutUs}
                  alt="Trading"
                  className="w-full h-100 object-cover  transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Vision & Mission (The Floating Bento) --- */}
      {/* <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold text-color uppercase tracking-[0.4em] mb-4 block">
              Core Foundations
            </span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tighter leading-tight">
              Driven by Purpose, <br /> Governed by Discipline.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="group relative p-12 rounded-[4rem] bg-indigo-50/50 border border-indigo-100 hover:bg-white hover:shadow-3xl hover:shadow-indigo-100/50 transition-all duration-700 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <BiShow className="text-6xl text-color/20 mb-8 group-hover:text-color transition-colors duration-500" />
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Our Vision
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                To become the global gold standard for trader certification,
                where every NIFESD graduate is recognized by top-tier financial
                institutions as an elite market practitioner.
              </p>
            </div>

            
            <div className="group relative p-12 rounded-[4rem] bg-white border border-slate-200 hover:border-indigo-600 transition-all duration-700 shadow-sm">
              <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-xl group-hover:bg-color group-hover:rotate-[15deg] transition-all">
                <BiTargetLock className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Democratizing high-finance by providing access to the same
                tools, data, and mentorship used by the world's leading hedge
                funds and asset management firms.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- Section 3: Numbers Achievement (The Clean Institutional Grid) --- */}
      <section className="bg-white py-16">
        <div className="container mx-auto ">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="bg-slate-950 rounded-[5rem] p-5 lg:p-8 border border-slate-800 relative overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url('${AboutBanner}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* GRADIENT MASK (Ensures readability and depth) */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/70 to-black z-0" />

              {/* LIGHTING & DECOR */}
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-color/20 rounded-full blur-[120px] pointer-events-none z-10" />

              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none z-10">
                <BiGlobe className="text-[30rem] -mr-32 -mb-32 text-indigo-500" />
              </div>

              <div className="grid lg:grid-cols-12 gap-16 items-center relative z-20">
                <div className="lg:col-span-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tighter">
                    Quantifying our
                    <span className="text-color ps-2">
                      Institutional Impact.
                    </span>
                  </h2>

                  <div className="space-y-4">
                    {[
                      "SEC Compliant Standards",
                      "Real-time Tier 1 Liquidity Feed",
                      "Institutional Mentorship",
                    ].map((text) => (
                      <div
                        key={text}
                        className="flex items-center gap-3 text-slate-200 font-bold text-lg group"
                      >
                        <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Active Countries",
                      val: "45+",
                      icon: <BiGlobe />,
                    },
                    {
                      label: "Placements",
                      val: "500+",
                      icon: <BiShieldQuarter />,
                    },
                    {
                      label: "Trading Vol",
                      val: "$12B+",
                      icon: <BiBarChartSquare />,
                    },
                    { label: "Avg ROI", val: "24%", icon: <BiStats /> },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative z-10">
                        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform bg-primary-color table rounded p-1">
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-white mb-1 tracking-tighter">
                          {stat.val}
                        </div>
                        <div className="text-[10px] font-semibold text-slate-200 uppercase tracking-[0.2em] group-hover:text-slate-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
