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
    title: "Global Financial Markets & Trading Foundation",
    description:
      "Build a strong foundation in global financial markets, trading instruments, market structure, and professional trading practices.",
    duration: "8 Weeks",
    color: "indigo",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
  },
  {
    icon: BiStats,
    title: "Quantitative Trading, AI & Algorithmic Models",
    description:
      "Master quantitative finance, AI-driven trading strategies, algorithmic models, and automated execution systems.",
    duration: "10 Weeks",
    color: "emerald",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80",
  },
  {
    icon: BiBriefcaseAlt,
    title: "Fund Management, Portfolio Science & Risk Systems",
    description:
      "Learn professional fund management, portfolio optimization, institutional risk systems, and performance analytics.",
    duration: "12 Weeks",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=900&q=80",
  },
  {
    icon: BiShieldQuarter,
    title: "Financial Compliance, Ethics, AML & Institutional Processes",
    description:
      "Understand financial regulations, compliance frameworks, AML processes, ethics, and institutional governance.",
    duration: "6 Weeks",
    color: "slate",
    image:
      "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-color bg-indigo-50 rounded-full">
            FINANSHAM Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
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
              className="group relative bg-zinc-50 rounded-3xl p-4 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
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

              {/* Image */}
              <div className="relative w-full h-40 mb-6 rounded-2xl overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-slate-500 text-[10px] line-clamp-3">
                  {program.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
                  <BiCheckCircle className="text-emerald-500" />
                  Live Trading Access
                </div>
                <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
                  <BiCheckCircle className="text-emerald-500" />
                  Global Certification
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase">
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
 

        {/* <p className="mt-12 text-sm text-slate-400 font-medium italic text-center">
          *Certified by Radiant Global Fund Partners
        </p> */}
      </div>
    </section>
  );
};

export default FeaturedPrograms;
