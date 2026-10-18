"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

interface ServiceItem {
  id: string;
  nameEn: string;
  nameHi: string;
  slug: string;
  category: string;
  priceEn: string;
  priceHi: string;
  descEn: string;
  descHi: string;
  img: string;
  badgeEn: string;
  badgeHi: string;
  highlightsEn: string[];
  highlightsHi: string[];
}

const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "screen",
    nameEn: "Screen Replacement",
    nameHi: "स्क्रीन रिप्लेसमेंट",
    slug: "screen-replacement",
    category: "screen",
    priceEn: "From $79",
    priceHi: "$79 से",
    descEn: "Restore your display to factory clarity. High-grade OLED and LCD panels with zero touch latency, TrueTone calibration, and biometric security preservation.",
    descHi: "आपकी स्क्रीन पहले जैसी। iPhone, Samsung, Google Pixel सहित प्रमुख ब्रांड के लिए क्वालिटी पार्ट्स के साथ टूटी या खराब स्क्रीन बदली जाती है।",
    img: "/images/services/screen-replacement.jpg",
    badgeEn: "⚡ 20–30 Mins Express",
    badgeHi: "⚡ 20–30 मिनट एक्सप्रेस",
    highlightsEn: ["TrueTone Calibrated", "Touch IC Protected", "Grade-A OLED / LCD"],
    highlightsHi: ["ट्रू-टोन कैलिब्रेटेड", "टच आईसी सुरक्षित", "ग्रेड-ए OLED/LCD"],
  },
  {
    id: "backglass",
    nameEn: "Back Glass Replacement",
    nameHi: "बैक ग्लास रिप्लेसमेंट",
    slug: "back-glass-replacement",
    category: "backglass",
    priceEn: "From $49",
    priceHi: "$49 से",
    descEn: "State-of-the-art laser back glass separation. Removes cracked rear glass cleanly without opening or risking delicate internal motherboard circuitry or wireless charging coils.",
    descHi: "टूटा बैक ग्लास एडवांस्ड लेजर तकनीक से प्रोफेशनली बदला जाता है ताकि फोन शोरूम जैसा दिखे और वायरलेस चार्जिंग सुरक्षित रहे।",
    img: "/images/services/back-glass-replacement.jpg",
    badgeEn: "⚡ Precision Laser Cut",
    badgeHi: "⚡ प्रिसिजन लेजर कट",
    highlightsEn: ["Precision Laser Removal", "MagSafe Coil Safe", "Restores Showroom Finish"],
    highlightsHi: ["प्रिसिजन लेजर रिमूवल", "मैगसेफ कॉइल सुरक्षित", "शोरूम जैसी फिनिश"],
  },
  {
    id: "battery",
    nameEn: "Battery Replacement",
    nameHi: "बैटरी रिप्लेसमेंट",
    slug: "battery-replacement",
    category: "battery",
    priceEn: "From $59",
    priceHi: "$59 से",
    descEn: "End battery anxiety with premium high-capacity cells. Full health calibration, zero annoying warning popups, and comprehensive 90-day warranty.",
    descHi: "पुरानी बैटरी क्वालिटी सेल से बदलें ताकि फोन फिर दिन भर चले। 100% बैटरी हेल्थ, ओवरचार्ज सेफ्टी और 90 दिन वारंटी।",
    img: "/images/services/battery-replacement.jpg",
    badgeEn: "⚡ 30-Min In-Store Fit",
    badgeHi: "⚡ 30 मिनट इन-स्टोर फिट",
    highlightsEn: ["100% Factory Capacity", "Zero Warning Flags", "Thermal Tested"],
    highlightsHi: ["100% फैक्ट्री कैपेसिटी", "कोई वार्निंग एरर नहीं", "थर्मल टेस्टेड"],
  },
  {
    id: "ipad",
    nameEn: "iPad Repair",
    nameHi: "iPad रिपेयर",
    slug: "ipad-repair",
    category: "ipad",
    priceEn: "From $89",
    priceHi: "$89 से",
    descEn: "Dedicated iPad repair station for all generations. From shattered glass digitizers and LCD replacements to loose charging docks and battery swaps.",
    descHi: "सभी iPad मॉडल के लिए विशेषज्ञ रिपेयर — टूटी स्क्रीन, डिजिटाइज़र, बैटरी और चार्जिंग की समस्याएं ध्यान से ठीक की जाती हैं।",
    img: "/images/services/ipad-repair.jpg",
    badgeEn: "⚡ Same Day / 24h",
    badgeHi: "⚡ उसी दिन / 24 घंटे",
    highlightsEn: ["Glass & Digitizer", "Charging Dock Fix", "All iPad Generations"],
    highlightsHi: ["ग्लास व डिजिटाइज़र", "चार्जिंग डॉक फिक्स", "सभी iPad जनरेशन"],
  },
  {
    id: "tablet",
    nameEn: "Tablet Repair",
    nameHi: "टैबलेट रिपेयर",
    slug: "tablet-repair",
    category: "ipad",
    priceEn: "From $79",
    priceHi: "$79 से",
    descEn: "Specialist repair for Samsung Galaxy Tab, Lenovo, and Android tablets. We restore broken touchscreens, headphone jacks, dead charging circuits, and S-Pen sensors.",
    descHi: "Samsung Galaxy Tab, Lenovo और अन्य टैबलेट रिपेयर — स्क्रीन, बैटरी, चार्जिंग पोर्ट और S-Pen सेंसर ठीक किए जाते हैं।",
    img: "/images/services/tablet-repair.jpg",
    badgeEn: "⚡ Same Day Available",
    badgeHi: "⚡ उसी दिन उपलब्ध",
    highlightsEn: ["Samsung Galaxy Tab", "Lenovo & Surface", "Display & Power IC"],
    highlightsHi: ["Samsung Galaxy Tab", "Lenovo व अन्य टैबलेट", "डिस्प्ले व पावर आईसी"],
  },
  {
    id: "refurb",
    nameEn: "Refurbished Phones",
    nameHi: "रीफर्बिश्ड फोन",
    slug: "refurbished-phones",
    category: "refurb",
    priceEn: "From $149",
    priceHi: "$149 से",
    descEn: "DN Certified pre-owned iPhones, Samsung Galaxy, and Oppo devices. 32-point inspected, unlocked to all Australian networks, with pristine battery health and 90-day warranty.",
    descHi: "बेहतरीन डिवाइस, शानदार दाम। प्रोफेशनली सर्विस, 32-पॉइंट टेस्ट और 90 दिन वारंटी के साथ तैयार बॉक्स पैक रीफर्बिश्ड फोन।",
    img: "/images/services/refurbished-phones.jpg",
    badgeEn: "⚡ Boxed & Inspected",
    badgeHi: "⚡ बॉक्स पैक व टेस्टेड",
    highlightsEn: ["32-Point Inspected", "90%+ Battery Health", "90-Day Warranty"],
    highlightsHi: ["32-पॉइंट टेस्टेड", "90%+ बैटरी हेल्थ", "90 दिन वारंटी"],
  },
  {
    id: "accessories",
    nameEn: "Accessories & Chargers",
    nameHi: "एक्सेसरीज व चार्जर्स",
    slug: "accessories",
    category: "accessories",
    priceEn: "From $15",
    priceHi: "$15 से",
    descEn: "Genuine fast-charging gear in store: 20W GaN PD wall adapters, heavy-duty braided Joyroom cables, military-grade shockproof cases, and magnetic wireless chargers.",
    descHi: "स्टोर में असली फास्ट चार्जिंग सामग्री: 20W GaN एडाप्टर, हेवी-ड्यूटी ब्रेडेड केबल्स, मिलिट्री-ग्रेड शॉकप्रूफ कवर्स और मैग्नेटिक वायरलेस चार्जर्स।",
    img: "/images/services/accessories-chargers.jpg",
    badgeEn: "⚡ In-Store Stock",
    badgeHi: "⚡ स्टोर में उपलब्ध",
    highlightsEn: ["20W GaN PD Fast Charge", "Heavy-Duty Braided Cables", "Shockproof Tough Cases"],
    highlightsHi: ["20W GaN PD फास्ट चार्ज", "हेवी-ड्यूटी ब्रेडेड केबल्स", "शॉकप्रूफ मजबूत कवर्स"],
  },
  {
    id: "diagnostics",
    nameEn: "Professional Service & Diagnostics",
    nameHi: "प्रोफेशनल सर्विस व नि:शुल्क जांच",
    slug: "professional-service-diagnostics",
    category: "diagnostics",
    priceEn: "100% FREE",
    priceHi: "100% फ्री",
    descEn: "Phone won't turn on, dropped in water, or mystery faults? Our technicians perform digital microscope scans and multimeter circuit checks with zero obligation.",
    descHi: "समझ नहीं आ रहा कि फोन में क्या दिक्कत है? लेकर आइए — 100% नि:शुल्क जांच में समस्या पहचानी जाती है, किसी भी खर्च से पहले।",
    img: "/images/services/free-diagnostics.jpg",
    badgeEn: "⚡ 100% FREE",
    badgeHi: "⚡ 100% नि:शुल्क",
    highlightsEn: ["Digital Microscope Scan", "Liquid Intrusion Check", "Itemized Fixed Quote"],
    highlightsHi: ["डिजिटल माइक्रोस्कोप स्कैन", "वाटर डैमेज चेक", "ईमानदार फिक्स्ड कोटेशन"],
  },
];

