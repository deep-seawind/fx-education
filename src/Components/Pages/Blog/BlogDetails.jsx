import React from "react"; 
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUser, 
} from "react-icons/hi2";
import Breadcrumbs from "../../common/Breadcrumbs";
import RecentBlog from "./RecentBlog";

const BlogDetails = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Breadcrumbs paths={["Home", "Blog", "Market Insights"]} />

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-12">
          {/* LEFT: Main Content Area (8 Columns) */}
          <article className="col-span-12 lg:col-span-8">
            {/* Header Section */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-6xl font-semibold text-slate-900  ">
                Mastering Institutional
              </h1>

              <div className="flex flex-wrap items-center gap-8 py-6 border-y border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                  <HiOutlineCalendar className="text-[#0e5da0]" /> Dec 24, 2025
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                  <HiOutlineClock className="text-[#0e5da0]" /> 12 Min Read
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                  <HiOutlineUser className="text-[#0e5da0]" /> 1.2k Views
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-100 md:h-120 rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Main"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Body Content */}
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-slate-600 mb-8 first-letter:text-7xl first-letter:font-medium first-letter:mr-3 first-letter:float-left first-letter:text-[#0e5da0]">
                Institutional order blocks are specific price levels where large
                financial institutions have placed significant orders. Unlike
                retail support and resistance, these zones represent the true
                footprint of "Smart Money."
              </p>

              <h3 className="text-2xl font-semibold text-slate-900 mt-12 mb-6 uppercase tracking-tight">
                The Anatomy of a Valid Entry
              </h3>
              <p className="mb-8">
                To identify a high-probability order block, one must look for a
                displacement in price. This displacement creates a "Fair Value
                Gap" (FVG), signaling that the institutions are actively pushing
                it in one direction.
              </p>

              {/* Callout Box */}
              <div className="bg-slate-900 rounded-4xl p-10 my-12 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0e5da0]/20 rounded-full blur-3xl group-hover:bg-[#0e5da0]/40 transition-all" />
                <h4 className="text-[#0e5da0] font-semibold uppercase tracking-widest text-xs mb-4">
                  Pro Strategy Tip
                </h4>
                <p className="text-lg italic font-medium leading-relaxed">
                  "Always wait for a Market Structure Shift (MSS) on the lower
                  timeframe before engaging with a higher timeframe order
                  block."
                </p>
              </div>

              <p className="mb-8 font-medium text-slate-700">
                In the next section, we will explore how to refine these zones
                using the Fibonacci 0.5 level (Equilibrium)...
              </p>
            </div>
          </article>

          {/* RIGHT: Recent Posts & Author Sidebar (4 Columns) */}
          <aside className="col-span-12 lg:col-span-4">
             <RecentBlog/>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
