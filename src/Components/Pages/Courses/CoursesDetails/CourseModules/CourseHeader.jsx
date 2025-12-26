// src/components/course/CourseHeader.jsx
import React from "react";

const CourseHeader = ({ currentDay, totalWeeks, totalVideos }) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Course Content
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Global Financial Markets & Trading Foundation (90 Days)
        </p>
        <p className="text-slate-600 text-lg mt-3 font-bold">
          Day {currentDay > 90 ? 90 : currentDay} of 90
        </p>
      </div>
      <div className="lg:text-right lg:pt-0 pt-2">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {totalWeeks} Weeks • {totalVideos} Video Lessons
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;