import React from "react";
import CopyrightIcon from "../components/assets/Copyright.png";
import styled from "styled-components";

// Define a styled component for the div element
const FooterContainer = styled.div`
  background: #0a1930;
  padding: 20px;
  margin-top: 20px;
`;

// Define a styled component for the img element
const CopyrightImage = styled.img`
  width: 50px;
  height: 35px;
  flex-shrink: 0;
`;

// Define a styled component for the span element
const CopyrightText = styled.span`
  color: #fff;
  font-family: Sen;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
