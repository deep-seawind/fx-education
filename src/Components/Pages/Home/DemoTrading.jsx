import {
  BiPulse,
  BiShieldQuarter,
  BiStats,
  BiDollarCircle,
} from "react-icons/bi";
import { motion } from "framer-motion";
import TradingChartsTabs from "./TradingChartsTabs";

/* Feature Data */
const features = [
  {
    icon: BiDollarCircle,
    title: "Virtual Account",
    description: "$100,000 virtual funds to practice", 
  },
  {
    icon: BiPulse,
    title: "Real-Time Charts",
    description: "Live market data visualization", 
  },
  {
    icon: BiShieldQuarter,
    title: "Risk Rules",
    description: "Learn risk management hands-on", 
  },
  {
    icon: BiStats,
    title: "Advanced Analytics",
    description: "Detailed performance insights", 
  },
];

/* Motion Variants (DIV only) */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const DemoTrading = () => {
  return (
    <section id="demo-trading" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            className="space-y-10"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-color animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0e5da0]">
                  Sandbox Environment
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Institutional Trading <br />
                <span className="text-color">Without the Capital Risk.</span>
              </h2>

              <p className="text-lg text-slate-500 font-medium">
                Our high-fidelity simulator mimics real liquidity pools and
                market depth, allowing you to master strategies before going
                live.
              </p>
            </div>

            {/* Features */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300"
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-primary-color flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform`}
                  >
                    <f.icon />
                  </div>

                  <h4 className="font-bold text-slate-900 mb-1">
                    {f.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Simulator Visual Side */}
          <motion.div
            className="relative group"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(79,70,229,0.15)] border border-white p-10 relative overflow-hidden">
              <div className="h-150 rounded-2xl overflow-hidden bg-white">
                <TradingChartsTabs />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoTrading;
