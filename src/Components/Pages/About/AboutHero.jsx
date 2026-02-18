import React from "react";
import { motion } from "framer-motion";
import { HiOutlineChartBar, HiOutlineGlobeAlt } from "react-icons/hi2"; 
import { PiCertificate } from "react-icons/pi";

const AboutHero = () => {
  const brandColor = "#0e5da0";

  return (
    <section className="relative flex items-center justify-center py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          {/* Main Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[0.95]"
          >
            About{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)`,
              }}
            >
              Finansham Education Pvt. Ltd.
            </span>
          </motion.h1>
        </div>

        {/* The "Trading Desk" Bento Stack */}
        <div className="grid grid-cols-12 gap-6 container mx-auto">
          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-12 lg:col-span-7 relative group"
          >
            <div
              className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-20"
              style={{ backgroundColor: brandColor }}
            />

            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-900">
              <img
                src="https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=500&auto=format&fit=crop&q=60"
                alt="Financial Market Training"
                className="w-full lg:h-120 h-80 object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl lg:text-4xl font-semibold">
                  Institutional-Level{" "}
                  <span className="text-[#52afff]">Market Training.</span>
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Side Stack */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            {/* 24/5 Structured Learning */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 p-10 rounded-[2.5rem] border border-white flex flex-col justify-center relative overflow-hidden group"
            >
              <HiOutlineGlobeAlt
                className="absolute -right-6 -top-6 text-[12rem] rotate-12 opacity-[0.03]"
                style={{ color: brandColor }}
              />
              <h6 className="text-slate-600 lg:text-sm text-sm font-medium pb-4 ">
                Finansham Education Private Limited is a structured financial
                education and professional certification company focused on
                developing market-ready professionals in global financial
                markets, quantitative trading, institutional fund management,
                and compliance systems.
              </h6>
              <p>
                Our programs are built on applied learning, risk discipline,
                simulation-based testing, and institutional workflow training.
              </p>
            </motion.div>

            {/* Applied Learning Focus */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="lg:p-9 p-6 rounded-[2.5rem] text-white h-auto flex items-start gap-8 relative overflow-hidden shadow-2xl"
              style={{ backgroundColor: brandColor }}
            >
              <div className="absolute top-0 -left-full w-full h-full bg-white/10 skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000" />

              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-4xl border border-white/20 backdrop-blur-md shrink-0">
                <PiCertificate className="text-emerald-300" />
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-3">
                  Our Certification Philosophy
                </h4>

                <p className="text-white/90 font-medium text-sm leading-relaxed">
                  At Finansham, certification is not attendance-based.
                </p>

                <p className="text-white text-lg font-semibold my-3">
                  It is performance-based.
                </p>

                <p className="text-white/80 font-medium text-sm leading-relaxed">
                  Candidates must pass multi-level theoretical, applied, and
                  simulation assessments to earn professional designation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
