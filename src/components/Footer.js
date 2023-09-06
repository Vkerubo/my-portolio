import React from "react";
import CopyrightIcon from "../components/assets/Copyright.png";
import styled from "styled-components";

// Define a styled component for the div element
const FooterContainer = styled.div`
  background: #0a1930;
  padding: 20px;
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

// Define a styled component for the img element
const CopyrightImage = styled.img`
  width: 30px;
  height: 20px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 25px;
    height: 15px;
  }
`;

// Define a styled component for the span element
const CopyrightText = styled.span`
  color: #fff;
  font-family: Sen;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center; /* Center text horizontally */

  @media (max-width: 768px) {
    font-size: 10px; /* Adjust font size for smaller screens */
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <CopyrightImage src={CopyrightIcon} alt="Copyright Icon" />
      <CopyrightText>
        2023 | Designed & Coded by Valentine Kerubo | All rights reserved
      </CopyrightText>
    </FooterContainer>
  );
}

export default Footer;
