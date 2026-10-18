"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import LiveStoreStatus from "./LiveStoreStatus";

export default function Footer() {
  const { translations, language } = useLanguage();
  const isHi = language === "hi";
  const site = translations.site || {};

  return (
    <footer className="bg-carbon text-white border-t border-line-dark relative overflow-hidden">
      {/* Top red accent glow line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-white/10">
          {/* Brand Info (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-14 sm:h-16 w-56 sm:w-64 flex items-center justify-start transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/logo-dark.png"
                  alt="DN Mobiles — Repair · Buy · Sell · Accessories"
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[11px] font-bold text-slate-300 tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>{isHi ? "प्रिसिजन रिपेयर · 18 डोमेयर कोर्ट, पोर्ट ऑगस्टा, SA" : "Precision Repairs · 18 Domeyer Ct, Port Augusta, SA"}</span>
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {isHi
                ? "पोर्ट ऑगस्टा का भरोसेमंद मोबाइल फोन, टैबलेट और iPad रिपेयर केंद्र। फैक्ट्री-ग्रेड कारीगरी, ग्रेड-ए कैलिब्रेटेड पार्ट्स और 100% फ्री डायग्नोस्टिक्स।"
                : "Port Augusta's trusted mobile phone, tablet and iPad repair laboratory. Delivering factory-grade workmanship, Grade-A calibrated parts, and 100% free diagnostics."}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="tel:+61420655514"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand border border-white/10 flex items-center justify-center text-white transition-all shadow-md"
                aria-label="Call DN Mobiles 0420 655 514"
                title="Call 0420 655 514"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
              <a
                href="facetime:+61420655514"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#34C759] border border-white/10 flex items-center justify-center text-white transition-all shadow-md"
                aria-label="FaceTime DN Mobiles +61 420 655 514"
                title="FaceTime +61 420 655 514"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
              </a>
              <a
                href="https://wa.me/61420655514"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#25D366] border border-white/10 flex items-center justify-center text-white transition-all shadow-md"
                aria-label="WhatsApp DN Mobiles"
                title="WhatsApp Chat"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1877F2] border border-white/10 flex items-center justify-center text-white transition-all shadow-md"
                aria-label="Facebook Page DN Mobiles"
                title="Facebook Community Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dnmobilerepairs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 border border-white/10 flex items-center justify-center text-white transition-all shadow-md"
                aria-label="Instagram DN Mobiles"
                title="Instagram DM & Photos"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="mailto:dnmobilerepairspa@gmail.com"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand border border-white/10 flex items-center justify-center text-white transition-all shadow-md"
                aria-label="Email DN Mobiles"
                title="Email dnmobilerepairspa@gmail.com"
              >
                <svg className="w-4 h-4 fill-none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Repair Services Column */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-brand mb-4">
              {isHi ? "रिपेयर सेवाएं" : "Repair Solutions"}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/services/screen-replacement" className="hover:text-white transition-colors">
                  {isHi ? "स्क्रीन बदलना" : "Screen Replacement"}
                </Link>
              </li>
              <li>
                <Link href="/services/battery-replacement" className="hover:text-white transition-colors">
                  {isHi ? "बैटरी बदलना" : "Battery Replacement"}
                </Link>
              </li>
              <li>
                <Link href="/services/back-glass-replacement" className="hover:text-white transition-colors">
                  {isHi ? "लेजर बैक ग्लास" : "Laser Back Glass"}
                </Link>
              </li>
              <li>
                <Link href="/services/ipad-repair" className="hover:text-white transition-colors">
                  {isHi ? "iPad व टैबलेट रिपेयर" : "iPad & Tablet Repairs"}
                </Link>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  {isHi ? "प्राइस कैलकुलेटर" : "Instant Cost Calculator"}
                </a>
              </li>
              <li>
                <a href="#refurbished" className="hover:text-white transition-colors">
                  {isHi ? "सर्टिफाइड फोन" : "Certified Pre-Owned Devices"}
                </a>
              </li>
            </ul>
          </div>

          {/* Devices Repaired Column */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-brand mb-4">
              {isHi ? "ब्रांड्स व कैटलॉग" : "Brands & Catalog"}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/catalog/devices" className="hover:text-white transition-colors">
                  iPhone & Apple Watch
                </Link>
              </li>
              <li>
                <Link href="/catalog/devices" className="hover:text-white transition-colors">
                  Samsung Galaxy S & A
                </Link>
              </li>
              <li>
                <Link href="/catalog/brands" className="hover:text-white transition-colors">
                  Google Pixel Series
                </Link>
              </li>
              <li>
                <Link href="/catalog/brands" className="hover:text-white transition-colors">
                  Oppo, Xiaomi & Motorola
                </Link>
              </li>
              <li>
                <Link href="/catalog/sell-device" className="hover:text-white transition-colors text-brand font-bold">
                  {isHi ? "पुराना फोन बेचें या बदलें →" : "Sell or Trade-In Phone →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop & Hours Column */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-brand mb-4">
              {isHi ? "वर्कशॉप व संपर्क" : "Workshop & Contact"}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="leading-snug">
                <strong className="text-white block">{isHi ? "लोकेशन:" : "Location:"}</strong>
                18 Domeyer Court, Port Augusta SA 5700
              </p>
              <div className="leading-snug">
                <strong className="text-white block mb-1">{isHi ? "खुलने का समय:" : "Live Workshop Hours:"}</strong>
                <LiveStoreStatus variant="compact" className="text-slate-200" />
                <span className="block text-[11px] text-slate-400 mt-0.5">
                  {isHi ? "7 दिन खुला · सुबह 8:00 – रात 8:00" : "Open 7 Days · 8:00 AM – 8:00 PM"}
                </span>
              </div>
              <p className="leading-snug">
                <strong className="text-white block">{isHi ? "इमरजेंसी हेल्पलाइन:" : "Emergency Hotline:"}</strong>
                <a href="tel:+61420655514" className="text-brand font-bold hover:underline">
                  0420 655 514
                </a>
              </p>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px] border border-emerald-500/20">
                  {isHi ? "✓ नि:शुल्क पोर्ट ऑगस्टा डिलीवरी" : "✓ Free Port Augusta Delivery"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            {isHi
              ? "कॉपीराइट © 2026 DN Mobiles। सर्वाधिकार सुरक्षित। पोर्ट ऑगस्टा, साउथ ऑस्ट्रेलिया।"
              : "Copyright © 2026 DN Mobiles. All Rights Reserved. Port Augusta, South Australia."}
          </p>
          <div className="flex items-center gap-6">
            <span>{isHi ? "नि:शुल्क डायग्नोस्टिक्स" : "Free Diagnostics"}</span>
            <span>•</span>
            <span>{isHi ? "90 दिन वारंटी" : "90-Day Warranty"}</span>
            <span>•</span>
            <span>{isHi ? "नो फिक्स नो फीस" : "No Fix No Fee"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
