import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Microchip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Sparkles,
  Crown,
  Gem,
  Diamond,
  Platinum,
  Gold,
  Silver,
  Bronze,
  List
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI Development', name: 'AI Development', count: allServices.filter(s => s.category === 'AI Development').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Digital Marketing', name: 'Digital Marketing', count: allServices.filter(s => s.category === 'Digital Marketing').length, icon: '📱', color: 'from-zion-purple to-zion-pink' },
    { id: 'Customer Service', name: 'Customer Service', count: allServices.filter(s => s.category === 'Customer Service').length, icon: '💬', color: 'from-zion-green to-zion-emerald' },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category === 'Financial Technology').length, icon: '💰', color: 'from-zion-yellow to-zion-orange' },
    { id: 'Legal Technology', name: 'Legal Technology', count: allServices.filter(s => s.category === 'Legal Technology').length, icon: '⚖️', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Human Resources', name: 'Human Resources', count: allServices.filter(s => s.category === 'Human Resources').length, icon: '👥', color: 'from-zion-purple to-zion-pink' },
    { id: 'Supply Chain', name: 'Supply Chain', count: allServices.filter(s => s.category === 'Supply Chain').length, icon: '🔗', color: 'from-zion-green to-zion-blue' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-red to-zion-orange' },
    { id: 'Healthcare', name: 'Healthcare', count: allServices.filter(s => s.category === 'Healthcare').length, icon: '🏥', color: 'from-zion-green to-zion-emerald' },
    { id: 'Sales', name: 'Sales', count: allServices.filter(s => s.category === 'Sales').length, icon: '📊', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Customer Success', name: 'Customer Success', count: allServices.filter(s => s.category === 'Customer Success').length, icon: '🎯', color: 'from-zion-purple to-zion-indigo' },
    { id: 'Inventory Management', name: 'Inventory Management', count: allServices.filter(s => s.category === 'Inventory Management').length, icon: '📦', color: 'from-zion-orange to-zion-red' },
    { id: 'Manufacturing', name: 'Manufacturing', count: allServices.filter(s => s.category === 'Manufacturing').length, icon: '🏭', color: 'from-zion-gray to-zion-slate' },
    { id: 'Energy', name: 'Energy', count: allServices.filter(s => s.category === 'Energy').length, icon: '⚡', color: 'from-zion-yellow to-zion-orange' },
    { id: 'Logistics', name: 'Logistics', count: allServices.filter(s => s.category === 'Logistics').length, icon: '🚚', color: 'from-zion-blue to-zion-green' },
    { id: 'Customer Experience', name: 'Customer Experience', count: allServices.filter(s => s.category === 'Customer Experience').length, icon: '❤️', color: 'from-zion-pink to-zion-red' },
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category === 'Project Management').length, icon: '📋', color: 'from-zion-indigo to-zion-purple' }
  ];

  const filteredServices = allServices.filter(service => {
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
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const getPriceTier = (price: number) => {
    if (price <= 2000) return { tier: 'Bronze', icon: Bronze, color: 'text-amber-600' };
    if (price <= 3500) return { tier: 'Silver', icon: Silver, color: 'text-gray-400' };
    if (price <= 5000) return { tier: 'Gold', icon: Gold, color: 'text-yellow-500' };
    if (price <= 7000) return { tier: 'Platinum', icon: Platinum, color: 'text-cyan-400' };
    return { tier: 'Diamond', icon: Diamond, color: 'text-purple-500' };
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of innovative AI, IT, and micro SAAS services. Cutting-edge solutions for modern businesses with proven ROI and competitive pricing." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, business solutions, technology consulting, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                2025
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our cutting-edge portfolio of AI-powered solutions, IT services, and innovative micro SAAS platforms. 
              Each service is designed to deliver measurable ROI and transform your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>25+ Innovative Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-zion-cyan" />
                <span>400%+ Average ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-zion-cyan" />
                <span>2-5 Week Setup</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-purple/30">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services by name, category, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 8).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                        : 'bg-zion-blue-darker text-zion-slate-light hover:bg-zion-blue hover:text-white'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>

              {/* Sort and View */}
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="aiScore">Sort by AI Score</option>
                  <option value="name">Sort by Name</option>
                </select>

                <div className="flex bg-zion-blue-darker rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    <BarChart3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}-${sortBy}-${viewMode}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl border border-zion-purple/30 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full">
                              {service.category}
                            </span>
                            {getPriceTier(service.price).icon && (
                              <span className={`flex items-center text-xs ${getPriceTier(service.price).color}`}>
                                {React.createElement(getPriceTier(service.price).icon, { className: "w-3 h-3 mr-1" })}
                                {getPriceTier(service.price).tier}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-zion-slate-light">
                            {service.availability}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zion-slate-light mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.rating}</div>
                          <div className="text-xs text-zion-slate-light">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.reviewCount}</div>
                          <div className="text-xs text-zion-slate-light">Reviews</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.aiScore}</div>
                          <div className="text-xs text-zion-slate-light">AI Score</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-zion-blue-darker text-zion-slate-light text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full">
                            +{service.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => openServiceModal(service)}
                          className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors"
                        >
                          View Details
                        </button>
                        <Link
                          to={`/services/${service.id}`}
                          className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg text-sm font-medium hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-zion-slate-light mb-3 line-clamp-2">
                            {service.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                            <span className="px-2 py-1 bg-zion-purple/20 text-zion-cyan rounded-full">
                              {service.category}
                            </span>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 mr-1 text-zion-cyan" />
                              {service.rating} ({service.reviewCount} reviews)
                            </span>
                            <span className="flex items-center">
                              <Brain className="w-4 h-4 mr-1 text-zion-cyan" />
                              AI Score: {service.aiScore}
                            </span>
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-2xl font-bold text-zion-cyan mb-2">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-zion-slate-light mb-3">
                            {service.availability}
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => openServiceModal(service)}
                              className="px-3 py-1 text-zion-cyan hover:text-zion-cyan-light text-sm border border-zion-cyan rounded transition-colors"
                            >
                              Details
                            </button>
                            <Link
                              to={`/services/${service.id}`}
                              className="px-3 py-1 bg-zion-cyan text-white text-sm rounded hover:bg-zion-cyan-light transition-colors"
                            >
                              Start
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 backdrop-blur-sm rounded-3xl p-12 border border-zion-cyan/30 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution. 
              Get in touch today for a personalized consultation and demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium text-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-zion-blue-dark text-white rounded-lg font-medium text-lg hover:bg-zion-blue transition-all duration-300 border border-zion-purple/30"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>Free Initial Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>Custom Implementation Plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>Ongoing Support & Training</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-zion-blue-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {selectedService.title}
                    </h2>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-cyan rounded-full">
                        {selectedService.category}
                      </span>
                      <span className="px-3 py-1 bg-zion-blue/20 text-zion-cyan rounded-full">
                        {selectedService.subcategory}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-zion-slate-light hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {selectedService.description}
                    </p>

                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {selectedService.tags.map((tag: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light text-sm">{tag}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">Integrations</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.integrations.map((integration: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zion-blue-darker text-zion-slate-light text-sm rounded-full"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-zion-blue-darker rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Pricing & Details</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Price:</span>
                          <span className="text-2xl font-bold text-zion-cyan">
                            ${selectedService.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Market Price:</span>
                          <span className="text-white">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Setup Time:</span>
                          <span className="text-white">{selectedService.setupTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Expected ROI:</span>
                          <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zion-blue-darker rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-cyan">{selectedService.rating}</div>
                          <div className="text-sm text-zion-slate-light">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-cyan">{selectedService.reviewCount}</div>
                          <div className="text-sm text-zion-slate-light">Reviews</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-cyan">{selectedService.aiScore}</div>
                          <div className="text-sm text-zion-slate-light">AI Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-cyan">
                            {selectedService.featured ? 'Yes' : 'No'}
                          </div>
                          <div className="text-sm text-zion-slate-light">Featured</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link
                        to={`/services/${selectedService.id}`}
                        className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium text-center hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started Now
                      </Link>
                      <button
                        onClick={() => window.open(`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.title}`)}
                        className="w-full px-6 py-3 bg-zion-blue-darker text-white rounded-lg font-medium text-center hover:bg-zion-blue transition-all duration-300 border border-zion-purple/30"
                      >
                        Contact Sales Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper component for List icon
const List: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

export default ComprehensiveServicesShowcase2025;
