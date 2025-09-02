import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Eye,
  Tag,
  ArrowRight,
  TrendingUp,
  Star,
  BookOpen,
  Newspaper,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Users,
  Award,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'innovation', name: 'Innovation', icon: Rocket },
    { id: 'company', name: 'Company Updates', icon: Users },
    { id: 'industry', name: 'Industry Insights', icon: Globe }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      excerpt: 'Our new AI-driven security solution detects threats with 99.9% accuracy, revolutionizing enterprise security.',
      content: 'Zion Tech Group is proud to announce the launch of our groundbreaking AI-powered cybersecurity platform. This revolutionary solution leverages advanced machine learning algorithms to detect and prevent cyber threats with unprecedented accuracy. The platform processes millions of security events per second, providing real-time threat intelligence and automated response capabilities.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-20',
      readTime: '5 min read',
      category: 'ai-ml',
      tags: ['AI', 'Cybersecurity', 'Innovation'],
      image: '/news/ai-cybersecurity-platform.jpg',
      featured: true,
      views: 2150,
      likes: 156,
      company: 'Zion Tech Group'
    },
    {
      id: 2,
      title: 'Major Partnership Announced with Leading Cloud Provider',
      excerpt: 'Strategic alliance will accelerate cloud adoption and provide enhanced services to enterprise clients.',
      content: 'Zion Tech Group has entered into a strategic partnership with a leading cloud provider to deliver enhanced cloud solutions and accelerate digital transformation for enterprise clients. This partnership will provide access to cutting-edge cloud technologies and expanded service capabilities.',
      author: 'Michael Rodriguez',
      authorRole: 'VP of Strategic Partnerships',
      publishDate: '2025-01-18',
      readTime: '4 min read',
      category: 'cloud',
      tags: ['Partnership', 'Cloud', 'Enterprise'],
      image: '/news/cloud-partnership.jpg',
      featured: true,
      views: 1890,
      likes: 134,
      company: 'Zion Tech Group'
    },
    {
      id: 3,
      title: 'Industry Recognition: Zion Tech Group Wins Innovation Award',
      excerpt: 'Recognized for outstanding contributions to AI and cybersecurity innovation in the technology sector.',
      content: 'Zion Tech Group has been honored with the prestigious Innovation Award for our groundbreaking work in AI and cybersecurity. This recognition highlights our commitment to pushing the boundaries of technology and delivering exceptional value to our clients.',
      author: 'Emily Watson',
      authorRole: 'Head of Innovation',
      publishDate: '2025-01-15',
      readTime: '3 min read',
      category: 'company',
      tags: ['Award', 'Innovation', 'Recognition'],
      image: '/news/innovation-award.jpg',
      featured: false,
      views: 1456,
      likes: 98,
      company: 'Zion Tech Group'
    },
    {
      id: 4,
      title: 'New Research Reveals AI Adoption Trends in Enterprise',
      excerpt: 'Comprehensive study shows 85% of enterprises are increasing AI investments in 2025.',
      content: 'Our latest research study reveals significant trends in AI adoption across enterprise organizations. The findings show that 85% of surveyed companies are planning to increase their AI investments in 2025, with cybersecurity and automation being the top priorities.',
      author: 'Dr. David Kim',
      authorRole: 'Director of Research',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'industry',
      tags: ['Research', 'AI', 'Enterprise'],
      image: '/news/ai-adoption-research.jpg',
      featured: false,
      views: 1234,
      likes: 87,
      company: 'Zion Tech Group'
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Landscape Report 2025',
      excerpt: 'Annual report highlights emerging threats and provides actionable security recommendations.',
      content: 'Our comprehensive cybersecurity threat landscape report for 2025 identifies key emerging threats and provides actionable recommendations for organizations to strengthen their security posture. The report covers everything from AI-powered attacks to supply chain vulnerabilities.',
      author: 'Lisa Thompson',
      authorRole: 'Chief Security Officer',
      publishDate: '2025-01-10',
      readTime: '8 min read',
      category: 'cybersecurity',
      tags: ['Security', 'Threats', 'Report'],
      image: '/news/cybersecurity-report.jpg',
      featured: false,
      views: 1678,
      likes: 112,
      company: 'Zion Tech Group'
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = newsArticles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="News - Zion Tech Group"
        description="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Get the latest on AI, cybersecurity, and technology innovation."
        keywords="technology news, AI news, cybersecurity news, Zion Tech Group news, technology announcements"
      />

      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest News
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest announcements, insights, and developments from Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sticky top-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Featured News */}
              {selectedCategory === 'all' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Featured News</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredArticles.map((article) => (
                      <motion.article
                        key={article.id}
                        whileHover={{ y: -5 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300"
                      >
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
                        <div className="p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                              {categories.find(cat => cat.id === article.category)?.name}
                            </span>
                            <span className="text-yellow-400 text-sm">⭐ Featured</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-300 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{article.views}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <TrendingUp className="w-4 h-4" />
                                <span>{article.likes}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              )}

              {/* All News */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  {selectedCategory === 'all' ? 'All News' : categories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
                <div className="space-y-6">
                  {filteredArticles.map((article) => (
                    <motion.article
                      key={article.id}
                      whileHover={{ y: -2 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg"></div>
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                              {categories.find(cat => cat.id === article.category)?.name}
                            </span>
                            {article.featured && (
                              <span className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span>{article.author}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{article.views}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <TrendingUp className="w-4 h-4" />
                                <span>{article.likes}</span>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mt-4">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}