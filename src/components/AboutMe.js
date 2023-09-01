import React from "react";
import AboutMeImage from "../components/assets/Val Image.jpeg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-left: 70px;
  gap: 10px;
  padding: 40px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    margin-left: 20px;
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
  padding: 0px;
`;

const DescriptionTitle = styled.div`
  color: #c8f87;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;

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
  margin-bottom: 10px;
`;

const MoreButton = styled(Link)`
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
  text-decoration: none; /* Remove underline from the link */
  color: #56a8a1;
  background-color: transparent;
  border: 1px solid #56a8a1;
  //box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover,
  &:active {
    color: #fff;
    background-color: #56a8a1;
    transform: perspective(400px) rotateX(10deg);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    text-decoration: none; /* Remove underline on hover */
  }
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
        <MoreButton to="/about">Keep reading my bio</MoreButton>
      </DescriptionContainer>
    </AboutMeContainer>
  );
}

export default AboutMe;
