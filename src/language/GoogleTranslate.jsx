import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSavedLanguage } from "../utils/language";

const GoogleTranslate = () => {
  const location = useLocation();

  // Load script once
  useEffect(() => {
    if (window.googleTranslateElementInit) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

 

  return <div id="google_translate_element" className="hidden"></div>;
};

export default GoogleTranslate;
