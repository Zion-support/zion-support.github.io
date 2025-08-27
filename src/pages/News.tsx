import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  Filter, 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Star, 
  Eye, 
  MessageCircle, 
  Share2,
  Brain,
  Shield,
  Cloud,
  Atom,
  Zap,
  Rocket,
  Globe,
  Building,
  Users,
  Cpu,
  Network,
  Lock,
  BarChart3,
  ShoppingCart,
  Heart,
  Leaf,
  Satellite,
  Target,
  Award,
  CheckCircle,
  Lightbulb,
  Code,
  Server,
  Database,
  Smartphone,
  Truck,
  GraduationCap,
  BookOpen,
  Video,
  Image,
  FileText,
  Link,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  external?: boolean;
  externalUrl?: string;
  views: number;
  likes: number;
  comments: number;
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Zion Tech Group Launches Revolutionary AI Quantum Hybrid Platform',
    excerpt: 'Our latest breakthrough combines artificial intelligence with quantum computing to solve previously unsolvable problems in drug discovery, materials science, and cryptography.',
    content: 'Zion Tech Group is proud to announce the launch of our revolutionary AI Quantum Hybrid Platform, a breakthrough technology that combines the power of artificial intelligence with quantum computing capabilities. This platform represents a significant leap forward in computational power and problem-solving capabilities...',
    author: 'Dr. Sarah Chen',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Company News',
    tags: ['AI', 'Quantum Computing', 'Innovation', 'Breakthrough'],
    image: '/images/news/ai-quantum-hybrid.jpg',
    featured: true,
    views: 15420,
    likes: 892,
    comments: 156
  },
  {
    id: '2',
    title: 'New Partnership with Microsoft Azure Expands Cloud AI Capabilities',
    excerpt: 'Strategic partnership brings advanced AI services to enterprise customers through Azure\'s global cloud infrastructure.',
    content: 'Zion Tech Group has entered into a strategic partnership with Microsoft Azure to expand our cloud AI capabilities and bring advanced artificial intelligence services to enterprise customers worldwide. This partnership leverages Azure\'s global cloud infrastructure...',
    author: 'Michael Rodriguez',
    publishDate: '2024-01-12',
    readTime: '5 min read',
    category: 'Partnerships',
    tags: ['Partnership', 'Microsoft Azure', 'Cloud AI', 'Enterprise'],
    image: '/images/news/microsoft-azure-partnership.jpg',
    featured: true,
    views: 12850,
    likes: 745,
    comments: 98
  },
  {
    id: '3',
    title: 'AI-Powered Cybersecurity Platform Achieves SOC2 Type II Compliance',
    excerpt: 'Our AI cybersecurity solution meets the highest industry standards for security and compliance, providing enterprise-grade protection.',
    content: 'Zion Tech Group\'s AI-powered cybersecurity platform has successfully achieved SOC2 Type II compliance, demonstrating our commitment to the highest standards of security and data protection. This certification validates our platform\'s ability to...',
    author: 'Jennifer Kim',
    publishDate: '2024-01-10',
    readTime: '6 min read',
    category: 'Security',
    tags: ['Cybersecurity', 'SOC2', 'Compliance', 'AI Security'],
    image: '/images/news/soc2-compliance.jpg',
    featured: false,
    views: 9870,
    likes: 523,
    comments: 67
  },
  {
    id: '4',
    title: 'Quantum Computing Breakthrough: Solving Complex Optimization Problems',
    excerpt: 'Our quantum computing research team has developed new algorithms that solve complex optimization problems 100x faster than classical computers.',
    content: 'Zion Tech Group\'s quantum computing research team has achieved a significant breakthrough in solving complex optimization problems. Our new quantum algorithms demonstrate a 100x speed improvement over classical computing approaches...',
    author: 'Dr. Alex Thompson',
    publishDate: '2024-01-08',
    readTime: '10 min read',
    category: 'Research',
    tags: ['Quantum Computing', 'Research', 'Optimization', 'Breakthrough'],
    image: '/images/news/quantum-breakthrough.jpg',
    featured: false,
    views: 11230,
    likes: 678,
    comments: 89
  },
  {
    id: '5',
    title: 'Micro SaaS Platform Launches with 50+ Niche Solutions',
    excerpt: 'New platform offers specialized software solutions for specific industries and use cases, democratizing access to enterprise-grade technology.',
    content: 'Zion Tech Group has launched our comprehensive Micro SaaS platform, featuring over 50 specialized software solutions designed for specific industries and use cases. This platform democratizes access to enterprise-grade technology...',
    author: 'David Park',
    publishDate: '2024-01-05',
    readTime: '7 min read',
    category: 'Product Launch',
    tags: ['Micro SaaS', 'Platform Launch', 'Software Solutions', 'Innovation'],
    image: '/images/news/micro-saas-platform.jpg',
    featured: false,
    views: 8760,
    likes: 445,
    comments: 56
  },
  {
    id: '6',
    title: 'AI Business Intelligence Suite Helps Fortune 500 Companies Increase Revenue by 35%',
    excerpt: 'Case study shows how our AI-powered business intelligence solutions drive significant revenue growth for enterprise clients.',
    content: 'A comprehensive case study of Zion Tech Group\'s AI Business Intelligence Suite implementation across Fortune 500 companies has revealed an average revenue increase of 35%. Our AI-powered analytics platform provides...',
    author: 'Lisa Wang',
    publishDate: '2024-01-03',
    readTime: '9 min read',
    category: 'Case Studies',
    tags: ['AI Business Intelligence', 'Case Study', 'Revenue Growth', 'Enterprise'],
    image: '/images/news/ai-bi-case-study.jpg',
    featured: false,
    views: 13450,
    likes: 789,
    comments: 123
  },
  {
    id: '7',
    title: 'Space Technology Division Launches Satellite AI Monitoring System',
    excerpt: 'New satellite-based AI monitoring system provides real-time insights for agriculture, climate monitoring, and urban planning.',
    content: 'Zion Tech Group\'s Space Technology Division has successfully launched a revolutionary satellite AI monitoring system that provides real-time insights for agriculture, climate monitoring, and urban planning applications...',
    author: 'Dr. Robert Chen',
    publishDate: '2024-01-01',
    readTime: '11 min read',
    category: 'Space Tech',
    tags: ['Space Technology', 'Satellite', 'AI Monitoring', 'Climate'],
    image: '/images/news/satellite-ai-monitoring.jpg',
    featured: false,
    views: 9870,
    likes: 567,
    comments: 78
  },
  {
    id: '8',
    title: 'Sustainable Technology Initiative: Reducing Carbon Footprint by 60%',
    excerpt: 'Our commitment to sustainability drives innovation in green technology solutions and operational efficiency.',
    content: 'Zion Tech Group\'s Sustainable Technology Initiative has achieved a 60% reduction in our operational carbon footprint while developing innovative green technology solutions for our clients. This initiative demonstrates...',
    author: 'Emma Johnson',
    publishDate: '2023-12-28',
    readTime: '6 min read',
    category: 'Sustainability',
    tags: ['Sustainability', 'Green Technology', 'Carbon Reduction', 'Innovation'],
    image: '/images/news/sustainable-technology.jpg',
    featured: false,
    views: 7650,
    likes: 432,
    comments: 45
  }
];

const categories = ['All', 'Company News', 'Partnerships', 'Security', 'Research', 'Product Launch', 'Case Studies', 'Space Tech', 'Sustainability'];

export function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'popularity' | 'relevance'>('date');

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popularity':
        return b.views - a.views;
      case 'relevance':
        return b.featured ? 1 : -1;
      default:
        return 0;
    }
  });

  const featuredArticles = sortedArticles.filter(article => article.featured);
  const regularArticles = sortedArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest News & Insights
            </h1>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Stay updated with the latest developments in AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-8"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'popularity' | 'relevance')}
                className="px-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="date">Sort by Date</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="relevance">Sort by Relevance</option>
              </select>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              Featured Stories
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                        Featured
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.publishDate)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-300 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{article.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {article.comments}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Latest News</h2>
          
          {regularArticles.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.publishDate)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-300 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{article.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                          +{article.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, insights, and updates on AI, quantum computing, and emerging technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default News;
