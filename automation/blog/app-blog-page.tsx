import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Pooja Articles & Guides | Mahakal Pooja Services",
  description:
    "Guides on Kaal Sarp Dosh, Mangal Dosh, Rudrabhishek, Mahamrityunjay Jaap and temple poojas in Ujjain — written by Pt. Abhishek Vyas.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Pooja Articles & Guides</h1>
        <p className="text-gray-400 mb-10">
          Insights on Mangalnath & Mahakal temple poojas, doshas, muhurat and booking.
        </p>
        {posts.length === 0 ? (
          <p className="text-gray-500">Articles coming soon.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug} className="border border-white/10 rounded-xl p-6">
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-semibold mb-2 hover:text-amber-300 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-300">{post.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
