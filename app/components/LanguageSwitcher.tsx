"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 h-9 border border-slate-200 dark:border-white/10 rounded-xl p-0.5 shadow-sm shrink-0 bg-slate-100 dark:bg-white/[0.06]">
      <button
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={`text-xs font-bold px-2.5 h-full rounded-lg transition ${
          language === "en"
            ? "bg-brand text-white shadow-sm"
            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("hi")}
        aria-label="Switch to Hindi"
        className={`text-xs font-bold px-2.5 h-full rounded-lg transition ${
          language === "hi"
            ? "bg-brand text-white shadow-sm"
            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        हिं
      </button>
    </div>
  );
}
