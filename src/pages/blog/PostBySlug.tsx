import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Header from "../../components/Header";

// Mock data - in a real app, this would come from an API or CMS
const latestArticles = [
  {
    slug: "ai-2025-oct-02-agent-safety-scorecards",
    title: "AI Agent Safety Scorecards: A New Framework for Responsible AI Development",
    description: "Explore the latest framework for evaluating AI agent safety and reliability in enterprise environments.",
    category: "AI Safety",
    date: "2025-10-02",
    readTime: "8 min read",
    author: "Zion Tech Group Team"
  }
];

const blogPosts = [
  {
    slug: "enterprise-ai-implementation-guide",
    title: "Complete Guide to Enterprise AI Implementation",
    description: "A comprehensive guide to implementing AI solutions in enterprise environments.",
    category: "AI Implementation",
    date: "2025-09-15",
    readTime: "12 min read",
    author: "Kleber Santos"
  }
];

const staticPosts = [
  {
    slug: "future-of-work-ai",
    title: "The Future of Work: How AI is Transforming Industries",
    description: "Discover how artificial intelligence is reshaping the workplace and creating new opportunities.",
    category: "Future of Work",
    publishedAt: "2025-08-20",
    readTime: "10 min read",
    author: "Zion Tech Group Team"
  }
];

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
        author: fromLatest.author
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
        author: fromBlogPosts.author
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
        author: "Zion Tech Group Team"
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
        <title>{article.title} - Zion Tech Group Blog</title>
        <meta name="description" content={article.description} />
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