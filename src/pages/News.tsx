import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  Newspaper,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  Cpu,
  Zap,
  Building,
  Users,
  Globe,
  Star,
  Eye,
  Heart,
  Share2,
  ExternalLink,
  Filter,
  Bookmark,
  BookmarkPlus,
  Rocket,
  Database,
  Award
} from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 7 },
    { id: 'business', name: 'Business & Industry', icon: Building, count: 9 },
    { id: 'innovation', name: 'Innovation & Trends', icon: Lightbulb, count: 8 },
    { id: 'development', name: 'Development', icon: Code, count: 5 }
  ];

  const sources = [
    'All Sources',
    'Company Press Releases',
    'Industry Reports',
    'Technology News',
    'Research Papers',
    'Partner Updates',
    'Customer Success Stories'
  ];

  const timeframes = [
    'All Time',
    'Last 24 Hours',
    'Last Week',
    'Last Month',
    'Last Quarter',
    'Last Year'
  ];

  const newsData = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Platform",
      excerpt: "New autonomous business management solution transforms how companies operate with AI-driven decision making and process automation.",
      category: "ai-ml",
      source: "Company Press Release",
      author: "Zion Tech Group",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/images/news/ai-business-platform.jpg",
      featured: true,
      tags: ["AI", "Business Automation", "Innovation"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Zion's New Research Platform",
      excerpt: "Advanced quantum neural network platform demonstrates unprecedented computational capabilities for complex problem solving.",
      category: "quantum",
      source: "Research Papers",
      author: "Dr. Sarah Chen",
      date: "2025-01-14",
      readTime: "8 min read",
      image: "/images/news/quantum-breakthrough.jpg",
      featured: true,
      tags: ["Quantum Computing", "Research", "Neural Networks"]
    },
    {
      id: 3,
      title: "Cybersecurity Evolution: Zero-Trust Architecture Implementation",
      excerpt: "Comprehensive security framework provides enterprise-grade protection with autonomous threat detection and response.",
      category: "cybersecurity",
      source: "Technology News",
      author: "Security Team",
      date: "2025-01-13",
      readTime: "6 min read",
      image: "/images/news/cybersecurity.jpg",
      featured: false,
      tags: ["Cybersecurity", "Zero-Trust", "Enterprise"]
    },
    {
      id: 4,
      title: "Cloud Infrastructure Revolution: Multi-Cloud Management Platform",
      excerpt: "Unified cloud management solution optimizes costs and performance across multiple cloud providers.",
      category: "cloud",
      source: "Industry Reports",
      author: "Cloud Solutions Team",
      date: "2025-01-12",
      readTime: "4 min read",
      image: "/images/news/cloud-platform.jpg",
      featured: false,
      tags: ["Cloud Computing", "DevOps", "Cost Optimization"]
    },
    {
      id: 5,
      title: "AI-Powered Content Generation: Revolutionizing Digital Marketing",
      excerpt: "Advanced content creation platform uses AI to generate engaging, SEO-optimized content at scale.",
      category: "ai-ml",
      source: "Technology News",
      author: "Marketing Team",
      date: "2025-01-11",
      readTime: "7 min read",
      image: "/images/news/ai-content.jpg",
      featured: false,
      tags: ["AI", "Content Marketing", "SEO"]
    }
  ];

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSource = selectedSource === 'All Sources' || news.source === selectedSource;
    
    return matchesSearch && matchesCategory && matchesSource;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality implementation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed about the latest developments in AI, quantum computing, cybersecurity, and technology innovation from Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sources.map(source => (
                <option key={source} value={source} className="bg-gray-800 text-white">
                  {source}
                </option>
              ))}
            </select>
            
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              Search
            </button>
          </form>
        </motion.div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                {news.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Bookmark className="h-4 w-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Share2 className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-medium rounded-full">
                    {categories.find(c => c.id === news.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">{news.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {news.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Newspaper className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-white mb-2">No news found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
