import React from "react";
import { styled, keyframes } from "styled-components";
import TestimonialQuote from "../components/assets/Vector (1).svg";
import TestimonialImage from "../components/assets/Men talking.gif";

const TestimonialsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #333;
  font-family: Montserrat;
  width: 100%;
  justify-content: center;
  background-color: #58a8a1;
  padding: 20px 0;
`;

const Title = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  line-height: normal;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const TestimonialQuoteImage = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 20px;
`;

const TestimonialsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;

const TestimonialImageContainer = styled.div`
  flex-shrink: 0;
  margin-right: 20px;
`;

const TestimonialImageStatic = styled.img`
  max-width: 200px; /* Adjust the image size as needed */
  height: auto;
`;

const TestimonialsSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
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
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  animation: ${slideUp} 5s linear infinite;
`;

function Testimonials() {
  return (
    <TestimonialsContainer>
      <Title>What people say about me</Title>
      <TestimonialQuoteImage src={TestimonialQuote} alt="Testimonial Quote" />
      <TestimonialsContent>
        <TestimonialImageContainer>
          <TestimonialImageStatic
            src={TestimonialImage}
            alt="Static Testimonial Image"
          />
        </TestimonialImageContainer>
        <TestimonialsSlider>
          {/* Testimonial 1 */}
          <Testimonial>
            <p>Testimonial 1 content goes here.</p>
          </Testimonial>

          {/* Testimonial 2 */}
          <Testimonial>
            <p>Testimonial 2 content goes here.</p>
          </Testimonial>

          {/* Testimonial 3 */}
          <Testimonial>
            <p>Testimonial 3 content goes here.</p>
          </Testimonial>

          {/* Testimonial 4 */}
          <Testimonial>
            <p>Testimonial 4 content goes here.</p>
          </Testimonial>
        </TestimonialsSlider>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
}

export default Testimonials;
