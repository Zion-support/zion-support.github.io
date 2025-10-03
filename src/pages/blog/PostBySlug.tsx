import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

export default function PostBySlug(): React.JSX.Element {
  const { slug } = useParams();

  // Mock data - in a real app, this would come from an API or CMS
  const latestArticles = [
    {
      slug: "ai-autonomous-workflows-2026",
      title: "AI Autonomous Workflows 2026",
      description: "Transform operations with 95% automation, 400% ROI, and seamless multi-system orchestration",
      excerpt: "Transform operations with 95% automation, 400% ROI, and seamless multi-system orchestration",
      category: "Enterprise Automation",
      date: "2026-01-15",
      readTime: "8 min read",
      author: "Zion Tech Group Team"
    }
  ];

  const blogPosts = [
    {
      slug: "enterprise-ai-transformation-roadmap-2026",
      title: "Enterprise AI Transformation Roadmap 2026",
      description: "Complete implementation guide delivering 300% ROI, 85% automation, and digital transformation",
      category: "Strategic Guide",
      date: "2026-01-10",
      readTime: "12 min read",
      author: "Zion Tech Group Team"
    },
    {
      slug: "ai-autonomous-operations-2025",
      title: "AI Autonomous Operations 2025",
      description: "Revolutionary autonomous operations delivering 99.9% operational autonomy and $2.7B ROI",
      category: "Autonomous Operations",
      date: "2025-12-20",
      readTime: "10 min read",
      author: "Zion Tech Group Team"
    },
    {
      slug: "quantum-ai-breakthrough-2026",
      title: "Quantum AI Breakthrough 2026",
      description: "Next-generation quantum AI systems delivering unprecedented computational power",
      category: "Quantum Computing",
      date: "2026-01-05",
      readTime: "15 min read",
      author: "Zion Tech Group Team"
    }
  ];

  const staticPosts = [
    {
      slug: "ai-platform-architecture",
      title: "AI Platform Architecture",
      description: "Build scalable, enterprise-grade AI platforms with robust architecture",
      category: "Platform Architecture",
      publishedAt: "2025-12-15",
      readTime: "8 min read",
      author: "Zion Tech Group Team"
    }
  ];

  // Find article by slug
  const article = React.useMemo(() => {
    if (!slug) return undefined;

    // Check latest articles first
    const fromLatest = latestArticles.find((article) => article.slug === slug);
    if (fromLatest) {
      return {
        slug: fromLatest.slug,
        title: fromLatest.title,
        description: fromLatest.description,
        category: fromLatest.category,
        publishedAt: fromLatest.date,
        readTime: fromLatest.readTime,
        author: fromLatest.author
      };
    }

    // Check blog posts
    const fromBlogPosts = blogPosts.find((post) => post.slug === slug);
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

    // Check static posts
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

    // Return mock article if not found
    return {
      slug: slug,
      title: "Sample Article Title",
      description: "This is a sample article description that provides an overview of the content.",
      category: "Technology",
      publishedAt: "2024-01-01",
      readTime: "5 min read",
      author: "Zion Tech Group Team",
      content: `
        <h2>Introduction</h2>
        <p>This is a sample article content. In a real implementation, this would be fetched from a CMS or API.</p>
        
        <h2>Main Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <h2>Conclusion</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `
    };
  }, [slug]);

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <a 
              href="/blog" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
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
      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {article.description}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.publishedAt}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : (
              <div>
                <h2>Article Content</h2>
                <p>This article content would be loaded from a CMS or API in a real implementation.</p>
                <p>For now, this is a placeholder to demonstrate the article layout and structure.</p>
              </div>
            )}
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Written by {article.author}</p>
                <p className="text-sm text-gray-500">Published on {article.publishedAt}</p>
              </div>
              <a 
                href="/blog" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Back to Blog
              </a>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}