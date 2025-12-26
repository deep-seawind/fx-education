import React, { useEffect, useState } from "react";
import {
  BiTrendingUp,
  BiGroup,
  BiStar,
  BiTimeFive,
  BiLayer,
  BiBarChartAlt,
  BiChevronRight,
} from "react-icons/bi";
import { useCourseFilters } from "../context/CourseFilterContext";
import { Link } from "react-router-dom";
import CourseSkeleton from "./CourseSkeleton";
import CourseExam from "./CourseExam";

const CourseCard = () => {
  const courses = [
    {
      title: "Advanced Order Flow & Liquidity",
      category: "Institutional Trading",
      courseLevel: "Advanced",
      duration: "12.5 Hours",
      rating: "4.9",
      reviews: "2.4k",
      price: "499",
      students: "8,400",
      instructor: { name: "Alex Pierce", role: "Senior Quant" },
      highlights: ["Volume Profile", "DOM Scaling", "Heatmap Analysis"],
      image:
        "https://images.unsplash.com/photo-1713461983836-de0a45009424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHx0cmFkaW5nfGVufDB8fDB8fHww",
    },

    {
      title: "Smart Money Concepts Mastery",
      category: "Forex & Indices",
      courseLevel: "Intermediate",
      duration: "9.3 Hours",
      rating: "4.8",
      reviews: "1.9k",
      price: "399",
      students: "6,200",
      instructor: { name: "Daniel Moore", role: "FX Strategist" },
      highlights: ["Liquidity Sweeps", "Market Structure", "Kill Zones"],
      image:
        "https://images.unsplash.com/photo-1644191199586-789b1d75c8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHx0cmFkaW5nfGVufDB8fDB8fHww",
    },

    {
      title: "Quantitative Trading with Python",
      category: "Algorithmic Trading",
      courseLevel: "Expert",
      duration: "18 Hours",
      rating: "5.0",
      reviews: "3.1k",
      price: "699",
      students: "5,900",
      instructor: { name: "Sophia Lang", role: "Quant Engineer" },
      highlights: ["Backtesting", "Risk Models", "Alpha Strategies"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const { filters } = useCourseFilters();

  const filteredCourses = courses
    .filter(
      (course) =>
        filters.category === "All Courses" ||
        course.category === filters.category
    )
    .filter((course) =>
      course.title.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter((course) => !filters.certification || course.certified === true)
    .filter((course) => !filters.selfPaced || course.selfPaced === true)
    .sort((a, b) => {
      if (filters.sort === "Newest Release") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (filters.sort === "Difficulty: High") {
        return b.difficulty - a.difficulty;
      }
      return 0;
    });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      <section className="container mx-auto">
        <div className="flex flex-col gap-6">
          {loading
            ? [1, 2, 3].map((n) => <CourseSkeleton key={n} />)
            : filteredCourses.map((course, index) => (
                <Link
                  to={"/course-details"}
                  key={index}
                  className="group relative w-full bg-white rounded-[2.5rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_40px_80px_rgba(14,93,160,0.12)] transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center"
                >
                  {/* LEFT: Image Section (Fixed Width on Desktop) */}
                  <div className="relative h-60 lg:h-72 w-full lg:w-100 shrink-0 overflow-hidden rounded-4xl">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                    {/* Floating Badge */}
                    <div className="absolute top-5 left-5">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                        <BiTrendingUp className="text-emerald-400" />
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white">
                          Trending
                        </p>
                      </div>
                    </div>

                    {/* Stats on Image */}
                    <div className="absolute bottom-5 left-6 flex items-center gap-4 text-white text-xs font-bold">
                      <div className="flex items-center gap-1.5">
                        <BiGroup className="text-[#0e5da0] text-lg" />
                        {course.students} Traders
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Content Section */}
                  <div className="grow w-full py-2">
                    <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                      <div className="flex items-center gap-3">
                        <span className="px-4 py-1.5 bg-[#0e5da0]/10 text-[#0e5da0] rounded-xl text-[10px] font-bold uppercase">
                          {course.category}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border

                              ${
                                course.courseLevel === "Beginner"
                                  ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                                  : course.courseLevel === "Intermediate"
                                  ? "bg-sky-50 border-sky-200 text-sky-700"
                                  : course.courseLevel === "Advanced"
                                  ? "bg-amber-50 border-amber-200 text-amber-700"
                                  : "bg-rose-50 border-rose-200 text-rose-700"
                              }

                            `}
                        > 

                          <span
                            className={`h-1.5 w-1.5 rounded-full

                    ${
                      course.courseLevel === "Beginner"
                        ? "bg-emerald-500"
                        : course.courseLevel === "Intermediate"
                        ? "bg-sky-500"
                        : course.courseLevel === "Advanced"
                        ? "bg-amber-500"
                        : "bg-rose-500"
                    }`}
                          />

                          {course.courseLevel}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BiStar className="text-amber-400" />
                        <span className="font-bold">{course.rating}</span>
                        <span className="text-xs text-slate-400">
                          ({course.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#0e5da0] transition-colors leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-slate-500 text-sm mb-6 line-clamp-2 max-w-2xl">
                      Master the art of {course.category} with our
                      institutional-grade curriculum. This program covers
                      advanced liquidity concepts, market structure, and
                      professional risk management.
                    </p>

                    {/* Meta Info Grid */}
                    <div className="flex flex-wrap items-center gap-8 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-slate-50 rounded-xl">
                          <BiTimeFive className="text-[#0e5da0] text-xl" />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold">
                            Duration
                          </p>
                          <p className="text-sm font-bold text-slate-900">
                            {course.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-slate-50 rounded-xl">
                          <BiLayer className="text-[#0e5da0] text-xl" />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold">
                            Curriculum
                          </p>
                          <p className="text-sm font-bold text-slate-900">
                            24 Modules
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-slate-50 rounded-xl">
                          <BiBarChartAlt className="text-[#0e5da0] text-xl" />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold">
                            Skill Level
                          </p>
                          <p className="text-sm font-bold text-slate-900">
                            {course.courseLevel}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer: Instructor & Price */}
                    <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                      <div className="flex items-center gap-3">
                         
                          <p className="text-[10px] text-slate-400 font-bold">
                            Price <span></span>
                          </p>
                          <div className="">
                          <h1 className="text-3xl font-bold text-slate-900">
                            ₹{course.price}
                          </h1>
                         </div>
                      </div>

                      <div className="flex items-center gap-6">
                       
                        <Link
                          to="/course-details"
                          className="flex items-center gap-3 px-5 py-5 bg-color text-white rounded-full font-bold text-sm tracking-widest shadow-[0_20px_40px_rgba(14,93,160,0.3)] hover:shadow-[0_25px_50px_rgba(14,93,160,0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300"
                        >
                          Enroll Now
                          <BiChevronRight className="text-xl" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </section>
     
    </>
  );
};

export default CourseCard;
