import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Blog from "./Blog";
import { styled } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height of the viewport */
`;

const Content = styled.div`
  flex-grow: 1; /* Allow content to grow and fill available space */
`;

function BlogPage() {
  return (
    <MainContainer>
      <Navbar />
      <Content>
        <Blog />
      </Content>
      <Footer />
    </MainContainer>
  );
}

export default BlogPage;
