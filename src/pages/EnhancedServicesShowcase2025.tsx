import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock, Users, Rocket, Zap, CheckCircle, Phone, Mail, MapPin, Award, MessageCircle, Zap as ZapIcon, MessageCircle as MessageCircleIcon } from 'lucide-react';
import { enhancedServicesCatalog2025, EnhancedService } from '../data/enhancedServicesCatalog2025';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-400 to-blue-500' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Brain, color: 'from-purple-400 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-purple-400 to-pink-500' },
    { id: 'Blockchain', name: 'Blockchain & Web3', icon: Lock, color: 'from-green-400 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-400 to-pink-500' },
    { id: 'Edge Computing', name: 'IoT & Edge', icon: Cpu, color: 'from-blue-400 to-cyan-500' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: Eye, color: 'from-indigo-400 to-purple-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-green-400 to-blue-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-400 to-indigo-500' }
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const ServiceCard = ({ service }: { service: EnhancedService }) => (
    <motion.div
      key={service.id}
      className="neon-card hover:scale-105 transition-all duration-300 cursor-pointer group"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>

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

            Learn More
          </Link>
          <Link
            to="/contact"
            className="flex-1 btn-neon-cyan text-center text-sm py-2"

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

            Learn More
          </Link>
          <Link
            to="/contact"
            className="btn-neon-cyan text-sm py-2 px-4"

            Get Started
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO 
        title="Enhanced Services Showcase 2025 - Zion Tech Group"
        description="Discover our comprehensive suite of innovative AI, Quantum Computing, Blockchain, and Micro SaaS solutions. Transform your business with cutting-edge technology."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Enhanced Services
                </span>
                <br />
                <span className="text-white">Showcase 2025</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover our comprehensive suite of innovative AI, Quantum Computing, Blockchain, and Micro SaaS solutions. 
                Transform your business with cutting-edge technology designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-200"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="py-8 bg-slate-800/50 border-y border-slate-700/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <GlobeIcon className="w-5 h-5 text-purple-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                  
                  <div className="flex bg-slate-800 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-20 h-20 text-white" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                            {service.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-300 mb-4 line-clamp-3">{service.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Starting Price:</span>
                            <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Market Price:</span>
                            <span className="text-slate-300">{service.marketPrice}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">ROI:</span>
                            <span className="text-green-400 font-semibold">{service.roi}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Innovation Level:</span>
                            <span className="text-purple-400 font-semibold">{service.innovationLevel}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-slate-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link
                            to={service.href}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-center"
                          >
                            Learn More
                          </Link>
                          <Link
                            to="/contact"
                            className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center"
                          >
                            Contact
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View
                    <>
                      <div className={`w-48 h-48 bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="w-20 h-20 text-white" />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                            {service.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-300 mb-4">{service.description}</p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="text-sm text-slate-400">Starting Price</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-slate-300">{service.marketPrice}</div>
                            <div className="text-sm text-slate-400">Market Price</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                            <div className="text-sm text-slate-400">ROI</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-purple-400">{service.innovationLevel}</div>
                            <div className="text-sm text-slate-400">Innovation Level</div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-slate-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link
                            to={service.href}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 hover:scale-105"
                          >
                            Learn More
                          </Link>
                          <Link
                            to="/contact"
                            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
                          >
                            Contact Sales
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                  Join hundreds of companies already leveraging our cutting-edge technology solutions. 
                  Get started today with a personalized consultation and custom implementation plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Get Custom Quote
                  </Link>
                </div>
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

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-400">
              Showing {filteredServices.length} of {enhancedServicesCatalog2025.length} services
              {selectedCategory !== 'all' && (
                <React.Fragment> in <span className="text-cyan-400 font-semibold">{selectedCategory}</span></React.Fragment>
              )}
            ></div>
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
                <React.Fragment> in <span className="text-cyan-400 font-semibold">{selectedCategory}</span></React.Fragment>
              )}
            ></p>
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
};

export default EnhancedServicesShowcase2025;
