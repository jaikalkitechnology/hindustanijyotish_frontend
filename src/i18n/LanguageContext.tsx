import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)["en"];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "hj-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "hi") {
      setLangState(stored);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
