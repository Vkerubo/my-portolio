import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import ReactSound from "react-sound";

const BlogTitle = styled.h1`
  color: #333;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
`;

const BlogContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

const TaglineContainer = styled.div`
  overflow: hidden;
`;

const Tagline = styled.p`
  color: #666;
  font-family: Montserrat;
  font-size: 20px;
  font-style: italic;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 0px;
    font-size: 16px;
  }
`;

function TypingTagline({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const [typingSoundEnabled, setTypingSoundEnabled] = useState(false); // state to control sound

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (textIndex < text.length) {
        setDisplayText(text.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);

        //Enable typing sound when a character is typed
        setTypingSoundEnabled(true);
      }
    }, 100); // Typing speed, lower value === faster typing speed

    return () => clearTimeout(typingTimer);
  }, [text, textIndex]);

  // Function to handle the end of sound playing
  const handleSoundFinishedPlaying = () => {
    setTypingSoundEnabled(false); // Disable typing sound when the sound finishes playing
  };

  return (
    <TaglineContainer>
      <Tagline>{displayText}</Tagline>
    </TaglineContainer>
  );
}

function BlogContent() {
  const taglineText =
    "Bringing you techy tales and giggles - It's code with a side of humor!";

  return (
    <BlogContainer>
      <BlogTitle>The Adventures of a Tech Wizard</BlogTitle>
      <TypingTagline text={taglineText} /> {/* Pass text as a prop */}
    </BlogContainer>
  );
}

export default BlogContent;
