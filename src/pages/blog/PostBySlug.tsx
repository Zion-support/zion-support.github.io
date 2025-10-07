import React from "react";
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts as staticPosts } from "../../content/posts";
import { latestArticles } from "../../content/latest-articles";
import { blogPosts } from "../../content/blog-posts";
import Header from "../../components/Header";
export default function PostBySlug(): React.JSX.Element {
  const { slug } = useParams();

  const article = React.useMemo(() => {
    if (!slug) return undefined;
    const fromLatest = latestArticles.find((a) => a.slug === slug);
    if (fromLatest) {
      return {
        slug: fromLatest.slug,
        title: fromLatest.title,
        description: fromLatest.description || fromLatest.excerpt,
        category: fromLatest.category,
        publishedAt: fromLatest.date,
        readTime: fromLatest.readTime,
        author: fromLatest.author,
      };
    }
    const fromBlogPosts = blogPosts.find((p) => p.slug === slug);
    if (fromBlogPosts) {
      return {
        slug: fromBlogPosts.slug,
        title: fromBlogPosts.title,
        description: fromBlogPosts.description,
        category: fromBlogPosts.category,
        publishedAt: fromBlogPosts.date,
        readTime: fromBlogPosts.readTime,
        author: fromBlogPosts.author,
      };
    }
    const fromPosts = staticPosts.find((p) => p.slug === slug);
    if (fromPosts) {
      return {
        slug: fromPosts.slug,
        title: fromPosts.title,
        description: fromPosts.description,
        category: fromPosts.category,
        publishedAt: fromPosts.publishedAt,
        readTime: fromPosts.readTime,
        author: "Zion Tech Group Team",
      };
    }
    return undefined;
  }, [slug]);

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white p-8">
          <div className="max-w-3xl mx-auto pt-20">
            <h1 className="text-3xl font-bold mb-4">Article not found</h1>
            <p className="text-zion-slate-light mb-6">The post you are looking for does not exist or has been moved.</p>
            <Link to="/blog" className="text-zion-cyan hover:underline inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Zion Tech Group</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-24">
          <Link to="/blog" className="text-zion-cyan hover:text-zion-blue-light mb-8 inline-flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <article className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-zion-slate-light text-sm mb-8 pb-8 border-b border-white/10">
              {article.author && (
                <span className="font-medium text-white">{article.author}</span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              {article.readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
              )}
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-white/90 mb-6">
                {article.description}
              </p>
              
              <div className="bg-zion-blue/20 border border-zion-blue/30 rounded-xl p-6 my-8">
                <p className="text-zion-slate-light text-sm mb-0">
                  💡 <strong>Coming Soon:</strong> Full article content will be available shortly. 
                  This preview shows the key insights and value proposition of this groundbreaking topic.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
