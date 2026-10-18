"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface ModelOption {
  id: string;
  name: string;
}

interface IssueOption {
  id: string;
  nameEn: string;
  nameHi: string;
  turnaroundEn: string;
  turnaroundHi: string;
  priceFromEn: string;
  priceFromHi: string;
  tagEn: string;
  tagHi: string;
}

const BRANDS = [
  { id: "apple", nameEn: "Apple iPhone", nameHi: "Apple iPhone", icon: "🍎" },
  { id: "samsung", nameEn: "Samsung Galaxy", nameHi: "Samsung Galaxy", icon: "📱" },
  { id: "pixel", nameEn: "Google Pixel", nameHi: "Google Pixel", icon: "✨" },
  { id: "ipad", nameEn: "Apple iPad", nameHi: "Apple iPad", icon: "📲" },
  { id: "other", nameEn: "Oppo / Other", nameHi: "Oppo / अन्य", icon: "🔧" },
];

const MODELS_BY_BRAND: Record<string, ModelOption[]> = {
  apple: [
    { id: "ip-15", name: "iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max" },
    { id: "ip-14", name: "iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max" },
    { id: "ip-13", name: "iPhone 13 / 13 Mini / 13 Pro / 13 Pro Max" },
    { id: "ip-12", name: "iPhone 12 / 12 Mini / 12 Pro / 12 Pro Max" },
    { id: "ip-11", name: "iPhone 11 / 11 Pro / 11 Pro Max" },
    { id: "ip-x", name: "iPhone X / XR / XS / XS Max" },
    { id: "ip-se", name: "iPhone SE (2nd / 3rd Gen) / iPhone 8 / 7" },
  ],
  samsung: [
    { id: "sam-s24", name: "Galaxy S24 / S24+ / S24 Ultra" },
    { id: "sam-s23", name: "Galaxy S23 / S23+ / S23 Ultra" },
    { id: "sam-s22", name: "Galaxy S22 / S22+ / S22 Ultra" },
    { id: "sam-s21", name: "Galaxy S21 / S20 Series" },
    { id: "sam-a", name: "Galaxy A Series (A04 – A74)" },
    { id: "sam-z", name: "Galaxy Z Fold / Z Flip" },
    { id: "sam-tab", name: "Galaxy Tab Series" },
  ],
  pixel: [
    { id: "px-9", name: "Google Pixel 9 / 9 Pro / 9 Pro XL" },
    { id: "px-8", name: "Google Pixel 8 / 8 Pro / 8a" },
    { id: "px-7", name: "Google Pixel 7 / 7 Pro / 7a" },
    { id: "px-6", name: "Google Pixel 6 / 6 Pro / 6a" },
    { id: "px-older", name: "Pixel 5 / 4 / 3 Series" },
  ],
  ipad: [
    { id: "ipad-pro", name: "iPad Pro 11\" & 12.9\" (All Generations)" },
    { id: "ipad-air", name: "iPad Air (4th / 5th / 6th Gen)" },
    { id: "ipad-gen", name: "iPad (9th / 10th Gen)" },
    { id: "ipad-mini", name: "iPad Mini (5th / 6th Gen)" },
  ],
  other: [
    { id: "oppo", name: "Oppo Reno / Find / A-Series" },
    { id: "xiaomi", name: "Xiaomi / Redmi Note Series" },
    { id: "motorola", name: "Motorola Edge / G-Series" },
    { id: "tablet", name: "Android Tablet / Lenovo" },
    { id: "custom", name: "Other Phone / Custom Model" },
  ],
};

const ISSUES: IssueOption[] = [
  {
    id: "apple-logo",
    nameEn: "Is your mobile stuck with Apple logo? (Boot Loop Fix)",
    nameHi: "क्या आपका फोन Apple लोगो पर अटका है? (बूट लूप फिक्स)",
    turnaroundEn: "15–30 Mins",
    turnaroundHi: "15–30 मिनट",
    priceFromEn: "Free Diag / $49",
    priceFromHi: "फ्री जांच / $49",
    tagEn: "Express Fix",
    tagHi: "एक्सप्रेस फिक्स",
  },
  {
    id: "screen",
    nameEn: "Cracked or Flickering Screen",
    nameHi: "टूटी या झिलमिलाती स्क्रीन",
    turnaroundEn: "20–30 Mins",
    turnaroundHi: "20–30 मिनट",
    priceFromEn: "From $79",
    priceFromHi: "$79 से",
    tagEn: "Most Popular",
    tagHi: "सबसे लोकप्रिय",
  },
  {
    id: "battery",
    nameEn: "Battery Draining Fast or Dead",
    nameHi: "बैटरी जल्दी खत्म होना या खराब",
    turnaroundEn: "30 Mins",
    turnaroundHi: "30 मिनट",
    priceFromEn: "From $59",
    priceFromHi: "$59 से",
    tagEn: "Same Day",
    tagHi: "उसी दिन",
  },
  {
    id: "backglass",
    nameEn: "Smashed Back Glass",
    nameHi: "टूटा हुआ बैक ग्लास",
    turnaroundEn: "Same Day",
    turnaroundHi: "उसी दिन",
    priceFromEn: "From $49",
    priceFromHi: "$49 से",
    tagEn: "Laser Finish",
    tagHi: "लेजर फिनिश",
  },
  {
    id: "charging",
    nameEn: "Not Charging / Loose Port",
    nameHi: "चार्ज न होना / ढीला पोर्ट",
    turnaroundEn: "30–60 Mins",
    turnaroundHi: "30–60 मिनट",
    priceFromEn: "From $49",
    priceFromHi: "$49 से",
    tagEn: "Fast Fix",
    tagHi: "फास्ट फिक्स",
  },
  {
    id: "water",
    nameEn: "Water / Liquid Damage",
    nameHi: "पानी या लिक्विड डैमेज",
    turnaroundEn: "Free Diagnostic",
    turnaroundHi: "नि:शुल्क जांच",
    priceFromEn: "100% FREE",
    priceFromHi: "100% फ्री",
    tagEn: "Micro-soldering",
    tagHi: "माइक्रो-सोल्डरिंग",
  },
  {
    id: "other",
    nameEn: "Other Hardware / Board Fault",
    nameHi: "अन्य हार्डवेयर / मदरबोर्ड समस्या",
    turnaroundEn: "Free Diagnostic",
    turnaroundHi: "नि:शुल्क जांच",
    priceFromEn: "100% FREE",
    priceFromHi: "100% फ्री",
    tagEn: "In-House Lab",
    tagHi: "इन-हाउस लैब",
  },
];

