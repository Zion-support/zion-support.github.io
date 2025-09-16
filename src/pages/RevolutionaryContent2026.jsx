import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag, Star, TrendingUp, Eye, Heart, Share2, BookOpen, Zap } from 'lucide-react';
import { getFeaturedBlogPosts, getRecentBlogPosts, getBlogCategories, getBlogTags } from '../data/blog-posts';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const RevolutionaryContent2026 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const allPosts = [...getFeaturedBlogPosts(), ...getRecentBlogPosts()];
  const categories = getBlogCategories();
  const tags = getBlogTags();

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate) - new Date(a.publishDate);
      case 'oldest':
        return new Date(a.publishDate) - new Date(b.publishDate);
      case 'popular':
        return (b.reviews?.count || 0) - (a.reviews?.count || 0);
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Healthcare AI': 'from-blue-500 to-cyan-500',
      'Green Technology': 'from-green-500 to-emerald-500',
      'Workplace Innovation': 'from-purple-500 to-violet-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Smart Cities': 'from-orange-500 to-yellow-500',
      'Financial Technology': 'from-indigo-500 to-blue-500',
      'Education Technology': 'from-teal-500 to-green-500',
      'Manufacturing AI': 'from-gray-500 to-slate-500',
      'Retail Technology': 'from-pink-500 to-rose-500',
      'Transportation Technology': 'from-cyan-500 to-blue-500',
      'Technology Trends': 'from-violet-500 to-purple-500',
      'Innovation': 'from-yellow-500 to-orange-500',
      'Case Studies': 'from-emerald-500 to-teal-500',
      'AI & Machine Learning': 'from-blue-600 to-indigo-600',
      'Quantum Technology': 'from-purple-600 to-violet-600',
      'Neural Technology': 'from-pink-600 to-rose-600',
      'Revolutionary AI': 'from-red-600 to-pink-600',
      'Ultimate Technology': 'from-yellow-600 to-orange-600',
      'AI Automation': 'from-green-600 to-emerald-600',
      'AI Content Generation': 'from-cyan-600 to-blue-600',
      'AI Analytics': 'from-indigo-600 to-purple-600',
      'AI Security': 'from-red-600 to-orange-600',
      'Consciousness AI': 'from-violet-600 to-purple-600',
      'Holographic Technology': 'from-pink-600 to-violet-600',
      'Space Technology': 'from-blue-600 to-cyan-600',
      'Biotech AI': 'from-green-600 to-teal-600',
      'Autonomous AI': 'from-gray-600 to-slate-600',
      'Metaverse Technology': 'from-purple-600 to-pink-600',
      'Edge Computing': 'from-cyan-600 to-teal-600',
      'Digital Twin Technology': 'from-indigo-600 to-blue-600',
      'Blockchain Technology': 'from-orange-600 to-red-600',
      'Augmented Reality': 'from-pink-600 to-rose-600',
      'Wireless Technology': 'from-blue-600 to-indigo-600'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  const tabs = [
    { id: 'all', label: 'All Content', count: allPosts.length },
    { id: 'featured', label: 'Featured', count: getFeaturedBlogPosts().length },
    { id: 'recent', label: 'Recent', count: getRecentBlogPosts().length },
    { id: 'trending', label: 'Trending', count: allPosts.filter(p => p.featured).length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              REVOLUTIONARY CONTENT 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover the Future of
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Technology & Innovation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Explore our comprehensive collection of cutting-edge content, revolutionary AI solutions, and breakthrough technologies that are transforming industries worldwide.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for content, technologies, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 pr-4 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
                />
                <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(post.category)} flex items-center justify-center text-white text-4xl`}>
                    <BookOpen className="w-16 h-16" />
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors duration-300">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">24</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Content
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2026;