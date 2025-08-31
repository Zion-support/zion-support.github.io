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
  Cloud
} from 'lucide-react';

const News = () => {
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
      image: '🔒'
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
      image: '⚛️'
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
      image: '🏥'
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
      image: '☁️'
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
      image: '🏭'
    },
    {
      id: 6,
      title: 'The Future of Edge Computing: Bringing AI Closer to Data Sources',
      excerpt: 'Exploring how edge computing is revolutionizing AI deployment and enabling real-time decision making.',
      content: 'Edge computing is revolutionizing how AI applications are deployed and operated. By bringing computation closer to data sources, organizations can achieve real-time decision making, reduce latency, and improve privacy. Zion Tech Group is developing edge AI solutions that enable intelligent applications to run efficiently on resource-constrained devices.',
      category: 'technology',
      author: 'Technology Team',
      date: '2024-08-18',
      readTime: '6 min read',
      tags: ['Edge Computing', 'AI', 'Real-time'],
      featured: false,
      image: '🌐'
    },
    {
      id: 7,
      title: 'Cybersecurity Compliance: Navigating the Evolving Regulatory Landscape',
      excerpt: 'Comprehensive guide to understanding and implementing cybersecurity compliance requirements across industries.',
      content: 'Cybersecurity compliance requirements are constantly evolving, creating challenges for organizations across all industries. From SOC2 to ISO27001, organizations must navigate complex regulatory frameworks while maintaining robust security postures. Zion Tech Group provides comprehensive compliance solutions that help organizations meet regulatory requirements and protect sensitive data.',
      category: 'cybersecurity',
      author: 'Compliance Team',
      date: '2024-08-15',
      readTime: '9 min read',
      tags: ['Compliance', 'Cybersecurity', 'Regulations'],
      featured: false,
      image: '📋'
    },
    {
      id: 8,
      title: 'AI Ethics and Responsible AI Development: Zion Tech Group\'s Commitment',
      excerpt: 'How we ensure ethical AI development and responsible deployment of artificial intelligence solutions.',
      content: 'At Zion Tech Group, we believe that responsible AI development is crucial for building trust and ensuring positive societal impact. Our AI ethics framework guides all aspects of our development process, from data collection to model deployment. We are committed to transparency, fairness, and accountability in all our AI solutions.',
      category: 'ai',
      author: 'AI Ethics Team',
      date: '2024-08-12',
      readTime: '7 min read',
      tags: ['AI Ethics', 'Responsible AI', 'Transparency'],
      featured: false,
      image: '🤖'
    }
  ];

  const industryInsights = [
    {
      title: 'AI Adoption in Financial Services',
      description: 'How financial institutions are leveraging AI for risk management and customer service.',
      readTime: '5 min read',
      category: 'Industry Insights'
    },
    {
      title: 'Cloud Migration Strategies for Enterprises',
      description: 'Best practices for migrating legacy systems to modern cloud infrastructure.',
      readTime: '8 min read',
      category: 'Technology'
    },
    {
      title: 'Cybersecurity in the Age of Remote Work',
      description: 'Addressing security challenges in distributed work environments.',
      readTime: '6 min read',
      category: 'Cybersecurity'
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
  const recentArticles = newsArticles.filter(article => !article.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}News & Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about the latest developments in AI, technology, and 
              industry insights from Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news and articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most important and impactful news stories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>

                  <div className="text-4xl mb-4">{article.image}</div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 transition-colors duration-200">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay up to date with our latest insights and industry analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{article.image}</div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                  <span className="text-gray-400 text-xs">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center space-x-2 transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-400 mb-4">
                No articles found matching your criteria.
              </p>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert analysis and thought leadership on emerging technology trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{insight.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{insight.category}</span>
                  <span className="text-xs text-cyan-400">{insight.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, insights, and 
              technology updates delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
