import React from "react";
import { Container } from "./styles";
import suitcase from "../../assets/suitcase.png";
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from "../../data";
import { Card } from "../Card/Card";
import { Carousel } from "../Carousel/Carousel";
import { TileCard } from "../Card/TileCard";

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
// Carousel shows all projects; previous visible count no longer used.

export function Portfolio() {
  const [showCard, setShowCard] = React.useState<IProject>();
  
  React.useEffect(() => {
    const applyUniformHeights = () => {
      const cards = document.querySelectorAll<HTMLDivElement>('#portfolio .project');
      let maxH = 0;
      cards.forEach(c => { maxH = Math.max(maxH, c.offsetHeight); });
      cards.forEach(c => { c.style.minHeight = `${maxH}px`; });
    };
    requestAnimationFrame(applyUniformHeights);
    window.addEventListener('resize', applyUniformHeights);
    return () => window.removeEventListener('resize', applyUniformHeights);
  }, []);

  return (
    <Container id="portfolio">
      <h2>{projects.title}</h2>
      <div className="subtitle">{projects.subtitle}</div>
      <Projects projects={projects.projects} setShowCard={setShowCard} />
      <div className="footer-text">{projects.footerText}</div>
      {showCard && (
        <Card
          title={showCard.title}
          text={showCard.longtext}
          skills={showCard.allSkills}
          handleClose={() => setShowCard(undefined)}
        />
      )}

    </Container>
  );
}

const Projects = ({ projects, setShowCard }: { projects: IProject[], setShowCard: (project: IProject) => void }) => {
  return (
    <Carousel>
      {projects.map((p, index) => (
        <ScrollAnimation animateIn="flipInX" key={index}>
          <TileCard
            headerIconSrc={suitcase}
            headerRight={p.links ? (
              <>
                {p.links.map((l, index2) => (
                  <a href={l.url} key={index2} target="_blank" rel="noreferrer">
                    <img src={l.icon} alt={l.label} />
                  </a>
                ))}
              </>
            ) : undefined}
            title={p.title}
            body={<p>{p.description}</p>}
            footerList={p.mainSkills}
            onClickBody={() => setShowCard(p)}
          />
        </ScrollAnimation>
      ))}
    </Carousel>
  )
}
