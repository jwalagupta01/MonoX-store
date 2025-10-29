import React from "react";
import AboutHero from "../Components/AboutHero/AboutHero";
import AboutMainDescription from "../Components/About_description/AboutMainDescription";
import AboutMainWhy from "../Components/AboutWhy/AboutMainWhy";
import NewslatterBox from "../Components/NewsLatterBox/NewslatterBox";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return <div className="about_page">
    <AboutHero />
    <AboutMainDescription />
    <AboutMainWhy />
    <NewslatterBox />
  </div>;
};

export default About;
