import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, Calendar, User, Tag, Search, Filter, 
  ArrowRight, ExternalLink, Globe, Award, Rocket,
  Brain, Shield, Cloud, TrendingUp, Star, Zap, Download, Building
} from 'lucide-react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const newsCategories = [
    { id: 'all', name: 'All News', icon: Newspaper, color: 'from-blue-500 to-purple-500' },
    { id: 'company', name: 'Company News', icon: Building, color: 'from-green-500 to-emerald-500' },
    { id: 'product', name: 'Product Updates', icon: Rocket, color: 'from-yellow-500 to-orange-500' },
    { id: 'technology', name: 'Technology', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, color: 'from-cyan-500 to-blue-500' },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, color: 'from-red-500 to-orange-500' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Secures $50M Series B Funding for AI Expansion',
      excerpt: 'Leading AI technology company raises significant funding to accelerate development of next-generation AI solutions and expand global operations.',
      category: 'company',
      date: '2024-12-15',
      author: 'Sarah Chen',
      readTime: '3 min read',
      image: '/news/funding-announcement.jpg',
      featured: true,
      tags: ['Funding', 'AI', 'Expansion', 'Series B']
    },
    {
      id: 2,
      title: 'New Quantum Computing Platform Launches with Breakthrough Performance',
      excerpt: 'Revolutionary quantum computing solution delivers 10x performance improvement over existing platforms, opening new possibilities for scientific research.',
      category: 'product',
      date: '2024-12-10',
      author: 'Dr. Emily Watson',
      readTime: '5 min read',
      image: '/news/quantum-platform.jpg',
      featured: true,
      tags: ['Quantum Computing', 'Product Launch', 'Performance', 'Innovation']
    },
    {
      id: 3,
      title: 'Zion Tech Group Named Top AI Company by TechCrunch',
      excerpt: 'Recognition highlights our commitment to innovation and excellence in artificial intelligence and machine learning solutions.',
      category: 'awards',
      date: '2024-12-08',
      author: 'Marketing Team',
      readTime: '2 min read',
      image: '/news/techcrunch-award.jpg',
      featured: false,
      tags: ['Award', 'Recognition', 'AI', 'TechCrunch']
    },
    {
      id: 4,
      title: 'Partnership with Microsoft Azure Expands Cloud AI Capabilities',
      excerpt: 'Strategic collaboration brings enterprise-grade AI solutions to Azure customers, enabling seamless integration and deployment.',
      category: 'company',
      date: '2024-12-05',
      author: 'Michael Rodriguez',
      readTime: '4 min read',
      image: '/news/microsoft-partnership.jpg',
      featured: false,
      tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud AI']
    },
    {
      id: 5,
      title: 'AI Ethics Framework Sets New Industry Standards',
      excerpt: 'Comprehensive framework for responsible AI development receives industry recognition and adoption by leading organizations.',
      category: 'technology',
      date: '2024-12-01',
      author: 'Dr. Emily Watson',
      readTime: '6 min read',
      image: '/news/ai-ethics.jpg',
      featured: false,
      tags: ['AI Ethics', 'Responsible AI', 'Industry Standards', 'Framework']
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions Achieve SOC 2 Type II Certification',
      excerpt: 'Security platform meets highest industry standards, providing enterprise customers with confidence in data protection.',
      category: 'product',
      date: '2024-11-28',
      author: 'David Kim',
      readTime: '3 min read',
      image: '/news/soc2-certification.jpg',
      featured: false,
      tags: ['Cybersecurity', 'SOC 2', 'Certification', 'Security']
    },
    {
      id: 7,
      title: 'Global Expansion: New Offices in London and Singapore',
      excerpt: 'International growth continues with strategic office openings to better serve European and Asian markets.',
      category: 'company',
      date: '2024-11-25',
      author: 'Sarah Chen',
      readTime: '3 min read',
      image: '/news/global-expansion.jpg',
      featured: false,
      tags: ['Expansion', 'International', 'London', 'Singapore']
    },
    {
      id: 8,
      title: 'Machine Learning Breakthrough Improves Cancer Detection by 40%',
      excerpt: 'Research collaboration with leading medical institutions demonstrates significant improvements in early cancer detection accuracy.',
      category: 'technology',
      date: '2024-11-20',
      author: 'Dr. Emily Watson',
      readTime: '7 min read',
      image: '/news/cancer-detection.jpg',
      featured: false,
      tags: ['Machine Learning', 'Healthcare', 'Cancer Detection', 'Research']
    },
    {
      id: 9,
      title: 'Customer Success Story: Fortune 500 Company Saves $10M with AI',
      excerpt: 'Case study reveals how AI-powered optimization solutions delivered significant cost savings and operational improvements.',
      category: 'industry',
      date: '2024-11-15',
      author: 'Customer Success Team',
      readTime: '4 min read',
      image: '/news/customer-success.jpg',
      featured: false,
      tags: ['Customer Success', 'Case Study', 'Cost Savings', 'AI Optimization']
    },
    {
      id: 10,
      title: 'New Research Paper on Quantum Machine Learning Published',
      excerpt: 'Groundbreaking research explores the intersection of quantum computing and machine learning, published in Nature.',
      category: 'technology',
      date: '2024-11-10',
      author: 'Dr. Emily Watson',
      readTime: '8 min read',
      image: '/news/quantum-ml-paper.jpg',
      featured: false,
      tags: ['Quantum Computing', 'Machine Learning', 'Research', 'Nature']
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">News</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest company announcements, product updates, industry insights, and technological breakthroughs
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Newspaper className="w-5 h-5" />
              <span>Company Updates</span>
              <span>•</span>
              <Globe className="w-5 h-5" />
              <span>Industry News</span>
              <span>•</span>
              <Rocket className="w-5 h-5" />
              <span>Innovation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Featured News</h2>
              <p className="text-gray-400">Top stories and important announcements</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Newspaper className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-400">Featured Article</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                        {newsCategories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Latest News</h2>
            <p className="text-gray-400">Recent updates and industry insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Newspaper className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">News Article</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      {newsCategories.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
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
              <Newspaper className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No news found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, product updates, and industry insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Press Inquiries
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Journalists and media professionals can contact our press team for interviews, quotes, and additional information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Contact Press Team
              </a>
              <a
                href="/press-kit"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Press Kit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
