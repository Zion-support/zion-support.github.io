import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts } from "../content/posts";

export default function Post(): React.JSX.Element {
  const { slug } = useParams();

  const post = useMemo(() => posts.find(p => p.slug === slug), [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-zion-slate-light mb-6">We couldn't find the article you're looking for.</p>
          <Link to="/blog" className="text-zion-cyan underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>{post.title} - Zion Tech Group</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
      </Helmet>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link to="/blog" className="text-zion-cyan hover:text-zion-blue-light">← All Articles</Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-zion-slate-light mb-8">
            <span className="mr-3">{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>• {post.readTime ?? "6 min read"}</span>
          </div>
          <p className="text-lg text-zion-slate-100 leading-relaxed mb-8">{post.description}</p>
          {post.body && (
            <div className="prose prose-invert max-w-none">
              <p>{post.body}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

