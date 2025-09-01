import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'cloud', name: 'Cloud Computing', count: 5 },
    { id: 'quantum', name: 'Quantum Computing', count: 3 },
    { id: 'company', name: 'Company News', count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      excerpt: 'Our new AI-driven security platform uses machine learning to detect and prevent cyber threats in real-time, providing enterprise-grade protection for businesses of all sizes.',
      category: 'ai',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['AI', 'Cybersecurity', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Achieves 99.9% Qubit Stability',
      excerpt: 'Our research team has achieved a major milestone in quantum computing, reaching 99.9% qubit stability - a significant step toward practical quantum applications.',
      category: 'quantum',
      author: 'Dr. Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Technology']
    },
    {
      id: 3,
      title: 'Cloud Migration Success: Fortune 500 Company Reduces Costs by 40%',
      excerpt: 'Learn how our cloud migration services helped a major corporation reduce infrastructure costs by 40% while improving performance and scalability.',
      category: 'cloud',
      author: 'Jennifer Martinez',
      date: '2024-01-10',
      readTime: '4 min read',
      featured: false,
      tags: ['Cloud Computing', 'Migration', 'Cost Optimization']
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands Global Operations with New European Office',
      excerpt: 'We\'re excited to announce the opening of our new European headquarters in London, expanding our global presence and bringing our innovative solutions closer to European clients.',
      category: 'company',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '3 min read',
      featured: false,
      tags: ['Company News', 'Expansion', 'Global Operations']
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest developments in AI, cybersecurity, cloud computing, 
              and quantum technology from Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid gap-6">
            {filteredNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-48 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Tag className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs text-gray-400">Article</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                        <span>•</span>
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}