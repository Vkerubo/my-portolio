import React from "react";
import { styled } from "styled-components";
import InstagramIcon from "../components/assets/Instagram Circle.png";
import LinkedInIcon from "../components/assets/LinkedIn Circled.png";
import EmailIcon from "../components/assets/Circled Envelope.png";
import XIcon from "../components/assets/TwitterX (1).png";
import SlackIcon from "../components/assets/Slack New.png";

const MentorshipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
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
  width: 578px;
  height: 44px;
  flex-shrink: 0;
`;



function Mentorship() {
  return <div>Mentorship</div>;
}

export default Mentorship;
