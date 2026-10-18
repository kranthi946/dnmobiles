import type { MetadataRoute } from "next";
import { getAllServices, slugify } from "../lib/services";
import { catalogPages } from "../lib/catalog";

const siteUrl = "https://www.dnmobiles.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const serviceUrls = getAllServices().map((p) => ({
    url: `${siteUrl}/services/${slugify(p.name)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  const catalogUrls = catalogPages.map((p) => ({
    url: `${siteUrl}/catalog/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceUrls,
    ...catalogUrls,
  ];
}
