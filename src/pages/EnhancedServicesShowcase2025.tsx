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
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Zap as ZapIcon
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/enhancedInnovativeMicroSaasServices2025';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = ENHANCED_INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Finance', name: 'AI & Finance', count: allServices.filter(s => s.category === 'AI & Finance').length, icon: '💰', color: 'from-zion-green to-zion-blue' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' }
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
      case 'price':
        return a.price - b.price;
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
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

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-500 bg-purple-100';
      case 'Cutting-edge': return 'text-blue-500 bg-blue-100';
      case 'Advanced': return 'text-green-500 bg-green-100';
      case 'Practical': return 'text-orange-500 bg-orange-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Revolutionary Micro SAAS Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto"
            >
              Discover cutting-edge AI, Quantum Computing, Blockchain, and Edge Computing solutions that transform businesses and drive innovation
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto border border-white/20"
            >
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-zion-cyan" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-blue transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-zion-cyan" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-blue transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-zion-cyan" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-zion-cyan hover:bg-zion-blue text-white font-semibold rounded-lg transition-colors"
                >
                  Visit Our Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Industry Expertise</h3>
              <p className="text-zion-slate-light">20+ years of technology innovation and business transformation</p>
            </div>
            <div className="text-center">
              <TrendingUpIcon className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-slate-light">Average 300-800% return on investment for our clients</p>
            </div>
            <div className="text-center">
              <UsersIcon className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">Serving clients across 25+ countries worldwide</p>
            </div>
            <div className="text-center">
              <ZapIcon className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Tech</h3>
              <p className="text-zion-slate-light">Latest AI, Quantum, and Blockchain technologies</p>
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                  <div className="flex items-center text-zion-cyan">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">Premium</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light">/month</span>
                  </span>
                  <span className="text-green-400 font-semibold">{service.roi} ROI</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.features.length > 3 && (
                  <p className="text-xs text-zion-slate-light mt-2">
                    +{service.features.length - 3} more features
                  </p>
                )}
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-zion-slate-light">
                      <TrendingUp className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Market Price:</h4>
                <p className="text-zion-cyan font-medium">{service.marketPrice}</p>
                <p className="text-xs text-zion-slate-light mt-1">
                  Delivery: {service.estimatedDelivery} • Support: {service.supportLevel}
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                  className="w-full bg-zion-cyan hover:bg-zion-blue text-white text-center py-3 px-4 rounded-lg font-medium transition-colors block"
                >
                  Get Started
                </a>
                <a
                  href="tel:+13024640950"
                  className="w-full bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors block"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge micro SAAS solutions to drive innovation, reduce costs, and achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Consultation"
                className="px-8 py-4 bg-zion-cyan hover:bg-zion-blue text-white font-semibold rounded-lg transition-colors inline-flex items-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase2025;