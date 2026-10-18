# SEO Audit Report — panditabhishekvyas.in

**Date:** 2026-08-11
**Site:** https://www.panditabhishekvyas.in (Next.js App Router, Vercel — verified from live HTML: `_next/static`, Geist font, `next/image` srcSets)
**Baseline:** crawled live production site directly (source repo not available locally at the time of this audit — see §6).

> **Important:** the locally-attached project (`MahakaalMangalnaathJaishreemahakaal`) is an
> empty Maven "Hello World" starter and does **not** contain this site's source. The real
> source lives in a different GitHub repo + Vercel project. Ready-to-paste fixes are in
> `SEO/drop-in/` — apply them to that repo, or share the repo path/URL and they can be applied directly.

---

## 1. Audit summary

| Area | Status | Severity |
|------|--------|----------|
| Meta title | ⚠️ 81 chars (too long, truncates in SERPs) | Medium |
| Meta description | ✅ Present, good length & keywords | – |
| Canonical URL | ❌ **Missing** | High |
| `og:url` | ❌ **Points to a third-party domain that is NOT yours** | High |
| `og:image` / `twitter:image` | ❌ **Missing — no share image on any social platform** | High |
| Twitter card | ⚠️ `summary` (small) instead of `summary_large_image` | Medium |
| Schema.org structured data | ❌ **Zero JSON-LD blocks** (no LocalBusiness, Person, FAQPage, Service) | High |
| robots.txt | ❌ **404** (Vercel serves the app HTML fallback) | High |
| sitemap.xml | ❌ **404** | High |
| Image alt tags | ✅ All 9 images have descriptive `alt`; `next/image` with lazy loading + srcSet | – |
| Heading hierarchy | ✅ 1 × h1, 10 × h2, 24 × h3 — clean structure | – |
| `html lang` | ✅ `lang="en"` | – |
| Internal linking | ⚠️ Single-page app; nav is `#anchor` only; no indexable sub-pages | Medium (opportunity) |
| apple-touch-icon / manifest / theme-color | ❌ Missing | Low |
| Structured data for FAQ | ❌ FAQ accordion is client-rendered — no `FAQPage` JSON-LD | Medium |

**Scorecard: 3 high-severity, 3 medium, several low — plus one domain-integrity bug (`og:url`).**

---

## 2. Before — what the live site serves today

```
<title>            Mahakal Pooja Services | Authentic Mangalnath & Mahakal Temple Poojas, Ujjain   (81 chars)
description        Book authentic Mangalnath & Mahakal Temple Poojas online. Performed by experienced
                   Vedic Pandits — Pt. Abhishek Vyas — in Ujjain. Mangal Dosh, Kaal Sarp, Rudrabhishek & more.
og:title           Mahakal Pooja Services | Authentic Temple Poojas in Ujjain
og:description     Book authentic Mangalnath & Mahakal Temple Poojas online. Experienced Vedic Pandits.
                   Transparent pricing.
og:url             <wrong third-party domain>            ← WRONG DOMAIN (not yours)
og:site_name       Mahakal Pooja Services
og:locale          en_IN
og:type            website
og:image           (absent)
twitter:card       summary          ← small card, and no image to show
twitter:image      (absent)
canonical          (absent)
JSON-LD            (none)
robots.txt         (404)
sitemap.xml        (404)
```

### What is already good (do not touch)
- Meta description is keyword-rich and the right length.
- `og:locale` is correctly `en_IN`.
- Every `<img>` uses `next/image` with descriptive `alt`, `loading="lazy"`, and responsive `srcSet`.
- Heading outline is logical (1 h1 / 10 h2 / 24 h3) with id anchors (`#poojas`, `#packages`, `#gallery`, `#about`, `#testimonials`, `#faq`, `#contact`).
- Public assets already present: `homepageimage.png`, `shivling.jpg`, `gallery-1.jpg` … `gallery-5.jpg` (usable for OG image).
- Business facts confirmed from the page: telephone +91 6260552014, WhatsApp +91 8085039147, email info@mangalnathmandirujain.com, address "Ankpat Marg, Hari Nagar Gayatri Shakti Peeth, Ujjain (M.P.) 456006", hours "5:00 AM to 10:00 PM, all days", pooja services: Mangal Dosh Puja, Kaal Sarp Dosh Puja, Rudrabhishek, Mahamrityunjay Jaap (+ packages Basic/Standard/Premium).

