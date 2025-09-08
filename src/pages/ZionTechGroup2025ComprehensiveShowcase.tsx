import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Shield, Cloud, Brain, Zap, Globe, Phone, Mail, MapPin, ExternalLink, ChevronDown, CheckCircle, TrendingUp, Target, Lightbulb } from 'lucide-react';
import { zionTechGroup2025Services, ZionService, getServicesByCategory, getServicesByPriceRange, searchServices } from '../data/zionTechGroup2025ComprehensiveServices';

const ZionTechGroup2025ComprehensiveShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices = useMemo(() => {
    let services = zionTechGroup2025Services;

    // Apply search filter
    if (searchQuery) {
      services = searchServices(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      services = getServicesByCategory(selectedCategory as ZionService['category']);
    }

    // Apply price filter
    services = getServicesByPriceRange(priceRange[0], priceRange[1]);

    // Apply sorting
    services = [...services].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return services;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'bg-gray-500' },
    { id: 'AI Solutions', name: 'AI Solutions', icon: Brain, color: 'bg-purple-500' },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Zap, color: 'bg-blue-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'bg-red-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'bg-green-500' },
    { id: 'Industry Specific', name: 'Industry Specific', icon: Target, color: 'bg-orange-500' },
    { id: 'Emerging Tech', name: 'Emerging Tech', icon: Lightbulb, color: 'bg-indigo-500' }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    if (categoryData) {
      const IconComponent = categoryData.icon;
      return <IconComponent className="w-5 h-5" />;
    }
    return <Globe className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.color || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-200">
              2025 Comprehensive Services
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our cutting-edge suite of AI-powered micro SAAS solutions, 
            enterprise-grade cybersecurity, and innovative emerging technology services 
            designed to transform your business and drive innovation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-2 text-white bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/30">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-white bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/30">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 text-white bg-green-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-400/30">
              <MapPin className="w-5 h-5" />
              <span>Middletown DE 19709</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="all">All Categories</option>
                  {categories.slice(1).map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* Price Range */}
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-300">per {service.billing}</div>
                    </div>
                  </div>

                  {/* Service Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  {/* Category Badge */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)} text-white`}>
                      {service.category}
                    </span>
                  </div>

                  {/* Key Features Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.slice(0, 3).map((audience, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 mb-4"
                  >
                    {expandedService === service.id ? 'Show Less' : service.ctaLabel}
                  </button>

                  {/* Contact Information */}
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Ready to get started?</div>
                    <div className="flex justify-center space-x-4 text-xs text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3" />
                        <span>{service.contactInfo.mobile}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/20"
                      >
                        {/* Full Features List */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Complete Feature List</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Full Benefits List */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Complete Benefits</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                                <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.useCases.map((useCase, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                                <Target className="w-4 h-4 text-orange-400 flex-shrink-0" />
                                <span>{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
                          <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-blue-400" />
                              <span>{service.contactInfo.mobile}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-green-400" />
                              <span>{service.contactInfo.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-red-400" />
                              <span>{service.contactInfo.address}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <ExternalLink className="w-4 h-4 text-purple-400" />
                              <a 
                                href={service.contactInfo.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline"
                              >
                                {service.contactInfo.website}
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

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange([0, 10000]);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can drive your business forward. 
              Contact us today for a personalized consultation and demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Visit us at: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionTechGroup2025ComprehensiveShowcase;