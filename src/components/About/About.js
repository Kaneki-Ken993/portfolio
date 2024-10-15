import React from "react";
import { stackList, toolsList } from "../../data/ProjectList";
import { Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
  Tools,
} from "./AboutElements"; 
import ScrollAnimation from "react-animate-on-scroll";

function About() {
    return (
      <ContactWrapper id="about">
        <div className="Container">
          <div className="SectionTitle">À Propos</div>
          <div className="BigCard">
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <Image src="/personnage.png" alt="A man character" />
            </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="animate__fadeInLeft">
                Salut, C'est <strong>Omar</strong>. Actuellement en formation pour devenir
                Développeur web á la
                <strong> Web@Cadémie By Epitech Marseille</strong>, je suis à la
                recherch d'un contrat d'alternance de 14 mois à partir de maintenant,
                je suis un jeune étudiant souhaitant se
                spécialisant dans le développement web. J'oriente mes études
                dans ce domaine, guidé par mon désir d'apprendre et ma
                curiosité. En tant que passionné, j'aime participer activement
                aux activités d'une entreprise, mais aussi créer des projets
                personnels, dans le but d'augmenter en compétences.
              </ScrollAnimation>
              <br />
              <br />
              <br />
              <br />
              <ScrollAnimation animateIn="animate__fadeInLeft">
                Le développement web est apparu comme une évidence lors de mes
                formations. Créer des applications web toujours plus durables,
                soucieuses de l'experience utilisateur et de plus en plus
                performantes, est un enjeu actuel très important et d'avenir. Le
                web change notre quotidien, il y prend une place de plus en plus
                importante. Je veux prendre part à ce changement.
              </ScrollAnimation>
              <br />
              <br />
              <ScrollAnimation animateIn="animate__fadeInLeft">
                Si vous souhaitez en apprendre plus sur moi, ou me contacter,
                n'hésitez plus.
                <br />
                <br />
                <br /> 
                <div className="tagline2">
                  <strong>
                    Technologies:
                  </strong>
                </div>
              </ScrollAnimation>
              <Technologies>
                {stackList.map((list, index) => (
                  <ScrollAnimation animateIn="animate__fadeInLeft" key={index}>
                    <Tech key={index} className="tech">
                      <TechImg src={list.img} alt={list.name} />
                      <TechName>{list.name}</TechName>
                    </Tech>
                  </ScrollAnimation>
                ))}
              </Technologies>
              <ScrollAnimation animateIn="animate__fadeInLeft">
                <div className="tagline2">
                  <strong>Outils:</strong>
                </div>
              </ScrollAnimation>
              <Tools>
                {toolsList.map((list, index) => (
                  <ScrollAnimation animateIn="animate__fadeInLeft" key={index}>
                    <Tech key={index} className="tech">
                      <TechImg src={list.img} alt={list.name} />
                      <TechName>{list.name}</TechName>
                    </Tech>
                  </ScrollAnimation>
                ))}
              </Tools>
            </div>
          </div>
        </div>
      </ContactWrapper>
    );
}

export default About;
