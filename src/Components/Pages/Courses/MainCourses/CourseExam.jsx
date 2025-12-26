import React from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";

const CourseExam = () => {
  return (
    <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10 space-y-12">
      
      {/* Heading */}
      <div>
        <h3 className="text-3xl font-semibold text-slate-900 mb-3">
          Assessment & Examination System
        </h3>
        <p className="text-slate-500 max-w-2xl">
          Our institutional-grade LMS ensures fair evaluation through structured
          quizzes, level exams, and strict anti-cheat mechanisms.
        </p>
      </div>

      {/* MCQ QUIZ SYSTEM */}
      <div>
        <h4 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-tight">
          MCQ Quiz System
        </h4>

        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            "Single-choice questions",
            "Multi-choice questions",
            "Timed quizzes",
            "Instant scoring",
            "Explanation after each answer",
            "Minimum score requirement",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-slate-50 rounded-xl p-4"
            >
              <HiOutlineCheckCircle className="text-[#0e5da0] text-xl shrink-0" />
              <span className="font-medium text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* LEVEL EXAMS */}
      <div>
        <h4 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-tight">
          Level Exams (LMS)
        </h4>

        <div className="grid sm:grid-cols-2 gap-4">
          <ExamFeature
            icon={<HiOutlineClock />}
            title="Timed Exams"
            desc="Strict time-bound level examinations"
          />
          <ExamFeature
            icon={<HiOutlineShieldCheck />}
            title="Randomized Questions"
            desc="Unique question order for every candidate"
          />
          <ExamFeature
            icon={<HiOutlineExclamationCircle />}
            title="Anti-Cheat Protection"
            desc="Screen lock & app switching disabled"
          />
          <ExamFeature
            icon={<HiOutlineCheckCircle />}
            title="Auto-Submit on Tab Change"
            desc="Exam auto-submitted if user switches tabs"
          />
        </div>
      </div>
    </section>
  );
};

const ExamFeature = ({ icon, title, desc }) => (
  <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-sm transition">
    <div className="w-12 h-12 rounded-xl bg-[#0e5da0]/10 flex items-center justify-center text-[#0e5da0] text-xl">
      {icon}
    </div>
    <div>
      <h5 className="font-semibold text-slate-900 mb-1">{title}</h5>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  </div>
);

export default CourseExam;
