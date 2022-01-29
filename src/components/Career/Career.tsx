import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import bachelor from "../../assets/bachelor.png";
import suitcase from "../../assets/suitcase.png";
import ScrollAnimation from "react-animate-on-scroll";
import { career } from "../../data";

export function Career() {
  return (
    <Container id="career">
      <h2>{career.title}</h2>
      <div className="projects">
        {career.jobs.map((job, index) => (
          <ScrollAnimation 
          key={index}
          animateIn="flipInX">
            <div className="project">
              <header>
                <img src={suitcase} alt="Suitcase" />
                <div className="project-links">
                  <a href={job.link}>{job.company}</a>
                </div>
              </header>
              <div className="body">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>{job.whereAndWhen}</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
        {career.schools.map((school, index) => (
          <ScrollAnimation 
          key={index}
          animateIn="flipInX">
            <div className="project">
              <header>
                <img src={bachelor} alt="Bachelor" />
                <div className="project-links"></div>
              </header>
              <div className="body">
                <h3>{school.title}</h3>
                <p>{school.where}</p>
                {school.description && (
                  <p>
                    {school.description}
                    {school.links &&
                      school.links.map((link, index) => (
                        <a href={link.url} target="_blank" rel="noreferrer"
                        key={index}>
                          {link.title}
                        </a>
                      ))}
                  </p>
                )}
              </div>
              <footer>
                <ul className="tech-list">
                  <li>{school.when}</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
