import React, { useEffect, useState } from "react";
import { initAnalytics } from "../../firebase";
import {
  Banner,
  Content,
  Text,
  Title,
  Description,
  Actions,
  PrimaryBtn,
  SecondaryBtn,
} from "./styles";

const STORAGE_KEY = "analytics_consent"; // values: 'granted' | 'denied'

export default function CookieConsent(): JSX.Element | null {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setConsent(stored);
    if (stored === "granted") {
      initAnalytics();
    }
  }, []);

  const accept = async () => {
    window.localStorage.setItem(STORAGE_KEY, "granted");
    setConsent("granted");
    await initAnalytics();
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, "denied");
    setConsent("denied");
  };

  if (consent === "granted" || consent === "denied") return null;

  return (
    <Banner role="dialog" aria-live="polite">
      <Content>
        <Text>
          <Title>Questo sito usa i cookie</Title>
          <Description>Questo sito utilizza cookie di analisi di terze parti (Google Analytics) per raccogliere informazioni statistiche sull’utilizzo del sito. Puoi accettare o rifiutare l’uso di questi cookie.</Description>
        </Text>
        <Actions>
          <PrimaryBtn onClick={decline}>Rifiuta</PrimaryBtn>
          <PrimaryBtn onClick={accept}>Accetta</PrimaryBtn>
        </Actions>
      </Content>
    </Banner>
  );
}

// styles are imported from ./styles.ts
