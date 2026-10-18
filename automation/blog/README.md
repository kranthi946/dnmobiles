# Blog drop-in — for the real panditabhishekvyas.in repo

The daily content pipeline writes markdown files to `content/blog/`. These two pages
render them at `/blog` and `/blog/[slug]` with Article JSON-LD and booking CTAs.

## Install (in the real repo)

1. Copy the files:
   - `app-blog-page.tsx`      → `app/blog/page.tsx`
   - `app-blog-slug-page.tsx` → `app/blog/[slug]/page.tsx`
   - `lib-posts.ts`           → `lib/posts.ts`
2. Create the content folder: `content/blog/` (keep a sample article so the build works).
3. Add the dependency: `npm i react-markdown` (used to render article bodies).
4. Add `content` to `.gitignore`? **No** — markdown files must be committed (that's how
   Vercel deploys them). They are small text files.
5. Optional: add `/blog` to `app/sitemap.ts` and a "Blog"/"Articles" link in the navbar.

## How it works

- `lib/posts.ts` reads `content/blog/*.md` at build time, parses the frontmatter
  (title / description / date / keywords / ctaPooja) and the body.
- `/blog` lists posts newest-first.
- `/blog/[slug]` is statically generated (`generateStaticParams`), sets the page
  title/description/canonical/OG from frontmatter, injects `Article` JSON-LD, renders
  the markdown, and appends a WhatsApp booking CTA if `ctaPooja` is set.

## Wiring to the pipeline

- n8n `daily-content-engine.json`: the "Commit Article to GitHub" node writes files to
  `content/blog/<date>-<slug>.md` in the repo → Vercel rebuilds → article live.
- GitHub Actions alternative: `../.github/workflows/daily-article.yml` + `../scripts/generate_article.mjs`
  do the same thing on a cron schedule without n8n.
