import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import MySkills from "./MySkills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Projects />
    </>
  );
}

export default Homepage;
