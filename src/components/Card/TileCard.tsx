import React from "react";

interface TileCardProps {
  headerIconSrc: string;
  headerRight?: React.ReactNode; // icons or company link
  title: string;
  body: React.ReactNode; // description/content
  footerList: string[]; // list items shown in footer
  onClickBody?: () => void; // optional click handler on body
}

export function TileCard({ headerIconSrc, headerRight, title, body, footerList, onClickBody }: TileCardProps) {
  return (
    <div className="project">
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
      </footer>
    </div>
  );
}
