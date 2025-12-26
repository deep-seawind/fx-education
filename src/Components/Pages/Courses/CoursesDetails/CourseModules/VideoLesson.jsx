// src/components/course/VideoLesson.jsx
import React from "react";
import { 
  HiOutlineLockClosed,
  HiCheckCircle,
  HiCalendar,
  HiDocumentArrowDown,
  HiQuestionMarkCircle,
  HiPlayCircle,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const VideoLesson = ({
  video,
  idx,
  moduleId, 
  videoDurations,
  isCompleted,
  isUnlocked,
  onPlayClick,
}) => {
  const navigate = useNavigate();
  const durationKey = `${moduleId}-${idx}`;
  const resourcesUnlocked = isUnlocked && isCompleted;
  const isActive = isUnlocked && !isCompleted;

  return (
    <div className="flex gap-5 px-2 py-3">
      {/* Vertical Connector Line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-0.5 flex-1 transition-colors duration-500 rounded-full ${
            isCompleted ? "bg-emerald-500" : "bg-slate-200"
          }`}
        />
      </div>

      {/* Main Card */}
      <div
        onClick={() => isUnlocked && onPlayClick(video)}
        className={`flex-1 flex items-center justify-between p-4 rounded-3xl transition-all duration-300 ${
          !isUnlocked
            ? "bg-slate-50/70 cursor-not-allowed"
            : "bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
        }`}
      >
        {/* Left: Icon + Title */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Icon Circle */}
          <div
            className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
              isCompleted
                ? "bg-emerald-500 text-white"
                : isActive
                ? "bg-blue-600 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            {isActive && (
              <span className="absolute inset-0 rounded-2xl bg-blue-400/30 animate-pulse" />
            )}
            {isCompleted ? (
              <HiCheckCircle size={28} />
            ) : !isUnlocked ? (
              <HiOutlineLockClosed size={24} />
            ) : (
              <HiPlayCircle size={30} />
            )}
          </div>

          {/* Title & Meta */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md tracking-wider ${
                  isCompleted
                    ? "bg-emerald-100 text-emerald-700"
                    : isActive
                    ? "bg-blue-100 text-blue-700"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                Lesson {idx + 1}
              </span>
              {isUnlocked && (
                <span className="text-[10px] text-slate-500">
                  • {videoDurations[durationKey] || "12:45"}
                </span>
              )}
            </div>

            <h3
              className={`font-semibold truncate transition-colors ${
                isUnlocked ? "text-slate-800" : "text-slate-400"
              }`}
            >
              {video.title}
            </h3>

            {!isUnlocked && (
              <div className="flex items-center gap-1 mt-1 text-amber-600 text-[11px] font-medium">
                <HiCalendar className="text-sm" />
                UNLOCKS ON DAY {video.day}
              </div>
            )}
          </div>
        </div>

        {/* Right: PDF & MCQ Buttons */}
        <div className="flex items-center gap-3">
          {video.pdf && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                resourcesUnlocked && window.open(video.pdf, "_blank");
              }}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                resourcesUnlocked
                  ? "bg-slate-100 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm"
                  : "bg-slate-50 text-slate-300"
              }`}
              title={resourcesUnlocked ? "Download PDF" : "Complete video to unlock"}
            >
              <HiDocumentArrowDown size={20} />
            </button>
          )}

          {video.mcqPath && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                resourcesUnlocked && navigate(video.mcqPath);
              }}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                resourcesUnlocked
                  ? "bg-slate-100 text-purple-600 hover:bg-purple-600 hover:text-white shadow-sm"
                  : "bg-slate-50 text-slate-300"
              }`}
              title={resourcesUnlocked ? "Start Quiz" : "Complete video to unlock"}
            >
              <HiQuestionMarkCircle size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLesson;