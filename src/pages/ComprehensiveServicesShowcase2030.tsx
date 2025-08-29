import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Globe, 
  Rocket,
  Heart,
  Leaf,
  Atom,
  Building,
  Users,
  Target,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Award,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  ShoppingCart,
  Lock,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle2,
  ArrowUpRight,
  Play,
  MailIcon,
  ChevronDown,
  ChevronUp,
  FilterX,
  Code,
  BookOpen
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesShowcase2030() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Filter and search services
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'ai-score':
        return b.aiScore - a.aiScore;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const currentServices = sortedServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categoryIcons: { [key: string]: any } = {
    'AI & Business Intelligence': Brain,
    'AI & Marketing': Target,
    'AI & Healthcare': Heart,
    'AI & Legal Tech': Scale,
    'AI & Real Estate': Building,
    'AI & Operations': Settings,
    'AI & Green Tech': Leaf,
    'AI & Autonomous Systems': Car,
    'AI & FinTech': DollarSign,
    'AI & Environmental Tech': Globe,
    'AI & Content': PenTool,
    'AI & Customer Support': Users,
    'AI & HR': Users,
    'AI & Research': Eye,
    'AI & Metaverse': Globe2,
    'AI & Space Tech': Rocket,
    'AI & Development': Code,
    'AI & Education': BookOpen,
    'AI & Entertainment': Play,
    'Cybersecurity': Shield,
    'Cloud & DevOps': Cloud,
    'Quantum Computing': Atom,
    'IoT & Edge Computing': Cpu,
    'Blockchain & Web3': Key,
    'Digital Twin': Globe,
    'Space Technology': Rocket,
    'Sustainable Technology': Leaf,
    'IT Infrastructure': Server,
    'Emerging Technology': Zap
  };

  const categoryColors: { [key: string]: string } = {
    'AI & Business Intelligence': 'from-purple-500 to-pink-500',
    'AI & Marketing': 'from-green-500 to-emerald-500',
    'AI & Healthcare': 'from-pink-500 to-red-500',
    'AI & Legal Tech': 'from-blue-500 to-indigo-500',
    'AI & Real Estate': 'from-yellow-500 to-orange-500',
    'AI & Operations': 'from-gray-500 to-slate-500',
    'AI & Green Tech': 'from-green-500 to-emerald-500',
    'AI & Autonomous Systems': 'from-cyan-500 to-blue-500',
    'AI & FinTech': 'from-emerald-500 to-green-500',
    'AI & Environmental Tech': 'from-teal-500 to-green-500',
    'AI & Content': 'from-orange-500 to-red-500',
    'AI & Customer Support': 'from-blue-500 to-purple-500',
    'AI & HR': 'from-indigo-500 to-blue-500',
    'AI & Research': 'from-purple-500 to-violet-500',
    'AI & Metaverse': 'from-purple-500 to-indigo-500',
    'AI & Space Tech': 'from-indigo-500 to-purple-500',
    'AI & Development': 'from-cyan-500 to-blue-500',
    'AI & Education': 'from-blue-500 to-indigo-500',
    'AI & Entertainment': 'from-purple-500 to-pink-500',
    'Cybersecurity': 'from-red-500 to-orange-500',
    'Cloud & DevOps': 'from-blue-500 to-cyan-500',
    'Quantum Computing': 'from-indigo-500 to-purple-500',
    'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
    'Blockchain & Web3': 'from-yellow-500 to-orange-500',
    'Digital Twin': 'from-blue-500 to-indigo-500',
    'Space Technology': 'from-purple-500 to-pink-500',
    'Sustainable Technology': 'from-green-500 to-teal-500',
    'IT Infrastructure': 'from-slate-500 to-gray-500',
    'Emerging Technology': 'from-violet-500 to-purple-500'
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('rating');
    setPriceRange([0, 50000]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2030 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI-powered micro SAAS services, IT solutions, and cutting-edge technology services. Transform your business with Zion Tech Group."
        keywords="AI services, micro SAAS, IT solutions, technology services, business transformation, Zion Tech Group"
        url="https://ziontechgroup.com/services/showcase-2030"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Revolutionary Services 2030
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of AI-powered micro SAAS services, cutting-edge IT solutions, 
              and innovative technology services designed to transform your business and drive exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>{COMPREHENSIVE_SERVICES_INDEX_2030.length}+ Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.8+ Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span>500%+ ROI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or capabilities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg text-white transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <button
                onClick={resetFilters}
                className="flex items-center space-x-2 px-4 py-3 bg-red-600 hover:bg-red-700 border border-red-600 rounded-lg text-white transition-colors"
              >
                <FilterX className="w-5 h-4" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES_2030.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="ai-score">Highest AI Score</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <div className="flex space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Results Summary */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-slate-300">
              Showing {currentServices.length} of {filteredServices.length} services
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </div>
            <div className="text-slate-300">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service) => {
              const IconComponent = categoryIcons[service.category] || Zap;
              const categoryColor = categoryColors[service.category] || 'from-gray-500 to-slate-500';
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                >
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${categoryColor}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      {service.featured && (
                        <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{service.rating}</span>
                        <span className="text-white/60">({service.reviewCount})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span>AI {service.aiScore}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-slate-300 mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">${service.price.toLocaleString()}</div>
                        <div className="text-xs text-slate-400">Starting Price</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                        <div className="text-xs text-slate-400">ROI</div>
                      </div>
                    </div>

                    {/* Setup Time */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.setupTime}</span>
                      </div>
                      <div className="text-sm text-slate-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                        Get Quote
                      </button>
                      <button className="px-4 py-2 border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get in touch with our experts to discuss how our innovative services can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="font-semibold">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="font-semibold">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Service Inquiry - Zion Tech Group`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
              >
                <MailIcon className="w-5 h-5" />
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center space-x-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}