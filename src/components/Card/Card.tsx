import { Container } from "./styles";
import { useEffect } from "react";
import close from "../../assets/close.png";

interface ICard {
  title: string;
  text: Array<{
    type: string;
    value: string;
  }>;
  skills: string[];
  handleClose: Function;
}

const traslateText = (text: string) => {
  const arrayText = text.split("*");
  return arrayText.map((t: string, index: number) => {
    if (index % 2 === 0) {
      return t;
    } else {
      return (
        <span key={index}>
          <strong>{t}</strong>
        </span>
      );
    }
  });
};

export function Card({ title, text, skills, handleClose }: ICard) {

  // Close also when click outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <div className="project">
        <header>
          <h1>{title}</h1>
          <img src={close} alt="Suitcase" onClick={() => handleClose()} />
        </header>
        <div className="body">
          {text.map((p, index) =>
            p.type === "subtitle" ? (
              <h2 key={index}>{p.value}</h2>
            ) : (
              <p key={index}>{traslateText(p.value)}</p>
            )
          )}
          <ul className="tech-list">
            {skills.map((skill, index) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>

        <footer></footer>
      </div>
    </Container>
  );
}
