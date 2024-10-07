import React from "react";
import { Container, Accordion } from "./styles";
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
    icon: string;
  }>;
  longtext: Array<{
    type: string;
    value: string;
  }>;
}

export function Portfolio() {
  const [showCard, setShowCard] = React.useState<IProject>();
  const [showOlderProjects, setShowOlderProjects] = React.useState(false);
  let emptyProject: IProject;

  const firstNineProjects = projects.projects.slice(0, 9);
  const olderProjects = projects.projects.slice(9);

  return (
    <Container id="portfolio">
      <h2>{projects.title}</h2>
      <div className="subtitle">{projects.subtitle}</div>
      <Projects projects={firstNineProjects} setShowCard={setShowCard} />
      <Accordion>
        <button onClick={() => setShowOlderProjects(!showOlderProjects)}>
          {showOlderProjects ? "Hide Older Projects" : "Show Older Projects"}
        </button>
      </Accordion>
      {showOlderProjects && (
        <Projects projects={olderProjects} setShowCard={setShowCard} />
      )}
      <div className="footer-text">{projects.footerText}</div>
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

const Projects = ({ projects, setShowCard }: { projects: IProject[], setShowCard: (project: IProject) => void }) => {
  return (
    <div className="projects">
      {projects.map((p, index) => (
        <ScrollAnimation animateIn="flipInX" key={index}>
          <div className="project">
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
              <h3 onClick={() => setShowCard(p)}>{p.title}</h3>
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
  )
}
