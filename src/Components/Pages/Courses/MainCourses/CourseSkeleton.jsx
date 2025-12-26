import React from 'react';

const CourseSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-[2.5rem] p-5 border border-slate-100 flex flex-col lg:flex-row gap-8 items-center animate-pulse">
      {/* LEFT: Image Skeleton */}
      <div className="relative h-60 lg:h-72 w-full lg:w-100 shrink-0 bg-slate-200 rounded-4xl" />

      {/* RIGHT: Content Skeleton */}
      <div className="grow w-full py-2">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 w-24 bg-slate-200 rounded-xl" />
          <div className="h-6 w-20 bg-slate-200 rounded-full" />
        </div>

        <div className="h-10 w-3/4 bg-slate-200 rounded-lg mb-4" />
        <div className="space-y-2 mb-6">
          <div className="h-4 w-full bg-slate-100 rounded" />
          <div className="h-4 w-5/6 bg-slate-100 rounded" />
        </div>

        {/* Meta Info Skeleton */}
        <div className="flex flex-wrap items-center gap-8 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl" />
              <div className="space-y-1">
                <div className="h-2 w-10 bg-slate-100" />
                <div className="h-4 w-16 bg-slate-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between border-t border-slate-50 pt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200" />
            <div className="space-y-1">
              <div className="h-3 w-20 bg-slate-200" />
              <div className="h-2 w-16 bg-slate-100" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="h-10 w-24 bg-slate-200 rounded-lg" />
            <div className="h-14 w-32 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSkeleton;