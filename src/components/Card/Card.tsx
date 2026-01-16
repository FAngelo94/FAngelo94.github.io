import { Container } from "./styles";
import { useEffect } from "react";
import close from "../../assets/close.png";

interface ICard {
  title: string;
  type?: string;
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

export function Card({ title, type, text, skills, handleClose }: ICard) {

  // Close also when click outside
  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  // Lock background scroll while the card is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // compensate for scrollbar to avoid layout shift
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  return (
    <Container>
      <div className="project">
        <header>
          <h1>
            {title}
            {type && type.toLowerCase() !== "custom" && <small>/ {String(type).toLowerCase()}</small>}
          </h1>
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
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <footer></footer>
      </div>
    </Container>
  );
}
