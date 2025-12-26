// src/components/course/CourseSkeleton.jsx
import React from "react";

const CourseSkeleton = () => {
  return (
    <div className="group relative w-full bg-white rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] 
                     border border-slate-100 transition-all duration-500 flex flex-col overflow-hidden animate-pulse">
      
      {/* Image Section Skeleton */}
      <div className="relative h-64 lg:h-80 w-full overflow-hidden rounded-4xl mb-6 bg-slate-200">
        {/* Placeholder for overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* Trending Badge Skeleton */}
        <div className="absolute top-5 left-5">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
            <div className="w-4 h-4 bg-slate-300 rounded" />
            <div className="h-3 w-16 bg-slate-300 rounded-full" />
          </div>
        </div>

        {/* Students Count Skeleton */}
        <div className="absolute bottom-5 left-6 flex items-center gap-2">
          <div className="w-5 h-5 bg-slate-300 rounded" />
          <div className="h-4 w-32 bg-slate-300 rounded-full" />
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="px-2 pb-4">
        {/* Category + Rating Row */}
        <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-28 bg-slate-200 rounded-xl" />
            <div className="h-7 w-24 bg-slate-200 rounded-full" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-slate-200 rounded" />
            <div className="h-5 w-16 bg-slate-200 rounded" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="h-8 w-4/5 bg-slate-200 rounded-lg mb-4" />
        <div className="h-7 w-3/5 bg-slate-200 rounded-lg mb-4" />

        {/* Description Skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-4 w-full bg-slate-100 rounded" />
          <div className="h-4 w-full bg-slate-100 rounded" />
          <div className="h-4 w-4/5 bg-slate-100 rounded" />
        </div>

        {/* Meta Info Grid Skeleton */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-50 rounded-xl">
                <div className="w-6 h-6 bg-slate-200 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-16 bg-slate-200 rounded" />
                <div className="h-4 w-20 bg-slate-300 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Price + CTA Skeleton */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <div>
            <div className="h-4 w-24 bg-slate-200 rounded mb-2" />
            <div className="h-10 w-32 bg-slate-300 rounded-lg" />
          </div>

          <div className="flex items-center gap-6">
            <div className="h-14 w-40 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSkeleton;