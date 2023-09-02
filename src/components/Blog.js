import React from "react";
import { styled } from "styled-components";
import BlogImage from "../components/assets/blogImage.png";
import BlogLogo from "../components/assets/Hashnode.png";
import BlogNavbar from "../components/assets/HahnodeNavbar.png";

const BlogContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(161, 228, 211, 0.14);
  width: 913px;
  height: 148px;
  flex-shrink: 0;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px #56a8a1;
`;

const ImageColumn = styled.div`
  width: 400px;
  height: 396px;
  flex-shrink: 0;
`;

const BlogImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FollowButton = styled.div`
  background: #333;
  box-shadow: 0px 4px 4px 0px #56a8a1;
  display: flex;
  width: 69px;
  height: 17px;
  padding: 3px 5px 2px 5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;


function Blog() {
  return <>Hi</>;
}

export default Blog;
