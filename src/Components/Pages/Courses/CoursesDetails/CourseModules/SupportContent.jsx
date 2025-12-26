// src/components/course/SupportContent.jsx
import React from "react";
import { HiDocumentText, HiPencilSquare, HiOutlineLockClosed } from "react-icons/hi2";

const SupportContent = ({ item, isUnlocked }) => {
  if (!isUnlocked) {
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

  const Icon = item.type === "reading" ? HiDocumentText : HiPencilSquare;
  const color = item.type === "reading" ? "text-blue-600" : "text-purple-600";

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
          <Icon className={`text-xl ${color}`} />
        </div>
        <span className="font-semibold text-slate-700">{item.title}</span>
      </div>
      <div className="text-xs text-slate-400">{item.time}</div>
    </div>
  );
};

export default SupportContent;