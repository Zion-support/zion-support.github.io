<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, ExternalLink, Search } from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All News');
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Star, 
  ArrowRight,
  Search,
  Filter,
  ExternalLink,
  Play,
  BookOpen,
  Award,
  TrendingUp,
  Globe,
  Building,
  Brain,
  Shield,
  Zap,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Heart,
  Leaf,
  Sun,
  Moon,
  Star as StarIcon,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from 'lucide-react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Transformation',
    'IoT & Edge Computing',
    'Blockchain',
    'Quantum Computing',
    'Healthcare Technology',
    'Financial Technology',
    'Sustainability',
    'Emerging Technologies'
  ];
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae

  const newsArticles = [
    {
      id: 1,
<<<<<<< HEAD
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
=======
      title: 'AI Revolution: How Zion Tech Group is Leading the Future of Technology',
      subtitle: 'Exploring the latest breakthroughs in artificial intelligence and their impact on business transformation',
      category: 'AI & Machine Learning',
      date: '2027-01-15',
      author: 'Dr. Sarah Chen',
      readTime: '8 min read',
      views: 15420,
      featured: true,
      description: 'Discover how Zion Tech Group is pioneering AI solutions that are reshaping industries and creating new opportunities for businesses worldwide.',
      content: 'Artificial Intelligence has evolved from a futuristic concept to a practical business tool that\'s transforming every industry. At Zion Tech Group, we\'ve been at the forefront of this revolution, developing AI solutions that deliver real business value...',
      image: '/images/news/ai-revolution-2027.jpg',
      tags: ['AI', 'Machine Learning', 'Innovation', 'Business Transformation'],
      url: '/news/ai-revolution-2027'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: New Security Paradigms',
      subtitle: 'Understanding the implications of quantum computing on cybersecurity and data protection',
      category: 'Quantum Computing',
      date: '2027-01-12',
      author: 'Michael Rodriguez',
      readTime: '12 min read',
      views: 8920,
      featured: false,
      description: 'Quantum computing is revolutionizing cybersecurity by introducing new encryption methods and threat detection capabilities.',
      content: 'The advent of quantum computing has brought both opportunities and challenges to the cybersecurity landscape. While quantum computers can potentially break current encryption standards...',
      image: '/images/news/quantum-computing-security.jpg',
      tags: ['Quantum Computing', 'Cybersecurity', 'Encryption', 'Technology'],
      url: '/news/quantum-computing-security-2027'
    },
    {
      id: 3,
      title: 'Edge Computing: The Future of IoT and Real-Time Analytics',
      subtitle: 'How edge computing is enabling faster, more efficient IoT applications',
      category: 'IoT & Edge Computing',
      date: '2027-01-10',
      author: 'Emily Watson',
      readTime: '6 min read',
      views: 6750,
      featured: false,
      description: 'Edge computing is transforming IoT applications by bringing processing power closer to data sources, enabling real-time analytics and faster response times.',
      content: 'The Internet of Things (IoT) has generated massive amounts of data, but traditional cloud computing approaches often struggle with latency and bandwidth constraints...',
      image: '/images/news/edge-computing-iot.jpg',
      tags: ['Edge Computing', 'IoT', 'Real-time Analytics', 'Technology'],
      url: '/news/edge-computing-iot-2027'
    },
    {
      id: 4,
      title: 'Blockchain in Supply Chain: Transparency and Trust',
      subtitle: 'Revolutionizing supply chain management with blockchain technology',
      category: 'Blockchain',
      date: '2027-01-08',
      author: 'David Kim',
      readTime: '10 min read',
      views: 5430,
      featured: false,
      description: 'Blockchain technology is creating unprecedented transparency and trust in global supply chains, reducing fraud and improving efficiency.',
      content: 'Supply chain management has long been plagued by issues of transparency, traceability, and trust. Traditional systems often lack visibility into the movement of goods...',
      image: '/images/news/blockchain-supply-chain.jpg',
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Trust'],
      url: '/news/blockchain-supply-chain-2027'
    },
    {
      id: 5,
      title: 'Cybersecurity Trends 2027: AI-Powered Threat Detection',
      subtitle: 'The latest developments in AI-driven cybersecurity solutions',
      category: 'Cybersecurity',
      date: '2027-01-05',
      author: 'Lisa Park',
      readTime: '9 min read',
      views: 7890,
      featured: true,
      description: 'AI-powered cybersecurity solutions are becoming essential in protecting organizations from increasingly sophisticated cyber threats.',
      content: 'As cyber threats become more sophisticated and frequent, traditional security approaches are no longer sufficient. Artificial Intelligence is emerging as a game-changer...',
      image: '/images/news/ai-cybersecurity-2027.jpg',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security'],
      url: '/news/ai-cybersecurity-2027'
    },
    {
      id: 6,
      title: 'Cloud-Native Development: The New Standard',
      subtitle: 'How cloud-native approaches are transforming software development',
      category: 'Cloud Computing',
      date: '2027-01-03',
      author: 'Alex Johnson',
      readTime: '7 min read',
      views: 4560,
      featured: false,
      description: 'Cloud-native development is setting new standards for scalability, reliability, and deployment efficiency in modern software applications.',
      content: 'The shift toward cloud-native development represents a fundamental change in how we build, deploy, and maintain software applications...',
      image: '/images/news/cloud-native-development.jpg',
      tags: ['Cloud Computing', 'Software Development', 'DevOps', 'Technology'],
      url: '/news/cloud-native-development-2027'
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'views':
        return b.views - a.views;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'readTime':
        return parseInt(a.readTime.split(' ')[0]) - parseInt(b.readTime.split(' ')[0]);
      default:
        return 0;
    }
  });

  const featuredArticles = newsArticles.filter(article => article.featured);

  const NewsCard = ({ article }: { article: any }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
              {article.category}
            </span>
            {article.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(article.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {article.views.toLocaleString()}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
        <p className="text-gray-300 text-sm mb-3">{article.subtitle}</p>
        <p className="text-gray-400 text-sm mb-4">{article.description}</p>
        
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2 text-sm">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag: string, index: number) => (
              <span key={index} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="text-sm text-gray-400">
            {new Date(article.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
          
          <a
            href={article.url}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 text-sm"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </motion.div>
    );
  };

  const FeaturedNewsCard = ({ article }: { article: any }) => {
    return (
      <div
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full">
              Featured
            </span>
            <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
              {article.category}
            </span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{article.title}</h3>
        <p className="text-gray-300 mb-4">{article.subtitle}</p>
        <p className="text-gray-400 text-sm mb-6">{article.description}</p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(article.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {article.views.toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            {new Date(article.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          
          <a
            href={article.url}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO
        title="News | Zion Tech Group"
        description="Stay updated with the latest technology news, insights, and developments from Zion Tech Group. Discover trends in AI, cybersecurity, cloud computing, and emerging technologies."
        keywords="technology news, AI news, cybersecurity news, cloud computing news, Zion Tech Group news"
        canonical="https://ziontechgroup.com/news"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology News & Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay informed with the latest developments in technology, AI, cybersecurity, and emerging innovations from our expert team.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Sort By */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="views">Sort by Views</option>
                    <option value="title">Sort by Title</option>
                    <option value="readTime">Sort by Read Time</option>
                  </select>
                </div>
                
                {/* Results Count */}
                <div className="flex items-center justify-center">
                  <span className="text-gray-300">
                    {filteredArticles.length} of {newsArticles.length} articles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredArticles.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Featured Articles
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <FeaturedNewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All News Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Latest News
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest technology insights, news, and updates directly in your inbox.
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
<<<<<<< HEAD
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/services-overview"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Explore Services
=======
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Our Services
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
<<<<<<< HEAD

export default News;
=======
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
