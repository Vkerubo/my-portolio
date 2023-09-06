import React from "react";
import styled from "styled-components";
import HeroImage from "../components/assets/Coding-amico (2) 1.png";
import GithubIcon from "../components/assets/GitHub.png";
import LinkedInIcon from "../components/assets/LinkedIn Circled.png";
import XIcon from "../components/assets/TwitterX (1).png";
import EmailIcon from "../components/assets/Circled Envelope.png";

const HeroContainer = styled.div`
  background-color: #0a1930;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #a1e4d3;
  font-family: "Sen", sans-serif;
`;

const HeroRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HiText = styled.div`
  font-size: 16px;
  color: #a1e4d3;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const NameText = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 39px;
  }
`;

const SubText = styled.div`
  font-size: 60px;
  color: #56a8a1;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const LocationText = styled.div`
  font-size: 60px;
  color: #8891b0;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  margin-top: 20px;
`;

const Icon = styled.a`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;

  &::after {
    content: attr(
      data-tooltip
    ); /* Display the data-tooltip attribute as content */
    position: absolute;
    background-color: #000;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    opacity: 0; /* Initially hidden */
    transition: opacity 0.2s ease-in-out;
    bottom: 30px; /* Adjust the tooltip position */
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    opacity: 1; /* Show the tooltip on hover */
  }
`;

const DescriptionText = styled.div`
  color: #fff;
  font-family: Sen;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 69px;
  margin-top: 20px;
  line-height: 1.5;
  /* Highlight "hire me" with a background color */
  > u {
    text-decoration: none;
    font-weight: bold;
    //background: linear-gradient(transparent 50%, #000 50%);
  }
`;

const HeroImageContainer = styled.div`
  //flex-shrink: 0;
  margin-left: 2px;
`;

const HeroImageStyled = styled.img`
  width: 307px;
  height: 281px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

function HeroSection() {
  return (
    <HeroContainer>
      <HeroRow>
        <HeroColumn>
          <HiText>Hi, my name is</HiText>
          <NameText>Valentine Kerubo</NameText>
          <SubText>Full Stack Software Engineer</SubText>
          <LocationText>Based in Kenya</LocationText>
          <IconsRow>
            <Icon
              href="https://github.com/Vkerubo"
              target="_blank"
              data-tooltip="GitHub"
            >
              <img src={GithubIcon} alt="GitHub" />
            </Icon>
            <Icon
              href="https://linkedin.com/in/valentinekerubo"
              target="_blank"
              data-tooltip="LinkedIn"
            >
              <img src={LinkedInIcon} alt="LinkedIn" />
            </Icon>
            <Icon
              href="https://twitter.com/Kerubo_____"
              target="_blank"
              data-tooltip="Twitter"
            >
              <img src={XIcon} alt="Twitter" />
            </Icon>
            <Icon
              href="mailto:kerubovalentine1@gmail.com"
              data-tooltip="Email Me"
            >
              <img src={EmailIcon} alt="Email" />
            </Icon>
          </IconsRow>

          <DescriptionText>
            👩‍💻 Crafting digital dreams &nbsp;&nbsp;|&nbsp;&nbsp; Lifelong
            learner &nbsp;&nbsp;|&nbsp;&nbsp; Your go-to developer for amazing
            projects 🚀 &nbsp;&nbsp;|&nbsp;&nbsp; Passionate about mentoring
            women in tech 💪 &nbsp;&nbsp;|&nbsp;&nbsp; Let's build something
            incredible together, <u>hire me!</u>
          </DescriptionText>
        </HeroColumn>
        <HeroImageContainer>
          <HeroImageStyled src={HeroImage} alt="Coding Hero" />
        </HeroImageContainer>
      </HeroRow>
    </HeroContainer>
  );
}

export default HeroSection;
