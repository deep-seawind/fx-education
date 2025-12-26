import { TradingProvider } from "./TradingContext";
import Simulator from "./Simulator";
import BuySellPanel from "./BuySellPanel";
import PerformanceStats from "./PerformanceStats";
import Breadcrumbs from "../../common/Breadcrumbs";
import {
  HiOutlineCpuChip,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const TradingPractice = () => {
  return (
    <TradingProvider>
      <div className="min-h-screen bg-[#f8fafc] ">
        {/* TOP NAVIGATION SPACE */}

       <Breadcrumbs paths={["Home", "Trading Practice", "Live Trading Simulator"]} />

        <section className="py-20 ">
          <div className="container mx-auto px-6">
            {/* HERO HEADER SECTION */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e5da0]/10 border border-[#0e5da0]/20 text-[#0e5da0] mb-2">
                  <HiOutlineCpuChip className="animate-pulse" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                    Neural Engine v2.0
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tighter leading-none">
                  Trading <span className="text-[#0e5da0]">Practice</span>{" "}
                  Simulator
                </h1>
                <p className="text-slate-500 font-medium max-w-xl">
                  Connect to live institutional liquidity pools. Master your
                  strategy without risking capital in a 1:1 real-market
                  environment.
                </p>
              </div>

              {/* LIVE MARKET STATUS PILLS */}
              <div className="hidden xl:flex items-center gap-4">
                <div className="px-6 py-4 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <div>
                    <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">
                      Market Status
                    </p>
                    <p className="text-xs font-semibold text-slate-900 uppercase">
                      London Open
                    </p>
                  </div>
                </div>
                <div className="px-6 py-4 bg-slate-900 rounded-3xl shadow-xl flex items-center gap-4">
                  <HiOutlineGlobeAlt className="text-[#0e5da0] text-xl" />
                  <div>
                    <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest">
                      Active Server
                    </p>
                    <p className="text-xs font-semibold text-white uppercase">
                      NY-LD4 Node
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN TERMINAL GRID */}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT: THE CHARTING ENGINE */}
              <div className="lg:col-span-8 xl:col-span-9 relative h-full">
               
                <div className="relative z-10 transition-all duration-500 hover:shadow-[0_50px_100px_-30px_rgba(14,93,160,0.15)] rounded-[3rem] h-full">
                  <Simulator />
                </div>

              
              </div>

              {/* RIGHT: THE COMMAND SIDEBAR */}
              <div className="lg:col-span-4 xl:col-span-3 space-y-8 lg:sticky lg:top-8">
                <div className="transition-all duration-500 hover:-translate-y-1">
                  <BuySellPanel />
                </div>
                <div className="transition-all duration-500 hover:-translate-y-1">
                  <PerformanceStats />
                </div>
 
              </div>
            </div>
          </div>
        </section>
      </div>
    </TradingProvider>
  );
};

export default TradingPractice;
