import React from "react";
import { styled, keyframes } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../fonts.css";
import ShineyardImage1 from "./assets/Shineyardimage1.png";
import ShineyardImage2 from "./assets/Shineyard 2.png";
import ShineyardImage3 from "./assets/Shineyardimage3.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height of the viewport */
`;

const Content = styled.div`
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #0a1930;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;

  @media (max-width: 668px) {
    padding: 0px 10px;
    font-size: 20px;
  }
`;

const DevelopText = styled.span`
  color: #1fb8ab; /* Set the color for "Develop" */
`;

const Text1 = styled.p`
  color: #666;
  font-family: "Nanum Brush Script", sans-serif;
  font-size: 27px;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 1px;

  @media (max-width: 668px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

const Text2 = styled.p`
  color: #0a1930;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  margin: 0px 30px;
  line-height: 25px;
`;

const Text3 = styled.p`
  color: #0a1930;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  margin-bottom: 0px;
  line-height: 25px;
`;

const FigmaText = styled.span`
  color: #1fb8ab; /* Set the color for "Figma" */
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
  gap: 20px;
  animation: ${float} 4s ease-in-out infinite;
`;

const ImageCard = styled.div`
  flex: 1;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function UiUx() {
  return (
    <MainContainer>
      <Navbar />
      <Content>
        <Title>
          Not Only Can I <DevelopText>Develop</DevelopText> World-Class Apps...
        </Title>
        <Text1>
          I also sprinkle design magic with <FigmaText>Figma!</FigmaText> 🪄✨
        </Text1>
        <Text2>
          Currently, I'm on a creative adventure exploring <b>Spline</b>, and
          guess what? I even designed this portfolio – pretty snazzy, right? 😎
        </Text2>
        <Text3>Take a glimpse of some designs I've created;</Text3>

        <CenteredContainer>
          <ColumnContainer>
            <ImageCard>
              <Image src={ShineyardImage1} alt="Shineyard 1" />
            </ImageCard>
            <ImageCard>
              <Image src={ShineyardImage2} alt="Shineyard 2" />
            </ImageCard>
            <ImageCard>
              <Image src={ShineyardImage3} alt="Shineyard 3" />
            </ImageCard>
          </ColumnContainer>
        </CenteredContainer>
      </Content>
      <Footer />
    </MainContainer>
  );
}

export default UiUx;
