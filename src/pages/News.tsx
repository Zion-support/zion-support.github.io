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
  Award,
  Rocket,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'company', name: 'Company Updates', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'ai', name: 'AI & ML', count: 5 },
    { id: 'industry', name: 'Industry Insights', count: 5 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      excerpt: 'Our latest innovation combines advanced machine learning with quantum-resistant encryption to provide unprecedented protection against emerging cyber threats.',
      category: 'company',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['AI', 'Cybersecurity', 'Innovation'],
      image: '🔒'
    },
    {
      id: 2,
      title: 'The Future of Quantum Computing in Enterprise Applications',
      excerpt: 'Exploring how quantum computing is transforming business operations and what organizations need to know to prepare for the quantum revolution.',
      category: 'technology',
      author: 'Dr. Michael Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      featured: false,
      tags: ['Quantum Computing', 'Enterprise', 'Future Tech'],
      image: '⚛️'
    },
    {
      id: 3,
      title: 'AI Ethics and Responsible Technology Development',
      excerpt: 'How Zion Tech Group is leading the way in developing AI solutions that prioritize ethics, transparency, and human well-being.',
      category: 'ai',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: false,
      tags: ['AI Ethics', 'Responsible AI', 'Technology'],
      image: '🤖'
    },
    {
      id: 4,
      title: 'Digital Transformation Success Stories from Fortune 500 Companies',
      excerpt: 'Real-world examples of how leading organizations are leveraging our solutions to achieve remarkable digital transformation results.',
      category: 'industry',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      featured: false,
      tags: ['Digital Transformation', 'Case Studies', 'Success Stories'],
      image: '📈'
    },
    {
      id: 5,
      title: 'New Partnership with Microsoft Azure for Enhanced Cloud Solutions',
      excerpt: 'Expanding our cloud capabilities through strategic partnership to deliver even more powerful and scalable solutions to our clients.',
      category: 'company',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '4 min read',
      featured: false,
      tags: ['Partnerships', 'Cloud Computing', 'Microsoft Azure'],
      image: '☁️'
    },
    {
      id: 6,
      title: 'Machine Learning in Healthcare: Revolutionizing Patient Care',
      excerpt: 'How AI and machine learning are transforming healthcare delivery, from diagnosis to treatment planning and patient monitoring.',
      category: 'ai',
      author: 'Dr. James Wilson',
      date: '2024-01-03',
      readTime: '9 min read',
      featured: false,
      tags: ['Healthcare', 'Machine Learning', 'AI Applications'],
      image: '🏥'
    },
    {
      id: 7,
      title: 'Cybersecurity Trends for 2024: What Organizations Need to Know',
      excerpt: 'Comprehensive analysis of emerging cybersecurity threats and the innovative solutions needed to protect against them.',
      category: 'technology',
      author: 'Alex Martinez',
      date: '2024-01-01',
      readTime: '6 min read',
      featured: false,
      tags: ['Cybersecurity', 'Trends', '2024'],
      image: '🛡️'
    },
    {
      id: 8,
      title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
      excerpt: 'Industry recognition for our innovative AI solutions and commitment to pushing the boundaries of what's possible with artificial intelligence.',
      category: 'company',
      author: 'Marketing Team',
      date: '2023-12-28',
      readTime: '3 min read',
      featured: false,
      tags: ['Awards', 'Recognition', 'AI Leadership'],
      image: '🏆'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'company': return Award;
      case 'technology': return Rocket;
      case 'ai': return Brain;
      case 'industry': return TrendingUp;
      default: return Newspaper;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'company': return 'from-blue-500 to-cyan-500';
      case 'technology': return 'from-purple-500 to-pink-500';
      case 'ai': return 'from-green-500 to-emerald-500';
      case 'industry': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                News & Updates
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Stay informed about the latest developments in technology, AI, and digital transformation. 
              Discover insights, company updates, and industry trends from Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news and articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredNews.filter(article => article.featured).length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
            </motion.div>

            {filteredNews.filter(article => article.featured).map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-6xl mb-4">{article.image}</div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">
                      Read Full Article
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest News & Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of articles, insights, and company updates 
              covering the latest in technology and innovation.
            </p>
          </motion.div>

          {filteredNews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.filter(article => !article.featured).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{article.image}</div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-3 h-3 bg-gradient-to-r ${getCategoryColor(article.category)} rounded-full`}></div>
                    <span className="text-sm text-gray-400 capitalize">{article.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">{article.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group w-full justify-center">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest news, insights, and updates 
              directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
