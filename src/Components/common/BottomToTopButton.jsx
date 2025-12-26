import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowUp } from "react-icons/hi"; // A sleeker, more modern arrow

const BottomToTopButton = () => {
  const [completion, setCompletion] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setCompletion(scrolled);

      // Show/Hide logic
      if (window.scrollY > 300) setShowButton(true);
      else setShowButton(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-8 bottom-8 z-50 transition-all duration-500 ease-out ${
        showButton ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center p-4 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transition-transform active:scale-90 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        {/* Progress Circle SVG */}
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-slate-100"
            strokeWidth="2"
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-[#0e5da0] transition-all duration-200 ease-out"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={100 - completion}
            strokeLinecap="round"
          />
        </svg>

        {/* Icon */}
        <HiOutlineArrowNarrowUp className="text-[#0e5da0] text-xl relative z-10 group-hover:animate-bounce" />
        
        {/* Tooltip on Hover */}
        <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[10px] py-1 px-2 rounded font-medium">
          Top
        </span>
      </button>
    </div>
  );
};

export default BottomToTopButton;