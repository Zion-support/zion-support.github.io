import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Cpu, Database, Network, Code, Palette, Target, Rocket, Eye, 
  DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, 
  Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, 
  CheckCircle, Truck, Car, TestTube, PenTool, Building2, Atom, 
  FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, 
  Store, PieChart, Share2, Monitor, Smartphone, Globe, Shield, 
  Users, Phone, Mail, MapPin, ArrowRight, Star, Award, Sparkles
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '@/data/innovativeMicroSaasServices2027';
import { EMERGING_TECH_SERVICES_2027 } from '@/data/emergingTechServices2027';

export default function InnovativeServicesShowcase2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2027, ...EMERGING_TECH_SERVICES_2027];
  
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'quantum', name: 'Quantum Tech', icon: Atom, count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: allServices.filter(s => s.category.toLowerCase().includes('ai') || s.category.toLowerCase().includes('machine')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Shield, count: allServices.filter(s => s.category.toLowerCase().includes('blockchain')).length },
    { id: 'iot', name: 'IoT & Edge', icon: Network, count: allServices.filter(s => s.category.toLowerCase().includes('iot') || s.category.toLowerCase().includes('edge')).length },
    { id: 'robotics', name: 'Robotics & RPA', icon: Robot, count: allServices.filter(s => s.category.toLowerCase().includes('robotics') || s.category.toLowerCase().includes('rpa')).length },
    { id: 'xr', name: 'Extended Reality', icon: Eye, count: allServices.filter(s => s.category.toLowerCase().includes('reality')).length },
    { id: 'biotech', name: 'Biotech & Bio', icon: TestTube, count: allServices.filter(s => s.category.toLowerCase().includes('biology') || s.category.toLowerCase().includes('biotech')).length },
    { id: 'space', name: 'Space Tech', icon: Rocket, count: allServices.filter(s => s.category.toLowerCase().includes('space')).length },
    { id: 'climate', name: 'Climate Tech', icon: Leaf, count: allServices.filter(s => s.category.toLowerCase().includes('climate')).length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.subcategory.toLowerCase().includes(selectedCategory);
    
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return b.featured ? 1 : -1;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'ai-score':
        return b.aiScore - a.aiScore;
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2027 Innovation Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge micro SAAS services, 
              featuring quantum computing, AI innovation, blockchain solutions, and emerging technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
                <span className="text-zion-cyan font-semibold">{allServices.length}+ Services</span>
              </div>
              <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3">
                <span className="text-zion-purple font-semibold">2027 Technology</span>
              </div>
              <div className="bg-zion-green/20 backdrop-blur-sm border border-zion-green/30 rounded-full px-6 py-3">
                <span className="text-zion-green font-semibold">Global Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate/30 rounded-2xl p-6"
          >
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-slate/30 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-slate/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="ai-score">AI Score</option>
                </select>
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="bg-zion-cyan/20 border border-zion-cyan/30 rounded-xl px-4 py-4 text-zion-cyan hover:bg-zion-cyan/30 transition-colors"
                >
                  {viewMode === 'grid' ? 'List' : 'Grid'}
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white border-zion-cyan'
                      : 'bg-zion-slate-light/10 text-zion-slate-light border-zion-slate/30 hover:bg-zion-slate-light/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            <AnimatePresence>
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={viewMode === 'grid' ? cardVariants : itemVariants}
                  whileHover="hover"
                  className={`bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate/30 rounded-2xl overflow-hidden transition-all duration-300 ${
                    viewMode === 'grid' ? 'h-full' : ''
                  }`}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {service.featured && (
                        <div className="bg-zion-cyan text-black px-3 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                      )}
                      <div className="bg-zion-purple/80 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {service.aiScore}/100
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-1 text-white">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{service.rating}</span>
                        <span className="text-xs text-gray-300">({service.reviewCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-zion-slate-light/20 text-zion-slate-light px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-xs text-zion-slate-light flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-zion-green" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                          <span className="text-sm text-zion-slate-light">/month</span>
                        </div>
                        <div className="text-sm text-zion-slate-light">{service.marketPrice}</div>
                      </div>
                      <Link
                        to={`/services/${service.id}`}
                        className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-xl font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-zion-slate/30">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Mail className="w-4 h-4" />
                          <span>{service.contactEmail}</span>
                        </div>
                        <div className="text-zion-cyan font-semibold">
                          {service.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-zion-cyan text-white px-6 py-3 rounded-xl font-semibold hover:bg-zion-cyan/80 transition-colors"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border border-zion-cyan/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Connect with our innovation experts to discover how these cutting-edge technologies 
              can revolutionize your operations and give you a competitive edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Robot icon component for the categories
const Robot = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
    <path d="M19 8v1a3 3 0 0 1-6 0V8"/>
    <path d="M5 8v1a3 3 0 0 1 6 0V8"/>
    <path d="M6 2v2a4 4 0 0 0 8 0V2"/>
    <path d="M2 17c.621.5 3.031 1 6.275 1 3.243 0 5.653-.5 6.275-1"/>
    <path d="M12 22c.621.5 3.031 1 6.275 1 3.243 0 5.653-.5 6.275-1"/>
    <path d="M12 22c-.621.5-3.031 1-6.275 1-3.243 0-5.653-.5-6.275-1"/>
    <path d="M12 22c-.621.5-3.031 1-6.275 1-3.243 0-5.653-.5-6.275-1"/>
    <path d="M2 17c-.621.5-3.031 1-6.275 1-3.243 0-5.653-.5-6.275-1"/>
    <path d="M2 17c-.621.5-3.031 1-6.275 1-3.243 0-5.653-.5-6.275-1"/>
  </svg>
);

// Leaf icon component for climate tech
const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3c5.5 2.5 5.5 8.5 0 11"/>
    <path d="M18 3c-5.5 2.5-5.5 8.5 0 11"/>
    <path d="M3 18c2.5-5.5 8.5-5.5 11 0"/>
    <path d="M21 18c-2.5-5.5-8.5-5.5-11 0"/>
  </svg>
);