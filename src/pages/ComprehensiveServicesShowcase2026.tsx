import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Heart, 
  Scale, 
  Users, 
  FileText, 
  ShoppingCart,
  Briefcase,
  BookOpen,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2026 } from '../data/advancedInnovativeServices2026';

export default function ComprehensiveServicesShowcase2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'name'>('name');

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const categories = ['All', ...Array.from(new Set(ADVANCED_INNOVATIVE_SERVICES_2026.map(service => service.category)))];

  const filteredServices = ADVANCED_INNOVATIVE_SERVICES_2026
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Cybersecurity':
        return Shield;
      case 'AI & Financial Services':
        return TrendingUp;
      case 'AI & Healthcare':
        return Heart;
      case 'AI & Legal Services':
        return Scale;
      case 'AI & Customer Experience':
        return Users;
      case 'AI & Content Creation':
        return FileText;
      case 'AI & Project Management':
        return Briefcase;
      case 'AI & Supply Chain':
        return ShoppingCart;
      case 'AI & Human Resources':
        return Users;
      case 'AI & Marketing':
        return TrendingUp;
      case 'AI & Education':
        return BookOpen;
      default:
        return Brain;
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }

    return services;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Cybersecurity':
        return 'from-red-600 to-orange-600';
      case 'AI & Financial Services':
        return 'from-green-600 to-emerald-600';
      case 'AI & Healthcare':
        return 'from-blue-600 to-cyan-600';
      case 'AI & Legal Services':
        return 'from-purple-600 to-pink-600';
      case 'AI & Customer Experience':
        return 'from-indigo-600 to-blue-600';
      case 'AI & Content Creation':
        return 'from-yellow-600 to-orange-600';
      case 'AI & Project Management':
        return 'from-teal-600 to-green-600';
      case 'AI & Supply Chain':
        return 'from-gray-600 to-slate-600';
      case 'AI & Human Resources':
        return 'from-pink-600 to-rose-600';
      case 'AI & Marketing':
        return 'from-violet-600 to-purple-600';
      case 'AI & Education':
        return 'from-cyan-600 to-blue-600';
      default:
        return 'from-gray-600 to-slate-600';
    }

    const categories = [...new Set(services.map(service => service.category))];
    return categories;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Innovative Services 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge AI-powered solutions, micro SaaS services, and innovative IT services designed to transform your business in 2026 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = getCategoryIcon(category);
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-purple-600 border-purple-500 text-white'
                          : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category}</span>
                    </button>
                  );
                })}
              </div>

              {/* View Mode and Sort */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'name')}
                  className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Advanced Services Available
            </h2>
            <p className="text-gray-300">
              Discover cutting-edge AI solutions designed to transform your business operations
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.currency}{service.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-300">per {service.pricingModel}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating || 4.5) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-300 ml-2">({service.rating || 4.5})</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <Zap className="w-3 h-3 text-yellow-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Market Price:</span>
                      <span className="text-white font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Delivery:</span>
                      <span className="text-white font-semibold">{service.estimatedDelivery}</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl text-center font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="w-full bg-white/10 border border-white/30 text-white py-3 px-4 rounded-xl text-center font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                          {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{service.currency}{service.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-300">per {service.pricingModel}</div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>

                      <div className="mb-4">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(service.rating || 4.5) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-300 ml-2">({service.rating || 4.5})</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                          <div className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-300">Market Price</div>
                          <div className="text-white font-semibold">{service.marketPrice}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-300">ROI</div>
                          <div className="text-green-400 font-semibold">{service.roi}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-300">Delivery</div>
                          <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-300">Support</div>
                          <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}`}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl text-center font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="flex-1 bg-white/10 border border-white/30 text-white py-3 px-6 rounded-xl text-center font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's discuss how our advanced AI services can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className="bg-white text-purple-600 py-3 px-8 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-white/20 text-white py-3 px-8 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
            <div className="mt-8 text-purple-100">
              <p className="text-lg font-semibold mb-2">Contact Information:</p>
              <div className="space-y-1">
                <p>📞 {contactInfo.phone}</p>
                <p>✉️ {contactInfo.email}</p>
                <p>📍 {contactInfo.address}</p>
                <p>🌐 <a href={contactInfo.website} className="underline hover:text-white">{contactInfo.website}</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEO 
        title="Comprehensive Services Showcase 2026 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, Micro SaaS, and IT Infrastructure services for 2026. Cutting-edge solutions with transparent pricing and proven ROI."
        keywords="AI services 2026, Micro SaaS 2026, IT infrastructure 2026, Zion Tech Group, innovative technology solutions"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Services Showcase 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge portfolio of AI-powered solutions, innovative Micro SaaS platforms, and modern IT infrastructure services. 
            All designed to drive digital transformation and deliver measurable business value in 2026 and beyond.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-gray-600">Innovative Services</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">$500B+</div>
            <div className="text-gray-600">Total Market Size</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">400%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {getCategories().map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center mb-8"
        >
          <button
            onClick={() => setActiveTab('microsaas')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
              activeTab === 'microsaas'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            Micro SaaS Services (10)
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
              activeTab === 'ai'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            AI Services (10)
          </button>
          <button
            onClick={() => setActiveTab('infrastructure')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
              activeTab === 'infrastructure'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            IT Infrastructure (10)
          </button>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {getFilteredServices().map((service) => renderServiceCard(service))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white mt-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6 opacity-90">
            Contact Zion Tech Group today to discuss how our innovative services can drive your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/comprehensive-pricing-guide-2026"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2026;