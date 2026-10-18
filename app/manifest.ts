import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DN Mobiles | Phone Repairs Port Augusta",
    short_name: "DN Mobiles",
    description:
      "Port Augusta's #1 trusted smartphone, iPad and tablet repair centre. Screen replacement, battery replacement, back glass, free inspection & 90-day warranty.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#DD052B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
