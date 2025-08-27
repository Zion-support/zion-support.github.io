import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter, 
  Clock,
  TrendingUp,
  Star,
  Eye,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react';

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', count: 0 },
    { id: 'ai', name: 'AI & Technology', count: 0 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 0 },
    { id: 'security', name: 'Security & Compliance', count: 0 },
    { id: 'quantum', name: 'Quantum Computing', count: 0 },
    { id: 'company', name: 'Company Updates', count: 0 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Business Intelligence Platform',
      excerpt: 'Our new AI-powered BI solution transforms how enterprises analyze data and make decisions, featuring advanced machine learning algorithms and real-time insights.',
      category: 'ai',
      author: 'Sarah Johnson',
      date: '2024-12-01',
      readTime: '5 min read',
      featured: true,
      tags: ['AI', 'Business Intelligence', 'Launch', 'Enterprise']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Achieves 1000+ Qubit Milestone',
      excerpt: 'Our quantum research team has successfully demonstrated a 1000+ qubit quantum processor, marking a significant advancement in quantum computing capabilities.',
      category: 'quantum',
      author: 'Dr. Michael Chen',
      date: '2024-11-28',
      readTime: '8 min read',
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Breakthrough', 'Innovation']
    },
    {
      id: 3,
      title: 'New Cloud Security Framework Addresses Zero-Day Vulnerabilities',
      excerpt: 'Zion Tech introduces an advanced cloud security framework that proactively identifies and mitigates zero-day vulnerabilities before they can be exploited.',
      category: 'security',
      author: 'Alex Rodriguez',
      date: '2024-11-25',
      readTime: '6 min read',
      featured: false,
      tags: ['Security', 'Cloud', 'Zero-Day', 'Framework']
    },
    {
      id: 4,
      title: 'Partnership with Microsoft Azure Expands Cloud Capabilities',
      excerpt: 'Strategic partnership announcement with Microsoft Azure to deliver enhanced cloud solutions and AI services to enterprise customers worldwide.',
      category: 'company',
      author: 'Jennifer Lee',
      date: '2024-11-22',
      readTime: '4 min read',
      featured: false,
      tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud']
    },
    {
      id: 5,
      title: 'AI Ethics Guidelines: Setting Industry Standards for Responsible AI',
      excerpt: 'Zion Tech publishes comprehensive AI ethics guidelines, establishing new industry standards for responsible artificial intelligence development and deployment.',
      category: 'ai',
      author: 'Dr. Emily Watson',
      date: '2024-11-20',
      readTime: '7 min read',
      featured: false,
      tags: ['AI Ethics', 'Guidelines', 'Responsible AI', 'Standards']
    },
    {
      id: 6,
      title: 'Edge Computing Solutions for IoT Deployments',
      excerpt: 'New edge computing platform enables real-time processing for IoT devices, reducing latency and improving performance in industrial applications.',
      category: 'cloud',
      author: 'David Kim',
      date: '2024-11-18',
      readTime: '5 min read',
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Industrial']
    }
  ];

  // Calculate category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = newsArticles.length;
    } else {
      category.count = newsArticles.filter(article => article.category === category.id).length;
    }
  });

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">
                <Newspaper className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about the latest developments in AI, quantum computing, cloud technology, and company updates from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {filteredArticles.filter(article => article.featured).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.filter(article => article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {article.category.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <a href={`/news/${article.id}`}>{article.title}</a>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'All News' : `${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          <div className="space-y-6">
            {filteredArticles.filter(article => !article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {article.category.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      <a href={`/news/${article.id}`}>{article.title}</a>
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Bookmark className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Share2 className="h-4 w-4" />
                        </button>
                        <a
                          href={`/news/${article.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <Newspaper className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
