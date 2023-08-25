import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #0a1930;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: regular;
  margin: 0;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  margin-bottom: 1px;
  margin-top:40px;
  align-items: center; /
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: normal;
  transition: color 0.3s, font-weight 0.3s;

  &:hover,
  &:active {
    color: #a1e4d3;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 4px solid #a1e4d3; /* Add this line */
    padding-bottom: 3px; /* Adjust as needed to control the underline thickness */
  }
`;

const ResumeLink = styled(Link)`
  text-decoration: none;
  color: #A1E4D3;
  font-size: 16px;
  font-weight: normal;
  transition: color 0.3s;

  &:hover,
  &:active {
    color: #fff;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ;#56a8a1
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
    z-index: -1;
  }

  &:hover:before,
  &:active:before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const ResumeButton = styled.a`
  text-decoration: none;
  color: #a1e4d3;
  font-size: 16px;
  font-weight: normal;
  border: 2px solid #a1e4d3;
  padding: 10px 20px;
  border-radius: 4px;
  transition: color 0.3s, transform 0.3s, background-color 0.3s; /* Add transform and background-color for transitions */

  transform: perspective(400px) rotateX(0deg); /* Add initial 3D effect */

  &:hover,
  &:active {
    color: #fff;
    background-color: #56a8a1;
    transform: perspective(400px) rotateX(10deg); /* Add hover 3D effect */
    box-shadow: 0 4px 6px rgba(0, 0, 256, 1); /* Add box-shadow for depth */
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Header>Valentine Kerubo Oberi</Header>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <ResumeButton href="https://docs.google.com/document/d/1IXXoCEdinoSy6SxsGGpnml8KPea8grdi7iQjDhhkCnM/edit#heading=h.wxvx2glo98ug">
          Resume
        </ResumeButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
