"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

interface FeedbackScreenshot {
  src: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  date: string;
}

const FEEDBACK_SCREENSHOTS: FeedbackScreenshot[] = [
  {
    src: "/images/feedback/feedback-1.jpg",
    titleEn: "Port Augusta Rant & Rave — Stacey-Lee & Hayden",
    titleHi: "पोर्ट ऑगस्टा रेंट एंड रेव — स्टेसी-ली व हेडन",
    descEn: "Stacey-Lee: 'Repaired my iPhone within 20 mins with a new screen. Great service.' · Hayden: 'Travelled to Port Pirie to get parts. Can't recommend enough.'",
    descHi: "स्टेसी-ली: '20 मिनट में नई स्क्रीन के साथ iPhone ठीक किया। बेहतरीन सेवा।' · हेडन: 'पार्ट्स लाने के लिए पोर्ट पिरी तक गए। पूरी सिफारिश।'",
    date: "Aug 2024",
  },
  {
    src: "/images/feedback/feedback-2.jpg",
    titleEn: "Company Tablets & Phone Screen Praises",
    titleHi: "कंपनी टैबलेट्स व फोन स्क्रीन रिपेयर की प्रशंसा",
    descEn: "Sunny Singh: 'We used for company tablets. Best service and price 5 stars' · Jeremy Prieditis: 'Best phone repair guy in town hands down 100%' · Jake Smedinga: 'Amazing price and service'",
    descHi: "सन्नी सिंह: 'कंपनी के टैबलेट्स ठीक करवाए, 5 स्टार सर्विस' · जेरेमी: 'शहर का बेस्ट फोन रिपेयर गाय 100%' · जेक: 'शानदार दाम और काम'",
    date: "Aug 2024",
  },
  {
    src: "/images/feedback/feedback-3.jpg",
    titleEn: "Tanya, William, Regina & Craig Reviews",
    titleHi: "तान्या, विलियम, रेजिना व क्रेग की समीक्षाएं",
    descEn: "William Bejah: 'Very professional, explains very clearly even little things' · Craig: 'Honest and professional' · Marsha: 'Son had screen and charging port fixed, so cheap'",
    descHi: "विलियम: 'बेहद प्रोफेशनल, छोटी-छोटी बातें भी साफ समझाते हैं' · क्रेग: 'ईमानदार और प्रोफेशनल' · मार्शा: 'स्क्रीन व चार्जिंग पोर्ट बहुत सस्ते में ठीक हुआ'",
    date: "Aug 2024",
  },
  {
    src: "/images/feedback/feedback-4.jpg",
    titleEn: "Laptop Screen & Friendly Local Service",
    titleHi: "लैपटॉप स्क्रीन रिप्लेसमेंट व घरेलू आदर-सत्कार",
    descEn: "Debra Steele: 'Excellent workmanship replacing screen on my laptop. Highly recommend' · Tammy Bunder: 'Quick and very friendly. Also got a nice meal from his wife.. bonus!'",
    descHi: "डेबरा: 'लैपटॉप स्क्रीन बदलने में शानदार काम, पूरी सिफारिश' · टैमी: 'बहुत तेज और दोस्ताना सेवा, साथ में स्वादिष्ट भोजन भी मिला!'",
    date: "Sep 2024",
  },
  {
    src: "/images/feedback/feedback-5.jpg",
    titleEn: "Samsung A15, Dual Mobiles & Prompt Fixes",
    titleHi: "Samsung A15, दो मोबाइल रिपेयर व तुरंत समाधान",
    descEn: "Cameron Dadleh: 'Got my Samsung A15 screen fixed today, amazing job screen is perfect' · Imran Mughal: 'Thanks Naveen for taking care of two mobiles for me. Excellent job'",
    descHi: "कैमरन: 'Samsung A15 स्क्रीन आज ही ठीक करवाई, एकदम परफेक्ट काम' · इमरान: 'दो फोन इतने अच्छे से ठीक करने के लिए शुक्रिया नवीन'",
    date: "Sep 2024",
  },
  {
    src: "/images/feedback/feedback-6.jpg",
    titleEn: "Community Enquiries & iPad Screen Requests",
    titleHi: "समुदाय की पूछताछ व iPad स्क्रीन रिपेयर ऑर्डर्स",
    descEn: "Port Augusta locals actively recommending Naveen across the regional South Australia community network.",
    descHi: "पोर्ट ऑगस्टा और आसपास के क्षेत्रों से स्थानीय ग्राहकों द्वारा लगातार सिफारिश और भरोसेमंद संदेश।",
    date: "2024",
  },
];

