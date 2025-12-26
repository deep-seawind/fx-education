import React, { useState } from "react";
import {
  BiSearch,
  BiSliderAlt,
  BiCategory,
  BiBarChartSquare,
  BiTimer,
  BiCheckCircle,
  BiX,
  BiTrendingUp,
  BiChip,
  BiStation,
} from "react-icons/bi";
import { useCourseFilters } from "../context/CourseFilterContext";

const CourseFilter = () => { 
  const { filters, setFilters } = useCourseFilters();

  const categories = [
    { name: "All Courses", icon: <BiCategory /> },
    { name: "Order Flow", icon: <BiBarChartSquare /> },
    { name: "Quant Trading", icon: <BiChip /> },
    { name: "Psychology", icon: <BiTrendingUp /> },
    { name: "Live Sessions", icon: <BiStation /> },
  ];

  return (
   <div className="sticky top-30 ">
  <aside className="w-fulllg:w-80 bg-white border border-slate-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-6 sticky top-24 h-fit">
    {/* TITLE */}
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-xl bg-[#0e5da0]/10 text-[#0e5da0] flex items-center justify-center text-xl">
        <BiSliderAlt />
      </div>
      <h3 className="font-black text-slate-900 tracking-tight">
        Filter Courses
      </h3>
    </div>

    {/* SEARCH */}
    <div className="relative mb-8 group">
      <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-[#0e5da0] transition" />
      <input
        type="text"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        placeholder="Search modules..."
        className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#0e5da0] focus:ring-4 focus:ring-[#0e5da0]/20 text-sm font-medium"
      />
    </div>

    {/* CATEGORIES */}
    <div className="space-y-2 mb-10">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
        Categories
      </p>

      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => setFilters({ ...filters, category: cat.name })}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm border transition
            ${
              filters.category === cat.name
                ? "bg-color text-white border-[#0e5da0] shadow-lg shadow-[#0e5da0]/20"
                : "bg-white text-slate-600 border-slate-100 hover:border-[#0e5da0] hover:text-[#0e5da0]"
            }`}
        >
          <span className="text-lg">{cat.icon}</span>
          {cat.name}
        </button>
      ))}
    </div>

    {/* QUICK FILTERS */}
    <div className="space-y-6 border-t border-slate-100 pt-6">
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
          Sort By
        </p>
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 outline-none hover:border-[#0e5da0] focus:ring-2 focus:ring-[#0e5da0]/20"
        >
          <option>Trending First</option>
          <option>Newest Release</option>
          <option>Difficulty: High</option>
        </select>
      </div>

      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
          Filters
        </p>
        <div className="space-y-3">
          {[
            { icon: <BiCheckCircle />, label: "Certification Included", key: "certification" },
            { icon: <BiTimer />, label: "Self-Paced", key: "selfPaced" },
          ].map((pill, i) => (
            <label
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-[#0e5da0] transition"
            >
              <span className="text-[#0e5da0] text-lg">{pill.icon}</span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">
                {pill.label}
              </span>
              <input
                onChange={(e) =>
                  setFilters({ ...filters, [pill.key]: e.target.checked })
                }
                type="checkbox"
                className="ml-auto accent-[#0e5da0]"
              />
            </label>
          ))}
        </div>
      </div>
    </div>

    {/* FOOTER INFO */}
    <div className="mt-8 pt-6 border-t border-slate-100">
      <p className="text-xs font-bold text-slate-400">
        Showing <span className="text-slate-900">24</span> Institutional Modules
      </p>
    </div>
  </aside>
</div>

  );
};

export default CourseFilter;
