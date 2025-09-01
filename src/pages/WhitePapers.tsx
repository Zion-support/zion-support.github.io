import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Search, Filter, Star, TrendingUp, Lightbulb, Target, TrendingUp as TrendingUpIcon, ArrowRight, Clock, Users, Award, CheckCircle, Brain, Shield, Cloud, Rocket, Zap, Globe } from 'lucide-react';

export default function WhitePapers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Papers', icon: FileText, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Cpu, count: 0 },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Database, count: 0 },
    { id: 'industry', name: 'Industry Insights', icon: Building, count: 0 }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'downloads', label: 'Most Downloaded' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: A Comprehensive Guide',
      excerpt: 'Explore how artificial intelligence is transforming enterprise operations and what organizations need to know to stay competitive.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      downloads: 15420,
      rating: 4.8,
      pages: 45,
      tags: ['AI', 'Enterprise', 'Digital Transformation', 'Machine Learning'],
      featured: true,
      image: '/images/whitepapers/ai-enterprise.jpg'
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture: Implementation Guide',
      excerpt: 'A detailed guide to implementing Zero Trust security principles in modern enterprise environments.',
      category: 'cybersecurity',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      downloads: 12850,
      rating: 4.9,
      pages: 38,
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Compliance'],
      featured: true,
      image: '/images/whitepapers/zero-trust.jpg'
    },
    {
      id: 3,
      title: 'Quantum Computing: Business Applications and ROI Analysis',
      excerpt: 'Understanding the business value of quantum computing and how to prepare for the quantum revolution.',
      category: 'quantum',
      author: 'Dr. James Wilson',
      date: '2024-01-10',
      downloads: 9870,
      rating: 4.7,
      pages: 52,
      tags: ['Quantum Computing', 'Business Value', 'ROI', 'Innovation'],
      featured: true,
      image: '/images/whitepapers/quantum-business.jpg'
    }
  ];

  const getCategoryCount = (categoryId: string) => {
    return whitePapers.filter(paper => paper.category === categoryId).length;
  };

  // Update counts
  categories.forEach(cat => {
    cat.count = getCategoryCount(cat.id);
  });

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || paper.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000000) {
      return (downloads / 1000000).toFixed(1) + 'M';
    } else if (downloads >= 1000) {
      return (downloads / 1000).toFixed(1) + 'K';
    }
    return downloads.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-cyan-500/20 rounded-full">
              <FileText className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            White Papers & Research
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access our latest research, insights, and thought leadership content
            on emerging technologies, digital transformation, and industry
            trends.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search white papers..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Categories and Sort */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-slate-900'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-slate-300">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {sortOptions.map(option => (
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

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="ml-1 px-2 py-1 bg-slate-600 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <div className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whitePapers.map((paper, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-600 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-cyan-400 mb-4">{paper.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {paper.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {paper.excerpt}
                </p>
                <a
                  href={paper.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White Papers Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            White Papers Library
          </h2>
          {filteredPapers.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredPapers.map(paper => (
                <div
                  key={paper.id}
                  className={`bg-slate-800 border border-slate-600 rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    paper.featured ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-300 bg-slate-600/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === paper.category)?.name}
                      </span>
                      {paper.featured && (
                        <span className="px-2 py-1 bg-cyan-400 text-slate-900 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Calendar className="w-4 h-4" />
                      {paper.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {paper.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-600/20 text-slate-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4 text-sm text-slate-300">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {paper.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {paper.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {paper.rating}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-300">
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {formatDownloads(paper.downloads)} downloads
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {paper.fileSize}
                      </div>
                    </div>
                    <button className="bg-cyan-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors inline-flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No white papers found
              </h3>
              <p className="text-slate-300">
                Try adjusting your search terms or browse all categories
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Subscribe to Updates */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive notifications about new white papers, research
            updates, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}