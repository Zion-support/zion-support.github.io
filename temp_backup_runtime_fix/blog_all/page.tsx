import React from 'react';
<<<<<<< HEAD
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "AI Industry Disruption 2025: How AI is Reshaping Every Sector",
      description: "Complete analysis of sector transformations, real impact data, and actionable insights for business leaders.",
      href: "/blog/ai-2025-industry-disruption",
      icon: "🏭",
      category: "Industry Analysis",
      readTime: "25 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Trends 2025 Predictions: 15 Game-Changing Developments",
      description: "Discover the 15 most important AI trends and predictions for 2025.",
      href: "/blog/ai-trends-2025-predictions",
      icon: "🔮",
      category: "AI Predictions",
      readTime: "28 min read",
      date: "Jan 28, 2025"
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="AI & Technology Blog - Expert Insights | Zion Tech Group"
        description="Stay ahead with our AI and technology blog featuring expert insights, industry analysis, and implementation guides."
        keywords="AI blog, technology blog, AI insights, AI analysis, artificial intelligence articles"
        url="/blog"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI & Technology Blog
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stay ahead with expert insights, industry analysis, and implementation guides.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={index} href={post.href} className="group">
                  <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-6xl">{post.icon}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.description}
                      </p>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
=======
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function BlogPage() {
  const articles = [
    {
      title: "AI Enterprise Automation 2025: Complete Implementation Guide",
      description: "Transform your enterprise with AI automation. Learn proven strategies, implementation frameworks, and real-world case studies for 40% cost reduction and 300% efficiency gains.",
      href: "/blog/ai-enterprise-automation-2025",
      category: "Enterprise AI",
      readTime: "20 min read",
      date: "Jan 30, 2025",
      icon: "🏢",
      featured: true
    },
    {
      title: "AI Startup Funding Playbook 2025: Master the $47B Market",
      description: "Navigate the AI startup funding landscape with our comprehensive playbook. Learn proven strategies, pitch templates, and insider insights to secure funding in 2025.",
      href: "/blog/ai-startup-funding-playbook-2025",
      category: "Startup Funding",
      readTime: "25 min read",
      date: "Jan 30, 2025",
      icon: "💰",
      featured: true
    },
    {
      title: "AI Customer Support Automation 2025",
      description: "Revolutionize your customer service with AI automation. Achieve 80% faster response times and 60% cost reduction with intelligent support systems.",
      href: "/blog/ai-customer-support-automation-2025",
      category: "Customer Service",
      readTime: "12 min read",
      date: "Jan 28, 2025",
      icon: "🎧",
      featured: false
    },
    {
      title: "AI Workforce Transformation 2025",
      description: "Prepare your workforce for the AI era with comprehensive reskilling strategies and transformation frameworks that ensure successful adoption.",
      href: "/blog/ai-workforce-transformation-2025",
      category: "Workforce",
      readTime: "18 min read",
      date: "Jan 25, 2025",
      icon: "👥",
      featured: false
    },
    {
      title: "AI Data Privacy & Compliance 2025",
      description: "Navigate the complex landscape of AI privacy regulations with our complete guide to compliance, data protection, and ethical AI practices.",
      href: "/blog/ai-data-privacy-compliance-2025",
      category: "Privacy & Compliance",
      readTime: "22 min read",
      date: "Jan 22, 2025",
      icon: "🔒",
      featured: false
    },
    {
      title: "AI Sustainability & Green Tech 2025",
      description: "Build eco-friendly AI systems that reduce energy consumption by 60% while maintaining performance. Complete guide to sustainable AI implementation.",
      href: "/blog/ai-sustainability-green-tech-2025",
      category: "Sustainability",
      readTime: "20 min read",
      date: "Jan 20, 2025",
      icon: "🌱",
      featured: false
    }
  ];

  const categories = ["All", "Enterprise AI", "Startup Funding", "Customer Service", "Workforce", "Privacy & Compliance", "Sustainability"];

  return (
    <>
      <SEO
        title="AI & Business Blog - Latest Insights & Expert Analysis"
        description="Stay ahead with our latest articles on AI, cloud architecture, growth strategies, and emerging technologies. Fresh content published weekly with expert insights."
        keywords="AI blog, business insights, technology articles, AI trends, enterprise AI, startup funding"
        url="/blog"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🔥 TRENDING NOW</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI & Business Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead with our latest articles on AI, cloud architecture, growth strategies, 
              and emerging technologies. Fresh content published weekly with expert insights.
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.filter(article => article.featured).map((article, index) => (
                <Link key={index} href={article.href} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                      <div className="text-8xl">{article.icon}</div>
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        FEATURED
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.readTime}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">ZT</span>
                          </div>
                          <span className="text-sm text-gray-600">Zion Tech Group</span>
                        </div>
                        <span className="text-blue-600 font-medium group-hover:underline">
                          Read Article →
                        </span>
                      </div>
>>>>>>> 9fbfc7a36d4591e025989cde08ff7996c1921e36
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>
      </div>
    </ErrorBoundary>
=======

          {/* All Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Link key={index} href={article.href} className="group">
                  <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                      <div className="text-6xl">{article.icon}</div>
                      {article.featured && (
                        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          FEATURED
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-xs">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{article.date}</span>
                        <span className="text-blue-600 font-medium group-hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest AI Insights
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ AI professionals.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </>
>>>>>>> 9fbfc7a36d4591e025989cde08ff7996c1921e36
  );
}