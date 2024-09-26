import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";


const SocialContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 1;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.7rem;
    color: rgb(119, 119, 121);
    &:hover {
       color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 1000px) {
    margin-left: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }
    a {
      font-size: 2.5rem;
      color: #151418;
      &:hover {
        color: rgb(57, 134, 250);
      }
    }
    .item + item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;


function FixedSocialIcons() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="https://linkedin.com/in/omar-el-hadi-90011b2a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/Kaneki-Ken993?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixedSocialIcons;