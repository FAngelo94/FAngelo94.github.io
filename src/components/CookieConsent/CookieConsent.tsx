import React, { useEffect, useState } from "react";
import { initAnalytics } from "../../firebase";
import { useI18n } from "../../i18n/I18nProvider";
import {
  Banner,
  Content,
  Text,
  Title,
  Description,
  Actions,
  PrimaryBtn,
} from "./styles";

const STORAGE_KEY = "analytics_consent"; // values: 'granted' | 'denied'

export default function CookieConsent(): JSX.Element | null {
  const { t } = useI18n();
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
          <Title>{t.cookieConsent?.title}</Title>
          <Description>{t.cookieConsent?.description}</Description>
        </Text>
        <Actions>
          <PrimaryBtn onClick={decline}>{t.cookieConsent?.decline}</PrimaryBtn>
          <PrimaryBtn onClick={accept}>{t.cookieConsent?.accept}</PrimaryBtn>
        </Actions>
      </Content>
    </Banner>
  );
}

// styles are imported from ./styles.ts
