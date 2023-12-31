import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const BlogTitle = styled.h1`
  color: #333;
  font-family: Montserrat;
  font-size: 30px;
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
  //font-style: italic;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 0px;
    font-size: 16px;
  }
`;

function TypingTagline({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (textIndex < text.length) {
        setDisplayText(text.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }
    }, 50); // Typing speed, lower value === faster typing speed

    return () => clearTimeout(typingTimer);
  }, [text, textIndex]);

  return (
    <TaglineContainer>
      <Tagline>{displayText}</Tagline>
    </TaglineContainer>
  );
}

function BlogContent() {
  const taglineText =
    "Bringing you techy tales and giggles - It's code with a side of humor! 😄🚀💻";

  return (
    <BlogContainer>
      <BlogTitle>
        Take a peek at my blog: <i>The Adventures of a Tech Wizard</i>
      </BlogTitle>
      <TypingTagline text={taglineText} /> {/* Pass text as a prop */}
    </BlogContainer>
  );
}

export default BlogContent;
