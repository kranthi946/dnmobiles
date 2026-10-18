"use client";

import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle({ showLabel = true }: { showLabel?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Night Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Night Mode"}
      className={`inline-flex items-center justify-center gap-1.5 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-white hover:bg-slate-200/80 dark:hover:bg-white/10 transition-all text-xs font-bold shadow-sm ${
        showLabel ? "px-3" : "w-9"
      }`}
    >
      {isDark ? (
        <>
          <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {showLabel && <span className="text-[11px] font-extrabold tracking-wide">Light Mode</span>}
        </>
      ) : (
        <>
          <svg className="w-4 h-4 text-brand fill-brand" viewBox="0 0 24 24">
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          {showLabel && <span className="text-[11px] font-extrabold tracking-wide">Night Mode</span>}
        </>
      )}
    </button>
  );
}
