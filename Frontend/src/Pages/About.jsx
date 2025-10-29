import React from "react";
import AboutHero from "../Components/AboutHero/AboutHero";
import AboutMainDescription from "../Components/About_description/AboutMainDescription";
import AboutMainWhy from "../Components/AboutWhy/AboutMainWhy";

const About = () => {
  return <div className="about_page">
    <AboutHero />
    <AboutMainDescription />
    <AboutMainWhy />
  </div>;
};

export default About;
