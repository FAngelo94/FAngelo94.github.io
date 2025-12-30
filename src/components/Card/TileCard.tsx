import React from "react";
import { TileCard as TileCardContainer } from "./styles";

interface TileCardProps {
  headerIconSrc: string;
  headerRight?: React.ReactNode; // icons or company link
  title: React.ReactNode; // allow rich title content
  body: React.ReactNode; // description/content
  footerList: string[]; // list items shown in footer
  onClickBody?: () => void; // optional click handler on body
  ctaLabel?: string; // optional CTA button label
  onCtaClick?: () => void; // optional CTA click handler
  secondaryCtaLabel?: string; // optional secondary CTA
  onSecondaryCtaClick?: () => void; // handler for secondary CTA
}

export function TileCard({ headerIconSrc, headerRight, title, body, footerList, onClickBody, ctaLabel, onCtaClick, secondaryCtaLabel, onSecondaryCtaClick }: TileCardProps) {
  return (
    <TileCardContainer className="tile-card">
      <header>
        <img src={headerIconSrc} alt="Card icon" />
        <div className="project-links">
          {headerRight}
        </div>
      </header>
      <div className="body" onClick={onClickBody}>
        <h3>{title}</h3>
        {body}
      </div>
      <footer>
        <ul className="tech-list">
          {footerList.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
        {(ctaLabel || secondaryCtaLabel) && (
          <div className="card-actions">
            {ctaLabel && (
              <button className="card-cta" type="button" onClick={onCtaClick}>
                {ctaLabel}
              </button>
            )}
            {secondaryCtaLabel && (
              <button className="card-cta secondary" type="button" onClick={onSecondaryCtaClick}>
                {secondaryCtaLabel}
              </button>
            )}
          </div>
        )}
      </footer>
    </TileCardContainer>
  );
}
