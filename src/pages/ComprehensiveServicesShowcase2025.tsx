import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  ArrowRight,
  ChevronDown,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  Lock,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  CheckCircle,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Target,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  FileText,
  MessageCircle,
  Calendar,
  Settings,
  Monitor,
  Truck,
  Car,
  Clipboard,
  Link,
  Microscope,
  X,
  Atom,
  Heart,
  Leaf
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

interface ServiceContact {
  mobile: string;
  email: string;
  address: string;
  website: string;

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [innovationLevel, setInnovationLevel] = useState('all');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '📊' },
    { id: 'AI & Legal', name: 'AI & Legal', count: allServices.filter(s => s.category === 'AI & Legal').length, icon: '⚖️' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: allServices.filter(s => s.category === 'AI & Logistics').length, icon: '🚚' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📢' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', count: allServices.filter(s => s.category === 'AI & Manufacturing').length, icon: '🏭' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s => s.category === 'AI & Transportation').length, icon: '🚗' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍' },
    { id: 'Autonomous Vehicles', name: 'Autonomous Vehicles', count: allServices.filter(s => s.category === 'Autonomous Vehicles').length, icon: '🚗' },
    { id: 'Healthcare', name: 'Healthcare', count: allServices.filter(s => s.category === 'Healthcare').length, icon: '🏥' },
    { id: 'Financial Services', name: 'Financial Services', count: allServices.filter(s => s.category === 'Financial Services').length, icon: '💰' },
    { id: 'Marketing', name: 'Marketing', count: allServices.filter(s => s.category === 'Marketing').length, icon: '📢' },
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category === 'Project Management').length, icon: '📋' },
    { id: 'Business Intelligence', name: 'Business Intelligence', count: allServices.filter(s => s.category === 'Business Intelligence').length, icon: '📊' },
    { id: 'Software Development', name: 'Software Development', count: allServices.filter(s => s.category === 'Software Development').length, icon: '💻' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesInnovation = innovationLevel === 'all' || service.innovationLevel === innovationLevel;

    return matchesCategory && matchesSearch && matchesPrice && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        const innovationOrder = { 'Breakthrough': 3, 'Revolutionary': 2, 'Advanced': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;

  });

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1


  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"


  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Automation': Brain,
      'AI & Analytics': BarChart3,
      'AI & Legal': Shield,
      'AI & Logistics': Truck,
      'AI & Healthcare': Heart,
      'AI & Marketing': MessageCircle,
      'AI & Research': Microscope,
      'AI & HR': Users,
      'AI & Manufacturing': Cpu,
      'AI & Content': FileText,
      'AI & Transportation': Car,
      'Quantum Computing': Atom,
      'Cybersecurity': ShieldCheck,
      'Edge Computing': Network,
      'Sustainability': Leaf,
      'Blockchain': Link,
      'Metaverse': Globe,
      'Autonomous Vehicles': Car,
      'Healthcare': Heart,
      'Financial Services': DollarSign,
      'Marketing': MessageCircle,
      'Project Management': Clipboard,
      'Business Intelligence': BarChart,
      'Software Development': Code
    };
    return iconMap[category] || Rocket;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 via-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"

            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive AI Services Showcase 2025
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              Comprehensive AI Services Showcase 2025
            </h2>
            <p className="text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge AI-powered micro SAAS services,
              designed to transform your business and drive innovation across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-zion-cyan font-semibold">
                <Star className="w-5 h-5 mr-2 fill-current" />
                {allServices.length}+ Services
              </div>
              <div className="flex items-center text-zion-green font-semibold">
                <TrendingUp className="w-5 h-5 mr-2" />
                Industry Leading
              </div>
              <div className="flex items-center text-zion-blue font-semibold">
                <Award className="w-5 h-5 mr-2" />
                Award Winning
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"

                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="innovation">Innovation Level</option>
              </select>
            </div>

            {/* View Mode */}
            <div>
              <div className="flex bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}

                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}

                  List
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Innovation Level */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Innovation Level
              </label>
              <select
                value={innovationLevel}
                onChange={(e) => setInnovationLevel(e.target.value)}
                className="w-full px-3 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"

                <option value="all">All Levels</option>
                <option value="Breakthrough">Breakthrough</option>
                <option value="Revolutionary">Revolutionary</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-end">
              <span className="text-zion-slate-light">
                Showing {filteredServices.length} of {allServices.length} services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate hover:text-white border border-zion-slate-light/20'
                }`}

                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}

            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  viewMode === 'list' ? 'p-6' : 'p-6'
                }`}
                onClick={() => handleServiceClick(service)}

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">/month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Category:</span>
                    <span className="text-sm text-white font-medium">{service.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Innovation:</span>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      service.innovationLevel === 'Breakthrough' ? 'bg-red-500/20 text-red-400' :
                      service.innovationLevel === 'Revolutionary' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">ROI:</span>
                    <span className="text-sm text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zion-slate-light/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Delivery:</span>
                    <span className="text-sm text-white">{service.estimatedDelivery}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-12">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-First Approach",
                description: "Every solution is built with cutting-edge AI at its core, ensuring maximum efficiency and innovation."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with SOC 2 compliance, ensuring your data and operations are always protected."
              },
              {
                icon: Zap,
                title: "Rapid Implementation",
                description: "Get up and running in weeks, not months, with our proven implementation methodology."

            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"

                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our AI-powered solutions can drive your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Globe className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">ziontechgroup.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-zion-slate-light text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-zion-slate-light hover:text-white transition-colors"

                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Zap className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zion-slate-light/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">${selectedService.price.toLocaleString()}</div>
                      <div className="text-sm text-zion-slate-light">Monthly</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{selectedService.roi}</div>
                      <div className="text-sm text-zion-slate-light">ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{selectedService.estimatedDelivery}</div>
                      <div className="text-sm text-zion-slate-light">Delivery</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{selectedService.innovationLevel}</div>
                      <div className="text-sm text-zion-slate-light">Innovation</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300">
                    Get Started
                  </button>
                  <button className="flex-1 px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
}}}}}}}}