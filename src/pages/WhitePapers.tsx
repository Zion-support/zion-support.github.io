
import React, { useState } from 'react';
import { FileText, Download, Search, Filter, Calendar, Clock, Users, Star, Eye, ArrowRight, BookOpen, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function WhitePapers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Categories', icon: <FileText className="w-5 h-5" />, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 7 },
    { id: 'emerging', name: 'Emerging Technologies', icon: <Zap className="w-5 h-5" />, count: 4 },
    { id: 'strategy', name: 'Digital Strategy', icon: <Target className="w-5 h-5" />, count: 6 }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'downloads', label: 'Most Downloaded' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 and Beyond',
      description: 'Comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprise environments. Learn how organizations can leverage AI for competitive advantage.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen, AI Research Director',
      publishDate: '2025-01-20',
      readTime: '25 min',
      downloads: 15420,
      rating: 4.9,
      featured: true,
      tags: ['AI', 'Enterprise', 'Machine Learning', 'Digital Transformation'],
      coverImage: '/images/whitepapers/ai-future-2025.jpg',
      fileSize: '2.4 MB',
      language: 'English'
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: A Comprehensive Guide',
      description: 'Deep dive into zero-trust security principles, implementation strategies, and best practices for modern organizations.',
      category: 'security',
      author: 'Michael Rodriguez, Chief Security Officer',
      publishDate: '2025-01-18',
      readTime: '30 min',
      downloads: 12890,
      rating: 4.8,
      featured: true,
      tags: ['Cybersecurity', 'Zero-Trust', 'Security Architecture', 'Best Practices'],
      coverImage: '/images/whitepapers/zero-trust-security.jpg',
      fileSize: '3.1 MB',
      language: 'English'
    },
    {
      id: 3,
      title: 'Cloud-Native Transformation: From Legacy to Modern',
      description: 'Strategic guide for organizations transitioning from legacy systems to cloud-native architectures.',
      category: 'cloud',
      author: 'Jennifer Park, Cloud Strategy Lead',
      publishDate: '2025-01-15',
      readTime: '35 min',
      downloads: 9870,
      rating: 4.7,
      featured: false,
      tags: ['Cloud Computing', 'Digital Transformation', 'Legacy Systems', 'Architecture'],
      coverImage: '/images/whitepapers/cloud-native-transformation.jpg',
      fileSize: '2.8 MB',
      language: 'English'
    },
    {
      id: 4,
      title: 'Data-Driven Decision Making: Analytics for the Modern Enterprise',
      description: 'Explore how organizations can leverage data analytics to drive strategic decisions and improve business outcomes.',
      category: 'data',
      author: 'Dr. Robert Kim, Data Science Director',
      publishDate: '2025-01-12',
      readTime: '28 min',
      downloads: 11230,
      rating: 4.6,
      featured: false,
      tags: ['Data Analytics', 'Business Intelligence', 'Decision Making', 'Strategy'],
      coverImage: '/images/whitepapers/data-driven-decisions.jpg',
      fileSize: '2.6 MB',
      language: 'English'
    },
    {
      id: 5,
      title: 'Quantum Computing: Preparing for the Next Computing Revolution',
      description: 'Understanding quantum computing fundamentals and preparing organizations for quantum advantage.',
      category: 'emerging',
      author: 'Dr. Elena Vasquez, Quantum Research Lead',
      publishDate: '2025-01-10',
      readTime: '40 min',
      downloads: 8760,
      rating: 4.5,
      featured: false,
      tags: ['Quantum Computing', 'Emerging Tech', 'Computing', 'Innovation'],
      coverImage: '/images/whitepapers/quantum-computing.jpg',
      fileSize: '3.5 MB',
      language: 'English'
    }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || paper.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPapers = [...filteredPapers].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.downloads - a.downloads;
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      case 'downloads':
        return b.downloads - a.downloads;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our latest research, insights, and thought leadership content on emerging technologies, digital transformation, and industry trends."
        keywords="white papers, research, insights, technology, AI, cloud, cybersecurity, digital transformation"
      />

      {/* Hero Section */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            White Papers & Research
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Access our latest research, insights, and thought leadership content on emerging technologies, digital transformation, and industry trends.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search white papers..."
                className="w-full pl-12 pr-4 py-4 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Categories and Sort */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-zion-cyan text-zion-slate-dark'
                        : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-zion-slate-light">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Papers Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            White Papers Library
          </h2>
          
          {sortedPapers.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {sortedPapers.map((paper) => (
                <div
                  key={paper.id}
                  className={`bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    paper.featured ? 'ring-2 ring-zion-cyan' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {paper.featured && (
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      )}
                      <span className="text-sm text-zion-cyan font-medium uppercase tracking-wide">
                        {paper.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Clock className="w-4 h-4" />
                      {paper.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">{paper.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {paper.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(paper.publishDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {paper.downloads.toLocaleString()} downloads
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {paper.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {paper.fileSize}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-zion-cyan text-zion-slate-dark font-semibold py-3 px-4 rounded-lg hover:bg-zion-cyan-light transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download White Paper
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-zion-slate-light">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Our Research
          </h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get notified when we publish new white papers, research reports, and industry insights.
          </p>
          <button className="bg-zion-cyan text-zion-slate-dark font-semibold py-3 px-8 rounded-lg hover:bg-zion-cyan-light transition-colors">
            Subscribe to Updates
          </button>
        </div>
      </div>
    </div>
  );
}
