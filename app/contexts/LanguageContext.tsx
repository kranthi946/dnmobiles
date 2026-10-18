"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../../messages/en.json";
import hi from "../../messages/hi.json";

type Language = "en" | "hi";

const dictionaries = { en, hi } as const;

type Dictionary = (typeof en) & (typeof hi);

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Dictionary;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language");
      if (stored === "en" || stored === "hi") return stored;
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const translations = dictionaries[language];

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: string, params?: Record<string, string | number>) => {
      const val = key
        .split(".")
        .reduce<unknown>((obj, part) => (obj && typeof obj === "object" ? (obj as Record<string, unknown>)[part] : undefined), translations);

      if (typeof val === "string") {
        if (!params) return val;
        return val.replace(/\{(\w+)\}/g, (match, name) =>
          params[name] != null ? String(params[name]) : match
        );
      }
      return key;
    };

    return {
      language,
      setLanguage,
      translations,
      t,
    };
  }, [language, translations]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
