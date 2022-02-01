import React from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import bachelor from "../../assets/bachelor.png";
import suitcase from "../../assets/suitcase.png";
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from "../../data";
import { Card } from "../Card/Card";

interface IProject {
  title: string;
  description: string;
  mainSkills: string[];
  allSkills: string[];
  links: Array<{
    label: string;
    url: string;
    icon: object;
  }>;
  longtext: Array<{
    type: string;
    value: string;
  }>;
}

export function Portfolio() {
  const [showCard, setShowCard] = React.useState<IProject>();
  let emptyProject: IProject;

  return (
    <Container id="portfolio">
      <h2>{projects.title}</h2>
      <div className="subtitle">{projects.subtitle}</div>
      <div className="projects">
        {projects.projects.map((p, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div className="project" onClick={() => setShowCard(p)}>
              <header>
                <img src={suitcase} alt="Suitcase" />
                <div className="project-links">
                  {p.links &&
                    p.links.map((l, index2) => (
                      <a href={l.url} key={index2} target="_blank">
                        <img src={l.icon} alt={l.label} />
                      </a>
                    ))}
                </div>
              </header>
              <div className="body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {p.mainSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {showCard && (
        <Card
          title={showCard.title}
          text={showCard.longtext}
          skills={showCard.allSkills}
          handleClose={() => setShowCard(emptyProject)}
        />
      )}
    </Container>
  );
}
