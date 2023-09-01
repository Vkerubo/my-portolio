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

const Description = styled.div`
  color: #333;
  font-family: Sen;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`;

const LiveDemoButton = styled.a`
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


const RightColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.35);
`;

function Projects() {
  return (
    <>
    <ProjectsTitle>My Projects</ProjectsTitle><br/>
    </>
  );
}

export default Projects;