export default function Services() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", labelEn: "All Solutions", labelHi: "सभी सेवाएं" },
    { id: "screen", labelEn: "Screen & OLED", labelHi: "स्क्रीन व OLED" },
    { id: "backglass", labelEn: "Laser Back Glass", labelHi: "लेजर बैक ग्लास" },
    { id: "battery", labelEn: "Battery & Power", labelHi: "बैटरी व पावर" },
    { id: "ipad", labelEn: "iPads & Tablets", labelHi: "iPad व टैबलेट" },
    { id: "refurb", labelEn: "Refurbished Phones", labelHi: "रीफर्बिश्ड फोन" },
    { id: "accessories", labelEn: "Accessories & Chargers", labelHi: "एक्सेसरीज व चार्जर्स" },
    { id: "diagnostics", labelEn: "Free Inspection", labelHi: "फ्री जांच" },
  ];

  const filteredServices = SERVICES_CATALOG.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-carbon text-dark dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {isHi ? "हमारी रिपेयर सेवाएं" : "Our Repair Solutions"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {isHi ? (
                <>
                  हर डिवाइस के लिए <br className="hidden sm:inline" />
                  <span className="text-brand">विशेषज्ञ सेवा।</span>
                </>
              ) : (
                <>
                  Precision Care for <br className="hidden sm:inline" />
                  <span className="text-brand">Every Device.</span>
                </>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              {isHi
                ? "DN Mobiles में हर रिपेयर हमारे स्टैटिक-नियंत्रित वर्कशॉप में असली ग्रेड-ए पार्ट्स से किया जाता है। काम शुरू होने से पहले हम बिना किसी बाध्यता का फिक्स्ड कोटेशन और 100% नि:शुल्क जांच देते हैं।"
                : "Every repair at DN Mobiles is carried out using calibrated Grade-A parts in our static-controlled workshop. We provide an upfront itemized quotation and 100% free diagnostics before any work starts."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#estimator"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-50 dark:bg-obsidian border border-slate-200 dark:border-line-dark hover:border-brand text-slate-800 dark:text-white hover:text-brand font-bold text-xs sm:text-sm transition-all shadow-xs"
            >
              <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>{isHi ? "प्राइस कैलकुलेटर" : "Instant Cost Calculator"}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-mahindra-red text-white font-bold text-xs sm:text-sm shadow-md"
            >
              <span>{isHi ? "रिपेयर बुक करें" : "Book Repair"}</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-4 mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === c.id
                  ? "bg-brand text-white shadow-sm"
                  : "bg-slate-50 dark:bg-obsidian text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-line-dark hover:border-slate-400"
              }`}
            >
              {isHi ? c.labelHi : c.labelEn}
            </button>
          ))}
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const name = isHi ? service.nameHi : service.nameEn;
            const desc = isHi ? service.descHi : service.descEn;
            const price = isHi ? service.priceHi : service.priceEn;
            const badge = isHi ? service.badgeHi : service.badgeEn;
            const highlights = isHi ? service.highlightsHi : service.highlightsEn;

            return (
              <article
                key={service.id}
                className="bg-[#f8fafc] dark:bg-obsidian rounded-2xl border border-slate-200 dark:border-line-dark overflow-hidden shadow-xs hover:shadow-xl hover:border-brand/40 dark:hover:border-brand/40 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Turnaround Badge */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.img}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-carbon/90 backdrop-blur-md text-white font-extrabold text-[10px] tracking-wide border border-white/10">
                      {badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-brand text-white font-black text-xs shadow-md">
                      {price}
                    </span>
                  </div>

                  {/* Service Name over Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-black text-white tracking-tight leading-snug drop-shadow-md">
                      {name}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {desc}
                    </p>

                    {/* Highlights bullets */}
                    <div className="space-y-1.5 mb-5 pb-5 border-b border-slate-200/80 dark:border-line-dark">
                      {highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <svg className="w-3.5 h-3.5 text-brand shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href={`https://wa.me/61420655514?text=${encodeURIComponent(
                        `Hi DN Mobiles! I'd like to book ${service.nameEn} for my device in Port Augusta.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-mahindra-red text-white font-bold text-xs py-2.5 px-3 rounded-xl text-center shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>{isHi ? "व्हाट्सएप पर बुक करें" : "Book on WhatsApp"}</span>
                      <span>→</span>
                    </a>
                    <Link
                      href={service.slug === "accessories" ? "/catalog/categories" : `/services/${service.slug}`}
                      className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-line-dark hover:border-slate-400 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 transition-colors"
                      aria-label={`View details for ${name}`}
                    >
                      {isHi ? "विवरण" : "Details"}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-carbon text-white border border-line-dark shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-black tracking-tight">
                {isHi ? "90 दिन की पुख्ता वारंटी + 100% नि:शुल्क जांच" : "90-Day Parts Warranty + 100% Free Diagnostics"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {isHi
                  ? "अगर समस्या ठीक नहीं होती, तो आपको एक डॉलर भी नहीं देना होगा। कोई फिक्स नहीं = कोई चार्ज नहीं नीति।"
                  : "If we can't solve your fault, you do not pay a single dollar. Strict No Fix, No Fee policy."}
              </p>
            </div>
          </div>
          <a
            href="tel:+61420655514"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-black text-xs sm:text-sm hover:bg-slate-100 transition-colors shrink-0 shadow-md"
          >
            <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>{isHi ? "0420 655 514 पर कॉल करें" : "Speak to Naveen: 0420 655 514"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
