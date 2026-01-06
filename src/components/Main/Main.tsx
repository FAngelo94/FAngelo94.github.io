import Particles from "react-tsparticles";
import { Container } from "./styles";
import { WhoIAm } from "../WhoIAm/WhoIAm";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import { Career } from "../Career/Career";

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
import djangoIcon from "../../assets/django.svg";
import copilotIcon from "../../assets/copilot.svg";
import viteIcon from "../../assets/vite.svg";
import problemSolvingIcon from "../../assets/problem-solving.svg";
import openaiIcon from "../../assets/openai.svg";
import { Home } from "../Home/Home";
import { Prices } from "../Prices/Prices";

export function Main() {
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
    { icon: djangoIcon, name: "Django" },
    { icon: copilotIcon, name: "Copilot" },
    { icon: viteIcon, name: "Vite" },
    { icon: openaiIcon, name: "OpenAI" },

    { icon: problemSolvingIcon, name: "Problem Solving" },
  ];

  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: icons.map((i) => ({
                src: i.icon,
                width: 20,
                height: 20,
              })),
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Home></Home>
      <Prices></Prices>
      <Contact></Contact>
      <WhoIAm></WhoIAm>
      <Career></Career>
      <Portfolio></Portfolio>
      
    </Container>
  );
}
