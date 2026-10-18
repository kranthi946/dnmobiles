"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import LiveStoreStatus from "./LiveStoreStatus";
import { navCatalog } from "../../lib/catalog";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { translations, language } = useLanguage();
  const isHi = language === "hi";
  const nav = translations.nav || {};
  const site = translations.site || {};

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Corporate Status Bar */}
      <div className="bg-slate-900 dark:bg-carbon text-white/90 text-[11px] sm:text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-5 overflow-hidden">
            <LiveStoreStatus variant="compact" className="text-white shrink-0" />
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <svg className="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {isHi ? "18 डोमेयर कोर्ट, पोर्ट ऑगस्टा SA 5700" : "18 Domeyer Court, Port Augusta SA 5700"}
            </span>
            <span className="hidden lg:inline text-white/30">|</span>
            <span className="hidden lg:inline text-slate-300">
              {isHi ? "⚡ हर डिवाइस पर 100% नि:शुल्क जांच" : "⚡ 100% Free Diagnostics on Every Device"}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+61420655514"
              className="flex items-center gap-1.5 font-bold text-white hover:text-brand transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>0420 655 514</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href="#estimator"
              className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors"
            >
              <span>{isHi ? "प्राइस कैलकुलेटर" : "Price Calculator"}</span>
              <span className="text-brand">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Adapts between Clean Light & Sleek Dark) */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-carbon/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl py-2"
            : "bg-white/90 dark:bg-carbon/85 backdrop-blur-md border-b border-slate-200/60 dark:border-white/5 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-4">
          {/* Official DN Mobiles Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative h-10 sm:h-11 lg:h-12 w-36 sm:w-44 lg:w-48 flex items-center justify-start transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/logo-light.png"
                alt="DN Mobiles — Repair · Buy · Sell · Accessories"
                fill
                sizes="(max-width: 640px) 144px, 192px"
                className="object-contain object-left dark:hidden"
                priority
              />
              <Image
                src="/images/logo-dark.png"
                alt="DN Mobiles — Repair · Buy · Sell · Accessories"
                fill
                sizes="(max-width: 640px) 144px, 192px"
                className="object-contain object-left hidden dark:block"
                priority
              />
            </div>
            <span className="hidden xl:inline-block h-6 w-px bg-slate-200 dark:bg-white/15" />
            <div className="hidden xl:block leading-none">
              <span className="block text-[10px] font-black tracking-wider text-slate-900 dark:text-white uppercase">
                Port Augusta
              </span>
              <span className="block text-[9px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-0.5">
                {isHi ? "18 डोमेयर कोर्ट" : "18 Domeyer Ct"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Streamlined to prevent navbar overflow */}
          <ul className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs xl:text-sm font-bold">
            <li>
              <Link
                href="/"
                className="text-slate-800 hover:text-brand dark:text-slate-200 dark:hover:text-brand transition-colors"
              >
                {nav.home || (isHi ? "होम" : "Home")}
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="text-slate-800 hover:text-brand dark:text-slate-200 dark:hover:text-brand transition-colors"
              >
                {nav.services || (isHi ? "सेवाएं" : "Services")}
              </a>
            </li>
            <li>
              <a
                href="#estimator"
                className="text-brand hover:opacity-80 transition-colors flex items-center gap-1 font-extrabold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span>{isHi ? "प्राइस गाइड" : "Price Guide"}</span>
              </a>
            </li>
            {/* Devices Catalog Dropdown */}
            <li className="relative group">
              <Link
                href="/devices"
                className="text-slate-800 hover:text-brand dark:text-slate-200 dark:hover:text-brand transition-colors inline-flex items-center gap-1"
              >
                <span>{isHi ? "डिवाइस" : "Devices"}</span>
                <svg className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                <div className="w-[520px] bg-white dark:bg-obsidian border border-line dark:border-line-dark rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-6 text-dark dark:text-white backdrop-blur-2xl">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wider text-brand mb-2.5">
                      Apple
                    </p>
                    <ul className="space-y-1.5 text-xs">
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">iPhone 11 – 15 Pro</a></li>
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">iPad Pro & Air</a></li>
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">Apple Watch</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wider text-brand mb-2.5">
                      Samsung
                    </p>
                    <ul className="space-y-1.5 text-xs">
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">Galaxy S20 – S24</a></li>
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">Galaxy Z Fold/Flip</a></li>
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">Galaxy A-Series</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wider text-brand mb-2.5">
                      {isHi ? "अन्य ब्रांड" : "Other Brands"}
                    </p>
                    <ul className="space-y-1.5 text-xs">
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">Google Pixel 6 – 9</a></li>
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">Oppo / Xiaomi</a></li>
                      <li><a href="#services" className="text-slate-700 hover:text-brand dark:text-slate-200 dark:hover:text-brand">Android Tablets</a></li>
                    </ul>
                  </div>
                  <p className="col-span-3 text-[11px] text-slate-500 dark:text-slate-400 border-t border-line dark:border-line-dark pt-3">
                    {isHi ? "हर रिपेयर से पहले 100% फ्री जांच व डायग्नोस्टिक्स शामिल है।" : "Every repair includes free inspection & diagnostics before any work starts."}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#refurbished"
                className="text-slate-800 hover:text-brand dark:text-slate-200 dark:hover:text-brand transition-colors"
              >
                {isHi ? "सर्टिफाइड फोन" : "Pre-Owned"}
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="text-slate-800 hover:text-brand dark:text-slate-200 dark:hover:text-brand transition-colors"
              >
                {isHi ? "प्रक्रिया" : "Workflow"}
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-slate-800 hover:text-brand dark:text-slate-200 dark:hover:text-brand transition-colors"
              >
                {isHi ? "समीक्षाएं" : "Reviews"}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-slate-800 hover:text-brand dark:text-slate-200 dark:hover:text-brand transition-colors"
              >
                {nav.contact || (isHi ? "संपर्क" : "Contact")}
              </a>
            </li>
          </ul>

          {/* Right Action Buttons - Perfectly Aligned, Fitted & Always Visible */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Theme Toggle (Light / Night Mode) */}
            <ThemeToggle showLabel={false} />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Call Button - Always visible next to Language Switcher in both English and Hindi */}
            <a
              href="tel:+61420655514"
              className="inline-flex items-center gap-1.5 h-9 px-2 sm:px-2.5 xl:px-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand text-xs font-bold text-slate-800 dark:text-white bg-slate-100/90 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors shadow-sm shrink-0"
              title={isHi ? "DN Mobiles पर कॉल करें: 0420 655 514" : "Call DN Mobiles: 0420 655 514"}
            >
              <svg className="w-3.5 h-3.5 text-brand shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden xl:inline whitespace-nowrap">
                {isHi ? "कॉल" : "Call"}: 0420 655 514
              </span>
              <span className="hidden sm:inline xl:hidden whitespace-nowrap">
                0420 655 514
              </span>
              <span className="sm:hidden font-bold">
                {isHi ? "कॉल" : "Call"}
              </span>
            </a>

            {/* Book Repair CTA */}
            <a
              href="#contact"
              className="btn-mahindra-red text-white text-xs font-extrabold h-9 px-2.5 sm:px-3.5 rounded-xl inline-flex items-center gap-1 sm:gap-1.5 shadow-md shadow-brand/25 whitespace-nowrap shrink-0"
            >
              <span>{nav.bookNow || (isHi ? "रिपेयर बुक करें" : "Book Repair")}</span>
              <span aria-hidden>→</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:text-brand hover:border-brand transition-colors shrink-0"
              aria-label={nav.menu || (isHi ? "नेविगेशन मेनू खोलें" : "Toggle Navigation Menu")}
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-white dark:bg-carbon border-t border-slate-200 dark:border-line-dark shadow-2xl px-4 py-6 text-slate-900 dark:text-white space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
              <div className="relative h-8 sm:h-9 w-32 sm:w-36 flex items-center">
                <Image
                  src="/images/logo-light.png"
                  alt="DN Mobiles"
                  fill
                  sizes="144px"
                  className="object-contain object-left dark:hidden"
                />
                <Image
                  src="/images/logo-dark.png"
                  alt="DN Mobiles"
                  fill
                  sizes="144px"
                  className="object-contain object-left hidden dark:block"
                />
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5 pt-1">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-bold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200"
              >
                {nav.home || "Home"}
              </Link>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="font-bold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200"
              >
                {nav.services || "Repair Services"}
              </a>
              <a
                href="#estimator"
                onClick={() => setMenuOpen(false)}
                className="font-extrabold py-2 px-3 rounded-lg bg-brand/10 text-brand border border-brand/20 flex items-center justify-between"
              >
                <span>{isHi ? "त्वरित प्राइस व समय गाइड" : "Instant Price & Turnaround Guide"}</span>
                <span>→</span>
              </a>
              {navCatalog.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-bold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200 flex-1"
                    >
                      {item.label}
                    </Link>
                    {item.group && (
                      <button
                        type="button"
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        className="p-2 text-slate-400 hover:text-dark dark:hover:text-white"
                      >
                        <svg className={`w-4 h-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.group && expanded === item.label && (
                    <div className="pl-4 py-2 space-y-2 border-l border-slate-200 dark:border-white/10 ml-3">
                      {item.group.columns.flatMap((c) => c.links).slice(0, 6).map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-brand py-1"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#process"
                onClick={() => setMenuOpen(false)}
                className="font-bold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200"
              >
                {isHi ? "प्रिसिजन प्रक्रिया" : "Precision Process"}
              </a>
              <a
                href="#testimonials"
                onClick={() => setMenuOpen(false)}
                className="font-bold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200"
              >
                {isHi ? "ग्राहक समीक्षाएं" : "Customer Reviews"}
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-bold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200"
              >
                {nav.contact || (isHi ? "संपर्क" : "Contact Us")}
              </a>
            </div>

            {/* Mobile Contact Shortcuts */}
            <div className="pt-4 border-t border-slate-100 dark:border-line-dark grid grid-cols-3 gap-2">
              <a
                href="tel:+61420655514"
                className="py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-white/10 text-center font-bold text-xs flex items-center justify-center gap-1.5 text-slate-900 dark:text-white"
              >
                <svg className="w-3.5 h-3.5 text-brand shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>{isHi ? "कॉल" : "Call"}</span>
              </a>
              <a
                href="facetime:+61420655514"
                className="py-2.5 px-2 rounded-xl bg-[#34C759] text-white text-center font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
                <span>FaceTime</span>
              </a>
              <a
                href="https://wa.me/61420655514"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-xl bg-[#25D366] text-white text-center font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
