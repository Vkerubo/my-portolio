import React from "react";
import { styled } from "styled-components";
import BlogImage from "../components/assets/blogImage.png";
import BlogLogo from "../components/assets/Hashnode.png";
import BlogNavbar from "../components/assets/HahnodeNavbar.png";

const BlogContainer = styled.div`
  display: flex;
  //gap: 0px;
  //align-items: center;
  flex-shrink: 0;
  margin-left: 100px;
  margin-top: 50px;
  max-width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-left: 30px;

  }
`;

const ImageColumn = styled.div`
  max-width: 100%;
  height: 396px;
  flex-shrink: 0;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%
  }
`;

const BlogImageStyled = styled.img`
  max-width: 100%;
  height: 100%;
  //object-fit: cover;
`;

const FollowButton = styled.a`
  background: #333;
  box-shadow: 0px 4px 4px 0px #56a8a1;
  display: flex;
  width: 69px;
  color: #fff;
  font-size: 10px;
  height: 17px;
  padding: 3px 5px 2px 5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  position: absolute; /* Position the button absolutely within the image container */
  top: 213px; /* Position from the top */
  left: 175px; /* Position from the left */
  text-decoration: none; /* Remove default link underline */

  color: #fff;
  background-color: #333;
  transform: perspective(400px) rotateX(10deg) scale(1.1);
  box-shadow: 0px 4px 4px 0px #56a8a1;
  text-decoration: none;
  animation: bounce 0.5s ease infinite; /* Add the bounce animation here */
  transition: transform 0.3s ease-in-out, background-color 0.3s; /* Add transitions */

  &:hover,
  &:active {
    background-color: #56a8a1;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px); /* Adjust the bounce height here */
    }
    60% {
      transform: translateY(-5px); /* Adjust the bounce height here */
    }
  }
`;

const BlogLogoStyled = styled.img`
  position: absolute; /* Position the button absolutely within the image container */
  top: 113px; /* Position from the top */
  left: 147px; /* Position from the left */
  width: 100px;
`;

const BlogNavStyled = styled.img`
  position: absolute; /* Position the button absolutely within the image container */
  top: 143px; /* Position from the top */
  left: 47px; /* Position from the left */
  width: 100px;
`;

const BlogProfile = styled.img`
  margin-top: 50px; /* Position from the top */
  width: 100px;

  @media (max-width: 768px) {
    margin-top: 1px;
  }
`;

const BackgroundContainer = styled.div`
  background: rgba(161, 228, 211, 0.14);
  display: flex;
  //gap: 50px;
  height: 180px;
  flex-shrink: 0;
  //margin-left: 14px;
  margin-top: 90px;
  max-width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    //gap: 10px;
    margin-top: 10px;
    //max-width: 768px;
    height: 150px;
    margin-left: 0px;
  }
`;

const BlogTextColumn = styled.div`
  width: 574px;
  height: 84px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 100%;
  //margin-left: 45px;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 1px;
  }
`;

const BlogText = styled.div`
  color: #333;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  //font-weight: 400;
  line-height: normal;
  max-width: 100%;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 1px;
    max-width: 100%;
  }
`;

const FollowHashnodeColumn = styled.div`
  width: 206px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  margin-top: 1px;

  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 120px;
    //justify-content: center;
  }
`;

const FollowHashnodeText = styled.a`
  color: #56a8a1;
  font-family: Montserrat;
  font-size: 15px;
  //font-style: bold;
  font-weight: 900;
  line-height: normal;
  text-decoration: underline;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  &:hover,
  &:active {
    background-color: #56a8a1;
    color: #fff;
    text-decoration: none;
    border: 1px solid #56a8a1;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

function Blog() {
  return (
    <BlogContainer>
      <ImageColumn>
        <BlogImageStyled src={BlogImage} alt="Blog" />
        <FollowButton href="https://hashnode.com/@Kerubo" target="_blank">
          Follow Me
        </FollowButton>
        <BlogLogoStyled src={BlogLogo} alt="Blog logo" />
        <BlogNavStyled src={BlogNavbar} alt="Blog profile" />
      </ImageColumn>
      <BackgroundContainer>
        <BlogTextColumn>
          <BlogText>
            As a passionate technical writer, I love creating articles that
            educate and inform. I believe that great technical writing can
            change lives by spreading knowledge and improving technology.
          </BlogText>
        </BlogTextColumn>
        <FollowHashnodeColumn>
          <BlogProfile src={BlogNavbar} alt="My blog profile" />
          <FollowHashnodeText
            href="https://hashnode.com/@Kerubo"
            target="_blank"
          >
            Check My Blog
          </FollowHashnodeText>
        </FollowHashnodeColumn>
      </BackgroundContainer>
    </BlogContainer>
  );
}

export default Blog;
