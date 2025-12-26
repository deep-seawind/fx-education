// src/components/course/CourseModules.jsx
import React, { useState, useMemo, useEffect } from "react";
import EducationVideo from "../../../../../assets/education-video/education-video.mp4";
import CourseHeader from "./CourseHeader";
import ModuleAccordion from "./ModuleAccordion";
import CourseCompletionBanner from "./CourseCompletionBanner";
import CourseVideo from "../CourseVideo";
import courseModulesData from "../../../../Data/courseModules.json";

const CourseModules = () => {
  const [openModule, setOpenModule] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoDurations, setVideoDurations] = useState({});
  const [completedVideos, setCompletedVideos] = useState({});

  const COURSE_START_DATE = new Date("2025-12-26T00:00:00");
  const today = new Date();
  const daysSinceStart = Math.floor((today - COURSE_START_DATE) / 86400000);
  const currentDay = Math.max(1, daysSinceStart + 1);

 
const modules = courseModulesData.map(module => ({
    ...module,
    details: module.details.map(item =>
      item.type === "video"
        ? { ...item, src: EducationVideo }
        : item
    ),
  }));

  const allVideoIds = useMemo(
    () =>
      modules.flatMap((m) =>
        m.details.filter((d) => d.type === "video").map((v) => v.id)
      ),
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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section id="Modules" className="scroll-mt-24">
      <CourseHeader
        currentDay={currentDay}
        totalWeeks={modules.length}
        totalVideos={allVideoIds.length}
      />

      <div className="space-y-4">
        {modules.map((module) => (
          <ModuleAccordion
            key={module.id}
            module={module}
            isOpen={openModule === module.id}
            onToggle={() =>
              setOpenModule(openModule === module.id ? null : module.id)
            }
            currentDay={currentDay}
            videoDurations={videoDurations}
            completedVideos={completedVideos}
            onVideoClick={setActiveVideo}
          />
        ))}
      </div>

      <CourseCompletionBanner
        courseCompleted={courseCompleted}
        currentDay={currentDay}
      />

      {activeVideo && (
        <CourseVideo
          video={activeVideo}
          onComplete={() => handleVideoComplete(activeVideo)}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {/* Hidden videos for metadata */}
      {modules.flatMap((module, mIndex) =>
        module.details
          .filter((item) => item.type === "video")
          .map((item, idx) => (
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
          ))
      )}
    </section>
  );
};

export default CourseModules;
