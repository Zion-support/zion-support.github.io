import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  BarChart3,
  Building2,
  Car,
  Factory,
  Leaf,
  Palette,
  Briefcase,
  GraduationCap,
  Heart,
  Truck,
  ShoppingCart,
  Lightbulb,
  Wrench,
  Target,
  Award,
  Grid,
  List
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_CATALOG_2025, calculateCategoryCounts, getServicesByCategory } from '../data/comprehensiveServicesCatalog2025';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const stats = calculateCategoryCounts();

  // Filter and sort services
  const filteredServices = COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'budget' && service.price <= 1000) ||
      (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
      (selectedPriceRange === 'enterprise' && service.price > 5000 && service.price <= 15000) ||
      (selectedPriceRange === 'premium' && service.price > 15000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.launchDate || '2025-01-01').getTime() - 
               new Date(a.launchDate || '2025-01-01').getTime();
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, React.ComponentType<any>> = {
      'AI & Analytics': Brain,
      'AI & Business Intelligence': BarChart3,
      'AI & Customer Experience': Users,
      'AI & FinTech': DollarSign,
      'AI & Legal Tech': Building2,
      'AI & Healthcare': Heart,
      'AI & Education': GraduationCap,
      'AI & Real Estate': Building2,
      'AI & Marketing': Target,
      'AI & Supply Chain': Truck,
      'AI & Customer Service': MessageCircle,
      'AI & Sales': TrendingUp,
      'AI & Project Management': Briefcase,
      'AI & Business Automation': Zap,
      'AI & Robotics': Cpu,
      'AI & Space Tech': Rocket,
      'AI & Climate': Leaf,
      'AI & Content Creation': Palette,
      'AI & Human Resources': Users,
      'AI & Financial Services': DollarSign,
      'AI & Logistics': Truck,
      'AI & Manufacturing': Factory,
      'AI & Retail': ShoppingCart,
      'AI & Energy': Lightbulb,
      'AI & Transportation': Car,
      'AI & Agriculture': Leaf,
      'Quantum Computing': Atom,
      'Blockchain & Web3': Globe,
      'Cloud & DevOps': Cloud,
      'Cybersecurity': Shield,
      'Data & Analytics': Database,
      'Networking': Network,
      'Managed Services': Wrench,
      'Software Development': Code,
      'Digital Transformation': Rocket,
      'IoT & Edge Computing': Cpu,
      'Data Center': Server,
      'Training & Education': BookOpen
    };
    return iconMap[category] || Zap;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'AI & Analytics': 'from-zion-cyan to-zion-blue',
      'AI & Business Intelligence': 'from-zion-blue to-zion-purple',
      'AI & Customer Experience': 'from-zion-purple to-zion-pink',
      'AI & FinTech': 'from-zion-green to-zion-cyan',
      'AI & Legal Tech': 'from-zion-orange to-zion-red',
      'AI & Healthcare': 'from-zion-red to-zion-pink',
      'AI & Education': 'from-zion-blue to-zion-cyan',
      'AI & Real Estate': 'from-zion-green to-zion-blue',
      'AI & Marketing': 'from-zion-purple to-zion-cyan',
      'AI & Supply Chain': 'from-zion-orange to-zion-yellow',
      'AI & Customer Service': 'from-zion-cyan to-zion-green',
      'AI & Sales': 'from-zion-green to-zion-blue',
      'AI & Project Management': 'from-zion-blue to-zion-purple',
      'AI & Business Automation': 'from-zion-purple to-zion-pink',
      'AI & Robotics': 'from-zion-orange to-zion-red',
      'AI & Space Tech': 'from-zion-purple to-zion-blue',
      'AI & Climate': 'from-zion-green to-zion-cyan',
      'AI & Content Creation': 'from-zion-pink to-zion-purple',
      'AI & Human Resources': 'from-zion-blue to-zion-cyan',
      'AI & Financial Services': 'from-zion-green to-zion-blue',
      'AI & Logistics': 'from-zion-orange to-zion-yellow',
      'AI & Manufacturing': 'from-zion-red to-zion-orange',
      'AI & Retail': 'from-zion-purple to-zion-pink',
      'AI & Energy': 'from-zion-yellow to-zion-orange',
      'AI & Transportation': 'from-zion-blue to-zion-green',
      'AI & Agriculture': 'from-zion-green to-zion-yellow',
      'Quantum Computing': 'from-zion-purple to-zion-blue',
      'Blockchain & Web3': 'from-zion-cyan to-zion-green',
      'Cloud & DevOps': 'from-zion-blue to-zion-cyan',
      'Cybersecurity': 'from-zion-red to-zion-orange',
      'Data & Analytics': 'from-zion-cyan to-zion-blue',
      'Networking': 'from-zion-blue to-zion-purple',
      'Managed Services': 'from-zion-green to-zion-cyan',
      'Software Development': 'from-zion-purple to-zion-pink',
      'Digital Transformation': 'from-zion-orange to-zion-red',
      'IoT & Edge Computing': 'from-zion-cyan to-zion-green',
      'Data Center': 'from-zion-blue to-zion-cyan',
      'Training & Education': 'from-zion-green to-zion-blue'
    };
    return colorMap[category] || 'from-zion-cyan to-zion-blue';
  };

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Budget ($100 - $1,000)' },
    { id: 'mid-range', name: 'Mid-Range ($1,000 - $5,000)' },
    { id: 'enterprise', name: 'Enterprise ($5,000 - $15,000)' },
    { id: 'premium', name: 'Premium ($15,000+)' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' }
  ];

  return (
    <>
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="bg-futuristic min-h-[60vh] flex items-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
          </div>

          <div className="container-responsive relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-responsive font-bold mb-6">
                <span className="text-gradient">Comprehensive 2026</span>
                <br />
                <span className="text-white">Services & Solutions</span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Discover our complete portfolio of {stats.totalServices} innovative micro SAAS services, 
                IT solutions, and AI-powered platforms designed to transform your business.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{stats.totalServices}</div>
                  <div className="text-sm text-zion-slate-light">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">{stats.categories['AI & Analytics'] || 0}</div>
                  <div className="text-sm text-zion-slate-light">AI Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-green mb-2">{stats.categories['Cloud & DevOps'] || 0}</div>
                  <div className="text-sm text-zion-slate-light">IT Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-orange mb-2">{stats.categories['Cybersecurity'] || 0}</div>
                  <div className="text-sm text-zion-slate-light">Security</div>
                </div>
              </div>

              {/* Search and Filters */}
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services, features, or industries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {/* Category Filter */}
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-zion-cyan" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    >
                      <option value="all">All Categories</option>
                      {Object.entries(stats.categories)
                        .filter(([_, count]) => count > 0)
                        .map(([category, count]) => (
                          <option key={category} value={category}>
                            {category} ({count})
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-zion-cyan" />
                    <select
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    >
                      {priceRanges.map(range => (
                        <option key={range.id} value={range.id}>
                          {range.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Options */}
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    >
                      {sortOptions.map(option => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'bg-zion-slate-light/10 text-zion-slate-light'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'bg-zion-slate-light/10 text-zion-slate-light'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-zion-slate-light text-center mt-4">
                  Showing {sortedServices.length} of {stats.totalServices} services
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-zion-slate-dark">
          <div className="container-responsive">
            <AnimatePresence mode="wait">
              {sortedServices.length > 0 ? (
                <motion.div
                  className={viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "space-y-6"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      className={`card-futuristic group ${viewMode === 'list' ? 'flex items-start gap-6' : ''}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      {/* Service Header */}
                      <div className={viewMode === 'list' ? 'flex-shrink-0' : 'mb-6'}>
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}
                          >
                            {getCategoryIcon(service.category) &&
                              React.createElement(
                                getCategoryIcon(service.category),
                                { className: 'w-6 h-6 text-white' }
                              )}
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-zion-cyan">
                              ${service.price.toLocaleString()}
                            </div>
                            <div className="text-sm text-zion-slate-light">
                              per month
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-zion-slate-light leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Service Details */}
                      <div className={`space-y-4 ${viewMode === 'list' ? 'flex-1' : 'mb-6'}`}>
                        {/* Category & Innovation Level */}
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-cyan font-medium">
                            {service.category}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              service.innovationLevel === 'Cutting-edge'
                                ? 'bg-zion-cyan/20 text-zion-cyan'
                                : service.innovationLevel === 'Advanced'
                                ? 'bg-zion-purple/20 text-zion-purple'
                                : 'bg-zion-green/20 text-zion-green'
                            }`}
                          >
                            {service.innovationLevel}
                          </span>
                        </div>

                        {/* ROI & Market Price */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-zion-green">
                            <TrendingUp className="w-4 h-4" />
                            <span>ROI: {service.roi}</span>
                          </div>
                          <div className="text-zion-slate-light">
                            Market: {service.marketPrice}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-white">
                            Key Features:
                          </h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-zion-slate-light"
                              >
                                <CheckCircle className="w-3 h-3 text-zion-cyan" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Service Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                        <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.estimatedDelivery}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-zion-cyan" />
                            <span>{service.supportLevel}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={service.demoUrl || '#'}
                            className="btn-neon text-sm px-4 py-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                          <a
                            href={`/contact?service=${service.id}`}
                            className="btn-futuristic text-sm px-4 py-2"
                          >
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                  <p className="text-zion-slate-light mb-6">
                    Try adjusting your search criteria or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                    }}
                    className="btn-futuristic"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-zion-slate-dark">
          <div className="container-responsive">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Get in touch with our experts to discuss your specific needs and discover 
                how our innovative services can drive your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-futuristic text-lg px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="btn-neon text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 302 464 0950
                </a>
              </div>

              <div className="mt-8 text-zion-slate-light">
                <p className="mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  kleber@ziontechgroup.com
                </p>
                <p>
                  <MapPin className="w-4 h-4 inline mr-2" />
                  364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2026;