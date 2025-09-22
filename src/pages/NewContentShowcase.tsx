import React from "react";
import { SEO } from "@/components/SEO";
import { getRecentBlogPosts } from "@/data/blog-posts";
import { Link } from "react-router-dom";

export default function NewContentShowcase() {
  const posts = getRecentBlogPosts(9);
  return (
    <>
      <SEO
        title="New Content Showcase"
        description="Discover our latest enterprise AI guides and platform releases."
        keywords={["AI", "Compliance", "Agents", "Observability"]}
      />
      <div className="min-h-screen bg-futuristic py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Just Released</h1>
            <p className="text-lg text-gray-300">Newest guides and insights across GenAI, agents, and governance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/9] bg-slate-700/50">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-xs text-zion-slate-light">{post.publishDate} • {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-zion-slate-light line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}