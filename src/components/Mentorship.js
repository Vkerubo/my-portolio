import React from "react";
import { styled } from "styled-components";
import InstagramIcon from "../components/assets/Instagram Circle.png";
import LinkedInIcon from "../components/assets/LinkedIn Circled.png";
import EmailIcon from "../components/assets/Circled Envelope.png";
import XIcon from "../components/assets/TwitterX (1).png";
import SlackIcon from "../components/assets/Slack New.png";

const MentorshipContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  
`;

const LeftColumn = styled.div`
  flex-basis: 50%;
  padding: 20px;
  text-align: center;
`;

const RightColumn = styled.div`
  flex-basis: 50%;
  padding: 20px;
  text-align: center;
`;

const Title = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Subtitle = styled.div`
  color: #56a8a1;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Description = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ContactLink = styled.a`
  color: #56a8a1;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  border: 1px solid #56a8a1;
  padding: 10px 20px;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: transparent;
  }
`;

const ConnectTitle = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 29px;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.7;
  }
`;

function Mentorship() {
  return (
    <MentorshipContainer>
      <LeftColumn>
        <Title>Mentorship</Title>
        <Subtitle>Currently Building Tech Sisters Kenya 👭👩‍💻</Subtitle>
        <Description>
          As a passionate software engineer, I’m a founder of Tech Sisters
          Kenya, where I offer mentorship and support to both aspiring and
          current women in tech. If you are looking to grow your skills or
          navigate a career in technology, I'm here to help guide your journey.
        </Description>
        <ContactLink href="mailto:kerubovalentine1@gmail.com">
          Email me
        </ContactLink>
      </LeftColumn>
      <RightColumn>
        <ConnectTitle>
          Join and connect with Tech Sisters Kenya community
        </ConnectTitle>
        <SocialIconsContainer>
          <SocialIcon
            href="https://instagram.com/techsisterskenya?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            title="Instagram"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/company/tech-sisters-kenya/"
            target="_blank"
            title="LinkedIn"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com/TechSistersKE"
            target="_blank"
            title="Twitter"
          >
            <img src={XIcon} alt="Twitter" />
          </SocialIcon>
          <SocialIcon href="mailto:techsisterskenya@gmail.com" title="Email">
            <img src={EmailIcon} alt="Email" />
          </SocialIcon>
          <SocialIcon href="#" title="Slack">
            <img src={SlackIcon} alt="Slack" />
          </SocialIcon>
        </SocialIconsContainer>
      </RightColumn>
    </MentorshipContainer>
  );
}

export default Mentorship;
