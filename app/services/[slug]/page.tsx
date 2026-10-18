import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug, slugify } from "../../../lib/services";
import en from "../../../messages/en.json";
import ServicePage from "../../components/ServicePage";

const siteUrl = "https://www.dnmobiles.com.au";

// FAQ items from the site's own FAQ that apply to booking any service.
const GENERAL_FAQ_INDEXES = [0, 1, 2, 3, 4, 6, 7];

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServices().map((p) => ({ slug: slugify(p.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = getServiceBySlug(slug);
  if (!found) return {};
  const { service } = found;
  const title = `${service.name} in Port Augusta`;
  const description = `${service.name} at DN Mobiles, Port Augusta SA. ${service.desc} Free inspection — ${service.price}. Call 0420 655 514.`;
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/services/${slug}`,
      siteName: "DN Mobiles",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "DN Mobiles — Phone Repairs in Port Augusta, SA",
        },
      ],
      locale: "en_AU",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getServiceBySlug(slug);
  if (!found) return notFound();

  const { service, index } = found;
  const faqItems = [
    { q: `What is included in the ${service.name} service?`, a: service.desc },
    ...GENERAL_FAQ_INDEXES.filter((i) => en.faq?.items?.[i]).map((i) => ({
      q: en.faq.items[i].q,
      a: en.faq.items[i].a,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: { "@type": "City", name: "Port Augusta" },
        url: `${siteUrl}/services/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/${slug}#breadcrumbs`,
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
            name: "Services",
            item: `${siteUrl}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${siteUrl}/services/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services/${slug}#faq`,
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage slug={slug} index={index} />
    </>
  );
}
