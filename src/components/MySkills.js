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
import RubyIcon from "../components/assets/ruby.png";
import RailsIcon from "../components/assets/rails.png";
import PostgresQLIcon from "../components/assets/postgresql (1).png";
import MySQLIcon from "../components/assets/mysql (1).png";
import RESTfulAPIsIcon from "../components/assets/icons8-rest-api-50.png";
import RSpecIcon from "../components/assets/rspec.svg";
import SinatraIcon from "../components/assets/icons8-frank-sinatra-64.png";

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
  width: 1200px;
  height: 153px;
  flex-shrink: 0;
  background: rgba(161, 228, 211, 0.14);
  margin-bottom: 40px;
`;

const Column4 = styled.div`
  width: 1200px;
  height: 103px;
  flex-shrink: 0;
  background: rgba(161, 228, 211, 0.14);
  margin<skilllist>-bottom: 40px;
`;

const FrontendTitle = styled.div`
  font-family: "Sen", sans-serif;
  font-size: 20px;
  font-weight: bold;
  //margin-left: 20px;<SkillList>
  white-space: nowrap;
  margin-top: 10px;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
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
  //width: 100%;
  margin-top: 10px;
`;

const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //width: 100%;
  margin-left: 15px;
`;

const ExploreLink = styled.a`
  text-decoration: underline;
  color: #128e84;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff; /* Change the color on hover */
  }
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
            <SkillListItem>
              <SkillIcon src={FigmaIcon} alt="Figma" />
              Figma
            </SkillListItem>
            <SkillListItem>
              <SkillIcon
                src={ResponsiveWebsitesIcon}
                alt="Responsive websites"
              />
              ResponsiveWebsites
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={MaterialUIIcon} alt="Material UI" />
              Material UI
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={TailwindIcon} alt="Tailwind css" />
              Tailwind CSS
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={RegexIcon} alt="Regex" />
              Regex
            </SkillListItem>
          </SkillList>
        </Column3>
        <Column3>
          <FrontendRow>
            <FrontendTitle>Backend Developer</FrontendTitle>
            <DescriptionColumn>
              <SkillDescription>
                - I have a strong understanding of the backend development
                process and I can build any website from scratch.
              </SkillDescription>
              <SkillDescription>- I have experience with:</SkillDescription>
            </DescriptionColumn>
          </FrontendRow>
          <SkillList>
            <SkillListItem>
              <SkillIcon src={RubyIcon} alt="Ruby" />
              Ruby
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={RailsIcon} alt="Rails" />
              Rails
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={PostgresQLIcon} alt="PostresQL" />
              PostgresQL
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={MySQLIcon} alt="MySQL" />
              MySQL
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={RegexIcon} alt="Regex" />
              Regex
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={RESTfulAPIsIcon} alt="RESTful APIs" />
              RESTful APIs
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={RSpecIcon} alt="RSpec" />
              RSpec
            </SkillListItem>
            <SkillListItem>
              <SkillIcon src={SinatraIcon} alt="Sinatra" />
              Sinatra
            </SkillListItem>
          </SkillList>
        </Column3>
        <Column4>
          <FrontendRow>
            <FrontendTitle>Database Design</FrontendTitle>
            <DescriptionColumn>
              <SkillDescription>
                - I have a strong understanding of the database design process
                and I can build any database from scratch.
              </SkillDescription>
              <SkillDescription>
                - I have experience with MySQL & PostgresSQL.
              </SkillDescription>
            </DescriptionColumn>
          </FrontendRow>
        </Column4>
        <Column4>
          <FrontendRow>
            <FrontendTitle>Content Writing</FrontendTitle>
            <DescriptionColumn>
              <SkillDescription>
                I have a strong understanding of the content writing process and
                I can write any content from scratch. My experience encompasses
                the realm of crafting articles, blogs, and essays. Currently, I
                actively maintain a blog on Hashnode, where I share my insights
                and expertise.{" "}
                <ExploreLink
                  href="https://hashnode.com/@Kerubo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore my writing.
                </ExploreLink>
              </SkillDescription>
            </DescriptionColumn>
          </FrontendRow>
        </Column4>
      </OuterContainer>
    </MySkillsContainer>
  );
}

export default MySkills;
