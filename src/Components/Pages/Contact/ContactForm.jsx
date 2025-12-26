import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChatAlt, 
} from "react-icons/hi";

const ContactForm = () => {
  const [focused, setFocused] = useState(null);
  const [selectedTag, setSelectedTag] = useState("General Inquiry");

  // Refined Input Styles
  const inputStyles = (id) => `
    w-full bg-white/50   border-2 transition-all duration-500 rounded-2xl px-12 py-5 outline-none font-medium text-slate-800
    ${
      focused === id
        ? "border-[#0e5da0] shadow-[0_0_0_4px_rgba(14,93,160,0.1)] bg-white"
        : "border-slate-100 hover:border-slate-200"
    }
  `;

  return (
    <div className="py-20 px-4 bg-slate-50/50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto bg-white rounded-[3.5rem] p-10 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
      >
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-bl from-blue-50 to-transparent opacity-60 pointer-events-none" />

        <header className="relative z-10 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-[#0e5da0]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0e5da0]">
              Communication Port
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Connect with <span className="italic font-light">Precision.</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Our institutional support team is standing by to assist with your
            trading requirements.
          </p>
        </header>

        <form
          className="relative z-10 space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Subject Selection Tags */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Select Department
            </span>
            <div className="flex flex-wrap gap-3">
              {["General Inquiry", "Funded Accounts", "Technical Support"].map(
                (tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border
                    ${
                      selectedTag === tag
                        ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                        : "bg-white border-slate-100 text-slate-400 hover:border-slate-300"
                    }`}
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Field */}
            <div className="relative group">
              <HiOutlineUser
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-xl transition-colors duration-300 ${
                  focused === "name" ? "text-[#0e5da0]" : "text-slate-300"
                }`}
              />
              <input
                type="text"
                placeholder="Full Name"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={inputStyles("name")}
              />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <HiOutlineMail
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-xl transition-colors duration-300 ${
                  focused === "email" ? "text-[#0e5da0]" : "text-slate-300"
                }`}
              />
              <input
                type="email"
                placeholder="Institutional Email"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={inputStyles("email")}
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <HiOutlineChatAlt
              className={`absolute left-4 top-6 text-xl transition-colors duration-300 ${
                focused === "message" ? "text-[#0e5da0]" : "text-slate-300"
              }`}
            />
            <textarea
              rows="4"
              placeholder="How can we assist you today?"
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`${inputStyles("message")} resize-none`}
            />
          </div>

          {/* Action Footer */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-12 py-5 bg-[#0e5da0] text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(14,93,160,0.2)] hover:shadow-[0_25px_50px_rgba(14,93,160,0.3)] transition-all mx-auto"
            >
              Submit Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
