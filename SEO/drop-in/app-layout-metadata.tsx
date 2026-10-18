/**
 * DROP-IN for panditabhishekvyas.in (Next.js App Router)
 * ------------------------------------------------------
 * 1. Replace your existing `export const metadata` in `app/layout.tsx` with the block below.
 * 2. Add the JSON-LD `<script>` inside your root `<head>` (as shown at the bottom).
 * 3. Optional: add `export const viewport` for theme-color.
 *
 * Fixes: canonical URL, wrong og:url (was a third-party domain), missing
 * og:image/twitter:image, small twitter card, zero structured data, long title.
 */

import type { Metadata, Viewport } from "next";

const siteUrl = "https://www.panditabhishekvyas.in";

/** JSON-LD — every fact below was verified against the live homepage. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "Mahakal Pooja Services",
      url: `${siteUrl}/`,
      image: `${siteUrl}/homepageimage.png`,
      telephone: "+916260552014",
      email: "info@mangalnathmandirujain.com",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ankpat Marg, Hari Nagar Gayatri Shakti Peeth",
        addressLocality: "Ujjain",
        addressRegion: "Madhya Pradesh",
        postalCode: "456006",
        addressCountry: "IN",
      },
      areaServed: { "@type": "City", name: "Ujjain" },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        ],
        opens: "05:00",
        closes: "22:00",
      },
      founder: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Pt. Abhishek Vyas",
      jobTitle: "Vedic Pandit",
      url: `${siteUrl}/`,
      telephone: "+916260552014",
      email: "abhishekvyas069@gmail.com",
      worksFor: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Mahakal Pooja Services",
      description:
        "Book authentic Mangalnath & Mahakal Temple Poojas online. Experienced Vedic Pandits — Pt. Abhishek Vyas — in Ujjain.",
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      name: "Mangal Dosh Puja",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: { "@type": "City", name: "Ujjain" },
      url: `${siteUrl}/#poojas`,
    },
    {
      "@type": "Service",
      name: "Kaal Sarp Dosh Puja",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: { "@type": "City", name: "Ujjain" },
      url: `${siteUrl}/#poojas`,
    },
    {
      "@type": "Service",
      name: "Rudrabhishek",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: { "@type": "City", name: "Ujjain" },
      url: `${siteUrl}/#poojas`,
    },
    {
      "@type": "Service",
      name: "Mahamrityunjay Jaap",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: { "@type": "City", name: "Ujjain" },
      url: `${siteUrl}/#poojas`,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        // TODO: replace with the REAL Q&As from the #faq accordion on the homepage.
        {
          "@type": "Question",
          name: "Where do you perform the poojas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All poojas are performed at Mangalnath Temple and Mahakal Temple, Ujjain, by experienced Vedic Pandits.",
          },
        },
        {
          "@type": "Question",
          name: "Is the pooja private?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — 100% private puja with direct pandit booking and no agents.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahakal Pooja Services | Authentic Temple Poojas in Ujjain",
    template: "%s | Mahakal Pooja Services",
  },
  description:
    "Book authentic Mangalnath & Mahakal Temple Poojas online. Performed by experienced Vedic Pandits — Pt. Abhishek Vyas — in Ujjain. Mangal Dosh, Kaal Sarp, Rudrabhishek & more.",
  applicationName: "Mahakal Pooja Services",
  authors: [{ name: "Pt. Abhishek Vyas", url: siteUrl }],
  creator: "Pt. Abhishek Vyas",
  keywords: [
    "Mangalnath temple pooja",
    "Mahakal temple pooja Ujjain",
    "Kaal Sarp Dosh Puja Ujjain",
    "Mangal Dosh Puja",
    "Rudrabhishek Ujjain",
    "Mahamrityunjay Jaap",
    "pandit in Ujjain",
    "book pooja online Ujjain",
    "Pt. Abhishek Vyas",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico", apple: "/homepageimage.png" },
  openGraph: {
    title: "Mahakal Pooja Services | Authentic Temple Poojas in Ujjain",
    description:
      "Book authentic Mangalnath & Mahakal Temple Poojas online. Experienced Vedic Pandits. Transparent pricing.",
    url: siteUrl, // ← previously pointed at a wrong third-party domain
    siteName: "Mahakal Pooja Services",
    images: [
      {
        // Best: add a dedicated 1200×630 /public/og-image.png. Until then, reuse an existing asset.
        url: "/homepageimage.png",
        width: 1200,
        height: 630,
        alt: "Mahakal Pooja Services — Mangalnath & Mahakal Temple Poojas, Ujjain",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // ← was "summary" (small)
    title: "Mahakal Pooja Services | Authentic Temple Poojas in Ujjain",
    description:
      "Book authentic Mangalnath & Mahakal Temple Poojas online. Experienced Vedic Pandits. Transparent pricing.",
    images: ["/homepageimage.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Inside your root layout's <head> element add:                      */
/*                                                                     */
/*  <script                                                             */
/*    type="application/ld+json"                                        */
/*    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}  */
/*  />                                                                  */
/* ------------------------------------------------------------------ */
