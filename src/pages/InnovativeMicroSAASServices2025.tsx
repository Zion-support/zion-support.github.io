import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Globe, 
  Rocket, 
  TrendingUp,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { 
  INNOVATIVE_MICRO_SAAS_SERVICES_2025, 
  MICRO_SAAS_SERVICE_CATEGORIES_2025,
  MICRO_SAAS_SERVICE_STATISTICS_2025,
  FEATURED_MICRO_SAAS_SERVICES_2025,
  HIGH_ROI_MICRO_SAAS_SERVICES_2025,
  QUICK_SETUP_MICRO_SAAS_SERVICES_2025
} from '../data/innovativeMicroSAASServices2025';

export default function InnovativeMicroSAASServices2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Filter and sort services
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.rating - a.rating;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />,
      'AI & Content': <Globe className="w-6 h-6" />,
      'AI & Customer Support': <Users className="w-6 h-6" />,
      'AI & Healthcare': <Shield className="w-6 h-6" />,
      'AI & Legal Tech': <Award className="w-6 h-6" />,
      'AI & Operations': <Target className="w-6 h-6" />,
      'AI & FinTech': <DollarSign className="w-6 h-6" />,
      'Quantum Computing': <Zap className="w-6 h-6" />,
      'IoT & Edge Computing': <Cpu className="w-6 h-6" />,
      'Blockchain & Web3': <Globe className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Digital Twin': <Cloud className="w-6 h-6" />,
      'Space Technology': <Rocket className="w-6 h-6" />,
      'Sustainable Technology': <TrendingUp className="w-6 h-6" />
    };
    return icons[category] || <Star className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'AI & Content': 'from-blue-500 to-indigo-500',
      'AI & Customer Support': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-pink-500',
      'AI & Legal Tech': 'from-indigo-500 to-blue-500',
      'AI & Operations': 'from-gray-500 to-slate-500',
      'AI & FinTech': 'from-emerald-500 to-green-500',
      'Quantum Computing': 'from-purple-500 to-violet-500',
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Digital Twin': 'from-blue-500 to-indigo-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Sustainable Technology': 'from-green-500 to-teal-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Micro SAAS Services 2025 | Zion Tech Group"
        description="Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, and emerging technologies. Transform your business with our innovative services."
        keywords="micro SAAS, AI services, quantum computing, IoT, blockchain, cybersecurity, digital twin, space technology, sustainable tech"
        url="https://ziontechgroup.com/innovative-micro-saas-services-2025"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Micro SAAS Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                2025 & Beyond
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge micro SAAS solutions powered by AI, quantum computing, 
              and emerging technologies. Real solutions, real results, real innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">{MICRO_SAAS_SERVICE_STATISTICS_2025.totalServices}+</span> Services
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">{MICRO_SAAS_SERVICE_STATISTICS_2025.totalCategories}</span> Categories
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">{MICRO_SAAS_SERVICE_STATISTICS_2025.averageRating}/5</span> Rating
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-purple-100">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="tel:+13024640950"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg"
              >
                <Mail className="w-4 h-4" />
                kleber@ziontechgroup.com
              </a>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {FEATURED_MICRO_SAAS_SERVICES_2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} mb-4`}>
                  {getCategoryIcon(service.category)}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">
                    ${service.price.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>AI Score: {service.aiScore}%</span>
                  <span>ROI: {service.roi}</span>
                </div>
                <a
                  href={`/services/${service.id}`}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High ROI Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              High ROI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Services delivering exceptional returns on investment with proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIGH_ROI_MICRO_SAAS_SERVICES_2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    ROI: {service.roi}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-green-400">
                    ${service.price.toLocaleString()}
                  </div>
                  <a
                    href={`/services/${service.id}`}
                    className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center gap-1"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Setup Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Setup Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running in under 8 weeks with our rapid deployment solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {QUICK_SETUP_MICRO_SAAS_SERVICES_2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.setupTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-400">
                    ${service.price.toLocaleString()}
                  </div>
                  <a
                    href={`/services/${service.id}`}
                    className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center gap-1"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of innovative micro SAAS solutions
            </p>
          </motion.div>

          {/* Filters and Search */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price-low">Sort by Price (Low to High)</option>
                  <option value="price-high">Sort by Price (High to Low)</option>
                  <option value="ai-score">Sort by AI Score</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All Categories
              </button>
              {MICRO_SAAS_SERVICE_CATEGORIES_2025.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {currentServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 ${
                  viewMode === 'grid' ? 'p-6' : 'p-6 flex flex-col lg:flex-row gap-6'
                }`}
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} mb-4`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">
                        ${service.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>AI Score: {service.aiScore}%</span>
                      <span>ROI: {service.roi}</span>
                    </div>
                    <a
                      href={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </>
                ) : (
                  <>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} flex-shrink-0`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 line-clamp-2">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-purple-400 mb-2">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>AI Score: {service.aiScore}%</span>
                            <span>ROI: {service.roi}</span>
                            <span>{service.setupTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                        </div>
                        <a
                          href={`/services/${service.id}`}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and discover how our innovative services 
              can transform your business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a 
                  href="tel:+13024640950"
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <a 
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}