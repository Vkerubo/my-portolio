import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../fonts.css";
import ShineyardImage1 from "./assets/Shineyardimage1.png";
import ShineyardImage2 from "./assets/Shineyard 2.png";
import ShineyardImage3 from "./assets/Shineyardimage3.png";
import Mamacareimage1 from "./assets/MamaCare.png";
import Mamacareimage2 from "./assets/MamaCare2.png";
import Mamacareimage3 from "./assets/mamacare 4.png";


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
  margin-bottom: 6px;

  @media (max-width: 668px) {
    padding: 0px 10px;
    font-size: 20px;
  }
`;

const Title2 = styled.h1`
  color: #0a1930;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 6px;
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
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  padding: 20px;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

const Description = styled.p`
  color: #666;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  margin-top: 0px;
`;

const EmailLink = styled.a`
  color: #56a8a1;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  text-decoration: none;
  border: 1px solid #56a8a1;
  padding: 8px 10px;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #56a8a1;
    color: white;
  }
`;

function UiUx() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: ShineyardImage1, alt: "Shineyard 1" },
    { src: ShineyardImage2, alt: "Shineyard 2" },
    { src: ShineyardImage3, alt: "Shineyard 3" },
  ];

  const mamacareImages = [
    { src: Mamacareimage1, alt: "Mamacare 1" },
    { src: Mamacareimage2, alt: "Mamacare 2" },
    { src: Mamacareimage3, alt: "Mamacare 3" },
  ];

  const toggleModal = (image) => {
    setSelectedImage(image);
    setShowModal(!showModal);
  };

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
          <Title2>Shineyard Properties</Title2>
          <Description>A real estate homepage.</Description>
          <EmailLink
            href="https://www.figma.com/file/5IcjQ7zvYE0rRNeeKoEZQ7/My-Portfolio?type=design&node-id=236-45&mode=design&t=V3ysagn447LBzUYw-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Design
          </EmailLink>
          <ColumnContainer>
            {images.map((image, index) => (
              <ImageCard key={index} onClick={() => toggleModal(image)}>
                <Image src={image.src} alt={image.alt} />
              </ImageCard>
            ))}
          </ColumnContainer>
        </CenteredContainer>
      </Content>
      <Footer />
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => toggleModal(null)}>X</CloseButton>
            {selectedImage && (
              <Image src={selectedImage.src} alt="Enlarged Image" />
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
}

export default UiUx;
