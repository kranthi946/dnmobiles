"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getAllServices, slugify } from "../../lib/services";

const cardImages: Record<string, string> = {
  "Screen Replacement": "/repair-1.jpg",
  "Back Glass Replacement": "/repair-4.jpg",
  "Battery Replacement": "/repair-3.jpg",
  "iPad Repair": "/repair-2.jpg",
  "Tablet Repair": "/repair-6.jpg",
  "Refurbished Phones": "/repair-5.jpg",
  "Professional Service & Diagnostics": "/repair-7.jpg",
};

const GENERAL_FAQ_INDEXES = [0, 1, 2, 3, 5, 11];

export default function ServicePage({
  slug,
  index,
}: {
  slug: string;
  index: number;
}) {
  const { translations, t } = useLanguage();
  const services = translations.services?.items || [];
  const service = services[index];
  const [open, setOpen] = useState<number | null>(0);
  if (!service) return null;

  const others = getAllServices()
    .map((p) => ({ name: p.name, slug: slugify(p.name) }))
    .filter((o) => o.slug !== slug);

  const processSteps = (translations.process?.steps || []).slice(0, 3);
  const faqs = translations.faq?.items || [];
  const featuredFaqs = GENERAL_FAQ_INDEXES.map((i) => faqs[i]).filter(Boolean);
  const image = cardImages[service.name] || "/repair-1.jpg";

  return (
    <main className="bg-cream">
      {/* Breadcrumb hero */}
      <div className="bg-white border-b border-line pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-grey2">
          <nav aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand transition-colors">
              {t("nav.home")}
            </Link>{" "}
            / <span className="text-dark font-semibold">{service.name}</span>
          </nav>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="section-badge">{t("services.badge")}</span>
            <span className="badge-line" />
            <h1 className="text-3xl md:text-4xl font-black text-dark mt-5 tracking-tight leading-tight">
              {service.name}
            </h1>
            <p className="mt-4 text-grey2 leading-relaxed max-w-lg">{service.desc}</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <span className="text-dark/80">
                <strong className="font-extrabold text-dark">
                  {t("services.durationLabel")}
                </strong>{" "}
                {service.duration}
              </span>
              <span>
                <strong className="font-extrabold text-dark">
                  {t("services.priceLabel")}
                </strong>{" "}
                <span className="text-brand font-extrabold">{service.price}</span>
              </span>
            </div>
            <div className="mt-7 flex gap-3 flex-wrap">
              <a
                href="tel:+61420655514"
                className="inline-flex items-center gap-2 bg-brand text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors shadow-sm"
              >
                📞 {t("services.call")}
              </a>
              <a
                href="https://wa.me/61420655514"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#1da851] transition-colors"
              >
                💬 {t("services.whatsapp")}
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 lg:h-96">
            <Image
              src={image}
              alt={service.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Process highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <span className="section-badge">{t("process.badge")}</span>
        <span className="badge-line" />
        <h2 className="text-2xl md:text-3xl font-black text-dark mt-5 mb-6 tracking-tight">
          {t("process.heading")}
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {processSteps.map((s, i) => (
            <div key={i} className="dn-card p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl" aria-hidden>{s.icon}</span>
                <span className="font-mono font-black text-brand/25 text-2xl">{s.num}</span>
              </div>
              <h3 className="font-extrabold text-dark">{s.title}</h3>
              <p className="text-sm text-grey2 mt-1.5 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-y border-line py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="section-badge">{t("faq.badge")}</span>
          <span className="badge-line" />
          <h2 className="text-2xl md:text-3xl font-black text-dark mt-5 mb-6 tracking-tight">
            {t("faq.heading")}
          </h2>
          <div className="space-y-2.5">
            {featuredFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`bg-cream border rounded-xl ${
                    isOpen ? "border-brand/40" : "border-line"
                  }`}
                >
                  <button
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-center justify-between gap-4 px-5 py-4"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className={`font-bold text-sm ${isOpen ? "text-brand" : "text-dark"}`}>
                      {f.q}
                    </span>
                    <svg
                      className={`w-4 h-4 shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4">
                      <p className="text-dark/70 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <span className="section-badge">{t("services.badge")}</span>
        <span className="badge-line" />
        <h2 className="text-2xl md:text-3xl font-black text-dark mt-5 mb-6 tracking-tight">
          {t("services.heading")} {t("services.headingAccent")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="dn-card p-5 font-bold text-dark text-sm hover:text-brand transition-colors flex items-center justify-between group"
            >
              {o.name}
              <span className="text-brand group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
