import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import TestimonialQuote from "../components/assets/Vector (1).svg";
import TestimonialImage from "../components/assets/Men talking.gif";
import TestimonialModal from "./TestimonialModal";
//import { useState } from "react";

const TestimonialsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #333;
  font-family: Montserrat;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  width: 100%
  text-align: center;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const TestimonialQuoteImage = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-left: 10px;
`;

const TestimonialsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    //margin-left: 90px;
  }
`;

const TestimonialImageContainer = styled.div`
  flex-shrink: 0;
  //margin-right: 10px;
  display: block;
  max-width: 40%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TestimonialImageStatic = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;

  @media (min-width: 769px) {
    max-width: 100%; /* On larger screens, set the width to 50% */
  }
`;

const TestimonialsSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  overflow: hidden;

  @media (min-width: 769px) {
    width: 100%; /* On larger screens, set the width to 50% */
    margin-left: 0px;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const Testimonial = styled.div`
  background-color: #fff;
  cursor: pointer;
  width: 100%;
  padding: 20px;
  background: rgba(161, 228, 211, 0.14);
  margin-top: 20px;
  animation: ${slideUp} 5s linear infinite;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
  position: relative;
`;

const OpeningSpeechMarks = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

const TestimonialDescription = styled.div`
  flex-grow: 1; /* Take up the remaining space */
  padding-left: 10px; /* Add some spacing between speech marks and description */
`;

const ClosingSpeechMarks = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px; /* Add some spacing between testimonial and author */
`;

const AuthorName = styled.div`
  font-weight: bold;
`;

const AuthorTitle = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

function Testimonials() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState("");

  const testimonials = [
    "Testimonial 1 content goes here.",
    "Testimonial 2 content goes here.",
    "Testimonial 3 content goes here.",
    "Testimonial 4 content goes here.",
  ];

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <TestimonialsContainer>
      <HeaderContainer>
        <Title>What people say about me</Title>
        <TestimonialQuoteImage src={TestimonialQuote} alt="Testimonial Quote" />
      </HeaderContainer>
      <TestimonialsContent>
        <TestimonialImageContainer>
          <TestimonialImageStatic
            src={TestimonialImage}
            alt="Static Testimonial Image"
          />
        </TestimonialImageContainer>
        <TestimonialsSlider>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              onClick={() => handleTestimonialClick(testimonial)}
            >
              <p>{testimonial}</p>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </TestimonialsContent>
      {modalVisible && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={handleCloseModal}
        />
      )}
    </TestimonialsContainer>
  );
}

export default Testimonials;
