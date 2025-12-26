import {
  BiGlobe,
  BiStats,
  BiBriefcaseAlt,
  BiShieldQuarter,
  BiTimeFive,
  BiRightArrowAlt,
  BiCheckCircle,
} from "react-icons/bi";
import { motion } from "framer-motion";

const programs = [
  {
    icon: BiGlobe,
    title: "Global Markets",
    description:
      "Master international markets, forex trading, and cross-border investment strategies.",
    duration: "8 Weeks",
    color: "indigo",
  },
  {
    icon: BiStats,
    title: "Quant & Algo Trading",
    description:
      "Learn algorithmic trading, quantitative analysis, and automated trading systems.",
    duration: "10 Weeks",
    color: "emerald",
  },
  {
    icon: BiBriefcaseAlt,
    title: "Fund Management",
    description:
      "Comprehensive training on portfolio management, risk assessment, and fund operations.",
    duration: "12 Weeks",
    color: "blue",
  },
  {
    icon: BiShieldQuarter,
    title: "Compliance & Risk",
    description:
      "Understand regulatory frameworks, compliance requirements, and risk management.",
    duration: "6 Weeks",
    color: "slate",
  },
];

const colorMap = {
  indigo:
    "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
  emerald:
    "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
  blue: "bg-yellow-100 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white",
  slate:
    "bg-slate-200 text-slate-600 group-hover:bg-slate-800 group-hover:text-white",
};

/* Motion Variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeaturedPrograms = () => {
  return (
    <section id="courses" className="py-24 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] uppercase text-color bg-indigo-50 rounded-full">
            NIFESD Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Industry-Leading Finance Courses
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Specialized programs designed by fund managers to bridge the gap
            between academic theory and institutional trading.
          </p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={card}
              whileHover={{ y: -8 }}
              className="group relative bg-zinc-50 rounded-3xl p-8 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${
                  colorMap[program.color]
                }`}
              >
                <program.icon className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                  <BiCheckCircle className="text-emerald-500" />
                  Live Trading Access
                </div>
                <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                  <BiCheckCircle className="text-emerald-500" />
                  Global Certification
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                  <BiTimeFive className="text-lg text-indigo-500" />
                  {program.duration}
                </div>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-color text-white flex items-center justify-center group-hover:bg-color transition-all"
                >
                  <BiRightArrowAlt className="text-2xl" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm inline-flex items-center gap-6 relative left-1/2 -translate-x-1/2"
        >
          <div className="flex -space-x-3 pl-2">
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
          </div>
          <p className="text-sm font-bold text-slate-700 hidden sm:block">
            Join <span className="text-color underline">1,200+ students</span>{" "}
            learning this week
          </p>
          <button className="bg-primary-color text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            Explore All Courses
          </button>
        </motion.div>

        <p className="mt-4 text-sm text-slate-400 font-medium italic text-center">
          *Certified by Radiant Global Fund Partners
        </p>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
