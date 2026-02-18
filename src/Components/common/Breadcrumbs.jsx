import React from "react";
import { BiHomeAlt, BiChevronRight, BiHash, BiGlobe } from "react-icons/bi";
// Note: Ensure your background image is a high-quality light workspace or light chart
import BreadcrumbBanner from "../../assets/banner/breadcrumb-banner.jpg";
import { Link } from "react-router-dom";

const Breadcrumbs = ({
  paths = ["TradingAcademy", "Institutional Flow", "Order Blocks"],
}) => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-34 pb-18 px-4 sm:px-6 overflow-hidden min-h-55">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${BreadcrumbBanner})` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/90 to-white backdrop-blur-[1px]" />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="container mx-auto relative z-10 text-center space-y-6">
        <nav className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-1.5 p-2.5 bg-white  backdrop-blur-xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] rounded-4xl">
            <button className="flex items-center justify-center w-11 h-11 rounded-full bg-color text-white shadow-lg shadow-indigo-100 transition-all duration-300 active:scale-90">
              <BiHomeAlt className="text-xl" />
            </button>

            {paths.map((path, index) => (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <BiChevronRight className="text-slate-300 text-xl mx-0.5" />
                )}

                <div className="group/item relative">
                  {index === paths.length - 1 ? (
                    /* 🔴 ACTIVE ITEM (Last) */
                    <button
                      className="px-5 py-2.5 rounded-full text-sm font-bold tracking-tight
                     bg-white text-slate-900 shadow-[0_10px_20px_rgba(0,0,0,0.04)]
                     border border-slate-50 flex items-center gap-2"
                    >
                      <BiHash className="text-xs text-indigo-500" />
                      {path}

                      {/* Active Pip */}
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </button>
                  ) : (
                    /* 🟢 LINK (Home) */
                    <Link
                      to={index === 0 ? "/" : "#"}
                      className="px-5 py-2.5 rounded-full text-sm font-bold tracking-tight
                     text-slate-500 hover:text-indigo-600 hover:bg-white/80
                     transition-all duration-300 flex items-center gap-2"
                    >
                      <BiHash className="text-xs text-slate-300" />
                      {path}
                    </Link>
                  )}

                  {/* Tooltip */}
                  <div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5
                      bg-slate-900 text-[10px] font-bold text-white uppercase
                      tracking-widest rounded-xl opacity-0
                      group-hover/item:opacity-100 transition-all
                      -translate-y-1 group-hover/item:translate-y-0
                      pointer-events-none z-50"
                  >
                    Navigate
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2
                        border-8 border-transparent border-t-slate-900"
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
