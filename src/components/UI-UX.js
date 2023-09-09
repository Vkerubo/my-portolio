import React from "react";
import { styled } from "styled-components";
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
  //justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */

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

// const ProjectTitle = styled.h2`
//   color: #0a1930;
//   font-family: Montserrat;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
// `;

// const ProjectDescription = styled.p`
//   color: #0a1930;
//   font-family: Montserrat;
//   font-size: 16px;
//   font-style: normal;
//   line-height: 25px;
//   margin-top: 10px;
// `;

// const ViewDesignButton = styled.a`
//   color: #56a8a1;
//   font-family: Montserrat;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 700;
//   width: 90px;
//   line-height: normal;
//   text-decoration: none;
//   border: 1px solid #56a8a1;
//   padding: 14px 10px ;
//   display: inline-block;
//   transition: background-color 0.3s, color 0.3s;
//   margin-top: 20px;

//   &:hover {
//     background-color: #56a8a1;
//     color: white;
//   }
// `;

const ColumnContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  max-width: 1335px;
  flex-shrink: 0;
  justify-content: space-between; /* Add this to space the image cards */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center cards on mobile */
  }
`;

const ImageCard = styled.div`
  flex: 1; /* Equal width for all cards */
  position: relative;
  z-index: ${(props) =>
    props.zIndex || 1}; /* Set z-index to control stacking */
  transform: translateX(
    ${(props) => props.translateX || 0}px
  ); /* Move cards horizontally */
  transition: transform 0.3s;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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

        <ColumnContainer>
          <ImageCard zIndex={3} translateX={-20}>
            <Image src={ShineyardImage3} alt="Shineyard 3" />
          </ImageCard>
          <ImageCard zIndex={2} translateX={-10}>
            <Image src={ShineyardImage2} alt="Shineyard 2" />
          </ImageCard>
          <ImageCard zIndex={1}>
            <Image src={ShineyardImage1} alt="Shineyard 1" />
          </ImageCard>
        </ColumnContainer>
      </Content>
      <Footer />
    </MainContainer>
  );
}

export default UiUx;
