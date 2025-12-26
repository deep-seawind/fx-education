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

const CourseCard = () => {
const courses = [
  {
    title: "Global Financial Markets & Trading Foundation",
    category: "Core Markets",
    courseLevel: "Beginner",
    duration: "90 Days",
    rating: "4.9",
    reviews: "12.8k",
    price: "9,999",
    students: "24,500",
    highlights: [
      "Market Structure Mastery",
      "Order Flow & Liquidity",
      "Institutional Trading Systems",
      "Live Demo Trading",
    ],
    image:
      "https://images.unsplash.com/photo-1713461983836-de0a45009424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHx0cmFkaW5nfGVufDB8fDB8fHww",
  },

  {
    title: "Quantitative Trading, AI & Algorithmic Models",
    category: "Algo & AI Trading",
    courseLevel: "Advanced",
    duration: "16 Weeks",
    rating: "4.8",
    reviews: "8.7k",
    price: "14,999",
    students: "9,800",
    highlights: [
      "Python Backtesting",
      "Machine Learning Alpha",
      "High-Frequency Systems",
      "Live Algo Deployment",
    ],
    image:
      "https://images.unsplash.com/photo-1644191199586-789b1d75c8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHx0cmFkaW5nfGVufDB8fDB8fHww",
  },

  {
    title: "Fund Management, Portfolio Science & Risk Systems",
    category: "Portfolio Management",
    courseLevel: "Expert",
    duration: "14 Weeks",
    rating: "5.0",
    reviews: "6.2k",
    price: "19,999",
    students: "4,300",
    highlights: [
      "Modern Portfolio Theory",
      "VaR & Stress Testing",
      "Factor Models",
      "Institutional Risk Frameworks",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },

  {
    title: "Financial Compliance, Ethics, AML & Institutional Processes",
    category: "Compliance & Governance",
    courseLevel: "Intermediate",
    duration: "8 Weeks",
    rating: "4.7",
    reviews: "5.1k",
    price: "7,999",
    students: "11,200",
    highlights: [
      "SEBI & Global Regulations",
      "AML/KYC Frameworks",
      "Trade Surveillance",
      "Ethics in Finance",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZSUyMGNvbXBsaWFuY2V8ZW58MHx8MHx8fDA%3D",
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
       <section className="container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {loading
      ? [1, 2, 3, 4].map((n) => <CourseSkeleton key={n} />) // Show 4 skeletons in grid
      : filteredCourses.map((course, index) => (
          <Link
            to="/course-details"
            key={index}
            className="group relative w-full bg-white rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] 
                       border border-slate-100 hover:shadow-[0_40px_80px_rgba(14,93,160,0.12)] 
                       transition-all duration-500 flex flex-col overflow-hidden"
          >
            {/* Image Section - Full width, fixed height */}
            <div className="relative h-64 lg:h-80 w-full overflow-hidden rounded-4xl mb-6">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />

              {/* Trending Badge */}
              <div className="absolute top-5 left-5">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                  <BiTrendingUp className="text-emerald-400" />
                  <h6 className="text-sm font-semibold tracking-widest text-white">
                    Trending
                  </h6>
                </div>
              </div>

              {/* Students Count */}
              <div className="absolute bottom-5 left-6 flex items-center gap-2 text-white text-sm font-semibold">
                <BiGroup className="text-[#0e5da0] text-lg" />
                {course.students} Traders
              </div>
            </div>

            {/* Content Section */}
            <div className="px-2 pb-4">
              {/* Category + Rating */}
              <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 bg-[#0e5da0]/10 text-[#0e5da0] rounded-xl text-[10px] font-semibold uppercase">
                    {course.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border
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
                        }
                      `}
                    />
                    {course.courseLevel}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <BiStar className="text-amber-400 text-lg" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-xs text-slate-400">
                    ({course.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#0e5da0] transition-colors leading-tight">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                Master the art of {course.category} with our institutional-grade curriculum. 
                This program covers advanced liquidity concepts, market structure, and professional risk management.
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-50 rounded-xl">
                    <BiTimeFive className="text-[#0e5da0] text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Duration</p>
                    <p className="text-sm font-semibold text-slate-900">{course.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-50 rounded-xl">
                    <BiLayer className="text-[#0e5da0] text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Curriculum</p>
                    <p className="text-sm font-semibold text-slate-900">24 Modules</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-50 rounded-xl">
                    <BiBarChartAlt className="text-[#0e5da0] text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Skill Level</p>
                    <p className="text-sm font-semibold text-slate-900">{course.courseLevel}</p>
                  </div>
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Starting at</p>
                  <h2 className="text-3xl font-semibold text-slate-900">₹{course.price}</h2>
                </div>

                <Link
                  to="/course-details"
                  className="flex items-center gap-3 px-8 py-4 bg-[#0e5da0] text-white rounded-full font-semibold text-sm uppercase tracking-widest 
                             shadow-[0_20px_40px_rgba(14,93,160,0.3)] hover:shadow-[0_25px_50px_rgba(14,93,160,0.4)] 
                             hover:-translate-y-1 active:scale-95 transition-all duration-300"
                >
                  Enroll Now
                  <BiChevronRight className="text-xl" />
                </Link>
              </div>
            </div>
          </Link>
        ))}
  </div>
</section>
      </section>
     
    </>
  );
};

export default CourseCard;
