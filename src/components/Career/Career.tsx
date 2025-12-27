import React from "react";
import { Container, Accordion } from "./styles";
import bachelor from "../../assets/bachelor.png";
import suitcase from "../../assets/suitcase.png";
import ScrollAnimation from "react-animate-on-scroll";
import { career } from "../../data";

interface ICareerItem {
  title: string;
  description?: string;
  type: "job" | "school";
  company?: string;
  link?: string;
  whereAndWhen?: string;
  where?: string;
  when?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
}

const VISIBLE_CAREER_ITEMS_COUNT = 3;

export function Career() {
  const [showOlderCareer, setShowOlderCareer] = React.useState(false);

  // Combine jobs and schools into a single array with type information
  const allCareerItems: ICareerItem[] = [
    ...career.jobs.map(job => ({ ...job, type: "job" as const })),
    ...career.schools.map(school => ({ ...school, type: "school" as const }))
  ];

  const firstSixItems = allCareerItems.slice(0, VISIBLE_CAREER_ITEMS_COUNT);
  const olderItems = allCareerItems.slice(VISIBLE_CAREER_ITEMS_COUNT);

  return (
    <Container id="career">
      <h2>{career.title}</h2>
      <CareerItems items={firstSixItems} />
      <Accordion>
        <button onClick={() => setShowOlderCareer(!showOlderCareer)}>
          {showOlderCareer ? "Hide Older Career Steps" : "Show Older Career Steps"}
        </button>
      </Accordion>
      {showOlderCareer && (
        <CareerItems items={olderItems} />
      )}
    </Container>
  );
}

const CareerItems = ({ items }: { items: ICareerItem[] }) => {
  return (
    <div className="projects">
      {items.map((item, index) => (
        <ScrollAnimation 
          key={index}
          animateIn="flipInX">
          <div className="project">
            <header>
              <img src={item.type === "job" ? suitcase : bachelor} alt={item.type === "job" ? "Suitcase" : "Bachelor"} />
              <div className="project-links">
                {item.type === "job" && item.link && item.company && (
                  <a href={item.link}>{item.company}</a>
                )}
              </div>
            </header>
            <div className="body">
              <h3>{item.title}</h3>
              {item.type === "job" ? (
                <p>{item.description}</p>
              ) : (
                <>
                  <p>{item.where}</p>
                  {item.description && (
                    <p>
                      {item.description}
                      {item.links &&
                        item.links.map((link, index) => (
                          <a href={link.url} target="_blank" rel="noreferrer"
                          key={index}>
                            {link.title}
                          </a>
                        ))}
                    </p>
                  )}
                </>
              )}
            </div>
            <footer>
              <ul className="tech-list">
                <li>{item.type === "job" ? item.whereAndWhen : item.when}</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
};
