import React, { useState } from "react";
import styled from "styled-components";
import GithubIcon from "../components/assets/GitHub.png";
import XIcon from "../components/assets/TwitterX (1).png";
import LinkedIn from "../components/assets/LinkedIn Circled.png";

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-left: 60px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const RightColumn = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    text-align: left;
  }
`;

const Title = styled.h1`
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
`;

const Subtitle = styled.p`
  color: #333;
  font-family: Montserrat;
`;

const EmailLink = styled.a`
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

  &:hover {
    background-color: #56a8a1;
    color: white;
  }
`;

const OrText = styled.p`
  color: #333;
  font-family: Montserrat;
`;

const Description = styled.p`
  color: #333;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormLabel = styled.label`
  font-family: Montserrat;
  font-size: 16px;
  color: #333;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Montserrat;
  font-size: 16px;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Montserrat;
  font-size: 16px;
`;

const FormSubmitButton = styled.button`
  background-color: #56a8a1;
  color: white;
  border: none;
  padding: 10px 20px;
  font-family: Montserrat;
  font-size: 16px;
  cursor: pointer;
`;

const CharacterCount = styled.p`
  color: #333;
  font-family: Montserrat;
  font-size: 12px;
  margin-top: 5px;
`;

const Required = styled.span`
  color: #56a8a1;
  font-weight: bold;
  margin-left: 5px;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 29px;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.7;
  }
`;



function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the formData to Formspree for email sending
    const response = await fetch("https://formspree.io/f/mrgwkrpq", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      // Clear the form
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } else {
      alert("Form submission failed. Please try again later.");
    }
  };

  // Calculate character count
  const maxCharCount = 300;
  const charCount = maxCharCount - formData.message.length;

  return (
    <Container>
      <LeftColumn>
        <Title>Let's talk business</Title>
        <Subtitle>
          Now that you know a lot about me, let me know if you are interested in
          working with me.
        </Subtitle>
        <EmailLink href="mailto:kerubovalentine1@gmail.com">Email me</EmailLink>
        <OrText>...or fill out the form below</OrText>
        <ContactForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="fullName">
            Full Name<Required>*</Required>:
          </FormLabel>
          <FormInput
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <FormLabel htmlFor="email">
            Email<Required>*</Required>:
          </FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormLabel htmlFor="message">
            Message<Required>*</Required>:
          </FormLabel>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength="300"
            required
          />
          <CharacterCount>{charCount} characters left</CharacterCount>
          <FormSubmitButton type="submit">Send Email</FormSubmitButton>
        </ContactForm>
      </LeftColumn>
      <RightColumn>
        <Description>
          Feeling social? Find me on these online spaces too!
        </Description>
      </RightColumn>
    </Container>
  );
}

export default Contact;
