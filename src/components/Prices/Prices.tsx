import React from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { prices, contacts } from "../../data";
import { Card } from "../Card/Card";
import { Carousel } from "../Carousel/Carousel";
import { TileCard } from "../Card/TileCard";
import { openCalendarPopup } from "../../utils/calendar";

interface IPriceProps {
  title: string;
  description: string;
  included?: string[];
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
      {showCard && (
        <Card
          title={showCard.title}
          type={showCard.type}
          text={showCard.longtext}
          skills={[]}
          handleClose={() => setShowCard(undefined)}
        />
      )}

    </Container>
  );
}

const Projects = ({ prices: plans, setShowCard }: { prices: IPriceProps[], setShowCard: (project: IPriceProps) => void }) => {
  return (
    <Carousel>
      {plans.map((p, index) => (
        <ScrollAnimation animateIn="flipInX" key={index}>
          <TileCard
            headerIconSrc={p.icon}
            headerRight={<span className="type">
              {p.type}
            </span>}
            title={
              <>
                {p.title}
                {p.type && p.type.toLowerCase() !== "custom" && <small>/{String(p.type).toLowerCase()}</small>}
              </>
            }
            body={
              p.included && p.included.length > 0 ? (
                <ul className="bullet-list">
                  {p.included.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              ) : (
                <></>
              )
            }
            footerList={p.footer ? [p.footer] : []}
            ctaLabel={prices.ctaBookPlan}
            onCtaClick={() => openCalendarPopup(contacts.calendarLink)}
            secondaryCtaLabel={"More details"}
            onSecondaryCtaClick={() => setShowCard(p)}
            onClickBody={() => setShowCard(p)}
          />
        </ScrollAnimation>
      ))}
    </Carousel>
  )
}
