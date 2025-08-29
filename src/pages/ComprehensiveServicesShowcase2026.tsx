import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Rocket,
  Atom,
  Lock,
  Cpu,
  Leaf,
  ShoppingCart,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Network,
  Eye,
  PenTool,
  Heart,
  Building,
  Car,
  Factory,
  City,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';
import { innovativeServices2026, serviceCategories } from '../data/innovativeServices2026';
import { comprehensivePricingGuide2026, pricingCategories, pricingBenefits } from '../data/comprehensivePricingGuide2026';

export default function ComprehensiveServicesShowcase2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const filteredServices = innovativeServices2026.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && parseFloat(service.price.replace('$', '').replace(',', '')) < 500) ||
                        (selectedPriceRange === 'mid' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 500 && parseFloat(service.price.replace('$', '').replace(',', '')) < 2000) ||
                        (selectedPriceRange === 'premium' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 2000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
      case 'implementation':
        return parseInt(a.implementationTime.split('-')[0]) - parseInt(b.implementationTime.split('-')[0]);
      default:
        return b.featured ? 1 : -1;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return <ShoppingCart className="w-6 h-6" />;
      case 'AI Solutions': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Data & Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Blockchain & Web3': return <Globe className="w-6 h-6" />;
      case 'IoT & Edge': return <Cpu className="w-6 h-6" />;
      case 'Green Tech': return <Leaf className="w-6 h-6" />;
      case 'Space Tech': return <Rocket className="w-6 h-6" />;
      case 'BioTech & Health': return <Heart className="w-6 h-6" />;
      case 'FinTech & DeFi': return <DollarSign className="w-6 h-6" />;
      case 'Metaverse & AR/VR': return <Eye className="w-6 h-6" />;
      case 'Autonomous Systems': return <Car className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-orange-500 to-red-500';
      case 'AI Solutions': return 'from-purple-500 to-pink-500';
      case 'IT Services': return 'from-blue-500 to-cyan-500';
      case 'Cybersecurity': return 'from-green-500 to-emerald-500';
      case 'Data & Analytics': return 'from-indigo-500 to-purple-500';
      case 'Cloud & DevOps': return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing': return 'from-violet-500 to-purple-500';
      case 'Blockchain & Web3': return 'from-yellow-500 to-orange-500';
      case 'IoT & Edge': return 'from-teal-500 to-green-500';
      case 'Green Tech': return 'from-green-500 to-teal-500';
      case 'Space Tech': return 'from-blue-500 to-indigo-500';
      case 'BioTech & Health': return 'from-red-500 to-pink-500';
      case 'FinTech & DeFi': return 'from-emerald-500 to-green-500';
      case 'Metaverse & AR/VR': return 'from-purple-500 to-indigo-500';
      case 'Autonomous Systems': return 'from-gray-500 to-blue-500';
      default: return 'from-gray-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Services 2026
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary micro SAAS, IT services, and AI solutions that are transforming industries worldwide. 
              From predictive analytics to quantum computing, we deliver cutting-edge technology with proven ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/20">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">300-600% ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/20">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Fast Implementation</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/20">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-slate-300">Enterprise Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="budget">Under $500</option>
                <option value="mid">$500 - $2,000</option>
                <option value="premium">$2,000+</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="roi">Highest ROI</option>
                <option value="implementation">Fastest Implementation</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-between items-center mt-6">
              <div className="text-slate-400">
                {filteredServices.length} services found
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
                      : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50'
                  }`}
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
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
                      : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50'
                  }`}
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(service.category)} text-white text-sm font-medium`}>
                        {getCategoryIcon(service.category)}
                        <span>{service.category}</span>
                      </div>
                      {service.featured && (
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      )}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and ROI */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-xs text-slate-400 capitalize">{service.billing}</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                        <div className="text-xs text-slate-400">ROI</div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="inline-block px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.href}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Left Column - Basic Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                              {getCategoryIcon(service.category)}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {service.title}
                              </h3>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(service.category)} text-white text-xs font-medium`}>
                                  {service.category}
                                </span>
                                {service.featured && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-300 mb-4 text-lg">
                          {service.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-slate-400">
                                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-300 mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-sm text-slate-400">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Use Cases:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.useCases.map((useCase, idx) => (
                              <span key={idx} className="inline-block px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Pricing & CTA */}
                      <div className="lg:col-span-1">
                        <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                          {/* Pricing */}
                          <div className="text-center mb-6">
                            <div className="text-4xl font-bold text-cyan-400 mb-1">{service.price}</div>
                            <div className="text-slate-400 capitalize">{service.billing}</div>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center">
                              <div className="text-xl font-bold text-green-400">{service.roi}</div>
                              <div className="text-xs text-slate-400">ROI</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-blue-400">{service.implementationTime}</div>
                              <div className="text-xs text-slate-400">Implementation</div>
                            </div>
                          </div>

                          {/* Support Level */}
                          <div className="mb-6">
                            <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
                              <Users className="w-4 h-4" />
                              <span>{service.supportLevel}</span>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <a
                            href={service.href}
                            className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          >
                            {service.ctaLabel}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with proven ROI, competitive pricing, and world-class support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-600/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Let's discuss how our innovative services can drive growth, reduce costs, and give you a competitive advantage in 2026 and beyond.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <a href="https://ziontechgroup.com/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a href="https://ziontechgroup.com/contact" className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300">
                    Schedule Demo
                  </a>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Services Available</span>
                      <span className="text-2xl font-bold text-cyan-400">{innovativeServices2026.length}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Average ROI</span>
                      <span className="text-2xl font-bold text-green-400">400%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Implementation Time</span>
                      <span className="text-2xl font-bold text-blue-400">2-24 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Support Level</span>
                      <span className="text-2xl font-bold text-purple-400">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}