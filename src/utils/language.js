export const DEFAULT_LANG = "en";

export const getSavedLanguage = () => {
  return localStorage.getItem("lang") || DEFAULT_LANG;
};

export const saveLanguage = (lang) => {
  localStorage.setItem("lang", lang);
};
