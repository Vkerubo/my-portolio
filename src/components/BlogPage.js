import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Blog from "./Blog";
import { styled } from "styled-components";
import BlogContent from "./BlogContent";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height of the viewport */
`;

const Content = styled.div`
  flex-grow: 1; /* Allow content to grow and fill available space */
  padding: 4px 110px;

  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

function BlogPage() {
  return (
    <MainContainer>
      <Navbar />
      <Content>
        <BlogContent />
        <Blog />
      </Content>
      <Footer />
    </MainContainer>
  );
}

export default BlogPage;
