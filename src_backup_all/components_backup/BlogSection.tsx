import React from "react";
import { Link } from "react-router-dom";
import { getRecentBlogPosts } from "@/data/blog-posts";

export function BlogSection() {
  const recent = getRecentBlogPosts(3);

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
          <Link to="/blog" className="text-zion-cyan hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.map((post) => (
            <article key={post.slug} className="bg-zion-blue border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple/50 transition-colors">
              <div className="aspect-[16/9] bg-zion-blue-dark flex items-center justify-center">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = "/images/blog-placeholder.svg";
                  }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-zion-slate-light mb-2">
                  <span className="px-2 py-1 bg-zion-blue-dark rounded-full text-zion-cyan">
                    {post.category}
                  </span>
                  <span>{post.publishDate} • {post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-zion-cyan">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-zion-slate-light line-clamp-3 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-zion-cyan hover:text-zion-purple">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

