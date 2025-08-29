import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Award, Settings, Phone, Mail, MapPin, ArrowRight, CheckCircle, Clock, Target, BarChart3 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ServicesOverview: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.tags?.some(t => t.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'innovation':
        filtered = [...filtered].sort((a, b) => {
          const levels = { 'Basic': 1, 'Advanced': 2, 'Revolutionary': 3 };
          return (levels[b.innovationLevel as keyof typeof levels] || 1) - (levels[a.innovationLevel as keyof typeof levels] || 1);
        });
        break;
      case 'roi':
        filtered = [...filtered].sort((a, b) => {
          const aRoi = parseInt(a.roi.replace('%', ''));
          const bRoi = parseInt(b.roi.replace('%', ''));
          return bRoi - aRoi;
        });
        break;
      default:
        filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [services, searchQuery, selectedCategory, sortBy]);

  const featuredServices = services.filter(s => s.innovationLevel === 'Revolutionary').slice(0, 6);

  const stats = [
    { label: 'Total Services', value: services.length, icon: Zap },
    { label: 'Categories', value: categories.length - 1, icon: Globe },
    { label: 'Revolutionary', value: services.filter(s => s.innovationLevel === 'Revolutionary').length, icon: Star },
    { label: 'Advanced', value: services.filter(s => s.innovationLevel === 'Advanced').length, icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Services Overview - Zion Tech Group" 
        description="Comprehensive overview of our AI, IT, and Micro SaaS services. Discover cutting-edge solutions for your business needs."
        canonical="/services-overview"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
          >
            Our Services Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Discover our comprehensive range of AI-powered solutions, IT services, and innovative Micro SaaS platforms designed to transform your business.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="innovation">Innovation Level</option>
                  <option value="roi">ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Revolutionary Services</h2>
            <p className="text-slate-300">Our most innovative and cutting-edge solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold rounded-full">
                    {service.innovationLevel}
                  </span>
                  <span className="text-cyan-400 font-semibold">{service.marketPrice}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-400">
                    <Target className="w-4 h-4 mr-2" />
                    <span>{service.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    <span>ROI: {service.roi}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/services/${service.id.replace(/-/g, '-')}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/request-quote"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All Services</h2>
            <p className="text-slate-300">Browse our complete portfolio of {services.length} services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-slate-900/60 backdrop-blur border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-400/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs font-medium rounded">
                    {service.category}
                  </span>
                  <span className="text-sm text-slate-400">{service.marketPrice}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                    <span>{service.innovationLevel}</span>
                  </div>
                  <Link
                    to={`/services/${service.id.replace(/-/g, '-')}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8">
              Our team of experts is ready to help you choose the right services and implement solutions that drive real business value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Request Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
              >
                Schedule Consultation
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;