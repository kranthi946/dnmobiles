// Catalog taxonomy adapted from GR Phones (shop.grphones.com.au) to DN Mobiles'
// services: repair-first, refurbished enquiry, accessories in-store.
// Nav: Home · Devices · Brands · Categories · Refurbished · Contact · Sell Device

export interface CatalogLink {
  label: string;
  href: string;
  sub?: string;
}

export interface CatalogGroup {
  label: string;
  href: string;
  columns: { heading: string; links: CatalogLink[] }[];
  footnote?: string;
}

const repairAnchor = "/#services"; // homepage services section

export const devices: CatalogGroup = {
  label: "Devices",
  href: "/devices",
  columns: [
    {
      heading: "Apple",
      links: [
        { label: "iPhone Repairs", href: repairAnchor, sub: "All models" },
        { label: "iPad Repairs", href: repairAnchor, sub: "All generations" },
        { label: "Apple Watch", href: repairAnchor, sub: "Glass & battery" },
        { label: "MacBook", href: repairAnchor, sub: "Battery & diagnosis" },
      ],
    },
    {
      heading: "Samsung",
      links: [
        { label: "Galaxy S Series", href: repairAnchor, sub: "S10 – S26 Ultra" },
        { label: "Galaxy Note / Ultra", href: repairAnchor, sub: "Screen & stylus" },
        { label: "Galaxy A Series", href: repairAnchor, sub: "A04 – A76" },
        { label: "Galaxy Tab", href: repairAnchor, sub: "All tablets" },
      ],
    },
    {
      heading: "Other Devices",
      links: [
        { label: "Google Pixel", href: repairAnchor, sub: "Pixel 3 – 10 Pro" },
        { label: "Oppo / Xiaomi", href: repairAnchor, sub: "All models" },
        { label: "Motorola / Other", href: repairAnchor, sub: "All brands" },
        { label: "Tablets", href: repairAnchor, sub: "All brands" },
      ],
    },
  ],
  footnote: "iPhone · Samsung · Google · Oppo · Xiaomi · Motorola — every repair starts with a FREE inspection",
};

export const brands: CatalogGroup = {
  label: "Brands",
  href: "/brands",
  columns: [
    {
      heading: "Most Repaired",
      links: [
        { label: "Apple", href: "/brands", sub: "iPhone, iPad, Watch, MacBook" },
        { label: "Samsung", href: "/brands", sub: "Galaxy phones & tablets" },
        { label: "Google Pixel", href: "/brands", sub: "All models" },
        { label: "Oppo", href: "/brands", sub: "Reno, A-series & more" },
      ],
    },
    {
      heading: "Also Repaired",
      links: [
        { label: "Xiaomi / Redmi", href: "/brands" },
        { label: "Motorola", href: "/brands" },
        { label: "Nokia", href: "/brands" },
        { label: "Huawei", href: "/brands" },
      ],
    },
    {
      heading: "All Brands",
      links: [
        { label: "Vivo / OnePlus", href: "/brands" },
        { label: "HTC / Sony", href: "/brands" },
        { label: "Any Tablet", href: "/brands" },
        { label: "Any Brand — enquire", href: "/sell-device" },
      ],
    },
  ],
  footnote: "We repair all brands — if it's a phone, tablet or iPad, bring it in",
};

export const categories: CatalogGroup = {
  label: "Categories",
  href: "/categories",
  columns: [
    {
      heading: "Repairs",
      links: [
        { label: "Screen Replacement", href: repairAnchor, sub: "Same day" },
        { label: "Battery Replacement", href: repairAnchor, sub: "Same day" },
        { label: "Back Glass", href: repairAnchor, sub: "Same day" },
        { label: "Charging Port", href: repairAnchor },
      ],
    },
    {
      heading: "More Repairs",
      links: [
        { label: "Camera & Speakers", href: repairAnchor },
        { label: "Water Damage", href: repairAnchor, sub: "Free assessment" },
        { label: "Data Recovery", href: repairAnchor },
        { label: "Software Issues", href: repairAnchor },
      ],
    },
    {
      heading: "In Store",
      links: [
        { label: "Accessories", href: "/categories", sub: "Cases, protectors" },
        { label: "Chargers & Cables", href: "/categories", sub: "Fast charging" },
        { label: "Screen Protectors", href: "/categories" },
        { label: "Refurbished Phones", href: "/refurbished" },
      ],
    },
  ],
  footnote: "Every repair includes free inspection & diagnostics before any work starts",
};

