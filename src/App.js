import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import UiUx from "./components/UI-UX";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsPage";
import { Helmet } from "react-helmet";

function ProjectsPageWithScrollToTop() {
  useEffect(() => {
    // Scroll to top when the "Projects" page is loaded
    window.scrollTo(0, 0);
  }, []);

  return <ProjectsPage />;
}

function App() {
  return (
    <Router>
      <Helmet title="Valentine Kerubo | Portfolio" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ui-ux" element={<UiUx />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPageWithScrollToTop />} />
      </Routes>
    </Router>
  );
}

export default App;
