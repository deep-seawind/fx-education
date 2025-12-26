import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSavedLanguage, saveLanguage } from "../utils/language";

const languages = [
  { 
    code: "en", 
    name: "English", 
    flag: "https://flagcdn.com/w40/us.png", 
    alt: "USA" 
  },
  { 
    code: "hi", 
    name: "हिन्दी", 
    flag: "https://flagcdn.com/w40/in.png", 
    alt: "India" 
  },
  { 
    code: "gu", 
    name: "ગુજરાતી", 
    flag: "https://flagcdn.com/w40/in.png", 
    alt: "Gujarat" 
  },
  { 
    code: "fr", 
    name: "Français", 
    flag: "https://flagcdn.com/w40/fr.png", 
    alt: "France" 
  },
  { 
    code: "ar", 
    name: "العربية", 
    flag: "https://flagcdn.com/w40/ae.png", 
    alt: "UAE" 
  },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(getSavedLanguage() || "en");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (langCode) => {
    setSelected(langCode);
    saveLanguage(langCode);
    setIsOpen(false);
    
    // Toggle RTL for Arabic
    document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  const currentLang = languages.find((l) => l.code === selected);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Selection Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 px-4 py-2 bg-white border-2 border-gray-100 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300"
      >
        <img 
          src={currentLang?.flag} 
          alt={currentLang?.alt} 
          className="w-6 h-4 object-cover rounded-sm shadow-sm"
        />
        <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
          {currentLang?.name}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute right-0 z-50 w-48 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-1.5 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all ${
                    selected === lang.code
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <img src={lang.flag} alt={lang.alt} className="w-5 h-3.5 object-cover rounded-sm" />
                  <span className="text-sm font-medium">{lang.name}</span>
                  {selected === lang.code && (
                    <motion.div layoutId="check" className="ml-auto">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;