// src/components/course/ModuleAccordion.jsx
import React from "react";
import { HiChevronDown } from "react-icons/hi2";
import ModuleItem from "./ModuleItem";

const ModuleAccordion = ({
  module,
  isOpen,
  onToggle,
  currentDay,
  videoDurations,
  completedVideos,
  onVideoClick,
}) => {
  const weekSupportUnlocked = module.lastVideoId ? completedVideos[module.lastVideoId] : true;

  return (
    <div
      className={`overflow-hidden border transition-all duration-500 rounded-4xl ${
        isOpen
          ? "border-[#0e5da0]/40 bg-slate-50/50 shadow-2xl shadow-slate-200/50"
          : "border-slate-200 bg-white hover:border-slate-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <div className="lg:flex items-center gap-5">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-[#0e5da0] text-white scale-110 shadow-lg shadow-blue-200"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            <span className="text-sm font-bold">
              {module.id < 9 ? "0" : ""}{module.id + 1}
            </span>
          </div>
          <h4 className="font-bold text-slate-800 text-lg">{module.title}</h4>
        </div>
        <HiChevronDown
          className={`text-xl transition ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 space-y-2">
          {module.details.map((item, idx) => (
            <ModuleItem
              key={idx}
              item={item}
              idx={idx}
              moduleId={module.id}
              currentDay={currentDay}
              videoDurations={videoDurations}
              completedVideos={completedVideos}
              weekSupportUnlocked={weekSupportUnlocked}
              onVideoClick={onVideoClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleAccordion;