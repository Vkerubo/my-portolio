import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import TestimonialQuote from "../components/assets/Vector (1).svg";
import NelsonImage from "../components/assets/NelsonImage.jpeg";
import UreyImage from "../components/assets/Urey.webp";
import WizaImage from "../components/assets/Wiza.jpeg";

const fadeAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-family: Montserrat;
  width: 100%;
  justify-content: center;
  padding: 20px 0;

  @media (max-width: 768px) {
    padding: 0; /* Remove padding on smaller screens */
  }
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
  width: 100%;
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

const TestimonialTextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const TestimonialDescription = styled.p`
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const AuthorName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const AuthorTitle = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 1px;
`;

const AuthorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NelsonImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const NelsonImageBig = styled.img`
  width: 100px; /* Adjust the size as needed */
  height: auto;
  margin-top: 0px;
  border-radius: 53px;
`;

const NumberCirclesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const NumberCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 13px;
  margin: 10px;
`;

const TestimonialContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-left: 190px;
  margin-right: 190px;
  box-shadow: inset 0 0 0 1px #ccc; /* Add an inner border */
  //animation: ${fadeAnimation} 8s linear infinite; /* Apply fading animation */

  @media (max-width: 768px) {
    padding: 0; /* Remove padding on smaller screens */
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 10px;
  }
`;

const TestimonialContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

function Testimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      text: ` "Valentine Oberi is an outstanding individual whose leadership
      skills and unwavering determination in the field of software
      engineering truly stand out. As a class representative, she
      skillfully organized and fostered collaboration, leaving a positive
      impact in the entire class. Valentine's genuine passion for software
      engineering manifested in her relentless pursuit of innovative
      solutions for intricate challenges. Her resilience and dedication
      serve as a true inspiration, assuring me that she will undoubtedly
      continue to thrive and make significant contributions to the
      industry."`,
      authorName: "Nelson Muriithi",
      authorTitle: "Technical Mentor, Moringa School",
      authorImage: NelsonImage,
    },
    {
      text: `"I've had the privilege of mentoring Valentine during her learning journey in the world of tech and programming. Her genuine passion for this field is inspiring, and I've witnessed her dedication and hard work firsthand. Valentine has truly fallen in love with technology, and it's been a joy to guide her as she grows in her skills and knowledge. She's a dedicated learner with a bright future ahead."`,
      authorName: "Urey Mutuale",
      authorTitle: "Managing Director OctoBytes/Malewa",
      authorImage: UreyImage,
    },
    {
      text: `"Valentine's unwavering dedication to tech and programming is truly inspiring. Her insatiable curiosity and relentless pursuit of knowledge are evident in everything she does. With her incredible work ethic and boundless passion, a future filled with success and innovation awaits her in the world of technology." `,
      authorName: "Wiza Jalakasi",
      authorTitle: "Director, Africa Market Development, EBANX",
      authorImage: WizaImage,
    },
    // Add more testimonials
  ];

  useEffect(() => {
    // Cycle through testimonials with a delay
    const timer = setInterval(() => {
      setTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // Change testimonials every 9 seconds

    return () => clearInterval(timer);
  }, [testimonialIndex, testimonials.length]);

  return (
    <TestimonialsContainer>
      <HeaderContainer>
        <Title>What people say about me</Title>
        <TestimonialQuoteImage src={TestimonialQuote} alt="Testimonial Quote" />
      </HeaderContainer>
      <TestimonialContentWrapper>
        <TestimonialTextContainer>
          <TestimonialDescription>
            {testimonials[testimonialIndex].text}
          </TestimonialDescription>
        </TestimonialTextContainer>
        <TestimonialContentContainer>
          <AuthorContainer>
            <AuthorName>{testimonials[testimonialIndex].authorName}</AuthorName>
            <AuthorTitle>
              {testimonials[testimonialIndex].authorTitle}
            </AuthorTitle>
          </AuthorContainer>
          <NelsonImageContainer>
            <NelsonImageBig
              src={testimonials[testimonialIndex].authorImage}
              alt="Author Image"
            />
          </NelsonImageContainer>
        </TestimonialContentContainer>
      </TestimonialContentWrapper>
      <NumberCirclesContainer>
        {testimonials.map((_, index) => (
          <NumberCircle
            key={index}
            style={{
              background: index === testimonialIndex ? "#333" : "white",
            }}
          >
            {index + 1}
          </NumberCircle>
        ))}
      </NumberCirclesContainer>
    </TestimonialsContainer>
  );
}

export default Testimonials;
