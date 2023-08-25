import React from "react";
import { styled } from "styled-components";
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
  width: 100%;
`;


function HeroSection() {
    return (
        <>Hi</>
    );
};

export default HeroSection;
