// src/components/course/ModuleAccordion.jsx
import React, { useMemo } from "react";
import { HiChevronDown, HiSparkles } from "react-icons/hi2";
import VideoLesson from "./VideoLesson";
import SupportContent from "./SupportContent";

const ModuleAccordion = ({
  module,
  isOpen,
  onToggle,
  currentDay,
  videoDurations,
  completedVideos,
  onVideoClick,
}) => {
  // Memoized progress calculation - prevents re-calc every render
  const { totalVideos, completedCount, progressPercentage, isModuleComplete } = useMemo(() => {
    const videos = module.details.filter((i) => i.type === "video");
    const completed = videos.filter((v) => completedVideos[v.id]).length;
    const percentage = videos.length ? (completed / videos.length) * 100 : 0;
    return {
      totalVideos: videos.length,
      completedCount: completed,
      progressPercentage: percentage,
      isModuleComplete: percentage === 100,
    };
  }, [module.details, completedVideos]);

  const weekSupportUnlocked = module.lastVideoId
    ? completedVideos[module.lastVideoId]
    : true;

  return (
   <div
  className={`group relative overflow-hidden rounded-4xl border transition-all duration-500 ${
    isOpen
      ? "border-blue-200 bg-white shadow-2xl -translate-y-1"
      : "border-slate-100 bg-white/80 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:-translate-y-0.5"
  }`}
>
  {/* Progress Bar */}
  <div className="absolute inset-x-0 top-0 h-1 bg-slate-100">
    <div
      className="h-full bg-linear-to-r from-blue-500 to-emerald-400 transition-all duration-1000"
      style={{ width: `${progressPercentage}%` }}
    />
  </div>

  {/* Header Button */}
  <button
    onClick={onToggle}
    className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4"
  >
    <div className="flex items-center gap-4 sm:gap-5 min-w-0">
      {/* Module Icon */}
      <div
        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-md flex-shrink-0 ${
          isModuleComplete
            ? "bg-emerald-500 text-white"
            : isOpen
            ? "bg-[#0e5da0] text-white"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        {isModuleComplete ? (
          <HiSparkles className="text-lg sm:text-xl" />
        ) : (
          <span className="text-base sm:text-lg font-bold">
            {module.id < 9 ? "0" : ""}
            {module.id + 1}
          </span>
        )}

        {!isOpen && !isModuleComplete && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 border-2 border-white rounded-full" />
        )}
      </div>

      {/* Title & Meta */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
          <span className="text-[9px] sm:text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            Week {module.id + 1}
          </span>

          {isModuleComplete && (
            <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 sm:px-3 py-1 rounded-full">
              Completed
            </span>
          )}
        </div>

        <h4
          className={`text-lg sm:text-xl font-bold transition-colors truncate ${
            isOpen ? "text-slate-900" : "text-slate-700"
          }`}
        >
          {module.title}
        </h4>

        <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
          {totalVideos} Lessons • {completedCount} Completed
        </p>
      </div>
    </div>

    {/* Right: Progress + Chevron */}
    <div className="flex items-center gap-3 sm:gap-5 shrink-0">
      <div
        className={`hidden md:block text-right ${
          isOpen ? "opacity-0" : "opacity-100"
        } transition-opacity`}
      >
        <p className="text-xs text-slate-400 font-medium uppercase">
          Progress
        </p>
        <p className="text-lg font-bold text-slate-700">
          {Math.round(progressPercentage)}%
        </p>
      </div>

      <div
        className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${
          isOpen ? "bg-blue-50 rotate-180" : "bg-slate-50"
        }`}
      >
        <HiChevronDown
          className={`text-lg sm:text-xl ${
            isOpen ? "text-[#0e5da0]" : "text-slate-500"
          }`}
        />
      </div>
    </div>
  </button>

  {/* Open State Glow */}
  {isOpen && (
    <div className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-100/40 hidden sm:block" />
  )}

  {/* Accordion Body */}
  <div
    className={`overflow-hidden transition-all duration-700 ease-out ${
      isOpen ? "  opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="px-4 sm:px-8 pb-8 sm:pb-10 pt-4">
      <div className="h-px bg-slate-100 mb-6 sm:mb-8" />

      <div className="space-y-3 sm:space-y-4">
        {module.details.map((item, idx) => {
          if (item.type === "video") {
            const isCompleted = completedVideos[item.id];
            const isUnlocked = item.day <= currentDay;

            return (
              <VideoLesson
                key={item.id}
                video={item}
                idx={idx}
                moduleId={module.id}
                currentDay={currentDay}
                videoDurations={videoDurations}
                isCompleted={isCompleted}
                isUnlocked={isUnlocked}
                onPlayClick={onVideoClick}
              />
            );
          }

          if (item.type === "reading" || item.type === "assignment") {
            return (
              <SupportContent
                key={idx}
                item={item}
                isUnlocked={weekSupportUnlocked}
              />
            );
          }

          return null;
        })}
      </div>
    </div>
  </div>
</div>

  );
};

export default ModuleAccordion;