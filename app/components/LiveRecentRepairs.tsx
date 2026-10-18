"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface RepairEvent {
  deviceEn: string;
  deviceHi: string;
  serviceEn: string;
  serviceHi: string;
  locationEn: string;
  locationHi: string;
  timeEn: string;
  timeHi: string;
  icon: string;
}

const REPAIRS: RepairEvent[] = [
  {
    deviceEn: "iPhone 14 Pro",
    deviceHi: "iPhone 14 Pro",
    serviceEn: "OLED Screen Replacement (120Hz TrueTone)",
    serviceHi: "OLED स्क्रीन रिप्लेसमेंट (120Hz ट्रू-टोन)",
    locationEn: "Port Augusta",
    locationHi: "पोर्ट ऑगस्टा",
    timeEn: "12 mins ago",
    timeHi: "12 मिनट पहले",
    icon: "📱",
  },
  {
    deviceEn: "Samsung Galaxy S23 Ultra",
    deviceHi: "Samsung Galaxy S23 Ultra",
    serviceEn: "Fast Battery Replacement + Free Clean",
    serviceHi: "फास्ट बैटरी रिप्लेसमेंट + फ्री क्लीन",
    locationEn: "Stirling North",
    locationHi: "स्टर्लिंग नॉर्थ",
    timeEn: "28 mins ago",
    timeHi: "28 मिनट पहले",
    icon: "⚡",
  },
  {
    deviceEn: "iPhone 13",
    deviceHi: "iPhone 13",
    serviceEn: "Apple Logo Boot Loop Fixed (No Data Loss)",
    serviceHi: "एप्पल लोगो बूट लूप फिक्स (जीरो डेटा लॉस)",
    locationEn: "Port Augusta",
    locationHi: "पोर्ट ऑगस्टा",
    timeEn: "45 mins ago",
    timeHi: "45 मिनट पहले",
    icon: "🍎",
  },
  {
    deviceEn: "iPad (9th Gen)",
    deviceHi: "iPad (9th Gen)",
    serviceEn: "Front Glass & Digitizer Restoration",
    serviceHi: "फ्रंट ग्लास व डिजिटाइज़र रिपेयर",
    locationEn: "Port Pirie",
    locationHi: "पोर्ट पिरी",
    timeEn: "1 hr ago",
    timeHi: "1 घंटा पहले",
    icon: "💻",
  },
  {
    deviceEn: "Google Pixel 7 Pro",
    deviceHi: "Google Pixel 7 Pro",
    serviceEn: "Pop-up Ad & Adware Malware Removal",
    serviceHi: "पॉप-अप ऐड्स व मैलवेयर क्लीनअप",
    locationEn: "Spencer Gulf",
    locationHi: "स्पेंसर गल्फ",
    timeEn: "2 hrs ago",
    timeHi: "2 घंटे पहले",
    icon: "🛡️",
  },
  {
    deviceEn: "iPhone 15 Pro Max",
    deviceHi: "iPhone 15 Pro Max",
    serviceEn: "Laser Rear Glass Replacement",
    serviceHi: "लेजर बैक ग्लास रिप्लेसमेंट",
    locationEn: "Port Augusta West",
    locationHi: "पोर्ट ऑगस्टा वेस्ट",
    timeEn: "3 hrs ago",
    timeHi: "3 घंटे पहले",
    icon: "✨",
  },
];

export default function LiveRecentRepairs() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Initial delay before first toast pops up
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3500);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (dismissed || isPaused) return;

    const interval = setInterval(() => {
      // Fade out, switch event, fade back in
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % REPAIRS.length);
        setVisible(true);
      }, 600);
    }, 7000);

    return () => clearInterval(interval);
  }, [dismissed, isPaused]);

  if (dismissed) return null;

  const current = REPAIRS[currentIndex];

  return (
    <aside
      aria-label={isHi ? "हाल के रिपेयर अपडेट्स" : "Recent verified repairs"}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`fixed bottom-20 left-4 z-40 max-w-sm transition-all duration-500 ease-out transform ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      <div className="bg-white/95 dark:bg-carbon/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-3.5 shadow-xl shadow-black/10 dark:shadow-2xl flex items-start gap-3 text-slate-900 dark:text-white relative group">
        {/* Device Icon Circle */}
        <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-xl shrink-0">
          <span>{current.icon}</span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pr-5">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-black tracking-wider text-slate-500 dark:text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isHi ? "लाइव रिपेयर अपडेट" : "Live Repair Activity"}</span>
            <span>•</span>
            <span className="text-brand font-bold">{isHi ? current.timeHi : current.timeEn}</span>
          </div>

          <p className="font-extrabold text-xs text-slate-900 dark:text-white mt-0.5 truncate">
            {isHi ? current.deviceHi : current.deviceEn}
          </p>

          <p className="text-[11px] text-slate-600 dark:text-slate-300 truncate">
            {isHi ? current.serviceHi : current.serviceEn}
          </p>

          <div className="flex items-center gap-2 mt-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
            <span>📍 {isHi ? current.locationHi : current.locationEn}</span>
            <span>•</span>
            <span>✓ {isHi ? "90 दिन वारंटी" : "90-Day Warranty"}</span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label={isHi ? "नोटिफिकेशन बंद करें" : "Dismiss notification"}
          className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-md transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
