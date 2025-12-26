// src/components/course/CourseCompletionBanner.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCompletionBanner = ({ courseCompleted, currentDay }) => {
  const navigate = useNavigate();

  if (!courseCompleted || currentDay < 40) return null;

  return (
    <div className="mt-12 text-center">
      <div className="mb-6">
        <p className="text-2xl font-semibold text-slate-800">
          Congratulations! You've mastered the full curriculum!
        </p>
        <p className="text-slate-600 mt-3 text-lg">
          Certificate: <span className="font-semibold">“Global Markets & Trading Expert – Level 1”</span>
        </p>
      </div>
      <button
        onClick={() => navigate("/course/quiz")}
        className="px-12 py-6 bg-[#0e5da0] text-white rounded-2xl font-semibold uppercase tracking-widest text-lg hover:bg-blue-700 transition-all shadow-lg"
      >
        Start Final Certification Exam
      </button>
    </div>
  );
};

export default CourseCompletionBanner;