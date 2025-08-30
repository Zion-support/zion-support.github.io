import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Shield,
  Cloud,
  Rocket,
  Atom,
  Users,
  BarChart3,
  Zap,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  Grid3X3,
  List,
  ExternalLink,
  Play,
  BookOpen,
  MessageCircle,
  Calendar,
  DollarSign,
  Clock,
  Target,
  Award,
  Globe,
  Lock,
  Eye,
  Code,
  Database,
  Network,
  Server,
  Smartphone,
  Heart,
  Leaf,
  Satellite,
  Link as LinkIcon
} from 'lucide-react';
import { innovativeServices2025 } from '../data/innovativeServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Computing',
    'Blockchain & Web3',
    'Space Technology',
    'Green Technology',
    'Cybersecurity',
    'Micro SaaS',
    'Data & Analytics',
    'Cloud & DevOps',
    'Digital Transformation'
  ];

  const filteredServices = innovativeServices2025
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (searchQuery === '' || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return Brain;
      case 'Quantum Computing': return Atom;
      case 'Blockchain & Web3': return LinkIcon;
      case 'Space Technology': return Satellite;
      case 'Green Technology': return Leaf;
      case 'Cybersecurity': return Shield;
      case 'Micro SaaS': return Users;
      case 'Data & Analytics': return BarChart3;
      case 'Cloud & DevOps': return Cloud;
      case 'Digital Transformation': return Zap;
      default: return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return 'from-blue-600 to-indigo-700';
      case 'Quantum Computing': return 'from-purple-600 to-violet-700';
      case 'Blockchain & Web3': return 'from-green-600 to-emerald-700';
      case 'Space Technology': return 'from-slate-600 to-gray-700';
      case 'Green Technology': return 'from-green-500 to-emerald-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-700';
      case 'Micro SaaS': return 'from-blue-500 to-cyan-600';
      case 'Data & Analytics': return 'from-indigo-600 to-purple-700';
      case 'Cloud & DevOps': return 'from-cyan-600 to-blue-700';
      case 'Digital Transformation': return 'from-orange-600 to-red-700';
      default: return 'from-gray-600 to-slate-700';
    }
  };

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's cutting-edge innovative services for 2025. AI, Quantum Computing, Blockchain, Space Technology, and more. Transform your business with next-generation solutions." />
        <meta name="keywords" content="innovative services 2025, AI services, quantum computing, blockchain solutions, space technology, green technology, cybersecurity, micro SaaS" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2306b6d1" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron">
                Innovative Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Showcase 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover the future of technology with our cutting-edge AI, Quantum Computing, 
                Blockchain, and Space Technology solutions. Transform your business with 
                next-generation innovations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">50+ Services</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Market Leading</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Proven ROI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-y border-cyan-500/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-black/30 text-gray-300 hover:bg-black/50 hover:text-white border border-cyan-500/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode and Sort */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-black/30 rounded-lg p-1 border border-cyan-500/30">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-black/30 border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="name">Name A-Z</option>
                  <option value="price">Price Low-High</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                {selectedCategory === 'All' ? 'All Innovative Services' : `${selectedCategory} Services`}
              </h2>
              <p className="text-gray-400 text-center max-w-2xl mx-auto">
                {filteredServices.length} services found. Each solution is designed to deliver 
                exceptional value and drive innovation in your organization.
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                            <span className="text-2xl">{service.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-sm text-gray-400">{service.category}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          {service.featured && (
                            <span className="bg-purple-500/20 text-purple-400 px-2 py-1 text-xs font-medium rounded-full">
                              Featured
                            </span>
                          )}
                          {service.new && (
                            <span className="bg-green-500/20 text-green-400 px-2 py-1 text-xs font-medium rounded-full">
                              New
                            </span>
                          )}
                          {service.popular && (
                            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 text-xs font-medium rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.tagline}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-cyan-400">
                            {service.price}
                            <span className="text-sm text-gray-400 font-normal ml-1">/{service.billing}</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.implementationTime}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                                <CheckCircle className="w-3 h-3 text-cyan-400" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                          <div className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                                <TrendingUp className="w-3 h-3 text-green-400" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* ROI and Market Info */}
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="bg-black/30 rounded-lg p-3">
                            <div className="text-gray-400 mb-1">ROI</div>
                            <div className="text-green-400 font-semibold">{service.roi}</div>
                          </div>
                          <div className="bg-black/30 rounded-lg p-3">
                            <div className="text-gray-400 mb-1">Market Size</div>
                            <div className="text-cyan-400 font-semibold">{service.marketSize}</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-4">
                          <a
                            href={service.link}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                            className="px-4 py-2 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Icon and Basic Info */}
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                          <span className="text-3xl">{service.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-400 mb-2">{service.category}</p>
                          <p className="text-gray-300 max-w-md">{service.tagline}</p>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-black/30 rounded-lg p-4">
                            <div className="text-gray-400 text-sm mb-1">Pricing</div>
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="text-gray-400 text-sm">/{service.billing}</div>
                          </div>
                          <div className="bg-black/30 rounded-lg p-4">
                            <div className="text-gray-400 text-sm mb-1">Implementation</div>
                            <div className="text-xl font-semibold text-white">{service.implementationTime}</div>
                            <div className="text-gray-400 text-sm">setup time</div>
                          </div>
                          <div className="bg-black/30 rounded-lg p-4">
                            <div className="text-gray-400 text-sm mb-1">ROI</div>
                            <div className="text-xl font-semibold text-green-400">{service.roi}</div>
                            <div className="text-gray-400 text-sm">return on investment</div>
                          </div>
                        </div>

                        {/* Features and Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                            <div className="space-y-2">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3">Benefits</h4>
                            <div className="space-y-2">
                              {service.benefits.slice(0, 4).map((benefit, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                  <TrendingUp className="w-4 h-4 text-green-400" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4">
                          <a
                            href={service.link}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                            className="px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors flex items-center space-x-2"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Contact Sales</span>
                          </a>
                          <a
                            href={`tel:${service.contactInfo.mobile}`}
                            className="px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors flex items-center space-x-2"
                          >
                            <Phone className="w-4 h-4" />
                            <span>Call Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or category filter
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-t border-cyan-500/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of organizations already leveraging our innovative services 
                to drive growth, efficiency, and competitive advantage.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-medium text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeServicesShowcase2025;