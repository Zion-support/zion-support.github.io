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
    }
  ];

  const staticPosts = [
    {
      slug: "ai-governance-framework-enterprise-2025",
      title: "AI Governance Framework for Enterprise 2025",
      description: "Comprehensive framework for implementing AI governance in enterprise environments",
      category: "AI Governance",
      publishedAt: "2025-12-20",
      readTime: "10 min read"
    }
  ];

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
  }, [slug, blogPosts, latestArticles, staticPosts]);

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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Article Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span className="mr-4">By {article.author}</span>
              <span className="mr-4">•</span>
              <span className="mr-4">{new Date(article.publishedAt).toLocaleDateString()}</span>
              <span>•</span>
              <span className="ml-4">{article.readTime}</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              {article.description}
            </p>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Article Content</h2>
              <p>
                This is where the full article content would be displayed. In a real application, 
                this content would be fetched from a CMS or markdown files and rendered appropriately.
              </p>
              <p>
                The article content would include detailed information about the topic, 
                formatted with proper headings, paragraphs, lists, and other content elements.
              </p>
              <h3>Key Points</h3>
              <ul>
                <li>Comprehensive coverage of the topic</li>
                <li>Real-world examples and case studies</li>
                <li>Actionable insights and recommendations</li>
                <li>Expert analysis and commentary</li>
              </ul>
              <p>
                This placeholder content demonstrates the structure and styling that would be 
                applied to the actual article content.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {latestArticles.slice(0, 3).map((relatedArticle, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-3">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {relatedArticle.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <a 
                    href={`/blog/${relatedArticle.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