export default function DeviceEstimator() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [selectedBrand, setSelectedBrand] = useState<string>("apple");
  const [selectedModel, setSelectedModel] = useState<string>("ip-14");
  const [selectedIssue, setSelectedIssue] = useState<string>("apple-logo");

  const models = MODELS_BY_BRAND[selectedBrand] || [];
  const currentModelObj = models.find((m) => m.id === selectedModel) || models[0];
  const currentIssueObj = ISSUES.find((i) => i.id === selectedIssue) || ISSUES[0];
  const currentBrandObj = BRANDS.find((b) => b.id === selectedBrand) || BRANDS[0];

  const handleBrandChange = (brandId: string) => {
    setSelectedBrand(brandId);
    const availableModels = MODELS_BY_BRAND[brandId] || [];
    if (availableModels.length > 0) {
      setSelectedModel(availableModels[0].id);
    }
  };

  const brandName = isHi ? currentBrandObj.nameHi : currentBrandObj.nameEn;
  const issueName = isHi ? currentIssueObj.nameHi : currentIssueObj.nameEn;
  const issueTurnaround = isHi ? currentIssueObj.turnaroundHi : currentIssueObj.turnaroundEn;
  const issuePrice = isHi ? currentIssueObj.priceFromHi : currentIssueObj.priceFromEn;

  const whatsappMessage = `Hi Naveen! I would like to book a repair for my device at DN Mobiles Port Augusta:
- Brand: ${currentBrandObj.nameEn}
- Model: ${currentModelObj?.name || "Selected Model"}
- Issue: ${currentIssueObj.nameEn}
- Expected Price Guide: ${currentIssueObj.priceFromEn}
Please let me know your earliest opening today!`;

  const whatsappUrl = `https://wa.me/61420655514?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="estimator" className="py-20 lg:py-24 bg-[#f8fafc] dark:bg-carbon text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background ambient red glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/5 dark:bg-brand/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200 dark:border-line-dark">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
              {isHi ? "त्वरित प्राइस व समय गाइड" : "Instant Price & Turnaround Guide"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {isHi ? (
                <>
                  अपना रिपेयर <span className="text-brand">कॉन्फ़िगर करें</span>
                </>
              ) : (
                <>
                  Configure Your <span className="text-brand">Repair</span>
                </>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              {isHi
                ? "अपने डिवाइस का ब्रांड, मॉडल और समस्या चुनें। पारदर्शी अनुमान और तुरंत बुकिंग प्राप्त करें।"
                : "Select your device brand, model, and the issue. Get transparent price estimates and instant priority booking with our Port Augusta technicians."}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {isHi ? "बिना किसी बाध्यता का कोटेशन" : "No-Obligation Quote"}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {isHi ? "90 दिन वारंटी" : "90-Day Warranty"}
            </span>
          </div>
        </div>

        {/* Configurator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Select Brand */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                {isHi ? "चरण 1 · डिवाइस ब्रांड चुनें" : "Step 1 · Select Your Device Brand"}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                {BRANDS.map((brand) => (
                  <button
                    key={brand.id}
                    type="button"
                    onClick={() => handleBrandChange(brand.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                      selectedBrand === brand.id
                        ? "bg-brand text-white border-brand shadow-lg shadow-brand/30 scale-[1.02]"
                        : "bg-white dark:bg-obsidian text-slate-800 dark:text-slate-300 border-slate-200 dark:border-line-dark hover:border-brand/40 hover:text-slate-900 dark:hover:text-white shadow-xs dark:shadow-none"
                    }`}
                  >
                    <span className="text-xl mb-1">{brand.icon}</span>
                    <span className="text-xs font-bold leading-tight">
                      {isHi ? brand.nameHi : brand.nameEn}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Model */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                {isHi ? "चरण 2 · मॉडल चुनें" : "Step 2 · Select Model Series"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {models.map((model) => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => setSelectedModel(model.id)}
                    className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                      selectedModel === model.id
                        ? "bg-brand/10 dark:bg-white/10 text-slate-900 dark:text-white border-brand ring-1 ring-brand font-bold"
                        : "bg-white dark:bg-obsidian text-slate-700 dark:text-slate-300 border-slate-200 dark:border-line-dark hover:border-brand/40 hover:text-slate-900 dark:hover:text-white shadow-xs dark:shadow-none"
                    }`}
                  >
                    <span className="truncate pr-2">{model.name}</span>
                    <span
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedModel === model.id
                          ? "border-brand bg-brand"
                          : "border-slate-300 dark:border-slate-600"
                      }`}
                    >
                      {selectedModel === model.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Issue */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                {isHi ? "चरण 3 · क्या ठीक करवाना है?" : "Step 3 · What is the Issue?"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ISSUES.map((issue) => (
                  <button
                    key={issue.id}
                    type="button"
                    onClick={() => setSelectedIssue(issue.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedIssue === issue.id
                        ? "bg-brand/10 dark:bg-brand/15 text-slate-900 dark:text-white border-brand ring-1 ring-brand shadow-sm"
                        : "bg-white dark:bg-obsidian text-slate-700 dark:text-slate-300 border-slate-200 dark:border-line-dark hover:border-brand/40 shadow-xs dark:shadow-none"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                        {issue.id === "apple-logo" && <span>🍎</span>}
                        <span>{isHi ? issue.nameHi : issue.nameEn}</span>
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand/10 text-brand">
                        {isHi ? issue.tagHi : issue.tagEn}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>⏱ {isHi ? issue.turnaroundHi : issue.turnaroundEn}</span>
                      <span>•</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        {isHi ? issue.priceFromHi : issue.priceFromEn}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Summary & Action Card (5 Cols) */}
          <div className="lg:col-span-5 sticky lg:top-28">
            <div className="p-6 sm:p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-obsidian dark:via-[#11131a] dark:to-carbon rounded-2xl shadow-xl dark:shadow-2xl relative overflow-hidden transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 dark:bg-brand/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-line-dark">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {isHi ? "कॉन्फ़िगरेशन सारांश" : "Configuration Summary"}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                    {brandName}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-500/20">
                  {isHi ? "बुकिंग के लिए तैयार" : "Ready to Book"}
                </span>
              </div>

              {/* Selected Specs */}
              <div className="space-y-3.5 my-6 text-sm">
                <div className="flex justify-between items-start gap-4 pb-3 border-b border-slate-100 dark:border-line-dark/50">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    {isHi ? "डिवाइस:" : "Device:"}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-right text-xs sm:text-sm">
                    {currentModelObj?.name}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-3 border-b border-slate-100 dark:border-line-dark/50">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    {isHi ? "सेवा:" : "Service:"}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    {issueName}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-3 border-b border-slate-100 dark:border-line-dark/50">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    {isHi ? "अनुमानित समय:" : "Turnaround:"}
                  </span>
                  <span className="font-extrabold text-brand text-xs sm:text-sm">
                    ⚡ {issueTurnaround}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 pt-1">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block">
                      {isHi ? "अनुमानित खर्च:" : "Estimated Cost:"}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      {isHi ? "नि:शुल्क जांच के बाद अंतिम पुष्टि" : "Confirmed on free inspection"}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {issuePrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Included Perks */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{isHi ? "100% नि:शुल्क प्रारंभिक डायग्नोस्टिक जांच" : "100% Free Initial Diagnostic Assessment"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{isHi ? "ग्रेड-ए लैब टेस्टेड रिप्लेसमेंट पार्ट्स" : "Grade-A Tested Replacement Parts"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{isHi ? "90 दिन की पार्ट्स व कारीगरी वारंटी" : "90-Day Parts & Workmanship Warranty"}</span>
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-mahindra-red text-white font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  {isHi ? "व्हाट्सएप पर विवरण के साथ बुक करें →" : "Book via WhatsApp with Details →"}
                </a>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="tel:+61420655514"
                    className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-brand bg-slate-50 dark:bg-white/[0.04] flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {isHi ? "कॉल 0420 655 514" : "Call 0420 655 514"}
                  </a>
                  <a
                    href="#contact"
                    className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-brand bg-slate-50 dark:bg-white/[0.04] flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    {isHi ? "ऑनलाइन फॉर्म →" : "Online Form →"}
                  </a>
                </div>
              </div>

              <p className="text-[10px] text-center text-slate-500 mt-4">
                {isHi
                  ? "DN Mobiles वर्कशॉप: 18 डोमेयर कोर्ट, पोर्ट ऑगस्टा SA 5700"
                  : "DN Mobiles Workshop: 18 Domeyer Court, Port Augusta SA 5700"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
