"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

interface RefurbDevice {
  id: string;
  brand: string;
  name: string;
  storage: string;
  batteryHealthEn: string;
  batteryHealthHi: string;
  conditionEn: string;
  conditionHi: string;
  warrantyEn: string;
  warrantyHi: string;
  priceNowEn: string;
  priceNowHi: string;
  priceWasEn: string;
  priceWasHi: string;
  savingsEn: string;
  savingsHi: string;
  img: string;
  specsEn: string[];
  specsHi: string[];
}

export default function Refurbished() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const [selectedBrand, setSelectedBrand] = useState("all");

  const devices: RefurbDevice[] = [
    {
      id: "ip-se",
      brand: "apple",
      name: "Apple iPhone SE / iPhone 8",
      storage: "64GB / 128GB Pristine White",
      batteryHealthEn: "95% Battery Health",
      batteryHealthHi: "95% बैटरी हेल्थ",
      conditionEn: "Boxed Grade A+",
      conditionHi: "बॉक्स पैक ग्रेड A+",
      warrantyEn: "90-Day DN Warranty",
      warrantyHi: "90 दिन DN वारंटी",
      priceNowEn: "From $249",
      priceNowHi: "$249 से",
      priceWasEn: "Was $649",
      priceWasHi: "पहले $649",
      savingsEn: "Save $400",
      savingsHi: "बचत $400",
      img: "/images/refurbished/refurb-iphone-white.jpg",
      specsEn: ["Retina HD Display", "Touch ID Sensor", "Boxed with Cable", "Unlocked to All Networks"],
      specsHi: ["रेटिना HD डिस्प्ले", "टच आईडी फिंगरप्रिंट", "बॉक्स व केबल सहित", "सभी नेटवर्क सपोर्ट"],
    },
    {
      id: "s23",
      brand: "samsung",
      name: "Samsung Galaxy A-Series Boxed",
      storage: "128GB Phantom Black",
      batteryHealthEn: "96% Battery Health",
      batteryHealthHi: "96% बैटरी हेल्थ",
      conditionEn: "Boxed Grade A+",
      conditionHi: "बॉक्स पैक ग्रेड A+",
      warrantyEn: "90-Day DN Warranty",
      warrantyHi: "90 दिन DN वारंटी",
      priceNowEn: "From $249",
      priceNowHi: "$249 से",
      priceWasEn: "Was $499",
      priceWasHi: "पहले $499",
      savingsEn: "Save $250",
      savingsHi: "बचत $250",
      img: "/images/refurbished/refurb-samsung-black.jpg",
      specsEn: ["Quad AI Camera", "5000mAh Battery", "Fast Type-C Charging", "Original Retail Box"],
      specsHi: ["क्वाड AI कैमरा", "5000mAh बैटरी", "फास्ट टाइप-सी चार्जिंग", "ओरिजिनल बॉक्स पैक"],
    },
    {
      id: "oppo",
      brand: "other",
      name: "Oppo A-Series Smartphone",
      storage: "128GB Wine Red / Black",
      batteryHealthEn: "95% Battery Health",
      batteryHealthHi: "95% बैटरी हेल्थ",
      conditionEn: "Factory Boxed Unit",
      conditionHi: "फैक्ट्री बॉक्स पैक यूनिट",
      warrantyEn: "90-Day DN Warranty",
      warrantyHi: "90 दिन DN वारंटी",
      priceNowEn: "From $199",
      priceNowHi: "$199 से",
      priceWasEn: "Was $399",
      priceWasHi: "पहले $399",
      savingsEn: "Save $200",
      savingsHi: "बचत $200",
      img: "/images/refurbished/refurb-oppo-boxed.jpg",
      specsEn: ["Innovative AI Camera", "ColorOS Smooth Performance", "Dual SIM 4G", "Retail Boxed"],
      specsHi: ["इनोवेटिव AI कैमरा", "कलरओएस स्मूथ परफॉरमेंस", "डुअल सिम 4G", "बॉक्स पैक डिवाइस"],
    },
    {
      id: "sam-tab",
      brand: "ipad",
      name: "Samsung Galaxy Tab with S-Pen",
      storage: "128GB Rose Gold / Gray",
      batteryHealthEn: "95%+ Battery Health",
      batteryHealthHi: "95%+ बैटरी हेल्थ",
      conditionEn: "Mint Grade A+",
      conditionHi: "मिंट कंडीशन ग्रेड A+",
      warrantyEn: "90-Day DN Warranty",
      warrantyHi: "90 दिन DN वारंटी",
      priceNowEn: "From $349",
      priceNowHi: "$349 से",
      priceWasEn: "Was $699",
      priceWasHi: "पहले $699",
      savingsEn: "Save $350",
      savingsHi: "बचत $350",
      img: "/images/refurbished/refurb-samsung-tab.jpg",
      specsEn: ["Magnetic S-Pen Included", "Sound by AKG Quad Speakers", "10.4-inch Crisp Display", "Full Work & Study Ready"],
      specsHi: ["मैग्नेटिक S-पेन शामिल", "AKG क्वाड स्टीरियो स्पीकर्स", "10.4-इंच डिस्प्ले", "पढ़ाई व काम के लिए तैयार"],
    },
    {
      id: "budget-samsung",
      brand: "samsung",
      name: "Samsung Galaxy Certified Pre-Owned",
      storage: "64GB / 128GB",
      batteryHealthEn: "92%+ Health",
      batteryHealthHi: "92%+ बैटरी हेल्थ",
      conditionEn: "Fully Tested & Verified",
      conditionHi: "पूरी तरह टेस्टेड व वेरिफाइड",
      warrantyEn: "90-Day DN Warranty",
      warrantyHi: "90 दिन DN वारंटी",
      priceNowEn: "From $149",
      priceNowHi: "$149 से",
      priceWasEn: "Was $349",
      priceWasHi: "पहले $349",
      savingsEn: "Save $200",
      savingsHi: "बचत $200",
      img: "/images/refurbished/refurb-samsung-a.jpg",
      specsEn: ["Long-life 5000mAh Battery", "Dual SIM 4G", "Great First Phone", "Ready to Activate"],
      specsHi: ["लॉन्ग-लाइफ 5000mAh बैटरी", "डुअल सिम 4G", "किफायती व टिकाऊ", "तुरंत चालू करने के लिए तैयार"],
    },
  ];

  const filtered = devices.filter((d) => selectedBrand === "all" || d.brand === selectedBrand);

  const filterCategories = [
    { id: "all", labelEn: "All Certified Devices", labelHi: "सभी सर्टिफाइड फोन" },
    { id: "apple", labelEn: "Apple iPhone", labelHi: "Apple iPhone" },
    { id: "samsung", labelEn: "Samsung Galaxy", labelHi: "Samsung Galaxy" },
    { id: "pixel", labelEn: "Google Pixel", labelHi: "Google Pixel" },
    { id: "ipad", labelEn: "iPads", labelHi: "iPads" },
    { id: "other", labelEn: "Budget Friendly", labelHi: "किफायती फोन" },
  ];

  return (
    <section id="refurbished" className="py-20 lg:py-28 bg-[#f8fafc] dark:bg-carbon text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand/5 dark:bg-brand/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {isHi ? "DN सर्टिफाइड प्री-ओन्ड" : "DN Certified Pre-Owned"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {isHi ? (
                <>
                  फ्लैगशिप क्वालिटी। <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-dark to-slate-900 dark:from-brand dark:via-[#ff4d6d] dark:to-white">
                    ईमानदार प्री-ओन्ड दाम।
                  </span>
                </>
              ) : (
                <>
                  Flagship Quality. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-dark to-slate-900 dark:from-brand dark:via-[#ff4d6d] dark:to-white">
                    Honest Pre-Owned Value.
                  </span>
                </>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              {isHi
                ? "DN Mobiles में हर रीफर्बिश्ड फोन की गहन 32-पॉइंट जांच होती है, 90%+ बैटरी हेल्थ टेस्ट होती है, सैनिटाइज किया जाता है और 90 दिन की वारंटी मिलती है।"
                : "Every refurbished device at DN Mobiles is thoroughly inspected, battery-tested to 90%+ health, sanitized, and backed by our in-house 90-day warranty."}
            </p>
          </div>

          {/* Sell Phone banner link */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/catalog/sell-device"
              className="px-5 py-3 rounded-xl border border-slate-300 dark:border-white/20 hover:border-brand bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-2 shadow-xs dark:shadow-none"
            >
              <span>{isHi ? "पुराना फोन बेचना या बदलना है?" : "Selling or Trading In?"}</span>
              <span className="text-brand">→</span>
            </Link>
            <a
              href="https://wa.me/61420655514?text=Hi!%20What%20refurbished%20phones%20do%20you%20have%20available%20today%20in%20Port%20Augusta%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mahindra-red text-white text-xs sm:text-sm font-black px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
            >
              <span>{isHi ? "ताजा स्टॉक की जानकारी लें" : "Ask Current Stock"}</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-4 mb-8">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedBrand(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedBrand === cat.id
                  ? "bg-brand text-white shadow-lg shadow-brand/25 scale-[1.02]"
                  : "bg-white dark:bg-obsidian text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-line-dark shadow-xs dark:shadow-none"
              }`}
            >
              {isHi ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => {
            const condition = isHi ? item.conditionHi : item.conditionEn;
            const savings = isHi ? item.savingsHi : item.savingsEn;
            const battery = isHi ? item.batteryHealthHi : item.batteryHealthEn;
            const priceNow = isHi ? item.priceNowHi : item.priceNowEn;
            const priceWas = isHi ? item.priceWasHi : item.priceWasEn;
            const specs = isHi ? item.specsHi : item.specsEn;

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-[#141721] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl hover:border-brand/40 dark:hover:border-brand/40 transition-all duration-300"
              >
                {/* Image & Badges */}
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-carbon via-transparent to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 dark:bg-carbon/90 text-emerald-700 dark:text-emerald-400 font-extrabold text-[10px] border border-emerald-200 dark:border-emerald-400/20 backdrop-blur-md shadow-xs">
                        ✓ {condition}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-brand text-white font-black text-xs shadow-md">
                        {savings}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4">
                      <span className="px-2 py-0.5 rounded bg-black/60 dark:bg-white/10 text-white font-mono text-[10px] font-bold backdrop-blur-xs">
                        {battery}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{item.storage}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-black text-slate-900 dark:text-white">
                        {priceNow}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500 line-through">
                        {priceWas}
                      </span>
                    </div>

                    {/* Feature specs */}
                    <div className="space-y-1.5 py-3 border-y border-slate-100 dark:border-line-dark text-xs text-slate-600 dark:text-slate-300">
                      {specs.map((sp, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Reservation Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={`https://wa.me/61420655514?text=${encodeURIComponent(
                      `Hi Naveen! I am interested in reserving the refurbished ${item.name} (${item.storage}) at DN Mobiles Port Augusta.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-mahindra-red text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>{isHi ? "व्हाट्सएप से रिजर्व करें" : "Reserve via WhatsApp"}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
