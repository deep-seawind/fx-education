import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  BiSolidQuoteRight,
  BiStar,
  BiCheckShield,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsStarFill } from "react-icons/bs";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fund Manager at Radiant Global", 
    content:
      "NIFESD transformed my career. The structured learning path and demo trading simulator gave me the confidence to manage real portfolios. Within 6 months, I secured a position at Radiant Global Fund.",
    rating: 5,
    verified: true,
  },
  {
    name: "Rahul Mehta",
    role: "Quantitative Analyst", 
    content:
      "The Quant & Algo Trading course exceeded my expectations. The practical approach and real-market simulations prepared me for the challenges of algorithmic trading. Highly recommended.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ananya Patel",
    role: "Portfolio Manager", 
    content:
      "What sets NIFESD apart is their placement support. The QR-verifiable certificates are recognized industry-wide, and the career guidance helped me land my dream job.",
    rating: 5,
    verified: true,
  },
  {
    name: "Priya Sharma",
    role: "Fund Manager at Radiant Global", 
    content:
      "NIFESD transformed my career. The structured learning path and demo trading simulator gave me the confidence to manage real portfolios. Within 6 months, I secured a position at Radiant Global Fund.",
    rating: 5,
    verified: true,
  },
  {
    name: "Rahul Mehta",
    role: "Quantitative Analyst", 
    content:
      "The Quant & Algo Trading course exceeded my expectations. The practical approach and real-market simulations prepared me for the challenges of algorithmic trading. Highly recommended.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ananya Patel",
    role: "Portfolio Manager", 
    content:
      "What sets NIFESD apart is their placement support. The QR-verifiable certificates are recognized industry-wide, and the career guidance helped me land my dream job.",
    rating: 5,
    verified: true,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-10 bg-[#FAFAFB] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className=" ">
            <span className="inline-block text-color font-bold text-sm capitalize tracking-[0.3em] mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter leading-none">
              Trusted by the next
              <span className="text-color ps-2">generation of managers.</span>
            </h2>
          </div>

          {/* Custom Navigation Arrows */}
          <div className="flex gap-3">
            <button className="prev-btn w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-2xl text-slate-400 hover:bg-[#0e5da0] hover:text-white transition-all shadow-sm">
              <BiChevronLeft />
            </button>
            <button className="next-btn w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-2xl text-slate-400 hover:bg-[#0e5da0] hover:text-white transition-all shadow-sm ">
              <BiChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={12000}
          autoplay={{ delay: 500 }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 2.5 },
          }}
          className="testimonial-swiper pb-20! overflow-visible!"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              {" "}
              {/* h-auto lets the slide fill the container height */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] h-full flex flex-col justify-between relative group hover:border-indigo-100 transition-all duration-500">
                {/* Decorative Quote Icon */}
                <div className="absolute top-10 right-10 text-6xl text-slate-50 opacity-10 group-hover:text-indigo-100 transition-colors pointer-events-none">
                  <BiSolidQuoteRight />
                </div>

                <div className="relative z-10 flex-1">
                  {" "}
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <BsStarFill key={i} className="text-amber-400 " />
                    ))}
                  </div>
                  {/* Testimonial Content */}
                  <p className="  text-slate-800 mb-4 italic leading-relaxed">
                    "{item.content}"
                  </p>
                </div>

                {/* Author Profile - Always stays at the bottom due to flex-1 above */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-auto">
                  <div className="flex items-center gap-4">
                     
                    <div className="min-w-0">
                      {" "}
                      {/* Prevents text overflow */}
                      <h4 className="font-bold text-slate-900 tracking-tight truncate">
                        {item.name}
                      </h4>
                    </div>
                  </div>

                  {/* Subtle Badge */}
                  <div className="hidden xl:block shrink-0">
                    <span className="px-3 py-1 rounded-full bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                      Certified Graduate
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
