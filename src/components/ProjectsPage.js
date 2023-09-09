import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Projects from "./Projects";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

function ProjectsPage() {
  return (
    <PageWrapper>
      <Navbar />
      <ContentWrapper>
        <Projects />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
}

export default ProjectsPage;