export interface CollectionPage {
  slug: string;
  title: string;
  navLabel: string;
  heading: string;
  headingAccent: string;
  subheading: string;
  description: string;
  cards: CatalogLink[];
  ctaTitle: string;
  ctaSub: string;
}

export const catalogPages: CollectionPage[] = [
  {
    slug: "devices",
    navLabel: "Devices",
    title: "Devices We Repair in Port Augusta | DN Mobiles",
    heading: "Every Device.",
    headingAccent: "Expertly Repaired.",
    subheading:
      "iPhone, Samsung, Google Pixel, iPad, tablets and more — all brands repaired in-house with a free inspection first.",
    description:
      "DN Mobiles repairs phones, tablets and iPads of every brand in Port Augusta — screen, battery, back glass, charging ports and more. Free inspection on every device.",
    cards: devices.columns.flatMap((col) =>
      col.links.map((l) => ({
        label: l.label,
        href: l.href,
        sub: l.sub ?? "",
      }))
    ),
    ctaTitle: "Not sure what your device needs?",
    ctaSub: "Bring it in — the inspection and diagnostics are completely free.",
  },
  {
    slug: "brands",
    navLabel: "Brands",
    title: "Phone Brands We Repair | DN Mobiles Port Augusta",
    heading: "All Brands.",
    headingAccent: "One Local Shop.",
    subheading:
      "Apple, Samsung, Google, Oppo, Xiaomi, Motorola — we fix phones from every maker, with quality parts and honest pricing.",
    description:
      "DN Mobiles repairs phones from all brands — Apple, Samsung, Google Pixel, Oppo, Xiaomi, Motorola, Huawei and more. Free inspection before any repair.",
    cards: [
      { label: "Apple", href: repairAnchor, sub: "iPhone · iPad · Apple Watch · MacBook" },
      { label: "Samsung", href: repairAnchor, sub: "Galaxy phones & tablets" },
      { label: "Google Pixel", href: repairAnchor, sub: "Pixel 3 – 10 Pro" },
      { label: "Oppo", href: repairAnchor, sub: "Reno, Find & A-series" },
      { label: "Xiaomi / Redmi", href: repairAnchor, sub: "All models" },
      { label: "Motorola", href: repairAnchor, sub: "All models" },
      { label: "Huawei", href: repairAnchor },
      { label: "Nokia", href: repairAnchor },
      { label: "Vivo / OnePlus", href: repairAnchor },
      { label: "Sony / HTC", href: repairAnchor },
      { label: "Any Tablet", href: repairAnchor, sub: "Galaxy Tab, Lenovo & more" },
      { label: "Any Other Brand", href: "/sell-device", sub: "Just ask — all brands welcome" },
    ],
    ctaTitle: "Your brand not listed?",
    ctaSub: "We repair all brands. Call or WhatsApp us about your device today.",
  },
  {
    slug: "categories",
    navLabel: "Categories",
    title: "Repair Categories & Services | DN Mobiles",
    heading: "Repairs.",
    headingAccent: "Accessories. Everything.",
    subheading:
      "From same-day screens to water damage and data recovery — plus cases, chargers and protectors in store.",
    description:
      "Screen replacement, battery replacement, back glass, charging ports, water damage, data recovery and accessories — all at DN Mobiles, Port Augusta.",
    cards: [
      { label: "Screen Replacement", href: repairAnchor, sub: "Same day · iPhone, Samsung & more" },
      { label: "Battery Replacement", href: repairAnchor, sub: "Same day · All brands" },
      { label: "Back Glass Replacement", href: repairAnchor, sub: "Restore the showroom look" },
      { label: "Charging Port Repair", href: repairAnchor },
      { label: "Camera / Speaker Repair", href: repairAnchor },
      { label: "Water Damage Assessment", href: repairAnchor, sub: "Free inspection first" },
      { label: "Data Recovery", href: repairAnchor },
      { label: "Software Fixes", href: repairAnchor },
      { label: "iPad & Tablet Screen Repair", href: repairAnchor },
      { label: "Accessories", href: "/categories", sub: "Cases, protectors & more in store" },
      { label: "Chargers & Cables", href: "/categories", sub: "Fast charging in store" },
      { label: "Refurbished Phones", href: "/refurbished", sub: "Serviced & ready to go" },
    ],
    ctaTitle: "Not sure which category you need?",
    ctaSub: "Free inspection — we'll diagnose it on the spot, before any cost.",
  },
  {
    slug: "refurbished",
    navLabel: "Refurbished",
    title: "Refurbished Phones in Port Augusta | DN Mobiles",
    heading: "Quality Devices.",
    headingAccent: "Honest Value.",
    subheading:
      "Professionally serviced refurbished phones and tablets — tested in-house, priced for your budget and your requirements.",
    description:
      "Buy refurbished phones and tablets in Port Augusta from DN Mobiles — professionally serviced, tested in-house and priced to your requirements and budget.",
    cards: [
      { label: "iPhone (Refurbished)", href: "/#contact", sub: "Various capacities · enquire" },
      { label: "Samsung Galaxy (Refurbished)", href: "/#contact", sub: "Various models · enquire" },
      { label: "Google Pixel (Refurbished)", href: "/#contact" },
      { label: "iPad & Tablets (Refurbished)", href: "/#contact" },
      { label: "Budget Phones (Refurbished)", href: "/#contact", sub: "Great first phones" },
      { label: "Custom Requirements", href: "/#contact", sub: "Depends on your budget — ask us" },
    ],
    ctaTitle: "Looking for a specific device?",
    ctaSub:
      "Stock changes daily and depends on your requirements and budget — WhatsApp us what you're after and today's best offer.",
  },
  {
    slug: "sell-device",
    navLabel: "Sell Device",
    title: "Sell or Trade In Your Device | DN Mobiles Port Augusta",
    heading: "Selling?",
    headingAccent: "We Buy Devices.",
    subheading:
      "Old phone or tablet gathering dust? Bring it in — everything is assessed on the spot and offers are instant.",
    description:
      "Sell your used phone or tablet at DN Mobiles Port Augusta — instant over-the-counter assessment, fair offers and same-day payment. No trade-in barriers.",
    cards: [
      { label: "How it works", href: "/#contact", sub: "Bring it in or WhatsApp us first" },
      { label: "What we buy", href: "/#contact", sub: "Phones, iPads & tablets — all brands" },
      { label: "Condition matters", href: "/#contact", sub: "Working or faulty — we assess either way" },
      { label: "Instant offer", href: "/#contact", sub: "Fair on-the-spot cash or bank transfer" },
    ],
    ctaTitle: "Charging port, battery, and quality accessory options — ask in store for everything on offer",
    ctaSub: "",
  },
];

export function getCatalogPage(slug: string): CollectionPage | null {
  return catalogPages.find((p) => p.slug === slug) ?? null;
}

export const navCatalog: { label: string; href: string; group?: CatalogGroup }[] = [
  { label: "Devices", href: "/devices", group: devices },
  { label: "Brands", href: "/brands", group: brands },
  { label: "Categories", href: "/categories", group: categories },
  { label: "Refurbished", href: "/refurbished" },
  { label: "Sell Device", href: "/sell-device" },
];
