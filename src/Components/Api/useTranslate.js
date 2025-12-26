import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const cache = new Map();

export const useTranslate = (text) => {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    if (!text || language === "en") {
      setTranslated(text);
      return;
    }

    const cacheKey = `${language}_${text}`;
    if (cache.has(cacheKey)) {
      setTranslated(cache.get(cacheKey));
      return;
    }

    const translate = async () => {
      try {
        const res = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            q: text,
            source: "auto",
            target: language,
            format: "text",
            alternatives: 0,
            api_key: "", // optional
          }),
        });

        if (!res.ok) throw new Error("Translation failed");

        const data = await res.json();
        cache.set(cacheKey, data.translatedText);
        setTranslated(data.translatedText);
      } catch (err) {
        console.error("Translation error:", err);
        setTranslated(text); // fallback
      }
    };

    translate();
  }, [text, language]);

  return translated;
};
