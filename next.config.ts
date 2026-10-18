import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return [
      { source: "/devices", destination: "/catalog/devices" },
      { source: "/brands", destination: "/catalog/brands" },
      { source: "/categories", destination: "/catalog/categories" },
      { source: "/refurbished", destination: "/catalog/refurbished" },
      { source: "/sell-device", destination: "/catalog/sell-device" },
      { source: "/services/professional-service", destination: "/services/professional-service-diagnostics" },
      { source: "/services/accessories", destination: "/catalog/categories" },
    ];
  },
};

export default nextConfig;
