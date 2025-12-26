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
            className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center "
            style={{
              backgroundImage: `linear-gradient(
                to right,
                rgba(0,0,0,0.95),
                rgba(0,0,0,0.30)
              ), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
              
          {/* LEFT */}
          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2.5 w-fit bg-white backdrop-blur border border-slate-200 shadow-sm rounded-full px-4 py-1.5 text-sm font-semibold text-slate-600">
              <BiSolidCircle className="w-2 h-2 text-emerald-500 animate-pulse" />
              {slide.badge}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold text-slate-100 leading-[1.1] tracking-tight">
              {slide.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-xl">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-primary-color hover:bg-white text-white hover:text-color rounded-2xl font-semibold shadow-xl transition-all hover:-translate-y-1">
                Start Learning
                <BiRightArrowAlt className="text-2xl" />
              </button>

              <button className="flex items-center gap-2 px-8 py-4 bg-white backdrop-blur border border-slate-200 text-slate-700 rounded-2xl font-semibold">
                <BiPlayCircle className="text-2xl text-color" />
                Explore Courses
              </button>
            </div>
          </div>

                {/* Right Visual Section */}
                <div className="relative">
                  <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 border border-slate-100">
                    {/* Dashboard Mockup */}
                    <div className="space-y-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            Portfolio Value
                          </p>
                          <h3 className="text-4xl font-semibold text-slate-900 mt-1">
                            $124,500.00
                          </h3>
                        </div>
                        <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-1">
                          <BiTrendingUp /> +12.4%
                        </div>
                      </div>

                      {/* Simplified Professional Chart */}
                      <div className="h-44 flex items-end gap-3 px-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-slate-50 rounded-t-lg relative group h-full"
                            >
                              <div
                                className="absolute bottom-0 left-0 right-0 bg-indigo-500/20 group-hover:bg-indigo-500 rounded-t-lg transition-all duration-500"
                                style={{ height: `${height}%` }}
                              />
                            </div>
                          )
                        )}
                      </div>

                      {/* Metric Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {["Trades", "Win Rate", "Rank"].map((item, i) => (
                          <div
                            key={i}
                            className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50"
                          >
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter mb-1">
                              {item}
                            </p>
                            <p className="text-lg font-semibold text-slate-800">
                              {i === 1 ? "78%" : i === 2 ? "Elite" : "247"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* High-Impact Floating Cards */}
                    <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 flex items-center gap-4 animate-bounce duration-3000">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <BiAward className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 tracking-tight">
                          Level 3 Complete
                        </p>
                        <p className="text-[10px] font-semibold text-emerald-500 uppercase">
                          Certified Global Trader
                        </p>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-slate-900 rounded-2xl shadow-2xl p-5 flex items-center gap-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                        <BiTrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white tracking-tight">
                          Active Trade Profit
                        </p>
                        <p className="text-xs font-semibold text-emerald-400">
                          +$2,450.00
                        </p>
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
