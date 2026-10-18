"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const PHONE_NUMBER = "+61420655514";
const PHONE_DISPLAY = "0420 655 514";
const waBase = "https://wa.me/61420655514";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=18+Domeyer+Court+Port+Augusta+SA+5700";
const fbUrl = "https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr";
const igUrl = "https://www.instagram.com/dnmobilerepairs";
const snapUrl = "https://www.snapchat.com/add/dnmobilerepairs";

export default function FloatingRail() {
  const { t, language } = useLanguage();
  const isHi = language === "hi";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactChannels = [
    {
      id: "book",
      href: "#contact",
      title: isHi ? "रिपेयर बुक करें" : "Book Device Repair",
      tooltip: isHi ? "ऑनलाइन रिपेयर बुक करें" : "Book a Repair Online",
      label: t("rail.book") || (isHi ? "बुक" : "Book"),
      bgClass: "bg-[#DD052B] hover:bg-[#b80424] text-white",
      icon: (
        <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      ),
    },
    {
      id: "call",
      href: `tel:${PHONE_NUMBER}`,
      title: isHi ? "सीधा कॉल करें (0420 655 514)" : "Direct Call (0420 655 514)",
      tooltip: `${isHi ? "कॉल करें" : "Call"} ${PHONE_DISPLAY}`,
      label: t("rail.call") || (isHi ? "कॉल" : "Call"),
      bgClass: "bg-slate-900 hover:bg-black dark:bg-[#151922] dark:hover:bg-[#0c0e14] text-white",
      icon: (
        <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
    },
    {
      id: "whatsapp",
      href: `${waBase}?text=${encodeURIComponent("Hi! I'd like to get my phone/tablet repaired at DN Mobiles Port Augusta.")}`,
      target: "_blank",
      rel: "noopener noreferrer",
      title: isHi ? "व्हाट्सएप चैट" : "WhatsApp Quick Chat",
      tooltip: isHi ? "WhatsApp पर तुरंत चैट करें" : "Chat on WhatsApp",
      label: t("rail.whatsapp") || "WhatsApp",
      bgClass: "bg-[#25D366] hover:bg-[#1da851] text-white",
      icon: (
        <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.213a.5.5 0 00.61.637l5.542-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.074-1.387l-.363-.215-3.763.987 1.003-3.665-.236-.376A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
    },
    {
      id: "facetime",
      href: `facetime:${PHONE_NUMBER}`,
      title: isHi ? "फेसटाइम ऑडियो / वीडियो कॉल" : "FaceTime Video & Audio Call",
      tooltip: isHi ? "FaceTime से सीधा कॉल करें" : "FaceTime Audio / Video",
      label: t("rail.facetime") || "FaceTime",
      bgClass: "bg-[#34C759] hover:bg-[#28a745] text-white",
      icon: (
        <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17 10.5V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3.5l4 3.5V7l-4 3.5z" />
        </svg>
      ),
    },
    {
      id: "facebook",
      href: fbUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      title: isHi ? "फेसबुक मैसेंजर व पेज" : "Facebook Messenger & Page",
      tooltip: isHi ? "Facebook पर मैसेज करें" : "Facebook Messenger",
      label: t("rail.facebook") || (isHi ? "फेसबुक" : "Facebook"),
      bgClass: "bg-[#1877F2] hover:bg-[#0c63d4] text-white",
      icon: (
        <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      href: igUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      title: isHi ? "इंस्टाग्राम डायरेक्ट" : "Instagram DM & Updates",
      tooltip: isHi ? "Instagram पर फॉलो / DM करें" : "Instagram Direct DM",
      label: t("rail.instagram") || (isHi ? "इंस्टा" : "Instagram"),
      bgClass: "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90 text-white",
      icon: (
        <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      id: "snapchat",
      href: snapUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      title: isHi ? "स्नैपचैट" : "Snapchat Chat",
      tooltip: isHi ? "Snapchat पर ऐड करें" : "Add on Snapchat",
      label: t("rail.snapchat") || (isHi ? "स्नैप" : "Snap"),
      bgClass: "bg-[#FFFC00] hover:bg-[#ebd900] text-black",
      icon: (
        <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12.003 2c-3.693 0-6.425 2.709-6.425 6.096 0 1.15.353 2.14.779 2.946-.226.471-.62.812-.962 1.093-.327.27-.58.53-.58.91 0 .591.56 1.05 1.25 1.05.23 0 .46-.05.67-.16.35-.18.72-.42 1.15-.42.27 0 .53.09.77.29.35.3.77.78 1.4.78.29 0 .6-.1.93-.33.39-.27.87-.49 1.44-.49.56 0 1.04.22 1.44.49.33.23.64.33.93.33.63 0 1.05-.48 1.4-.78.24-.2.5-.29.77-.29.43 0 .8.24 1.15.42.21.11.44.16.67.16.69 0 1.25-.459 1.25-1.05 0-.38-.253-.64-.58-.91-.342-.281-.736-.622-.962-1.093.426-.806.779-1.796.779-2.946 0-3.387-2.732-6.096-6.425-6.096z" />
        </svg>
      ),
    },
    {
      id: "sms",
      href: `sms:${PHONE_NUMBER}`,
      title: isHi ? "SMS / iMessage टेक्स्ट" : "SMS & iMessage Text",
      tooltip: isHi ? "SMS / टेक्स्ट मैसेज भेजें" : "Send SMS / Text",
      label: t("rail.sms") || (isHi ? "SMS" : "SMS"),
      bgClass: "bg-[#0284C7] hover:bg-[#0369a1] text-white",
      icon: (
        <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: "location",
      href: mapsUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      title: isHi ? "Google Maps पर लोकेशन" : "Workshop Location on Google Maps",
      tooltip: isHi ? "18 Domeyer Ct, Port Augusta" : "18 Domeyer Court, Port Augusta",
      label: t("rail.location") || (isHi ? "मैप" : "Map"),
      bgClass: "bg-white hover:bg-slate-100 dark:bg-[#1e2330] dark:hover:bg-[#282f40] text-slate-800 dark:text-slate-100 border-t border-slate-200/80 dark:border-white/10",
      icon: (
        <svg className="w-4 h-4 shrink-0 text-brand group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Desktop vertical floating rail - perfectly aligned right-side dock */}
      <aside
        aria-label="Direct contact and social shortcuts"
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col w-[60px] items-stretch overflow-visible rounded-l-2xl shadow-2xl border-l border-y border-slate-200/80 dark:border-white/10 backdrop-blur-md"
      >
        <div className="flex flex-col overflow-hidden rounded-l-2xl">
          {contactChannels.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target={c.target}
              rel={c.rel}
              title={c.title}
              aria-label={c.title}
              className={`${c.bgClass} flex flex-col items-center justify-center h-[46px] px-1 transition-all group relative`}
            >
              {c.icon}
              <span className="text-[8.5px] font-extrabold tracking-tight mt-0.5 text-center leading-none">
                {c.label}
              </span>

              {/* Flyout tooltip on hover */}
              <span className="absolute right-[66px] top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap bg-slate-900/95 dark:bg-black/95 border border-white/15 backdrop-blur-md flex items-center gap-1.5 z-50">
                <span>{c.tooltip}</span>
                <span className="text-brand">→</span>
              </span>
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile speed-dial drawer backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Mobile speed-dial bottom sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed bottom-16 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-6 duration-200">
          <div className="bg-white dark:bg-obsidian border border-slate-200 dark:border-line-dark rounded-2xl shadow-2xl p-4 max-w-md mx-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-line-dark mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative h-6 w-24 flex items-center shrink-0">
                  <Image
                    src="/images/logo-light.png"
                    alt="DN Mobiles"
                    fill
                    sizes="96px"
                    className="object-contain object-left dark:hidden"
                  />
                  <Image
                    src="/images/logo-dark.png"
                    alt="DN Mobiles"
                    fill
                    sizes="96px"
                    className="object-contain object-left hidden dark:block"
                  />
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  {isHi ? "त्वरित संपर्क" : "Instant Contact"}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {contactChannels.map((c) => (
                <a
                  key={c.id}
                  href={c.href}
                  target={c.target}
                  rel={c.rel}
                  title={c.title}
                  aria-label={c.title}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 dark:bg-carbon hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-center"
                >
                  <div className={`w-8 h-8 rounded-lg ${c.bgClass} flex items-center justify-center mb-1 shadow-xs`}>
                    {c.icon}
                  </div>
                  <span className="text-[10px] font-bold line-clamp-1">
                    {c.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile bottom sticky action bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-white/95 dark:bg-carbon/95 backdrop-blur-xl border-t border-slate-200 dark:border-line-dark shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-5 divide-x divide-slate-200 dark:divide-line-dark h-14">
          {/* 1. Phone Call */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 hover:text-brand"
            title="Call 0420 655 514"
          >
            <svg className="w-4 h-4 shrink-0 text-slate-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="text-[9.5px] font-bold mt-0.5">{t("rail.call") || "Call"}</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={`${waBase}?text=${encodeURIComponent("Hi! I'd like to get my phone repaired at DN Mobiles.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-[#25D366] hover:opacity-80"
            title="WhatsApp"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.213a.5.5 0 00.61.637l5.542-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.074-1.387l-.363-.215-3.763.987 1.003-3.665-.236-.376A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            <span className="text-[9.5px] font-bold mt-0.5">WhatsApp</span>
          </a>

          {/* 3. FaceTime */}
          <a
            href={`facetime:${PHONE_NUMBER}`}
            className="flex flex-col items-center justify-center text-[#34C759] hover:opacity-80"
            title="FaceTime"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17 10.5V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3.5l4 3.5V7l-4 3.5z" />
            </svg>
            <span className="text-[9.5px] font-bold mt-0.5">FaceTime</span>
          </a>

          {/* 4. Socials / More speed-dial */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 hover:text-brand"
            title="More Contact & Social Options"
          >
            <svg className="w-4 h-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
            <span className="text-[9.5px] font-bold mt-0.5 text-brand">{isHi ? "सोशल" : "Socials"}</span>
          </button>

          {/* 5. Book Repair CTA */}
          <a
            href="#contact"
            className="flex items-center justify-center bg-[#DD052B] text-white hover:bg-[#b80424] font-extrabold text-[10.5px] px-1.5 m-1.5 rounded-lg transition-colors text-center"
          >
            <span>{t("rail.book") || "Book"}</span>
          </a>
        </div>
      </div>
    </>
  );
}
