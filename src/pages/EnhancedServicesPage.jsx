import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud,
  Brain,
  Lock,
  Database,
  BarChart3,
  MessageSquare,
  Wrench,
  Atom,
  Link2,
  Radio,
  Eye,
  DollarSign,
  Heart,
  BookOpen,
  Leaf,
  Truck,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, MARKET_COMPARISON } from '../data/enhancedServices';

export default function EnhancedServicesPage() {
  const [services, setServices] = useState(ENHANCED_SERVICES);
  const [filteredServices, setFilteredServices] = useState(ENHANCED_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState('grid');
  const [expandedService, setExpandedService] = useState(null);

  // Filter and sort services
  useEffect(() => {
    let filtered = services;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.split('-')[0]) ||
        service.category.toLowerCase().includes(selectedCategory.split('-')[1])
      );
    }

    // Pricing filter
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => {
        const price = service.price;
        switch (selectedPricing) {
          case 'free': return price === 0;
          case 'starter': return price >= 1 && price <= 50;
          case 'professional': return price >= 51 && price <= 200;
          case 'enterprise': return price >= 201;
          default: return true;
        }
      });
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating': return b.rating - a.rating;
        case 'price': return a.price - b.price;
        case 'aiScore': return b.aiScore - a.aiScore;
        case 'newest': return new Date(b.createdAt) - new Date(a.createdAt);
        default: return 0;
      }
    });

    setFilteredServices(filtered);
  }, [services, selectedCategory, selectedPricing, searchQuery, sortBy]);

  const getCategoryIcon = (category) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => 
      cat.id === category.toLowerCase().replace(/\s+/g, '-') ||
      cat.label.toLowerCase().includes(category.toLowerCase())
    );
    return categoryData?.icon || '🔧';
  };

  const getMarketPrice = (serviceId) => {
    const marketData = MARKET_COMPARISON[serviceId];
    return marketData?.avgPrice || 'Contact for pricing';
  };

  const toggleServiceExpansion = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Enhanced IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive collection of micro SAAS, IT, and AI services. From AI content generation to quantum computing, we have solutions for every business need." 
        keywords="micro SAAS, IT services, AI services, technology solutions, Zion Tech Group" 
        url="https://ziontechgroup.com/enhanced-services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Enhanced{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of micro SAAS, IT, and AI services. 
              From AI content generation to quantum computing, we have innovative solutions for every business need.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/contact">
                <Button className="group px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25 flex items-center gap-3">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-3">
                  View All Services
                  <Globe className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">{ENHANCED_SERVICES.length}+</div>
                <div className="text-zion-slate-light">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-purple mb-2">{SERVICE_CATEGORIES.length}</div>
                <div className="text-zion-slate-light">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-purple mb-2">24/7</div>
                <div className="text-zion-slate-light">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-cyan/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              >
                All Categories
              </Button>
              {SERVICE_CATEGORIES.slice(0, 8).map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                  <span className="ml-2 text-xs bg-zion-cyan/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>

            {/* Pricing Filter */}
            <div className="flex gap-2">
              {PRICING_TIERS.map((tier) => (
                <Button
                  key={tier.id}
                  variant={selectedPricing === tier.id ? 'default' : 'outline'}
                  onClick={() => setSelectedPricing(tier.id)}
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-sm"
                >
                  {tier.label}
                </Button>
              ))}
            </div>

            {/* Sort and View */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>
              </select>
              
              <div className="flex border border-zion-cyan/20 rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('grid')}
                  className="rounded-none border-0"
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('list')}
                  className="rounded-none border-0"
                >
                  List
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {ENHANCED_SERVICES.length} available services
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {getCategoryIcon(service.category)} {service.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                        AI Score: {service.aiScore}
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-zion-blue/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-zion-purple">
                        ${service.price?.toLocaleString()}
                        <span className="text-sm text-zion-slate-light font-normal">/{service.pricing}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium text-white">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    {/* Market Comparison */}
                    <div className="mb-4 p-3 bg-zion-blue/10 rounded-lg border border-zion-cyan/20">
                      <div className="text-xs text-zion-slate-light mb-1">Market Price:</div>
                      <div className="text-sm text-zion-cyan font-medium">
                        {getMarketPrice(service.id)}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => toggleServiceExpansion(service.id)}
                        variant="outline"
                        className="flex-1 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                      >
                        {expandedService === service.id ? 'Less' : 'More'} Details
                      </Button>
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/80 hover:to-zion-purple/80">
                          Get Quote
                        </Button>
                      </Link>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-zion-cyan/20"
                        >
                          {/* Features */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features?.slice(0, 3).map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                                  <CheckCircle className="w-3 h-3 text-zion-cyan" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {service.benefits?.slice(0, 2).map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                                  <Zap className="w-3 h-3 text-zion-cyan" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Author */}
                          <div className="flex items-center gap-3 p-3 bg-zion-blue/10 rounded-lg">
                            <img
                              src={service.author.avatarUrl}
                              alt={service.author.name}
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <div className="text-sm font-medium text-white">{service.author.name}</div>
                              <div className="text-xs text-zion-slate-light">Verified Provider</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-6">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Image */}
                    <div className="lg:w-48 lg:h-32 flex-shrink-0">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                              {getCategoryIcon(service.category)} {service.category}
                            </span>
                            <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full border border-zion-purple/30">
                              AI Score: {service.aiScore}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-semibold text-white mb-3">
                            {service.title}
                          </h3>
                          
                          <p className="text-zion-slate-light mb-4">
                            {service.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.map((tag, index) => (
                              <span key={index} className="px-3 py-1 bg-zion-blue/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/20">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="lg:w-48 flex-shrink-0">
                          <div className="text-3xl font-bold text-zion-purple mb-2">
                            ${service.price?.toLocaleString()}
                            <span className="text-lg text-zion-slate-light font-normal">/{service.pricing}</span>
                          </div>
                          
                          <div className="flex items-center gap-1 mb-3">
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            <span className="font-medium text-white">{service.rating}</span>
                            <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                          </div>

                          <div className="space-y-2">
                            <Button
                              onClick={() => toggleServiceExpansion(service.id)}
                              variant="outline"
                              className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                            >
                              {expandedService === service.id ? 'Less' : 'More'} Details
                            </Button>
                            <Link to="/contact">
                              <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/80 hover:to-zion-purple/80">
                                Get Quote
                              </Button>
                            </Link>
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
                            className="mt-6 pt-6 border-t border-zion-cyan/20"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {/* Features */}
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                <ul className="space-y-2">
                                  {service.features?.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Benefits */}
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                                <ul className="space-y-2">
                                  {service.benefits?.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                                      <Zap className="w-4 h-4 text-zion-cyan" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Use Cases & Integration */}
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                                <ul className="space-y-2">
                                  {service.useCases?.slice(0, 4).map((useCase, index) => (
                                    <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                                      {useCase}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Market Comparison */}
                            <div className="mt-6 p-4 bg-zion-blue/10 rounded-lg border border-zion-cyan/20">
                              <h4 className="text-lg font-semibold text-white mb-3">Market Comparison</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <div className="text-sm text-zion-slate-light mb-1">Our Price:</div>
                                  <div className="text-2xl font-bold text-zion-cyan">
                                    ${service.price?.toLocaleString()}/{service.pricing}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm text-zion-slate-light mb-1">Market Average:</div>
                                  <div className="text-xl font-medium text-zion-purple">
                                    {getMarketPrice(service.id)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all available services
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPricing('all');
                  setSearchQuery('');
                }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white"
              >
                View All Services
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
