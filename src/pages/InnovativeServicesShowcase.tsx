import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Target,
  Rocket,
  Cpu,
  Lock,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

export function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...ADVANCED_ENTERPRISE_SOLUTIONS,
    ...SPECIALIZED_IT_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'featured':
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Content Creation':
      case 'AI & Customer Service':
      case 'AI & Sales Intelligence':
      case 'AI & Financial Technology':
      case 'AI & Healthcare Technology':
        return Brain;
      case 'Quantum Computing':
        return Zap;
      case 'Cybersecurity':
        return Shield;
      case 'Cloud & FinOps':
      case 'Cloud & Infrastructure':
        return Cloud;
      case 'DevOps & CI/CD':
        return Code;
      case 'Data & Analytics':
        return BarChart3;
      case 'IoT & Edge Computing':
        return Network;
      case 'API & Integration':
        return Globe;
      case 'Blockchain & Web3':
        return Cpu;
      case '5G & Networking':
        return Network;
      default:
        return Lightbulb;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Content Creation':
      case 'AI & Customer Service':
      case 'AI & Sales Intelligence':
      case 'AI & Financial Technology':
      case 'AI & Healthcare Technology':
        return 'from-purple-500 to-pink-500';
      case 'Quantum Computing':
        return 'from-blue-500 to-cyan-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'Cloud & FinOps':
      case 'Cloud & Infrastructure':
        return 'from-blue-500 to-indigo-500';
      case 'DevOps & CI/CD':
        return 'from-green-500 to-teal-500';
      case 'Data & Analytics':
        return 'from-yellow-500 to-orange-500';
      case 'IoT & Edge Computing':
        return 'from-green-500 to-blue-500';
      case 'API & Integration':
        return 'from-purple-500 to-blue-500';
      case 'Blockchain & Web3':
        return 'from-orange-500 to-red-500';
      case '5G & Networking':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro SAAS services, enterprise solutions, and specialized IT services designed to transform your business with the latest technology innovations
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-4 rounded-lg border transition-all ${
                    viewMode === 'grid' 
                      ? 'border-zion-cyan bg-zion-cyan/20' 
                      : 'border-zion-cyan/30 hover:border-zion-cyan/60'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 w-6 h-6">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-4 rounded-lg border transition-all ${
                    viewMode === 'list' 
                      ? 'border-zion-cyan bg-zion-cyan/20' 
                      : 'border-zion-cyan/30 hover:border-zion-cyan/60'
                  }`}
                >
                  <div className="flex flex-col gap-1 w-6 h-6">
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category);
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
                    isActive
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zion-cyan/30 text-zion-slate-light hover:border-zion-cyan/60 hover:text-zion-cyan'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="capitalize">{category === 'all' ? 'All Services' : category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'space-y-6'
          } gap-6`}
        >
          <AnimatePresence>
            {sortedServices.map((service) => {
              const Icon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  layout
                  className={`group relative ${
                    viewMode === 'grid' 
                      ? 'bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300'
                      : 'bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300'
                  }`}
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-zion-slate-light capitalize">{service.category}</span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-zion-cyan" />
                    <span className="text-2xl font-bold text-white">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <span className="text-zion-slate-light">/{service.pricingModel}</span>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-zion-cyan">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-zion-cyan/20 text-zion-cyan rounded-full border border-zion-cyan/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Users className="w-4 h-4" />
                      <span>{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-green-400">
                      <Target className="w-4 h-4" />
                      <span className="text-sm font-semibold">ROI: {service.roi}</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-4 p-3 bg-zion-blue-light/20 rounded-lg">
                    <div className="flex items-center gap-2 text-zion-cyan mb-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-semibold">Contact Us</span>
                    </div>
                    <div className="text-xs text-zion-slate-light space-y-1">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20 p-8 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our team of experts help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-6 text-zion-slate-light">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}