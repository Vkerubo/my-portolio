import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../fonts.css";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height of the viewport */
`;

const Content = styled.div`
  flex-grow: 1; /* Allow content to grow and fill available space */
  padding: 4px 110px;
  max-width: 100;

  @media (max-width: 1068px) {
    padding: 0px 5px;
  }
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
  margin-bottom: 10px;
`;

const Text2 = styled.p`
  color: #0a1930;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  margin-bottom: 20px;
  line-height: 25px;
`;

const Text3 = styled.p`
  color: #0a1930;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  margin-bottom: 20px;
  line-height: 25px;
`;

const FigmaText = styled.span`
  color: #1fb8ab; /* Set the color for "Figma" */
`;

const ColumnContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  max-width: 1335px; /* Set a maximum width that suits your design */
  height: 510px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  flex: 30%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h2`
  color: #0a1930;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ProjectDescription = styled.p`
  color: #0a1930;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  line-height: 25px;
  margin-top: 10px;
`;

const ViewDesignButton = styled.a`
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
  margin-top: 20px;

  &:hover {
    background-color: #56a8a1;
    color: white;
  }
`;

const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  //justify-content: center;
  max-width: 70%;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 30px;
    max-width: 100%;
  }
`;

const Image1 = styled.img`
  border-radius: 24px;
  background: rgba(161, 228, 211, 0.91);
  box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.35);
  width: 300px; /* Set maximum width to prevent stretching */
  height: 50%;
  transform: rotate(-6deg);
  flex-shrink: 0;

  @media (max-width: 868px) {
    width: 190px; /* Set maximum width to prevent stretching */
    height: 70%;
  }
`;

const Image2 = styled.img`
  background: rgba(161, 228, 211, 0.49);
  box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.35);
  display: inline-flex;
  width: 300px; /* Set maximum width to prevent stretching */
  height: 50%;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 868px) {
    width: 190px; /* Set maximum width to prevent stretching */
    height: 70%;
  }
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
          I also sprinkle design magic with <FigmaText>Figma</FigmaText>! 🪄✨
        </Text1>
        <Text2>
          Currently, I'm on a creative adventure exploring <b>Spline</b>, and
          guess what? I even designed this portfolio – pretty snazzy, right? 😎
        </Text2>
        <Text3>Take a glimpse of some designs I've created;</Text3>

        <ColumnContainer>
          <LeftContainer>
            <ProjectTitle>Shineyard Project</ProjectTitle>
            <ProjectDescription>
              A brief description of the Shineyard Project.
            </ProjectDescription>
            <ViewDesignButton href="#">View Design</ViewDesignButton>
          </LeftContainer>
          <RightContainer>
            <Image1 src="your-image-1-source" alt="Image 1" />
            <Image2 src="your-image-2-source" alt="Image 2" />
          </RightContainer>
        </ColumnContainer>
      </Content>
      <Footer />
    </MainContainer>
  );
}

export default UiUx;
