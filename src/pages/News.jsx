import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Newspaper,
  Building,
  Zap
} from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 67 },
    { id: 'company', name: 'Company News', icon: Building, count: 23 },
    { id: 'technology', name: 'Technology', icon: Zap, count: 18 },
    { id: 'partnerships', name: 'Partnerships', icon: Globe, count: 12 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 8 },
    { id: 'research', name: 'Research & Development', icon: TrendingUp, count: 6 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform",
      excerpt: "Our latest AI platform transforms how businesses analyze data and make decisions, featuring advanced machine learning algorithms and real-time insights.",
      category: "company",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Zion Tech Team",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Partnership Announcement: Zion Tech Group Joins Forces with Leading Cloud Provider",
      excerpt: "Strategic partnership to deliver enhanced cloud solutions and accelerate digital transformation for enterprise clients.",
      category: "partnerships",
      date: "2024-01-12",
      readTime: "3 min read",
      author: "Business Development",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 3,
      title: "Cybersecurity Breakthrough: New Zero-Trust Architecture Implementation",
      excerpt: "Innovative approach to network security that eliminates traditional perimeter-based security models.",
      category: "technology",
      date: "2024-01-10",
      readTime: "7 min read",
      author: "Security Team",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Zion Tech Group Recognized as Top AI Company in 2024 Industry Awards",
      excerpt: "Prestigious recognition for our contributions to artificial intelligence and machine learning innovation.",
      category: "awards",
      date: "2024-01-08",
      readTime: "4 min read",
      author: "Marketing Team",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Research Breakthrough: Quantum Computing Applications in Financial Services",
      excerpt: "Groundbreaking research on quantum computing's potential to revolutionize financial modeling and risk assessment.",
      category: "research",
      date: "2024-01-05",
      readTime: "8 min read",
      author: "R&D Team",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Customer Success Story: Manufacturing Company Achieves 40% Efficiency Gain",
      excerpt: "How our AI solutions helped a leading manufacturer optimize operations and reduce costs significantly.",
      category: "company",
      date: "2024-01-03",
      readTime: "6 min read",
      author: "Customer Success",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="container-responsive text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Latest News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan/90 max-w-3xl mx-auto"
          >
            Stay informed about the latest developments, partnerships, and innovations at Zion Tech Group
          </motion.p>
        </div>
      </div>

      <div className="container-responsive py-16">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-futuristic border-zion-cyan'
                      : 'bg-white/5 text-white border-zion-cyan/30 hover:bg-white/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {newsArticles.filter(article => article.featured).map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-zion-cyan" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full capitalize">
                        {article.category}
                      </span>
                      <span className="text-zion-cyan/60 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                    <p className="text-zion-cyan/80 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan/60">{article.author}</span>
                      <span className="text-zion-cyan/60">{formatDate(article.date)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All News Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              {searchTerm ? `Search Results (${filteredNews.length})` : 'All News'}
            </h2>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-zion-cyan" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full capitalize">
                        {article.category}
                      </span>
                      <span className="text-zion-cyan/60 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{article.title}</h3>
                    <p className="text-zion-cyan/80 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan/60">{article.author}</span>
                      <span className="text-zion-cyan/60">{formatDate(article.date)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Newspaper className="w-16 h-16 text-zion-cyan/60 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-cyan/80 mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Browse All News
              </button>
            </div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and updates 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
