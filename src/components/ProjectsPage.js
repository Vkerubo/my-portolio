import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Projects from "./Projects";
import ChamaImage from "./assets/chama.png";
import { Link } from "react-router-dom";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LiveCodeButton = styled.a`
  display: inline-flex;
  height: 22px;
  font-family: sen;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  padding: 3px 6px 4px 6px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  margin-top: 10px;
  text-decoration: none;
  color: #56a8a1;
  background-color: transparent;
  border: 1px solid #56a8a1;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover,
  &:active {
    color: #fff;
    background-color: #56a8a1;
    transform: perspective(400px) rotateX(10deg);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    text-decoration: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

function ProjectsPage() {
  return (
    <PageWrapper>
      <Navbar />
      <ContentWrapper>
        {/* <Projects
          title="Chama-KE"
          description="Group Project. This is a Chama (merry-go-round) website that allows users to find chama mates and contribute money monthly for a course. It fetches from a complex API we created. It’s integrated with Daraja API for payments."
          imageSrc={ChamaImage}
          liveDemoLink="https://glittering-hotteok-56297e.netlify.app/"
        /> */}
        {/* Use the Projects component again with different content */}
        <Projects
          title="Another Project"
          description="This is another project description."
        //   imageSrc={AnotherImage}
          liveDemoLink="https://example.com/another"
          LiveCodeButton="https"
        />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
}


export default ProjectsPage;
