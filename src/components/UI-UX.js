import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height of the viewport */
`;

const Content = styled.div`
  flex-grow: 1; /* Allow content to grow and fill available space */
  padding: 4px 110px;

  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

const Title = styled.h1`
  color: #333;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0px 10px;
    font-size: 25px;
  }
`;

const DevelopText = styled.span`
  color: #1fb8ab; /* Set the color for "Develop" */
`;

const Text1 = styled.p`
  color: #666;
  font-family: "Nanum Brush Script", sans-serif;
  font-size: 20px;
  font-style: normal;
  margin-bottom: 20px;
`;

const Text2 = styled.p`
  color: #666;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  margin-bottom: 20px;
`;

const Text3 = styled.p`
  color: #666;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  margin-bottom: 20px;
`;


function UiUx() {
  return (
    <MainContainer>
      <Navbar />
      <Content>
        <Title>
          Not Only Can I <DevelopText>Develop</DevelopText> World-Class Apps...
        </Title>
        <Text1>I also sprinkle design magic with Figma! 🪄✨</Text1>
        <Text2>
          Currently, I'm on a creative adventure exploring Spline, and guess
          what? I even designed this portfolio – pretty snazzy, right? 😎
        </Text2>
        <Text3>Take a glimpse of some designs I've created;</Text3>
      </Content>
      <Footer />
    </MainContainer>
  );
}

export default UiUx;
