import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Header from "../../components/Header";

// Mock data - in a real app, this would come from an API or CMS
const latestArticles = [
  {
    slug: "ai-2025-enterprise-automation",
    title: "AI-Powered Enterprise Automation in 2025",
    description: "Discover how AI automation is transforming enterprise operations",
    excerpt: "The future of enterprise automation is here...",
    category: "AI & Automation",
    date: "2025-01-15",
    readTime: "8 min read",
    author: "Zion Tech Group Team"
  }
];

const blogPosts = [
  {
    slug: "machine-learning-best-practices",
    title: "Machine Learning Best Practices for Enterprise",
    description: "Essential guidelines for implementing ML in enterprise environments",
    category: "Machine Learning",
    date: "2025-01-10",
    readTime: "12 min read",
    author: "AI Engineering Team"
  }
];

const staticPosts = [
  {
    slug: "digital-transformation-guide",
    title: "Complete Guide to Digital Transformation",
    description: "A comprehensive guide to digital transformation strategies",
    category: "Digital Transformation",
    publishedAt: "2025-01-05",
    readTime: "15 min read"
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
        <Helmet>
          <title>Post Not Found - Zion Tech Group</title>
          <meta name="description" content="The requested blog post could not be found." />
        </Helmet>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <a 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </a>
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
        <meta name="keywords" content={`${article.category}, AI, enterprise solutions, blog`} />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <a 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </a>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {article.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="mr-2" size={16} />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                {new Date(article.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                {article.readTime}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article Preview</h2>
              <p className="text-gray-700">
                This is a placeholder for the full article content. In a real application, 
                this would contain the complete blog post content fetched from a CMS or API.
              </p>
              <p className="text-gray-700 mt-4">
                The article would typically include detailed information about {article.title.toLowerCase()}, 
                covering key concepts, implementation strategies, and real-world examples.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Topics Covered</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Introduction to {article.category}</li>
              <li>Best practices and implementation strategies</li>
              <li>Real-world case studies and examples</li>
              <li>Future trends and developments</li>
              <li>Practical recommendations for enterprises</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 mb-8">
              This article provides a comprehensive overview of {article.title.toLowerCase()}. 
              For more detailed information and personalized consultation, contact our expert team.
            </p>
          </div>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-3">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI & Automation
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enterprise AI Implementation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to successfully implement AI solutions in your enterprise environment.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="mr-2" size={16} />
                  10 min read
                </div>
              </article>

              <article className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-3">
                  <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    Digital Transformation
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Transformation Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover proven strategies for digital transformation in modern enterprises.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="mr-2" size={16} />
                  12 min read
                </div>
              </article>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Implement These Solutions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our expert team can help you implement these strategies in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Consultation
              </a>
              <a 
                href="/services" 
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Our Services
              </a>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}