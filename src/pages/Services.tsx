import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample services data - you can replace this with your actual data
  const allServices = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      description: 'Advanced AI-powered analytics and business intelligence solution for data-driven decision making.',
      category: 'AI & Automation',
      price: '$2,999',
      rating: 4.9,
      reviews: 234,
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'],
      image: '/images/ai-bi-platform.jpg'
    },
    {
      id: 'quantum-computing-solution',
      name: 'Quantum Computing Solution',
      description: 'Next-generation quantum computing platform for complex problem solving and optimization.',
      category: 'Quantum Computing',
      price: '$5,999',
      rating: 4.8,
      reviews: 156,
      tags: ['Quantum', 'Computing', 'Optimization', 'Research'],
      image: '/images/quantum-computing.jpg'
    },
    {
      id: 'blockchain-enterprise',
      name: 'Blockchain Enterprise Platform',
      description: 'Enterprise-grade blockchain solution for secure transactions and smart contracts.',
      category: 'Blockchain',
      price: '$3,999',
      rating: 4.7,
      reviews: 189,
      tags: ['Blockchain', 'Enterprise', 'Security', 'Smart Contracts'],
      image: '/images/blockchain-platform.jpg'
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Platform',
      description: 'Intelligent healthcare solution with AI-powered diagnostics and patient care.',
      category: 'AI & Healthcare',
      price: '$4,999',
      rating: 4.9,
      reviews: 278,
      tags: ['AI', 'Healthcare', 'Diagnostics', 'Patient Care'],
      image: '/images/ai-healthcare.jpg'
    },
    {
      id: 'edge-computing-platform',
      name: 'Edge Computing Platform',
      description: 'Ultra-low latency edge computing solution for IoT and real-time applications.',
      category: 'Edge Computing',
      price: '$2,499',
      rating: 4.6,
      reviews: 145,
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Low Latency'],
      image: '/images/edge-computing.jpg'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection and prevention.',
      category: 'Cybersecurity',
      price: '$3,499',
      rating: 4.8,
      reviews: 203,
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security'],
      image: '/images/cybersecurity-suite.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-600' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-purple-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-purple-500 to-pink-500' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-blue-500 to-cyan-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-green-500 to-blue-500' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.name.localeCompare(b.name);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Explore our comprehensive range of AI, quantum computing, blockchain, and cybersecurity services designed to transform your business."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of cutting-edge technology solutions designed to 
              transform your business and drive innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-600/30">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                </div>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/30'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm text-gray-300">{service.rating}</span>
                          <span className="ml-1 text-sm text-gray-400">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ) : (
                  <div className="flex w-full p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm text-gray-300">{service.rating}</span>
                            <span className="ml-1 text-sm text-gray-400">({service.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {service.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact our team to discuss your project requirements and discover how our 
              innovative services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get a Quote
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
