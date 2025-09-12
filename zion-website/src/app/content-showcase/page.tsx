import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ClockIcon, TagIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Content Showcase - AI & Technology Resources | Zion Tech Group',
  description: 'Explore our comprehensive library of AI and technology content including blog posts, case studies, webinars, and whitepapers.',
  keywords: 'AI content, technology resources, blog posts, case studies, webinars, whitepapers, AI guides',
  openGraph: {
    title: 'Content Showcase - AI & Technology Resources',
    description: 'Explore our comprehensive library of AI and technology content including blog posts, case studies, webinars, and whitepapers.',
    type: 'website',
  },
};

export default function ContentShowcase() {
  const featuredContent = [
    {
      title: "Advanced RAG Systems 2025: Production-Ready Implementation Guide",
      description: "Master advanced RAG (Retrieval-Augmented Generation) systems with our comprehensive 2025 guide. Learn production patterns, optimization techniques, and real-world implementations.",
      href: "/blog/ai-2025-advanced-rag-systems",
      icon: "🔍",
      category: "Advanced AI",
      readTime: "25 min read",
      date: "Jan 28, 2025",
      featured: true
    },
    {
      title: "AI Multimodal Revolution 2025: Vision, Voice, and Text Integration",
      description: "Explore how multimodal AI is revolutionizing human-computer interaction by seamlessly combining vision, voice, and text processing. Learn about the latest breakthroughs and real-world applications.",
      href: "/blog/ai-2025-multimodal-revolution",
      icon: "🎭",
      category: "Multimodal AI",
      readTime: "28 min read",
      date: "Jan 28, 2025",
      featured: true
    },
    {
      title: "Quantum Machine Learning 2025: The Next Frontier of AI",
      description: "Discover how quantum computing is revolutionizing machine learning, enabling exponential speedups in optimization, pattern recognition, and complex problem solving.",
      href: "/blog/ai-2025-quantum-machine-learning",
      icon: "⚛️",
      category: "Quantum AI",
      readTime: "32 min read",
      date: "Jan 28, 2025",
      featured: true
    },
    {
      title: "AI Autonomous Manufacturing Revolution: $200M Success Story",
      description: "Complete case study: How a Fortune 500 manufacturer achieved $200M in cost savings and 300% productivity gains through AI-powered autonomous manufacturing systems.",
      href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
      icon: "🏭",
      category: "Case Study",
      readTime: "15 min read",
      date: "Jan 28, 2025",
      featured: true
    },
    {
      title: "Building Scalable AI Infrastructure: A Complete Guide",
      description: "Learn how to design and implement AI infrastructure that scales with your business needs, from data pipelines to model deployment and monitoring.",
      href: "/blog/scalable-ai-infrastructure",
      icon: "🏗️",
      category: "AI Infrastructure",
      readTime: "20 min read",
      date: "Jan 25, 2025",
      featured: false
    },
    {
      title: "Enterprise AI Security: Best Practices and Implementation",
      description: "Comprehensive guide to securing AI systems in enterprise environments, covering data protection, model security, and regulatory compliance.",
      href: "/blog/enterprise-ai-security",
      icon: "🔒",
      category: "AI Security",
      readTime: "18 min read",
      date: "Jan 22, 2025",
      featured: false
    },
    {
      title: "AI-Powered Customer Service: 90% Satisfaction Case Study",
      description: "How a leading e-commerce company transformed customer service with AI, achieving 90% customer satisfaction and 60% cost reduction.",
      href: "/case-studies/ai-customer-service-transformation",
      icon: "💬",
      category: "Case Study",
      readTime: "12 min read",
      date: "Jan 20, 2025",
      featured: false
    },
    {
      title: "The Future of AI in Healthcare: Trends and Opportunities",
      description: "Explore the latest trends in AI healthcare applications, from diagnostic tools to personalized medicine and drug discovery.",
      href: "/blog/ai-healthcare-trends-2025",
      icon: "🏥",
      category: "AI Healthcare",
      readTime: "22 min read",
      date: "Jan 18, 2025",
      featured: false
    },
    {
      title: "Machine Learning Model Optimization: Advanced Techniques",
      description: "Master advanced techniques for optimizing machine learning models, including hyperparameter tuning, model compression, and deployment strategies.",
      href: "/blog/ml-model-optimization",
      icon: "⚡",
      category: "Machine Learning",
      readTime: "24 min read",
      date: "Jan 15, 2025",
      featured: false
    },
    {
      title: "AI Ethics and Responsible Development: A Framework",
      description: "Comprehensive framework for developing AI systems responsibly, covering bias mitigation, transparency, and ethical considerations.",
      href: "/blog/ai-ethics-framework",
      icon: "⚖️",
      category: "AI Ethics",
      readTime: "19 min read",
      date: "Jan 12, 2025",
      featured: false
    },
    {
      title: "Edge AI Deployment: Bringing Intelligence to the Edge",
      description: "Learn how to deploy AI models at the edge for real-time processing, reduced latency, and improved privacy in IoT applications.",
      href: "/blog/edge-ai-deployment",
      icon: "📱",
      category: "Edge Computing",
      readTime: "16 min read",
      date: "Jan 10, 2025",
      featured: false
    },
    {
      title: "AI in Financial Services: Risk Management Case Study",
      description: "How a major bank implemented AI for risk management, achieving 40% improvement in fraud detection and 25% reduction in false positives.",
      href: "/case-studies/ai-financial-risk-management",
      icon: "💰",
      category: "Case Study",
      readTime: "14 min read",
      date: "Jan 8, 2025",
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: featuredContent.length, active: true },
    { name: 'Advanced AI', count: featuredContent.filter(c => c.category === 'Advanced AI').length, active: false },
    { name: 'Multimodal AI', count: featuredContent.filter(c => c.category === 'Multimodal AI').length, active: false },
    { name: 'Quantum AI', count: featuredContent.filter(c => c.category === 'Quantum AI').length, active: false },
    { name: 'Case Study', count: featuredContent.filter(c => c.category === 'Case Study').length, active: false },
    { name: 'AI Infrastructure', count: featuredContent.filter(c => c.category === 'AI Infrastructure').length, active: false },
    { name: 'AI Security', count: featuredContent.filter(c => c.category === 'AI Security').length, active: false },
    { name: 'AI Healthcare', count: featuredContent.filter(c => c.category === 'AI Healthcare').length, active: false },
    { name: 'Machine Learning', count: featuredContent.filter(c => c.category === 'Machine Learning').length, active: false },
    { name: 'AI Ethics', count: featuredContent.filter(c => c.category === 'AI Ethics').length, active: false },
    { name: 'Edge Computing', count: featuredContent.filter(c => c.category === 'Edge Computing').length, active: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Content Showcase
            </h1>
            <p className="text-xl text-indigo-200">
              Explore our comprehensive library of AI and technology content. From in-depth technical guides to real-world case studies, discover resources that will accelerate your AI journey.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and impactful content, handpicked by our experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.filter(content => content.featured).map((content, index) => (
              <Link
                key={content.href}
                href={content.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{content.icon}</div>
                    <div className="flex items-center space-x-2">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-600">Featured</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {content.readTime}
                      </div>
                      <div className="flex items-center">
                        <TagIcon className="h-4 w-4 mr-1" />
                        {content.category}
                      </div>
                    </div>
                    <span>{content.date}</span>
                  </div>

                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                    Read More
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Content
            </h2>
            <p className="text-lg text-gray-600">
              Browse our complete library of AI and technology resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link
                key={content.href}
                href={content.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{content.icon}</div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        content.featured 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {content.featured ? 'Featured' : content.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {content.readTime}
                      </div>
                      <div className="flex items-center">
                        <ChartBarIcon className="h-4 w-4 mr-1" />
                        {content.category}
                      </div>
                    </div>
                    <span>{content.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Our team creates custom content tailored to your specific needs. Let us know what topics you'd like to explore, and we'll create comprehensive resources just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Browse Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}