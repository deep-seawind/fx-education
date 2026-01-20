import { motion } from "framer-motion";
import {
  BiBriefcase,
  BiCheckCircle,
  BiUserCheck,
  BiTrendingUp,
  BiShieldQuarter,
  BiGlobe,
  BiBarChartAlt2,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../common/Breadcrumbs";
import PlacementImage from "../../../assets/placment/placement.avif";

/* ------------------ MOTION VARIANTS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const PlacementSupport = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      <Breadcrumbs paths={["Home", "Placement"]} />

      {/* --- HERO SECTION --- */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      >
        <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold rounded-full bg-amber-500/10 text-yellow-400 border border-amber-500/20">
              Career Outcomes Focused
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-white">
              100% Placement Support <br />
              <span className="bg-linear-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Built for Serious Traders
              </span>
            </h1>

            <p className="text-slate-300 max-w-xl mb-8">
              We don’t just teach trading — we help you transition into real
              industry roles through structured placement assistance,
              institutional exposure, and career mentorship.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <button className="px-7 py-3.5 rounded-full bg-primary-color font-semibold shadow-lg transition-all">
                  Apply for Placement
                </button>
              </Link>

              <Link to="/main-courses">
                <button className="px-7 py-3.5 rounded-full border border-white/20 hover:bg-white/10 font-semibold transition-all">
                  View Courses
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Placement Rate", value: "94%", icon: BiCheckCircle },
              { label: "Hiring Partners", value: "120+", icon: BiGlobe },
              { label: "Avg. Package", value: "10LPA - 12LPA", icon: BiBarChartAlt2 },
              { label: "Global Roles", value: "15+", icon: BiBriefcase },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-6"
              >
                <stat.icon className="text-4xl bg-primary-color p-2 rounded mb-4" />
                <div className="text-3xl font-semibold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The Career Roadmap
              </h2>
              <p className="text-slate-500">
                We guide you through every milestone of your professional
                journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: BiUserCheck,
                title: "Skill Audit",
                desc: "Technical screening and personality mapping for role alignment.",
              },
              {
                icon: BiTrendingUp,
                title: "Desk Ready",
                desc: "Intensive simulation training with real market liquidity exposure.",
              },
              {
                icon: BiBriefcase,
                title: "Direct Access",
                desc: "Exclusive referrals to our network of 120+ institutional partners.",
              },
              {
                icon: BiShieldQuarter,
                title: "Alumni Vault",
                desc: "Lifelong access to career workshops and desk upgrades.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-slate-100 hover:bg-white border border-transparent hover:border-amber-100 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-color shadow-sm flex items-center justify-center mb-6">
                  <step.icon className="text-2xl text-black" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
                <div className="absolute top-6 right-8 text-4xl font-bold text-slate-200 group-hover:text-amber-100">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- ELIGIBILITY SECTION --- */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-12 lg:p-20 lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Who can apply?
              </h2>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {[
                  "Program Graduates",
                  "Final Year Students",
                  "Career Switchers",
                  "Prop-Desk Aspirants",
                  "Fintech Enthusiasts",
                  "Quantitative Analysts",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <BiCheckCircle className="text-amber-400" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div
              className="bg-emerald-500 p-12 lg:p-20 lg:w-2/5 flex flex-col justify-center text-white relative overflow-hidden"
              style={{ backgroundImage: `url(${PlacementImage})` }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Merit-First Policy</h3>
                <h6 className="text-emerald-50/80 leading-relaxed pt-2">
                  Our support is exclusively for students who demonstrate
                  discipline and consistency. We value your performance charts
                  over your resume.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- CTA SECTION --- */}
      <section className="pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-linear-to-br from-white to-slate-50 border border-white shadow-2xl rounded-[4rem] py-10 px-10 max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to turn the screen <br /> into your office?
            </h2>
            <h6 className="text-slate-500 mb-10 max-w-xl mx-auto text-lg">
              Seats for the next placement cohort are filling up. Secure your
              assessment slot today.
            </h6>
            <Link to="/signup">
              <button className="bg-primary-color text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-amber-200 transition-all hover:-translate-y-1">
                Begin Assessment
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlacementSupport;
