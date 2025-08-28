

import React from 'react';
import { SEO } from '../components/SEO';
import { FileText, Download, Calendar, User, ArrowRight, Star, Eye, Clock, Tag, Search, Filter, TrendingUp, Brain, Shield, Cloud, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhitePapers() {
  const whitePapers = [
    {
      title: 'The State of AI in Enterprise 2024',
      description: 'Comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprise environments. This research explores how organizations are leveraging artificial intelligence to drive innovation and competitive advantage.',
      author: 'Zion Tech Group Research Team',
      date: '2024-01-20',
      readTime: '45 min read',
      pages: '45 pages',
      downloads: 2847,
      rating: 4.9,
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Research', 'Trends', 'Adoption'],
      featured: true,
      color: 'from-purple-500 to-pink-500',
      excerpt: 'Discover the latest trends in enterprise AI adoption, including implementation strategies, ROI analysis, and future outlook for artificial intelligence in business.'
    },
    {
      title: 'Cybersecurity Framework for Digital Transformation',
      description: 'A comprehensive guide to securing your organization during digital transformation initiatives. Learn best practices for maintaining security while modernizing your infrastructure.',
      author: 'Security Experts Team',
      date: '2024-01-15',
      readTime: '32 min read',
      pages: '32 pages',
      downloads: 2156,
      rating: 4.8,
      category: 'Cybersecurity',
      tags: ['Security', 'Digital Transformation', 'Framework', 'Best Practices'],
      featured: true,
      color: 'from-red-500 to-orange-500',
      excerpt: 'Essential security considerations and frameworks for organizations undergoing digital transformation, ensuring protection throughout the modernization journey.'
    },
    {
      title: 'Quantum Computing: The Next Frontier in Business',
      description: 'Explore how quantum computing will revolutionize business processes and decision-making. Understand the current state and future implications for various industries.',
      author: 'Dr. Alex Thompson',
      date: '2024-01-10',
      readTime: '38 min read',
      pages: '38 pages',
      downloads: 1892,
      rating: 4.9,
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Innovation', 'Technology', 'Future'],
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      excerpt: 'An in-depth exploration of quantum computing applications in business, from optimization problems to machine learning acceleration.'
    },
    {
      title: 'IoT Edge Computing: Architecture & Best Practices',
      description: 'Technical deep-dive into IoT edge computing architecture and implementation best practices. Learn how to design scalable and efficient edge computing solutions.',
      author: 'IoT Architecture Team',
      date: '2024-01-05',
      readTime: '28 min read',
      pages: '28 pages',
      downloads: 1654,
      rating: 4.7,
      category: 'IoT & Edge Computing',
      tags: ['IoT', 'Edge Computing', 'Architecture', 'Best Practices'],
      featured: false,
      color: 'from-green-500 to-emerald-500',
      excerpt: 'Comprehensive guide to designing and implementing IoT edge computing solutions for optimal performance and scalability.'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'How artificial intelligence is transforming supply chain management and logistics. Real-world case studies and implementation strategies.',
      author: 'Supply Chain Innovation Team',
      date: '2023-12-28',
      readTime: '35 min read',
      pages: '35 pages',
      downloads: 1423,
      rating: 4.8,
      category: 'AI & Analytics',
      tags: ['AI', 'Supply Chain', 'Optimization', 'Logistics'],
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      excerpt: 'Discover how AI is revolutionizing supply chain operations, from demand forecasting to route optimization and inventory management.'
    },
    {
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency',
      description: 'Exploring enterprise blockchain applications beyond cryptocurrency. Learn about smart contracts, supply chain transparency, and digital identity solutions.',
      author: 'Blockchain Solutions Team',
      date: '2023-12-20',
      readTime: '30 min read',
      pages: '30 pages',
      downloads: 1234,
      rating: 4.6,
      category: 'Blockchain',
      tags: ['Blockchain', 'Enterprise', 'Smart Contracts', 'Digital Identity'],
      featured: false,
      color: 'from-emerald-500 to-green-500',
      excerpt: 'Comprehensive guide to enterprise blockchain applications and how they can transform business processes and create new opportunities.'
    }
  ];

  const categories = [
    { name: 'All', count: whitePapers.length, active: true },
    { name: 'AI & Machine Learning', count: whitePapers.filter(wp => wp.category === 'AI & Machine Learning').length, active: false },
    { name: 'Cybersecurity', count: whitePapers.filter(wp => wp.category === 'Cybersecurity').length, active: false },
    { name: 'Quantum Computing', count: whitePapers.filter(wp => wp.category === 'Quantum Computing').length, active: false },
    { name: 'IoT & Edge Computing', count: whitePapers.filter(wp => wp.category === 'IoT & Edge Computing').length, active: false },
    { name: 'Blockchain', count: whitePapers.filter(wp => wp.category === 'Blockchain').length, active: false }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive library of white papers covering AI, cybersecurity, quantum computing, IoT, and more. Download in-depth research and analysis to stay ahead of technology trends."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Papers</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access our comprehensive library of research and analysis documents covering the latest 
              trends in AI, cybersecurity, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Request Custom Research
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.name
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-purple-500/10 hover:text-purple-400 border border-slate-600'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Research
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and comprehensive white papers covering critical technology topics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWhitePapers.filter(wp => wp.featured).map((paper, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{paper.title}</h3>
                <p className="text-gray-300 mb-6">{paper.excerpt}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {paper.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {paper.readTime}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    {paper.downloads.toLocaleString()} downloads
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <p className="text-purple-400 font-semibold">{paper.author}</p>
                    <p className="text-gray-400">{paper.pages}</p>
                  </div>
                  <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of research documents and technical analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitePapers.map((paper, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${paper.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{paper.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{paper.excerpt}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {paper.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {paper.readTime}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs">
                    <p className="text-purple-400 font-semibold">{paper.author}</p>
                  </div>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm">
                    Download
                    <Download className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredWhitePapers.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-24 h-24 text-gray-400 mx-auto mb-6" />
              <p className="text-gray-400 text-lg">No white papers match your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get notified about new white papers, research findings, 
              and technology insights delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our research team can create custom white papers 
              and analysis tailored to your specific industry and technology needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Request Custom Research
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
