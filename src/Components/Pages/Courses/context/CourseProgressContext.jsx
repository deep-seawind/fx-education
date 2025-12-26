import { createContext, useContext, useState } from "react";

const CourseProgressContext = createContext();

export const CourseProgressProvider = ({ children }) => {
  const [completedVideos, setCompletedVideos] = useState({});
  const [courseCompleted, setCourseCompleted] = useState(false);

  const markVideoCompleted = (videoId) => {
    setCompletedVideos((prev) => {
      const updated = { ...prev, [videoId]: true };

      // 🔐 Example rule: 3 videos = course completed
      if (Object.keys(updated).length >= 3) {
        setCourseCompleted(true);
      }
      return updated;
    });
  };

  return (
    <CourseProgressContext.Provider
      value={{ completedVideos, markVideoCompleted, courseCompleted }}
    >
      {children}
    </CourseProgressContext.Provider>
  );
};

export const useCourseProgress = () => useContext(CourseProgressContext);
