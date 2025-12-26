// src/components/course/VideoLesson.jsx
import React from "react";
import {
  HiOutlinePlay,
  HiOutlineLockClosed,
  HiCheckCircle,
  HiCalendar,
  HiDocumentArrowDown,
  HiQuestionMarkCircle,
  HiPlayCircle
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const VideoLesson = ({
  video,
  idx,
  moduleId,
  currentDay,
  videoDurations,
  isCompleted,
  isUnlocked,
  onPlayClick,
}) => {
  const navigate = useNavigate();
  const durationKey = `${moduleId}-${idx}`;
  const resourcesUnlocked = isUnlocked && isCompleted;

  // Active state logic: Unlocked but not completed
  const isActive = isUnlocked && !isCompleted;

  return (
    <div className="group relative flex gap-6 px-2">
      {/* Dynamic Connector Line */}
      <div className="flex flex-col items-center">
        <div className={`w-1 rounded-full flex-1 transition-all duration-700 ${
          isCompleted ? "bg-linear-to-b from-emerald-400 to-emerald-500" : "bg-slate-200"
        }`} />
      </div>

      <div className="flex-1 pb-4">
        <div
          onClick={() => isUnlocked && onPlayClick(video)}
          className={`relative group/card overflow-hidden rounded-3xl p-1 transition-all duration-500 ${
            !isUnlocked 
              ? "bg-slate-100/50 cursor-not-allowed" 
              : "bg-linear-to-br from-white to-slate-50 hover:to-white cursor-pointer shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1"
          }`}
        >
          {/* Internal Content Container */}
          <div className={`relative flex items-center justify-between p-2 rounded-[20px] z-10 ${
            isActive ? "bg-white shadow-inner" : ""
          }`}>
            
            {/* Left: Media & Title Section */}
            <div className="flex items-center gap-5 flex-1">
              <div className="relative shrink-0">
                {/* Outer Ring Animation */}
                {isActive && (
                  <span className="absolute -inset-2 bg-blue-400/20 rounded-full animate-ping" />
                )}
                
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${
                  isCompleted ? "bg-emerald-500 text-white rotate-360" :
                  isActive ? "bg-blue-600 text-white" :
                  "bg-slate-200 text-slate-500"
                }`}>
                  {isCompleted ? (
                    <HiCheckCircle size={30} />
                  ) : !isUnlocked ? (
                    <HiOutlineLockClosed size={24} />
                  ) : (
                    <HiPlayCircle size={32} className="group-hover/card:scale-110 transition-transform" />
                  )}
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 rounded-md ${
                    isCompleted ? "bg-emerald-100 text-emerald-700" :
                    isActive ? "bg-blue-100 text-blue-700" :
                    "bg-slate-200 text-slate-500"
                  }`}>
                    Lesson {idx + 1}
                  </span>
                  {isUnlocked && (
                    <span className="text-[10px] font-medium text-slate-400">
                      • {videoDurations[durationKey] || "12:45"}
                    </span>
                  )}
                </div>
                
                <h3 className={`font-semibold transition-colors duration-300 truncate ${
                  isUnlocked ? "text-slate-800" : "text-slate-400"
                }`}>
                  {video.title}
                </h3>

                {!isUnlocked && (
                  <div className="flex items-center gap-1.5 mt-1 text-amber-600 font-semibold text-[11px]">
                    <HiCalendar className="text-sm" />
                    <span>UNLOCKS ON DAY {video.day}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Premium Resource Pills */}
            <div className="flex items-center gap-3">
              {video.pdf && (
                <button
                  onClick={(e) => { e.stopPropagation(); if(resourcesUnlocked) window.open(video.pdf); }}
                  className={`group/btn relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300  ${
                    resourcesUnlocked 
                    ? "bg-slate-50 hover:bg-blue-600 text-blue-600 hover:text-white shadow-sm hover:shadow-blue-200 cursor-pointer" 
                    : "bg-slate-50 text-slate-300 opacity-50 cursor-not-allowed"
                  }`}
                >
                  <HiDocumentArrowDown size={20} />
                  {resourcesUnlocked && (
                    <span className="absolute -top-10 scale-0 group-hover/btn:scale-100 transition-all bg-slate-800 text-white text-[10px] py-1 px-2 rounded-lg whitespace-nowrap">
                      Download Notes
                    </span>
                  )}
                </button>
              )}

              {video.mcqPath && (
                <button
                  onClick={(e) => { e.stopPropagation(); if(resourcesUnlocked) navigate(video.mcqPath); }}
                  className={`group/btn relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300  ${
                    resourcesUnlocked 
                    ? "bg-slate-50 hover:bg-purple-600 text-purple-600 hover:text-white shadow-sm hover:shadow-purple-200 cursor-pointer" 
                    : "bg-slate-50 text-slate-300 opacity-50 cursor-not-allowed "
                  }`}
                >
                  <HiQuestionMarkCircle size={20} />
                  {resourcesUnlocked && (
                    <span className="absolute -top-10 scale-0 group-hover/btn:scale-100 transition-all bg-slate-800 text-white text-[10px] py-1 px-2 rounded-lg whitespace-nowrap">
                      Start Quiz
                    </span>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Background Decorative Mesh (Subtle) */}
          {isUnlocked && (
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLesson;