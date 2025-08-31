import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Zap,
  Cloud,
  Database,
  Network,
  Globe,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Users,
  Award,
  Target,
  Lightbulb,
  Cpu,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  BarChart,
  Settings,
  Palette,
  ArrowUpRight,
  Clock3,
  Target2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { innovativeServices2029, ServiceData } from '../data/2029-innovative-ai-saas-services';

const InnovativeServicesShowcase2029: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = ['all', 'AI', 'IT', 'MicroSaaS', 'EmergingTech'];
  const industries = ['all', 'Financial Services', 'Healthcare', 'Technology', 'Manufacturing', 'Government', 'Energy', 'Retail', 'Transportation'];
  const priceRanges = ['all', 'under-5k', '5k-15k', '15k-50k', '50k-plus'];

  const filteredServices = innovativeServices2029.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesIndustry = selectedIndustry === 'all' || service.industries.includes(selectedIndustry);
    
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under-5k' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 5000) ||
      (priceRange === '5k-15k' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 5000 && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 15000) ||
      (priceRange === '15k-50k' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 15000 && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 50000) ||
      (priceRange === '50k-plus' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 50000);

    return matchesSearch && matchesCategory && matchesIndustry && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price-low':
        return parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) - parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.pricing.starter.replace(/[^0-9.]/g, '')) - parseFloat(a.pricing.starter.replace(/[^0-9.]/g, ''));
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI':
        return <Brain className="w-5 h-5" />;
      case 'IT':
        return <Server className="w-5 h-5" />;
      case 'MicroSaaS':
        return <Code className="w-5 h-5" />;
      case 'EmergingTech':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI':
        return 'from-blue-500 to-cyan-500';
      case 'IT':
        return 'from-green-500 to-emerald-500';
      case 'MicroSaaS':
        return 'from-purple-500 to-pink-500';
      case 'EmergingTech':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2029 - Zion Tech Group | Cutting-Edge AI, IT & SaaS Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary 2029 services portfolio featuring AI-powered solutions, enterprise IT services, micro SaaS platforms, and emerging technology innovations." />
        <meta name="keywords" content="AI services 2029, IT solutions, micro SaaS, emerging technology, quantum computing, blockchain, edge computing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2029" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2 text-blue-400" />
                Innovation Showcase 2029
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span> 2029
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the future of technology with our cutting-edge AI, IT, and Micro SaaS solutions. 
                Transform your business with innovative services designed for the digital age.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">{innovativeServices2029.length}</div>
                  <div className="text-gray-400">Innovative Services</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
                  <div className="text-gray-400">Technology Categories</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">8+</div>
                  <div className="text-gray-400">Industries Served</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Industry Filter */}
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>
                      {range === 'all' ? 'All Prices' : 
                       range === 'under-5k' ? 'Under $5K' :
                       range === '5k-15k' ? '$5K - $15K' :
                       range === '15k-50k' ? '$15K - $50K' : '$50K+' }
                    </option>
                  ))}
                </select>

                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover Our {filteredServices.length} Innovative Services
              </h2>
              <p className="text-gray-400 text-lg">
                Filtered by your preferences • {filteredServices.length} services found
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 mb-1">{service.category}</div>
                        <div className="text-lg font-bold text-white">{service.pricing.starter}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-2 mb-4">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="w-full flex items-center justify-center py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                    >
                      {expandedService === service.id ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          Learn More
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-700/50 bg-slate-900/50"
                    >
                      <div className="p-6 space-y-6">
                        {/* Features */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start text-sm text-gray-300">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pricing */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                            Pricing Plans
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-slate-800 rounded-lg">
                              <div className="text-sm text-gray-400">Starter</div>
                              <div className="text-lg font-bold text-white">{service.pricing.starter}</div>
                            </div>
                            <div className="text-center p-3 bg-slate-800 rounded-lg">
                              <div className="text-sm text-gray-400">Enterprise</div>
                              <div className="text-lg font-bold text-white">{service.pricing.enterprise}</div>
                            </div>
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-purple-400" />
                            Use Cases
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.useCases.slice(0, 4).map((useCase, useCaseIndex) => (
                              <div key={useCaseIndex} className="flex items-start text-sm text-gray-300">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4 border-t border-slate-700/50">
                          <Link
                            to={`/services/${service.id}`}
                            className="w-full flex items-center justify-center py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                          >
                            <ArrowRight className="w-5 h-5 mr-2" />
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedIndustry('all');
                    setPriceRange('all');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Let's discuss how our innovative 2029 services can drive your success and give you a competitive edge in the digital age.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-blue-400 font-semibold">+1 302 464 0950</p>
                  <p className="text-gray-400 text-sm">Available Mon-Fri, 9AM-6PM EST</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-purple-400 font-semibold">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-green-400 font-semibold">364 E Main St STE 1008</p>
                  <p className="text-gray-400 text-sm">Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Your Transformation Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeServicesShowcase2029;
