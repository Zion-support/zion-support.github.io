import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  TrendingDown,
  Zap as Lightning,
  Eye,
  BarChart,
  PieChart,
  Activity,
  Target as Bullseye
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovation');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-blue to-zion-indigo' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'innovation':
        return getInnovationScore(b.innovationLevel) - getInnovationScore(a.innovationLevel);
      case 'price':
        return a.price - b.price;
      case 'roi':
        return parseFloat(a.roi.replace('%', '')) - parseFloat(b.roi.replace('%', ''));
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getInnovationScore = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 5;
      case 'Cutting-edge': return 4;
      case 'Advanced': return 3;
      case 'Practical': return 2;
      default: return 1;
    }
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400';
      case 'Cutting-edge': return 'text-blue-400';
      case 'Advanced': return 'text-green-400';
      case 'Practical': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

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
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Zion Tech Group
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple">
              Micro SAAS Services 2025
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our cutting-edge portfolio of innovative micro SAAS solutions designed to transform your business operations and drive exponential growth
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-zion-cyan mb-2" />
                <span className="text-sm text-gray-300">Phone</span>
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-zion-blue mb-2" />
                <span className="text-sm text-gray-300">Email</span>
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-zion-purple mb-2" />
                <span className="text-sm text-gray-300">Address</span>
                <span className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive portfolio spans cutting-edge technologies including AI, Quantum Computing, Blockchain, 
              Edge Computing, and more. Each solution is designed to deliver measurable ROI and competitive advantage.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-gradient-to-br from-zion-purple/20 to-zion-pink/20 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">10+</div>
              <div className="text-gray-300">Technology Categories</div>
            </div>
            <div className="bg-gradient-to-br from-zion-green/20 to-zion-emerald/20 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-green mb-2">200-1000%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-gradient-to-br from-zion-orange/20 to-zion-red/20 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-orange mb-2">4-16</div>
              <div className="text-gray-300">Weeks Delivery</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Search */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                        : 'bg-white/10 backdrop-blur-lg text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.icon} {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort and View */}
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="price">Sort by Price</option>
                  <option value="roi">Sort by ROI</option>
                  <option value="name">Sort by Name</option>
                </select>

                <div className="flex bg-white/10 backdrop-blur-lg rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-6"
            style={{
              gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(400px, 1fr))' : '1fr'
            }}
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-zion-cyan/50 group ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)} bg-white/10`}>
                          {service.innovationLevel}
                        </span>
                        <span className="text-gray-400 text-sm">{service.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Lightning className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-zion-green" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits and ROI */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-sm text-gray-400 mb-1">ROI</div>
                      <div className="text-lg font-bold text-zion-green">{service.roi}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-sm text-gray-400 mb-1">Delivery</div>
                      <div className="text-lg font-bold text-zion-blue">{service.estimatedDelivery}</div>
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-white font-semibold">{service.marketPrice}</span>
                    </div>
                    {service.marketSize && (
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-white font-semibold">{service.marketSize}</span>
                      </div>
                    )}
                  </div>

                  {/* Use Cases */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-zion-purple" />
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <span key={index} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a 
                      href="https://ziontechgroup.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-blue transition-colors flex items-center gap-2"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Technical Specs (List View) */}
                {viewMode === 'list' && service.technicalSpecs && (
                  <div className="w-80 bg-white/5 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-zion-cyan" />
                      Technical Specifications
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Technology Stack</div>
                        <div className="flex flex-wrap gap-1">
                          {service.technicalSpecs.technology.slice(0, 3).map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">API Endpoints</div>
                        <div className="text-white font-semibold">{service.technicalSpecs.apiEndpoints}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Uptime</div>
                        <div className="text-white font-semibold">{service.technicalSpecs.uptime}</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20 backdrop-blur-lg rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative micro SAAS solutions can drive your business forward. 
              Get in touch with our experts today for a personalized consultation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-3" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-zion-cyan">+1 302 464 0950</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-blue mb-3" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-zion-blue">kleber@ziontechgroup.com</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-purple mb-3" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-zion-purple text-sm">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Visit Our Website
                <ExternalLink className="w-5 h-5" />
              </a>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Grid and List icons
const Grid = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const List = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

export default EnhancedServicesShowcase2025;