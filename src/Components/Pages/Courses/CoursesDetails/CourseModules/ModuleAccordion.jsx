// src/components/course/ModuleAccordion.jsx
import React from "react";
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
  // Logic to calculate progress percentage for the module
  const totalItems = module.details.filter(i => i.type === "video").length;
  const completedCount = module.details.filter(i => i.type === "video" && completedVideos[i.id]).length;
  const progressPercentage = (completedCount / totalItems) * 100;
  const isModuleComplete = progressPercentage === 100;

  const weekSupportUnlocked = module.lastVideoId
    ? completedVideos[module.lastVideoId]
    : true;

  return (
    <div
      className={`group overflow-hidden transition-all duration-700 rounded-4xl border relative ${
        isOpen
          ? "border-blue-200 bg-white shadow-[0_20px_50px_-12px_rgba(14,93,160,0.15)] -translate-y-1"
          : "border-slate-100 bg-white/60 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:-translate-y-0.5"
      }`}
    >
      {/* Top Progress Bar (Visual delight) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-50">
        <div 
          className="h-full bg-linear-to-r from-blue-500 to-emerald-400 transition-all duration-1000" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left relative overflow-hidden"
      >
        <div className="flex items-center gap-6 relative z-10">
          {/* Index/Icon Container */}
          <div className="relative">
            <div
              className={`w-14 h-14 rounded-[20px] flex items-center justify-center transition-all duration-500 ${
                isOpen
                  ? "bg-[#0e5da0] text-white rotate-360 shadow-[0_10px_20px_-5px_rgba(14,93,160,0.4)]"
                  : isModuleComplete 
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {isModuleComplete ? (
                <HiSparkles className="text-xl" />
              ) : (
                <span className="text-sm font-semibold tracking-tighter">
                  {module.id < 9 ? "0" : ""}{module.id + 1}
                </span>
              )}
            </div>
            
            {/* Status Dot */}
            {!isOpen && !isModuleComplete && (
               <span className="absolute -top-1 right-0 w-3 h-3 bg-blue-500 border-2 border-white rounded-full" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-0.5">
               <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest">
                 Module Phase
               </span>
               {isModuleComplete && (
                 <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-full">
                   Completed
                 </span>
               )}
            </div>
            <h4 className={`font-semibold text-xl transition-colors duration-300 ${
              isOpen ? "text-slate-900" : "text-slate-700"
            }`}>
              {module.title}
            </h4>
            <p className="text-xs text-slate-400 font-medium mt-1">
              {totalItems} Lessons • {completedCount} Completed
            </p>
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-4 relative z-10">
          <div className={`hidden md:flex flex-col items-end transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
             <div className="text-[10px] font-semibold text-slate-400 uppercase">Progress</div>
             <div className="text-sm font-semibold text-slate-700">{Math.round(progressPercentage)}%</div>
          </div>
          <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-slate-100 rotate-180" : "bg-slate-50"}`}>
            <HiChevronDown className={`text-xl ${isOpen ? "text-[#0e5da0]" : "text-slate-400"}`} />
          </div>
        </div>

        {/* Subtle Background Glow */}
        {isOpen && (
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-[60px] opacity-60" />
        )}
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] overflow-hidden ${
          isOpen ? "max-h-500 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pt-2 pb-10">
          {/* Internal separator line */}
          <div className="h-px w-full bg-slate-100 mb-8" />
          
          <div className="space-y-2">
            {module.details.map((item, idx) => {
              const isVideo = item.type === "video";
              const isSupport = item.type === "reading" || item.type === "assignment";

              if (isVideo) {
                const isCompleted = completedVideos[item.id];
                const isUnlocked = item.day <= currentDay;

                return (
                  <VideoLesson
                    key={item.id || idx}
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

              if (isSupport) {
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