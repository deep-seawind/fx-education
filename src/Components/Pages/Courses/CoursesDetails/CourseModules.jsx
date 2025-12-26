import React, { useState, useMemo, useEffect } from "react";
import {
  HiChevronDown,
  HiOutlinePlay,
  HiOutlineLockClosed,
  HiCheckCircle,
} from "react-icons/hi2";
import EducationVideo from "../../../../assets/education-video/education-video.mp4";
import CourseVideo from "./CourseVideo";
import { useNavigate } from "react-router-dom";

const CourseModules = () => {
  const [openModule, setOpenModule] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoDurations, setVideoDurations] = useState({});
  const [completedVideos, setCompletedVideos] = useState({});

  const navigate = useNavigate();

  const modules = [
    {
      id: 0,
      title: "Introduction to Design Systems",
      videos: 1,
      readings: 9,
      assignments: 1,
      details: [
        { id: "v1", type: "video", title: "Welcome to the Course", src: EducationVideo },
        { type: "reading", title: "The History of Atomic Design", time: "10 min read" },
        { type: "assignment", title: "Setup your Figma Workspace", time: "20 min" },
      ],
    },
    {
      id: 1,
      title: "Foundations of Typography",
      videos: 1,
      readings: 4,
      assignments: 1,
      details: [
        { id: "v2", type: "video", title: "Choosing the Right Typeface", src: EducationVideo },
      ],
    },
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const allVideoIds = useMemo(
    () => modules.flatMap((m) => m.details.filter((d) => d.type === "video").map((v) => v.id)),
    [modules]
  );

  const courseCompleted = allVideoIds.every((id) => completedVideos[id]);

  const handleVideoComplete = (video) => {
    const updated = { ...completedVideos, [video.id]: true };
    sessionStorage.setItem("completedVideos", JSON.stringify(updated));
    setCompletedVideos(updated);
    setActiveVideo(null);
  };

  useEffect(() => {
    const stored = sessionStorage.getItem("completedVideos");
    if (stored) setCompletedVideos(JSON.parse(stored));
  }, []);

  return (
    <section id="Modules" className="scroll-mt-24">
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Course Content</h2>
          <p className="text-slate-500 text-sm mt-1">Master the curriculum step-by-step</p>
        </div>
        <div className="lg:text-right lg:pt-0 pt-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {modules.length} Modules • {allVideoIds.length} Lessons
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.id}
            className={`overflow-hidden border transition-all duration-500 rounded-4xl ${
              openModule === module.id
                ? "border-[#0e5da0]/40 bg-slate-50/50 shadow-2xl shadow-slate-200/50"
                : "border-slate-200 bg-white hover:border-slate-200"
            }`}
          >
            <button
              onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <div className="lg:flex items-center gap-5">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    openModule === module.id
                      ? "bg-[#0e5da0] text-white scale-110 shadow-lg shadow-blue-200"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <span className="text-sm font-black">0{module.id + 1}</span>
                </div>
                <h4 className="font-bold text-slate-800 text-lg">{module.title}</h4>
              </div>
              <HiChevronDown
                className={`text-xl transition ${openModule === module.id ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                openModule === module.id ? "max-h-100 opacity-100 pb-6" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 space-y-2">
                {module.details.map((item, idx) => {
                  const isCompleted = item.type === "video" && completedVideos[item.id];
                  const durationKey = `${module.id}-${idx}`;

                  return (
                    <div
                      key={idx}
                      onClick={() => item.type === "video" && setActiveVideo(item)}
                      className="flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                          {isCompleted ? (
                            <HiCheckCircle className="text-emerald-500" />
                          ) : (
                            <HiOutlinePlay />
                          )}
                        </div>
                        <span className="font-semibold text-slate-700">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        {item.type === "video" ? videoDurations[durationKey] || "--:--" : item.time}
                        <HiOutlineLockClosed />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <CourseVideo
          video={activeVideo}
          onComplete={() => handleVideoComplete(activeVideo)}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {courseCompleted && (
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/course/quiz")}
            className="px-10 py-5 bg-[#0e5da0] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
          >
            Start MCQ Quiz
          </button>
        </div>
      )}

      {/* Hidden videos for duration metadata */}
      {modules.flatMap((module, mIndex) =>
        module.details.map(
          (item, idx) =>
            item.type === "video" && (
              <video
                key={`${mIndex}-${idx}`}
                src={item.src}
                preload="metadata"
                style={{ display: "none" }}
                onLoadedMetadata={(e) =>
                  setVideoDurations((prev) => ({
                    ...prev,
                    [`${mIndex}-${idx}`]: formatTime(e.target.duration),
                  }))
                }
              />
            )
        )
      )}
    </section>
  );
};

export default CourseModules;