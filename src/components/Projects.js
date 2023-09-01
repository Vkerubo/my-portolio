import React from "react";
import { styled } from "styled-components";
import ChamaIMage from "../components/assets/chama.png";

const ProjectsTitle = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  width: 50%;
`;

const Title = styled.div`
  color: #2c8f87;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

function Projects() {
  return (
    <>
    <ProjectsTitle>My Projects</ProjectsTitle><br/>
    </>
  );
}

export default Projects;
