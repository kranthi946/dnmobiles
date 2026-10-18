"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Process() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const stepsEn = [
    {
      num: "01",
      title: "Free In-Lab Diagnostics",
      badge: "Zero Obligation",
      desc: "Bring your device to 18 Domeyer Court or request free local pickup. We perform a complete digital multi-point check to pinpoint the exact issue.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Fixed Upfront Quotation",
      badge: "No Hidden Costs",
      desc: "You receive an honest, itemized quotation detailing the required parts and exact repair timeframe. You decide whether to proceed.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Precision In-House Repair",
      badge: "Grade-A Parts",
      desc: "We perform the repair in our anti-static workshop using calibrated tools, factory-grade adhesive seals, and premium replacement components.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "24-Point Comprehensive QA",
      badge: "Quality Verified",
      desc: "Every device undergoes rigorous testing — touch response, TrueTone display, biometric security, camera focus, microphone, and charging draw.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Handover & 90-Day Warranty",
      badge: "Guaranteed Care",
      desc: "Collect your device restored to peak performance. We issue a comprehensive 90-day parts and labor warranty with direct support.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "06",
      title: "Free Local Port Augusta Delivery",
      badge: "Express Drop-off",
      desc: "Can't leave work or home? We provide complimentary pickup and doorstep delivery anywhere across the Port Augusta township.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  const stepsHi = [
    {
      num: "01",
      title: "नि:शुल्क लैब डायग्नोस्टिक्स",
      badge: "बिना किसी बाध्यता",
      desc: "अपना फोन 18 डोमेयर कोर्ट लाएं या फ्री लोकल पिकअप का अनुरोध करें। हम पूरी डिजिटल मल्टी-पॉइंट जांच करके सटीक समस्या पहचानते हैं।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "पारदर्शी फिक्स्ड कोटेशन",
      badge: "कोई छिपा शुल्क नहीं",
      desc: "काम शुरू होने से पहले आपको आवश्यक पार्ट्स और रिपेयर समय के साथ ईमानदार, विस्तृत कोटेशन मिलता है। आप तय करते हैं।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "इन-हाउस प्रिसिजन रिपेयर",
      badge: "ग्रेड-ए पार्ट्स",
      desc: "हम अपने एंटी-स्टैटिक वर्कशॉप में कैलिब्रेटेड टूल्स, ओरिजिनल एडहेसिव सील और प्रीमियम कंपोनेंट्स के साथ रिपेयर करते हैं।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "24-पॉइंट विस्तृत QA टेस्टिंग",
      badge: "क्वालिटी वेरिफाइड",
      desc: "हर डिवाइस की कठोर टेस्टिंग होती है — टच रिस्पॉन्स, ट्रू-टोन डिस्प्ले, फेस आईडी/फिंगरप्रिंट, कैमरा, माइक और चार्जिंग करंट।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "हैंडओवर व 90-दिन वारंटी",
      badge: "गारंटीड केयर",
      desc: "अपने फोन को बिल्कुल नए जैसी कंडीशन में वापस पाएं। हम 90 दिन की पार्ट्स व कारीगरी वारंटी और डायरेक्ट सपोर्ट देते हैं।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "06",
      title: "नि:शुल्क लोकल पोर्ट ऑगस्टा डिलीवरी",
      badge: "एक्सप्रेस ड्रॉप-ऑफ",
      desc: "काम या घर से बाहर नहीं आ सकते? हम पूरे पोर्ट ऑगस्टा में कॉम्प्लिमेंट्री पिकअप और डोरस्टेप डिलीवरी की सुविधा देते हैं।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  const steps = isHi ? stepsHi : stepsEn;

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 dark:bg-carbon text-dark dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            {isHi ? "प्रिसिजन रिपेयर मानक" : "The Precision Standard"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {isHi ? (
              <>
                हम आपका फोन कैसे ठीक करते हैं, <br className="hidden sm:inline" />
                <span className="text-brand">चरण दर चरण।</span>
              </>
            ) : (
              <>
                How We Fix Your Device, <br className="hidden sm:inline" />
                <span className="text-brand">Step by Step.</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            {isHi
              ? "हम एक इंजीनियरिंग लैब की सटीकता के साथ काम करते हैं। कोई समझौता नहीं, कोई नकली पार्ट्स नहीं, और जब तक आप कोटेशन स्वीकृत न करें, तब तक कोई शुल्क नहीं।"
              : "We operate with the rigor of an engineering lab. No cutting corners, no counterfeit components, and zero charges unless you approve the quote."}
          </p>
        </div>

        {/* 6 Step Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white dark:bg-obsidian border border-slate-200 dark:border-line-dark rounded-2xl p-6 sm:p-7 relative hover:border-brand/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-line-dark flex items-center justify-center group-hover:bg-brand/10 group-hover:border-brand/30 transition-colors">
                    {s.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      {s.badge}
                    </span>
                    <span className="font-mono font-black text-2xl text-slate-300 dark:text-slate-700 group-hover:text-brand transition-colors">
                      {s.num}
                    </span>
                  </div>
                </div>

                <h3 className="font-black text-slate-900 dark:text-white text-lg sm:text-xl tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-line-dark/60 flex items-center text-xs font-bold text-brand gap-1 group-hover:translate-x-1 transition-transform">
                <span>{isHi ? "यह चरण बुक करें" : "Book this stage"}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 p-8 rounded-2xl bg-carbon text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-line-dark">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-brand block mb-1">
              {isHi ? "अपना फोन ठीक करवाने के लिए तैयार हैं?" : "Ready to restore your phone?"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isHi ? "आज ही अपनी नि:शुल्क जांच करवाएं" : "Get Your Free Device Inspection Today"}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              {isHi
                ? "18 डोमेयर कोर्ट पर सुबह 8 से रात 8 बजे के बीच कभी भी आएं, या तुरंत प्रायोरिटी बुकिंग करें।"
                : "Walk in anytime between 8 AM and 8 PM at 18 Domeyer Court, or schedule a priority booking."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="btn-mahindra-red text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg"
            >
              {isHi ? "जांच बुक करें →" : "Book Inspection Now →"}
            </a>
            <a
              href="https://wa.me/61420655514"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-xs sm:text-sm font-bold text-white bg-white/5 transition-colors"
            >
              {isHi ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
