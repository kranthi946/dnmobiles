import type { Metadata } from "next";
import Link from "next/link";
import { catalogPages, getCatalogPage } from "../../../lib/catalog";

const siteUrl = "https://www.dnmobiles.com.au";

export const dynamicParams = false;

export function generateStaticParams() {
  return catalogPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCatalogPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${siteUrl}/catalog/${page.slug}` },
  };
}

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCatalogPage(slug);
  if (!page) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/catalog/${page.slug}#breadcrumbs`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.navLabel,
        item: `${siteUrl}/catalog/${page.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-28 pb-10 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-grey2 mb-6">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="font-semibold text-dark">{page.navLabel}</span>
          </nav>
          <span className="section-badge">DN Mobiles · Port Augusta</span>
          <span className="badge-line" />
          <h1 className="text-4xl md:text-5xl font-black text-dark mt-4 tracking-tight leading-tight">
            {page.heading}{" "}
            <span className="text-brand">{page.headingAccent}</span>
          </h1>
          <p className="text-grey2 mt-4 max-w-2xl leading-relaxed">{page.subheading}</p>
        </div>
      </section>

      <section className="pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.cards.map((c, i) => (
              <Link
                key={`${c.label}-${i}`}
                href={c.href}
                className="dn-card p-5 flex flex-col gap-1 hover:border-brand/60 hover:shadow-md transition-all group"
              >
                <span className="font-extrabold text-dark group-hover:text-brand transition-colors">
                  {c.label}
                </span>
                {c.sub ? <span className="text-grey2 text-xs">{c.sub}</span> : null}
                <span className="text-brand text-sm font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {page.ctaTitle ? (
        <section className="pb-20 bg-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-dark rounded-2xl px-8 py-10 text-center">
              <h2 className="font-editorial text-2xl lg:text-3xl text-white">{page.ctaTitle}</h2>
              {page.ctaSub ? (
                <p className="text-white/70 mt-3 text-sm max-w-xl mx-auto">{page.ctaSub}</p>
              ) : null}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <a
                  href="https://wa.me/61420655514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1da851] transition-colors"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href="tel:+61420655514"
                  className="inline-flex items-center gap-2 bg-white text-dark font-bold text-sm px-6 py-3 rounded-lg hover:bg-cream transition-colors"
                >
                  📞 Call 0420 655 514
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-brand text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
                >
                  Book Free Inspection <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
