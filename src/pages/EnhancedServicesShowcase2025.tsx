import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Star,
  ArrowRight,
  Search,
  Filter,
  Grid3X3,
  List,
  TrendingUp,
  Clock,
  MapPin,
  DollarSign,
  CheckCircle,
  Sparkles,
  Leaf,
  Eye,
  Heart
} from 'lucide-react';
import { ENHANCED_SERVICES_2025, ENHANCED_SERVICE_CATEGORIES, ENTERPRISE_PRICING_TIERS } from '@/data/enhancedServices2025';
import { FuturisticAnimatedBackground } from '@/components/backgrounds/FuturisticAnimatedBackground';

export default function EnhancedServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore' | 'newest'>('newest');

  // Filter and sort services
  const filteredServices = ENHANCED_SERVICES_2025
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & ML':
        return Brain;
      case 'Cloud Services':
        return Cloud;
      case 'IoT Services':
        return Cpu;
      case 'Blockchain Services':
        return Shield;
      case 'Space Technology':
        return Rocket;
      default:
        return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & ML':
        return 'from-purple-500 to-pink-500';
      case 'Cloud Services':
        return 'from-blue-500 to-cyan-500';
      case 'IoT Services':
        return 'from-green-500 to-emerald-500';
      case 'Blockchain Services':
        return 'from-orange-500 to-red-500';
      case 'Space Technology':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark relative">
      {/* Futuristic animated background */}
      <FuturisticAnimatedBackground variant="quantum" intensity="medium" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Next-Gen
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Discover cutting-edge AI, quantum computing, and emerging technology solutions 
              that transform businesses and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold text-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-slate/50 border border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
              }`}
            >
              All Services
            </motion.button>
            {ENHANCED_SERVICE_CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate/50 border border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="relative py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-xl text-zion-slate-light placeholder-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-200"
              />
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-xl text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-200"
              >
                <option value="newest">Newest First</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="aiScore">AI Score</option>
              </select>

              <div className="flex bg-zion-slate/50 border border-zion-cyan/20 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${viewMode}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group ${
                    viewMode === 'grid'
                      ? 'bg-zion-slate/30 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20'
                      : 'bg-zion-slate/30 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20'
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.images[0]}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                          {service.featured && (
                            <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full flex items-center">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Featured
                            </span>
                          )}
                          <span className="px-2 py-1 bg-zion-cyan text-white text-xs font-semibold rounded-full">
                            AI {service.aiScore}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center space-x-2 text-white">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(service.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-white/30'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm">({service.reviewCount})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                            {service.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-zion-slate-light text-sm line-through">
                              ${service.marketPrice?.toLocaleString()}
                            </span>
                            <span className="text-zion-cyan font-bold text-lg">
                              ${service.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                          {service.title}
                        </h3>
                        
                        <p className="text-zion-slate-light mb-4 line-clamp-3">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-xs text-zion-slate-light"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{service.availability}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{service.location}</span>
                            </div>
                          </div>
                          
                          <Link
                            to={service.href}
                            className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center space-x-2"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View
                    <div className="flex items-center space-x-6">
                      <div className="relative w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={service.images[0]}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        {service.featured && (
                          <span className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full">
                            <Star className="w-3 h-3 fill-current" />
                          </span>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-200">
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-zion-slate-light text-sm line-through">
                              ${service.marketPrice?.toLocaleString()}
                            </span>
                            <span className="text-zion-cyan font-bold text-lg">
                              ${service.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-zion-slate-light mb-3 line-clamp-2">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{service.rating}</span>
                            <span>({service.reviewCount})</span>
                          </div>
                          <span className="px-2 py-1 bg-zion-cyan text-white rounded-full text-xs">
                            AI {service.aiScore}
                          </span>
                          <span>{service.availability}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {service.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-xs text-zion-slate-light"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Link
                            to={service.href}
                            className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center space-x-2"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-zion-slate/30 border border-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all services
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-medium transition-all duration-200"
              >
                View All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Enterprise
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                {" "}Solutions
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Scale your business with our enterprise-grade AI and technology solutions. 
              Custom implementations, dedicated support, and white-label options available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ENTERPRISE_PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 border-zion-cyan/50 shadow-2xl shadow-zion-cyan/20'
                    : 'bg-zion-slate/30 border-zion-cyan/20 hover:border-zion-cyan/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-zion-cyan">${tier.price.toLocaleString()}</span>
                    <span className="text-zion-slate-light">/{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40'
                    : 'border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join thousands of companies already leveraging our cutting-edge AI and technology solutions 
              to drive innovation and achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold text-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}