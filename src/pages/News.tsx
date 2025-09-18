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

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 67 },
    { id: 'company', name: 'Company News', icon: Building, count: 23 },
    { id: 'technology', name: 'Technology', icon: Zap, count: 18 },
    { id: 'partnerships', name: 'Partnerships', icon: Globe, count: 12 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 8 },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, count: 6 }
  ];

  const years = [
    { id: 'all', name: 'All Years', count: 67 },
    { id: '2025', name: '2025', count: 23 },
    { id: '2024', name: '2024', count: 28 },
    { id: '2023', name: '2023', count: 16 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform",
      excerpt: "Our latest innovation combines quantum computing with machine learning to provide unprecedented threat detection capabilities.",
      category: "Product Launch",
      author: "Zion Tech Team",
      date: "2025-01-15",
      readTime: "5 min read",
      views: 1247,
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Partnership with Global Tech Leaders Announced",
      excerpt: "Strategic collaboration to advance quantum computing research and development across multiple industries.",
      category: "Partnerships",
      author: "Business Development",
      date: "2025-01-12",
      readTime: "3 min read",
      views: 892,
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Zion Tech Group Recognized as Top AI Innovation Company 2025",
      excerpt: "Industry recognition for our contributions to artificial intelligence and machine learning advancement.",
      category: "Awards & Recognition",
      author: "Corporate Communications",
      date: "2025-01-10",
      readTime: "4 min read",
      views: 1563,
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "New Research Paper: Quantum Neural Networks in Cybersecurity",
      excerpt: "Breakthrough research demonstrating the potential of quantum computing in protecting digital infrastructure.",
      category: "Research & Development",
      author: "R&D Team",
      date: "2025-01-08",
      readTime: "8 min read",
      views: 734,
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Industry Report: The Future of AI in Enterprise",
      excerpt: "Comprehensive analysis of how artificial intelligence is transforming business operations worldwide.",
      category: "Industry Insights",
      author: "Market Research",
      date: "2025-01-05",
      readTime: "6 min read",
      views: 1102,
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Customer Success Story: Digital Transformation at Scale",
      excerpt: "How we helped a Fortune 500 company achieve 300% efficiency improvement through AI implementation.",
      category: "Company News",
      author: "Customer Success",
      date: "2025-01-03",
      readTime: "7 min read",
      views: 945,
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === categories.find(c => c.id === selectedCategory)?.name;
    const matchesYear = selectedYear === 'all' || article.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredArticle = newsArticles.find(article => article.featured);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Stay informed about the latest developments in AI, technology, and innovation from Zion Tech Group
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 border-cyan-500 text-white'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50'
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

          {/* Year Filters */}
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year.id}
                onClick={() => setSelectedYear(year.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedYear === year.id
                    ? 'bg-cyan-500 border-cyan-500 text-white'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                {year.name}
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full ml-2">
                  {year.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div 
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    Featured
                  </span>
                  <span className="text-slate-400 text-sm">{featuredArticle.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-300 text-lg mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-6 text-slate-400 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredArticle.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {featuredArticle.views}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-slate-700/50 flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <Newspaper className="w-16 h-16 mx-auto mb-4" />
                    <p>News Image</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredArticles.filter(article => !article.featured).map((article) => (
            <motion.article
              key={article.id}
              className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-xs">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <button className="w-full text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredArticles.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-slate-400 text-lg mb-4">No articles found matching your criteria</div>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedYear('all');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default News;
