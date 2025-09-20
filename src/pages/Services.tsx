import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageCircle,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Truck,
  Atom,
  Scale,
  BookOpen,
  PenTool,
  Play,
  GitFork,
  Server,
  Building,
  Factory,
  Car,
  Settings
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_2030 } from '../data/comprehensiveServices2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Get unique categories from services
  const categories = [
    { 
      id: 'all', 
      name: 'All Services', 
      count: COMPREHENSIVE_SERVICES_2030.length, 
      icon: '🚀', 
      color: 'from-cyan-500 to-blue-500' 
    },
    { 
      id: 'AI & Business Intelligence', 
      name: 'AI & Business Intelligence', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, 
      icon: '🤖', 
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      id: 'Cybersecurity', 
      name: 'Cybersecurity', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, 
      icon: '🔒', 
      color: 'from-red-500 to-orange-500' 
    },
    { 
      id: 'Cloud & DevOps', 
      name: 'Cloud & DevOps', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, 
      icon: '☁️', 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      id: 'AI & Marketing', 
      name: 'AI & Marketing', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, 
      icon: '📈', 
      color: 'from-green-500 to-teal-500' 
    },
    { 
      id: 'Data Analytics', 
      name: 'Data Analytics', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Data Analytics').length, 
      icon: '📊', 
      color: 'from-indigo-500 to-purple-500' 
    },
    { 
      id: 'IoT & Edge Computing', 
      name: 'IoT & Edge Computing', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, 
      icon: '🌐', 
      color: 'from-emerald-500 to-green-500' 
    },
    { 
      id: 'Blockchain', 
      name: 'Blockchain', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Blockchain').length, 
      icon: '⛓️', 
      color: 'from-yellow-500 to-orange-500' 
    },
    { 
      id: 'Quantum Computing', 
      name: 'Quantum Computing', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, 
      icon: '⚛️', 
      color: 'from-violet-500 to-purple-500' 
    },
    { 
      id: 'Space Technology', 
      name: 'Space Technology', 
      count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, 
      icon: '🚀', 
      color: 'from-sky-500 to-blue-500' 
    }
  ];

  // Filter and sort services
  const filteredServices = COMPREHENSIVE_SERVICES_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'price':
        return (a.price || 0) - (b.price || 0);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = sortedServices.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'AI & Business Intelligence': Brain,
      'Cybersecurity': Shield,
      'Cloud & DevOps': Cloud,
      'AI & Marketing': Target,
      'Data Analytics': BarChart3,
      'IoT & Edge Computing': Network,
      'Blockchain': Link,
      'Quantum Computing': Atom,
      'Space Technology': Rocket
    };
    return iconMap[categoryName] || Star;
  };

  return (
    <>
      <SEO
        title="Comprehensive IT Services - Zion Tech Group"
        description="Explore our comprehensive suite of cutting-edge IT services including AI, cybersecurity, cloud solutions, and emerging technologies."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Comprehensive IT Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              >
                Discover cutting-edge solutions powered by AI, quantum computing, and emerging technologies
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const IconComponent = getCategoryIcon(category.id);
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${activeCategory === category.id 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeCategory === 'all' ? 'All Services' : categories.find(c => c.id === activeCategory)?.name}
                <span className="text-gray-500 font-normal ml-2">({sortedServices.length} services)</span>
              </h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchTerm + sortBy}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {paginatedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < (service.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({service.rating || 0})</span>
                        </div>
                        {service.price && (
                          <div className="text-lg font-bold text-blue-600">
                            ${service.price.toLocaleString()}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {service.category}
                        </span>
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 rounded-lg transition-colors ${currentPage === i + 1 
                      ? 'bg-blue-600 text-white' 
                      : 'border border-gray-300 hover:bg-gray-50'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}