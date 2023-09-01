import React from "react";
import AboutMeImage from "../components/assets/Val Image.jpeg";
import { styled } from "styled-components";

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #fff;
`;

const AboutMeTitle = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ImageContainer = styled.div`
  width: 292px;
  height: 346px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 20px;
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

function AboutMe() {
    return (
        <>Hi</>
    );
};

export default AboutMe;
