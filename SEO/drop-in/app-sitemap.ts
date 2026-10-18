/**
 * DROP-IN for panditabhishekvyas.in — create `app/sitemap.ts`
 * Serves /sitemap.xml (currently 404). The site is single-page today, so the
 * sitemap lists the home URL. When real per-pooja routes are added
 * (e.g. /poojas/mangal-dosh-puja), append them here — the array is ready to grow.
 */
import type { MetadataRoute } from "next";

const siteUrl = "https://www.panditabhishekvyas.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Example once per-pooja pages exist:
    // {
    //   url: `${siteUrl}/poojas/mangal-dosh-puja`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.9,
    // },
  ];
}
