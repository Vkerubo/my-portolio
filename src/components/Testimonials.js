import React from "react";
import { styled } from "styled-components";
import OpeningSpeechMarks from "../components/assets/Quote Left.png";
import ClosingSpeechMarks from "../components/assets/Get Quote.png";
import TestimonialQuote from "../components/assets/Vector (1).svg";
import TestimonialImage from "../components/assets/Men talking.gif";

const TestimonialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  height: 58px;
  flex-shrink: 0;
  justify-content: center;
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
`;

function Testimonials() {
  return (
    <TestimonialsContainer>
      <Title>What people say about me</Title>
      <TestimonialQuoteImage src={TestimonialQuote} alt="Testimonial Quote" />
    </TestimonialsContainer>
  );
}

export default Testimonials;
