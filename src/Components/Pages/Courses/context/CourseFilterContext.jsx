import { createContext, useContext, useState } from "react";

const CourseFilterContext = createContext();

export const CourseFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "All Courses",
    certified: false,
    selfPaced: false,
    sort: "Trending First",
  });

  return (
    <CourseFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </CourseFilterContext.Provider>
  );
};

export const useCourseFilters = () => useContext(CourseFilterContext);
