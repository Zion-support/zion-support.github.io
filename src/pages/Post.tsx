import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { posts } from "../content/posts";

export default function Post(): React.JSX.Element {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-zion-slate-light mb-6">The article you are looking for does not exist or was moved.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-blue-light font-semibold">
            Back to Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>{post.title} | Zion Tech Group</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://ziontechgroup.com/blog/${post.slug}`} />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex items-center gap-3 text-zion-slate-light">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
            {post.readTime && (
              <span className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-zion-slate-light text-lg mb-8">{post.description}</p>

          <div className="prose prose-invert max-w-none">
            <p>
              This is a summary article for: <strong>{post.title}</strong>. Full long-form content can be expanded here.
            </p>
            <ul>
              <li>Key takeaway 1 related to {post.category}</li>
              <li>Key takeaway 2 that supports outcomes</li>
              <li>Key takeaway 3 with actionable guidance</li>
            </ul>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <Link to="/blog" className="text-zion-cyan hover:text-zion-blue-light inline-flex items-center gap-2 font-semibold">
              Back to all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
              <Tag className="w-4 h-4" />
              {post.category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

