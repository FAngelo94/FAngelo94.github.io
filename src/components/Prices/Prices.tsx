import React from "react";
import { Container } from "./styles";
import project from "../../assets/project.png";
import ScrollAnimation from "react-animate-on-scroll";
import { prices } from "../../data";
import { Card } from "../Card/Card";
import { Carousel } from "../Carousel/Carousel";
import { TileCard } from "../Card/TileCard";

interface IPriceProps {
  title: string;
  description: string;
  footer: string;
  type: string;
  icon: string;
  longtext: Array<{
    type: string;
    value: string;
  }>;
}
// Carousel shows all projects; previous visible count no longer used.

export function Prices() {
  const [showCard, setShowCard] = React.useState<IPriceProps>();


  return (
    <Container id="prices">
      <h2>{prices.title}</h2>
      <div className="subtitle">{prices.subtitle}</div>
      <Projects prices={prices.plans} setShowCard={setShowCard} />
      <div className="footer-text">{prices.footerText}</div>
      {showCard && (
        <Card
          title={showCard.title}
          text={showCard.longtext}
          skills={[showCard.footer]}
          handleClose={() => setShowCard(undefined)}
        />
      )}

    </Container>
  );
}

const Projects = ({ prices, setShowCard }: { prices: IPriceProps[], setShowCard: (project: IPriceProps) => void }) => {
  return (
    <Carousel>
      {prices.map((p, index) => (
        <ScrollAnimation animateIn="flipInX" key={index}>
          <TileCard
            headerIconSrc={p.icon}
            headerRight={<span className="type">
              {p.type}
            </span>}
            title={p.title}
            body={<p>{p.description}</p>}
            footerList={p.footer ? [p.footer] : []}
            onClickBody={() => setShowCard(p)}
          />
        </ScrollAnimation>
      ))}
    </Carousel>
  )
}
