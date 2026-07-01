"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "@/translations/index";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt");

  const toggle = useCallback(() => {
    setLang((l) => (l === "pt" ? "en" : "pt"));
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
