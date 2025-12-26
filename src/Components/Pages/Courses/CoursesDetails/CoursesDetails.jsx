import React, { useRef, useState } from "react";
import {
  HiOutlineStar,
  HiOutlineCheckBadge, 
} from "react-icons/hi2";
import { BiPlayCircle } from "react-icons/bi";
import Breadcrumbs from "../../../common/Breadcrumbs"; 
import TestimonialsSlider from "./TestimonialsSlider";
import CourseModules from "./CourseModules/CourseModules";
import CourseSidebar from "./CourseSidebar";
import { HiOutlineClock, HiOutlineGlobeAlt } from "react-icons/hi";
import CourseReview from "./CourseReview";
import { CourseProgressProvider } from "../context/CourseProgressContext";

const CoursesDetails = () => {
  const [activeTab, setActiveTab] = useState("About");
  const aboutRef = useRef(null);
  const modulesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const reviewsRef = useRef(null);

  const tabs = ["About", "Syllabus", "Testimonials", "Reviews"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case "About":
        aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "Syllabus":
        modulesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "Testimonials":
        testimonialsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "Reviews":
        reviewsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      default:
        break;
    }
  };

  const course = {
    title: "Mastering Modern UI/UX Design Systems",
    level: "Intermediate",
    duration: "12 Hours",
    lessons: 24,
    rating: 4.9,
    reviews: 1240,
    price: "$89.99",
    instructor: "Alex Rivers",
    description:
      "Learn to build scalable design systems from scratch. This course covers everything from atomic design principles to advanced prototyping in Figma and React.",
  };

  return (
    <>
      <Breadcrumbs paths={["Home", "Courses", "Institutional Courses"]} />
      <div className="min-h-screen bg-white pb-20 font-sans text-slate-900">
        
        {/* 1. Hero Section */} 
        <section className="relative pt-10 md:pt-16 pb-16 md:pb-16 overflow-hidden bg-[#fcfdfe]">
          {/* Creative Background Accents */}
          <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-slate-50 md:-skew-x-12 md:translate-x-20 -z-10 border-l border-slate-100" />
          <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-blue-50/50 rounded-full blur-[100px] -z-10" />

          <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Content: Forex Course Details */}
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-lg bg-orange-100 text-orange-700 text-[10px] font-semibold uppercase tracking-widest shadow-sm border border-orange-200">
                  Hot & New
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0e5da0]/10 text-[#0e5da0] text-[10px] font-semibold uppercase tracking-widest border border-[#0e5da0]/10">
                  Beginner Level 2026
                </span> 
              </div>

              <h1 className="text-2xl md:text-5xl font-semibold mb-4 tracking-tight text-black">
              Master MT4/MT5 & TradingView 
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed   font-medium">
                Learn Forex trading with 85% Accuracy: High-probability 
                <span className="text-slate-900 font-semibold"> Live setups </span> 
                on TradingView + MT4/MT5 strategies designed for 2026 markets.
              </p>

              <div className="space-y-6">
              

                {/* Technical Specs */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <HiOutlineStar className="text-amber-500 text-lg fill-current" />
                      <span className="text-slate-900">4.8 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <HiOutlineGlobeAlt className="text-blue-500 text-lg" />
                      <span>English [Auto]</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <HiOutlineClock className="text-slate-400 text-lg" />
                      <span>Updated 10/2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Video/Image Preview */}
            <div className="order-1 lg:order-2 relative group">
              {/* Decorative Glow behind video */}
              <div className="absolute -inset-4 bg-linear-to-tr from-[#0e5da0]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[#0e5da0]/20">
                <img
                  src="https://images.unsplash.com/photo-1713461983836-de0a45009424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHx0cmFkaW5nfGVufDB8fDB8fHww"
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Forex Trading Setup"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-all flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-white/30 blur-xl rounded-full animate-pulse" />
                    <BiPlayCircle className="text-6xl md:text-8xl text-white drop-shadow-2xl cursor-pointer hover:scale-110 transition-transform relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Sticky Tab Navigation - top adjusted for mobile header height if any */}
        <div className="sticky top-0 lg:top-24 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 container mx-auto">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`py-4 md:py-5 text-sm md:text-lg font-semibold transition-all relative whitespace-nowrap ${
                    activeTab === tab
                      ? "text-[#0e5da0]"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0e5da0] rounded-t-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-16 mt-8 md:mt-12">
          {/* Left Content Area */}
          <div className="lg:col-span-2 space-y-12 md:space-y-20">
            {/* About Section */}
            <section ref={aboutRef} id="About" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
                About this course
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 tracking-tight">
                {course.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Build production-ready Figma files",
                  "Implement atomic design in React",
                  "Advanced Prototyping techniques",
                  "Design System documentation",
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all"
                  >
                    <HiOutlineCheckBadge className="text-emerald-500 text-xl shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Modules Section */}
            <section ref={modulesRef} id="Modules" className="scroll-mt-32">
              <CourseProgressProvider>
              <CourseModules />
              </CourseProgressProvider>
            </section>

            {/* Testimonials */}
            <section
              ref={testimonialsRef}
              id="Testimonials"
              className="scroll-mt-32 bg-slate-900 rounded-3xl md:rounded-[3rem] p-6 md:p-12 text-white"
            >
              <TestimonialsSlider />
            </section>

            {/* Reviews Section */}
            <section ref={reviewsRef} id="Reviews" className="scroll-mt-32">
              <CourseReview/>
            </section>
          </div>

          {/* 3. Responsive Sidebar */}
          <aside className="relative lg:col-span-1">
            <CourseSidebar/>
          </aside>
        </div>
      </div> 
    </>
  );
};

export default CoursesDetails;
