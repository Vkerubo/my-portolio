import React from "react";
import { styled } from "styled-components";
import BlogImage from "../components/assets/blogImage.png";
import BlogLogo from "../components/assets/Hashnode.png";
import BlogNavbar from "../components/assets/HahnodeNavbar.png";

const BlogContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-shrink: 0;
  margin-left: 140px;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
    margin-left: 30px;
  }
`;

const ImageColumn = styled.div`
  width: 400px;
  height: 396px;
  flex-shrink: 0;
  position: relative;
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

const BackgroundContainer = styled.div`
  background: rgba(161, 228, 211, 0.14);
  display: flex;
  gap: 50px;
  height: 180px;
  flex-shrink: 0;
  margin-left: 14px;
  margin-top: 90px;
  max-width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
    margin-top: 70px;
    max-width: 100%;
    height: 120px;
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
  margin-left: 45px;
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
  font-weight: 500;
  line-height: normal;
  //margin-top: 300px;

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
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 90px;
    //justify-content: center;
  }
`;

const FollowHashnodeText = styled.div`
  color: #56a8a1;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: underline;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

function Blog() {
  return (
    <BlogContainer>
      <ImageColumn>
        <BlogImageStyled src={BlogImage} alt="Blog" />
        <FollowButton>Follow Me</FollowButton>
        <BlogLogoStyled src={BlogLogo} alt="Blog logo" />
        <BlogNavStyled src={BlogNavbar} alt="Blog profile"/>
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
          <FollowHashnodeText>Follow me on Hashnode</FollowHashnodeText>
        </FollowHashnodeColumn>
      </BackgroundContainer>
    </BlogContainer>
  );
}

export default Blog;
