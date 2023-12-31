import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import MySkills from "./MySkills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Blog from "./Blog";
import Mentorship from "./Mentorship";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Projects />
      <Blog />
      <Mentorship />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
