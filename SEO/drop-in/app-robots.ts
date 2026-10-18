/**
 * DROP-IN for panditabhishekvyas.in — create `app/robots.ts`
 * Serves /robots.txt (currently 404). Add private paths here if any exist.
 */
import type { MetadataRoute } from "next";

const siteUrl = "https://www.panditabhishekvyas.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Example: disallow: ["/admin", "/api"] if such paths exist
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
