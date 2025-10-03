import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

// Mock data - in a real app, this would come from an API or CMS
const latestArticles = [
  {
    slug: "ai-2025-oct-next-gen-security-operations",
    title: "Next-Gen Security Operations with AI",
    description: "Revolutionary AI-powered security operations for enterprise protection",
    excerpt: "Discover how AI is transforming security operations...",
    category: "AI Security",
    date: "2025-10-02",
    readTime: "8 min read",
    author: "Zion Tech Group Team"
  }
];

const blogPosts = [
  {
    slug: "quantum-ai-processing-2026",
    title: "Quantum AI Processing Revolution 2026",
    description: "The future of quantum-enhanced AI processing",
    category: "Quantum AI",
    date: "2026-01-15",
    readTime: "12 min read",
    author: "AI Research Team"
  }
];

const staticPosts = [
  {
    slug: "ai-agent-mesh-orchestration-2025",
    title: "AI Agent Mesh Orchestration",
    description: "Advanced orchestration patterns for AI agent networks",
    category: "AI Agents",
    publishedAt: "2025-09-20",
    readTime: "10 min read",
    author: "Zion Tech Group Team"
  }
];

export default function PostBySlug(): React.JSX.Element {
  const { slug } = useParams<{ slug: string }>();

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
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
            <a 
              href="/blog" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Back to Blog
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-950">
        {/* Article Header */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <a 
              href="/blog" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </a>
            
            <div className="mb-8">
              <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {article.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.publishedAt).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-slate-800 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Article Content</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This is a placeholder for the article content. In a real application, 
                  this would contain the full article text, images, and other content 
                  fetched from a CMS or API.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The article would typically include detailed information about the topic, 
                  code examples, diagrams, and other relevant content that provides value 
                  to the reader.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For now, this serves as a template showing how the article layout would 
                  work with proper styling and structure.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}