// src/components/course/CourseModules.jsx
import React, { useState, useMemo, useEffect, Suspense, lazy } from "react";
import EducationVideo from "../../../../../assets/education-video/education-video.mp4";
import CourseHeader from "./CourseHeader";
import CourseCompletionBanner from "./CourseCompletionBanner";

const ModuleAccordion = lazy(() => import("./ModuleAccordion"));
const CourseVideo = lazy(() => import("../CourseVideo"));
import courseModulesData from "../../../../Data/courseModules.json";

const CourseModules = () => {
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoDurations, setVideoDurations] = useState({});
  const [completedVideos, setCompletedVideos] = useState({});

  const currentDay = useMemo(() => {
    const start = new Date("2025-12-26T00:00:00");
    const daysSince = Math.floor((Date.now() - start) / 86400000);
    return Math.max(1, daysSince + 1);
  }, []);

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

  // -------------------
  // Load metadata for all videos in the open module **in parallel**
  // -------------------
  useEffect(() => {
    if (openModuleIndex === null) return;
    const module = modules[openModuleIndex];
    if (!module) return;

    const videoDetails = module.details.filter(item => item.type === "video");
    if (!videoDetails.length) return;

    const videoElements = videoDetails.map(item => {
      const v = document.createElement("video");
      v.preload = "metadata";
      v.src = item.src;
      v.onloadedmetadata = () => {
        setVideoDurations(prev => ({
          ...prev,
          [`${openModuleIndex}-${videoDetails.indexOf(item)}`]: formatTime(v.duration),
        }));
      };
      return v;
    });

    // Cleanup on unmount or module change
    return () => {
      videoElements.forEach(v => { v.src = ""; });
    };
  }, [modules, openModuleIndex]);

  return (
    <section id="Modules" className="scroll-mt-24">
      <CourseHeader
        currentDay={currentDay}
        totalWeeks={modules.length}
        totalVideos={allVideoIds.length}
      />

      <div className="space-y-4">
        <Suspense fallback={
          <div className="space-y-4">
            {Array(12).fill().map((_, i) => (
              <div key={i} className="h-24 bg-slate-100 rounded-3xl animate-pulse" />
            ))}
          </div>
        }>
          {modules.map((module, idx) => (
            <ModuleAccordion
              key={module.id}
              module={module}
              isOpen={openModuleIndex === idx}
              onToggle={() => setOpenModuleIndex(openModuleIndex === idx ? null : idx)}
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

      {/* Video Modal */}
      {activeVideo && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-white">Loading player...</div>
          </div>
        }>
          <CourseVideo
            video={activeVideo}
            onComplete={() => handleVideoComplete(activeVideo)}
            onClose={() => setActiveVideo(null)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default CourseModules;
