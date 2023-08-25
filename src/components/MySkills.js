import React from "react";
import styled from "styled-components";
import HtmlIcon from "../components/assets/Html 5.png";
import CSS3Icon from "../components/assets/icons8-css-50 1.png";
import JavascriptIcon from "../components/assets/javascript 1.png";
import ReactIcon from "../components/assets/React.png";
import FigmaIcon from "../components/assets/Figma.png";
import ResponsiveWebsitesIcon from "../components/assets/responsive-design 1.png";
import MaterialUIIcon from "../components/assets/icons8-material-ui-48 1.png";
import TailwindIcon from "../components/assets/tailwind-css 1.png";
import RegexIcon from "../components/assets/icons8-regular-expressions-32 1.png";

const MySkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Column1 = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #0a1930;
`;

const Column2 = styled.div`
  text-align: center;
  color: #0a1930;
  font-family: "Sen", sans-serif;
  font-size: 14px;
`;

const OuterContainer = styled.div`
  margin: 0 20px;
`;

const Column3 = styled.div`
  width: 1111px;
  height: 193px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #a1e4d3;
  margin-bottom:40px;
`;

const Column4 = styled.div`
  width: 1111px;
  height: 103px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #a1e4d3;
  margin-bottom: 40px;
`;

function MySkills() {
  return (
    <MySkillsContainer>
      <Column1>My Skills</Column1>
      <Column2>
        As a full-stack developer with expertise across 4 diverse design fields,
        I'm your go-to solution for any project. Challenges are my forte; let's
        bring your vision to life! 💼🎨
      </Column2>
      <OuterContainer>
        <Column3></Column3>
        <Column3></Column3>
        <Column4></Column4>
        <Column4></Column4>
      </OuterContainer>
    </MySkillsContainer>
  );
}

export default MySkills;
