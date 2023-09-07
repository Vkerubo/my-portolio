import React from "react";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  flex-shrink: 0;
  color: #121e27;
  font-family: Muli;
  font-size: 18px;
  padding: 40px 200px;
  font-style: light;
  font-weight: 200;
  line-height: 39px;

  @media (max-width: 768px) {
    padding: 40px;
    font-size: 16px;
  }
`;

const Title = styled.div`
  color: #121e27;
  font-size: 60px;
  font-weight: 100;
  font-family: Montserrat;
  font-style: light;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.div`
  color: #121e27;
  font-weight: 900;
  line-height: normal;
  font-size: 30px;
`;

const Text = styled.span`
  color: #121e27;
  font-family: Muli;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

const CVText = styled.span`
  color: #2ccbbd;
  font-family: Muli;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

const Highlight = styled.span`
  color: #2c8f87;
  font-family: Muli;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

const QuestionMark = styled.span`
  color: #000;
  font-family: Muli;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function AboutMeContent() {
  return (
    <AboutMeContainer>
      <Title>I have always loved tech. </Title>
      <br />
      <Text>Looking for my</Text> <CVText>cv</CVText>
      <QuestionMark>?</QuestionMark>
      <p>
        Hello, I'm Valentine Kerubo, a <strong>passionate</strong> and{" "}
        <strong>dedicated full-stack software engineer</strong> with a
        background in accounting. Let me take you through my journey of
        transformation from a certified accountant to a{" "}
        <strong>tech enthusiast</strong>.
      </p>
      <p>
        <Subtitle>My Quick Story</Subtitle>
        <br />
        From 2020 to 2023, I was the numbers maestro at a solar company.
        Accounting started as a family tradition, but it became my love affair.
        However, I always had a burning passion for technology. A year into my
        accounting career, I discovered my love for <i>cooking</i>, which
        inspired me to create a website dedicated to sharing my culinary
        adventures. Armed with my HTML and CSS skills, I delved into web
        development and brought my vision to life.
      </p>
      <p>
        In February 2023, I made a pivotal decision to pursue my passion for
        technology further. I enrolled at <Highlight>Moringa School</Highlight>,
        where I underwent an intensive training program to become a certified
        full-stack software engineer. Since then, I have immersed myself in
        coding projects, continuously expanding my skill set and knowledge.
        Learning and creating have become integral parts of my journey, and I am
        eager to keep pushing boundaries in the world of software engineering.
      </p>
      <p>
        <Subtitle>As a Developer</Subtitle>
        <br />
        As a developer, I pay close{" "}
        <strong>attention to my code’s readability and organization</strong>. I
        meticulously comment and structure my code, ensuring that it is clean,
        consistent, and maintainable.{" "}
        <Highlight>
          <i>"Always ensure your code is DRY"</i>
        </Highlight>{" "}
        is one piece of advice from my esteemed technical mentor,{" "}
        <i>Nelson Muriithi</i>, that has stuck with me. I take it to heart,
        striving to write efficient code that avoids unnecessary repetition.
      </p>
      <p>
        I have a strong foundation in various programming languages and
        frameworks, including <strong>JavaScript</strong>,{" "}
        <strong>React js</strong>, and <strong>Ruby on Rails</strong>. This
        versatility allows me to adapt to different project requirements and
        challenges. Throughout my journey, I have worked on numerous projects,
        each presenting an opportunity for growth and the application of best
        coding practices.
      </p>
      <p>
        <Subtitle>As a Person</Subtitle>
        <br />
        If I were to describe myself as an animal, I would undoubtedly be an
        Octopus. Just like this remarkable creature, I am{" "}
        <strong>resourceful</strong>. I’ll take a problem, break it into smaller
        bits, and MacGyver myself a solution. Creativity has helped me sail
        around tough obstacles.
      </p>
      <p>
        <strong>I’m curious by nature and I love learning</strong>. I’ve amassed
        a wide range of skills and interests that, when put together, end up
        feeding my career in one way or another. I’m what they call a T-shaped
        individual.
      </p>
      <p>
        <Subtitle>As a Colleague</Subtitle>
        <br />
        Collaboration is at the heart of my work philosophy. I excel as a{" "}
        <strong>team player</strong>, fostering effective communication and
        cultivating a harmonious environment. I feel comfortable interacting
        with both the <strong>technically oriented</strong> people of the team
        as well as the <strong>artistically oriented</strong> ones.
      </p>
      <p>
        I will always go the extra mile to help my team, whether it involves
        sharing my expertise, providing assistance, or simply pulling an
        <strong> espresso shot</strong> and making some latte art for a
        colleague. <Highlight>I love to cook</Highlight>, so count on me to
        contribute to the next team potluck.
      </p>
      <p>
        <Text>I want to hear from you!</Text>
      </p>
    </AboutMeContainer>
  );
}

export default AboutMeContent;
