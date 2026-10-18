# DN Mobiles — Port Augusta

Website for **DN Mobiles**, a mobile phone sales & service shop in Port Augusta, South Australia (production domain target: https://www.dnmobiles.com.au).

- Screen Replacement, Back Glass Replacement, Battery Replacement, iPad Repair, Tablet Repair, Refurbished Phones — **Free Inspection & Diagnostics** on every device.
- Contact: Ph **0420 655 514** (Naveen) · Email **dnmobilerepairspa@gmail.com** · **18 Domeyer Court, Port Augusta SA 5700**

## Stack

- **Next.js 16** (App Router) + **Tailwind CSS 4** + **framer-motion**
- Bilingual EN / HI via `messages/en.json` + `messages/hi.json` (`app/contexts/LanguageContext`)
- Service detail pages generated from `messages/en.json` items at `app/services/[slug]`

## Key files

| File | What it controls |
|---|---|
| `messages/en.json` / `hi.json` | All visible text, services, packages, testimonials, FAQ |
| `app/layout.tsx` | Metadata + LocalBusiness JSON-LD (address, phone, hours) |
| `app/services/[slug]/page.tsx` | Per-service SEO pages (generated statically) |
| `lib/services.ts` | Slug helpers (PoojaItem → ServiceItem) |
| `public/` | `hero-phone.jpg`, `og-image.jpg`, `repair-1..8.jpg` |

## Folder layout

```
dn-mobile-repairs/
├── app/               # Next.js app router (components, services routes)
├── messages/          # en.json / hi.json translations (all site text)
├── lib/               # services.ts slug/data helpers
├── public/            # optimized site images (referenced by components)
├── assets/
│   ├── raw-images/    # ← drop raw photos here (originals, extracted/)
│   └── mobile-data/   # ← drop service lists / pricing / notes here
├── scripts/           # preview.js helper
└── SEO/               # inherited SEO audit notes from source project
```

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Original project

Adapted from the Mahakaal Mangalnath pooja-services site
(`/Users/kranthi/IdeaProjects/MahakaalMangalnaathJaishreemahakaal`) — same design
system (gold/amber theme, hero, sections, WhatsApp booking flow), rebranded for
DN Mobiles.
