<<<<<<< HEAD
import React, { useState, useEffect } from 'react.ts';
import { motion, AnimatePresence              } from 'framer-motion.ts';
import { Search,
  Filter,
  Star,
  ArrowRight,
  ChevronDown,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  Lock,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
=======
import React, { useState              } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Lock,
  Cloud,
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Phone,
  Mail,
<<<<<<< HEAD
  MapPin,
  Target,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  FileText,
  MessageCircle,
  Calendar,
  Settings,
  Monitor,
  Truck,
  Car,
  Clipboard,
  Link,
  Microscope,
  X,
  Atom,
  Heart,
  Leaf
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025              } from '../data/innovativeMicroSaasServices2025';

interface ServiceContact {













  mobile: string;
  email: string;
  address: string;
  website: string;

const ComprehensiveServicesShowcase2025: React.FC = (): JSX.Element => {;
  const [activeCategory, setActiveCategory] = useState('all');
=======
  MapPin













} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025(...args: any[]): any {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];

<<<<<<< HEAD
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesInnovation = innovationLevel === 'all' || service.innovationLevel === innovationLevel;

    return matchesCategory && matchesSearch && matchesPrice && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        const innovationOrder = { 'Breakthrough': 3, 'Revolutionary': 2, 'Advanced': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;

  });

  const handleServiceClick = (service: anyanyanyanyanyanyanyanyanyanyanyanyany)              => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1


  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"


=======
  const categories = ['all', ...new Set(allServices.map(service => service.category))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $1,000/month' },
    { value: 'medium', label: '$1,000 - $5,000/month' },
    { value: 'high', label: '$5,000 - $15,000/month' },
    { value: 'premium', label: 'Over $15,000/month' }
  ];

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2025
    .filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          return getInnovationScore(b.innovationLevel) - getInnovationScore(a.innovationLevel);
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseFloat(b.roi.split('%')[0]) - parseFloat(a.roi.split('%')[0]);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const getPriceRange = (price: anyanyanyanyanyanyanyanyanyanyanyanyanynumber)              => {
    if (price < 1000) return 'low';
    if (price < 5000) return 'medium';
    if (price < 15000) return 'high';
    return 'premium';
  };

  const getPriceRangeColor = (range: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (range) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'high': return 'bg-yellow-100 text-yellow-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  return (
    <div className="min-h-screen py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="mb-8"

            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive AI Services Showcase 2025
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              Comprehensive AI Services Showcase 2025
            </h2>
            <p className="text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge AI-powered micro SAAS services,
              designed to transform your business and drive innovation across all industries.
=======
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>REVOLUTIONARY SERVICES 2025</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge micro SAAS, IT, and AI services that are revolutionizing industries.
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-400 text-sm">Average 400-1500% return on investment across all services</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-400 text-sm">SOC 2, ISO 27001, HIPAA, and industry-specific compliance</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-400 text-sm">2-16 weeks implementation with expert support and training</p>
              </div>
            </div>
          </motion.div>
        </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
<<<<<<< HEAD
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"

                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="innovation">Innovation Level</option>
=======
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category              => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
<<<<<<< HEAD
              <div className="flex bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}

                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}

                  List
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Innovation Level */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Innovation Level
              </label>
              <select
                value={innovationLevel}
                onChange={(e) => setInnovationLevel(e.target.value)}
                className="w-full px-3 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"

                <option value="all">All Levels</option>
                <option value="Breakthrough">Breakthrough</option>
                <option value="Revolutionary">Revolutionary</option>
                <option value="Advanced">Advanced</option>
=======
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range              => (
                  <option key={range.value} value={range.value} className="bg-slate-800 text-white">
                    {range.label}
                  </option>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </select>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate hover:text-white border border-zion-slate-light/20'
                }`}

                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}

            {sortedServices.map((service, index)              => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  viewMode === 'list' ? 'p-6' : 'p-6'
                }`}
                onClick={() => handleServiceClick(service)}

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">/month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Category:</span>
                    <span className="text-sm text-white font-medium">{service.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Innovation:</span>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      service.innovationLevel === 'Breakthrough' ? 'bg-red-500/20 text-red-400' :
                      service.innovationLevel === 'Revolutionary' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">ROI:</span>
                    <span className="text-sm text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zion-slate-light/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Delivery:</span>
                    <span className="text-sm text-white">{service.estimatedDelivery}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-12">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-First Approach",
                description: "Every solution is built with cutting-edge AI at its core, ensuring maximum efficiency and innovation."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with SOC 2 compliance, ensuring your data and operations are always protected."
              },
              {
                icon: Zap,
                title: "Rapid Implementation",
                description: "Get up and running in weeks, not months, with our proven implementation methodology."

            ].map((feature, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"

                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our AI-powered solutions can drive your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Globe className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">ziontechgroup.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-zion-slate-light text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-zion-slate-light hover:text-white transition-colors"

                    <X className="w-6 h-6" />
=======
      </div>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index)              => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} rounded-lg flex items-center justify-center`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-semibold text-sm">{service.innovationLevel}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Pricing & ROI */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Market Price</span>
                  </div>
                  <p className="text-white font-bold">{service.marketPrice}</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">ROI</span>
                  </div>
                  <p className="text-white font-bold">{service.roi}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 5 && (
                    <div className="text-sm text-gray-500 mt-2">
                      +{service.features.length - 5} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits & Use Cases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Quote
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  </button>
                  <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Delivery & Support */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold text-sm">Delivery</span>
                  </div>
                  <p className="text-white text-sm">{service.estimatedDelivery}</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold text-sm">Support</span>
                  </div>
                  <p className="text-white text-sm">{service.supportLevel}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  to={`/services/${service.id}`}
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-transparent text-cyan-400 px-4 py-3 rounded-lg font-semibold border border-cyan-400 hover:bg-cyan-400/10 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Trends Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Market Trends & Opportunities 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Market Growth</h3>
                <p className="text-cyan-100">50% annual growth rate in AI-powered solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Market Size</h3>
                <p className="text-cyan-100">$800B+ AI market by 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Adoption Rate</h3>
                <p className="text-cyan-100">85% of enterprises adopting AI by 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ROI Potential</h3>
                <p className="text-cyan-100">400-1500% average ROI on AI investments</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Success Stories & Case Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from businesses using our revolutionary technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Quantum Breakthrough</h3>
              <p className="text-gray-400 mb-4 text-center">
                "Our quantum AI platform solved a drug discovery problem in days that would have taken years on classical computers"
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <span className="text-green-400 font-semibold">1000x Faster</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Edge AI Success</h3>
              <p className="text-gray-400 mb-4 text-center">
                "Our autonomous vehicle response time improved by 90% with edge AI processing"
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <span className="text-blue-400 font-semibold">90% Faster Response</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Trading Success</h3>
              <p className="text-gray-400 mb-4 text-center">
                "Our trading performance improved by 35% using AI signals and automated strategies"
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                  <span className="text-purple-400 font-semibold">35% Performance Gain</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary technology solutions to drive growth, 
              reduce costs, and gain competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-cyan-500/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-cyan-100">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default ComprehensiveServicesShowcase2025;
}}}}}}}}
=======
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
