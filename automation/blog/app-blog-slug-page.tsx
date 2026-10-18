import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

const siteUrl = "https://www.panditabhishekvyas.in";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: "Mahakal Pooja Services",
      type: "article",
      publishedTime: post.date,
      images: [{ url: "/homepageimage.png", width: 1200, height: 630, alt: post.title }],
      locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Pt. Abhishek Vyas" },
    publisher: { "@type": "Organization", name: "Mahakal Pooja Services", url: siteUrl },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen pt-24 px-6 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{post.date}</p>
        <div className="prose prose-invert prose-lg max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
        {post.ctaPooja && (
          <div className="mt-12 border border-amber-400/30 bg-amber-400/5 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Book Your Pooja in Ujjain</h2>
            <p className="text-gray-300 mb-4">
              100% private puja at Mangalnath / Mahakal Temple with Pt. Abhishek Vyas — no agents.
            </p>
            <a
              href={`https://wa.me/916260552014?text=${encodeURIComponent("Namaste! I want to book: " + post.ctaPooja)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-black font-semibold px-6 py-3 rounded-xl"
            >
              Book on WhatsApp
            </a>
          </div>
        )}

        {/* Author box — tags the priest on every article */}
        <aside className="mt-10 border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start">
          <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold shrink-0">
            AV
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">About the Acharya</p>
            <h2 className="text-lg font-semibold mb-1">Pt. Abhishek Vyas</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Vedic Pandit &amp; Acharya who personally performs every pooja at
              Mangalnath Temple &amp; Mahakal Temple, Ujjain — 100% private puja,
              direct pandit booking, no agents. Devotees receive a pooja certificate
              and photos/videos after the ritual.
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a
                href="https://wa.me/916260552014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200"
              >
                WhatsApp +91 6260552014
              </a>
              <a href="mailto:abhishekvyas069@gmail.com" className="text-amber-300 hover:text-amber-200">
                abhishekvyas069@gmail.com
              </a>
              <a href="/#poojas" className="text-amber-300 hover:text-amber-200">
                All Pooja Services
              </a>
            </div>
          </div>
        </aside>
      </article>
    </main>
  );
}
