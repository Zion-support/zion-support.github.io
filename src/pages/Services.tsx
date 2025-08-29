import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Get unique categories from services with dynamic generation
  const generateCategories = () => {
    const categoryIcons: { [key: string]: string } = {
      'AI & Business Intelligence': '🤖',
      'AI & Marketing': '📈',
      'AI & Healthcare': '🏥',
      'AI & Legal Tech': '⚖️',
      'AI & Real Estate': '🏠',
      'AI & Operations': '⚙️',
      'AI & Green Tech': '🌿',
      'AI & Autonomous Systems': '🚗',
      'AI & FinTech': '💰',
      'AI & Environmental Tech': '🌍',
      'AI & Content': '✍️',
      'AI & Customer Support': '💬',
      'AI & HR': '👥',
      'AI & Research': '🔬',
      'AI & Metaverse': '🌍',
      'AI & Space Tech': '🛸',
      'AI & Development': '💻',
      'AI & Education': '🎓',
      'AI & Entertainment': '🎮',
      'Cybersecurity': '🛡️',
      'Cloud & DevOps': '☁️',
      'Quantum Computing': '⚛️',
      'IoT & Edge Computing': '🌐',
      'Blockchain & Web3': '🔗',
      'Digital Twin': '🔄',
      'Space Technology': '🚀',
      'Sustainable Technology': '🌱',
      'IT Infrastructure': '🏗️',
      'Emerging Technology': '🚀'
    };

    const categoryColors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'AI & Marketing': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-pink-500 to-red-500',
      'AI & Legal Tech': 'from-blue-500 to-indigo-500',
      'AI & Real Estate': 'from-yellow-500 to-orange-500',
      'AI & Operations': 'from-gray-500 to-slate-500',
      'AI & Green Tech': 'from-green-500 to-emerald-500',
      'AI & Autonomous Systems': 'from-cyan-500 to-blue-500',
      'AI & FinTech': 'from-emerald-500 to-green-500',
      'AI & Environmental Tech': 'from-teal-500 to-green-500',
      'AI & Content': 'from-orange-500 to-red-500',
      'AI & Customer Support': 'from-blue-500 to-purple-500',
      'AI & HR': 'from-indigo-500 to-blue-500',
      'AI & Research': 'from-purple-500 to-pink-500',
      'AI & Metaverse': 'from-indigo-500 to-purple-500',
      'AI & Space Tech': 'from-blue-500 to-indigo-500',
      'AI & Development': 'from-cyan-500 to-blue-500',
      'AI & Education': 'from-green-500 to-emerald-500',
      'AI & Entertainment': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Quantum Computing': 'from-purple-500 to-indigo-500',
      'IoT & Edge Computing': 'from-green-500 to-blue-500',
      'Blockchain & Web3': 'from-emerald-500 to-green-500',
      'Digital Twin': 'from-cyan-500 to-blue-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Sustainable Technology': 'from-green-500 to-emerald-500',
      'IT Infrastructure': 'from-slate-500 to-gray-500',
      'Emerging Technology': 'from-yellow-500 to-orange-500'
    };

    const categories = COMPREHENSIVE_SERVICES_INDEX_2030.reduce((acc: any[], service) => {
      const existingCategory = acc.find(cat => cat.id === service.category);
      if (existingCategory) {
        existingCategory.count++;
      } else {
        acc.push({
          id: service.category,
          name: service.category,
          count: 1,
          icon: categoryIcons[service.category] || '🚀',
          color: categoryColors[service.category] || 'from-slate-500 to-gray-500'
        });
      }
      return acc;
    }, []);

    return categories.sort((a, b) => b.count - a.count);
  };

  const categories = generateCategories();

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEO 
        title="Innovative Micro SAAS, IT & AI Services | Zion Tech Group"
        description="Discover our comprehensive range of cutting-edge micro SAAS, IT, and AI services. From AI-powered business intelligence to quantum computing solutions."
        keywords="micro SAAS, IT services, AI services, business intelligence, cybersecurity, cloud computing, quantum computing, blockchain, fintech"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Innovative Micro SAAS
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  IT & AI Services
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transform your business with our cutting-edge micro SAAS solutions, enterprise IT services, and AI-powered innovations. 
                Delivering real results with proven ROI and enterprise-grade security.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              {/* Enhanced Services Links */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services/enhanced"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Enhanced Services Landing
                </Link>
                <Link
                  to="/services/comprehensive-2030"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  View Comprehensive Services 2030
                </Link>
              </div>
            </motion.div>

            {/* Services Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
            >
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{SERVICE_STATISTICS_2030.totalServices}</div>
                <div className="text-sm text-slate-300">Total Services</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-purple-400 mb-2">{SERVICE_STATISTICS_2030.totalCategories}</div>
                <div className="text-sm text-slate-300">Categories</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-green-400 mb-2">{SERVICE_STATISTICS_2030.aiServices}</div>
                <div className="text-sm text-slate-300">AI Services</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-yellow-400 mb-2">{SERVICE_STATISTICS_2030.emergingTechServices}</div>
                <div className="text-sm text-slate-300">Emerging Tech</div>
              </div>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-80"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                  }`}
                >
                  All Services ({COMPREHENSIVE_SERVICES_INDEX_2030.length})
                </button>
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                    }`}
                  >
                    {category.icon} {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {sortedServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-400">{service.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{service.rating}</span>
                        <span className="text-xs text-slate-500">({service.reviewCount})</span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4 line-clamp-3">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Price:</span>
                        <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Market Price:</span>
                        <span className="text-slate-300">${service.marketPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Setup Time:</span>
                        <span className="text-slate-300">{service.availability}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">AI Score:</span>
                        <span className="text-cyan-400 font-semibold">{service.aiScore}/100</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more details about pricing, implementation timeline, and features.`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                      >
                        Get Started
                      </a>
                      <a
                        href={`tel:+13024640950`}
                        className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                    
                    {/* Quick Contact Info */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>📧 kleber@ziontechgroup.com</span>
                        <span>📱 +1 302 464 0950</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {sortedServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl text-slate-400 mb-2">No services found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Information Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
