import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe, 
  Zap, 
  Rocket, 
  Star, 
  Clock,
  User,
  Eye,
  Heart,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Filter,
  Search
} from 'lucide-react';
import { blogPosts } from '../data/blog-posts';
const RevolutionaryContent2026 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  // Get the new revolutionary content (IDs 8001-8007)
  const revolutionaryContent = blogPosts.filter(post => post.id >= 8001);
  const categories = ['All', 'Synthetic Intelligence', 'Interdimensional Tech', 'Consciousness Technology', 'Reality Technology', 'Space AI', 'Temporal Technology', 'Communication Technology'];
  const filteredContent = revolutionaryContent.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Synthetic Intelligence': return Brain;
      case 'Interdimensional Tech': return Globe;
      case 'Consciousness Technology': return Zap;
      case 'Reality Technology': return Rocket;
      case 'Space AI': return Star;
      case 'Temporal Technology': return Clock;
      case 'Communication Technology': return Globe;
      default: return Sparkles;
    }
  };
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Synthetic Intelligence': return 'from-purple-600 to-pink-600';
      case 'Interdimensional Tech': return 'from-blue-600 to-cyan-600';
      case 'Consciousness Technology': return 'from-emerald-600 to-teal-600';
      case 'Reality Technology': return 'from-orange-600 to-red-600';
      case 'Space AI': return 'from-indigo-600 to-purple-600';
      case 'Temporal Technology': return 'from-violet-600 to-purple-600';
      case 'Communication Technology': return 'from-cyan-600 to-blue-600';
      default: return 'from-gray-600 to-gray-700';
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-5 h-5" />
            REVOLUTIONARY CONTENT 2026
            <TrendingUp className="w-5 h-5" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            The Future of Technology
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Is Here
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore groundbreaking content covering the latest in synthetic intelligence, interdimensional computing, 
            consciousness transfer, and other revolutionary technologies that are reshaping our world.
          </p>
        </motion.div>
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = getCategoryIcon(category);
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category}
                    </button>
                  );
};
                })}
              </div>
            </div>
          </div>
        </motion.div>
        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredContent.map((post, index) => {
            const Icon = getCategoryIcon(post.category);
            const colorClass = getCategoryColor(post.category);
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:border-white/20 hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex p-3 bg-gradient-to-br ${colorClass} rounded-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-semibold">FEATURED</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      {/* Author Info */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{post.author}</div>
                          <div className="text-gray-400 text-xs">{post.authorRole}</div>
                        </div>
                      </div>
                    </div>
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{Math.floor(Math.random() * 50000) + 10000} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{Math.floor(Math.random() * 2000) + 500} likes</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-400 group-hover:translate-x-1 transition-transform">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to Stay Updated on Revolutionary Tech?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to discover the latest breakthroughs 
              in AI, quantum computing, and next-generation technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/newsletter"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );



export default RevolutionaryContent2026;
