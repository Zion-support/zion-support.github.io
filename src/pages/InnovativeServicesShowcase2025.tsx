import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Sparkles,
  Atom,
  Heart,
  Leaf,
  Building,
  Car,
  Factory,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck,
  Building2,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  X,
  PenTool
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025 } from '../data/innovativeServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const allServices = INNOVATIVE_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Quantum Computing', name: 'AI & Quantum Computing', count: allServices.filter(s => s.category === 'AI & Quantum Computing').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'Supply Chain', name: 'Supply Chain', count: allServices.filter(s => s.category === 'Supply Chain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'Healthcare', name: 'Healthcare', count: allServices.filter(s => s.category === 'Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Financial Services', name: 'Financial Services', count: allServices.filter(s => s.category === 'Financial Services').length, icon: '💰', color: 'from-zion-yellow to-zion-orange' },
    { id: 'Content Creation', name: 'Content Creation', count: allServices.filter(s => s.category === 'Content Creation').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Human Resources', name: 'Human Resources', count: allServices.filter(s => s.category === 'Human Resources').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: allServices.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Manufacturing', name: 'Manufacturing', count: allServices.filter(s => s.category === 'Manufacturing').length, icon: '🏭', color: 'from-zion-gray to-zion-slate' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' }
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
      case 'price':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
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

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeServiceModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Quantum Computing':
        return <Atom className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Supply Chain':
        return <Truck className="w-6 h-6" />;
      case 'Healthcare':
        return <Heart className="w-6 h-6" />;
      case 'Financial Services':
        return <DollarSign className="w-6 h-6" />;
      case 'Content Creation':
        return <PenTool className="w-6 h-6" />;
      case 'Human Resources':
        return <Users className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Chip className="w-6 h-6" />;
      case 'Manufacturing':
        return <Factory className="w-6 h-6" />;
      case 'Sustainability':
        return <Leaf className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>2025 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our cutting-edge 2025 innovative services including AI-powered quantum computing, cybersecurity, supply chain optimization, healthcare analytics, and more." />
        <meta name="keywords" content="AI services, quantum computing, cybersecurity, supply chain optimization, healthcare analytics, financial trading, content creation, HR solutions, IoT, predictive maintenance, sustainability" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                  2025 Innovative Services
                </span>
                <br />
                <span className="text-white">Showcase</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
                Discover our revolutionary AI-powered solutions that are transforming industries and driving the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-40 right-20 w-24 h-24 border border-zion-purple/20 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-1/4 w-16 h-16 border border-zion-blue/20 rounded-full"
            />
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-zion-slate-dark to-zion-slate py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Phone</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Address</p>
                <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>

                {/* Sort and View Controls */}
                <div className="flex gap-4 items-center">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="category">Sort by Category</option>
                    <option value="innovation">Sort by Innovation</option>
                  </select>

                  <div className="flex bg-zion-slate-dark/50 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
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
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                    >
                      <div className="space-y-1 w-4 h-4">
                        <div className="bg-current rounded-sm h-1"></div>
                        <div className="bg-current rounded-sm h-1"></div>
                        <div className="bg-current rounded-sm h-1"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Filters */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                          : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-slate-light/20'
                      }`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span>{category.name}</span>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid/List */}
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
                  className={`bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <span className="inline-block px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full">
                              {service.category}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-zion-cyan">
                            ${service.price.toLocaleString()}
                          </p>
                          <p className="text-zion-slate-light text-sm">per month</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>

                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light text-sm font-medium">
                            {service.innovationLevel} Innovation
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-light text-sm">
                            ROI: {service.roi}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-slate-light/10 text-zion-slate-light text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="px-2 py-1 bg-zion-slate-light/10 text-zion-slate-light text-xs rounded-full">
                            +{service.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => openServiceModal(service)}
                          className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-2 px-4 rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 font-medium"
                        >
                          Learn More
                        </button>
                        <Link
                          to="/contact"
                          className="flex-1 border border-zion-cyan text-zion-cyan py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium text-center"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="inline-block px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full">
                                {service.category}
                              </span>
                              <span className="text-zion-slate-light text-sm">
                                {service.innovationLevel} Innovation
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-zion-cyan">
                            ${service.price.toLocaleString()}
                          </p>
                          <p className="text-zion-slate-light text-sm">per month</p>
                        </div>
                      </div>

                      <p className="text-zion-slate-light mb-4">{service.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light text-sm">
                              ROI: {service.roi}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light text-sm">
                              {service.estimatedDelivery}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => openServiceModal(service)}
                            className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-2 px-4 rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 font-medium"
                          >
                            Learn More
                          </button>
                          <Link
                            to="/contact"
                            className="border border-zion-cyan text-zion-cyan py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
                          >
                            Get Quote
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
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-zion-slate-dark/50 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-zion-slate-light" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search terms or category filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Join the future of technology with our innovative AI-powered solutions. 
                Get in touch today to discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Today
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg">
                      {getCategoryIcon(selectedService.category)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                      <p className="text-zion-slate-light">{selectedService.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeServiceModal}
                    className="p-2 hover:bg-zion-slate-light/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-zion-slate-light" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                    <p className="text-zion-slate-light mb-6">{selectedService.description}</p>

                    <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                          <Star className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-zion-slate-light/5 border border-zion-slate-light/20 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Pricing & Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Price:</span>
                          <span className="text-2xl font-bold text-zion-cyan">
                            ${selectedService.price.toLocaleString()}/month
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Market Price:</span>
                          <span className="text-white">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">ROI:</span>
                          <span className="text-white">{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Delivery:</span>
                          <span className="text-white">{selectedService.estimatedDelivery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Support:</span>
                          <span className="text-white">{selectedService.supportLevel}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zion-slate-light/5 border border-zion-slate-light/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Use Cases</h3>
                      <ul className="space-y-2">
                        {selectedService.useCases.map((useCase: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <Target className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 font-medium text-center"
                  >
                    Get Started Today
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="flex-1 border border-zion-cyan text-zion-cyan py-3 px-6 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium text-center"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InnovativeServicesShowcase2025;