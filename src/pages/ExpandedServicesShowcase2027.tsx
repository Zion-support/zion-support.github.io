import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Network, 
  Database, 
  Lock, 
  Leaf, 
  Scale, 
  Stethoscope, 
  Rocket, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Star,
  Users,
  Target,
  Clock,
  BarChart3,
  Award,
  Lightbulb,
  Code,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Satellite,
  Atom,
  CircuitBoard,
  Fingerprint,
  Eye,
  Heart,
  Gavel,
  LeafyGreen,
  Wind,
  Sun,
  Droplets,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { EXPANDED_INNOVATIVE_SERVICES_2027 } from '../data/expandedInnovativeServices2027';
import { SPECIALIZED_ENTERPRISE_SERVICES_2027 } from '../data/specializedEnterpriseServices2027';

const ExpandedServicesShowcase2027: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine all services
  const allServices = [...EXPANDED_INNOVATIVE_SERVICES_2027, ...SPECIALIZED_ENTERPRISE_SERVICES_2027];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Quantum': <Atom className="w-5 h-5" />,
      'Healthcare': <Stethoscope className="w-5 h-5" />,
      'Financial': <Scale className="w-5 h-5" />,
      'Legal': <Gavel className="w-5 h-5" />,
      'Marketing': <TrendingUp className="w-5 h-5" />,
      'Customer': <Users className="w-5 h-5" />,
      'IoT': <Wifi className="w-5 h-5" />,
      'HR': <Users className="w-5 h-5" />,
      'Supply Chain': <Globe className="w-5 h-5" />,
      'Cloud': <Cloud className="w-5 h-5" />,
      'Data': <Database className="w-5 h-5" />,
      'Compliance': <CheckCircle className="w-5 h-5" />,
      'Identity': <Fingerprint className="w-5 h-5" />,
      'Project': <Target className="w-5 h-5" />,
      'Business Intelligence': <BarChart3 className="w-5 h-5" />,
      'Migration': <ArrowRight className="w-5 h-5" />
    };

    for (const [key, icon] of Object.entries(iconMap)) {
      if (category.includes(key)) return icon;
    }
    return <Code className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Quantum': 'from-blue-500 to-cyan-500',
      'Healthcare': 'from-green-500 to-emerald-500',
      'Financial': 'from-yellow-500 to-orange-500',
      'Legal': 'from-indigo-500 to-purple-500',
      'Marketing': 'from-pink-500 to-rose-500',
      'Customer': 'from-blue-500 to-indigo-500',
      'IoT': 'from-teal-500 to-cyan-500',
      'HR': 'from-emerald-500 to-teal-500',
      'Supply Chain': 'from-orange-500 to-red-500',
      'Cloud': 'from-sky-500 to-blue-500',
      'Data': 'from-violet-500 to-purple-500',
      'Compliance': 'from-green-500 to-emerald-500',
      'Identity': 'from-amber-500 to-yellow-500',
      'Project': 'from-indigo-500 to-purple-500',
      'Business Intelligence': 'from-cyan-500 to-blue-500',
      'Migration': 'from-emerald-500 to-green-500'
    };

    for (const [key, color] of Object.entries(colorMap)) {
      if (category.includes(key)) return color;
    }
    return 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Expanded Services Portfolio 2027
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations and drive unprecedented growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-2 text-zion-cyan">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">{allServices.length} Innovative Services</span>
            </div>
            <div className="flex items-center space-x-2 text-zion-purple">
              <Star className="w-5 h-5" />
              <span className="font-medium">Enterprise-Grade Solutions</span>
            </div>
            <div className="flex items-center space-x-2 text-zion-blue">
              <Award className="w-5 h-5" />
              <span className="font-medium">Industry-Leading Technology</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-slate-dark/50 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or industries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>

                {/* View Mode */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/50' 
                        : 'bg-zion-slate-dark/80 text-zion-slate-light border border-zion-cyan/20 hover:bg-zion-cyan/10'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/50' 
                        : 'bg-zion-slate-dark/80 text-zion-slate-light border border-zion-cyan/20 hover:bg-zion-cyan/10'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white rounded-xl hover:bg-zion-cyan/80 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-zion-slate-dark/50 backdrop-blur-xl rounded-2xl border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="text-right">
                        <div className="text-zion-cyan font-bold text-lg">
                          {formatPrice(service.price)}
                        </div>
                        <div className="text-zion-slate-light text-sm">per month</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-lg border border-zion-cyan/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-zion-slate-light text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.estimatedDelivery}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
                      >
                        <span className="text-sm font-medium">
                          {expandedService === service.id ? 'Show Less' : 'Learn More'}
                        </span>
                        {expandedService === service.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Service Details */}
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`border-t border-zion-cyan/20 bg-zion-slate-dark/30 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Features */}
                          <div>
                            <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {service.features.slice(0, 5).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                                  <span className="text-zion-slate-light text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="text-lg font-semibold text-zion-cyan mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {service.benefits.slice(0, 5).map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start space-x-2">
                                  <TrendingUp className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                                  <span className="text-zion-slate-light text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Technical Specs */}
                        {service.technicalSpecs && (
                          <div className="mt-6 p-4 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20">
                            <h4 className="text-lg font-semibold text-zion-cyan mb-3">Technical Specifications</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <div className="text-zion-slate-light text-sm mb-2">Technology Stack</div>
                                <div className="flex flex-wrap gap-2">
                                  {service.technicalSpecs.technology.slice(0, 3).map((tech, techIndex) => (
                                    <span key={techIndex} className="px-2 py-1 bg-zion-purple/10 text-zion-purple text-xs rounded-lg border border-zion-purple/20">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <div className="text-zion-slate-light text-sm mb-2">Uptime & Security</div>
                                <div className="space-y-1">
                                  <div className="text-white text-sm">Uptime: {service.technicalSpecs.uptime}</div>
                                  <div className="text-white text-sm">API Endpoints: {service.technicalSpecs.apiEndpoints}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Market Information */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20">
                            <div className="text-zion-slate-light text-sm mb-1">Market Price</div>
                            <div className="text-zion-cyan font-semibold">{service.marketPrice}</div>
                          </div>
                          <div className="text-center p-4 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20">
                            <div className="text-zion-slate-light text-sm mb-1">ROI</div>
                            <div className="text-zion-purple font-semibold">{service.roi}</div>
                          </div>
                          <div className="text-center p-4 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20">
                            <div className="text-zion-slate-light text-sm mb-1">Innovation Level</div>
                            <div className="text-zion-blue font-semibold">{service.innovationLevel}</div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/30">
                          <h4 className="text-lg font-semibold text-zion-cyan mb-3">Get Started Today</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-zion-slate-light">
                                <Phone className="w-4 h-4 text-zion-cyan" />
                                <span className="text-sm">{service.contactInfo.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-zion-slate-light">
                                <Mail className="w-4 h-4 text-zion-cyan" />
                                <span className="text-sm">{service.contactInfo.email}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-zion-slate-light">
                                <MapPin className="w-4 h-4 text-zion-cyan" />
                                <span className="text-sm">{service.contactInfo.address}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-zion-slate-light">
                                <ExternalLink className="w-4 h-4 text-zion-cyan" />
                                <a 
                                  href={service.contactInfo.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-zion-cyan hover:text-zion-cyan/80 text-sm"
                                >
                                  Visit Website
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl p-12 border border-zion-cyan/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-zion-cyan text-white rounded-xl hover:bg-zion-cyan/80 transition-colors duration-300 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-zion-purple text-white rounded-xl hover:bg-zion-purple/80 transition-colors duration-300 font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p className="text-sm">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-sm mt-2">
                <strong>Website:</strong>{' '}
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan/80"
                >
                  https://ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpandedServicesShowcase2027;