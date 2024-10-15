import React, { useState} from "react";
import Dropdown  from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
    GuyContainer,
    GuyWrapper,
    GuyLeft,
    GuyRight,
    Image,
    ScrollDown,
    ScrollLink,
} from "./GuyElements";
import  { TypeAnimation } from 'react-type-animation';
import ScrollAnimation  from "react-animate-on-scroll";

function Guy() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const toggle = () => {setIsOpen(!isOpen)};


    return (
      <main>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <GuyContainer>
          <GuyWrapper>
            <GuyLeft>
              <ScrollAnimation animateIn="animate__fadeIn">
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    "Bonjour, je suis Omar",
                    () => setShowSubtitle(true),
                  ]}
                  speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                  wrapper="h1"
                  repeat={0}
                />
                {showSubtitle && (
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      500,
                      "Un développeur web",
                      1000,
                      "Un problem solver",
                      1000,
                      "Un penseur innovant",
                      1000,
                      "Un utilisateur Linux",
                      1000,
                      "Étudiant en développement web",
                      1000,
                      "Faites défiler la page pour voir mes projets",
                      300,
                      () => setShowScrollDown(true),
                      1000,
                      "Vous êtes euh... toujours là ?",
                      500,
                    ]}
                    speed={50}
                    deletionSpeed={65}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                )}
              </ScrollAnimation>
            </GuyLeft>
            <GuyRight>
              <ScrollAnimation animateIn="animate__fadeIn">
                <Image src="/personnage.png" alt="A man" />
              </ScrollAnimation>
            </GuyRight>
          </GuyWrapper>
          {showScrollDown && (
            <ScrollAnimation animateIn="animate__flipInX" offset={0}>
              <ScrollDown to="projects" id="scrollDown">
                <ScrollLink>
                  Scroll down
                  <img src="/scroll-down.svg" alt="scroll down" />
                </ScrollLink>
              </ScrollDown>
            </ScrollAnimation>
          )}
        </GuyContainer>
      </main>
    );
}



export default Guy;