import {
  BiSolidCircle,
  BiRightArrowAlt,
  BiPlayCircle,
  BiGroup,
  BiAward,
  BiTrendingUp,
} from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Bnnaer1 from "../../../assets/banner/banner-1.jpg";
import Bnnaer2 from "../../../assets/banner/banner-2.jpg";
import Bnnaer3 from "../../../assets/banner/banner-3.jpg";

const Hero = () => {
  const slides = [
    {
      image: Bnnaer1,
      badge: "AI-Powered Finance Education",
      title: "Become a Global Fund Manager in 90 Days",
      description:
        "Master the markets through live simulations, certifications, and direct career placement with Radiant Global Fund.",
    },
    {
      image: Bnnaer2,
      badge: "Professional Trading Program",
      title: "Trade Global Markets With Confidence",
      description:
        "Learn institutional strategies, portfolio management, and risk control from industry experts.",
    },
    {
      image: Bnnaer3,
      badge: "Career-Focused Learning",
      title: "From Beginner to Fund Manager",
      description:
        "Structured learning paths with real-world trading experience and placement support.",
    },
  ];

  return (
    <div className=" ">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="min-h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              id="home"
              className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-20 overflow-hidden flex items-center bg-[#F8FAFC]"
              style={{
                backgroundImage: `linear-gradient(
        to right,
        rgba(255,255,255,0.98) 20%,
        rgba(255,255,255,0.85) 50%,
        rgba(255,255,255,0.4) 100%
      ), url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* LEFT CONTENT */}
                  <div className="flex flex-col space-y-10">
                    <div className="inline-flex items-center gap-2.5 w-fit bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-5 py-2 text-sm font-bold text-slate-600 tracking-tight transition-all hover:border-indigo-200">
                      <BiSolidCircle className="w-2 h-2 text-emerald-500 animate-pulse" />
                      <span className="uppercase tracking-widest text-[11px]">
                        {slide.badge}
                      </span>
                    </div>

                    <div className="space-y-6">
                      <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight">
                        Master the
                        <span className="text-color"> Markets.</span>
                      </h1>

                      <p className="text-lg md:text-xl text-slate-600 ">
                        Elevate your trading psychology and technical prowess
                        with our institutional-grade learning ecosystem.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-5">
                      <button className="flex items-center gap-3 px-10 py-5 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-bold shadow-[0_20px_40px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1.5 active:scale-95">
                        Start Learning
                        <BiRightArrowAlt className="text-2xl" />
                      </button>

                      <button className="flex items-center gap-3 px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
                        <BiPlayCircle className="text-2xl text-indigo-600" />
                        Explore Courses
                      </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-4 flex items-center gap-6 border-t border-slate-100 w-fit">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden"
                          >
                            <img
                              src={`https://i.pravatar.cc/100?img=${i + 10}`}
                              alt="user"
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-slate-400 font-medium">
                        Joined by{" "}
                        <span className="text-slate-900 font-bold">12k+</span>{" "}
                        elite traders
                      </p>
                    </div>
                  </div>

                  {/* RIGHT VISUAL (DASHBOARD) */} 
                  <div className="relative lg:block hidden h-150 w-full">
                    {/* 1. BACK LAYER: Currency Strength Heatmap */}
                    <div className="absolute top-10 right-0 w-[85%] h-105 bg-white/40 backdrop-blur-sm rounded-[3rem] border border-white/50 -rotate-3 transition-transform hover:rotate-0 duration-1000 shadow-xl shadow-slate-200/40">
                      <div className="p-8 opacity-40">
                        <div className="flex justify-between mb-8 items-center">
                          <div className="h-5 w-40 bg-slate-200 rounded-full"></div>
                          <div className="flex gap-3">
                            <div className="h-2 w-8 bg-emerald-300 rounded-full"></div>
                            <div className="h-2 w-8 bg-rose-200 rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                          {[
                            "EUR",
                            "USD",
                            "GBP",
                            "JPY",
                            "AUD",
                            "CAD",
                            "CHF",
                            "NZD",
                          ].map((curr) => (
                            <div
                              key={curr}
                              className="p-4 bg-slate-50 rounded-2xl flex flex-col items-center gap-2"
                            >
                              <div className="text-[10px] font-bold text-slate-400">
                                {curr}
                              </div>
                              <div
                                className={`h-1.5 w-full rounded-full ${
                                  curr === "USD" || curr === "GBP"
                                    ? "bg-emerald-400"
                                    : "bg-slate-200"
                                }`}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 2. MIDDLE LAYER: Live Forex Signal & Pip Tracker */}
                    <div className="absolute inset-x-4 top-20 bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-[0_50px_100px_rgba(15,23,42,0.1)] p-10 py-20 border border-white z-20 group hover:-translate-y-2 transition-all duration-500 ">
                      <div className="space-y-8 ">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                              <BiTrendingUp className="text-2xl" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                                GBP/USD{" "}
                                <span className="text-slate-400 font-light">
                                  Long
                                </span>
                              </h4>
                              <p className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                                Price Action Signal • High Prob
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-semibold text-slate-900">
                              +82.4{" "}
                              <span className="text-sm text-slate-400 font-medium">
                                PIPS
                              </span>
                            </p>
                            <p className="text-[10px] font-bold text-emerald-500 ">
                              Live Profit
                            </p>
                          </div>
                        </div>

                        {/* Institutional Order Block Visual */}
                        <div className="relative h-32 w-full bg-slate-50 rounded-4xl overflow-hidden border border-slate-100">
                          <div className="absolute inset-0 flex items-center justify-around px-4">
                            {[50, 80, 40, 90, 60, 100, 70].map((h, i) => (
                              <div
                                key={i}
                                className="w-4 bg-indigo-100 rounded-full relative group h-full flex flex-col justify-end pb-4"
                              >
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200"></div>
                                <div
                                  className={`w-full rounded-full transition-all duration-1000 ${
                                    i === 5
                                      ? "bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                                      : "bg-indigo-300"
                                  }`}
                                  style={{ height: `${h}%` }}
                                ></div>
                              </div>
                            ))}
                          </div>
                          <div className="absolute top-2 left-4 text-[9px] font-bold text-slate-400 uppercase">
                            Volume Profile
                          </div>
                        </div>

                        {/* Forex Indicators Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                            <p className="text-[9px] font-bold text-emerald-600  mb-1">
                              RSI Sentiment
                            </p>
                            <p className="text-lg font-semibold text-emerald-700 ">
                              Oversold
                            </p>
                          </div>
                          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                            <p className="text-[9px] font-bold text-indigo-600  mb-1">
                              Market Bias
                            </p>
                            <p className="text-lg font-semibold text-indigo-700 ">
                              Bullish
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