---

## 3. Fixes (drop-in code in `SEO/drop-in/`)

| # | Fix | File to apply in the real repo |
|---|-----|-------------------------------|
| 1 | Unique, ≤60-char title; correct canonical | `app/layout.tsx` → `metadata` |
| 2 | Fix `og:url` → `https://www.panditabhishekvyas.in` | `app/layout.tsx` → `openGraph` |
| 3 | Add `og:image` / `twitter:image` (`summary_large_image`) | `app/layout.tsx` → `openGraph`/`twitter` |
| 4 | Add full JSON-LD graph (ProfessionalService, Person, WebSite, FAQPage, Service list, BreadcrumbList) | `app/layout.tsx` → `<script type="application/ld+json">` |
| 5 | Create `robots.txt` (allow all + sitemap ref) | new `app/robots.ts` |
| 6 | Create `sitemap.xml` (home URL; add real routes when pages are added) | new `app/sitemap.ts` |
| 7 | Add apple-touch-icon + theme-color (optional) | `app/layout.tsx` |

**Recommended title (58 chars):** `Mahakal Pooja Services | Authentic Temple Poojas in Ujjain`
**Recommended description (unchanged, it's good):** keep the current one.

### Structured data plan (accurate to the live page — nothing invented)
- `ProfessionalService` (id `#business`): name, url, telephone, email, address, areaServed Ujjain, openingHours `Mo-Su 05:00-22:00`, priceRange, sameAs (WhatsApp).
- `Person` (id `#person`): Pt. Abhishek Vyas, jobTitle "Vedic Pandit", worksFor → business.
- `WebSite` (id `#website`) → publisher business.
- `Service` list: Mangal Dosh Puja, Kaal Sarp Dosh Puja, Rudrabhishek, Mahamrityunjay Jaap (fill prices from the page if desired).
- `FAQPage`: **placeholder** — paste the actual Q&As from the `#faq` accordion (they are client-rendered, so I could not read them from the HTML).
- `BreadcrumbList`: single Home item (grows when real routes are added).

### ⚠️ One bug to fix regardless of everything else
`og:url` points at a third-party domain that is NOT yours. Every social
crawler (Facebook/LinkedIn/WhatsApp) uses `og:url` to attribute the share — pointing it
at someone else's domain attributes your shares to them and can split signals.
Fix it to `https://www.panditabhishekvyas.in`.

---

## 4. Post-deploy checklist

- [ ] Apply `drop-in/` files, deploy to Vercel
- [ ] Verify: `https://www.panditabhishekvyas.in/robots.txt` and `/sitemap.xml` return 200
- [ ] Add the site in Google Search Console (if not already) and submit `/sitemap.xml`
- [ ] Run Google's Rich Results Test → FAQPage + LocalBusiness should validate
- [ ] Test social share at opengraph.xyz / Facebook Sharing Debugger → image must appear
- [ ] Add a dedicated 1200×630 `/public/og-image.png` (can be generated from `homepageimage.png`) for best card rendering
- [ ] Confirm after deploy that `og:url` and the canonical both point to `https://www.panditabhishekvyas.in` (no third-party domains anywhere)

---

## 5. Bigger opportunity (recommended next step)

The site is a single page with anchor navigation — every search for "Kaal Sarp Dosh Puja
Ujjain", "Rudrabhishek Ujjain price", etc. can only rank the homepage. Creating real routes
such as `/poojas/mangal-dosh-puja`, `/poojas/kaal-sarp-dosh-puja`, `/poojas/rudrabhishek`
(each with its own title, description, FAQ JSON-LD, and internal links back to home) is the
single highest-leverage SEO move for a service business. `sitemap.ts` in the drop-in is
already structured to grow with these routes.

---

## 6. About this audit

- The source repository for panditabhishekvyas.in is **not on this machine** (checked:
  no matching project under `~/IdeaProjects`; the attached Maven starter is empty).
- This audit was produced by crawling the live site. The `drop-in/` files are written for
  Next.js App Router (the framework the live site runs) and are ready to paste.
- To have the changes applied directly (and a local build verified, like the Kranthi
  portfolio pass), clone the real repo locally or give the GitHub URL.
