"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function StatsBar() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const statsEn = [
    {
      value: "4,500+",
      label: "Devices Restored",
      detail: "Trusted across Port Augusta & SA",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      value: "30 Mins",
      label: "Average Screen Turnaround",
      detail: "Express same-day in-house repairs",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: "100% Free",
      label: "Diagnostics & Inspection",
      detail: "No-obligation check · No fix, no fee",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: "90 Days",
      label: "Comprehensive Warranty",
      detail: "Quality Grade-A parts & workmanship",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      value: "5.0 ★",
      label: "Customer Rating",
      detail: "100% positive reviews on Facebook",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
    },
  ];

  const statsHi = [
    {
      value: "4,500+",
      label: "डिवाइस ठीक किए गए",
      detail: "पोर्ट ऑगस्टा व SA में विश्वसनीय सेवा",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      value: "30 मिनट",
      label: "औसत स्क्रीन रिपेयर समय",
      detail: "एक्सप्रेस सेम-डे इन-हाउस रिपेयर",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: "100% फ्री",
      label: "नि:शुल्क जांच व डायग्नोस्टिक्स",
      detail: "कोई शुल्क नहीं · नो फिक्स, नो फीस",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: "90 दिन",
      label: "व्यापक वारंटी गारंटी",
      detail: "क्वालिटी ग्रेड-ए पार्ट्स व कारीगरी",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      value: "5.0 ★",
      label: "ग्राहक संतुष्टि रेटिंग",
      detail: "Facebook पर 100% पॉजिटिव रिव्यू",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
    },
  ];

  const stats = isHi ? statsHi : statsEn;

  return (
    <section className="bg-slate-50 dark:bg-carbon border-y border-slate-200 dark:border-line-dark relative z-20 shadow-xs dark:shadow-2xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-3.5 rounded-xl border border-slate-200/90 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-slate-100/70 dark:hover:bg-white/[0.04] hover:border-brand/40 shadow-xs dark:shadow-none transition-all ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-brand/10 border border-brand/20">
                  {s.icon}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {s.value}
                </span>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm leading-snug">
                  {s.label}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 leading-tight">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
