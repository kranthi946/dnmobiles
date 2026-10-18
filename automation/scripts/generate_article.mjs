#!/usr/bin/env node
/**
 * Daily article generator for panditabhishekvyas.in (GitHub Actions version).
 *
 * Picks today's topic from automation/topics/topic-calendar.csv (rotates by day),
 * asks OpenAI to write the article, and writes content/blog/<date>-<slug>.md
 * in the repo. The workflow then commits + pushes, which triggers Vercel deploy.
 *
 * Env: OPENAI_API_KEY (required), OPENAI_MODEL (optional, default gpt-4o-mini)
 * Usage: node generate_article.mjs [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const CALENDAR = path.join(REPO_ROOT, "automation", "topics", "topic-calendar.csv");
const OUT_DIR = path.join(REPO_ROOT, "content", "blog");
const SITE_URL = "https://www.panditabhishekvyas.in";
const WHATSAPP = "https://wa.me/916260552014";
const DRY_RUN = process.argv.includes("--dry-run");

function todayTopic() {
  const csv = fs.readFileSync(CALENDAR, "utf8");
  const rows = csv.trim().split("\n").slice(1).map((l) => l.split(","));
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  const row = rows[dayOfYear % rows.length];
  return {
    topic: row[1],
    keyword: row[2],
    cta: row[3],
    date: now.toISOString().slice(0, 10),
  };
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function generate(topic) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "You write devotional SEO articles for Mahakal Pooja Services (panditabhishekvyas.in), a pooja booking service at Mangalnath & Mahakal Temple, Ujjain. Every pooja is performed personally by Pt. Abhishek Vyas (Acharya), an experienced Vedic Pandit at Mangalnath Temple & Mahakal Temple, Ujjain — 100% private puja, direct pandit booking, no agents, with a pooja certificate and photos/videos after the ritual. Rules: 800-1200 words; 4-6 H2 sections; factual and respectful, no invented rituals, no medical/legal claims; mention Pt. Abhishek Vyas naturally in the first two paragraphs and once more near the end; end with an FAQ (3 questions) and a soft CTA. Return ONLY valid JSON: {\"title\": string, \"description\": string (140-155 chars), \"keywords\": [string], \"body\": string (markdown starting with an H2, no H1), \"faq\": [{\"q\": string, \"a\": string}]}.",
        },
        {
          role: "user",
          content: `Topic: ${topic.topic}. Primary keyword: ${topic.keyword}. CTA pooja: ${topic.cta}. Today's date: ${topic.date}. Include an internal link to ${SITE_URL}/#poojas and one to ${SITE_URL}/#contact in the body.`,
        },
      ],
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? "";
  const parsed = JSON.parse(content.replace(/^```json\s*/i, "").replace(/```\s*$/, ""));
  if (!parsed.title || !parsed.body) throw new Error("AI response missing title/body");
  return parsed;
}

function buildMarkdown(topic, ai) {
  const faqBlock = ai.faq.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n");
  const cta = `---\n\n## Book Your Pooja\n\nBook this pooja at Mangalnath / Mahakal Temple, Ujjain with Pt. Abhishek Vyas — 100% private puja, no agents. [Book on WhatsApp](${WHATSAPP}?text=${encodeURIComponent("Namaste! I want to book: " + ai.title)}) or see all [pooja services](${SITE_URL}/#poojas).`;
  const priest = `---\n\n## About Your Acharya — Pt. Abhishek Vyas\n\nEvery pooja is performed personally by **Pt. Abhishek Vyas** (Acharya), an experienced Vedic Pandit at **Mangalnath Temple & Mahakal Temple, Ujjain**. 100% private puja, direct pandit booking, no agents — with a pooja certificate and photos/videos shared after the ritual.\n\n- 📞 Call / WhatsApp: **+91 6260552014**\n- 📧 Email: abhishekvyas069@gmail.com\n- 🙏 Book online: [All Pooja Services](${SITE_URL}/#poojas)`;
  const frontmatter = `---\ntitle: "${ai.title}"\ndescription: "${ai.description}"\ndate: "${topic.date}"\nkeywords: [${ai.keywords.map((k) => `"${k}"`).join(", ")}]\nctaPooja: "${topic.cta}"\n---\n\n`;
  return frontmatter + ai.body + "\n\n" + faqBlock + "\n\n" + cta + "\n\n" + priest + "\n";
}

async function main() {
  const topic = todayTopic();
  console.log(`Topic: ${topic.topic} (${topic.date})`);
  const slugBase = slugify(topic.topic);
  if (DRY_RUN) {
    console.log(`[dry-run] would write content/blog/${topic.date}-${slugBase}.md (needs OPENAI_API_KEY to generate)`);
    return;
  }
  const ai = await generate(topic);
  const slug = `${topic.date}-${slugify(ai.title)}`;
  const markdown = buildMarkdown(topic, ai);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const file = path.join(OUT_DIR, `${slug}.md`);
  if (fs.existsSync(file)) {
    console.log(`Exists already, skipping: ${slug}`);
    return;
  }
  fs.writeFileSync(file, markdown, "utf8");
  console.log(`Wrote ${file}`);
}

main().catch((e) => {
  console.error("Failed:", e.message);
  process.exit(1);
});
