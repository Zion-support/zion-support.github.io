import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/comprehensiveServices';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database,
  Lock,
  Globe,
  Cpu,
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [...COMPREHENSIVE_SERVICES];
  
  const categories = ['all', ...SERVICE_CATEGORIES];
  const subcategories = ['all', ...SERVICE_SUBCATEGORIES];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
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
      case 'AI & Machine Learning': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & Infrastructure': return Cloud;
      case 'Data & Analytics': return Database;
      case 'Digital Transformation': return Sparkles;
      case 'Web & Mobile Development': return Globe;
      case 'IT Support & Consulting': return Users;
      case 'Blockchain & Web3': return Lock;
      case 'Internet of Things': return Cpu;
      case 'Voice AI': return Brain;
      case 'Quantum Security': return Shield;
      case 'Content Creation': return Sparkles;
      case 'Identity Management': return Lock;
      case 'Sales Intelligence': return TrendingUp;
      case 'Incident Response': return Shield;
      case 'Customer Analytics': return Database;
      case 'Supply Chain': return Target;
      case 'HR Technology': return Users;
      case 'Financial Security': return Shield;
      case 'Storage Solutions': return Database;
      case 'Customer Experience': return Users;
      case 'Zero Trust Security': return Shield;
      case 'NFT Platform': return Lock;
      case 'DeFi Services': return TrendingUp;
      case 'Security Testing': return Shield;
      case 'Process Automation': return Zap;
      case 'Governance': return Award;
      default: return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return 'neon-cyan';
      case 'Cybersecurity': return 'neon-red';
      case 'Cloud & Infrastructure': return 'neon-blue';
      case 'Data & Analytics': return 'neon-green';
      case 'Digital Transformation': return 'neon-purple';
      case 'Blockchain & Web3': return 'neon-orange';
      case 'Voice AI': return 'neon-pink';
      case 'Quantum Security': return 'neon-yellow';
      default: return 'neon-cyan';
    }
  };

  return (
    <div className="min-h-screen futuristic-bg text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 quantum-mesh opacity-30"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-500 text-xs animate-matrix-rain opacity-20"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text neon-cyan">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
          </p>
          
          {/* Contact Information */}
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">Phone</span>
                <span className="text-cyan-300 font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">Email</span>
                <span className="text-cyan-300 font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">Address</span>
                <span className="text-cyan-300 font-medium text-xs">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search Bar */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 futuristic-input"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full futuristic-input"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Subcategory Filter */}
              <div>
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="w-full futuristic-input"
                >
                  {subcategories.map(subcategory => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory === 'all' ? 'All Subcategories' : subcategory}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Sort Options */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-400">Sort by:</span>
                {[
                  { value: 'name', label: 'Name' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'category', label: 'Category' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`px-3 py-1 rounded-lg transition-colors duration-200 ${
                      sortBy === option.value
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : 'text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="futuristic-card group"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${categoryColor} to-${categoryColor}/50 rounded-xl flex items-center justify-center`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-gray-400">per {service.pricingModel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                      {service.subcategory}
                    </span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Shield className="w-3 h-3 mr-1" />
                      <span>{service.supportLevel}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{service.targetAudience.length} audiences</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Target className="w-3 h-3 mr-1" />
                      <span>{service.useCases.length} use cases</span>
                    </div>
                  </div>

                  {/* Market Price */}
                  <div className="mb-6 p-3 bg-black/20 rounded-lg border border-cyan-500/20">
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">Market Price Range</div>
                      <div className="text-lg font-bold text-cyan-400">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    <Link
                      to="/contact"
                      className="flex-1 futuristic-btn neon-glow neon-cyan text-center"
                    >
                      Get Quote
                    </Link>
                    <button className="px-4 py-2 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
              }}
              className="futuristic-btn neon-glow neon-cyan"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Services Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text neon-cyan">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">Cutting-edge AI and quantum technologies that keep you ahead of the competition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Excellence</h3>
                <p className="text-gray-300">Trusted by enterprises worldwide with a track record of successful implementations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">24/7 expert support and dedicated success managers for your business</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
