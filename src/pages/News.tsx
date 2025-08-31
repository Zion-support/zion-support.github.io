import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  Filter,
  Tag,
  TrendingUp,
  Award,
  Newspaper,
  ExternalLink,
  Share2,
  BookmarkPlus
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Company News',
    'Press Releases',
    'Industry Updates',
    'Product Launches',
    'Partnerships',
    'Awards & Recognition',
    'Research & Development'
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Revolutionary Quantum-AI Hybrid Platform',
      category: 'Product Launches',
      excerpt: 'Industry-first platform combines quantum computing capabilities with advanced AI algorithms to solve complex business problems 1000x faster.',
      content: 'Today, Zion Tech Group unveiled its groundbreaking Quantum-AI Hybrid Platform...',
      publishDate: '2024-01-15',
      author: 'Press Team',
      readTime: '3 min read',
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Innovation'],
      image: '/images/news/quantum-ai-platform.jpg',
      type: 'press-release'
    },
    {
      id: 2,
      title: 'Strategic Partnership with Microsoft Expands AI Capabilities',
      category: 'Partnerships',
      excerpt: 'New partnership will integrate Azure AI services with Zion Tech Group\'s proprietary algorithms to deliver enhanced solutions.',
      content: 'Zion Tech Group today announced a strategic partnership with Microsoft...',
      publishDate: '2024-01-12',
      author: 'Business Development Team',
      readTime: '4 min read',
      featured: true,
      tags: ['Microsoft', 'Partnership', 'Azure'],
      image: '/images/news/microsoft-partnership.jpg',
      type: 'company-news'
    },
    {
      id: 3,
      title: 'CEO Kleber Santos Named "Tech Innovator of the Year" by AI Weekly',
      category: 'Awards & Recognition',
      excerpt: 'Recognition highlights outstanding contributions to artificial intelligence and quantum computing advancement.',
      content: 'AI Weekly magazine has named Zion Tech Group CEO Kleber Santos...',
      publishDate: '2024-01-10',
      author: 'Editorial Team',
      readTime: '2 min read',
      featured: false,
      tags: ['Awards', 'Leadership', 'Recognition'],
      image: '/images/news/ceo-award.jpg',
      type: 'press-release'
    },
    {
      id: 4,
      title: 'Quantum Computing Research Lab Opens in Silicon Valley',
      category: 'Research & Development',
      excerpt: 'New 50,000 sq ft facility will house advanced quantum computers and research teams working on next-generation algorithms.',
      content: 'Zion Tech Group has officially opened its new quantum computing research laboratory...',
      publishDate: '2024-01-08',
      author: 'Research Team',
      readTime: '5 min read',
      featured: false,
      tags: ['Quantum Computing', 'Research', 'Silicon Valley'],
      image: '/images/news/research-lab.jpg',
      type: 'company-news'
    },
    {
      id: 5,
      title: 'AI Healthcare Platform Receives FDA Breakthrough Designation',
      category: 'Product Launches',
      excerpt: 'Revolutionary diagnostic AI receives FDA breakthrough device designation, accelerating path to market approval.',
      content: 'The U.S. Food and Drug Administration has granted breakthrough device designation...',
      publishDate: '2024-01-05',
      author: 'Healthcare Division',
      readTime: '4 min read',
      featured: true,
      tags: ['Healthcare', 'FDA', 'AI', 'Breakthrough'],
      image: '/images/news/fda-breakthrough.jpg',
      type: 'press-release'
    },
    {
      id: 6,
      title: '$50M Series C Funding Round Led by Venture Capital Partners',
      category: 'Company News',
      excerpt: 'Funding will accelerate quantum computing research and expand AI solution offerings globally.',
      content: 'Zion Tech Group today announced the completion of a $50 million Series C funding round...',
      publishDate: '2024-01-03',
      author: 'Finance Team',
      readTime: '3 min read',
      featured: false,
      tags: ['Funding', 'Investment', 'Growth'],
      image: '/images/news/series-c-funding.jpg',
      type: 'press-release'
    },
    {
      id: 7,
      title: 'Global Expansion: New Offices Open in London and Tokyo',
      category: 'Company News',
      excerpt: 'International expansion supports growing demand for AI and quantum computing solutions worldwide.',
      content: 'As part of its global expansion strategy, Zion Tech Group has opened new offices...',
      publishDate: '2024-01-01',
      author: 'Operations Team',
      readTime: '3 min read',
      featured: false,
      tags: ['Expansion', 'Global', 'Offices'],
      image: '/images/news/global-expansion.jpg',
      type: 'company-news'
    },
    {
      id: 8,
      title: 'Climate Tech Initiative Reduces Carbon Footprint by 40%',
      category: 'Company News',
      excerpt: 'Comprehensive sustainability program achieves significant environmental impact reduction through innovative green technologies.',
      content: 'Zion Tech Group\'s comprehensive climate technology initiative has achieved...',
      publishDate: '2023-12-28',
      author: 'Sustainability Team',
      readTime: '4 min read',
      featured: false,
      tags: ['Sustainability', 'Climate Tech', 'Environment'],
      image: '/images/news/climate-tech.jpg',
      type: 'company-news'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const pressReleases = newsArticles.filter(article => article.type === 'press-release').slice(0, 3);

  return (
    <>
      <SEO 
        title="News - Zion Tech Group"
        description="Latest news, press releases, and industry updates from Zion Tech Group. Stay informed about our innovations in AI, quantum computing, and technology."
        keywords="technology news, press releases, AI news, quantum computing updates, company announcements, tech innovation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest News
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Stay updated with the latest developments, innovations, and milestones from Zion Tech Group.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured News */}
          {featuredNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-cyan-400" />
                Featured News
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.slice(0, 2).map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative">
                      <div className="text-6xl opacity-50">📰</div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-3"></div>
                          <div>
                            <div className="text-sm font-semibold text-white">{article.author}</div>
                            <div className="text-xs text-gray-400">{article.type}</div>
                          </div>
                        </div>
                        <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { number: '500+', label: 'News Articles', icon: Newspaper },
              { number: '50+', label: 'Press Releases', icon: ExternalLink },
              { number: '25+', label: 'Awards Received', icon: Award },
              { number: '100%', label: 'Transparency', icon: TrendingUp }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Latest News Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl opacity-50">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-400">{article.author}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-white/10 rounded transition-colors">
                          <BookmarkPlus className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                        </button>
                        <button className="p-1 hover:bg-white/10 rounded transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Press Releases Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <ExternalLink className="w-8 h-8 mr-3 text-cyan-400" />
              Recent Press Releases
            </h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          Press Release
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(release.publishDate).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {release.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button className="px-6 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center">
                        Read Full Release
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, press releases, and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* No Results */}
          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No news found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or browse all news.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
