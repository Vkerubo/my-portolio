import React from "react";
import AboutMeImage from "../components/assets/Val Image.jpeg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap:10px;
  padding: 40px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

const AboutMeTitle = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ImageContainer = styled.div`
  width: 292px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 20px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const AboutMeImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const DescriptionTitle = styled.div`
  color: #c8f87;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const DescriptionText = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
`;

const MoreButton = styled.a`
`;

function AboutMe() {
  return (
    <AboutMeContainer>
      <AboutMeTitle>About Me</AboutMeTitle>
      <ImageContainer>
        <AboutMeImageStyled src={AboutMeImage} alt="About Me" />
      </ImageContainer>

      <DescriptionContainer>
        <DescriptionTitle>I love building stuff 📱</DescriptionTitle>
        <DescriptionText>
          I'm a certified full-stack developer with a drive for crafting
          innovative and meaningful applications. My journey began with rigorous
          training at{" "}
          <a href="https://moringaschool.com/" style={{ color: "#128e84" }}>
            Moringa School
          </a>
          , where I acquired essential skills and hands-on experience in
          software development. My passion for growth keeps me in a perpetual
          state of learning, and I truly flourish when collaborating with
          diverse, global teams. I hold the belief that collaboration is the
          cornerstone of exceptional product creation, and I'm steadfast in my
          commitment to enhancing my capabilities and giving back to the
          development community.
        </DescriptionText>
      </DescriptionContainer>
    </AboutMeContainer>
  );
}

export default AboutMe;
