import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogContent from "./BlogContent";
import Blog from "./Blog";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height of the viewport */
`;

const Content = styled.div`
  flex-grow: 1; /* Allow content to grow and fill available space */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  //justify-content: center; /* Center vertically */
  padding: 40px 110px;

  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

const ContactContent = styled.div`
  text-align: center;
  margin-top: 20px;
  font-family: Montserrat;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ActionButton = styled.button`
  color: #56a8a1;
  background-color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
  text-decoration: none;
  border: 1px solid #56a8a1;
  padding: 10px 20px;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #56a8a1;
    color: white;
  }
`;

function ContactPage() {
  const email = "kerubovalentine1@gmail.com";

  const handleHireMeClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <MainContainer>
      <Navbar />
      <Content>
        <ContactContent>
          I'm currently looking for new
          opportunities, where i'd be able to contribute significant value to an
          organization
        </ContactContent>
        <ActionButton onClick={handleHireMeClick}>Hire Me</ActionButton>
      </Content>
      <BlogContent />
      <Blog />
      <Footer />
    </MainContainer>
  );
}

export default ContactPage;
