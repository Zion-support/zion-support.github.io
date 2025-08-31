import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Users,
  Globe,
  Award,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  BarChart3,
  Code,
  Server,
  Chip,
  Lock,
  Database,
  Network,
  Heart,
  Building2,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  Eye,
  Download,
  Share2
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length, icon: '🚀', color: 'from-cyan-500 to-blue-600' },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('AI')).length, icon: '🤖', color: 'from-purple-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-purple-500 to-pink-500' },
    { id: 'Blockchain', name: 'Blockchain', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-green-500 to-emerald-500' },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Healthcare Technology').length, icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'Edge Computing', name: 'Edge Computing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-blue-500 to-cyan-500' },
    { id: 'Metaverse', name: 'Metaverse', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-green-500 to-blue-500' },
    { id: 'Sustainability', name: 'Sustainability', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Sustainability').length, icon: '🌱', color: 'from-green-500 to-teal-500' }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI Development':
      case 'AI Content':
      case 'AI HR':
        return <Brain className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Chip className="w-5 h-5" />;
      case 'Blockchain':
        return <Lock className="w-5 h-5" />;
      case 'Healthcare Technology':
        return <Heart className="w-5 h-5" />;
      case 'Edge Computing':
        return <Network className="w-5 h-5" />;
      case 'Metaverse':
        return <Globe className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Sustainability':
        return <Award className="w-5 h-5" />;
      default:
        return <Rocket className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of innovative AI, IT, and digital transformation services. Cutting-edge solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, digital transformation, micro SAAS, cybersecurity, quantum computing, blockchain, healthcare technology" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of innovative AI, IT, and digital transformation services." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Showcase 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our cutting-edge portfolio of AI, IT, and digital transformation solutions. 
                From quantum computing to metaverse platforms, we deliver innovative technology that drives business success.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400">{INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}+</div>
                  <div className="text-gray-400">Services Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400">24/7</div>
                  <div className="text-gray-400">Global Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2 bg-slate-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1 w-4 h-4">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="space-y-1 w-4 h-4">
                      <div className="bg-current rounded-sm h-1"></div>
                      <div className="bg-current rounded-sm h-1"></div>
                      <div className="bg-current rounded-sm h-1"></div>
                    </div>
                  </button>
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>

              {/* Category Filters */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid/List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="p-6">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white line-clamp-2">{service.title}</h3>
                            <p className="text-sm text-cyan-400">{service.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">Starting Price</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                            +{service.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-cyan-400">{service.rating}</div>
                          <div className="text-xs text-gray-400">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-cyan-400">{service.reviewCount}</div>
                          <div className="text-xs text-gray-400">Reviews</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-cyan-400">{service.aiScore}</div>
                          <div className="text-xs text-gray-400">AI Score</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex space-x-3">
                        <Link
                          to={`/services/${service.id}`}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center font-medium"
                        >
                          Learn More
                        </Link>
                        <Link
                          to="/contact"
                          className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-300 mb-2 line-clamp-2">{service.description}</p>
                            <div className="flex items-center space-x-6 text-sm">
                              <span className="text-cyan-400">{service.category}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-400">Rating: {service.rating}/5</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-400">{service.reviewCount} reviews</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-3xl font-bold text-white mb-2">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-400 mb-4">Starting Price</div>
                          <Link
                            to={`/services/${service.id}`}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our team of experts help you implement the right technology solutions 
                to drive growth, efficiency, and innovation in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  to="/case-studies"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;
