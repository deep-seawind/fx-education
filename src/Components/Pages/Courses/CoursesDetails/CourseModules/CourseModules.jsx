// src/components/course/CourseModules.jsx
import React, { useState, useMemo, useEffect } from "react";
import EducationVideo from "../../../../../assets/education-video/education-video.mp4";
import CourseHeader from "./CourseHeader";
import ModuleAccordion from "./ModuleAccordion";
import CourseCompletionBanner from "./CourseCompletionBanner";
import CourseVideo from "../CourseVideo";

const CourseModules = () => {
  const [openModule, setOpenModule] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoDurations, setVideoDurations] = useState({});
  const [completedVideos, setCompletedVideos] = useState({});

  const COURSE_START_DATE = new Date("2025-12-26T00:00:00");
  const today = new Date();
  const daysSinceStart = Math.floor((today - COURSE_START_DATE) / 86400000);
  const currentDay = Math.max(1, daysSinceStart + 1);

  const modules = [
    {
      id: 0,
      title: "Week 1 – Introduction to Financial Markets",
      lastVideoId: "v6", // This video unlocks reading & assignment
      details: [
        {
          id: "v1",
          type: "video",
          title: "Global Market Structure Overview",
          src: EducationVideo,
          day: 1,
        },
        {
          id: "v2",
          type: "video",
          title: "Exchanges, Brokers & Liquidity Providers",
          src: EducationVideo,
          day: 2,
        },
        {
          id: "v3",
          type: "video",
          title: "Market Participants: Retail, Institutional & HFT",
          src: EducationVideo,
          day: 3,
        },
        {
          id: "v4",
          type: "video",
          title: "Indian & Global Exchanges (NYSE, CME, NSE, MCX)",
          src: EducationVideo,
          day: 4,
        },
        {
          id: "v5",
          type: "video",
          title: "Trading Instruments & Categories",
          src: EducationVideo,
          day: 5,
        },
        {
          id: "v6",
          type: "video",
          title: "Week 1 Summary & Key Takeaways",
          src: EducationVideo,
          day: 6,
        },
        {
          type: "reading",
          title: "Additional Notes on Market Structure",
          time: "10 min read",
        },
        {
          type: "assignment",
          title: "Assignment: Identify 10 Global Exchanges",
          time: "30 min",
        },
      ],
    },
    {
      id: 1,
      title: "Week 2 – Equity Markets",
      lastVideoId: "v12",
      details: [
        {
          id: "v7",
          type: "video",
          title: "What Makes Stock Prices Move?",
          src: EducationVideo,
          day: 7,
        },
        {
          id: "v8",
          type: "video",
          title: "Corporate Finance Basics",
          src: EducationVideo,
          day: 8,
        },
        {
          id: "v9",
          type: "video",
          title: "Understanding Market Cycles",
          src: EducationVideo,
          day: 9,
        },
        {
          id: "v10",
          type: "video",
          title: "Index Composition: S&P500, Nifty50, Nasdaq",
          src: EducationVideo,
          day: 10,
        },
        {
          id: "v11",
          type: "video",
          title: "Key Fundamentals: EPS, P/E, ROE, DCF",
          src: EducationVideo,
          day: 11,
        },
        {
          id: "v12",
          type: "video",
          title: "Week 2 Recap",
          src: EducationVideo,
          day: 12,
        },
        {
          type: "reading",
          title: "Deep Dive into Valuation Metrics",
          time: "15 min read",
        },
        {
          type: "assignment",
          title: "Assignment: Analyse 3 Large-Cap Companies",
          time: "45 min",
        },
      ],
    },
    {
      id: 2,
      title: "Week 3 – Derivative Markets (Equity Futures & Options)",
      lastVideoId: "v17",
      details: [
        {
          id: "v13",
          type: "video",
          title: "Futures vs Options Explained",
          src: EducationVideo,
          day: 13,
        },
        {
          id: "v14",
          type: "video",
          title: "Index & Stock Futures Deep Dive",
          src: EducationVideo,
          day: 14,
        },
        {
          id: "v15",
          type: "video",
          title: "Options Greeks: Delta, Gamma, Theta, Vega",
          src: EducationVideo,
          day: 15,
        },
        {
          id: "v16",
          type: "video",
          title: "Hedging vs Speculation Strategies",
          src: EducationVideo,
          day: 16,
        },
        {
          id: "v17",
          type: "video",
          title: "Practical Mock Futures Trade Walkthrough",
          src: EducationVideo,
          day: 17,
        },
        {
          type: "assignment",
          title: "Practical: Place Mock Futures Trade (Demo Account)",
          time: "40 min",
        },
      ],
    },
    {
      id: 3,
      title: "Week 4 – Commodity & Currency Markets",
      lastVideoId: "v21",
      details: [
        {
          id: "v18",
          type: "video",
          title: "MCX Commodities: Gold, Oil, Silver",
          src: EducationVideo,
          day: 18,
        },
        {
          id: "v19",
          type: "video",
          title: "Forex Major Pairs & Economic Drivers",
          src: EducationVideo,
          day: 19,
        },
        {
          id: "v20",
          type: "video",
          title: "CFD Trading Basics",
          src: EducationVideo,
          day: 20,
        },
        {
          id: "v21",
          type: "video",
          title: "Live Demo: Gold & EUR/USD Trade Setup",
          src: EducationVideo,
          day: 21,
        },
        {
          type: "assignment",
          title: "Practical: Demo Trades on Gold & EUR/USD",
          time: "50 min",
        },
      ],
    },
    {
      id: 4,
      title: "Week 5 – Technical Analysis — Basics",
      lastVideoId: "v24",
      details: [
        {
          id: "v22",
          type: "video",
          title: "Chart Types & Candlestick Patterns",
          src: EducationVideo,
          day: 22,
        },
        {
          id: "v23",
          type: "video",
          title: "Trendlines, Channels & Support/Resistance",
          src: EducationVideo,
          day: 23,
        },
        {
          id: "v24",
          type: "video",
          title: "Volume Analysis Essentials",
          src: EducationVideo,
          day: 24,
        },
        {
          type: "assignment",
          title: "Assignment: Identify 5 Major Patterns in Charts",
          time: "35 min",
        },
      ],
    },
    {
      id: 5,
      title: "Week 6 – Technical Analysis — Indicators",
      lastVideoId: "v27",
      details: [
        {
          id: "v25",
          type: "video",
          title: "Moving Averages & RSI Deep Dive",
          src: EducationVideo,
          day: 25,
        },
        {
          id: "v26",
          type: "video",
          title: "MACD, Bollinger Bands & ATR",
          src: EducationVideo,
          day: 26,
        },
        {
          id: "v27",
          type: "video",
          title: "Building Indicator-Based Strategies",
          src: EducationVideo,
          day: 27,
        },
        {
          type: "assignment",
          title: "Practical: Create a Basic Indicator Strategy",
          time: "45 min",
        },
      ],
    },
    {
      id: 6,
      title: "Week 7 – Trading Psychology",
      lastVideoId: "v29",
      details: [
        {
          id: "v28",
          type: "video",
          title: "Discipline, Fear & Greed in Trading",
          src: EducationVideo,
          day: 28,
        },
        {
          id: "v29",
          type: "video",
          title: "Common Behavioural Biases",
          src: EducationVideo,
          day: 29,
        },
        {
          type: "assignment",
          title: "Practical: 7-Day Emotional Tracking Journal",
          time: "Ongoing",
        },
      ],
    },
    {
      id: 7,
      title: "Week 8 – Global Macroeconomics",
      lastVideoId: "v32",
      details: [
        {
          id: "v30",
          type: "video",
          title: "Key Indicators: GDP, CPI, Inflation",
          src: EducationVideo,
          day: 30,
        },
        {
          id: "v31",
          type: "video",
          title: "Central Banks: FOMC, RBI, ECB Impact",
          src: EducationVideo,
          day: 31,
        },
        {
          id: "v32",
          type: "video",
          title: "Interest Rates & Bond Yields",
          src: EducationVideo,
          day: 32,
        },
        {
          type: "assignment",
          title: "Practical: Interpret a Central Bank Report",
          time: "30 min",
        },
      ],
    },
    {
      id: 8,
      title: "Week 9 – Risk Management",
      lastVideoId: "v34",
      details: [
        {
          id: "v33",
          type: "video",
          title: "Position Sizing & Risk-Reward",
          src: EducationVideo,
          day: 33,
        },
        {
          id: "v34",
          type: "video",
          title: "Stop Loss Design & Drawdown Control",
          src: EducationVideo,
          day: 34,
        },
        {
          type: "assignment",
          title: "Practical: 10-Trade Risk Simulation Report",
          time: "60 min",
        },
      ],
    },
    {
      id: 9,
      title: "Week 10 – Trading Systems & Execution",
      lastVideoId: "v36",
      details: [
        {
          id: "v35",
          type: "video",
          title: "Order Types & Liquidity",
          src: EducationVideo,
          day: 35,
        },
        {
          id: "v36",
          type: "video",
          title: "Slippage, Clearing & Settlements",
          src: EducationVideo,
          day: 36,
        },
        {
          type: "assignment",
          title: "Practical: 1-Week Paper Trading Test",
          time: "1 week",
        },
      ],
    },
    {
      id: 10,
      title: "Week 11 – Strategy Development",
      lastVideoId: "v38",
      details: [
        {
          id: "v37",
          type: "video",
          title: "Swing, Intraday & Momentum Strategies",
          src: EducationVideo,
          day: 37,
        },
        {
          id: "v38",
          type: "video",
          title: "Breakout & Mean Reversion Systems",
          src: EducationVideo,
          day: 38,
        },
        {
          type: "assignment",
          title: "Practical: Build & Document 1 Strategy",
          time: "60 min",
        },
      ],
    },
    {
      id: 11,
      title: "Week 12 – Final Revision + Exam",
      lastVideoId: "v40",
      details: [
        {
          id: "v39",
          type: "video",
          title: "Full Course Revision (Part 1)",
          src: EducationVideo,
          day: 39,
        },
        {
          id: "v40",
          type: "video",
          title: "Full Course Revision (Part 2)",
          src: EducationVideo,
          day: 40,
        },
        { type: "reading", title: "Final Summary Notes", time: "2 hours" },
        { type: "assignment", title: "Mock Test (100 MCQs)", time: "2 hours" },
        {
          type: "assignment",
          title: "Demo Trading Test (10 Days)",
          time: "10 days",
        },
        {
          type: "assignment",
          title: "Final Certification Exam",
          time: "3 hours",
        },
      ],
    },
  ];

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
