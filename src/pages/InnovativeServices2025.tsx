import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Lock,
  Cloud,
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  DollarSign,
  Clock,
  Award,
  TrendingDown,
  Sparkles,
  Lightbulb,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Cpu as CpuIcon,
  Atom as AtomIcon,
  BarChart3 as BarChartIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Users as UsersIcon,
  Lock as LockIcon,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, INNOVATIVE_IT_SERVICES_2025, INNOVATIVE_AI_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { COMPREHENSIVE_PRICING_GUIDE_2025, PRICING_COMPARISON_MATRIX } from '../data/comprehensivePricingGuide2025';

export function InnovativeServices2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-blue-500 to-cyan-600' },
    { id: 'AI-Powered Workflow Automation', name: 'AI Workflow Automation', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'Quantum Computing & AI', name: 'Quantum Computing', icon: Atom, color: 'from-cyan-500 to-blue-600' },
    { id: 'AI-Powered Cybersecurity', name: 'AI Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'Data Analytics & Integration', name: 'Data Analytics', icon: BarChart3, color: 'from-yellow-500 to-orange-600' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-green-500 to-teal-600' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: Cpu, color: 'from-indigo-500 to-purple-600' },
    { id: 'Blockchain & Web3', name: 'Blockchain', icon: Code, color: 'from-orange-500 to-red-600' },
    { id: 'Marketing & Sales', name: 'Marketing & Sales', icon: TrendingUp, color: 'from-pink-500 to-purple-600' },
    { id: 'Customer Service', name: 'Customer Service', icon: Users, color: 'from-teal-500 to-green-600' },
    { id: 'Compliance & Governance', name: 'Compliance', icon: Lock, color: 'from-gray-500 to-slate-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1,000', range: '< $1,000' },
    { id: 'medium', name: '$1,000 - $3,000', range: '$1,000 - $3,000' },
    { id: 'high', name: 'Over $3,000', range: '> $3,000' }
  ];

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(service => ({ ...service, type: 'Micro SAAS' })),
    ...INNOVATIVE_IT_SERVICES_2025.map(service => ({ ...service, type: 'IT Service' })),
    ...INNOVATIVE_AI_SERVICES_2025.map(service => ({ ...service, type: 'AI Service' }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') {
      matchesPrice = service.price < 1000;
    } else if (priceRange === 'medium') {
      matchesPrice = service.price >= 1000 && service.price <= 3000;
    } else if (priceRange === 'high') {
      matchesPrice = service.price > 3000;
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-gray-500 to-slate-600';
  };

  const getPriceRange = (price: number) => {
    if (price < 1000) return 'low';
    if (price <= 3000) return 'medium';
    return 'high';
  };

  const getPriceColor = (price: number) => {
    const range = getPriceRange(price);
    switch (range) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPriceRangeColor = (price: number) => {
    const range = getPriceRange(price);
    switch (range) {
      case 'low': return 'bg-green-500/20 text-green-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'high': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionary Services 2025
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our cutting-edge micro SAAS services, AI-powered platforms, and emerging technology solutions. 
              Each service is designed with proven ROI and market-leading capabilities to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request a Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                                      {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getPriceRangeColor(service.price)}`}>
                  {getPriceRange(service.price) === 'low' ? 'Budget' : getPriceRange(service.price) === 'medium' ? 'Mid-Range' : 'Premium'}
                </div>
              </div>

              {/* Service Type Badge */}
              <div className="mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                  {service.type}
                </span>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Price and Features */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">
                    {service.pricingModel}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-6 p-3 bg-gray-700/50 rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">Market Size:</span>
                    <div className="text-white font-medium">{service.marketSize}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Growth Rate:</span>
                    <div className="text-white font-medium">{service.growthRate}</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  <span>Get Started</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Comparison Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Competitive Pricing Analysis
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our innovative services compare to market leaders in terms of features, pricing, and value.
            </p>
          </motion.div>

          <div className="space-y-8">
            {PRICING_COMPARISON_MATRIX.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Zion Service */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">{comparison.serviceName}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{comparison.zionPrice}</div>
                    <div className="text-green-400 font-medium mb-4">Best Value</div>
                    <div className="space-y-2">
                      {comparison.valueProposition.map((proposition, propIndex) => (
                        <div key={propIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{proposition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Competitors */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-white mb-4">Market Comparison</h4>
                    <div className="space-y-4">
                      {comparison.competitorPrices.map((competitor, compIndex) => (
                        <div key={compIndex} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                          <div>
                            <div className="font-medium text-white">{competitor.name}</div>
                            <div className="text-sm text-gray-400">{competitor.price}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-300">
                              {competitor.features.slice(0, 2).join(', ')}
                            </div>
                            <div className="text-xs text-gray-500">
                              +{competitor.features.length - 2} more features
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Special Offers & Discounts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2025.specialOffers).map(([key, offer], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </h3>
                  <p className="text-green-100">{offer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-2xl p-12 border border-gray-700"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Contact our team of experts to discuss how our innovative services can help you achieve your technology goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">{COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.phone}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">{COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.email}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-gray-400">{COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.website}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-400 text-sm">{COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.address}</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Contact Sales Team</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
                >
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Market Trends Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Market Trends 2025
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay ahead of the curve with insights into the fastest-growing technology markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2025.marketTrends).map(([key, trend], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h3>
                <p className="text-gray-400 text-sm">{trend}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROI Expectations */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Expected Return on Investment
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our services are designed to deliver measurable business value and rapid ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2025.roiExpectations).map(([key, roi], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl p-6 border border-green-500/30"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h3>
                <p className="text-green-400 font-bold text-lg">{roi}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Digital Transformation Today
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies that have already transformed their business with our innovative services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request Demo</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default InnovativeServices2025;