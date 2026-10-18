"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Packages() {
  const { translations, t } = useLanguage();
  const packages = translations.packages?.items || [];

  return (
    <section id="packages" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-badge">{t("packages.badge")}</span>
          <span className="badge-line" />
          <h2 className="text-3xl md:text-4xl font-black text-dark mt-5 tracking-tight">
            {t("packages.heading")}
          </h2>
          <p className="text-grey2 mt-3 max-w-xl mx-auto">{t("packages.subheading")}</p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl flex flex-col bg-white overflow-hidden ${
                pkg.popular
                  ? "border-2 border-brand shadow-xl"
                  : "border border-line shadow-sm"
              }`}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            >
              {pkg.popular && (
                <div className="bg-brand text-white text-xs text-center py-1.5 font-bold uppercase tracking-wide">
                  ⭐ {t("packages.popular")}
                </div>
              )}

              <div className="p-6 flex-1">
                <h3 className="text-xl font-black text-dark">{pkg.name}</h3>
                <p className="text-sm text-grey2 mt-1 mb-4">{pkg.desc}</p>
                <p className="text-3xl font-black text-brand mb-5">{pkg.price}</p>

                <ul className="space-y-2.5 text-sm">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex gap-2.5 text-dark/80">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0 text-brand"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/61420655514?text=${encodeURIComponent(
                    `${t("packages.bookPrefix")} ${pkg.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-brand text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition-colors shadow-sm"
                >
                  {t("packages.btn")} <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
