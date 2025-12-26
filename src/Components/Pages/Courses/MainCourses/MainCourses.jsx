import React from "react";
import CourseCard from "./CourseCard";
import CourseFilter from "./CourseFilter";
import Breadcrumbs from "../../../common/Breadcrumbs";
import { CourseFilterProvider } from "../context/CourseFilterContext";

const MainCourses = () => {
  return (
    <>
      <CourseFilterProvider>
        <Breadcrumbs paths={["Home", "Courses", "Institutional Courses"]} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-20">
       
            {/* Left Sidebar Filter */}
            {/* <div className="col-span-1 lg:col-span-2">
              <CourseFilter />
            </div> */}

            {/* Right Courses Grid */}
            <div className="col-span-1 lg:col-span-7">
              <CourseCard />
            </div>
           
        </div>
      </CourseFilterProvider>
    </>
  );
};

export default MainCourses;
