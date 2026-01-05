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
  try {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    if (lang === "it") return "it";
  } catch (e) {
    // ignore parsing errors and fallback to EN
  }
  return "en";
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = React.useState<keyof typeof locales>(getInitialLocale);

  const setLocale = (loc: keyof typeof locales) => {
    setLocaleState(loc);
    // update URL parameter lang=it when switching to Italian, remove otherwise
    if (typeof window !== "undefined") {
      try {
        const url = new URL(window.location.href);
        const params = url.searchParams;
        if (loc === "it") {
          params.set("lang", "it");
        } else {
          params.delete("lang");
        }
        const newUrl = `${url.origin}${url.pathname}${params.toString() ? `?${params.toString()}` : ""}${url.hash}`;
        window.history.replaceState({}, "", newUrl);
      } catch (e) {
        // noop on URL errors
      }
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
