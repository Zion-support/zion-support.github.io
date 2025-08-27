import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Zap, Brain, Shield, Cloud, Cpu, Rocket, TrendingUp, DollarSign, Clock, Users, Target, Award, ArrowRight, ChevronDown, ChevronUp, Phone, Mail, Globe as GlobeIcon } from 'lucide-react';
import { SEO } from '../components/SEO';
import { REVOLUTIONARY_SERVICES_2030, RevolutionaryService2030 } from '../data/revolutionaryServices2030';

export default function RevolutionaryServices2030() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState<RevolutionaryService2030[]>(REVOLUTIONARY_SERVICES_2030);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Rocket },
    { id: 'ai-autonomous', name: 'AI Autonomous', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'content-creation', name: 'Content Creation', icon: Zap },
    { id: 'sales-intelligence', name: 'Sales Intelligence', icon: Target },
    { id: 'customer-support', name: 'Customer Support', icon: Users },
    { id: 'data-analytics', name: 'Data Analytics', icon: TrendingUp },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu },
    { id: 'digital-twin', name: 'Digital Twin', icon: Award },
    { id: 'blockchain-web3', name: 'Blockchain & Web3', icon: GlobeIcon }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'Any' },
    { id: 'budget', name: 'Budget', range: '$500 - $2,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$2,000 - $5,000' },
    { id: 'premium', name: 'Premium', range: '$5,000 - $10,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$10,000+' }
  ];

  const sortOptions = [
    { id: 'innovation', name: 'Innovation Level', icon: Brain },
    { id: 'price-low', name: 'Price: Low to High', icon: DollarSign },
    { id: 'price-high', name: 'Price: High to Low', icon: DollarSign },
    { id: 'delivery', name: 'Fastest Delivery', icon: Clock },
    { id: 'popularity', name: 'Most Popular', icon: TrendingUp }
  ];

  useEffect(() => {
    let filtered = REVOLUTIONARY_SERVICES_2030;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      switch (selectedPriceRange) {
        case 'budget':
          filtered = filtered.filter(service => service.price <= 2000);
          break;
        case 'mid-range':
          filtered = filtered.filter(service => service.price > 2000 && service.price <= 5000);
          break;
        case 'premium':
          filtered = filtered.filter(service => service.price > 5000 && service.price <= 10000);
          break;
        case 'enterprise':
          filtered = filtered.filter(service => service.price > 10000);
          break;
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'delivery':
        filtered.sort((a, b) => parseInt(a.estimatedDelivery) - parseInt(b.estimatedDelivery));
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.roi || 0) - (a.roi || 0));
        break;
      default: // innovation
        filtered.sort((a, b) => {
          const innovationLevels = { 'Revolutionary': 5, 'Advanced': 4, 'Innovative': 3, 'Modern': 2, 'Standard': 1 };
          return (innovationLevels[b.innovationLevel as keyof typeof innovationLevels] || 0) - (innovationLevels[a.innovationLevel as keyof typeof innovationLevels] || 0);
        });
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, selectedPriceRange, sortBy]);

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-cyan-400 neon-glow-blue';
      case 'Advanced': return 'text-purple-400 neon-glow-purple';
      case 'Innovative': return 'text-green-400 neon-glow-green';
      case 'Modern': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case '24/7 Premium': return 'text-green-400 neon-glow-green';
      case 'Business Hours': return 'text-blue-400';
      case 'Email Support': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 quantum-tunnel"></div>
      
      <SEO title="Revolutionary Services 2030 - Zion Tech Group" description="Discover our revolutionary AI, IT, and micro SAAS services for 2030. Cutting-edge technology solutions with futuristic design and innovation." />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="floating-particles"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow-blue">
              Revolutionary Services 2030
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto holographic p-6 rounded-2xl">
              Experience the future of technology with our cutting-edge AI, IT, and micro SAAS solutions. 
              Designed for the next decade of innovation and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold futuristic-btn"
              >
                <Brain className="inline-block w-5 h-5 mr-2" />
                AI-Powered Solutions
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold futuristic-btn"
              >
                <Shield className="inline-block w-5 h-5 mr-2" />
                Enterprise Security
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-semibold futuristic-btn"
              >
                <Rocket className="inline-block w-5 h-5 mr-2" />
                Future-Ready Tech
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 energy-field">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} ({range.range})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <p className="text-slate-400">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
                <span className="text-cyan-400 font-semibold">{REVOLUTIONARY_SERVICES_2030.length}</span> revolutionary services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden energy-field hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 neon-glow">
                          {service.name}
                        </h3>
                        <p className="text-slate-300 text-sm mb-3">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)}`}>
                          {service.innovationLevel}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSupportLevelColor(service.supportLevel)}`}>
                          {service.supportLevel}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-md">
                          +{service.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Price and Features */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Starting Price:</span>
                        <span className="text-2xl font-bold text-cyan-400 neon-glow-blue">
                          ${service.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Delivery:</span>
                        <span className="text-white font-semibold">{service.estimatedDelivery} days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi || 'N/A'}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-slate-400 text-sm flex items-center">
                            <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 futuristic-btn"
                    >
                      <span>{expandedService === service.id ? 'Show Less' : 'View Details'}</span>
                      {expandedService === service.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-700/50 bg-slate-800/30"
                      >
                        <div className="p-6 space-y-6">
                          {/* Benefits */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 neon-glow">Benefits</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="text-slate-300 text-sm flex items-start">
                                  <Zap className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Use Cases */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 neon-glow">Use Cases</h4>
                            <ul className="space-y-2">
                              {service.useCases.map((useCase, useCaseIndex) => (
                                <li key={useCaseIndex} className="text-slate-300 text-sm flex items-start">
                                  <Target className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                                  {useCase}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technical Specifications */}
                          {service.technicalSpecs && (
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3 neon-glow">Technical Specs</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <span className="text-slate-400 text-sm">Technology:</span>
                                  <p className="text-slate-300 text-sm">{service.technicalSpecs.technology}</p>
                                </div>
                                <div>
                                  <span className="text-slate-400 text-sm">Scalability:</span>
                                  <p className="text-slate-300 text-sm">{service.technicalSpecs.scalability}</p>
                                </div>
                                <div>
                                  <span className="text-slate-400 text-sm">Integration:</span>
                                  <p className="text-slate-300 text-sm">{service.technicalSpecs.integration}</p>
                                </div>
                                <div>
                                  <span className="text-slate-400 text-sm">Security:</span>
                                  <p className="text-slate-300 text-sm">{service.technicalSpecs.security}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Market Information */}
                          {service.marketSize && (
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3 neon-glow">Market Insights</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <span className="text-slate-400 text-sm">Market Size:</span>
                                  <p className="text-slate-300 text-sm">{service.marketSize}</p>
                                </div>
                                {service.competitors && (
                                  <div>
                                    <span className="text-slate-400 text-sm">Key Competitors:</span>
                                    <p className="text-slate-300 text-sm">{service.competitors.join(', ')}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Contact Information */}
                          <div className="bg-slate-700/30 rounded-xl p-4">
                            <h4 className="text-lg font-semibold text-white mb-3 neon-glow">Get Started</h4>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-cyan-400" />
                                <span className="text-slate-300 text-sm">{service.contactInfo.phone}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-cyan-400" />
                                <span className="text-slate-300 text-sm">{service.contactInfo.email}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <GlobeIcon className="w-4 h-4 text-cyan-400" />
                                <a
                                  href={service.contactInfo.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300"
                                >
                                  Visit Website
                                </a>
                              </div>
                            </div>
                            <div className="mt-4">
                              <a
                                href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 futuristic-btn"
                              >
                                <span>Contact Now</span>
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Services Found */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-slate-400 text-lg mb-4">
                <Search className="w-16 h-16 mx-auto mb-4 text-slate-600" />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">No services found</h3>
                <p className="text-slate-500">
                  Try adjusting your search criteria or filters to find the perfect revolutionary service.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 energy-field"
            >
              <div className="text-4xl font-bold text-cyan-400 neon-glow-blue mb-2">
                {REVOLUTIONARY_SERVICES_2030.length}+
              </div>
              <div className="text-slate-300 font-semibold">Revolutionary Services</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 energy-field"
            >
              <div className="text-4xl font-bold text-purple-400 neon-glow-purple mb-2">
                95%
              </div>
              <div className="text-slate-300 font-semibold">Client Satisfaction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 energy-field"
            >
              <div className="text-4xl font-bold text-green-400 neon-glow-green mb-2">
                24/7
              </div>
              <div className="text-slate-300 font-semibold">Premium Support</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 energy-field"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                2030
              </div>
              <div className="text-slate-300 font-semibold">Future-Ready Tech</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-600/50 energy-field"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services. 
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 futuristic-btn"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +1 302 464 0950</span>
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com?subject=Revolutionary Services 2030 Inquiry"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 futuristic-btn"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </motion.a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-400 mb-2">Visit our headquarters:</p>
              <p className="text-slate-300 font-medium">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}