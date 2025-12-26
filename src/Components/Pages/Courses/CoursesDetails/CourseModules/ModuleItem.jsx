// src/components/course/ModuleItem.jsx
import React from "react";
import {
  HiOutlinePlay,
  HiOutlineLockClosed,
  HiCheckCircle,
  HiCalendar,
  HiDocumentText,
  HiPencilSquare,
} from "react-icons/hi2";

const ModuleItem = ({
  item,
  idx,
  moduleId,
  currentDay,
  videoDurations,
  completedVideos,
  weekSupportUnlocked,
  onVideoClick,
}) => {
  const isVideo = item.type === "video";
  const isSupport = item.type === "reading" || item.type === "assignment";
  const isCompleted = isVideo && completedVideos[item.id];
  const isUnlocked = !isVideo || (item.day <= currentDay);
  const durationKey = `${moduleId}-${idx}`;

  const getIcon = () => {
    if (isCompleted) return <HiCheckCircle className="text-emerald-500 text-xl" />;
    if ((isVideo && !isUnlocked) || (isSupport && !weekSupportUnlocked))
      return <HiOutlineLockClosed className="text-xl" />;
    if (item.type === "reading") return <HiDocumentText className="text-xl text-blue-600" />;
    if (item.type === "assignment") return <HiPencilSquare className="text-xl text-purple-600" />;
    return <HiOutlinePlay className="text-xl" />;
  };

  // Locked support content (reading/assignment)
  if (isSupport && !weekSupportUnlocked) {
    return (
      <div className="flex items-center justify-between p-4 rounded-2xl opacity-60">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
            <HiOutlineLockClosed className="text-xl" />
          </div>
          <div>
            <span className="font-semibold text-slate-700 block">{item.title}</span>
            <span className="text-xs text-slate-500">
              Complete all videos in this week to unlock
            </span>
          </div>
        </div>
        <div className="text-xs text-slate-400">{item.time}</div>
      </div>
    );
  }

  return (
    <div
      onClick={() => isVideo && isUnlocked && onVideoClick(item)}
      className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
        isVideo && !isUnlocked
          ? "opacity-60 cursor-not-allowed"
          : "hover:bg-white hover:shadow cursor-pointer"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
          {getIcon()}
        </div>
        <div>
          <span className="font-semibold text-slate-700 block">{item.title}</span>
          {isVideo && !isUnlocked && (
            <span className="text-xs text-slate-500 flex items-center gap-1 mt-1">
              <HiCalendar className="text-sm" />
              Available on Day {item.day}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-slate-400">
        {isVideo ? videoDurations[durationKey] || "--:--" : item.time}
        {isVideo && !isUnlocked && <HiOutlineLockClosed className="text-sm" />}
      </div>
    </div>
  );
};

export default ModuleItem;