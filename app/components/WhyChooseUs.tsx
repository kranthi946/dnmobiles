"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const advantagesEn = [
    {
      title: "100% In-House Port Augusta Workshop",
      desc: "Unlike other stores that ship devices to Adelaide for weeks, our repairs are done on-site at 18 Domeyer Court. Most are ready the same day.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Zero-Obligation Free Diagnostics",
      desc: "Every device receives a full hardware diagnostic check before any commitment. We tell you the fault and the exact cost upfront.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Strict Data Confidentiality & Security",
      desc: "Your photos, messages, contacts, and banking apps are completely safe. We never wipe or access your personal data during hardware fixes.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Calibrated Grade-A Certified Parts",
      desc: "We source high-specification replacement screens, battery cells, and ICs that preserve original touch precision, TrueTone, and fast charging.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Complimentary Pickup & Delivery",
      desc: "Busy with family or work? We pick up your damaged phone and deliver it back repaired anywhere across Port Augusta free of charge.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      title: "No-Fix, No-Fee Guarantee",
      desc: "If a water-damaged or deeply faulted phone cannot be restored to working condition, you pay nothing. Zero risk.",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const advantagesHi = [
    {
      title: "100% इन-हाउस पोर्ट ऑगस्टा वर्कशॉप",
      desc: "अन्य स्टोर्स की तरह नहीं जो हफ्ते भर के लिए फोन एडिलेड भेजते हैं, हमारे सारे रिपेयर 18 डोमेयर कोर्ट पर ही किए जाते हैं। अधिकांश उसी दिन तैयार।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "बिना किसी बाध्यता नि:शुल्क जांच",
      desc: "किसी भी कमिटमेंट से पहले हर डिवाइस की पूरी हार्डवेयर जांच होती है। हम खराबी और सटीक खर्च पहले ही साफ बताते हैं।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "100% डेटा सुरक्षा व गोपनीयता",
      desc: "आपकी तस्वीरें, संदेश, संपर्क और बैंकिंग ऐप्स पूरी तरह सुरक्षित हैं। हार्डवेयर रिपेयर के दौरान हम आपका व्यक्तिगत डेटा कभी नहीं छूते।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "कैलिब्रेटेड ग्रेड-ए सर्टिफाइड पार्ट्स",
      desc: "हम हाई-स्पेसिफिकेशन स्क्रीन, बैटरी और आईसी लगाते हैं जो ओरिजिनल टच एक्यूरेसी, ट्रू-टोन और फास्ट चार्जिंग को बनाए रखते हैं।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "नि:शुल्क लोकल पिकअप व डिलीवरी",
      desc: "काम या परिवार में व्यस्त हैं? हम पोर्ट ऑगस्टा में आपका खराब फोन फ्री में लेते हैं और ठीक करके वापस पहुंचाते हैं।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      title: "नो-फिक्स, नो-फीस गारंटी",
      desc: "यदि पानी से खराब या गहरी समस्या वाला फोन ठीक नहीं हो पाता, तो आपको एक पैसा भी नहीं देना होता। शून्य जोखिम।",
      icon: (
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const advantages = isHi ? advantagesHi : advantagesEn;

  return (
    <section id="whyus" className="py-20 lg:py-28 bg-white dark:bg-carbon text-dark dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {isHi ? "DN का विशेष लाभ" : "The DN Advantage"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {isHi ? (
                <>
                  पोर्ट ऑगस्टा DN Mobiles पर <br className="hidden sm:inline" />
                  <span className="text-brand">भरोसा क्यों करता है।</span>
                </>
              ) : (
                <>
                  Why Port Augusta Trusts <br className="hidden sm:inline" />
                  <span className="text-brand">DN Mobiles.</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {isHi
              ? "प्रिसिजन इलेक्ट्रॉनिक्स और ईमानदार ग्राहक सेवा के प्रति समर्पण के साथ स्थापित, हम दक्षिण ऑस्ट्रेलियाई निवासियों को महंगे रिप्लेसमेंट और एडिलेड भेजने की देरी का बेहतर विकल्प प्रदान करते हैं।"
              : "Founded with a passion for precision electronics and honest customer service, we offer local South Australian residents an alternative to overpriced replacements and slow city mail-ins."}
          </p>
        </div>

        {/* 6 Advantage Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] dark:bg-obsidian p-7 rounded-2xl border border-slate-200 dark:border-line-dark shadow-xs hover:shadow-xl hover:border-brand/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-line-dark flex items-center justify-center mb-5 group-hover:bg-brand/10 group-hover:border-brand/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-line-dark/60 flex items-center gap-1.5 text-xs font-extrabold text-brand">
                <span>{isHi ? "हर रिपेयर पर मानक सुविधा" : "Standard on every repair"}</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technician Feature Spotlight */}
        <div className="bg-carbon text-white rounded-3xl overflow-hidden border border-line-dark shadow-2xl grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14">
            <span className="text-xs font-black uppercase tracking-widest text-brand block mb-2">
              {isHi ? "मुख्य टेक्नीशियन से मिलें" : "Meet Your Lead Technician"}
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {isHi ? "Naveen — ओनर व हार्डवेयर विशेषज्ञ" : "Naveen — Owner & Hardware Specialist"}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              {isHi
                ? "“जब आप अपना फोन या iPad DN Mobiles लाते हैं, तो आप सीधे उसी टेक्नीशियन से बात करते हैं जो आपके फोन पर काम करेगा। हर स्क्रीन मिलीमीटर की सटीकता से लगाई जाती है, हर स्क्रू सही जगह लगता है, और आपका डेटा 100% निजी रहता है।”"
                : "“When you bring your phone or iPad to DN Mobiles, you speak directly with the technician working on your device. Every screen is aligned to millimeter tolerances, every screw is replaced in its original position, and your data remains 100% private.”"}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 text-center sm:text-left">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white">4,500+</span>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                  {isHi ? "रिपेयर पूरे किए" : "Repairs Completed"}
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-brand">90-Day</span>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                  {isHi ? "वारंटी गारंटी" : "Warranty Backed"}
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">5.0 ★</span>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                  {isHi ? "Facebook रेटिंग" : "Facebook Rating"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="https://wa.me/61420655514?text=Hi%20Naveen!%20I'd%20like%20to%20ask%20about%20a%20repair."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mahindra-red text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
              >
                <span>{isHi ? "व्हाट्सएप पर Naveen से बात करें" : "Chat with Naveen on WhatsApp"}</span>
                <span>→</span>
              </a>
              <a
                href="tel:+61420655514"
                className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-xs sm:text-sm font-bold text-white bg-white/5 transition-colors"
              >
                {isHi ? "कॉल करें: 0420 655 514" : "Call 0420 655 514"}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[380px] w-full">
            <Image
              src="/images/gallery/ba-backglass-iphone-black.jpg"
              alt="Technician Naveen at the repair bench"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-carbon/40 to-carbon" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-carbon/90 backdrop-blur-md border border-white/10 text-xs">
              <p className="font-bold text-white">
                {isHi ? "वर्कशॉप बेंच · 18 डोमेयर कोर्ट" : "Workshop Bench · 18 Domeyer Court"}
              </p>
              <p className="text-slate-400 text-[11px]">
                {isHi
                  ? "प्रिसिजन माइक्रो-सोल्डरिंग, बैटरी टेस्टिंग व लेजर तकनीक"
                  : "Precision micro-soldering, battery testing & laser removal"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
