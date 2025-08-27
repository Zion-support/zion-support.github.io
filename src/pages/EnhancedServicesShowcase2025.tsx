import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  Users, 
  Target, 
  Rocket, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Heart, 
  Satellite, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Sparkles,
  Award,
  Globe,
  Code,
  Lock,
  BarChart3,
  Workflow,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  PenTool,
  Building,
  Truck,
  DollarSign,
  BookOpen,
  MessageCircle,
  HelpCircle,
  FileText,
  Cpu,
  TrendingDown,
  Calendar,
  UserCheck,
  ShieldCheck,
  Zap as ZapIcon
} from 'lucide-react';
import { enhancedServicesCatalog2025, EnhancedService } from '../data/enhancedServicesCatalog2025';

export default function EnhancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique categories
  const categories = ['all', ...new Set(enhancedServicesCatalog2025.map(service => service.category))];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    return enhancedServicesCatalog2025
      .filter(service => 
        (selectedCategory === 'all' || service.category === selectedCategory) &&
        (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.tagline.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'featured':
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
          case 'popular':
            return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
          case 'new':
            return (b.new ? 1 : 0) - (a.new ? 1 : 0);
          case 'price-low':
            return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
          case 'price-high':
            return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
  }, [searchTerm, selectedCategory, sortBy]);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const ServiceCard = ({ service }: { service: EnhancedService }) => (
    <motion.div
      key={service.id}
      className="neon-card hover:scale-105 transition-all duration-300 cursor-pointer group"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Service Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{service.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-orbitron">
              {service.name}
            </h3>
            <p className="text-sm text-cyan-400 font-medium">{service.category}</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          {service.featured && (
            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
              Featured
            </span>
          )}
          {service.popular && (
            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full">
              Popular
            </span>
          )}
          {service.new && (
            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full">
              New
            </span>
          )}
        </div>
      </div>

      {/* Service Content */}
      <div className="space-y-4">
        <p className="text-lg font-semibold text-gray-200">{service.tagline}</p>
        <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
        
        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-400 font-orbitron">
            {service.price}
            <span className="text-sm text-gray-400 font-normal ml-1">
              /{service.billing}
            </span>
          </div>
          <div className="text-sm text-gray-400">
            {service.trialDays > 0 ? `${service.trialDays}-day trial` : 'No trial'}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="space-y-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
            Key Benefits
          </h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Market Info */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-gray-800/50 p-2 rounded">
            <p className="text-gray-400">Market Size</p>
            <p className="text-white font-medium">{service.marketSize}</p>
          </div>
          <div className="bg-gray-800/50 p-2 rounded">
            <p className="text-gray-400">Growth Rate</p>
            <p className="text-white font-medium">{service.growthRate}</p>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{service.implementationTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{service.targetAudience.slice(0, 2).join(', ')}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-3 pt-4">
          <Link
            to={service.link}
            className="flex-1 btn-neon text-center text-sm py-2"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="flex-1 btn-neon-cyan text-center text-sm py-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: EnhancedService }) => (
    <motion.div
      key={service.id}
      className="neon-card p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
      whileHover={{ x: 10 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-6">
        <div className="text-4xl">{service.icon}</div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-orbitron">
                {service.name}
              </h3>
              <p className="text-sm text-cyan-400 font-medium">{service.category}</p>
            </div>
            <div className="flex items-center space-x-2">
              {service.featured && (
                <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                  Featured
                </span>
              )}
              {service.popular && (
                <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full">
                  Popular
                </span>
              )}
              {service.new && (
                <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full">
                  New
                </span>
              )}
            </div>
          </div>
          
          <p className="text-lg font-semibold text-gray-200 mb-2">{service.tagline}</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
          
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Price</p>
              <p className="text-white font-bold">{service.price}/{service.billing}</p>
            </div>
            <div>
              <p className="text-gray-400">Implementation</p>
              <p className="text-white">{service.implementationTime}</p>
            </div>
            <div>
              <p className="text-gray-400">Market Size</p>
              <p className="text-white">{service.marketSize}</p>
            </div>
            <div>
              <p className="text-gray-400">Growth Rate</p>
              <p className="text-white">{service.growthRate}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-3">
          <Link
            to={service.link}
            className="btn-neon text-sm py-2 px-4"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="btn-neon-cyan text-sm py-2 px-4"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen futuristic-bg">
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions that transform businesses and drive digital transformation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { icon: Rocket, label: 'Services', value: '50+', color: 'text-cyan-400' },
                { icon: Users, label: 'Customers', value: '500+', color: 'text-purple-400' },
                { icon: TrendingUp, label: 'Growth', value: '300%', color: 'text-green-400' },
                { icon: Award, label: 'Awards', value: '25+', color: 'text-yellow-400' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-white font-orbitron">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-neon-cyan text-lg px-8 py-4"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="btn-neon text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b border-gray-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="featured">Featured</option>
                  <option value="popular">Popular</option>
                  <option value="new">New</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredServices.length}</span> services
              {selectedCategory !== 'all' && (
                <> in <span className="text-cyan-400 font-semibold">{selectedCategory}</span></>
              )}
            </p>
          </div>

          {/* Services Display */}
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service) => (
                  viewMode === 'grid' ? (
                    <ServiceCard key={service.id} service={service} />
                  ) : (
                    <ServiceList key={service.id} service={service} />
                  )
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or browse all services.</p>
                <Link
                  to="/services"
                  className="btn-neon-cyan mt-4 inline-block"
                >
                  Browse All Services
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50 border-t border-gray-700/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our revolutionary AI, quantum computing, and innovative solutions can help you achieve your technology goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-neon-cyan text-lg px-8 py-4"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/pricing"
                className="btn-neon text-lg px-8 py-4"
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

// Icon components for view mode toggle
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