import React, { useState } from 'react';
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
  MessageSquare,
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
  Building2,
  Car,
  Factory,
  GraduationCap,
  Scale,
  Truck,
  Wheat,
  Zap2,
  Brain2,
  Cloud2,
  Lock2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Enhanced categories with new services
  const categories = [
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Autonomous Operations', name: 'AI & Autonomous Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Autonomous Operations').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Supply Chain').length, icon: '🚚', color: 'from-green-500 to-blue-500' },
    { id: 'AI & Cybersecurity', name: 'AI & Cybersecurity', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '📊', color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' }
  ];

  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

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
    visible: { y: 0, opacity: 1 }
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.icon : '🚀';
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.color : 'from-cyan-500 to-blue-500';
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <>
      <SEO 
        title="AI & Technology Services | Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SAAS services, cutting-edge technology solutions, and innovative platforms that transform businesses across industries."
        keywords="AI services, micro SAAS, technology solutions, business intelligence, cybersecurity, cloud computing, blockchain, IoT, quantum computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent">
                  AI Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Discover our comprehensive suite of autonomous AI-powered micro SAAS services,
                cutting-edge technology solutions, and innovative platforms that transform businesses
                across industries.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-white font-semibold">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MailIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email Us</p>
                      <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                    <div>
                      <p className="text-sm text-gray-400">Visit Us</p>
                      <p className="text-white font-semibold">364 E Main St STE 1008</p>
                      <p className="text-white font-semibold">Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length}+</div>
                  <div className="text-gray-400">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-gray-400">AI Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">Global</div>
                  <div className="text-gray-400">Reach</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Search */}
                <div className="md:col-span-2">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
                    Search Services
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="search"
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    value={activeCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <label htmlFor="sort" className="block text-sm font-medium text-gray-300 mb-2">
                    Sort By
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="rating">Highest Rated</option>
                    <option value="price">Lowest Price</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="name">Alphabetical</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            >
              {currentServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden group"
                >
                  {/* Service Image */}
                  <div className="relative h-40 sm:h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                    {service.images && service.images.length > 0 ? (
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-lg sm:text-2xl`}>
                          {getCategoryIcon(service.category)}
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1 text-white text-xs sm:text-sm font-medium">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-white text-xs sm:text-sm font-bold`}>
                          {getCategoryIcon(service.category)}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-400">{service.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold text-sm sm:text-base">{service.rating}</span>
                        <span className="text-gray-400 text-xs sm:text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full border border-white/20">
                          +{service.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-lg font-bold text-cyan-400">{service.aiScore}%</div>
                        <div className="text-xs text-gray-400">AI Score</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-lg font-bold text-emerald-400">{service.setupTime}</div>
                        <div className="text-xs text-gray-400">Setup Time</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        to="/request-quote"
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                          page === currentPage
                            ? 'bg-cyan-500 text-white'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* No Results */}
            {currentServices.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-8">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setCurrentPage(1);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to discuss your specific needs and discover
                how our AI-powered solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pagination */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center space-x-1 sm:space-x-2">
              <button className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">
                Previous
              </button>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-2 py-2 sm:px-3 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      page === 1
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors text-sm sm:text-base">
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Contact Information Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-500 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
