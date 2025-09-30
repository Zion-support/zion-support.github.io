import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts as staticPosts } from "../../content/posts";
import { latestArticles } from "../../content/latest-articles";

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
      };
    }
    return undefined;
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-zion-slate-light mb-6">The post you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="text-zion-cyan underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Zion Tech Group</title>
        <meta name="description" content={article.description} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-6 text-sm text-zion-slate-light">
            <Link to="/blog" className="text-zion-cyan hover:underline">Blog</Link>
            <span className="mx-2">/</span>
            <span>{article.category}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="text-zion-slate-light text-sm mb-10">
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            {article.readTime ? <span className="ml-3">{article.readTime}</span> : null}
          </div>
          <p className="text-lg leading-relaxed text-white/90">
            {article.description}
          </p>
        </div>
      </div>
    </>
  );
}

