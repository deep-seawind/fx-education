import React from "react";
import { BiHomeAlt, BiChevronRight, BiHash } from "react-icons/bi";
import BreadcrumbBanner from "../../assets/banner/breadcrumb-banner.jpg";

const Breadcrumbs = ({
  paths = ["Academy", "Institutional Trading", "Order Flow Analysis"],
}) => {
  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-20 pb-8 px-4 sm:px-6 md:px-6 overflow-hidden min-h-48">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BreadcrumbBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/95 via-slate-950/95 to-[#0e5da0]/85 backdrop-blur-[2px]" />
      </div>

      {/* Breadcrumb Content */}
      <div className="container mx-auto my-auto relative z-10">
        <nav className="flex flex-wrap justify-center items-center group pt-5">
          <div className="flex flex-wrap justify-center items-center gap-1 p-2 bg-white backdrop-blur-2xl border border-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.1)] transition-all duration-500">
            {/* Home Button */}
            <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-color text-white hover:bg-color shadow-lg shadow-slate-200 transition-all active:scale-95 group/home">
              <BiHomeAlt className="text-lg sm:text-xl transition-transform" />
            </button>

            {/* Breadcrumb Paths */}
            {paths.map((path, index) => (
              <React.Fragment key={index}>
                <BiChevronRight className="text-slate-300 text-lg sm:text-xl mx-1" />

                <div className="group/item relative">
                  <button
                    className={`
                    px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all flex items-center gap-1 sm:gap-2
                    ${
                      index === paths.length - 1
                        ? "bg-white text-color shadow-sm border border-indigo-50"
                        : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                    }
                  `}
                  >
                    <BiHash
                      className={`text-[8px] sm:text-xs ${
                        index === paths.length - 1
                          ? "text-indigo-400"
                          : "text-slate-300"
                      }`}
                    />
                    {path}

                    {index === paths.length - 1 && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-color"></span>
                      </span>
                    )}
                  </button>

                  {/* Creative Hover Label */}
                  <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 bg-slate-900 text-[8px] sm:text-[9px] font-black text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-md opacity-0 group-hover/item:opacity-100 transition-all translate-y-2 group-hover/item:translate-y-0 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                    Open {path}
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
