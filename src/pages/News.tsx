import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Newspaper,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Globe,
  TrendingUp,
  Award,
  Users,
  Zap,
  Brain,
  Shield,
  Cloud,
  Eye,
  Clock,
  Star,
  ExternalLink
} from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper },
    { id: 'company', name: 'Company Updates', icon: Users },
    { id: 'technology', name: 'Technology', icon: Brain },
    { id: 'ai', name: 'AI & ML', icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      excerpt: 'Our new AI-Cybersecurity Platform combines machine learning with advanced threat detection to provide enterprise-grade security solutions.',
      content: 'Zion Tech Group is excited to announce the launch of our revolutionary AI-Powered Cybersecurity Platform. This cutting-edge solution leverages advanced machine learning algorithms to detect and prevent cyber threats in real-time, providing enterprise-grade security for organizations of all sizes. The platform features automated threat response, behavioral analysis, and comprehensive compliance reporting.',
      category: 'company',
      author: 'Kleber Santos',
      date: '2024-08-30',
      readTime: '5 min read',
      tags: ['AI', 'Cybersecurity', 'Product Launch'],
      featured: true,
      image: '🔒',
      views: 15420
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Group Partners with Leading Research Institutions',
      excerpt: 'Strategic partnership announced to advance quantum computing research and develop next-generation computing solutions.',
      content: 'Zion Tech Group has announced a groundbreaking partnership with leading research institutions to advance quantum computing research. This collaboration will focus on developing next-generation quantum algorithms, improving quantum error correction, and exploring practical applications in cryptography, optimization, and machine learning.',
      category: 'technology',
      author: 'Research Team',
      date: '2024-08-28',
      readTime: '7 min read',
      tags: ['Quantum Computing', 'Research', 'Partnerships'],
      featured: true,
      image: '⚛️',
      views: 12850
    },
    {
      id: 3,
      title: 'AI in Healthcare: Transforming Patient Care with Machine Learning',
      excerpt: 'How artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes across the industry.',
      content: 'Artificial intelligence is transforming healthcare delivery in unprecedented ways. From diagnostic imaging to personalized treatment plans, AI technologies are improving patient outcomes and reducing healthcare costs. Zion Tech Group is at the forefront of this revolution, developing AI-powered healthcare solutions that enhance clinical decision-making and patient care.',
      category: 'ai',
      author: 'Healthcare Team',
      date: '2024-08-25',
      readTime: '6 min read',
      tags: ['AI', 'Healthcare', 'Machine Learning'],
      featured: false,
      image: '🏥',
      views: 11230
    },
    {
      id: 4,
      title: 'Cloud Security Trends: What to Expect in 2025',
      excerpt: 'Expert analysis of emerging cloud security challenges and innovative solutions for the coming year.',
      content: 'As cloud adoption continues to accelerate, organizations face new security challenges that require innovative solutions. In 2025, we expect to see increased focus on zero-trust security models, AI-powered threat detection, and enhanced compliance frameworks. Zion Tech Group is developing next-generation cloud security solutions to address these evolving threats.',
      category: 'cybersecurity',
      author: 'Security Team',
      date: '2024-08-22',
      readTime: '8 min read',
      tags: ['Cloud Security', 'Trends', '2025'],
      featured: false,
      image: '☁️',
      views: 9870
    },
    {
      id: 5,
      title: 'Digital Transformation Success Story: Manufacturing Company Achieves 40% Efficiency Gain',
      excerpt: 'Case study showcasing how Zion Tech Group helped a manufacturing company transform their operations through digital innovation.',
      content: 'A leading manufacturing company partnered with Zion Tech Group to implement a comprehensive digital transformation strategy. Through the integration of IoT sensors, AI-powered analytics, and automated workflows, the company achieved a 40% increase in operational efficiency, reduced downtime by 60%, and improved product quality by 25%.',
      category: 'company',
      author: 'Case Study Team',
      date: '2024-08-20',
      readTime: '10 min read',
      tags: ['Digital Transformation', 'Manufacturing', 'Case Study'],
      featured: false,
      image: '🏭',
      views: 8760
    },
    {
      id: 6,
      title: 'Edge Computing Revolution: Processing Data Where It Matters Most',
      excerpt: 'Exploring the future of edge computing and how it\'s reshaping the technology landscape.',
      content: 'Edge computing is revolutionizing how we process and analyze data by bringing computation closer to the data source. This approach reduces latency, improves performance, and enables real-time decision making. Zion Tech Group is developing innovative edge computing solutions that help organizations leverage this transformative technology.',
      category: 'technology',
      author: 'Technology Team',
      date: '2024-08-18',
      readTime: '7 min read',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing'],
      featured: false,
      image: '🌐',
      views: 7650
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for a Better Future',
      excerpt: 'How Zion Tech Group is helping organizations reduce their environmental impact through sustainable technology solutions.',
      content: 'Sustainability is no longer optional for modern organizations. Zion Tech Group is committed to developing green IT solutions that help businesses reduce their carbon footprint while improving operational efficiency. Our sustainable technology initiatives include energy-efficient data centers, renewable energy integration, and carbon-neutral cloud solutions.',
      category: 'industry',
      author: 'Sustainability Team',
      date: '2024-08-15',
      readTime: '6 min read',
      tags: ['Sustainability', 'Green IT', 'Environmental Impact'],
      featured: false,
      image: '🌱',
      views: 6540
    },
    {
      id: 8,
      title: 'The Future of Work: AI-Powered Collaboration Tools',
      excerpt: 'Discover how AI is transforming workplace collaboration and productivity in the post-pandemic era.',
      content: 'The future of work is here, and it\'s powered by artificial intelligence. Zion Tech Group is developing next-generation collaboration tools that leverage AI to enhance team productivity, streamline communication, and automate routine tasks. These solutions are designed to support the evolving needs of modern, distributed workforces.',
      category: 'ai',
      author: 'Product Team',
      date: '2024-08-12',
      readTime: '8 min read',
      tags: ['AI', 'Collaboration', 'Future of Work'],
      featured: false,
      image: '💼',
      views: 5430
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
  const recentArticles = newsArticles.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Latest
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> News</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Stay updated with the latest technology trends, company announcements, 
              and industry insights from Zion Tech Group.
            </motion.p>
            
            {/* Search and Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our most important and impactful news stories.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/news/${article.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {filteredArticles.length} articles found
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                            +{article.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/news/${article.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors text-sm"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Subscribe to our newsletter to receive the latest news, insights, 
            and updates directly in your inbox.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
