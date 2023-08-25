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
  padding: 40px;
  color: #a1e4d3;
  font-family: "Sen", sans-serif;
`;

const HeroRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; /* Add this line to vertically center the content */
  width: 100%;
`;

const HeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex;
`;

const HiText = styled.div`
  font-size: 16px;
  color: #a1e4d3;
`;

const NameText = styled.div`
  font-size: 64px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
`;

const SubText = styled.div`
  font-size: 64px;
  color: #56a8a1;
  font-weight: bold;
  margin-top: 10px;
`;

const LocationText = styled.div`
  font-size: 64px;
  color: #8891b0;
  font-weight: bold;
  margin-top: 10px;
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const DescriptionText = styled.div`
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 69px;
`;

const HeroImageContainer = styled.div`
  flex-shrink: 0; /* Prevent image from shrinking */
`;

const HeroImageStyled = styled.img`
  width: 307px;
  height: 281px;
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
            <Icon src={GithubIcon} alt="GitHub" />
            <Icon src={LinkedInIcon} alt="LinkedIn" />
            <Icon src={XIcon} alt="Twitter" />
            <Icon src={EmailIcon} alt="Email" />
          </IconsRow>
          <DescriptionText>
            👩‍💻 Crafting digital dreams | Lifelong learner | Your go-to developer
            for amazing projects 🚀 | Passionate about mentoring women in tech
            💪 | Let's build something incredible together, hire me!
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
