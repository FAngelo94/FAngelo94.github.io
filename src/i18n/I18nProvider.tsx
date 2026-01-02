import React from "react";
import { en } from "./en";
import { it } from "./it";
import { Translations } from "./types";

const locales: Record<string, Translations> = {
  en,
  it,
};

interface I18nContextValue {
  locale: keyof typeof locales;
  t: Translations;
  setLocale: (locale: keyof typeof locales) => void;
}

const I18nContext = React.createContext<I18nContextValue>({
  locale: "en",
  t: en,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLocale: () => {},
});

const getInitialLocale = (): keyof typeof locales => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("locale") as keyof typeof locales | null;
  if (stored && locales[stored]) return stored;
  const nav = navigator.language?.toLowerCase();
  if (nav?.startsWith("it")) return "it";
  return "en";
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = React.useState<keyof typeof locales>(getInitialLocale);

  const setLocale = (loc: keyof typeof locales) => {
    setLocaleState(loc);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", loc);
    }
  };

  const value = React.useMemo(() => ({
    locale,
    t: locales[locale] || en,
    setLocale,
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => React.useContext(I18nContext);
