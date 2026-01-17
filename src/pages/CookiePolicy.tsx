import React from "react";
import { Container } from "./style";
import { useI18n } from "../i18n/I18nProvider";

function renderParagraph(p: string, key: string) {
  const lines = p.split("\n");
  const urlEmailRegex = /(https?:\/\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

  return (
    <p key={key}>
      {lines.map((line, li) => (
        <React.Fragment key={li}>
          {line
            .split(urlEmailRegex)
            .filter(Boolean)
            .map((part, idx) => {
              if (/^https?:\/\//.test(part)) {
                return (
                  <a key={idx} href={part} target="_blank" rel="noreferrer">
                    {part}
                  </a>
                );
              }
              if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(part)) {
                return (
                  <a key={idx} href={`mailto:${part}`}>
                    {part}
                  </a>
                );
              }
              return <span key={idx}>{part}</span>;
            })}
          {li < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
}

export default function CookiePolicy(): JSX.Element {
  const { t } = useI18n();
  const page = t.cookie;

  if (!page) {
    return (
      <Container>
        <h1>Cookie Policy</h1>
        <p>Translation missing.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{page.title}</h1>
      <small className="updated">{page.updatedLabel}: <strong>15/01/2026</strong></small>

      {page.sections.map((s, idx) => (
        <section key={idx}>
          <h2>{s.heading}</h2>
          {s.paragraphs?.map((p, pi) => renderParagraph(p, `p-${idx}-${pi}`))}
          {s.list && (
            <ul>
              {s.list.map((li, lidx) => (
                <li key={lidx}>{li}</li>
              ))}
            </ul>
          )}
          {idx < page.sections.length - 1 && <hr />}
        </section>
      ))}
    </Container>
  );
}
