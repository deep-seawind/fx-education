import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/common/ScrollToTop";
import LoginFormUI from "../Components/AllForms/LoginForm/LoginFormUI";
import SignupFormUI from "../Components/AllForms/SignupForm/SignupFormUI";
import Home from "../Components/Pages/Home/Home";
import MainCourses from "../Components/Pages/Courses/MainCourses/MainCourses";
import BottomToTopButton from "../Components/common/BottomToTopButton";
import CoursesDetails from "../Components/Pages/Courses/CoursesDetails/CoursesDetails";
import Checkout from "../Components/Pages/Checkout/Checkout";
import HowItWorks from "../Components/Pages/How-It-Works/HowItWorks";
import NotFound from "../Components/UI/NotFound";
import TradingPractice from "../Components/Pages/Trading-Practice/TradingPractice";
import GoogleTranslate from "../language/GoogleTranslate";
import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blog/Blog";
import BlogDetails from "../Components/Pages/Blog/BlogDetails";
import Contact from "../Components/Pages/Contact/Contact";
import MCQQuiz from "../Components/Pages/Courses/CoursesDetails/assessments/MCQQuiz";

const Mainrouter = () => {
  return (
    <>
      <BrowserRouter>
        <GoogleTranslate/>
        <ScrollToTop />
        <BottomToTopButton />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupFormUI />} />
          <Route path="/login" element={<LoginFormUI />} />
          <Route path="/main-courses" element={<MainCourses />} />
          <Route path="/course-details" element={<CoursesDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/trading-practice" element={<TradingPractice />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/quiz" element={<MCQQuiz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Mainrouter;
