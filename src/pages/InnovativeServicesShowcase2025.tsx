import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Star, Zap, TrendingUp, Users, Clock, Shield, Globe, Rocket, Phone, Mail, MapPin } from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/innovativeServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'aiScore'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

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
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return Zap;
      case 'IT Services':
        return Shield;
      case 'Micro SaaS':
        return Rocket;
      case 'Emerging Tech':
        return Globe;
      default:
        return TrendingUp;
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return `${currency}${price.toLocaleString()}`;
  };

  const getAvailabilityBadge = (availability: string) => {
    const badges = {
      'available': { text: 'Available', color: 'bg-green-100 text-green-800' },
      'coming-soon': { text: 'Coming Soon', color: 'bg-yellow-100 text-yellow-800' },
      'beta': { text: 'Beta', color: 'bg-blue-100 text-blue-800' },
      'enterprise-only': { text: 'Enterprise', color: 'bg-purple-100 text-purple-800' }
    };
    return badges[availability as keyof typeof badges] || badges.available;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Innovative Services 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Discover cutting-edge AI, IT, Micro SaaS, and Emerging Technology solutions 
            that will transform your business in 2025 and beyond.
          </motion.p>
          
          {/* Contact Information Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <Phone className="w-5 h-5 mx-auto mb-2 text-blue-400" />
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-5 h-5 mx-auto mb-2 text-green-400" />
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                <p className="text-white font-semibold">Middletown, DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="aiScore">Sort by AI Score</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-white/10 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5 mx-auto" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5 mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Service Image */}
                  <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'h-48'} bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center`}>
                    {getCategoryIcon(service.category)({ className: 'w-16 h-16 text-white/60' })}
                  </div>

                  {/* Service Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className="text-2xl font-bold text-blue-400">
                          {formatPrice(service.price, service.currency)}
                        </span>
                        <span className="text-sm text-gray-400">per month</span>
                      </div>
                    </div>

                    {/* Category and Availability */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {service.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${getAvailabilityBadge(service.availability).color}`}>
                        {getAvailabilityBadge(service.availability).text}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-semibold text-white">{service.aiScore}</span>
                        </div>
                        <span className="text-xs text-gray-400">AI Score</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-semibold text-white">{service.rating}</span>
                        </div>
                        <span className="text-xs text-gray-400">Rating</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="w-4 h-4 text-blue-400 mr-1" />
                          <span className="text-sm font-semibold text-white">{service.reviewCount}</span>
                        </div>
                        <span className="text-xs text-gray-400">Reviews</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ROI and Implementation */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-400">ROI:</span>
                        <p className="text-green-400 font-semibold">{service.roi}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Implementation:</span>
                        <p className="text-blue-400 font-semibold">{service.implementationTime}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 rounded-md text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={service.website}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${service.contactEmail}`}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg border border-white/20 transition-colors"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Tiers
            </h2>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to learn more about our innovative services and how they can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;