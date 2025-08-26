import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  Play, 
  Phone, 
  Mail, 
  Globe,
  Zap,
  Shield,
  Cloud,
  Brain,
  MessageSquare,
  Wrench,
  Rocket,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Headphones
} from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '../data/enhanced-services';
import { SEO } from '../components/SEO';

export default function ComprehensiveServicesPage() {
  const [services, setServices] = useState(ENHANCED_SERVICES);
  const [filteredServices, setFilteredServices] = useState(ENHANCED_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState('grid');
  const [showFeatures, setShowFeatures] = useState({});

  // Filter and search services
  useEffect(() => {
    let filtered = services;
    
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );
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
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });
    
    setFilteredServices(filtered);
  }, [services, selectedCategory, searchQuery, sortBy]);

  const toggleFeatures = (serviceId) => {
    setShowFeatures(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const getCategoryIcon = (category) => {
    const categoryMap = {
      'AI & ML': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Cloud & Infrastructure': <Cloud className="w-5 h-5" />,
      'Business Intelligence': <Zap className="w-5 h-5" />,
      'Communication': <MessageSquare className="w-5 h-5" />,
      'Specialized Tools': <Tool className="w-5 h-5" />,
      'Emerging Tech': <Rocket className="w-5 h-5" />
    };
    return categoryMap[category] || <Globe className="w-5 h-5" />;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'AI & ML': 'from-zion-cyan to-zion-blue',
      'Cybersecurity': 'from-red-500 to-red-700',
      'Cloud & Infrastructure': 'from-blue-500 to-blue-700',
      'Business Intelligence': 'from-green-500 to-green-700',
      'Communication': 'from-purple-500 to-purple-700',
      'Specialized Tools': 'from-yellow-500 to-yellow-700',
      'Emerging Tech': 'from-pink-500 to-pink-700'
    };
    return colorMap[category] || 'from-zion-cyan to-zion-purple';
  };

  const getCategoryStats = (category) => {
    const categoryServices = services.filter(service => service.category === category);
    const avgRating = categoryServices.reduce((sum, service) => sum + service.rating, 0) / categoryServices.length;
    const avgPrice = categoryServices.reduce((sum, service) => sum + service.price, 0) / categoryServices.length;
    
    return {
      count: categoryServices.length,
      avgRating: avgRating.toFixed(1),
      avgPrice: Math.round(avgPrice)
    };
  };

  return (
    <div className="min-h-screen futuristic-bg">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Explore our complete portfolio of micro SAAS services, AI solutions, and IT services. From AI content generation to quantum computing simulation."
        keywords="comprehensive services, micro SAAS, AI solutions, IT services, cybersecurity, cloud computing, Zion Tech Group"
        url="https://ziontechgroup.com/comprehensive-services"
      />
      
      {/* Matrix Rain Background */}
      <div className="matrix-rain"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="futuristic-title text-5xl md:text-7xl mb-6">
              Comprehensive Services
            </h1>
            <p className="futuristic-subtitle text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Your one-stop destination for cutting-edge AI solutions, micro SAAS services, 
              and comprehensive IT services designed to accelerate your business transformation
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold neon-glow-cyan mb-2">{services.length}+</div>
                <div className="text-zion-slate-light">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-glow-purple mb-2">{SERVICE_CATEGORIES.length}</div>
                <div className="text-zion-slate-light">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-glow-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-glow-purple mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 bg-zion-blue-dark/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="futuristic-title text-4xl md:text-5xl mb-6">
              Service Categories
            </h2>
            <p className="futuristic-subtitle text-xl max-w-3xl mx-auto">
              Explore our services organized by category to find the perfect solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category, index) => {
              const stats = getCategoryStats(category.label);
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="futuristic-card hover-lift cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.label}</h3>
                    <p className="text-zion-slate-light">{stats.count} services available</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Avg Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{stats.avgRating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Avg Price:</span>
                      <span className="text-zion-cyan font-medium">${stats.avgPrice}/mo</span>
                    </div>
                  </div>

                  <button
                    className="w-full px-4 py-2 bg-zion-cyan text-black rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300 font-medium"
                  >
                    View Services
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-zion-blue-dark/30 backdrop-blur-md border-b border-zion-cyan/20">
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
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-cyan text-black'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/20'
                }`}
              >
                All Categories
              </button>
              {SERVICE_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-black'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/20'
                  }`}
                >
                  {category.icon} {category.label}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-zion-slate-dark/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-zion-cyan text-black' : 'text-zion-slate-light'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-zion-cyan text-black' : 'text-zion-slate-light'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'futuristic-grid' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`futuristic-card hover-lift hover-glow ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row gap-6' : ''
                  }`}
                >
                  {/* Service Image */}
                  <div className={`${viewMode === 'list' ? 'lg:w-1/3' : 'mb-4'}`}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {service.category}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                          AI Score: {service.aiScore}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`flex-1 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-white">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    <p className="text-zion-slate-light mb-4 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <button
                        onClick={() => toggleFeatures(service.id)}
                        className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 mb-2"
                      >
                        <span className="text-sm font-semibold">
                          {showFeatures[service.id] ? 'Hide' : 'Show'} Key Features
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                          showFeatures[service.id] ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {showFeatures[service.id] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                          >
                            <div className="flex flex-wrap gap-2">
                              {service.features?.map((feature, idx) => (
                                <span key={idx} className="px-2 py-1 bg-zion-blue/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 4).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price?.toLocaleString()}
                        <span className="text-sm font-normal text-zion-slate-light ml-1">
                          {service.pricingModel}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Link
                          to={service.demoUrl}
                          className="px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors duration-300 flex items-center gap-2"
                        >
                          <Play className="w-4 h-4" />
                          Demo
                        </Link>
                        <Link
                          to="/contact"
                          className="px-4 py-2 bg-zion-cyan text-black rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300 flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Contact
                        </Link>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Phone className="w-4 h-4" />
                          <span>{service.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Mail className="w-4 h-4" />
                          <span>{service.contactEmail}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-blue-dark/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="futuristic-title text-4xl md:text-5xl mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="futuristic-subtitle text-xl max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="futuristic-card text-center hover-lift"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-zion-slate-light text-sm">
                Industry-leading solutions with proven track records and customer success stories
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="futuristic-card text-center hover-lift"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-zion-slate-light text-sm">
                Cutting-edge AI and emerging technologies to keep you ahead of the competition
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="futuristic-card text-center hover-lift"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dedicated Support</h3>
              <p className="text-zion-slate-light text-sm">
                Personalized service with dedicated account managers and 24/7 technical support
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="futuristic-card text-center hover-lift"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ROI Focused</h3>
              <p className="text-zion-slate-light text-sm">
                Measurable business outcomes and rapid return on investment for all solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="futuristic-title text-4xl md:text-5xl mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="futuristic-subtitle text-xl mb-12">
              Get in touch with our team to discuss your needs and discover how our comprehensive services can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">{CONTACT_INFO.phone}</p>
                <p className="text-zion-slate-light text-sm">{CONTACT_INFO.hours}</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-zion-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">{CONTACT_INFO.email}</p>
                <p className="text-zion-slate-light text-sm">24/7 Support Available</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">{CONTACT_INFO.address}</p>
                <p className="text-zion-slate-light text-sm">Main Office</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="futuristic-btn px-8 py-4 text-lg"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}