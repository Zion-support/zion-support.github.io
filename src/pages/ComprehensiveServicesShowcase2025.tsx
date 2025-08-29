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
  Shield as ShieldIcon,
  Server,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Users as UsersIcon,
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
    supportLevel: 'premium',
    technicalSpecs: {
      apiEndpoints: 30,
      integrations: 18,
      scalability: 'Enterprise'
    },
    marketSize: '$3.8B'
  }
];

const categories = [
  { id: 'all', name: 'All Services', count: MOCK_SERVICES.length, color: 'from-gray-500 to-gray-600', icon: <Sparkles className="w-5 h-5" /> },
  { id: 'ai-legal-tech', name: 'AI & Legal Tech', count: 1, color: 'from-blue-500 to-indigo-500', icon: <FileText className="w-5 h-5" /> },
  { id: 'ai-fintech', name: 'AI & FinTech', count: 1, color: 'from-green-500 to-emerald-500', icon: <TrendingUp className="w-5 h-5" /> },
  { id: 'ai-healthcare', name: 'AI & Healthcare', count: 1, color: 'from-red-500 to-pink-500', icon: <Heart className="w-5 h-5" /> }
];

const getInnovationColor = (level: string) => {
  switch (level) {
    case 'very-high': return 'from-purple-500 to-pink-500';
    case 'high': return 'from-blue-500 to-cyan-500';
    case 'medium': return 'from-green-500 to-emerald-500';
    default: return 'from-gray-500 to-gray-600';
  }
};

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = useMemo(() => {
    let filtered = MOCK_SERVICES;
    
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.category.toLowerCase().includes(lowerQuery)
      );
    }
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(service => service.id === activeCategory);
    }
    
    // Sort services
    filtered.sort((a, b) => {
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
    
    return filtered;
  }, [searchTerm, activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent">
                AI Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            >
              Discover our comprehensive suite of autonomous AI-powered micro SAAS services, 
              cutting-edge technology solutions, and innovative platforms that transform businesses 
              across industries.
            </motion.p>
            
            {/* Contact Information Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-white/20"
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
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="text-white font-semibold">364 E Main St STE 1008</p>
                    <p className="text-white font-semibold">Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{MOCK_SERVICES.length}+</div>
                <div className="text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">98%</div>
                <div className="text-gray-400">AI Score</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="name">Sort by Name</option>
              </select>

              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid/List */}
        <motion.div
          key={`${activeCategory}-${searchTerm}-${sortBy}-${viewMode}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              {viewMode === 'list' ? (
                <>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white truncate">{service.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{service.rating}</span>
                        <span className="text-gray-400">({service.reviewCount})</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3 line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.currency}{service.price.toLocaleString()}</span>
                        <span className="text-gray-400 text-sm">Market: {service.marketPrice}</span>
                      </div>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                    <p className="text-gray-300 text-center mb-6 line-clamp-3">{service.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-cyan-400">{service.currency}{service.price.toLocaleString()}</span>
                        <p className="text-gray-400 text-sm">Market: {service.marketPrice}</p>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">ROI</span>
                          <span className="text-emerald-400 font-semibold">{service.roi}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Setup</span>
                          <span className="text-blue-400 font-semibold">{service.setupTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">AI Score</span>
                          <span className="text-purple-400 font-semibold">{service.aiScore}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 w-full justify-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or category filters.</p>
          </motion.div>
        )}
      </div>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement these innovative solutions
            and drive your business forward with cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
              <p className="text-gray-300">Explore our full range of services</p>
              <a
                href="https://ziontechgroup.com"
                className="mt-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                ziontechgroup.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
