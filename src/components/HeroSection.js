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

const HeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

function HeroSection() {
  return <>Hi</>;
}

export default HeroSection;
