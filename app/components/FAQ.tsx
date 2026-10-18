"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function FAQ() {
  const { language, translations } = useLanguage();
  const isHi = language === "hi";

  const faqsEn = [
    {
      q: "Is the initial inspection and diagnosis really 100% free?",
      a: "Yes, completely free. You can bring any smartphone, iPad or tablet into our workshop at 18 Domeyer Court, Port Augusta. We inspect the hardware, test the components, and tell you exactly what is wrong and what it costs to fix — with zero obligation to proceed.",
    },
    {
      q: "How long does a screen replacement take?",
      a: "Most screen replacements for iPhone and Samsung Galaxy are completed within 30 to 45 minutes on-site. You can wait in comfort or drop it off and pick it up the same day.",
    },
    {
      q: "Do you offer a warranty on repairs?",
      a: "Yes. Every repair performed at DN Mobiles is backed by our comprehensive 90-day parts and workmanship warranty. If a replaced component exhibits any manufacturing defects, we repair or replace it immediately.",
    },
    {
      q: "Will I lose my photos, contacts, or apps during the repair?",
      a: "No! For screen, battery, camera, back glass, and charging port replacements, your device's motherboard and flash storage remain untouched. We respect your confidentiality and never wipe your data.",
    },
    {
      q: "Do you offer free pickup and drop-off in Port Augusta?",
      a: "Yes! If you are at work or unable to visit our workshop, simply message us on WhatsApp or call 0420 655 514. We will collect your device and deliver it back repaired anywhere within Port Augusta free of charge.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept Cash, PayID, and Direct Bank Transfer upon completion and satisfaction with the repair.",
    },
    {
      q: "Do you fix water-damaged phones?",
      a: "Yes. If your phone has taken liquid damage, bring it in immediately (do NOT charge it or turn it on). We perform ultrasonic board cleaning and micro-soldering diagnostics to recover the device and your critical data.",
    },
    {
      q: "Can I trade in or sell my old device?",
      a: "Yes! We buy used and faulty iPhones, iPads, and Android devices for instant cash or trade-in credit toward a repair or refurbished phone.",
    },
  ];

  const faqsHi = [
    {
      q: "क्या जांच और डायग्नोस्टिक्स सचमुच 100% नि:शुल्क है?",
      a: "हां, बिल्कुल फ्री। आप 18 डोमेयर कोर्ट, पोर्ट ऑगस्टा पर कोई भी फोन या टैबलेट ला सकते हैं। हम हार्डवेयर जांचते हैं, कंपोनेंट टेस्ट करते हैं और खराबी व खर्च साफ बताते हैं — आगे बढ़ना अनिवार्य नहीं है।",
    },
    {
      q: "स्क्रीन बदलने में कितना समय लगता है?",
      a: "iPhone और Samsung Galaxy के ज्यादातर स्क्रीन रिपेयर हमारे वर्कशॉप में 30 से 45 मिनट के अंदर पूरे हो जाते हैं। आप प्रतीक्षा कर सकते हैं या उसी दिन वापस ले सकते हैं।",
    },
    {
      q: "क्या रिपेयर पर वारंटी मिलती है?",
      a: "हां। DN Mobiles पर किए गए हर रिपेयर पर हमारी 90 दिन की पार्ट्स और कारीगरी वारंटी मिलती है। यदि पार्ट में कोई खराबी आए तो हम तुरंत ठीक या रिप्लेस करते हैं।",
    },
    {
      q: "क्या रिपेयर के दौरान मेरा फोटो, कॉन्टैक्ट्स या डेटा डिलीट होगा?",
      a: "नहीं! स्क्रीन, बैटरी, कैमरा, बैक ग्लास और चार्जिंग पोर्ट रिपेयर के दौरान आपका मदरबोर्ड और डेटा स्टोरेज सुरक्षित रहता है। हम आपका डेटा कभी डिलीट नहीं करते।",
    },
    {
      q: "क्या पोर्ट ऑगस्टा में फ्री पिकअप और डिलीवरी उपलब्ध है?",
      a: "हां! यदि आप काम में व्यस्त हैं या वर्कशॉप नहीं आ सकते, तो व्हाट्सएप या 0420 655 514 पर कॉल करें। हम डिवाइस पिकअप करेंगे और रिपेयर के बाद नि:शुल्क वापस पहुंचाएंगे।",
    },
    {
      q: "भुगतान के कौन से तरीके स्वीकार हैं?",
      a: "हम कैश, PayID और डायरेक्ट बैंक ट्रांसफर स्वीकार करते हैं। भुगतान काम पूरा होने और संतुष्ट होने के बाद ही लिया जाता है।",
    },
    {
      q: "क्या पानी से खराब फोन ठीक हो सकते हैं?",
      a: "हां। फोन पानी में गिर गया हो तो तुरंत लाएं (चार्ज न करें और चालू न करें)। हम अल्ट्रासोनिक बोर्ड क्लीनिंग और माइक्रो-सोल्डरिंग से फोन और डेटा रिकवर करते हैं।",
    },
    {
      q: "क्या मैं पुराना फोन बेच या एक्सचेंज कर सकता/सकती हूं?",
      a: "हां! हम चालू या खराब iPhone, iPad और Android फोन तुरंत नकद या एक्सचेंज क्रेडिट के बदले खरीदते हैं।",
    },
  ];

  const allFaqs = isHi ? faqsHi : faqsEn;
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-carbon text-dark dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Summary & Support Box (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {isHi ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {isHi ? (
                <>
                  कोई सवाल है? <br />
                  <span className="text-brand">हमारे पास जवाब हैं।</span>
                </>
              ) : (
                <>
                  Got Questions? <br />
                  <span className="text-brand">We Have Answers.</span>
                </>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
              {isHi
                ? "हमारे रिपेयर मानक, समय, वारंटी और डेटा सुरक्षा के बारे में सभी जरूरी जानकारियां।"
                : "Everything you need to know about our repair standards, turnaround times, warranty, and data safety."}
            </p>

            {/* Quick Contact Card */}
            <div className="mt-8 p-6 rounded-2xl bg-carbon text-white border border-line-dark shadow-xl">
              <h3 className="font-black text-lg text-white mb-2">
                {isHi ? "कोई सवाल बाकी है?" : "Still have a question?"}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                {isHi
                  ? "सीधे टेक्नीशियन Naveen से बात करें। हम कॉल्स और व्हाट्सएप पर तुरंत जवाब देते हैं।"
                  : "Speak directly with technician Naveen. We respond to WhatsApp messages and calls promptly."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+61420655514"
                  className="flex-1 btn-mahindra-red text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>{isHi ? "कॉल 0420 655 514" : "Call 0420 655 514"}</span>
                </a>
                <a
                  href="https://wa.me/61420655514?text=Hi%20Naveen!%20I%20have%20a%20question%20about%20a%20phone%20repair."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <span>{isHi ? "व्हाट्सएप चैट" : "WhatsApp Chat"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion List (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            {allFaqs.map((faq, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-brand/40 bg-slate-50 dark:bg-obsidian shadow-sm ring-1 ring-brand/20"
                      : "border-slate-200 dark:border-line-dark bg-white dark:bg-obsidian/60 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-black text-sm sm:text-base text-slate-900 dark:text-white"
                  >
                    <span className="leading-snug">{faq.q}</span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-brand text-white rotate-180"
                          : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-line-dark/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
