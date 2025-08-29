import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Grid3X3,
  List,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Target,
  ExternalLink,
  Rocket,
  Shield,
  Users,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Server,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileText,
  Heart,
  CheckCircle,
  Sparkles,
  Building,
  Bot,
  Eye,
  Smartphone
} from 'lucide-react';

// Mock data for services
const MOCK_SERVICES = [
  {
    id: 'ai-legal-tech',
    title: 'AI-Powered Legal Tech Solutions',
    description: 'Advanced legal technology powered by artificial intelligence for document analysis, contract review, and legal research.',
    category: 'AI & Legal Tech',
    price: 299,
    currency: '$',
    marketPrice: '$450',
    rating: 4.8,
    reviewCount: 156,
    innovationLevel: 'high',
    aiScore: 95,
    setupTime: '2-3 weeks',
    roi: '300%',
    estimatedDelivery: '2-3 weeks',
    supportLevel: 'premium',
    technicalSpecs: {
      apiEndpoints: 25,
      integrations: 15,
      scalability: 'Enterprise'
    },
    marketSize: '$2.5B'
  },
  {
    id: 'ai-fintech',
    title: 'AI-Driven Financial Technology',
    description: 'Intelligent financial solutions including fraud detection, risk assessment, and automated trading systems.',
    category: 'AI & FinTech',
    price: 499,
    currency: '$',
    marketPrice: '$750',
    rating: 4.9,
    reviewCount: 234,
    innovationLevel: 'very-high',
    aiScore: 98,
    setupTime: '3-4 weeks',
    roi: '400%',
    estimatedDelivery: '3-4 weeks',
    supportLevel: 'enterprise',
    technicalSpecs: {
      apiEndpoints: 35,
      integrations: 20,
      scalability: 'Global'
    },
    marketSize: '$4.2B'
  },
  {
    id: 'ai-healthcare',
    title: 'AI Healthcare Solutions',
    description: 'Healthcare technology powered by AI for diagnosis, patient monitoring, and medical research.',
    category: 'AI & Healthcare',
    price: 399,
    currency: '$',
    marketPrice: '$600',
    rating: 4.7,
    reviewCount: 189,
    innovationLevel: 'high',
    aiScore: 92,
    setupTime: '4-5 weeks',
    roi: '350%',
    estimatedDelivery: '4-5 weeks',
    supportLevel: 'enterprise',
    technicalSpecs: {
      apiEndpoints: 30,
      integrations: 18,
      scalability: 'Enterprise'
    },
    marketSize: '$3.8B'
  }
];

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('innovation');

  const filteredServices = useMemo(() => {
    let filtered = MOCK_SERVICES;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'innovation':
        filtered = [...filtered].sort((a, b) => {
          const innovationOrder = { 'low': 1, 'medium': 2, 'high': 3, 'very-high': 4 };
          return innovationOrder[b.innovationLevel as keyof typeof innovationOrder] - innovationOrder[a.innovationLevel as keyof typeof innovationOrder];
        });
        break;
      case 'aiScore':
        filtered = [...filtered].sort((a, b) => b.aiScore - a.aiScore);
        break;
      case 'price':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const categories = Array.from(new Set(MOCK_SERVICES.map(service => service.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our cutting-edge portfolio of AI, IT, and micro SAAS solutions designed to transform your business in 2025
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Get Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-white/20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-6 h-6 text-cyan-400" />
            <div>
              <p className="text-sm text-gray-400">Call Us</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-6 h-6 text-cyan-400" />
            <div>
              <p className="text-sm text-gray-400">Email Us</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-6 h-6 text-cyan-400" />
            <div>
              <p className="text-sm text-gray-400">Visit Us</p>
              <p className="text-white font-semibold">364 E Main St STE 1008</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">{MOCK_SERVICES.length}+</div>
          <div className="text-gray-400">Services</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400">98%</div>
          <div className="text-gray-400">AI Score</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400">$10B+</div>
          <div className="text-gray-400">Market Size</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400">350%</div>
          <div className="text-gray-400">Avg ROI</div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="innovation">Sort by Innovation</option>
              <option value="aiScore">Sort by AI Score</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid3X3 className="w-4 h-4 inline mr-2" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4 inline mr-2" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    {service.innovationLevel}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">AI Score</span>
                    <span className="text-cyan-400 font-semibold">{service.aiScore}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">ROI</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market Size</span>
                    <span className="text-purple-400 font-semibold">{service.marketSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-400">{service.currency}{service.price}</span>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    {service.innovationLevel}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-cyan-400">{service.aiScore}%</div>
                    <div className="text-xs text-gray-400">AI Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-purple-400">{service.marketSize}</div>
                    <div className="text-xs text-gray-400">Market Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-400">{service.currency}{service.price}</div>
                    <div className="text-xs text-gray-400">Price</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-12 text-center border border-white/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already leveraging our cutting-edge AI and IT solutions to drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
