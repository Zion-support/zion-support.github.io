import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Clock,
  Eye,
  ExternalLink,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = [
    'All',
    'Company News',
    'Product Updates',
    'Industry Insights',
    'Awards & Recognition',
    'Partnerships',
    'Research & Development',
    'Market Trends'
  ];
  
  const sources = [
    'All Sources',
    'Company Press Releases',
    'Industry Reports',
    'Technology News',
    'Research Papers',
    'Partner Updates',
    'Customer Success Stories'
  ];
  
  const timeframes = [
    'All Time',
    'Last 24 Hours',
    'Last Week',
    'Last Month',
    'Last 3 Months',
    'Last Year'
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Platform',
      category: 'Product Updates',
      source: 'Company Press Releases',
      date: '2024-01-15',
      excerpt: 'Our latest AI platform combines cutting-edge machine learning with quantum computing capabilities...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Partnership with Global Tech Leaders Announced',
      category: 'Partnerships',
      source: 'Company Press Releases',
      date: '2024-01-10',
      excerpt: 'Strategic collaboration to advance quantum computing research and development...',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Industry Recognition: Top AI Innovation Award',
      category: 'Awards & Recognition',
      source: 'Industry Reports',
      date: '2024-01-05',
      excerpt: 'Zion Tech Group recognized for breakthrough innovations in autonomous systems...',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Latest News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Stay informed about the latest developments in AI, quantum computing, and technology innovation
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 mb-16">
        <div className="container mx-auto">
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Source Filter */}
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <select className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20">
                  {sources.map((source) => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>

              {/* Time Filter */}
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <select className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20">
                  {timeframes.map((timeframe) => (
                    <option key={timeframe} value={timeframe}>{timeframe}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl overflow-hidden hover:border-zion-cyan/30 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/90 text-white text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">{item.source}</span>
                    <button className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
