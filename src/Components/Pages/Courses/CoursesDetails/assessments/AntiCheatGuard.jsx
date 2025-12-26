import { useEffect } from "react";

const AntiCheatGuard = ({ children }) => {
  useEffect(() => {
    const block = (e) => e.preventDefault();

    const detectBlur = () => alert("Tab switching detected!");

    document.addEventListener("contextmenu", block);
    window.addEventListener("blur", detectBlur);

    return () => {
      document.removeEventListener("contextmenu", block);
      window.removeEventListener("blur", detectBlur);
    };
  }, []);

  return children;
};

export default AntiCheatGuard;
