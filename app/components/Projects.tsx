"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectImg {
  src: string;
  altEn: string;
  altHi: string;
  category: string;
  tagEn: string;
  tagHi: string;
  badgeEn?: string;
  badgeHi?: string;
}

export default function Projects() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const stripRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("all");

  const images: ProjectImg[] = [
    {
      src: "/images/gallery/ba-screen-iphone-pro.jpg",
      altEn: "iPhone 14/15 Pro OLED Screen (9:04 AM -> 9:28 AM 24-Min Repair)",
      altHi: "iPhone 14/15 Pro OLED स्क्रीन (9:04 AM -> 9:28 AM 24 मिनट रिपेयर)",
      category: "screens",
      tagEn: "Screen Replacement",
      tagHi: "स्क्रीन रिप्लेसमेंट",
      badgeEn: "24-Min Turnaround",
      badgeHi: "24-मिनट एक्सप्रेस",
    },
    {
      src: "/images/gallery/ba-backglass-iphone-black.jpg",
      altEn: "iPhone 14 Pro Laser Back Glass Replacement (MagSafe Coil Preserved)",
      altHi: "iPhone 14 Pro लेजर बैक ग्लास रिपेयर (मैगसेफ कॉइल सुरक्षित)",
      category: "backglass",
      tagEn: "Laser Back Glass",
      tagHi: "लेजर बैक ग्लास",
      badgeEn: "Laser Precision",
      badgeHi: "प्रिसिजन लेजर",
    },
    {
      src: "/images/gallery/ba-ipad-pro-13.jpg",
      altEn: "Apple iPad Pro 13 (2024) Screen & Digitizer Restoration",
      altHi: "Apple iPad Pro 13 (2024) स्क्रीन व डिजिटाइज़र रेस्टोरेशन",
      category: "tablets",
      tagEn: "iPad Restoration",
      tagHi: "iPad रेस्टोरेशन",
      badgeEn: "2024 Model",
      badgeHi: "2024 मॉडल",
    },
    {
      src: "/images/gallery/ba-screen-iphone-lines.jpg",
      altEn: "iPhone Smashed Glass & Vertical Rainbow Artifacts Repaired",
      altHi: "iPhone टूटी स्क्रीन व डिस्प्ले लाइन खराबी ठीक की गई",
      category: "screens",
      tagEn: "OLED Calibration",
      tagHi: "OLED कैलिब्रेशन",
      badgeEn: "Grade-A OLED",
      badgeHi: "ग्रेड-ए OLED",
    },
    {
      src: "/images/gallery/ba-backglass-iphone-blue.jpg",
      altEn: "iPhone 13/14 Blue Back Glass Clean Separation & Re-seal",
      altHi: "iPhone 13/14 ब्लू बैक ग्लास लेजर सेपरेशन व री-सील",
      category: "backglass",
      tagEn: "Laser Back Glass",
      tagHi: "लेजर बैक ग्लास",
      badgeEn: "Factory Finish",
      badgeHi: "फैक्ट्री फिनिश",
    },
    {
      src: "/images/gallery/ba-backglass-samsung-ultra.jpg",
      altEn: "Samsung Galaxy S23 Ultra Pink Rear Glass Restoration",
      altHi: "Samsung Galaxy S23 Ultra पिंक बैक पैनल रेस्टोरेशन",
      category: "backglass",
      tagEn: "Samsung Galaxy",
      tagHi: "Samsung Galaxy",
      badgeEn: "Ultra Series",
      badgeHi: "अल्ट्रा सीरीज",
    },
    {
      src: "/images/gallery/ba-ipad-family.jpg",
      altEn: "Apple iPad Digitizer Replacement — Family Wallpaper Restored",
      altHi: "Apple iPad डिजिटाइज़र रिप्लेसमेंट — डिस्प्ले एकदम नया",
      category: "tablets",
      tagEn: "iPad Digitizer",
      tagHi: "iPad डिजिटाइज़र",
      badgeEn: "Full Touch Restored",
      badgeHi: "फुल टच सुरक्षित",
    },
    {
      src: "/images/gallery/shop-accessories.jpg",
      altEn: "Workshop Stock: 20W GaN Chargers, Braided Cables & Shockproof Cases",
      altHi: "वर्कशॉप स्टॉक: 20W GaN चार्जर्स, ब्रेडेड केबल्स व शॉकप्रूफ कवर्स",
      category: "accessories",
      tagEn: "Accessories",
      tagHi: "एक्सेसरीज",
      badgeEn: "In-Store Stock",
      badgeHi: "स्टॉक उपलब्ध",
    },
  ];

  const filtered = images.filter((img) => filter === "all" || img.category === filter);

  const filterTabs = [
    { id: "all", labelEn: "All Work", labelHi: "सभी काम" },
    { id: "screens", labelEn: "Screens", labelHi: "स्क्रीन" },
    { id: "backglass", labelEn: "Laser Glass", labelHi: "लेजर ग्लास" },
    { id: "tablets", labelEn: "iPads & Tablets", labelHi: "iPad व टैबलेट" },
    { id: "accessories", labelEn: "Accessories", labelHi: "एक्सेसरीज" },
  ];

  const scrollBy = (dir: 1 | -1) => {
    stripRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 dark:bg-carbon text-dark dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {isHi ? "वर्कशॉप गैलरी" : "Workshop Visuals"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {isHi ? (
                <>
                  सच्चे रिपेयर। <br className="hidden sm:inline" />
                  <span className="text-brand">सच्चे नतीजे।</span>
                </>
              ) : (
                <>
                  Real Repairs. <br className="hidden sm:inline" />
                  <span className="text-brand">Real Results.</span>
                </>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              {isHi
                ? "पोर्ट ऑगस्टा वर्कशॉप में पूरे किए गए वास्तविक Before & After रिपेयर देखें। टूटी स्क्रीन, लेजर बैक ग्लास और iPad डिजिटाइज़र रेस्टोरेशन।"
                : "Real Before & After photos from our Port Augusta workshop bench. Cracked OLED screens, precision laser back glass, and iPad restorations."}
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
            {filterTabs.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  filter === f.id
                    ? "bg-brand text-white shadow-sm"
                    : "bg-white dark:bg-obsidian text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-line-dark hover:border-slate-400"
                }`}
              >
                {isHi ? f.labelHi : f.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel strip */}
        <div className="relative">
          <div
            ref={stripRef}
            className="snap-strip flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2"
            tabIndex={0}
            aria-label="Recent repair photos"
          >
            {filtered.map((img, idx) => (
              <figure
                key={idx}
                className="shrink-0 snap-center rounded-2xl overflow-hidden border border-slate-200 dark:border-line-dark bg-white dark:bg-obsidian shadow-xs hover:shadow-xl hover:border-brand/40 transition-all duration-300 w-72 sm:w-80 group flex flex-col justify-between"
              >
                <div className="relative w-full h-64 overflow-hidden bg-slate-900">
                  <Image
                    src={img.src}
                    alt={isHi ? img.altHi : img.altEn}
                    fill
                    sizes="320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-carbon/90 text-white font-extrabold text-[10px] backdrop-blur-md border border-white/10">
                      {isHi ? img.tagHi : img.tagEn}
                    </span>
                    {img.badgeEn && (
                      <span className="px-2 py-0.5 rounded-md bg-brand text-white font-black text-[9.5px] shadow-xs">
                        {isHi ? img.badgeHi : img.badgeEn}
                      </span>
                    )}
                  </div>
                </div>
                <figcaption className="p-4 sm:p-5">
                  <p className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm leading-snug">
                    {isHi ? img.altHi : img.altEn}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {isHi ? "पोर्ट ऑगस्टा वर्कशॉप में पूरा किया गया" : "Completed at Port Augusta Workshop"}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-between items-center mt-6">
            <a
              href="#testimonials"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-brand hover:underline"
            >
              <span>{isHi ? "ग्राहकों के वास्तविक फेसबुक रिव्यू देखें" : "View Customer Feedback Screenshots"}</span>
              <span>→</span>
            </a>

            <div className="flex gap-2.5">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-xl border border-slate-200 dark:border-line-dark bg-white dark:bg-obsidian text-slate-800 dark:text-white flex items-center justify-center hover:border-brand hover:text-brand shadow-xs transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-xl border border-brand bg-brand text-white flex items-center justify-center hover:bg-brand-dark shadow-md shadow-brand/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
