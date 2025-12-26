// src/components/course/CourseModules.jsx
import React, { useState, useMemo, useEffect, Suspense, lazy } from "react";
import EducationVideo from "../../../../../assets/education-video/education-video.mp4";
import CourseHeader from "./CourseHeader";
import CourseCompletionBanner from "./CourseCompletionBanner";

// Lazy load heavy components
const ModuleAccordion = lazy(() => import("./ModuleAccordion"));
const CourseVideo = lazy(() => import("../CourseVideo"));

import courseModulesData from "../../../../Data/courseModules.json";

const CourseModules = () => {
  const [openModule, setOpenModule] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoDurations, setVideoDurations] = useState({});
  const [completedVideos, setCompletedVideos] = useState({});

  // Fixed date logic
  const currentDay = useMemo(() => {
    const start = new Date("2025-12-26T00:00:00");
    const daysSince = Math.floor((Date.now() - start) / 86400000);
    return Math.max(1, daysSince + 1);
  }, []);

  // Add src to videos once
  const modules = useMemo(() => 
    courseModulesData.map(module => ({
      ...module,
      details: module.details.map(item =>
        item.type === "video" ? { ...item, src: EducationVideo } : item
      ),
    })), []
  );

  const allVideoIds = useMemo(() =>
    modules.flatMap(m => m.details.filter(d => d.type === "video").map(v => v.id)),
    [modules]
  );

  const courseCompleted = useMemo(() =>
    allVideoIds.every(id => completedVideos[id]),
    [allVideoIds, completedVideos]
  );

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

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section id="Modules" className="scroll-mt-24">
      <CourseHeader
        currentDay={currentDay}
        totalWeeks={modules.length}
        totalVideos={allVideoIds.length}
      />

      <div className="space-y-4">
        <Suspense fallback={<div className="space-y-4">{Array(12).fill().map((_, i) => (
          <div key={i} className="h-24 bg-slate-100 rounded-3xl animate-pulse" />
        ))}</div>}>
          {modules.map((module) => (
            <ModuleAccordion
              key={module.id}
              module={module}
              isOpen={openModule === module.id}
              onToggle={() => setOpenModule(openModule === module.id ? null : module.id)}
              currentDay={currentDay}
              videoDurations={videoDurations}
              completedVideos={completedVideos}
              onVideoClick={setActiveVideo}
            />
          ))}
        </Suspense>
      </div>

      <CourseCompletionBanner
        courseCompleted={courseCompleted}
        currentDay={currentDay}
      />

      {/* Video Modal - Lazy Loaded */}
      {activeVideo && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/80 flex items-center justify-center"><div className="text-white">Loading player...</div></div>}>
          <CourseVideo
            video={activeVideo}
            onComplete={() => handleVideoComplete(activeVideo)}
            onClose={() => setActiveVideo(null)}
          />
        </Suspense>
      )}

      {/* Critical Optimization: Only load metadata for visible/open modules */}
      {modules
        .filter((_, i) => openModule === i) // Only for open module
        .flatMap((module, mIndex) =>
          module.details
            .filter(item => item.type === "video")
            .map((item, idx) => (
              <video
                key={`${mIndex}-${idx}`}
                src={item.src}
                preload="metadata"
                style={{ display: "none" }}
                onLoadedMetadata={(e) =>
                  setVideoDurations(prev => ({
                    ...prev,
                    [`${mIndex}-${idx}`]: formatTime(e.target.duration),
                  }))
                }
              />
            ))
        )}
    </section>
  );
};

export default CourseModules;