import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import FloatingRail from "./components/FloatingRail";
import Footer from "./components/Footer";
import LiveRecentRepairs from "./components/LiveRecentRepairs";
import en from "../messages/en.json";

const siteUrl = "https://www.dnmobiles.com.au";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F17" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobilePhoneRepairService",
      "@id": `${siteUrl}/#business`,
      name: "DN Mobiles",
      alternateName: "DN Mobile Repairs Port Augusta",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/images/logo.png`,
      image: `${siteUrl}/og-image.jpg`,
      telephone: "+61420655514",
      email: "dnmobilerepairspa@gmail.com",
      priceRange: "$$",
      currenciesAccepted: "AUD",
      paymentAccepted: "Cash, Bank Transfer, PayID, EFTPOS",
      address: {
        "@type": "PostalAddress",
        streetAddress: "18 Domeyer Court",
        addressLocality: "Port Augusta",
        addressRegion: "South Australia",
        postalCode: "5700",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -32.4930,
        longitude: 137.7628,
      },
      hasMap: "https://maps.google.com/?q=18+Domeyer+Court+Port+Augusta+SA+5700",
      sameAs: [
        "https://www.facebook.com/share/1cuNsdpSxT/?mibextid=wwXIfr",
        "https://wa.me/61420655514",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "168",
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: [
        { "@type": "City", name: "Port Augusta" },
        { "@type": "City", name: "Stirling North" },
        { "@type": "City", name: "Port Pirie" },
        { "@type": "City", name: "Whyalla" },
        { "@type": "AdministrativeArea", name: "Spencer Gulf" },
        { "@type": "AdministrativeArea", name: "Flinders Ranges" },
        { "@type": "AdministrativeArea", name: "South Australia" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mobile Phone & Tablet Repair Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "iPhone & Samsung Screen Replacement",
              description: "Factory-grade OLED & LCD screen restoration with TrueTone retention and 90-day warranty.",
            },
            price: "79.00",
            priceCurrency: "AUD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Smartphone Battery Replacement",
              description: "High-capacity grade-A battery replacement with zero health degradation warnings.",
            },
            price: "59.00",
            priceCurrency: "AUD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Laser Rear Back Glass Repair",
              description: "Precision non-invasive back glass separation preserving wireless charging and internal frame.",
            },
            price: "49.00",
            priceCurrency: "AUD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Apple Logo Boot Loop Recovery",
              description: "Logic board firmware and chip-level boot recovery with zero personal photo/data loss.",
            },
            price: "69.00",
            priceCurrency: "AUD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Android Pop-up Ad & Virus Removal",
              description: "Full malware, adware, and malicious redirect eradication restoring original factory speed.",
            },
            price: "49.00",
            priceCurrency: "AUD",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "DN Mobiles",
      alternateName: "DN Mobile Repairs",
      description:
        "Port Augusta's #1 mobile phone, iPad and tablet repair centre. 100% free inspection, 15-30m express turnaround and 90-day warranty at 18 Domeyer Court.",
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: ["en-AU", "hi"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/services/{search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumbs`,
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
          name: "Repair Services",
          item: `${siteUrl}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Price Estimator",
          item: `${siteUrl}/#estimator`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Book Repair",
          item: `${siteUrl}/#contact`,
        },
      ],
    },
    ...(en.services?.items ?? []).map((service) => ({
      "@type": "Service",
      name: service.name,
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: { "@type": "City", name: "Port Augusta" },
      url: `${siteUrl}/#services`,
    })),
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: (en.faq?.items ?? []).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DN Mobiles | Phone Repairs in Port Augusta, SA",
    template: "%s | DN Mobiles",
  },
  description:
    "Port Augusta's premier smartphone, iPad & tablet repair centre. Cracked screens, battery replacements, back glass, virus clean & boot loop fix. 100% FREE inspection, same-day service & 90-day warranty.",
  keywords:
    "phone repair Port Augusta, mobile repair Port Augusta, iPhone screen repair Port Augusta, Samsung battery replacement SA, iPad repair Spencer Gulf, tablet repair Flinders Ranges, refurbished phones Port Augusta, mobile phone repair South Australia, apple logo boot loop fix, android virus removal Port Augusta",
  applicationName: "DN Mobiles",
  authors: [{ name: "DN Mobile Repairs Port Augusta" }],
  generator: "Next.js",
  creator: "DN Mobiles",
  publisher: "DN Mobiles",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
      "hi": "/?lang=hi",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DN Mobiles | Phone Repairs in Port Augusta, SA",
    description:
      "Screen • Battery • iPad • Tablet repairs with 100% FREE inspection & diagnostics. Same-day turnaround & 90-day warranty. Call 0420 655 514.",
    url: siteUrl,
    siteName: "DN Mobiles",
    locale: "en_AU",
    alternateLocale: ["hi_IN"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DN Mobiles — Phone Repairs in Port Augusta, South Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DN Mobiles | Phone Repairs in Port Augusta, SA",
    description:
      "Screen • Battery • iPad • Tablet repairs with 100% FREE inspection & diagnostics. Same-day turnaround & 90-day warranty.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "AU-SA",
    "geo.placename": "Port Augusta, South Australia",
    "geo.position": "-32.4930;137.7628",
    ICBM: "-32.4930, 137.7628",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "DN Mobiles",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-dark dark:bg-carbon dark:text-white antialiased selection:bg-brand selection:text-white transition-colors duration-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
            <FloatingRail />
            <LiveRecentRepairs />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
