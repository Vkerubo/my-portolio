import React from "react";
import { styled } from "styled-components";
import ChamaIMage from "../components/assets/chama.png";
import ArrowImahe from "../components/assets/Arrow 1.svg";
import { Link } from "react-router-dom";
import SkyPropertiesImage from "./assets/Skyproperties.png";

const ProjectsTitle = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 100px;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-top: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  //justify-content: space-between;
  margin-left: 50px;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

const ContainerTwo = styled.div`
  display: flex;
  //justify-content: space-between;
  margin-left: 50px;
  margin-top: 60px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

const LeftColumn = styled.div`
  width: 30%;
  margin-top: 100px;
  margin-left: 50px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1px;
    margin-left: 0px;
  }
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
  line-height: 1.5;
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

const ChamaImageStyled = styled.img`
  max-width: 90%;
  max-height: 100%;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 20px;
    margin-left: 1px;
    height: 150px;
  }
`;

const RightColumn = styled.div`
  width: 60%;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ArrowIcon = styled.img`
  max-width: 30px;
  margin-left: 10px;
  cursor: pointer;
  color: #333;

  @media (max-width: 768px) {
    max-width: 20px;
  }
`;

const ViewMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #58a8a1;
  font-family: Montserrat;
  text-decoration: none; /* Remove underline by default */
  padding: 8px 16px; /* Reduce padding to make it smaller */
  border: 1px solid #58a8a1; /* Add border to resemble a button */
  transition: background-color 0.3s, color 0.3s; /* Add smooth transition on hover */
  font-size: 14px; /* Adjust font size */
  width: fit-content; /* Make the link width fit its content */
  margin: 0 auto;

  &:hover {
    color: white;
    background-color: #58a8a1;
    cursor: pointer;
    text-decoration: none;
  }
`;


function Projects() {

  return (
    <>
      <ProjectsTitle>My Projects</ProjectsTitle>
      <Container>
        <LeftColumn>
          <Title>Chama-Ke</Title>
          <Description>
            Group Project. This is a Chama (merry-go-round) website that allows
            users to find chama mates and contribute money monthly for a course.
            It fetches from a complex API we created. It’s integrated with
            Daraja API for payments.
          </Description>
          <LiveDemoButton
            href="https://glittering-hotteok-56297e.netlify.app/"
            target="_blank"
          >
            Live Demo
          </LiveDemoButton>
        </LeftColumn>
        <RightColumn>
          <ChamaImageStyled src={ChamaIMage} alt="Chama" />
        </RightColumn>
      </Container>
      <ContainerTwo>
        <LeftColumn>
          <Title>Sky Properties</Title>
          <Description>
            A real estate app where a user can log in as a buyer or seller to
            buy/seller a property, view or favorite properties available on the
            platform and also search by location and contact the seller. A buyer
            can also upload their property listings.
          </Description>
          <LiveDemoButton
            href="https://skyproperties.netlify.app/"
            target="_blank"
          >
            Live Demo
          </LiveDemoButton>
        </LeftColumn>
        <RightColumn>
          <ChamaImageStyled
            src={SkyPropertiesImage}
            alt="Sky properties image"
          />
        </RightColumn>
      </ContainerTwo>
      <ViewMoreLink to="/projects">
        View more projects
        <ArrowIcon src={ArrowImahe} alt="View more projects" />
      </ViewMoreLink>
    </>
  );
}

export default Projects;
