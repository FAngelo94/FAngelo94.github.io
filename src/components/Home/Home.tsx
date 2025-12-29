import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll";
import softwareEngineer from "../../assets/software-engineer.png";
import { hero, home } from "../../data"

export function Home() {

  return (
    <Container id="home">
      <div className="home-title">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>
            {home.title[0]} <span className="highlight">{home.title[1]}</span> {home.title[2]}
          </h1>
        </ScrollAnimation>
      </div>

      <div className="home-body">
        <div className="home-text">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3>{home.subtitle}</h3>
          </ScrollAnimation>

          <div className="bullet-list">
            {home.paragraphs.map((p, index) => (
              <ScrollAnimation
                key={index}
                animateIn="fadeInLeft"
                delay={(0.4 + index / 5) * 1000}
              >
                <p>{p}</p>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={(0.7) * 1000}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <p className="center highlight">
              {home.footerText}
            </p>
          </ScrollAnimation>

        </div>
        <div className="home-image">
          <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
            <img src={softwareEngineer} alt="Ilustração" />
          </ScrollAnimation>
        </div>
      </div>

      
    </Container>
  )
}