export default function Testimonials() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const [selectedImage, setSelectedImage] = useState<FeedbackScreenshot | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  const reviewsEn = [
    {
      name: "Stacey-Lee Parkinson",
      city: "Port Augusta",
      rating: 5,
      device: "iPhone Screen Replacement",
      badge: "20-Min Turnaround",
      text: "Repaired my iPhone within 20 mins with a new screen. Great service. Super fast turnaround and reasonable pricing. Highly recommend 😃😃",
    },
    {
      name: "Hayden Smyth",
      city: "Port Augusta",
      rating: 5,
      device: "Emergency Device Repair",
      badge: "Above & Beyond Care",
      text: "Stoked with the service. Parts didn't arrive on time so he put in the extra effort and travelled all the way to Port Pirie to get the parts. Can't recommend enough. That is true local dedication.",
    },
    {
      name: "Sunny Singh",
      city: "Port Augusta",
      rating: 5,
      device: "Company Fleet Tablets",
      badge: "Commercial Client",
      text: "Great guy. We used DN Mobiles for our company's tablets. Best service and price in town, five stars all the way!",
    },
    {
      name: "Kara Louise",
      city: "Port Augusta",
      rating: 5,
      device: "Multiple Phone Repairs",
      badge: "Repeat Customer",
      text: "I can't recommend DN Mobiles enough! He's helped me out multiple times with my phone, always with great prices and such quick, reliable service. Beyond being skilled and affordable, he's genuinely kind and patient.",
    },
    {
      name: "Jake Smedinga",
      city: "Port Augusta",
      rating: 5,
      device: "Express Screen Replacement",
      badge: "Verified Local",
      text: "Absolutely amazing price and service! Thank you so much again. Definitely recommend Naveen to anyone needing phone screen repairs.",
    },
    {
      name: "Cameron Dadleh",
      city: "Port Augusta",
      rating: 5,
      device: "Samsung Galaxy A15 Screen",
      badge: "Same-Day Fix",
      text: "Got my Samsung A15 screen fixed today from here. Amazing job, phone screen is completely perfect and brand new again! 👌",
    },
  ];

  const reviewsHi = [
    {
      name: "Stacey-Lee Parkinson",
      city: "पोर्ट ऑगस्टा",
      rating: 5,
      device: "iPhone स्क्रीन बदलना",
      badge: "20-मिनट एक्सप्रेस",
      text: "मेरा iPhone केवल 20 मिनट में नई स्क्रीन के साथ तैयार कर दिया। शानदार सेवा, सुपरफास्ट समय और बेहद वाजिब दाम। पूरी सिफारिश 😃😃",
    },
    {
      name: "Hayden Smyth",
      city: "पोर्ट ऑगस्टा",
      rating: 5,
      device: "आपातकालीन डिवाइस रिपेयर",
      badge: "समर्पित लोकल सेवा",
      text: "सेवा से बेहद खुश। पार्ट्स समय पर नहीं पहुंचे तो नवीन खुद पोर्ट पिरी तक जाकर पार्ट्स लाए। काम के प्रति ऐसा सच्चा समर्पण मैंने कहीं नहीं देखा।",
    },
    {
      name: "Sunny Singh",
      city: "पोर्ट ऑगस्टा",
      rating: 5,
      device: "कंपनी टैबलेट्स रिपेयर",
      badge: "कमर्शियल क्लाइंट",
      text: "शानदार इंसान। हमने अपनी कंपनी के कई टैबलेट्स ठीक करवाए। शहर में सबसे बढ़िया सेवा और सबसे किफायती दाम, पूरे 5 स्टार!",
    },
    {
      name: "Kara Louise",
      city: "पोर्ट ऑगस्टा",
      rating: 5,
      device: "कई फोन रिपेयर",
      badge: "नियमित ग्राहक",
      text: "DN Mobiles की सिफारिश मैं जितनी भी करूं, कम है! उन्होंने कई बार मेरी मदद की, हर बार बेहतरीन दाम और भरोसेमंद काम। बहुत धैर्यवान और विनम्र इंसान।",
    },
    {
      name: "Jake Smedinga",
      city: "पोर्ट ऑगस्टा",
      rating: 5,
      device: "एक्सप्रेस स्क्रीन रिपेयर",
      badge: "सत्यापित लोकल",
      text: "लाजवाब दाम और शानदार सेवा! एक बार फिर बहुत धन्यवाद। अगर किसी को भी स्क्रीन ठीक करवानी हो तो नवीन के पास ही जाएं।",
    },
    {
      name: "Cameron Dadleh",
      city: "पोर्ट ऑगस्टा",
      rating: 5,
      device: "Samsung Galaxy A15 स्क्रीन",
      badge: "उसी दिन तैयार",
      text: "मैंने आज अपना Samsung A15 यहां से ठीक करवाया। बहुत ही उम्दा काम, स्क्रीन एकदम नई जैसी हो गई है! 👌",
    },
  ];

  const reviews = isHi ? reviewsHi : reviewsEn;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f8fafc] dark:bg-carbon text-dark dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {isHi ? "सत्यापित ग्राहक समीक्षाएं" : "Verified Customer Reviews"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {isHi ? (
                <>
                  पोर्ट ऑगस्टा का <br className="hidden sm:inline" />
                  <span className="text-brand">सच्चा भरोसा।</span>
                </>
              ) : (
                <>
                  Real Reviews from <br className="hidden sm:inline" />
                  <span className="text-brand">Port Augusta Locals.</span>
                </>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              {isHi
                ? "फेसबुक और 'Port Augusta Rant & Rave' कम्युनिटी ग्रुप पर हमारे काम की वास्तविक समीक्षाएं देखें। कोई फर्जी समीक्षा नहीं — 100% असली स्थानीय लोग।"
                : "Read genuine feedback published by local Port Augusta residents on Facebook and the regional Rant & Rave community. Unfiltered proof of fast, honest service."}
            </p>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="p-4 rounded-2xl bg-white dark:bg-obsidian border border-slate-200 dark:border-line-dark shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-black text-xl">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {"★★★★★"}
              </div>
              <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                {isHi ? "Facebook पर 100% पॉजिटिव रिव्यू" : "100% 5-Star Reviews on Facebook"}
              </p>
              <a
                href="https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-extrabold text-brand hover:underline inline-flex items-center gap-1"
              >
                <span>{isHi ? "Facebook पर सभी समीक्षाएं देखें" : "View on Facebook"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Review Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-obsidian p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-line-dark shadow-xs hover:shadow-xl hover:border-brand/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {"★★★★★"}
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold text-[10.5px] border border-emerald-200 dark:border-emerald-500/20">
                    {rev.badge}
                  </span>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-line-dark/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-900 dark:bg-carbon text-white font-black text-xs flex items-center justify-center border border-slate-200 dark:border-white/10">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-slate-400 dark:text-slate-500 text-[11px]">
                      {rev.city || (isHi ? "पोर्ट ऑगस्टा, SA" : "Port Augusta, SA")}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  {rev.device}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Proof Screenshots Section (User explicit request) */}
        <div className="mt-8 pt-12 border-t border-slate-200/80 dark:border-line-dark">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {isHi ? "वास्तविक फेसबुक स्क्रीनशॉट" : "Raw Facebook Group Proof"}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {isHi ? "ग्राहकों के वास्तविक फीडबैक स्क्रीनशॉट" : "Real Community Feedback Screenshots"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
                {isHi
                  ? "किसी भी स्क्रीनशॉट पर क्लिक करके बड़ा करें और वास्तविक तारीखों व टिप्पणियों को पढ़ें।"
                  : "Click any image below to zoom in and read the authentic comments, dates, and names."}
              </p>
            </div>

            <a
              href="https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:underline"
            >
              <span>{isHi ? "फेसबुक ग्रुप में सीधे देखें" : "Open Facebook Community Post"}</span>
              <span>→</span>
            </a>
          </div>

          {/* Horizontal / Grid Gallery of Feedback Screenshots */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {FEEDBACK_SCREENSHOTS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group relative flex flex-col rounded-xl overflow-hidden border border-slate-200 dark:border-line-dark bg-white dark:bg-obsidian shadow-xs hover:shadow-xl hover:border-brand/50 transition-all text-left focus:outline-hidden focus:ring-2 focus:ring-brand"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.src}
                    alt={isHi ? item.titleHi : item.titleEn}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Zoom Badge */}
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[10px] font-extrabold text-amber-300 block">★★★★★</span>
                    <p className="text-[11px] font-black text-white leading-tight line-clamp-2">
                      {isHi ? item.titleHi : item.titleEn}
                    </p>
                  </div>
                </div>

                <div className="p-2.5">
                  <span className="text-[9.5px] font-bold text-slate-400 block mb-0.5">{item.date}</span>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-tight">
                    {isHi ? item.descHi : item.descEn}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox Zoom Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 flex items-center justify-between border-b border-white/10 bg-slate-950/80">
                <div>
                  <h4 className="text-sm font-black text-white">
                    {isHi ? selectedImage.titleHi : selectedImage.titleEn}
                  </h4>
                  <p className="text-xs text-amber-400 font-bold">
                    {isHi ? "सत्यापित फेसबुक कम्युनिटी स्क्रीनशॉट" : "Verified Facebook Post Screenshot"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="relative flex-1 overflow-y-auto p-2 bg-black flex items-center justify-center">
                <div className="relative w-full aspect-[9/19] max-h-[70vh]">
                  <Image
                    src={selectedImage.src}
                    alt={isHi ? selectedImage.titleHi : selectedImage.titleEn}
                    fill
                    sizes="(max-width: 768px) 90vw, 500px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs text-slate-300 line-clamp-1 pr-4">
                  {isHi ? selectedImage.descHi : selectedImage.descEn}
                </p>
                <a
                  href="https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg btn-mahindra-red text-white text-xs font-bold shrink-0"
                >
                  {isHi ? "Facebook पर देखें" : "View Facebook"}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
