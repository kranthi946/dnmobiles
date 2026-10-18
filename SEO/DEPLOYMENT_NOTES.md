# Deployment Notes — panditabhishekvyas.in SEO work

**Last updated:** 2026-08-11

## Plan (as agreed)

Once the SEO code is ready, it will be pushed to the **actual GitHub repo** and
deployed to **Vercel** for the production site **https://www.panditabhishekvyas.in**.

## Current state

- The source repo for panditabhishekvyas.in is **not on this machine yet** — it lives in a
  different GitHub project + Vercel deployment than `KranthiPortfolio` (which is a separate
  site: kranthikumarkatta.in).
- The attached `MahakaalMangalnaathJaishreemahakaal` folder is an **empty Maven starter**,
  NOT the site's source. It is used here only as a staging location for the deliverables.
- Ready-to-apply code lives in `SEO/drop-in/`:
  - `app-layout-metadata.tsx` — metadata, viewport, and JSON-LD for `app/layout.tsx`
  - `app-robots.ts` — fixes `/robots.txt` (currently 404)
  - `app-sitemap.ts` — fixes `/sitemap.xml` (currently 404)
- Full audit + deploy checklist: `SEO/SEO_AUDIT_REPORT.md`

## When the real repo is available (next steps)

1. Clone/open the real repo locally.
2. Apply the three `drop-in/` files to their proper locations (`app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`).
3. Replace the placeholder FAQ Q&As in the JSON-LD with the real `#faq` accordion content.
4. Add a dedicated 1200×630 `/public/og-image.png` (reuse `homepageimage.png`/gallery images) and update the `og:image` reference if desired.
5. Build + verify locally (titles, canonicals, robots.txt, sitemap.xml, JSON-LD types), then commit.
6. Push to GitHub → deploy to Vercel.
7. Post-deploy: verify `/robots.txt` + `/sitemap.xml` return 200, submit sitemap in Google Search Console, re-test rich results + social share cards (see checklist in `SEO_AUDIT_REPORT.md` §4).

## Key facts to remember

- **Critical bug to fix on deploy:** `og:url` currently points to a **third-party domain that
  is NOT ours** — drop-in sets it to `https://www.panditabhishekvyas.in`. No redirect is needed;
  the wrong domain simply gets replaced.
- Long-term opportunity: create per-pooja routes (`/poojas/*`) for long-tail SEO — sitemap
  is structured to grow with them.
