"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [mode, setMode] = useState<"book" | "quote">("book");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    service: "📅 Book Repair (Priority)",
    address: "18 Domeyer Court, Port Augusta SA 5700",
    date: "",
    time: "Morning (8AM - 12PM)",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines =
      mode === "quote"
        ? [
            "💰 FREE QUOTE REQUEST — DN Mobiles Port Augusta",
            "---------------------------------------",
            `Customer Name: ${form.name}`,
            `Phone Number: ${form.phone}`,
            `Device Brand & Model: ${form.device}`,
            `Required Service: ${form.service}`,
            `Google Address / Location: ${form.address || "18 Domeyer Court, Port Augusta SA 5700"}`,
            `Description of Damage: ${form.message || "Standard repair"}`,
            `Preferred Callback Time: ${form.time}`,
            "---------------------------------------",
            "Looking forward to your quotation!",
          ]
        : [
            "📱 DEVICE REPAIR BOOKING — DN Mobiles Port Augusta",
            "---------------------------------------",
            `Customer Name: ${form.name}`,
            `Phone Number: ${form.phone}`,
            `Device Brand & Model: ${form.device}`,
            `Required Service: ${form.service}`,
            `Google Address / Location: ${form.address || "18 Domeyer Court, Port Augusta SA 5700"}`,
            `Preferred Date: ${form.date || "Today / Earliest"}`,
            `Preferred Time: ${form.time}`,
            `Fault Details: ${form.message || "Inspection required"}`,
            "---------------------------------------",
            "Please confirm my workshop booking at 18 Domeyer Court.",
          ];

    window.open(
      `https://wa.me/61420655514?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
  };

  const servicesList = [
    { en: "📅 Book Repair (Priority)", hi: "📅 रिपेयर बुक करें (प्रायोरिटी)" },
    { en: "💰 Free Quote (Estimate)", hi: "💰 नि:शुल्क कोटेशन (अनुमान)" },
    { en: "🍎 Is your mobile stuck with Apple logo? (Boot Loop Fix)", hi: "🍎 क्या आपका फोन Apple लोगो पर अटका है? (बूट लूप फिक्स)" },
    { en: "Screen Replacement (From $79)", hi: "स्क्रीन बदलना ($79 से)" },
    { en: "Battery Replacement (From $59)", hi: "बैटरी बदलना ($59 से)" },
    { en: "Back Glass Laser Replacement (From $49)", hi: "बैक ग्लास लेजर बदलना ($49 से)" },
    { en: "iPad / Tablet Repair (From $89)", hi: "iPad / टैबलेट रिपेयर ($89 से)" },
    { en: "Charging Port Repair (From $49)", hi: "चार्जिंग पोर्ट रिपेयर ($49 से)" },
    { en: "Water Damage Recovery (Free Diag)", hi: "पानी से खराब फोन रिकवरी (फ्री जांच)" },
    { en: "Motherboard / Micro-soldering (Lab)", hi: "मदरबोर्ड / माइक्रो-सोल्डरिंग (इन-हाउस लैब)" },
    { en: "Refurbished Phone Enquiry", hi: "रीफर्बिश्ड फोन पूछताछ" },
    { en: "100% Free Diagnostics & Hardware Inspection", hi: "100% नि:शुल्क हार्डवेयर जांच व डायग्नोस्टिक्स" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f8fafc] dark:bg-carbon text-dark dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            {isHi ? "पोर्ट ऑगस्टा वर्कशॉप व बुकिंग" : "Port Augusta Workshop & Booking"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {isHi ? (
              <>
                आइए आपका फोन <br className="hidden sm:inline" />
                <span className="text-brand">फिर से नया जैसा बनाएं।</span>
              </>
            ) : (
              <>
                Let&apos;s Get Your Device <br className="hidden sm:inline" />
                <span className="text-brand">Working Like New.</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            {isHi
              ? "18 डोमेयर कोर्ट, पोर्ट ऑगस्टा में हफ्ते के 7 दिन सुबह 8:00 से रात 8:00 बजे तक वॉक-इन का स्वागत है। तत्काल पुष्टि के लिए नीचे अपनी बुकिंग या कोटेशन अनुरोध भेजें।"
              : "Walk-ins welcome 7 days a week from 8:00 AM to 8:00 PM at 18 Domeyer Court, Port Augusta. Send your booking or quote request below for immediate confirmation."}
          </p>
        </div>

        {/* Main Grid: Big Google Map & Workshop on LEFT (7 cols) + Booking & Quote Form on RIGHT (5 cols) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: Big Google Map & Workshop Information (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* The Big Google Map Card */}
            <div className="bg-white dark:bg-obsidian rounded-3xl border border-slate-200 dark:border-line-dark p-4 sm:p-6 shadow-xl relative overflow-hidden">
              {/* Map Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand">
                        {isHi ? "आधिकारिक गूगल एड्रेस व वर्कशॉप" : "Official Google Address & Workshop"}
                      </span>
                      <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded bg-brand/10 text-brand font-black">
                        {isHi ? "सर्विस सेंटर" : "Service Center"}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      18 Domeyer Court, Port Augusta
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isHi ? "7 दिन खुला (8 AM – 8 PM)" : "Open 7 Days (8 AM – 8 PM)"}</span>
                  </div>
                  <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-black border border-brand/20">
                    <span>{isHi ? "⚡ प्रायोरिटी रिपेयर" : "⚡ Priority Repairs"}</span>
                  </div>
                </div>
              </div>

              {/* Large Interactive Google Maps Container */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-inner bg-slate-100 dark:bg-carbon relative">
                <iframe
                  title="DN Mobiles Workshop Location - 18 Domeyer Court, Port Augusta SA 5700"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.502936781254!2d137.771221!3d-32.498877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a87b5a8e0f5b9d3%3A0x7d6f5f9e8a9d1234!2s18%20Domeyer%20Ct%2C%20Port%20Augusta%20SA%205700!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                  width="100%"
                  height="460"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[480px]"
                />
              </div>

              {/* Quick Action Navigation Bar directly below the map */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-white/10">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=18+Domeyer+Court+Port+Augusta+SA+5700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-mahindra-red text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>{isHi ? "रास्ता देखें →" : "Get Directions →"}</span>
                </a>

                <a
                  href="tel:+61420655514"
                  className="bg-slate-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <svg className="w-4 h-4 fill-current text-brand" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>{isHi ? "कॉल 0420 655 514" : "Call 0420 655 514"}</span>
                </a>

                <a
                  href="https://wa.me/61420655514?text=Hi%21%20I%20am%20near%20your%20Port%20Augusta%20workshop."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.213a.5.5 0 00.61.637l5.542-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.074-1.387l-.363-.215-3.763.987 1.003-3.665-.236-.376A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  <span>{isHi ? "व्हाट्सएप लोकेशन" : "WhatsApp Location"}</span>
                </a>
              </div>
            </div>

            {/* Workshop Information Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-obsidian rounded-2xl border border-slate-200 dark:border-line-dark p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {isHi ? "वर्कशॉप का पता" : "Workshop Address"}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  18 Domeyer Court, Port Augusta SA 5700, South Australia
                </p>
                <p className="text-[11px] text-brand font-bold mt-2">
                  {isHi ? "वर्कशॉप पर नि:शुल्क पार्किंग उपलब्ध" : "Free customer parking available on-site"}
                </p>
              </div>

              <div className="bg-white dark:bg-obsidian rounded-2xl border border-slate-200 dark:border-line-dark p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {isHi ? "खुलने का समय" : "Trading Hours"}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isHi ? "सोमवार – रविवार: सुबह 8:00 – रात 8:00 (7 दिन खुला)" : "Monday – Sunday: 8:00 AM – 8:00 PM (7 Days a Week)"}
                </p>
                <p className="text-[11px] text-emerald-500 font-bold mt-2">
                  {isHi ? "बिना अपॉइंटमेंट कभी भी वॉक-इन स्वागत योग्य" : "Walk-ins welcome anytime without appointment"}
                </p>
              </div>

              <div className="bg-white dark:bg-obsidian rounded-2xl border border-slate-200 dark:border-line-dark p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {isHi ? "100% नि:शुल्क जांच" : "100% Free Diagnostics"}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isHi
                    ? "बिना किसी बाध्यता के पूरी 32-पॉइंट हार्डवेयर जांच। आप तभी भुगतान करते हैं जब आप रिपेयर कराने का निर्णय लेते हैं।"
                    : "Full 32-point hardware test with zero obligation. You only pay if you decide to proceed with the repair."}
                </p>
              </div>

              <div className="bg-white dark:bg-obsidian rounded-2xl border border-slate-200 dark:border-line-dark p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {isHi ? "सीधा सपोर्ट" : "Direct Support"}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Phone: 0420 655 514 · Email: dnmobilerepairspa@gmail.com
                </p>
                <p className="text-[11px] text-blue-500 font-bold mt-2">
                  {isHi ? "15 मिनट के भीतर त्वरित जवाब" : "Fast response within 15 minutes"}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Booking & Free Quote Form Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-obsidian rounded-3xl border border-slate-200 dark:border-line-dark p-6 sm:p-8 shadow-xl">
            {/* Mode Switcher Tabs */}
            <div className="flex p-1.5 rounded-2xl bg-slate-100 dark:bg-carbon mb-6 border border-slate-200 dark:border-line-dark">
              <button
                type="button"
                onClick={() => {
                  setMode("book");
                  if (form.service === "💰 Free Quote (Estimate)") {
                    setForm((prev) => ({ ...prev, service: "📅 Book Repair (Priority)" }));
                  }
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-1.5 ${
                  mode === "book"
                    ? "bg-[#DD052B] text-white shadow-md scale-[1.01]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{isHi ? "📅 रिपेयर बुक करें" : "📅 Book Repair"}</span>
                <span className="hidden sm:inline text-[10px] text-white/90 uppercase font-black">
                  {isHi ? "(प्रायोरिटी)" : "(Priority)"}
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("quote");
                  if (form.service === "📅 Book Repair (Priority)") {
                    setForm((prev) => ({ ...prev, service: "💰 Free Quote (Estimate)" }));
                  }
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-1.5 ${
                  mode === "quote"
                    ? "bg-[#DD052B] text-white shadow-md scale-[1.01]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{isHi ? "💰 नि:शुल्क कोटेशन" : "💰 Free Quote"}</span>
                <span className="hidden sm:inline text-[10px] text-white/90 uppercase font-black">
                  {isHi ? "(अनुमान)" : "(Estimate)"}
                </span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {isHi ? "आपका पूरा नाम *" : "Your Full Name *"}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={isHi ? "उदा. राहुल शर्मा" : "e.g. John Smith"}
                  className="w-full bg-slate-50 dark:bg-carbon border border-slate-200 dark:border-line-dark rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white dark:focus:bg-obsidian transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {isHi ? "मोबाइल नंबर *" : "Mobile Number *"}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0420 000 000"
                  className="w-full bg-slate-50 dark:bg-carbon border border-slate-200 dark:border-line-dark rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white dark:focus:bg-obsidian transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {isHi ? "डिवाइस ब्रांड व मॉडल *" : "Device Brand & Model *"}
                </label>
                <input
                  type="text"
                  name="device"
                  required
                  value={form.device}
                  onChange={handleChange}
                  placeholder={isHi ? "उदा. iPhone 15 Pro, Samsung S24" : "e.g. iPhone 15 Pro, Samsung S24"}
                  className="w-full bg-slate-50 dark:bg-carbon border border-slate-200 dark:border-line-dark rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white dark:focus:bg-obsidian transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {isHi ? "सेवा चुनें *" : "Select Required Service *"}
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-carbon border border-slate-200 dark:border-line-dark rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-brand focus:bg-white dark:focus:bg-obsidian transition-all"
                >
                  {servicesList.map((s) => (
                    <option key={s.en} value={s.en} className="bg-white dark:bg-carbon text-slate-900 dark:text-white">
                      {isHi ? s.hi : s.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Google Address & Service Location */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {isHi ? "गूगल एड्रेस / रिपेयर लोकेशन *" : "Google Address / Service Location *"}
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        address: "18 Domeyer Court, Port Augusta SA 5700",
                      }))
                    }
                    className="text-[11px] font-bold text-brand hover:underline flex items-center gap-1 transition-all"
                  >
                    <span>📍 {isHi ? "18 Domeyer Court सेट करें" : "Use 18 Domeyer Court"}</span>
                  </button>
                </div>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder={
                    isHi
                      ? "18 Domeyer Court, Port Augusta या आपका पता (पिकअप हेतु)"
                      : "18 Domeyer Court, Port Augusta SA 5700 (or your address for free pickup)"
                  }
                  className="w-full bg-slate-50 dark:bg-carbon border border-slate-200 dark:border-line-dark rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white dark:focus:bg-obsidian transition-all"
                />
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-brand shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{isHi ? "आधिकारिक वर्कशॉप: 18 Domeyer Court, Port Augusta" : "Official Google Address: 18 Domeyer Court, Port Augusta"}</span>
                  </span>
                  <span className="text-emerald-500 font-bold shrink-0">
                    {isHi ? "✓ फ्री पिकअप उपलब्ध" : "✓ Free Pickup Available"}
                  </span>
                </div>
              </div>

              {mode === "book" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      {isHi ? "पसंदीदा तारीख" : "Preferred Date"}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-carbon border border-slate-200 dark:border-line-dark rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand focus:bg-white dark:focus:bg-obsidian transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      {isHi ? "समय स्लॉट" : "Time Slot"}
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-carbon border border-slate-200 dark:border-line-dark rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand focus:bg-white dark:focus:bg-obsidian transition-all"
                    >
                      <option value="Morning (8:00 AM – 12:00 PM)" className="bg-white dark:bg-carbon text-slate-900 dark:text-white">
                        {isHi ? "सुबह (8:00 – 12:00)" : "Morning (8AM - 12PM)"}
                      </option>
                      <option value="Afternoon (12:00 PM – 4:00 PM)" className="bg-white dark:bg-carbon text-slate-900 dark:text-white">
                        {isHi ? "दोपहर (12:00 – 4:00)" : "Afternoon (12PM - 4PM)"}
                      </option>
                      <option value="Evening (4:00 PM – 8:00 PM)" className="bg-white dark:bg-carbon text-slate-900 dark:text-white">
                        {isHi ? "शाम (4:00 – 8:00)" : "Evening (4PM - 8PM)"}
                      </option>
                      <option value="Free Pickup Required" className="bg-white dark:bg-carbon text-slate-900 dark:text-white">
                        {isHi ? "फ्री पिकअप आवश्यक" : "Free Pickup"}
                      </option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {isHi ? "समस्या बताएं (वैकल्पिक)" : "Describe Damage (Optional)"}
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={
                    isHi
                      ? "उदा. टूटी स्क्रीन, डिस्प्ले पर हरी लाइन, बैटरी जल्दी उतरना..."
                      : "e.g. Cracked screen, lines on display, battery drains quickly..."
                  }
                  className="w-full bg-slate-50 dark:bg-carbon border border-slate-200 dark:border-line-dark rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand focus:bg-white dark:focus:bg-obsidian transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-mahindra-red text-white font-black text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-brand/25"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>
                    {mode === "book"
                      ? isHi
                        ? "व्हाट्सएप से बुकिंग भेजें →"
                        : "Confirm Booking via WhatsApp →"
                      : isHi
                      ? "व्हाट्सएप से नि:शुल्क कोटेशन लें →"
                      : "Get Free Quote via WhatsApp →"}
                  </span>
                </button>
                <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-500 mt-3 font-semibold">
                  <span>{isHi ? "✔ नि:शुल्क जांच" : "✔ Free Diagnostics"}</span>
                  <span>·</span>
                  <span>{isHi ? "✔ पारदर्शी कीमत" : "✔ Upfront Pricing"}</span>
                  <span>·</span>
                  <span>{isHi ? "✔ 90-दिन वारंटी" : "✔ 90-Day Warranty"}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
