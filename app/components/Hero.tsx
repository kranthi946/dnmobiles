"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import LiveStoreStatus from "./LiveStoreStatus";

type AnimPhase = "right" | "left" | "numbers" | "timer";

const DWELL_MS = 4500; // Timer duration after numbers finish counting
const TICK_INTERVAL = 25; // 40fps progress tick

/**
 * AnimatedStatCounter: Counts numbers up smoothly from 0 to target value.
 * Handles numbers with commas (5,000+), percentages (100%), prefixes (From $79),
 * and suffixes (90-DAY, 15-30m).
 */
function StatCounter({
  target,
  active,
}: {
  target: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState<string>(() => {
    const m = target.match(/\d[\d,]*/);
    return m ? target.replace(m[0], "0") : target;
  });

  useEffect(() => {
    if (!active) {
      const m = target.match(/\d[\d,]*/);
      setDisplay(m ? target.replace(m[0], "0") : target);
      return;
    }

    const match = target.match(/(\d[\d,]*)/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const rawNum = match[0].replace(/,/g, "");
    const targetNum = parseInt(rawNum, 10);
    const hasComma = match[0].includes(",");
    const prefix = target.slice(0, match.index);
    const suffix = target.slice((match.index || 0) + match[0].length);

    let startTime: number | null = null;
    const duration = 850; // 850ms count-up
    let rafId: number;

    const step = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic: starts swift, lands gently
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(targetNum * ease);

      const formatted = hasComma ? current.toLocaleString("en-AU") : current.toString();
      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplay(target); // Snap to exact original string
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, active]);

  return <span>{display}</span>;
}

export default function Hero() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const slidesEn = [
    {
      eyebrow: "PORT AUGUSTA'S #1 TRUSTED MOBILE REPAIR LAB · PRECISION CRAFTED",
      badge: "📍 18 Domeyer Court, Port Augusta · Open 7 Days",
      titleA: "LOCAL WORKSHOP.",
      titleB: "EXPRESS REPAIRS.",
      titleC: "100% FREE INSPECTION.",
      desc: "Port Augusta's most trusted smartphone, iPad and tablet repair centre. Over 5,000+ devices restored to factory precision with zero-obligation diagnostics and a 90-day warranty.",
      cta1: "Book Free Inspection",
      cta2: "Price & Turnaround Guide",
      href1: "#contact",
      href2: "#estimator",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/slider/slide-1-port-augusta.png",
      sideImgAlt: "Port Augusta aerial view showing Spencer Gulf and Flinders Ranges",
      sideBadgeIcon: "📍",
      sideBadgeText: "Port Augusta, SA · Spencer Gulf",
      tabTitle: "Port Augusta Lab",
      tabSubtitle: "5,000+ Fixed",
      stats: [
        { num: "5,000+", label: "MOBILES REPAIRED" },
        { num: "100%", label: "FREE DIAGNOSTICS" },
        { num: "90-DAY", label: "WARRANTY" },
        { num: "15-30m", label: "FAST TURNAROUND" },
      ],
    },
    {
      eyebrow: "COMPREHENSIVE REPAIR SOLUTIONS · GET YOUR PHONE FIXED TODAY",
      badge: "⭐ Screen · Battery · Back Glass · iPad · Refurbished",
      titleA: "OUR SERVICES.",
      titleB: "AFFORDABLE PRICES.",
      titleC: "FREE INSPECTION.",
      desc: "From cracked iPhone & Samsung OLED screens to fresh batteries, laser back glass, iPad fixes, and certified refurbished phones. Affordable prices and professional service every day.",
      cta1: "Explore All Services",
      cta2: "Call 0420 655 514",
      href1: "/services/screen-replacement",
      href2: "tel:+61420655514",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/slider/slide-2-services-flyer.png",
      sideImgAlt: "DN Mobile Repairs official service flyer with full service list and free inspection starburst",
      sideBadgeIcon: "⭐",
      sideBadgeText: "Official Repair Services Flyer",
      tabTitle: "Our Services",
      tabSubtitle: "Affordable Rates",
      stats: [
        { num: "From $79", label: "SCREEN REPLACEMENT" },
        { num: "From $59", label: "NEW BATTERY" },
        { num: "From $49", label: "BACK GLASS" },
        { num: "100% Free", label: "INSPECTION" },
      ],
    },
    {
      eyebrow: "ANDROID SECURITY LAB · POP-UP AD & MALWARE ERADICATION",
      badge: "🛡️ Remove Annoying Pop-Ups · Restore Factory Speed",
      titleA: "STOP POP-UP ADS.",
      titleB: "REMOVE VIRUSES.",
      titleC: "RESTORE SPEED.",
      desc: "Is your Android inundated with intrusive ads, redirecting browsers, or running painfully slow? Our team cleans malicious pop-ups, spyware, and adware with zero personal data loss.",
      cta1: "Clean My Android Now",
      cta2: "WhatsApp for Virus Help",
      href1: "#contact",
      href2: "https://wa.me/61420655514?text=Hi%20Naveen,%20I%20need%20help%20removing%20pop-up%20ads%20and%20viruses%20from%20my%20Android%20phone!",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/slider/slide-3-virus-removal.png",
      sideImgAlt: "Remove Pop-Up Ads and Viruses on Android poster",
      sideBadgeIcon: "🛡️",
      sideBadgeText: "Android Ad & Virus Clean",
      tabTitle: "Ad & Virus Removal",
      tabSubtitle: "Android Speed Fix",
      stats: [
        { num: "100%", label: "VIRUS REMOVAL" },
        { num: "15 Min", label: "FAST CLEANUP" },
        { num: "Zero Loss", label: "DATA & PHOTOS SAFE" },
        { num: "Free", label: "SECURITY CHECK" },
      ],
    },
    {
      eyebrow: "PORT AUGUSTA DOORSTEP SERVICE · WE COME TO YOU",
      badge: "🚚 We'll Pick It Up · We'll Fix It · We'll Drop It Back",
      titleA: "WE PICK IT UP.",
      titleB: "WE FIX IT.",
      titleC: "WE DROP IT BACK.",
      desc: "Repairs made easy without leaving your home or office. We offer convenient pick-up and drop-off service across Port Augusta with same-day turnaround, honest pricing, and 90-day warranty.",
      cta1: "Book Your Pick-Up Today",
      cta2: "Call 0420 655 514",
      href1: "#contact",
      href2: "tel:+61420655514",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/slider/slide-4-pickup-dropoff.png",
      sideImgAlt: "Pick-up and drop-off repair service poster",
      sideBadgeIcon: "🚚",
      sideBadgeText: "Same-Day Pick-Up & Drop-Off",
      tabTitle: "Pick-Up & Drop-Off",
      tabSubtitle: "We Come to You",
      stats: [
        { num: "Same-Day", label: "RETURN SERVICE" },
        { num: "$0 Delivery", label: "PORT AUGUSTA" },
        { num: "90-Day", label: "WARRANTY" },
        { num: "All Brands", label: "IPHONE & ANDROID" },
      ],
    },
    {
      eyebrow: "PORT AUGUSTA'S PREMIER REPAIR LAB · PRECISION CRAFTED",
      badge: "⚡ 5,000+ Mobiles Fixed · Open 7 Days · 18 Domeyer Court",
      titleA: "PURPOSE LED,",
      titleB: "PERFORMANCE DRIVEN,",
      titleC: "FUTURE READY.",
      desc: "Setting the benchmark for smartphone, iPad, and tablet longevity in regional South Australia. Laser back glass separation, chip-level logic board micro-soldering, and factory TrueTone calibration.",
      cta1: "Configure Your Repair",
      cta2: "Instant Price Guide",
      href1: "#estimator",
      href2: "#contact",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/gallery/ba-screen-iphone-pro.jpg",
      sideImgAlt: "Precision mobile repair lab and screen restoration",
      sideBadgeIcon: "⚡",
      sideBadgeText: "Precision Tech & Lab Standards",
      tabTitle: "Future Ready Lab",
      tabSubtitle: "Purpose Led Tech",
      stats: [
        { num: "5,000+", label: "MOBILES REPAIRED" },
        { num: "100%", label: "FREE DIAGNOSTICS" },
        { num: "90-DAY", label: "WARRANTY" },
        { num: "15-30m", label: "FAST TURNAROUND" },
      ],
    },
  ];

  const slidesHi = [
    {
      eyebrow: "पोर्ट ऑगस्टा का #1 विश्वसनीय मोबाइल रिपेयर लैब · प्रिसिजन क्राफ्टेड",
      badge: "📍 18 डोमेयर कोर्ट, पोर्ट ऑगस्टा · 7 दिन खुला",
      titleA: "लोकल वर्कशॉप।",
      titleB: "एक्सप्रेस रिपेयर।",
      titleC: "100% फ्री जांच।",
      desc: "पोर्ट ऑगस्टा का सबसे भरोसेमंद स्मार्टफोन, iPad और टैबलेट रिपेयर केंद्र। 5,000+ से अधिक डिवाइस ठीक किए गए, 100% नि:शुल्क डायग्नोस्टिक्स और 90 दिन की वारंटी के साथ।",
      cta1: "नि:शुल्क जांच बुक करें",
      cta2: "प्राइस व समय गाइड",
      href1: "#contact",
      href2: "#estimator",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/slider/slide-1-port-augusta.png",
      sideImgAlt: "पोर्ट ऑगस्टा एरियल व्यू",
      sideBadgeIcon: "📍",
      sideBadgeText: "पोर्ट ऑगस्टा, SA · स्पेंसर गल्फ",
      tabTitle: "पोर्ट ऑगस्टा लैब",
      tabSubtitle: "5,000+ ठीक किए",
      stats: [
        { num: "5,000+", label: "मोबाइल ठीक किए गए" },
        { num: "100%", label: "नि:शुल्क जांच" },
        { num: "90 दिन", label: "वारंटी गारंटी" },
        { num: "15-30 मिनट", label: "फास्ट रिपेयर" },
      ],
    },
    {
      eyebrow: "संपूर्ण मोबाइल रिपेयर सॉल्यूशंस · आज ही फोन सही कराएं",
      badge: "⭐ स्क्रीन · बैटरी · बैक ग्लास · iPad · रीफर्बिश्ड फोन",
      titleA: "हमारी सेवाएं।",
      titleB: "किफायती कीमतें।",
      titleC: "नि:शुल्क जांच।",
      desc: "टूटी iPhone और Samsung OLED स्क्रीन से लेकर नई बैटरी, लेजर बैक ग्लास, iPad रिपेयर और सर्टिफाइड रीफर्बिश्ड फोन। हर रोज किफायती दाम और पेशेवर सेवा।",
      cta1: "सभी सेवाएं देखें",
      cta2: "कॉल 0420 655 514",
      href1: "/services/screen-replacement",
      href2: "tel:+61420655514",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/slider/slide-2-services-flyer.png",
      sideImgAlt: "DN Mobile Repairs आधिकारिक सर्विस फ्लायर",
      sideBadgeIcon: "⭐",
      sideBadgeText: "आधिकारिक रिपेयर सर्विस फ्लायर",
      tabTitle: "हमारी सेवाएं",
      tabSubtitle: "किफायती दरें",
      stats: [
        { num: "$79 से", label: "स्क्रीन रिप्लेसमेंट" },
        { num: "$59 से", label: "नई बैटरी" },
        { num: "$49 से", label: "बैक ग्लास" },
        { num: "100% फ्री", label: "हार्डवेयर जांच" },
      ],
    },
    {
      eyebrow: "एंड्रॉयड सिक्योरिटी लैब · पॉप-अप ऐड्स व वायरस सफाया",
      badge: "🛡️ परेशान करने वाले ऐड्स हटाएं · फोन की स्पीड वापस पाएं",
      titleA: "पॉप-अप ऐड्स रोकें।",
      titleB: "वायरस हटाएं।",
      titleC: "स्पीड बढ़ाएं।",
      desc: "क्या आपका फोन अनचाहे ऐड्स, स्लो ब्राउज़र या वायरस से परेशान है? हमारी टीम बिना किसी डेटा या फोटो नुकसान के सभी मैलवेयर व स्पाइवेयर पूरी तरह साफ करती है।",
      cta1: "फोन तुरंत क्लीन कराएं",
      cta2: "व्हाट्सएप सपोर्ट",
      href1: "#contact",
      href2: "https://wa.me/61420655514?text=Hi%20Naveen,%20I%20need%20help%20removing%20pop-up%20ads%20and%20viruses%20from%20my%20Android%20phone!",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/slider/slide-3-virus-removal.png",
      sideImgAlt: "एंड्रॉयड पॉप-अप ऐड्स व वायरस रिमूवल पोस्टर",
      sideBadgeIcon: "🛡️",
      sideBadgeText: "एंड्रॉयड ऐड व वायरस क्लीन",
      tabTitle: "ऐड्स व वायरस",
      tabSubtitle: "स्पीड व सिक्योरिटी",
      stats: [
        { num: "100%", label: "वायरस रिमूवल" },
        { num: "15 मिनट", label: "त्वरित क्लीन-अप" },
        { num: "सुरक्षित", label: "फोटो व डेटा सेफ" },
        { num: "फ्री", label: "सिक्योरिटी चेक" },
      ],
    },
    {
      eyebrow: "पोर्ट ऑगस्टा डोरस्टेप सर्विस · हम आपके पास आएंगे",
      badge: "🚚 पिकअप करेंगे · ठीक करेंगे · वापस पहुंचाएंगे",
      titleA: "हम पिकअप करेंगे।",
      titleB: "हम ठीक करेंगे।",
      titleC: "वापस पहुंचाएंगे।",
      desc: "घर या ऑफिस से बाहर निकले बिना आसान फोन रिपेयर। हम पूरे पोर्ट ऑगस्टा में पिक-अप और ड्रॉप-ऑफ सेवा प्रदान करते हैं—उसी दिन रिपेयर, पारदर्शी कीमतें और 90 दिन की वारंटी।",
      cta1: "पिक-अप अभी बुक करें",
      cta2: "कॉल 0420 655 514",
      href1: "#contact",
      href2: "tel:+61420655514",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/slider/slide-4-pickup-dropoff.png",
      sideImgAlt: "पिक-अप व ड्रॉप-ऑफ रिपेयर सर्विस पोस्टर",
      sideBadgeIcon: "🚚",
      sideBadgeText: "उसी दिन पिकअप व डिलीवरी",
      tabTitle: "पिकअप व डिलीवरी",
      tabSubtitle: "डोरस्टेप सर्विस",
      stats: [
        { num: "उसी दिन", label: "डिलीवरी सर्विस" },
        { num: "फ्री", label: "पोर्ट ऑगस्टा में" },
        { num: "90 दिन", label: "वारंटी गारंटी" },
        { num: "सभी ब्रांड्स", label: "iPhone व एंड्रॉयड" },
      ],
    },
    {
      eyebrow: "पोर्ट ऑगस्टा का प्रमुख मोबाइल लैब · प्रिसिजन क्राफ्टेड",
      badge: "⚡ 5,000+ फोन ठीक किए गए · 7 दिन खुला · 18 डोमेयर कोर्ट",
      titleA: "उद्देश्य-प्रेरित,",
      titleB: "प्रदर्शन-समर्पित,",
      titleC: "भविष्य के लिए तैयार।",
      desc: "क्षेत्रीय दक्षिण ऑस्ट्रेलिया में स्मार्टफोन और टैबलेट रिपेयर का नया मानक। लेजर बैक ग्लास सेपरेशन, चिप-लेवल मदरबोर्ड माइक्रो-सोल्डरिंग और ओरिजिनल ट्रू-टोन कैलिब्रेशन।",
      cta1: "रिपेयर कॉन्फ़िगर करें",
      cta2: "प्राइस गाइड देखें",
      href1: "#estimator",
      href2: "#contact",
      img: "/images/slider/slide-1-port-augusta.png",
      sideImg: "/images/gallery/ba-screen-iphone-pro.jpg",
      sideImgAlt: "प्रिसिजन मोबाइल रिपेयर लैब",
      sideBadgeIcon: "⚡",
      sideBadgeText: "अत्याधुनिक रिपेयर तकनीक",
      tabTitle: "फ्यूचर रेडी लैब",
      tabSubtitle: "अत्याधुनिक तकनीक",
      stats: [
        { num: "5,000+", label: "मोबाइल ठीक किए गए" },
        { num: "100%", label: "नि:शुल्क जांच" },
        { num: "90 दिन", label: "वारंटी गारंटी" },
        { num: "15-30 मिनट", label: "फास्ट रिपेयर" },
      ],
    },
  ];

  const slides = isHi ? slidesHi : slidesEn;
  const count = slides.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [phase, setPhase] = useState<AnimPhase>("right");
  const [timerProgress, setTimerProgress] = useState(0); // 0 to 100%
  const touchX = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goTo = (i: number) => {
    if (i >= 0 && i < count) {
      setIndex(i);
    }
  };

  /**
   * Orchestrated Animation Lifecycle per user instruction:
   * 1. First: Right side image loads & glides in (t = 0)
   * 2. Then: Left side words cascade in (t = 450ms)
   * 3. Then: Numbers start counting from 0 to last (t = 1100ms)
   * 4. Once all came: Timer starts filling (t = 1950ms)
   * 5. When timer reaches 100%: moves to next slide!
   */
  useEffect(() => {
    // Reset sequence on slide change
    setPhase("right");
    setTimerProgress(0);

    const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      setPhase("timer");
      return;
    }

    // Phase 2: Words come in after right asset has started loading
    const tWords = setTimeout(() => {
      setPhase("left");
    }, 450);

    // Phase 3: Numbers start counting up from 0
    const tNumbers = setTimeout(() => {
      setPhase("numbers");
    }, 1100);

    // Phase 4: Once all came, timer starts!
    const tTimer = setTimeout(() => {
      setPhase("timer");
    }, 1950);

    return () => {
      clearTimeout(tWords);
      clearTimeout(tNumbers);
      clearTimeout(tTimer);
    };
  }, [index]);

  /**
   * Slide Countdown Timer: ONLY active once all numbers and words have finished
   */
  useEffect(() => {
    if (phase !== "timer" || paused) return;

    const step = (TICK_INTERVAL / DWELL_MS) * 100;

    const interval = setInterval(() => {
      setTimerProgress((prevProg) => {
        if (prevProg >= 100) {
          clearInterval(interval);
          next();
          return 0;
        }
        return Math.min(100, prevProg + step);
      });
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [phase, paused, next]);

  const isLeftVisible = phase === "left" || phase === "numbers" || phase === "timer";
  const isNumbersActive = phase === "numbers" || phase === "timer";

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-carbon text-slate-900 dark:text-white pt-20 sm:pt-24 select-none"
      aria-roledescription="carousel"
      aria-label="DN Mobile Repairs Slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        if (touchX.current != null) {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx > 50) prev();
          else if (dx < -50) next();
        }
        touchX.current = null;
        setPaused(false);
      }}
      tabIndex={0}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#DD052B]/10 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none z-10" />

      {/* Main Slide Stack - Compacted height so stats numbers fit comfortably on laptop screens */}
      <div className="relative w-full h-[550px] sm:h-[580px] lg:h-[610px] xl:h-[630px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              i === index
                ? "opacity-100 scale-100 z-10 pointer-events-auto"
                : "opacity-0 scale-105 z-0 pointer-events-none"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            {/* Background Image with Bright Daylight Panorama */}
            <Image
              src={slide.img}
              alt={slide.titleA}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center brightness-100 contrast-105"
            />
            {/* Scrim: Gentle daylight wash on the left for dark headline readability, plus bottom dark gradient for glowing white stats */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent dark:from-carbon/95 dark:via-carbon/75 dark:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Slide Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-1 sm:pt-2 pb-2 sm:pb-3">
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
                
                {/* Left Column (7 cols): Words animate in during Phase 2 */}
                <div className="md:col-span-7">
                  {/* Live Pill / Date Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-white/[0.08] border border-slate-200 dark:border-white/15 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-2 sm:mb-2.5 shadow-sm transition-all duration-500 ease-out transform ${
                      isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{slide.badge}</span>
                  </div>

                  {/* Eyebrow with decorative red diagonal slash */}
                  <div
                    className={`flex items-center gap-2 mb-1.5 sm:mb-2 transition-all duration-500 delay-75 ease-out transform ${
                      isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                    }`}
                  >
                    <span className="w-7 h-1 bg-[#DD052B] -rotate-12 rounded-full inline-block" />
                    <p className="text-[#DD052B] tracking-[0.2em] text-[11px] sm:text-xs font-black uppercase">
                      {slide.eyebrow}
                    </p>
                  </div>

                  {/* Big Bold Headline matching Mahindra typography and red accents */}
                  <div className="relative">
                    {/* Floating red diagonal slash accent like Mahindra */}
                    <span
                      className={`hidden sm:block absolute -top-3 left-48 w-14 h-1 bg-[#DD052B] -rotate-12 rounded-full opacity-90 transition-opacity duration-500 delay-150 ${
                        isLeftVisible ? "opacity-90" : "opacity-0"
                      }`}
                    />
                    {i === 0 ? (
                      <h1 className="text-2xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.1rem] font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight uppercase overflow-hidden">
                        <span
                          className={`block transition-all duration-600 delay-100 ease-out transform ${
                            isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }`}
                        >
                          {slide.titleA}
                        </span>
                        <span
                          className={`block text-[#DD052B] transition-all duration-600 delay-200 ease-out transform ${
                            isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }`}
                        >
                          {slide.titleB}
                        </span>
                        {slide.titleC && (
                          <span
                            className={`block text-slate-900 dark:text-white transition-all duration-600 delay-300 ease-out transform ${
                              isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                          >
                            {slide.titleC}
                          </span>
                        )}
                      </h1>
                    ) : (
                      <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.1rem] font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight uppercase overflow-hidden">
                        <span
                          className={`block transition-all duration-600 delay-100 ease-out transform ${
                            isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }`}
                        >
                          {slide.titleA}
                        </span>
                        <span
                          className={`block text-[#DD052B] transition-all duration-600 delay-200 ease-out transform ${
                            isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }`}
                        >
                          {slide.titleB}
                        </span>
                        {slide.titleC && (
                          <span
                            className={`block text-slate-900 dark:text-white transition-all duration-600 delay-300 ease-out transform ${
                              isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                          >
                            {slide.titleC}
                          </span>
                        )}
                      </h2>
                    )}
                  </div>

                  <p
                    className={`text-slate-700 dark:text-slate-200 text-xs sm:text-sm lg:text-base mt-2 sm:mt-2.5 max-w-xl leading-relaxed font-medium transition-all duration-600 delay-400 ease-out transform ${
                      isLeftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                  >
                    {slide.desc}
                  </p>

                  {/* Action Buttons */}
                  <div
                    className={`flex flex-wrap items-center gap-3 mt-3 sm:mt-4 transition-all duration-500 delay-500 ease-out transform ${
                      isLeftVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                    }`}
                  >
                    <a
                      href={slide.href1}
                      className="bg-[#DD052B] hover:bg-[#b80424] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center gap-2 group shadow-xl shadow-red-700/25 transition-all hover:scale-[1.02]"
                    >
                      <span>{slide.cta1}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a
                      href={slide.href2}
                      className="bg-white/90 hover:bg-white text-slate-900 dark:text-white dark:bg-white/10 dark:hover:bg-white/15 border border-slate-300 dark:border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-md flex items-center gap-2 transition-all hover:border-[#DD052B] shadow-sm"
                    >
                      <svg className="w-4 h-4 text-[#DD052B]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{slide.cta2}</span>
                    </a>
                  </div>

                  {/* Mobile-only preview card (loads first on mobile devices) */}
                  <div
                    className={`md:hidden mt-5 p-2.5 rounded-xl bg-white/90 dark:bg-white/[0.08] border border-slate-200 dark:border-white/10 backdrop-blur-md flex items-center gap-3 shadow-sm transition-all duration-600 ease-out transform ${
                      i === index ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 dark:bg-black/60 shrink-0 border border-slate-200 dark:border-white/10">
                      <Image
                        src={slide.sideImg}
                        alt={slide.sideImgAlt}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-black text-slate-900 dark:text-white truncate flex items-center gap-1.5">
                        <span>{slide.sideBadgeIcon}</span>
                        <span className="truncate">{slide.sideBadgeText}</span>
                      </p>
                      <p className="text-[10px] text-[#DD052B] font-bold uppercase tracking-wider">
                        {isHi ? "आधिकारिक DN Mobiles फ्लायर" : "Official DN Mobiles Lab Asset"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column (5 cols): Right side image loads FIRST as requested */}
                <div className="hidden md:flex md:col-span-5 justify-center items-center">
                  <div
                    className={`w-full flex justify-center transition-all duration-700 ease-out transform ${
                      i === index ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
                    }`}
                  >
                    {i === 0 ? (
                      <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden border border-white/80 dark:border-white/20 shadow-xl bg-white/85 dark:bg-black/65 backdrop-blur-xl p-4 sm:p-5 text-slate-900 dark:text-white transition-all hover:scale-[1.01]">
                        <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80 dark:border-white/10 mb-3 gap-2">
                          <LiveStoreStatus variant="compact" className="text-slate-800 dark:text-slate-200 text-xs" />
                          <div className="relative h-6 w-24 flex items-center shrink-0">
                            <Image
                              src="/images/logo-light.png"
                              alt="DN Mobiles"
                              fill
                              sizes="96px"
                              className="object-contain object-right dark:hidden"
                            />
                            <Image
                              src="/images/logo-dark.png"
                              alt="DN Mobiles"
                              fill
                              sizes="96px"
                              className="object-contain object-right hidden dark:block"
                            />
                          </div>
                        </div>
                        <h3 className="text-base font-black tracking-tight text-slate-900 dark:text-white mb-1 leading-snug">
                          18 Domeyer Court, Port Augusta
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                          {isHi
                            ? "स्पेंसर गल्फ और क्षेत्रीय दक्षिण ऑस्ट्रेलिया का प्रमुख मोबाइल, टैबलेट व iPad रिपेयर लैब।"
                            : "Serving all regional Spencer Gulf communities with factory-calibrated iPhone, Samsung, iPad & tablet repairs."}
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 text-[11px] font-bold pt-2.5 border-t border-slate-200/80 dark:border-white/10">
                          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                            <span>✓ {isHi ? "100% फ्री जांच" : "100% Free Diag"}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#DD052B]">
                            <span>✓ {isHi ? "90 दिन वारंटी" : "90-Day Warranty"}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                            <span>✓ {isHi ? "उसी दिन डिलीवरी" : "Same-Day Pickup"}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                            <span>✓ {isHi ? "ग्रेड-ए पार्ट्स" : "Grade-A Parts"}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden border border-white/80 dark:border-white/20 shadow-xl bg-white/85 dark:bg-gradient-to-b dark:from-white/10 dark:via-black/50 dark:to-black/85 backdrop-blur-xl p-2.5 group hover:border-[#DD052B]/60 transition-all duration-500">
                        <div className="relative rounded-xl overflow-hidden bg-white dark:bg-carbon/95 border border-slate-200/80 dark:border-white/10 shadow-inner">
                          <div className="relative w-full h-[230px] sm:h-[250px] lg:h-[265px] xl:h-[280px] flex items-center justify-center p-2">
                            <Image
                              src={slide.sideImg}
                              alt={slide.sideImgAlt}
                              fill
                              className="object-contain p-1.5 drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                              sizes="400px"
                            />
                          </div>
                          <div className="px-3.5 py-2 bg-slate-100/90 dark:bg-black/90 backdrop-blur-md border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-900 dark:text-white">
                            <span className="font-extrabold flex items-center gap-1.5 truncate text-[11px]">
                              <span>{slide.sideBadgeIcon}</span>
                              <span className="truncate">{slide.sideBadgeText}</span>
                            </span>
                            <span className="text-[10px] uppercase font-black tracking-wider text-[#DD052B] shrink-0 ml-2">
                              DN MOBILES
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Big Statistics Numbers Overlay - Lifted UP so animation is immediately visible above fold */}
              <div className="pt-3 sm:pt-4 pb-1 border-t border-white/25">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl">
                  {slide.stats.map((st, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex flex-col transition-all duration-500 ease-out transform ${
                        isNumbersActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-40 translate-y-2"
                      }`}
                    >
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-md leading-none">
                        {i === index ? (
                          <StatCounter target={st.num} active={isNumbersActive} />
                        ) : (
                          st.num
                        )}
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white/90 mt-1 drop-shadow-sm">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom-right Red Navigation Arrows + Live Timer Countdown */}
        <div className="absolute right-4 sm:right-8 bottom-3 sm:bottom-4 z-30 flex items-center gap-2.5">
          {/* Live Timer Countdown Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white shadow-xl">
            <span
              className={`w-2 h-2 rounded-full ${
                phase === "timer" && !paused
                  ? "bg-emerald-400 animate-pulse"
                  : phase === "timer" && paused
                  ? "bg-amber-400"
                  : "bg-red-400"
              }`}
            />
            <span className="font-mono text-[10px] font-black uppercase tracking-wider">
              {phase === "timer"
                ? paused
                  ? isHi ? "रोक दिया गया" : "Paused"
                  : isHi
                  ? `अगला स्लाइड ${Math.max(1, Math.ceil((100 - timerProgress) * (DWELL_MS / 100000)))}s`
                  : `Next in ${Math.max(1, Math.ceil((100 - timerProgress) * (DWELL_MS / 100000)))}s`
                : isHi
                ? "एनीमेशन..."
                : "Animating..."}
            </span>
          </div>

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-xl bg-[#DD052B] hover:bg-[#b80424] text-white flex items-center justify-center transition-all shadow-xl shadow-red-700/30 group active:scale-95"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-11 h-11 rounded-xl bg-[#DD052B] hover:bg-[#b80424] text-white flex items-center justify-center transition-all shadow-xl shadow-red-700/30 group active:scale-95"
          >
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Beam Tabs with Synchronized Timer Progress */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 -mt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-2 rounded-2xl bg-white/95 dark:bg-obsidian/95 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-xl">
          {slides.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`text-left p-2.5 sm:p-3 rounded-xl transition-all relative overflow-hidden group ${
                i === index
                  ? "bg-slate-100 dark:bg-white/10 border border-[#DD052B]/60 shadow-sm"
                  : "hover:bg-slate-50 dark:hover:bg-white/[0.04] border border-transparent"
              }`}
            >
              {/* Active beam progress indicator: Starts filling ONLY when timer phase begins */}
              {i === index && (
                <div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#DD052B] via-rose-500 to-amber-400 transition-[width] duration-75 ease-linear rounded-full"
                  style={{
                    width: `${timerProgress}%`,
                  }}
                />
              )}
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] font-black text-[#DD052B] tracking-widest">
                  0{i + 1}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 truncate ml-2 font-medium">
                  {s.tabSubtitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate">
                {s.tabTitle}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Clean White Quick-Links Bar Matching Reference Bottom Navigation */}
      <div className="relative z-20 bg-white/95 dark:bg-carbon/95 border-t border-slate-200 dark:border-white/10 backdrop-blur-md py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          {/* Left Red Action Pill */}
          <a
            href="#contact"
            className="shrink-0 px-5 py-2 rounded-full bg-[#DD052B] hover:bg-[#b80424] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-red-700/20 transition-all hover:scale-105"
          >
            <span>{isHi ? "रिपेयर बुक 💬" : "Book Repair 💬"}</span>
          </a>

          {/* Service Links Bar */}
          <ul className="flex items-center gap-6 text-xs font-bold text-slate-700 dark:text-slate-300">
            <li className="shrink-0">
              <Link href="/services/screen-replacement" className="hover:text-[#DD052B] transition-colors flex items-center gap-1.5">
                <span className="text-[#DD052B]">✦</span>
                <span>{isHi ? "स्क्रीन रिप्लेसमेंट ($79 से)" : "Screen Replacement (From $79)"}</span>
              </Link>
            </li>
            <li className="shrink-0">
              <Link href="/services/battery-replacement" className="hover:text-[#DD052B] transition-colors flex items-center gap-1.5">
                <span className="text-[#DD052B]">✦</span>
                <span>{isHi ? "बैटरी बदलना ($59 से)" : "Battery Replacement (From $59)"}</span>
              </Link>
            </li>
            <li className="shrink-0">
              <Link href="/services/back-glass-replacement" className="hover:text-[#DD052B] transition-colors flex items-center gap-1.5">
                <span className="text-[#DD052B]">✦</span>
                <span>{isHi ? "लेजर बैक ग्लास ($49 से)" : "Laser Back Glass (From $49)"}</span>
              </Link>
            </li>
            <li className="shrink-0">
              <Link href="/services/ipad-repair" className="hover:text-[#DD052B] transition-colors flex items-center gap-1.5">
                <span className="text-[#DD052B]">✦</span>
                <span>{isHi ? "iPad व टैबलेट रिपेयर" : "iPad & Tablet Repair"}</span>
              </Link>
            </li>
            <li className="shrink-0">
              <a href="#contact" className="hover:text-[#DD052B] transition-colors flex items-center gap-1.5">
                <span className="text-[#DD052B]">✦</span>
                <span>{isHi ? "पॉप-अप ऐड्स व वायरस रिमूवल" : "Pop-Up Ads & Virus Clean"}</span>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#contact" className="hover:text-[#DD052B] transition-colors flex items-center gap-1.5">
                <span className="text-[#DD052B]">✦</span>
                <span>{isHi ? "पिकअप व डिलीवरी सर्विस" : "Pick-Up & Drop-Off Service"}</span>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#estimator" className="hover:text-[#DD052B] transition-colors flex items-center gap-1.5">
                <span className="text-[#DD052B]">✦</span>
                <span>{isHi ? "100% फ्री डायग्नोस्टिक्स" : "100% Free Diagnostics"}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
