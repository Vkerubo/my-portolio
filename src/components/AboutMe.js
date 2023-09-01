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

function AboutMe() {
    return (
        <>Hi</>
    );
};

export default AboutMe;
