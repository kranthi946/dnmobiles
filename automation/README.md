# Automation Pack — panditabhishekvyas.in lead generation

Starter automations for the lead-generation plan. Everything here is free/self-hostable.

```
automation/
├── README.md                          ← you are here
├── scripts/
│   └── seo_health_check.py            ← crawls the site, checks robots/sitemap/head tags (tested ✓)
└── n8n/
    ├── lead-capture-and-notify.json       ← booking form → Google Sheet → WhatsApp notify + auto-reply
    └── review-request-after-pooja.json    ← daily: find completed bookings → WhatsApp review request
```

---

## 1. Install n8n (one-time)

n8n is a free, open-source workflow automation platform ("n8 tool").
Easiest: self-host with Docker (any ₹200–500/mo VPS, or your laptop for testing).

```bash
docker run -it --rm --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
```

Open http://localhost:5678 → **Import workflow** → pick the `.json` files in `n8n/`.
Each imported workflow needs credentials configured (click each node → Create credential):

| Credential | Where to get it |
|---|---|
| **Google Sheets** (OAuth) | Google Cloud Console → enable Sheets API → OAuth consent |
| **WhatsApp Cloud API** | Meta for Developers → create app → WhatsApp → get Test Number + token; for production: business verification + a phone number |
| **Webhook** | n8n generates the URL automatically when you activate the workflow |

---

## 2. Workflow 1 — Lead capture → notify (the money workflow)

Flow: **booking form on site → n8n webhook → Google Sheet (lead log) → WhatsApp to you → WhatsApp auto-reply to devotee**.

1. Activate the workflow → copy the webhook URL (e.g. `https://your-n8n:5678/webhook/lead`).
2. Point the site's booking form at it (POST JSON: `{ name, phone, pooja, temple, date, source }`) — either from the Next.js API route or directly from the form with `fetch`.
3. Sheet `Leads` columns: `Timestamp, Name, Phone, PoojaType, Temple, Date, Source, Status`.
4. The WhatsApp node notifies **your** number instantly (respond < 5 min = conversion) and sends the devotee a confirmation auto-reply.

## 3. Workflow 2 — Post-pooja review requests (the reputation engine)

Runs daily at 9 AM: reads a `Bookings` sheet (columns incl. `PoojaDate`, `Status`, `Reviewed`, `ReviewLink`), finds completed poojas from ≥1 day ago that haven't been asked, sends a WhatsApp review request with the **Google review link**, and marks them `Requested`.

- Generate the Google review link via [Google Business Profile → Get more reviews](https://business.google.com) (short link like `g.page/r/XXXX/review`).
- One field per booking: `PoojaDate` (ISO date) is used to compute "1+ day after".

## 4. SEO health check — schedule it

```bash
# manual
python3 automation/scripts/seo_health_check.py

# every morning (cron)
0 8 * * * cd /path/to/repo && python3 automation/scripts/seo_health_check.py >> /tmp/seo-health.log 2>&1 || echo "SEO check FAILED" | mail -s "SEO alert" you@example.com
```

Non-zero exit code = something broke → hook it into n8n (HTTP Request node) or GitHub
Actions / Vercel Cron to send a WhatsApp/email alert. **Baseline today: 7 failures** —
all of them fixed by deploying `SEO/drop-in/` (then the `/poojas/*` pages turn the
remaining 4 green).

## 5. ONE PLACE — the daily ops dashboard (n8n)

Run **all** daily jobs from a single n8n instance. Every workflow below is in `n8n/`
(import all three → configure credentials → activate). One place, every day, same routine:

| Time (IST) | Workflow | What it does |
|---|---|---|
| 06:00 | `daily-content-engine.json` | Picks today's topic → AI writes the article → commits `content/blog/<date>-<slug>.md` → Vercel auto-deploys → WhatsApp "published ✅" to you |
| 08:00 | `seo_health_check.py` (HTTP node or cron) | Crawls the site; WhatsApp alert if canonicals/robots/sitemap/JSON-LD break |
| 09:00 | `review-request-after-pooja.json` | Sends Google review requests for poojas completed ≥1 day ago |
| on lead | `lead-capture-and-notify.json` | Booking form → Google Sheet → instant WhatsApp to you + auto-reply to devotee |
| Mon 09:00 | (10-min build) Google Sheets → WhatsApp | Weekly lead & revenue digest |

### The daily article pipeline, end to end

```
n8n 06:00 ──▶ topic from topic-calendar.csv (30 topics, rotates daily)
        ──▶ OpenAI/Gemini writes 800–1200 word article (strict template)
        ──▶ assembles markdown + frontmatter + Article JSON-LD
        ──▶ git commit to content/blog/  →  Vercel deploys automatically
        ──▶ new page live at /blog/<slug> with WhatsApp booking CTA
        ──▶ WhatsApp notification: "✅ Article published"
```

**Zero-infra alternative (no n8n needed):** the GitHub Actions workflow
`.github/workflows/daily-article.yml` + `scripts/generate_article.mjs` do the same thing
on a cron schedule — add one secret (`OPENAI_API_KEY`) and it runs every day at 07:00 IST.

**Blog pages on the site:** `blog/README.md` + the three code files render these articles
at `/blog` and `/blog/[slug]` (with Article JSON-LD and a WhatsApp CTA per article).

**Daily volume caution:** AI articles need the guardrails in `templates/article-template.md`.
Keep the 30-topic calendar fresh, vary angles, and if quality dips, switch the n8n IF node
to "review mode" so articles are sent to your WhatsApp for approval before publishing.

## 6. Recommended next automations (build when ready)

| Automation | Tool | Notes |
|---|---|---|
| Weekly lead/₹ digest (from the Leads sheet) | n8n + Google Sheets → WhatsApp | 10 min to build in n8n |
| New Google review alerts + AI-drafted reply | n8n → Google Places API → AI → you approve | Semi-auto; never auto-post replies |
| Auspicious muhurat dates → social posts | Prokerala Panchang API (free tier) → script → Meta Graph API | Review before posting |
| Festival broadcast to past clients | n8n + WhatsApp template messages | ⚠️ India DLT: marketing templates need approval + opt-in consent |
| Competitor price watch | n8n HTTP → parse → sheet | Fragile (sites change); weekly is enough |

## 7. What NOT to automate

- **Google Business Profile optimization & review replies** — alert/draft yes, auto-post no.
- **Google Ads** — automate reporting only; keep bids/budgets human for now.
- **Writing the /poojas/* pages** — AI-assisted is fine, but quality + accuracy matter.

## 8. Compliance (India) — read before broadcasting

- **Transactional WhatsApp messages** (booking confirmations, review requests after a
  service) to customers who contacted you are generally fine.
- **Marketing/festival broadcasts** require: customer opt-in + a WhatsApp Business API
  template approved under **TRAI DLT rules** (register with a provider like
  Interakt/Wati/360dialog/Meta Cloud API). Do not bulk-message numbers without opt-in —
  that gets your number banned.
