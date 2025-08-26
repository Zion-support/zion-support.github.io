<<<<<<< HEAD
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
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      id: 1,
<<<<<<< HEAD
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
=======
      title: "AI-Powered Digital Transformation: A Comprehensive Guide for Enterprise Leaders",
      category: "Digital Transformation",
      date: "2025-01-10",
      author: "Dr. Sarah Chen",
      description: "This comprehensive white paper explores how AI is revolutionizing digital transformation initiatives across industries, providing actionable insights for enterprise leaders.",
      topics: ["AI Strategy", "Digital Transformation", "Enterprise Leadership", "ROI Measurement"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "45 min read",
      pageCount: 28
    },
    {
      id: 2,
      title: "Quantum Computing in Cybersecurity: Next-Generation Threat Detection",
      category: "Cybersecurity",
      date: "2024-12-15",
      author: "Dr. James Wilson",
      description: "Explore how quantum computing is transforming cybersecurity, from quantum-resistant cryptography to advanced threat detection algorithms.",
      topics: ["Quantum Computing", "Cybersecurity", "Cryptography", "Threat Detection"],
      downloadUrl: "#",
      isPremium: true,
      readTime: "60 min read",
      pageCount: 35
    },
    {
      id: 3,
      title: "Autonomous AI Systems: Ethical Considerations and Implementation Guidelines",
      category: "AI Ethics",
      date: "2024-11-20",
      author: "Dr. Emily Watson",
      description: "A deep dive into the ethical considerations surrounding autonomous AI systems, with practical guidelines for responsible implementation.",
      topics: ["AI Ethics", "Autonomous Systems", "Responsible AI", "Implementation"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "40 min read",
      pageCount: 22
    },
    {
      id: 4,
      title: "Cloud-Native Architecture: Building Scalable and Resilient Systems",
      category: "Cloud & Infrastructure",
      date: "2024-10-25",
      author: "David Kim",
      description: "Learn the principles of cloud-native architecture and how to design systems that are scalable, resilient, and cost-effective.",
      topics: ["Cloud Architecture", "Scalability", "Resilience", "Cost Optimization"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "35 min read",
      pageCount: 25
    },
    {
      id: 5,
      title: "Machine Learning Operations (MLOps): Best Practices for Production AI",
      category: "AI & Machine Learning",
      date: "2024-09-30",
      author: "Marcus Rodriguez",
      description: "Comprehensive guide to MLOps, covering model deployment, monitoring, and maintenance in production environments.",
      topics: ["MLOps", "Model Deployment", "Production AI", "Monitoring"],
      downloadUrl: "#",
      isPremium: true,
      readTime: "50 min read",
      pageCount: 30
    },
    {
      id: 6,
      title: "Zero-Trust Security Architecture: Implementation and Best Practices",
      category: "Cybersecurity",
      date: "2024-08-15",
      author: "Alex Thompson",
      description: "Detailed implementation guide for zero-trust security architecture, including practical examples and best practices.",
      topics: ["Zero-Trust", "Security Architecture", "Implementation", "Best Practices"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "30 min read",
      pageCount: 20
    }
  ];

  const categories = [
    { name: "All", count: 6, active: true },
    { name: "AI & Machine Learning", count: 2, active: false },
    { name: "Cybersecurity", count: 2, active: false },
    { name: "Digital Transformation", count: 1, active: false },
    { name: "Cloud & Infrastructure", count: 1, active: false },
    { name: "AI Ethics", count: 1, active: false }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth research, technical insights, and strategic guidance from our experts. 
              Download our latest white papers to stay ahead of technology trends and industry developments.
            </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
          </div>
        </section>

<<<<<<< HEAD
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
=======
      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whitePapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                      {paper.category}
                    </span>
                    {paper.isPremium && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                        Premium
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Author</div>
                      <div className="text-sm text-gray-900">{paper.author}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Published</div>
                      <div className="text-sm text-gray-900">{formatDate(paper.date)}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Read Time</div>
                      <div className="text-sm text-gray-900">{paper.readTime}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Pages</div>
                      <div className="text-sm text-gray-900">{paper.pageCount}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">Topics Covered</div>
                    <div className="flex flex-wrap gap-2">
                      {paper.topics.map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Download White Paper
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Research Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our research covers the most critical technology areas that are shaping the future of business and society.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 text-sm">Cutting-edge research in artificial intelligence, machine learning, and autonomous systems.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-600 text-sm">Advanced security research, threat intelligence, and defense strategies.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Digital Transformation</h3>
              <p className="text-gray-600 text-sm">Research on business transformation, innovation strategies, and digital adoption.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Emerging Tech</h3>
              <p className="text-gray-600 text-sm">Research on quantum computing, blockchain, and other emerging technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with Latest Research</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get notified when we publish new white papers and research reports. 
            Stay ahead of the curve with our latest insights and analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Custom Research & Consulting</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Need custom research or have a specific topic you'd like us to explore? 
            Our research team can conduct tailored studies for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Request Custom Research
            </Link>
            <Link
              to="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Our Services
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
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