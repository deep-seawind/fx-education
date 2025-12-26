import React from "react";
import CourseCard from "./CourseCard";
import CourseFilter from "./CourseFilter";
import Breadcrumbs from "../../../common/Breadcrumbs";
import { CourseFilterProvider } from "../context/CourseFilterContext";

const MainCourses = () => {
  return (
    <>
      <CourseFilterProvider>
        <Breadcrumbs paths={["Home", "Courses", "Institutional Modules"]} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-10">
            {/* Left Sidebar Filter */}
            <div className="col-span-1 lg:col-span-2">
              <CourseFilter />
            </div>

            {/* Right Courses Grid */}
            <div className="col-span-1 lg:col-span-7">
              <CourseCard />
            </div>
          </div>
        </div>
      </CourseFilterProvider>
    </>
  );
};

export default MainCourses;
