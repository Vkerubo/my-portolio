import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import UiUx from "./components/UI-UX";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ui-ux" element={<UiUx />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/projects'element={ <ProjectsPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
