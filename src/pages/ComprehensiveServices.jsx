import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  Award,
  Target,
  BarChart3,
  Cpu,
  Brain,
  Database,
  Lock,
  MessageSquare,
  BookOpen,
  Truck,
  Home,
  DollarSign,
  Rocket,
  Sparkles,
  Eye,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2025, SERVICE_CATEGORIES_2025, ZION_TECH_GROUP_CONTACT_2025 } from '../data/ultimateInnovativeServices2025';

export default function ComprehensiveServices() {
  const [services, setServices] = useState(ULTIMATE_INNOVATIVE_SERVICES_2025);
  const [filteredServices, setFilteredServices] = useState(ULTIMATE_INNOVATIVE_SERVICES_2025);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    let filtered = services;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    setFilteredServices(filtered);
  }, [services, searchTerm, selectedCategory, sortBy, priceRange]);

  const getCategoryIcon = (category) => {
    const iconMap = {
      'Quantum AI': <Rocket className="w-5 h-5" />,
      'AI & Autonomous Systems': <Brain className="w-5 h-5" />,
      'Blockchain & AI': <Lock className="w-5 h-5" />,
      'AI & Cybersecurity': <Shield className="w-5 h-5" />,
      'IoT & Edge Computing': <Cpu className="w-5 h-5" />,
      'AI & Digital Twin': <Globe className="w-5 h-5" />,
      'AI & Sustainability': <Home className="w-5 h-5" />,
      'AI & Content Creation': <MessageSquare className="w-5 h-5" />,
      'AI & HR': <Users className="w-5 h-5" />,
      'AI & Finance': <DollarSign className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'Quantum AI': 'from-purple-500 to-pink-500',
      'AI & Autonomous Systems': 'from-blue-500 to-cyan-500',
      'Blockchain & AI': 'from-green-500 to-emerald-500',
      'AI & Cybersecurity': 'from-red-500 to-orange-500',
      'IoT & Edge Computing': 'from-indigo-500 to-blue-500',
      'AI & Digital Twin': 'from-teal-500 to-green-500',
      'AI & Sustainability': 'from-green-500 to-teal-500',
      'AI & Content Creation': 'from-purple-500 to-indigo-500',
      'AI & HR': 'from-blue-500 to-purple-500',
      'AI & Finance': 'from-yellow-500 to-orange-500'
    };
    return colorMap[category] || 'from-zion-cyan to-zion-purple';
  };

  const getSupportLevelColor = (level) => {
    const colorMap = {
      'enterprise': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'premium': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'standard': 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colorMap[level] || 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30';
  };

  const formatPrice = (price) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan text-sm font-medium">500+ Innovative AI Services</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">AI Services</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our complete portfolio of cutting-edge AI solutions, from quantum computing and autonomous business operations 
            to blockchain integration and cybersecurity defense. Transform your business with the future of technology.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{services.length}+</div>
              <div className="text-zion-slate-light text-sm">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">10</div>
              <div className="text-zion-slate-light text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-cyan/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search AI services, features, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl text-zion-cyan hover:bg-zion-cyan/20 transition-colors duration-200"
              >
                <Filter className="w-5 h-5" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-zion-cyan/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-zion-cyan text-sm font-medium mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                    >
                      <option value="all">All Categories</option>
                      {SERVICE_CATEGORIES_2025.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-zion-cyan text-sm font-medium mb-2">Price Range</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      />
                      <span className="text-zion-slate-light">to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                        className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      />
                    </div>
                  </div>

                  {/* Support Level */}
                  <div>
                    <label className="block text-zion-cyan text-sm font-medium mb-2">Support Level</label>
                    <select className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20">
                      <option value="">All Levels</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="premium">Premium</option>
                      <option value="standard">Standard</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {services.length} services
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-zion-blue-dark/30 to-zion-purple-dark/30 p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs rounded-full border ${getSupportLevelColor(service.supportLevel)}`}>
                    {service.supportLevel}
                  </span>
                </div>

                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getCategoryIcon(service.category)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">
                    {formatPrice(service.price)}<span className="text-sm text-zion-slate-light">/month</span>
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    Market: {service.marketPrice}
                  </span>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-zion-cyan">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-lg border border-zion-cyan/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <Link to={service.websiteUrl}>
                    <button className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

                {/* Delivery Info */}
                <div className="mt-4 pt-4 border-t border-zion-cyan/20 flex items-center justify-between text-xs text-zion-slate-light">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.estimatedDelivery}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    {service.subcategory}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange([0, 10000]);
                }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-zion-slate-dark border border-zion-cyan/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(selectedService.category)} rounded-xl flex items-center justify-center`}>
                    {getCategoryIcon(selectedService.category)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-zion-cyan">
                        {formatPrice(selectedService.price)}<span className="text-sm text-zion-slate-light">/month</span>
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full border ${getSupportLevelColor(selectedService.supportLevel)}`}>
                        {selectedService.supportLevel}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Service Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                    <p className="text-zion-slate-light leading-relaxed">{selectedService.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm rounded-lg border border-zion-cyan/20">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologyStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zion-purple/10 text-zion-purple text-sm rounded-lg border border-zion-purple/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Target Audience</h3>
                    <ul className="space-y-1">
                      {selectedService.targetAudience.map((audience, idx) => (
                        <li key={idx} className="text-zion-slate-light text-sm">• {audience}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Compliance & Standards</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.complianceStandards.map((standard, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-lg border border-green-500/20">
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-zion-cyan/20 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-6 text-sm text-zion-slate-light">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Delivery: {selectedService.estimatedDelivery}
                  </span>
                  <span className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    {selectedService.subcategory}
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Market: {selectedService.marketPrice}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <Link to={selectedService.websiteUrl}>
                    <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit Service
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                      Contact Sales
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our AI experts are ready to help you choose the perfect solution and implement it successfully. 
              Get in touch today to start your transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link to="/contact">
                <motion.button 
                  className="px-10 py-5 bg-white text-zion-blue rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </Link>
              
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-white/80 text-sm">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-white/80 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Website</h3>
                <p className="text-white/80 text-sm">https://ziontechgroup.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}