import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Globe,
  Lightbulb,
  Award,
  Users
} from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 7 },
    { id: 'business', name: 'Business & Industry', icon: Building, count: 9 },
    { id: 'innovation', name: 'Innovation & Trends', icon: Lightbulb, count: 8 },
    { id: 'development', name: 'Development', icon: Code, count: 5 }
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
    'Last Quarter',
    'Last Year'
  ];

  const newsData = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Breakthrough technology enables businesses to harness the power of AI consciousness for unprecedented innovation and growth.',
      category: 'Product Launch',
      date: 'January 20, 2025',
      author: 'Zion Tech Team',
      readTime: '5 min read',
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Zion Tech Group Named Top AI Company of 2024',
      excerpt: 'Industry recognition for our innovative AI solutions and commitment to democratizing cutting-edge technology.',
      category: 'Company News',
      date: 'January 18, 2025',
      author: 'Zion Tech Team',
      readTime: '3 min read',
      image: '🏆'
    },
    {
      id: 3,
      title: 'New Partnership with Global Tech Leaders Announced',
      excerpt: 'Strategic collaboration to accelerate AI adoption and digital transformation across industries.',
      category: 'Partnerships',
      date: 'January 15, 2025',
      author: 'Zion Tech Team',
      readTime: '4 min read',
      image: '🤝'
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands to European Markets',
      excerpt: 'Growing global presence to serve European businesses with cutting-edge AI and technology solutions.',
      category: 'Company News',
      date: 'January 12, 2025',
      author: 'Zion Tech Team',
      readTime: '4 min read',
      image: '🌍'
    },
    {
      id: 5,
      title: 'Breakthrough in Quantum Computing Research',
      excerpt: 'Our research team achieves significant milestone in quantum neural network development.',
      category: 'Research',
      date: 'January 10, 2025',
      author: 'Dr. Emily Watson',
      readTime: '6 min read',
      image: '⚛️'
    },
    {
      id: 6,
      title: 'Customer Success Story: Healthcare Transformation',
      excerpt: 'How Zion Tech Group helped a major healthcare provider implement AI-powered diagnostics.',
      category: 'Customer Success',
      date: 'January 8, 2025',
      author: 'Zion Tech Team',
      readTime: '7 min read',
      image: '🏥'
    }
  ];

  const categories = [
    'All',
    'Product Launch',
    'Company News',
    'Partnerships',
    'Research',
    'Customer Success'
  ];

  const stats = [
    { label: 'Articles Published', value: '150+', icon: Newspaper },
    { label: 'Countries Reached', value: '25+', icon: Globe },
    { label: 'Industry Awards', value: '15+', icon: Award },
    { label: 'Team Members', value: '100+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Latest
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              News
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Stay updated with the latest developments, announcements, and insights from Zion Tech Group
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {newsArticles.filter(article => article.featured).map((article) => (
            <motion.div
              key={article.id}
              className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{article.image}</span>
                    <div>
                      <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {article.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="text-center">
                  <div className="text-8xl">{article.image}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className="px-6 py-3 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-white font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl">{article.image}</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full font-semibold border border-blue-500/30">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
