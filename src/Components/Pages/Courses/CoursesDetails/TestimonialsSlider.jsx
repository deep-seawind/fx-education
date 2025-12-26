import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiOutlineStar } from "react-icons/hi2";
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior Designer",
    text: "This course changed how I view web development. The design system section is gold!",
  },
  {
    name: "Mark Thompson",
    role: "Frontend Lead",
    text: "Practical, deep, and actually fun to follow along. Highly recommend for mid-level devs.",
  },
  {
    name: "Jessica Lee",
    role: "UI/UX Developer",
    text: "Amazing curriculum and real-life projects. I feel confident now building scalable apps.",
  },
  {
    name: "David Kim",
    role: "Fullstack Developer",
    text: "The course modules are structured perfectly for beginners and advanced learners alike.",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="bg-slate-900 rounded-[3rem] text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Student Success Stories
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
          1280: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex text-amber-400 gap-1">
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
              </div>
              <p className="italic text-slate-300 text-sm">"{t.text}"</p>
              <div className="font-bold text-xs uppercase tracking-widest text-white">
                — {t.name},{" "}
                <span className="text-slate-500 font-medium">{t.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSlider;
