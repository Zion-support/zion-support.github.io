import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Atom,
  Shield,
  Rocket,
  Globe,
  Link as LinkIcon,
  Car,
  Bot,
  Heart,
  Cloud,
  Target,
  Satellite,
  Leaf,
  Image,
  FileText,
  DollarSign,
  Search,
  Filter,
  Star,
  ArrowRight,
  ChevronDown,
  Zap,
  Cpu,
  Database,
  Network,
  BarChart3,
  Code,
  Server,
  Chip,
  Lock,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { CUTTING_EDGE_SERVICES_2026 } from '../data/cuttingEdgeServices2026';

const CuttingEdgeServices2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', count: CUTTING_EDGE_SERVICES_2026.length, icon: '🚀', color: 'from-cyan-500 to-blue-600' },
    { id: 'Quantum Computing & AI', name: 'Quantum Computing & AI', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Quantum')).length, icon: '⚛️', color: 'from-purple-500 to-pink-600' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Blockchain')).length, icon: '🔗', color: 'from-green-500 to-emerald-600' },
    { id: 'Metaverse & VR/AR', name: 'Metaverse & VR/AR', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Metaverse')).length, icon: '🌍', color: 'from-indigo-500 to-purple-600' },
    { id: 'Space Technology', name: 'Space Technology', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Space')).length, icon: '🚀', color: 'from-blue-500 to-cyan-600' },
    { id: 'Autonomous Vehicles & AI', name: 'Autonomous Vehicles & AI', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Autonomous')).length, icon: '🚗', color: 'from-orange-500 to-red-600' },
    { id: 'Neural Technology & AI', name: 'Neural Technology & AI', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Neural')).length, icon: '🧠', color: 'from-pink-500 to-purple-600' },
    { id: 'Climate Science & AI', name: 'Climate Science & AI', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Climate')).length, icon: '🌱', color: 'from-green-500 to-blue-600' },
    { id: 'Synthetic Biology & AI', name: 'Synthetic Biology & AI', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Synthetic')).length, icon: '🧬', color: 'from-yellow-500 to-green-600' },
    { id: 'Robotics & AI', name: 'Robotics & AI', count: CUTTING_EDGE_SERVICES_2026.filter(s => s.category.includes('Robotics')).length, icon: '🤖', color: 'from-gray-500 to-blue-600' }
  ];

  const filteredServices = CUTTING_EDGE_SERVICES_2026.filter(service => {
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

  return (
    <>
      <Helmet>
        <title>Cutting Edge Services 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary cutting-edge services for 2026 including quantum computing, blockchain, metaverse, space technology, and more. Transform your business with next-generation AI and technology solutions." />
        <meta name="keywords" content="cutting edge services 2026, quantum computing, blockchain, metaverse, space technology, autonomous vehicles, neural technology, AI services, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/cutting-edge-services-2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cutting Edge Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  2026
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our revolutionary services. From quantum computing to autonomous vehicles, 
                we're pushing the boundaries of what's possible.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Atom className="w-5 h-5 text-cyan-400" />
                  Quantum Computing
                </span>
                <span className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-green-400" />
                  Blockchain & Web3
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-400" />
                  Metaverse & VR/AR
                </span>
                <span className="flex items-center gap-2">
                  <Satellite className="w-5 h-5 text-blue-400" />
                  Space Technology
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search cutting-edge services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                      <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Sort and View */}
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="reviews">Sort by Reviews</option>
                    <option value="name">Sort by Name</option>
                  </select>

                  <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
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
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                              <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white line-clamp-2">{service.title}</h3>
                              <p className="text-sm text-cyan-400">{service.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">{service.rating}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-md border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-white">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.availability}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <span>AI Score: {service.aiScore}%</span>
                          <span>{service.reviewCount} reviews</span>
                        </div>

                        <Link
                          to={`/services/${service.id}`}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    // List View
                    <>
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Brain className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                              <p className="text-cyan-400 mb-2">{service.category}</p>
                              <p className="text-gray-300 text-sm line-clamp-2">{service.description}</p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-3xl font-bold text-white mb-2">
                              ${service.price.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-1 text-yellow-400 mb-2">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm font-medium">{service.rating}</span>
                              <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                            </div>
                            <div className="text-sm text-gray-400">
                              AI Score: {service.aiScore}%
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white/10 text-sm text-gray-300 rounded-md border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            Availability: {service.availability}
                          </div>
                          <Link
                            to={`/services/${service.id}`}
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {sortedServices.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to learn more about our cutting-edge services and how they can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-white/10 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CuttingEdgeServices2026;