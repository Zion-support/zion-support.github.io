import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ExternalLink,
  TrendingUp,
  Award,
  Users,
  Globe,
  Lightbulb
} from 'lucide-react';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 156 },
    { id: 'company', name: 'Company Updates', count: 45 },
    { id: 'product', name: 'Product Launches', count: 32 },
    { id: 'partnership', name: 'Partnerships', count: 28 },
    { id: 'awards', name: 'Awards & Recognition', count: 18 },
    { id: 'industry', name: 'Industry Insights', count: 33 }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' },
    { id: '2021', name: '2021' }
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Named Leader in AI Innovation by Gartner',
      excerpt: 'Company recognized for breakthrough AI solutions and market leadership in enterprise technology.',
      category: 'awards',
      date: '2024-12-15',
      author: 'Sarah Chen',
      readTime: '3 min read',
      featured: true,
      tags: ['AI Innovation', 'Gartner', 'Leadership', 'Enterprise'],
      image: '/images/news/gartner-award.jpg',
      external: false
    },
    {
      id: 2,
      title: 'New AI-Powered Cybersecurity Platform Launches',
      excerpt: 'Revolutionary platform combines machine learning with advanced threat detection for enterprise security.',
      category: 'product',
      date: '2024-12-10',
      author: 'Marcus Rodriguez',
      readTime: '5 min read',
      featured: true,
      tags: ['Cybersecurity', 'AI Platform', 'Machine Learning', 'Launch'],
      image: '/images/news/cybersecurity-platform.jpg',
      external: false
    },
    {
      id: 3,
      title: 'Strategic Partnership with Microsoft Azure Announced',
      excerpt: 'Collaboration to bring AI solutions to Microsoft\'s cloud platform, expanding global reach.',
      category: 'partnership',
      date: '2024-12-08',
      author: 'David Kim',
      readTime: '4 min read',
      featured: true,
      tags: ['Microsoft', 'Azure', 'Partnership', 'Cloud'],
      image: '/images/news/microsoft-partnership.jpg',
      external: false
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: 'Q4 2024 Financial Results Exceed Expectations',
      excerpt: 'Strong performance driven by AI adoption and expansion into new markets.',
      category: 'company',
      date: '2024-12-05',
      author: 'Finance Team',
      readTime: '2 min read',
      featured: false,
      tags: ['Financial Results', 'Q4 2024', 'Growth'],
      image: '/images/news/q4-results.jpg',
      external: false
    },
    {
      id: 5,
      title: 'New Research Paper on Ethical AI Published',
      excerpt: 'Breakthrough research on ensuring AI systems align with human values and ethics.',
      category: 'industry',
      date: '2024-12-03',
      author: 'Dr. Emily Watson',
      readTime: '6 min read',
      featured: false,
      tags: ['Research', 'Ethical AI', 'AI Ethics', 'Publication'],
      image: '/images/news/ethical-ai-research.jpg',
      external: false
    },
    {
      id: 6,
      title: 'Expansion into Southeast Asian Markets',
      excerpt: 'Opening new offices in Singapore, Indonesia, and Vietnam to serve growing demand.',
      category: 'company',
      date: '2024-11-30',
      author: 'Global Expansion Team',
      readTime: '3 min read',
      featured: false,
      tags: ['Expansion', 'Southeast Asia', 'Global Growth'],
      image: '/images/news/sea-expansion.jpg',
      external: false
    },
    {
      id: 7,
      title: 'AI for Good Initiative Launched',
      excerpt: 'New program to apply AI technology to solve global challenges and social issues.',
      category: 'company',
      date: '2024-11-28',
      author: 'Corporate Social Responsibility',
      readTime: '4 min read',
      featured: false,
      tags: ['AI for Good', 'Social Impact', 'Sustainability'],
      image: '/images/news/ai-for-good.jpg',
      external: false
    },
    {
      id: 8,
      title: 'Industry Report: AI Adoption in Healthcare',
      excerpt: 'Comprehensive analysis of how AI is transforming healthcare delivery and patient outcomes.',
      category: 'industry',
      date: '2024-11-25',
      author: 'Research Team',
      readTime: '7 min read',
      featured: false,
      tags: ['Healthcare', 'AI Adoption', 'Industry Report'],
      image: '/images/news/healthcare-ai.jpg',
      external: false
    },
    {
      id: 9,
      title: 'New Patent Granted for Advanced NLP Technology',
      excerpt: 'Innovative natural language processing breakthrough recognized by US Patent Office.',
      category: 'product',
      date: '2024-11-22',
      author: 'R&D Team',
      readTime: '3 min read',
      featured: false,
      tags: ['Patent', 'NLP', 'Innovation', 'Technology'],
      image: '/images/news/nlp-patent.jpg',
      external: false
    }
  ];

  const pressReleases = [
    {
      id: 10,
      title: 'Zion Tech Group Announces Record Q3 2024 Results',
      date: '2024-11-15',
      category: 'company',
      external: true,
      url: 'https://investors.ziontechgroup.com/press-releases/q3-2024-results'
    },
    {
      id: 11,
      title: 'New AI Ethics Advisory Board Formed',
      date: '2024-11-10',
      category: 'company',
      external: true,
      url: 'https://investors.ziontechgroup.com/press-releases/ai-ethics-board'
    },
    {
      id: 12,
      title: 'Partnership with European Union AI Initiative',
      date: '2024-11-05',
      category: 'partnership',
      external: true,
      url: 'https://investors.ziontechgroup.com/press-releases/eu-ai-partnership'
    }
  ];

  const allNews = [...featuredNews, ...recentNews];

  const filteredNews = allNews.filter(news => {
    const matchesSearch = searchQuery === '' || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    
    const matchesYear = selectedYear === 'all' || news.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'company': return Users;
      case 'product': return Lightbulb;
      case 'partnership': return Globe;
      case 'awards': return Award;
      case 'industry': return TrendingUp;
      default: return Tag;
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'company': return 'bg-blue-500/20 text-blue-400';
      case 'product': return 'bg-green-500/20 text-green-400';
      case 'partnership': return 'bg-purple-500/20 text-purple-400';
      case 'awards': return 'bg-yellow-500/20 text-yellow-400';
      case 'industry': return 'bg-cyan-500/20 text-cyan-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                News & Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay informed about Zion Tech Group's latest developments, industry insights, 
              and the future of AI technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news, updates, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Top headlines and breaking news from Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-6xl">📰</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${getCategoryColor(news.category)}`}>
                      {getCategoryName(news.category)}
                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      {news.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {formatDate(news.date)}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Recent News</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Latest updates and announcements from our team and industry.
            </p>
          </motion.div>

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="text-4xl">📰</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getCategoryColor(news.category)}`}>
                        {getCategoryName(news.category)}
                      </span>
                      <span className="text-gray-400 text-xs">{news.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <User className="w-3 h-3" />
                        {news.author}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {formatDate(news.date)}
                      </div>
                    </div>
                    
                    <button className="w-full bg-slate-700/50 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-600 transition-all duration-300 flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No news found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedYear('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Press Releases</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Official announcements and media resources for journalists and investors.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {release.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(release.date)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(release.category)}`}>
                          {getCategoryName(release.category)}
                        </span>
                      </div>
                    </div>
                    <a
                      href={release.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-all duration-300 flex items-center gap-2"
                    >
                      Read Release
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest news, product updates, and industry insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
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
