import React from "react";
import { TileCard as TileCardContainer } from "./styles";
import { trackEvent } from "../../utils/analytics";

interface TileCardProps {
  analyticsLabel: string; // label for analytics tracking
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

export function TileCard({analyticsLabel, headerIconSrc, headerRight, title, body, footerList, onClickBody, ctaLabel, onCtaClick, secondaryCtaLabel, onSecondaryCtaClick }: TileCardProps) {
  const handleBodyClick = () => {
    console.log('TileCard body clicked', analyticsLabel);
    try { 
      if (onClickBody) onClickBody();
    } finally {
      void trackEvent("card_body_click", { card: analyticsLabel });
    }
  };

  const handleCta = (cta?: string, cb?: (() => void) | undefined) => {
    try {
      if (cb) cb();
    } finally {
      void trackEvent("card_cta_click", { card: analyticsLabel, cta: cta || null });
    }
  };

  return (
    <TileCardContainer className="tile-card">
      <header>
        <img src={headerIconSrc} alt="Card icon" />
        <div className="project-links">
          {headerRight}
        </div>
      </header>
      <div className="body" onClick={handleBodyClick}>
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
              <button className="card-cta" type="button" onClick={() => handleCta(ctaLabel, onCtaClick)}>
                {ctaLabel}
              </button>
            )}
            {secondaryCtaLabel && (
              <button className="card-cta secondary" type="button" onClick={() => handleCta(secondaryCtaLabel, onSecondaryCtaClick)}>
                {secondaryCtaLabel}
              </button>
            )}
          </div>
        )}
      </footer>
    </TileCardContainer>
  );
}
