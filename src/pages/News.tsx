import React, { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, ExternalLink, Search } from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All News');

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Healthcare Analytics Platform',
      excerpt: 'Our latest healthcare analytics solution leverages advanced AI to provide real-time insights for improved patient care and operational efficiency.',
      category: 'Product Launch',
      author: 'Zion Tech Team',
      date: '2024-12-15',
      readTime: '3 min read',
      image: '/images/news/healthcare-analytics.jpg',
      href: '/news/ai-healthcare-analytics-launch'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Achieves 1000+ Qubit Processing',
      excerpt: 'Our quantum computing research team has achieved a major milestone in quantum processing power, opening new possibilities for complex computations.',
      category: 'Research',
      author: 'Dr. Sarah Chen',
      date: '2024-12-10',
      readTime: '5 min read',
      image: '/images/news/quantum-breakthrough.jpg',
      href: '/news/quantum-computing-breakthrough'
    },
    {
      id: 3,
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards 2024',
      excerpt: 'We are honored to be recognized as a leading AI company for our innovative solutions and contributions to the technology industry.',
      category: 'Awards',
      author: 'Zion Tech Team',
      date: '2024-12-05',
      readTime: '2 min read',
      image: '/images/news/award-recognition.jpg',
      href: '/news/top-ai-company-award'
    },
    {
      id: 4,
      title: 'New Partnership with Global Healthcare Consortium Announced',
      excerpt: 'Zion Tech Group joins forces with leading healthcare organizations to advance AI-powered medical technology solutions worldwide.',
      category: 'Partnerships',
      author: 'Michael Rodriguez',
      date: '2024-11-30',
      readTime: '4 min read',
      image: '/images/news/healthcare-partnership.jpg',
      href: '/news/healthcare-consortium-partnership'
    },
    {
      id: 5,
      title: 'Edge Computing Platform Achieves 99.9% Uptime in Production',
      excerpt: 'Our edge computing solution demonstrates exceptional reliability and performance in real-world enterprise environments.',
      category: 'Technology',
      author: 'Dr. Emily Watson',
      date: '2024-11-25',
      readTime: '3 min read',
      image: '/images/news/edge-computing.jpg',
      href: '/news/edge-computing-uptime-milestone'
    },
    {
      id: 6,
      title: 'Zion Tech Group Expands to European Markets',
      excerpt: 'Strategic expansion into European markets brings our AI solutions to new customers and strengthens our global presence.',
      category: 'Business',
      author: 'Zion Tech Team',
      date: '2024-11-20',
      readTime: '3 min read',
      image: '/images/news/european-expansion.jpg',
      href: '/news/european-market-expansion'
    }
  ];

  const categories = [
    'All News',
    'Product Launch',
    'Research',
    'Awards',
    'Partnerships',
    'Technology',
    'Business'
  ];

  const featuredArticle = newsArticles[0];

  const filteredArticles = useMemo(() => {
    let filtered = newsArticles;
    
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All News') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by the filteredArticles useMemo
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All News');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="News - Zion Tech Group"
        description="Stay updated with the latest news, product launches, research breakthroughs, and company updates from Zion Tech Group."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about our latest innovations, product launches, 
              research breakthroughs, and company milestones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <form onSubmit={handleSearch} className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Article
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our latest breakthrough and most important announcement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(featuredArticle.date).toLocaleDateString()}
                  </span>
                </div>
                <a
                  href={featuredArticle.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              <div className="relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Tag className="w-8 h-8" />
                    </div>
                    <p className="text-sm">News Image</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest News ({filteredArticles.length})
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest developments and industry insights
            </p>
          </motion.div>

          {filteredArticles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No news articles found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>

                  <a
                    href={article.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest news, 
              product updates, and industry insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our news or want to learn more about our solutions? 
              Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/services-overview"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default News;
