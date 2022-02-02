import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import androidIcon from "../../assets/android.svg";
import bootstrapIcon from "../../assets/bootstrap.svg";
import dockerIcon from "../../assets/docker.svg";
import flaskIcon from "../../assets/flask.svg";
import mysqlIcon from "../../assets/mysql.svg";
import pythonIcon from "../../assets/python.svg";
import windowsIcon from "../../assets/windows-10.svg";
import vscodeIcon from "../../assets/vscode.svg";
import ubuntuIcon from "../../assets/ubuntu.png"; 
import ScrollAnimation from "react-animate-on-scroll";
import { about } from "../../data";

export function About() {
  const icons = [
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: nodeIcon, name: "Node.js" },
    { icon: typescriptIcon, name: "TypeScript" },
    { icon: cssIcon, name: "CSS" },
    { icon: htmlIcon, name: "HTML" },
    { icon: pythonIcon, name: "Python" },
    { icon: flaskIcon, name: "Flask" },
    { icon: mysqlIcon, name: "SQL" },
    { icon: dockerIcon, name: "Docker" },
    { icon: bootstrapIcon, name: "Bootstrap" },
    { icon: vscodeIcon, name: "VS Code" },
    { icon: androidIcon, name: "Android" },
    { icon: windowsIcon, name: "Windows" },
    { icon: ubuntuIcon, name: "Ubuntu" },
  ];
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>{about.title}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p></p>
        </ScrollAnimation>
        {about.paragraphs.map((p, index) => (
          <ScrollAnimation
            key={index}
            animateIn="fadeInLeft"
            delay={(0.4 + index / 5) * 1000}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <p>{p}</p>
          </ScrollAnimation>
        ))}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>{about.mainSkills}</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          {icons.map((icon, index) => (
            <div className="hability" key={index}>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={(0.1 + index / 10) * 1000}
              >
                <span>{icon.name}</span>
                <img src={icon.icon} alt={icon.name} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          
          <img src={profileImage} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
