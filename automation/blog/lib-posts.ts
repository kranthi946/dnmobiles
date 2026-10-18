import fs from "fs";
import path from "path";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  ctaPooja?: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/** Parse the `---` frontmatter block + body from a markdown string. */
function parseMarkdown(raw: string): { frontmatter: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };
  const fm: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    let value: string | string[] = kv[2].replace(/^"|"$/g, "").trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
    }
    fm[kv[1]] = value;
  }
  return { frontmatter: fm, body: match[2].trim() };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { frontmatter, body } = parseMarkdown(raw);
      return {
        slug,
        title: String(frontmatter.title ?? slug),
        description: String(frontmatter.description ?? ""),
        date: String(frontmatter.date ?? ""),
        keywords: Array.isArray(frontmatter.keywords) ? (frontmatter.keywords as string[]) : [],
        ctaPooja: frontmatter.ctaPooja ? String(frontmatter.ctaPooja) : undefined,
        content: body,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
