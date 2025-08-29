import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  Clock,
  Eye,
  Share2,
  Bookmark,
  TrendingUp,
  Award,
  Users as UsersIcon,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, color: 'from-blue-600 to-cyan-600' },
    { id: 'company', name: 'Company Updates', icon: UsersIcon, color: 'from-green-600 to-emerald-600' },
    { id: 'technology', name: 'Technology', icon: Zap, color: 'from-purple-600 to-pink-600' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-indigo-600 to-purple-600' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-orange-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-600 to-cyan-600' },
    { id: 'innovation', name: 'Innovation', icon: Rocket, color: 'from-yellow-600 to-orange-600' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Strategic Partnership with MIT for Quantum Computing Research',
      excerpt: 'Leading technology company partners with prestigious institution to advance quantum computing capabilities and develop next-generation computational solutions.',
      content: 'Zion Tech Group is excited to announce a groundbreaking strategic partnership with the Massachusetts Institute of Technology (MIT) to advance quantum computing research and development. This collaboration will focus on developing innovative quantum algorithms, improving quantum error correction, and exploring practical applications of quantum computing in various industries.',
      category: 'company',
      author: 'Sarah Chen',
      authorTitle: 'Chief Technology Officer',
      publishDate: '2024-12-15',
      readTime: '5 min read',
      views: 2847,
      tags: ['Quantum Computing', 'Research Partnership', 'MIT', 'Innovation'],
      image: '/images/news/mit-partnership.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'New AI-Powered Cybersecurity Suite Launches with 99.9% Threat Detection Rate',
      excerpt: 'Revolutionary cybersecurity solution combines artificial intelligence with advanced threat intelligence to provide unparalleled protection against evolving cyber threats.',
      content: 'Zion Tech Group has launched its latest AI-powered cybersecurity suite, setting a new industry standard with a 99.9% threat detection rate. The comprehensive solution integrates machine learning algorithms with real-time threat intelligence to identify and neutralize cyber threats before they can cause damage.',
      category: 'security',
      author: 'Michael Rodriguez',
      authorTitle: 'Head of Cybersecurity',
      publishDate: '2024-12-12',
      readTime: '4 min read',
      views: 2156,
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Launch'],
      image: '/images/news/cybersecurity-suite.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Zion Tech Group Recognized as Top 10 AI Company by Tech Industry Report',
      excerpt: 'Prestigious recognition highlights company\'s leadership in artificial intelligence innovation and successful client implementations across industries.',
      content: 'Zion Tech Group has been recognized as one of the top 10 AI companies in the technology industry, according to the latest Tech Industry Report. This recognition is based on the company\'s innovative AI solutions, successful client implementations, and contributions to advancing artificial intelligence technology.',
      category: 'company',
      author: 'Emily Zhang',
      authorTitle: 'Marketing Director',
      publishDate: '2024-12-10',
      readTime: '3 min read',
      views: 1892,
      tags: ['Award', 'AI Leadership', 'Recognition', 'Industry Report'],
      image: '/images/news/ai-award.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Edge Computing Platform Achieves 50% Performance Improvement in Latest Update',
      excerpt: 'Major platform update delivers significant performance enhancements and new features for edge computing applications.',
      content: 'Zion Tech Group\'s Edge Computing Platform has received a major update that delivers a 50% performance improvement and introduces several new features. The update includes enhanced AI processing capabilities, improved security protocols, and better integration with cloud services.',
      category: 'technology',
      author: 'David Kim',
      authorTitle: 'Lead Platform Engineer',
      publishDate: '2024-12-08',
      readTime: '4 min read',
      views: 1654,
      tags: ['Edge Computing', 'Platform Update', 'Performance', 'AI'],
      image: '/images/news/edge-computing.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Healthcare AI Analytics Solution Helps Hospital Reduce Patient Wait Times by 30%',
      excerpt: 'Real-world implementation demonstrates the power of AI in healthcare optimization and patient care improvement.',
      content: 'A major hospital has successfully implemented Zion Tech Group\'s Healthcare AI Analytics Solution, achieving a 30% reduction in patient wait times. The AI-powered system analyzes patient flow, optimizes resource allocation, and provides predictive insights for better healthcare delivery.',
      category: 'ai',
      author: 'Lisa Thompson',
      authorTitle: 'Healthcare Solutions Specialist',
      publishDate: '2024-12-05',
      readTime: '6 min read',
      views: 1423,
      tags: ['Healthcare', 'AI Analytics', 'Patient Care', 'Case Study'],
      image: '/images/news/healthcare-ai.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Zion Tech Group Expands Global Operations with New Office in Singapore',
      excerpt: 'Strategic expansion strengthens company\'s presence in the Asia-Pacific region and enhances local client support.',
      content: 'Zion Tech Group has announced the opening of a new office in Singapore, marking a significant expansion of the company\'s global operations. The new office will serve as a hub for the Asia-Pacific region, providing local support and expertise to clients in the region.',
      category: 'company',
      author: 'James Wilson',
      authorTitle: 'Global Operations Director',
      publishDate: '2024-12-03',
      readTime: '3 min read',
      views: 1234,
      tags: ['Global Expansion', 'Singapore', 'Asia-Pacific', 'Operations'],
      image: '/images/news/singapore-office.jpg',
      featured: false
    },
    {
      id: 7,
      title: 'New Micro SaaS Platform Simplifies Software Development for Small Businesses',
      excerpt: 'Innovative platform enables small businesses to develop and deploy custom software solutions quickly and cost-effectively.',
      content: 'Zion Tech Group has launched a new Micro SaaS platform designed specifically for small businesses. The platform provides pre-built templates, automated deployment tools, and scalable infrastructure to help small businesses develop and deploy custom software solutions without the complexity and cost of traditional development.',
      category: 'innovation',
      author: 'Robert Martinez',
      authorTitle: 'Product Manager',
      publishDate: '2024-11-30',
      readTime: '5 min read',
      views: 1156,
      tags: ['Micro SaaS', 'Small Business', 'Software Development', 'Platform'],
      image: '/images/news/micro-saas.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'Cloud FinOps Solution Helps Enterprise Reduce Cloud Costs by 40%',
      excerpt: 'Financial operations optimization tool delivers significant cost savings through intelligent cloud resource management.',
      content: 'A Fortune 500 company has achieved a 40% reduction in cloud costs using Zion Tech Group\'s Cloud FinOps solution. The AI-powered tool analyzes cloud usage patterns, identifies optimization opportunities, and provides automated recommendations for cost reduction while maintaining performance.',
      category: 'cloud',
      author: 'Jennifer Lee',
      authorTitle: 'Cloud Solutions Architect',
      publishDate: '2024-11-28',
      readTime: '4 min read',
      views: 987,
      tags: ['Cloud FinOps', 'Cost Optimization', 'Enterprise', 'Case Study'],
      image: '/images/news/cloud-finops.jpg',
      featured: false
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="News - Zion Tech Group"
        description="Stay updated with the latest news, company updates, and industry insights from Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6"
          >
            <Newspaper className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Latest News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Stay informed about Zion Tech Group's latest innovations, company updates, 
            industry insights, and technology breakthroughs.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Search News</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Filter by Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-12"
            >
              Featured Stories
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{article.publishDate}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/news/${article.id}`}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-12"
          >
            Latest News
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">{article.publishDate}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      {article.views}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/news/${article.id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Subscribe to our newsletter for the latest news, insights, and technology updates
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Have questions about our latest news or want to learn more about our solutions?
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/services-overview"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}