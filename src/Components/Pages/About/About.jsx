import React from "react";
import AboutHero from "./AboutHero";
import Breadcrumbs from "../../common/Breadcrumbs";
import OurMission from "./OurMission";
import WhyChooseUs from "./WhyChooseUs";
import Faq from "../FAQ/Faq";

const About = () => {
  return (
    <>
      <Breadcrumbs paths={["Home", "About Us"]} />

      <AboutHero />
      <OurMission/>
      <WhyChooseUs/>
      <Faq/>
    </>
  );
};

export default About;
