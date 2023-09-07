import React from "react";
import { styled } from "styled-components";

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

  @media (max-width: 768px) {
    margin-bottom: 0px;
    font-size: 16px;
  }
`;

function BlogContent() {
  return (
    <BlogContainer>
      <BlogTitle>The Adventures of a Tech Wizard</BlogTitle>
      <Tagline>
        Bringing you techy tales and giggles - It's code with a side of humor!
      </Tagline>
    </BlogContainer>
  );
}

export default BlogContent;
