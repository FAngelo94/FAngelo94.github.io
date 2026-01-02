import { Container } from "./styles"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import androidIcon from "../../assets/android.svg";
import dockerIcon from "../../assets/docker.svg";
import djangoIcon from "../../assets/django.svg";
import copilotIcon from "../../assets/copilot.svg";
import mysqlIcon from "../../assets/mysql.svg";
import pythonIcon from "../../assets/python.svg";
import windowsIcon from "../../assets/windows-10.svg";
import vscodeIcon from "../../assets/vscode.svg";
import ubuntuIcon from "../../assets/ubuntu.png";
import viteIcon from "../../assets/vite.svg";
import problemSolvingIcon from "../../assets/problem-solving.svg";
import ScrollAnimation from "react-animate-on-scroll";
import openAiIcon from "../../assets/openai.svg";
import profileImage from "../../assets/profile-image.jpg";
import { useI18n } from "../../i18n/I18nProvider"

export function WhoIAm() {
  const { t } = useI18n();
  const icons = [
    { icon: problemSolvingIcon, name: "ProblemSolving" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: pythonIcon, name: "Python" },
    { icon: reactIcon, name: "React" },
    { icon: openAiIcon, name: "OpenAI" },
    { icon: djangoIcon, name: "Django" },
    { icon: vscodeIcon, name: "VS Code" },
    { icon: typescriptIcon, name: "TypeScript" },
    { icon: cssIcon, name: "CSS" },
    { icon: htmlIcon, name: "HTML" },
    { icon: mysqlIcon, name: "SQL" },
    { icon: dockerIcon, name: "Docker" },
    { icon: androidIcon, name: "Android" },
    { icon: windowsIcon, name: "Windows" },
    { icon: ubuntuIcon, name: "Ubuntu" },
    { icon: copilotIcon, name: "Copilot" },
    { icon: viteIcon, name: "Vite" },
  ];
  return (
    <Container id="whoiam">
      <div className="hero-title">
        <ScrollAnimation animateIn="fadeInUp">
          <p>{t.hero.hello}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>{t.hero.name}</h1>
        </ScrollAnimation>
      </div>

      <div className="hero-body">
        <div className="hero-text">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3>{t.hero.title}</h3>
          </ScrollAnimation>

          {t.whoIam.paragraphs.map((p, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeInLeft"
              delay={(0.4 + index / 5) * 1000}
              style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            >
              <p>{p}</p>
            </ScrollAnimation>
          ))}

          <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
            <h3>{t.hero.mainSkills}</h3>
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

        <div className="hero-image">
          <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
            <img src={profileImage} alt="Ilustração" />
          </ScrollAnimation>
        </div>

      </div>

    </Container>
  )
}
