import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Papers' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'digital-transformation', name: 'Digital Transformation' },
    { id: 'data-analytics', name: 'Data Analytics' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: A Comprehensive Guide',
      category: 'ai-ml',
      description: 'Explore how artificial intelligence is transforming enterprise operations, from automation to decision-making, and learn strategies for successful AI implementation.',
      author: 'Dr. Sarah Chen, CTO',
      date: '2025-01-15',
      readTime: '15 min read',
      downloadCount: '2,847',
      fileSize: '2.4 MB',
      downloadUrl: '/assets/whitepapers/ai-enterprise-guide-2025.pdf',
      tags: ['AI', 'Enterprise', 'Automation', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture: Implementation Best Practices',
      category: 'cybersecurity',
      description: 'Learn about zero trust security principles and discover practical implementation strategies to protect your organization from evolving cyber threats.',
      author: 'Michael Rodriguez, Head of Engineering',
      date: '2024-12-20',
      readTime: '12 min read',
      downloadCount: '1,923',
      fileSize: '1.8 MB',
      downloadUrl: '/assets/whitepapers/zero-trust-security-2024.pdf',
      tags: ['Cybersecurity', 'Zero Trust', 'Security Architecture', 'Best Practices']
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: From Legacy to Modern Infrastructure',
      category: 'cloud',
      description: 'Comprehensive guide to migrating legacy systems to cloud infrastructure, including planning, execution, and optimization strategies.',
      author: 'David Thompson, Cloud Solutions Architect',
      date: '2024-11-15',
      readTime: '18 min read',
      downloadCount: '3,156',
      fileSize: '3.1 MB',
      downloadUrl: '/assets/whitepapers/cloud-migration-strategies-2024.pdf',
      tags: ['Cloud Migration', 'DevOps', 'Infrastructure', 'Legacy Systems']
    },
    {
      id: 4,
      title: 'Digital Transformation Roadmap: A Strategic Framework',
      category: 'digital-transformation',
      description: 'Strategic framework for planning and executing digital transformation initiatives that drive business growth and competitive advantage.',
      author: 'Kleber Santos, CEO & Founder',
      date: '2024-10-30',
      readTime: '20 min read',
      downloadCount: '4,231',
      fileSize: '2.9 MB',
      downloadUrl: '/assets/whitepapers/digital-transformation-roadmap-2024.pdf',
      tags: ['Digital Transformation', 'Strategy', 'Business Growth', 'Innovation']
    },
    {
      id: 5,
      title: 'Data Analytics for Business Intelligence: Turning Data into Action',
      category: 'data-analytics',
      description: 'Learn how to leverage data analytics to gain actionable business insights and make data-driven decisions that improve performance.',
      author: 'Jennifer Kim, VP of Data Science',
      date: '2024-09-25',
      readTime: '14 min read',
      downloadCount: '2,654',
      fileSize: '2.2 MB',
      downloadUrl: '/assets/whitepapers/data-analytics-business-intelligence-2024.pdf',
      tags: ['Data Analytics', 'Business Intelligence', 'Data Science', 'Decision Making']
    },
    {
      id: 6,
      title: 'AI Ethics and Responsible Technology Development',
      category: 'ai-ml',
      description: 'Framework for developing AI systems that are ethical, transparent, and beneficial to society while minimizing potential risks.',
      author: 'Dr. Sarah Chen, CTO',
      date: '2024-08-20',
      readTime: '16 min read',
      downloadCount: '1,876',
      fileSize: '2.7 MB',
      downloadUrl: '/assets/whitepapers/ai-ethics-responsible-development-2024.pdf',
      tags: ['AI Ethics', 'Responsible AI', 'Transparency', 'Risk Management']
    }
  ];

  const filteredPapers = selectedCategory === 'all' 
    ? whitePapers 
    : whitePapers.filter(paper => paper.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>White Papers - Zion Tech Group | Technology Research & Insights</title>
        <meta name="description" content="Download comprehensive white papers and research documents from Zion Tech Group. Expert insights on AI, cybersecurity, cloud computing, and digital transformation." />
        <meta name="keywords" content="white papers, research papers, technology insights, AI research, cybersecurity papers, cloud computing, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/white-papers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Papers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive research and insights on the latest technology trends, 
              best practices, and strategic frameworks. Download free white papers to stay ahead of the curve.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPapers.map((paper) => (
                <div key={paper.id} className="bg-slate-800/50 rounded-xl border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                        {categories.find(c => c.id === paper.category)?.name}
                      </span>
                      <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-sm rounded-full">
                        {paper.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{paper.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{paper.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>By {paper.author}</span>
                      <span>•</span>
                      <span>{new Date(paper.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {paper.downloadCount} downloads
                      </span>
                      <span>•</span>
                      <span>{paper.fileSize}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={paper.downloadUrl}
                      download
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center block"
                    >
                      Download White Paper
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredPapers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No white papers found in this category.</p>
                <p className="text-gray-500 mt-2">Check back later for new research papers or browse other categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* Featured Paper */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Research
            </h2>
            <div className="bg-slate-700/50 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Future of AI in Enterprise: A Comprehensive Guide
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our most popular white paper explores how artificial intelligence is transforming 
                enterprise operations and provides actionable strategies for successful AI implementation.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-6">
                <span>By Dr. Sarah Chen, CTO</span>
                <span>•</span>
                <span>15 min read</span>
                <span>•</span>
                <span>2,847 downloads</span>
              </div>
              <a
                href="/assets/whitepapers/ai-enterprise-guide-2025.pdf"
                download
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Download Featured Paper
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with New Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter to receive notifications about new white papers, 
              research updates, and technology insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Looking for specific research or insights? Our team can conduct custom research 
              and create white papers tailored to your industry and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Research
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhitePapers;