"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { translations, t } = useLanguage();
  const about = translations.about || {};
  const features = about.features || [];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/repair-1.jpg"
                alt={t("about.imageAlt")}
                width={720}
                height={520}
                className="object-cover w-full h-80 md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-xs font-semibold bg-dark/50 backdrop-blur px-3 py-1.5 rounded-lg">
                  {t("about.imageCaption")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span
              className="section-badge"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {t("about.badge")}
            </motion.span>
            <motion.span
              className="badge-line"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            />
            <motion.h2
              className="text-3xl md:text-4xl font-black text-dark mt-5 leading-tight tracking-tight"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {t("about.heading")}
            </motion.h2>
            <motion.p
              className="text-grey2 text-base leading-relaxed mt-5"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {t("about.paragraph1")}
            </motion.p>
            <motion.p
              className="text-grey2 text-base leading-relaxed mt-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {t("about.paragraph2")}
            </motion.p>
            <motion.div
              className="bg-cream border border-line rounded-2xl p-5 flex gap-4 items-center mt-7"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="w-14 h-14 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-2xl shrink-0">
                🔧
              </div>
              <div>
                <p className="font-extrabold text-dark">{t("about.techName")}</p>
                <p className="text-brand text-sm font-bold mt-0.5">
                  {t("about.techTitle")}
                </p>
                <p className="text-grey2 text-xs mt-1 leading-relaxed">
                  {t("about.techDesc")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-dark tracking-tight">
            {t("about.why_heading")}
          </h3>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="dn-card p-5 flex gap-4"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="text-2xl">{f.icon}</div>
              <div>
                <h4 className="font-extrabold text-dark mb-1">{f.title}</h4>
                <p className="text-grey2 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-white font-bold px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors shadow-md shadow-brand/25"
          >
            📅 {t("about.cta")} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
