import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { SEO } from '../components/SEO';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  TrendingUp, 
  Globe, 
  Heart, 
  Rocket, 
  Users, 
  PenTool, 
  Settings,
  Cloud,
  Lock,
  Atom,
  Cpu,
  Link,
  RefreshCw,
  Leaf,
  Server,
  Zap,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Target,
  BarChart3,
  Award,
  Sparkles,
  Flame,
  Crown,
  Infinity,
  Gauge,
  GitFork,
  Code,
  Database,
  Network,
  Smartphone,
  Building,
  Factory,
  City,
  Car,
  Home,
  Truck,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030, PRICING_CONTACT_2030 } from '../data/comprehensivePricingGuide2030';
export default function ComprehensiveServicesLanding2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Featured services for hero section
  const featuredServices = [
    {
      id: 'ai-autonomous-research-assistant-2030',
      name: 'AI Autonomous Research Assistant 2030',
      description: 'Fully autonomous research platform that conducts comprehensive market analysis, competitive intelligence, and trend forecasting without human intervention.',
      category: 'AI & Research',
      price: 2499,
      monthlyPrice: 249,
      setupTime: '2-4 weeks',
      roi: '800%',
      rating: 4.9,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Autonomous research', 'Real-time intelligence', 'Predictive forecasting', '90% time reduction']
    },
    {
      id: 'quantum-ai-trading-platform-2030',
      name: 'Quantum AI Trading Platform 2030',
      description: 'Next-generation trading platform combining quantum computing algorithms with AI to deliver unprecedented market prediction accuracy and execution speed.',
      category: 'AI & FinTech',
      price: 5999,
      monthlyPrice: 599,
      setupTime: '4-8 weeks',
      roi: '1200%',
      rating: 4.9,
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      features: ['Quantum computing', 'AI predictions', 'Real-time execution', '40% accuracy increase']
    },
    {
      id: 'ai-holographic-workspace-2030',
      name: 'AI Holographic Workspace 2030',
      description: 'Revolutionary 3D holographic workspace that transforms remote collaboration, design, and creative processes through immersive AI-powered interactions.',
      category: 'AI & Metaverse',
      price: 3499,
      monthlyPrice: 349,
      setupTime: '2-3 weeks',
      roi: '750%',
      rating: 4.7,
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      features: ['3D holographic workspace', 'AI spatial computing', 'Real-time collaboration', '75% efficiency increase']
    },
    {
      id: 'enterprise-cloud-migration-2030',
      name: 'Enterprise Cloud Migration 2030',
      description: 'Comprehensive cloud migration service that transforms legacy infrastructure to modern cloud platforms with zero downtime and maximum efficiency.',
      category: 'Cloud & DevOps',
      price: 25000,
      monthlyPrice: 2500,
      setupTime: '8-16 weeks',
      roi: '400%',
      rating: 4.9,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: ['Zero-downtime migration', 'AI optimization', 'Multi-cloud strategy', '40% cost reduction']
    }
  ];

  // Service categories with icons and colors
  const categoryData = {
    'AI & Research': { icon: Brain, color: 'from-purple-500 to-pink-500' },
    'AI & Operations': { icon: Settings, color: 'from-gray-500 to-slate-500' },
    'AI & FinTech': { icon: TrendingUp, color: 'from-indigo-500 to-purple-500' },
    'AI & Metaverse': { icon: Globe, color: 'from-blue-500 to-cyan-500' },
    'AI & Healthcare': { icon: Heart, color: 'from-red-500 to-pink-500' },
    'AI & Space Tech': { icon: Rocket, color: 'from-purple-500 to-indigo-500' },
    'AI & Content': { icon: PenTool, color: 'from-blue-500 to-indigo-500' },
    'Cloud & DevOps': { icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    'Cybersecurity': { icon: Shield, color: 'from-red-500 to-orange-500' },
    'Quantum Computing': { icon: Atom, color: 'from-indigo-500 to-purple-500' },
    'IoT & Edge Computing': { icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    'Blockchain & Web3': { icon: Link, color: 'from-yellow-500 to-orange-500' },
    'Digital Twin': { icon: RefreshCw, color: 'from-blue-500 to-indigo-500' },
    'Space Technology': { icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    'Sustainable Technology': { icon: Leaf, color: 'from-green-500 to-teal-500' },
    'IT Infrastructure': { icon: Server, color: 'from-slate-500 to-gray-500' },
    'Emerging Technology': { icon: Zap, color: 'from-violet-500 to-purple-500' }
  };

  // Filter services by category and search
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesAiScore = service??.aiScore >= aiScoreRange[0] && service.aiScore <= aiScoreRange[1];
    return matchesCategory && matchesSearch && matchesPrice && matchesAiScore;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b??.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'aiScore':
        return b??.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />,
      'AI & Healthcare': <Heart className="w-6 h-6" />,
      'AI & FinTech': <TrendingUp className="w-6 h-6" />,
      'IT Infrastructure': <Database className="w-6 h-6" />,
      'Emerging Technology': <Rocket className="w-6 h-6" />,
      'AI & Research': <Search className="w-6 h-6" />,
      'AI & Metaverse': <Globe className="w-6 h-6" />,
      'AI & Space Tech': <Rocket className="w-6 h-6" />,
      'AI & Development': <Zap className="w-6 h-6" />,
      'AI & Education': <Users className="w-6 h-6" />,
      'AI & Entertainment': <Star className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,
      'Quantum Computing': <Zap className="w-6 h-6" />,
      'IoT & Edge Computing': <Database className="w-6 h-6" />,
      'Blockchain & Web3': <Lock className="w-6 h-6" />,
      'Digital Twin': <Globe className="w-6 h-6" />,
      'Space Technology': <Rocket className="w-6 h-6" />,
      'Sustainable Technology': <Heart className="w-6 h-6" />
    };
    return icons[category] || <Rocket className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'AI & Healthcare': 'from-pink-500 to-red-500',
      'AI & FinTech': 'from-emerald-500 to-green-500',
      'IT Infrastructure': 'from-slate-500 to-gray-500',
      'Emerging Technology': 'from-violet-500 to-purple-500',
      'AI & Research': 'from-purple-500 to-violet-500',
      'AI & Metaverse': 'from-purple-500 to-indigo-500',
      'AI & Space Tech': 'from-indigo-500 to-purple-500',
      'AI & Development': 'from-cyan-500 to-blue-500',
      'AI & Education': 'from-blue-500 to-indigo-500',
      'AI & Entertainment': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',
      'Digital Twin': 'from-blue-500 to-indigo-500',
      'Space Technology': 'from-purple-500 to-pink-500',
      'Sustainable Technology': 'from-green-500 to-teal-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  const resetFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setSortBy('rating');
    setPriceRange([0, 50000]);
    setAiScoreRange([80, 100]);
  };

  const openServiceModal = (service: unknown) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeServiceModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
  {/* Empty JSX fragment */}
      <SEO
        title="Comprehensive Services 2030 - Zion Tech Group"
        description="Discover our cutting-edge AI, IT infrastructure, and emerging technology services for 2030. Transform your business with innovative solutions."
        keywords="AI services, IT infrastructure, emerging technology, Zion Tech Group, 2030 services"
      />

        {/* Statistics Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{SERVICE_STATISTICS_2030.totalServices}+</div>
                <div className="text-gray-300">Total Services</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">{SERVICE_STATISTICS_2030.totalCategories}</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">${SERVICE_STATISTICS_2030.averagePrice.toLocaleString()}</div>
                <div className="text-gray-300">Avg. Price</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">{SERVICE_STATISTICS_2030.aiServices}+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-6 mb-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex-1">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {SERVICE_CATEGORIES_2030.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex-1">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="aiScore">Sort by AI Score</option>
                  </select>
                </div>

                {/* Advanced Filters Toggle */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                  >
                    {showAdvancedFilters ? 'Hide' : 'Advanced'} Filters
                  </button>
                  <button
                    onClick={resetFilters}
                    className="px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Advanced Filters */}
              {showAdvancedFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-white/20 pt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Price Range */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                      </label>
                      <div className="flex gap-4">
                        <input
                          type="range"
                          min="0"
                          max="50000"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                          className="flex-1"
                        />
                        <input
                          type="range"
                          min="0"
                          max="50000"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    {/* AI Score Range */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        AI Score Range: {aiScoreRange[0]}% - {aiScoreRange[1]}%
                      </label>
                      <div className="flex gap-4">
                        <input
                          type="range"
                          min="80"
                          max="100"
                          value={aiScoreRange[0]}
                          onChange={(e) => setAiScoreRange([parseInt(e.target.value), aiScoreRange[1]])}
                          className="flex-1"
                        />
                        <input
                          type="range"
                          min="80"
                          max="100"
                          value={aiScoreRange[1]}
                          onChange={(e) => setAiScoreRange([aiScoreRange[0], parseInt(e.target.value)])}
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Counter */}
            <div className="mb-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block"
              >
                <p className="text-white text-lg">
                  Showing <span className="font-bold text-blue-400">{sortedServices.length}</span> of{' '}
                  <span className="font-bold text-purple-400">{COMPREHENSIVE_SERVICES_INDEX_2030.length}</span> services
                </p>
                {sortedServices.length === 0 && (
                  <p className="text-gray-400 text-sm mt-2">
                    No services match your current filters. Try adjusting your search criteria.
                  </p>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service?.rating}</span>
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Setup:</span>
                      <span className="text-white">{service?.setupTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">AI Score:</span>
                      <span className="text-white font-semibold">{service?.aiScore}/100</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openServiceModal(service)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Quick View
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Competitive pricing with flexible options. Get the best value for your investment with our comprehensive service packages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COMPREHENSIVE_PRICING_GUIDE_2030.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.serviceId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.serviceName}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-6">
                    ${service.basePrice.toLocaleString()}
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {service?.pricingTiers[0]?.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our team to discuss your needs and discover how our innovative services can drive your success in 2030 and beyond.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">{PRICING_CONTACT_2030.phone}</div>
                  <div className="text-gray-300 text-sm">Phone</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">{PRICING_CONTACT_2030.email}</div>
                  <div className="text-gray-300 text-sm">Email</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">{PRICING_CONTACT_2030.website}</div>
                  <div className="text-gray-300 text-sm">Website</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Us Today
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Services 2030
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI services, innovative micro SAAS solutions, and enterprise-grade IT services. 
              Stay ahead of the competition with technology that's already in the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400">{SERVICE_STATISTICS_2030.totalServices}+</div>
                <div className="text-slate-400">Services Available</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20">
                <div className="text-3xl font-bold text-blue-400">{SERVICE_STATISTICS_2030.totalCategories}</div>
                <div className="text-slate-400">Categories</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400">{SERVICE_STATISTICS_2030.averageRating}/5</div>
                <div className="text-slate-400">Average Rating</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400">800%+</div>
                <div className="text-slate-400">Average ROI</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </RouterLink>
              <RouterLink
                to="/pricing"
                className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                View Pricing
                <DollarSign className="ml-2 w-5 h-5" />
              </RouterLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services 2030
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our most innovative and high-impact services that are transforming industries and driving unprecedented ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <RouterLink to={`/services/${service.id}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-cyan-400 font-semibold">${service.price.toLocaleString()}</div>
                      <div className="text-green-400 font-semibold">{service.roi} ROI</div>
                    </div>
                  </div>
                </RouterLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES_2030.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {SERVICE_CATEGORIES_2030.slice(0, 8).map(category => {
                  const categoryInfo = categoryData[category as keyof typeof categoryData];
                  if (!categoryInfo) return null;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? `bg-gradient-to-r ${categoryInfo.color} text-white`
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                      }`}
                    >
                      <categoryInfo.icon className="w-4 h-4 inline mr-2" />
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Services 2030
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Explore our comprehensive catalog of AI-powered services, enterprise IT solutions, and innovative micro SAAS products.
            </p>
          </motion.div>
        )}
      </div>
    </React.Fragment>
  )}