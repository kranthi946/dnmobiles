import en from "../messages/en.json";

export interface ServiceItem {
  icon: string;
  name: string;
  duration: string;
  price: string;
  desc: string;
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAllServices(): ServiceItem[] {
  return (en.services?.items ?? []) as ServiceItem[];
}

export function getServiceBySlug(slug: string): { service: ServiceItem; index: number } | null {
  const items = getAllServices();
  const index = items.findIndex((p) => slugify(p.name) === slug);
  if (index === -1) return null;
  return { service: items[index], index };
}
