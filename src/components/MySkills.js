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
  margin-top: 20px;
`;

const Column2 = styled.div`
  text-align: center;
  color: #0a1930;
  font-family: "Sen", sans-serif;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const OuterContainer = styled.div`
  margin: 0 20px;
`;

const Column3 = styled.div`
  width: 1511px;
  height: 193px;
  flex-shrink: 0;
  border-radius: 20px;
  border-radius: 20px;
  background: rgba(161, 228, 211, 0.14);
  margin-bottom: 40px;
`;

const Column4 = styled.div`
  width: 1511px;
  height: 103px;
  flex-shrink: 0;
  border-radius: 20px;
  border-radius: 20px;
  background: rgba(161, 228, 211, 0.14);
  margin<skilllist>-bottom: 40px;
`;

const FrontendTitle = styled.div`
  font-family: "Sen", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;<SkillList>
  white-space: nowrap;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const SkillListItem = styled.li`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0a1930;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const SkillDescription = styled.div`
  font-size: 16px;
  text-align: flex;
  margin-top: 10px;
  color: #0a1930;
//   margin-left: 200px;
`;

const FrontendRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex;
  width: 100%;
`;

const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;


function MySkills() {
  return (
    <MySkillsContainer>
      <Column1>My Skills</Column1>
      <Column2>
        As a full-stack developer with expertise across 4 diverse design fields,
        I'm your go-to solution for any project. <br /> Challenges are my forte;
        let's bring your vision to life! 💼🎨
      </Column2>
      <OuterContainer>
        <Column3>
          <FrontendRow>
            <FrontendTitle>Frontend Developer</FrontendTitle>
            <DescriptionColumn>
              <SkillDescription>
                - I have a strong understanding of the frontend development
                process and I’m capable of crafting websites from the ground up.
              </SkillDescription>
              <SkillDescription>- I have experience with:</SkillDescription>
            </DescriptionColumn>
          </FrontendRow>
          <SkillList>
            <SkillListItem>
              <SkillIcon src={HtmlIcon} alt="HTML5" />
              HTML5
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={CSS3Icon} alt="CSS3" />
              CSS3
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={JavascriptIcon} alt="JavaScript" />
              JavaScript
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={ReactIcon} alt="React" />
              React
            </SkillListItem>
            {/* Add more skill items here */}
          </SkillList>
        </Column3>
        <Column3></Column3>
        <Column4></Column4>
        <Column4></Column4>
      </OuterContainer>
    </MySkillsContainer>
  );
}

export default MySkills;
