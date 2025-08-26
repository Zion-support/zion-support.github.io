import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';

const News: React.FC = () => {
  const breakingNews = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in Quantum AI Integration',
      excerpt: 'Revolutionary new platform combines quantum computing with artificial intelligence to solve previously intractable problems.',
      author: 'Press Team',
      date: '2025-01-20',
      time: '2 hours ago',
      category: 'Company News',
      priority: 'breaking',
      image: '/images/news/quantum-ai-breakthrough.jpg'
    },
    {
      id: 2,
      title: 'Major Partnership with Fortune 500 Company Announced',
      excerpt: 'Strategic collaboration to deploy AI-powered solutions across enterprise operations.',
      author: 'Business Development',
      date: '2025-01-19',
      time: '1 day ago',
      category: 'Partnerships',
      priority: 'high',
      image: '/images/news/partnership-announcement.jpg'
    }
  ];

  const latestNews = [
    {
      id: 3,
      title: 'New AI Research Lab Opens in Silicon Valley',
      excerpt: 'State-of-the-art facility to focus on next-generation AI algorithms and autonomous systems.',
      author: 'Research Team',
      date: '2025-01-18',
      time: '2 days ago',
      category: 'Research & Development',
      image: '/images/news/research-lab-opening.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Division Receives Industry Recognition',
      excerpt: 'Award-winning security solutions recognized for innovation and effectiveness.',
      author: 'Security Team',
      date: '2025-01-17',
      time: '3 days ago',
      category: 'Awards & Recognition',
      image: '/images/news/cybersecurity-award.jpg'
    },
    {
      id: 5,
      title: 'Expansion into European Markets Announced',
      excerpt: 'Strategic move to serve growing demand for AI solutions in European markets.',
      author: 'International Team',
      date: '2025-01-16',
      time: '4 days ago',
      category: 'Business Expansion',
      image: '/images/news/european-expansion.jpg'
    },
    {
      id: 6,
      title: 'New AI Ethics Advisory Board Formed',
      excerpt: 'Leading experts to guide responsible AI development and deployment.',
      author: 'Ethics Team',
      date: '2025-01-15',
      time: '5 days ago',
      category: 'AI Ethics',
      image: '/images/news/ethics-advisory-board.jpg'
    }
  ];

  const categories = ['All News', 'Company News', 'Partnerships', 'Research & Development', 'Awards & Recognition', 'Business Expansion', 'AI Ethics'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <NewspaperIcon className="w-12 h-12 text-purple-400 mr-3" />
            <span className="text-purple-400 font-semibold text-lg">Latest Updates</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Zion Tech Group News
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Stay informed about our latest developments, partnerships, innovations, 
            and the impact we're making in the world of technology.
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Breaking News */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Breaking News
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {breakingNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl text-purple-400/30">📰</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      news.priority === 'breaking' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {news.priority === 'breaking' ? 'BREAKING' : 'HIGH PRIORITY'}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {news.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <UserIcon className="h-4 w-4" />
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <ClockIcon className="h-4 w-4" />
                      <span>{news.time}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Read Full Story</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Latest News
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-4xl text-blue-400/30">📰</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {news.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <UserIcon className="h-4 w-4" />
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <ClockIcon className="h-4 w-4" />
                      <span>{news.time}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Read Full Story</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default News;