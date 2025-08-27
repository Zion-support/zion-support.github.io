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
  Globe,
  Atom,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3,
  Rocket,
  Cpu,
  Network,
  Database,
  Lock,
  Leaf,
  Scale,
  Stethoscope,
  Car,
  Building2,
  DollarSign,
  Award,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Play,
  Eye,
  X,
  Flask,
  Calculator,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle
} from 'lucide-react';
import { revolutionary2025AdvancedMicroSaasServices } from '../data/revolutionary-2025-advanced-micro-saas-v2';
import { revolutionary2025SpecializedITAIServices } from '../data/revolutionary-2025-specialized-it-ai-services';

// Combine all services
const ALL_SERVICES = [...revolutionary2025AdvancedMicroSaasServices, ...revolutionary2025SpecializedITAIServices];

const Revolutionary2025ServicesShowcase: React.FC = () => {
  const [services, setServices] = useState<any[]>(ALL_SERVICES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');
  const [sortBy, setSortBy] = useState('title');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'comparison'>('grid');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Filter services based on search and filters
  useEffect(() => {
    let filtered = ALL_SERVICES;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    if (selectedROI !== 'all') {
      const [min, max] = selectedROI.split('-').map(Number);
      filtered = filtered.filter(service => {
        const roi = parseInt(service.roi.match(/\d+/)?.[0] || '0');
        if (max) {
          return roi >= min && roi <= max;
        }
        return roi >= min;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setServices(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, selectedROI, sortBy]);

  const categories = Array.from(new Set(ALL_SERVICES.map(service => service.category)));

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedServicesData = ALL_SERVICES.filter(service => selectedServices.includes(service.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary 2025 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge AI, Quantum Computing, and Autonomous Technology Solutions
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover our revolutionary micro SAAS services that combine the power of artificial intelligence, 
              quantum computing, and autonomous operations to transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Prices</option>
                <option value="0-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-1500">$1,000 - $1,500</option>
                <option value="1500-9999">Over $1,500</option>
              </select>

              <select
                value={selectedROI}
                onChange={(e) => setSelectedROI(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All ROI</option>
                <option value="500-600">500% - 600%</option>
                <option value="600-700">600% - 700%</option>
                <option value="700-800">700% - 800%</option>
                <option value="800-999">800%+</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="title">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="customers">Sort by Customers</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-800 text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-800 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('comparison')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'comparison' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-800 text-gray-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Service Recommendation Engine */}
      <section className="py-16 bg-gradient-to-r from-slate-900/40 to-gray-900/40">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI-Powered Service Recommendations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let our intelligent system find the perfect services for your business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-blue-600/20 to-cyan-700/20 p-6 rounded-xl border border-blue-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Business Size</h3>
              </div>
              <p className="text-gray-300 mb-4">Select your company size to get tailored recommendations</p>
              <select className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
                <option>Startup (1-10 employees)</option>
                <option>Small Business (11-50 employees)</option>
                <option>Medium Business (51-200 employees)</option>
                <option>Enterprise (200+ employees)</option>
              </select>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-purple-600/20 to-indigo-700/20 p-6 rounded-xl border border-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Industry Focus</h3>
              </div>
              <p className="text-gray-300 mb-4">Choose your industry for specialized solutions</p>
              <select className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500">
                <option>Technology & Software</option>
                <option>Healthcare & Biotech</option>
                <option>Finance & Banking</option>
                <option>Manufacturing</option>
                <option>Retail & E-commerce</option>
                <option>Education</option>
              </select>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-green-600/20 to-emerald-700/20 p-6 rounded-xl border border-green-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Priority Goals</h3>
              </div>
              <p className="text-gray-300 mb-4">What are your main business objectives?</p>
              <select className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-green-500">
                <option>Cost Reduction</option>
                <option>Efficiency Improvement</option>
                <option>Security Enhancement</option>
                <option>Innovation & Growth</option>
                <option>Compliance & Risk</option>
              </select>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Get AI Recommendations
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {services.length} Revolutionary Services Found
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge solutions designed to transform your business operations
            </p>
          </div>

          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{service.rating}</span>
                      <span>•</span>
                      <span>{service.reviews} reviews</span>
                      <span>•</span>
                      <span>{service.customers} customers</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{service.category}</span>
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {viewMode === 'list' && (
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-400">Price</span>
                          <div className="text-xl font-bold text-cyan-400">{service.price}{service.period}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Rating</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{service.rating}</span>
                            <span className="text-gray-400">({service.reviews})</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Category</span>
                          <div className="text-white">{service.category}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {viewMode === 'comparison' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Service Comparison</h3>
                <p className="text-gray-300">Select up to 3 services to compare features and pricing</p>
              </div>

              {selectedServicesData.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="p-4 text-left text-white">Feature</th>
                        {selectedServicesData.map(service => (
                          <th key={service.id} className="p-4 text-left text-white">
                            <div className="text-center">
                              <div className="text-2xl mb-2">{service.icon}</div>
                              <div className="font-bold">{service.name}</div>
                              <div className="text-cyan-400 font-bold">{service.price}</div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="p-4 text-gray-300 font-semibold">Category</td>
                        {selectedServicesData.map(service => (
                          <td key={service.id} className="p-4 text-white">{service.category}</td>
                        ))}
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-4 text-gray-300 font-semibold">Rating</td>
                        {selectedServicesData.map(service => (
                          <td key={service.id} className="p-4 text-white">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              {service.rating}
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-4 text-gray-300 font-semibold">Customers</td>
                        {selectedServicesData.map(service => (
                          <td key={service.id} className="p-4 text-white">{service.customers}</td>
                        ))}
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-4 text-gray-300 font-semibold">Setup Time</td>
                        {selectedServicesData.map(service => (
                          <td key={service.id} className="p-4 text-white">{service.setupTime}</td>
                        ))}
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-4 text-gray-300 font-semibold">Trial Days</td>
                        {selectedServicesData.map(service => (
                          <td key={service.id} className="p-4 text-white">{service.trialDays} days</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-300 font-semibold">Features</td>
                        {selectedServicesData.map(service => (
                          <td key={service.id} className="p-4 text-white">
                            <ul className="space-y-1">
                              {service.features.slice(0, 5).map((feature, idx) => (
                                <li key={idx} className="text-sm flex items-center">
                                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">Select services from the grid or list view to compare</p>
                  <button
                    onClick={() => setViewMode('grid')}
                    className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    View Services
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Competitive Pricing Plans
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs with transparent pricing and unmatched value
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-green-600/20 to-emerald-700/20 p-8 rounded-xl border border-green-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Starter Plan</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">$2,999</div>
              <p className="text-gray-300 mb-6">per month</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI Integration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Core Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Monthly Updates
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-blue-600/20 to-cyan-700/20 p-8 rounded-xl border-2 border-blue-500/50 transform scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Plan</h3>
              <div className="text-4xl font-bold text-blue-400 mb-2">$7,999</div>
              <p className="text-gray-300 mb-6">per month</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Advanced AI Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Custom Integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Weekly Updates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Dedicated Account Manager
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-purple-600/20 to-indigo-700/20 p-8 rounded-xl border border-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Plan</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$19,999</div>
              <p className="text-gray-300 mb-6">per month</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  Full AI Suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  24/7 Premium Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  Daily Updates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  White-label Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  SLA Guarantee
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Get Started
              </button>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Free Setup & Migration
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                45-Day Money-Back Guarantee
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                No Hidden Fees
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Flexible Billing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already transforming their operations with our revolutionary AI, Quantum, and Autonomous technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setViewMode('grid')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
              </button>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Revolutionary 2025 Services Consultation"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>🚀 No setup fees • 📞 24/7 support • 💰 45-day free trial</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Evolution Roadmap */}
      <section className="py-20 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Service Evolution Roadmap
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            See how our services evolve and improve over time with cutting-edge technology
          </p>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              <motion.div
                className="relative flex items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-amber-600/20 to-orange-700/20 p-6 rounded-xl border border-amber-500/30">
                    <h3 className="text-xl font-semibold text-white mb-2">2024 Foundation</h3>
                    <p className="text-gray-300 text-sm">Core AI and IT services established</p>
                    <div className="mt-3 text-amber-400 text-xs">✓ Basic AI Integration</div>
                    <div className="text-amber-400 text-xs">✓ IT Infrastructure</div>
                    <div className="text-amber-400 text-xs">✓ Cybersecurity Basics</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-900"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="text-amber-400 font-bold">Q4 2024</div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative flex items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-orange-400 font-bold">Q2 2025</div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="bg-gradient-to-r from-orange-600/20 to-red-700/20 p-6 rounded-xl border border-orange-500/30">
                    <h3 className="text-xl font-semibold text-white mb-2">2025 Revolution</h3>
                    <p className="text-gray-300 text-sm">Advanced AI and Quantum services</p>
                    <div className="mt-3 text-orange-400 text-xs">✓ Autonomous AI Systems</div>
                    <div className="text-orange-400 text-xs">✓ Quantum Computing</div>
                    <div className="text-orange-400 text-xs">✓ Advanced Cybersecurity</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative flex items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-red-600/20 to-pink-700/20 p-6 rounded-xl border border-red-500/30">
                    <h3 className="text-xl font-semibold text-white mb-2">2026 Innovation</h3>
                    <p className="text-gray-300 text-sm">Next-generation autonomous systems</p>
                    <div className="mt-3 text-red-400 text-xs">✓ Full AI Autonomy</div>
                    <div className="text-red-400 text-xs">✓ Quantum Supremacy</div>
                    <div className="text-red-400 text-xs">✓ Space Tech Integration</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-slate-900"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="text-red-400 font-bold">Q4 2026</div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative flex items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-pink-400 font-bold">Q2 2027</div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-slate-900"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="bg-gradient-to-r from-pink-600/20 to-purple-700/20 p-6 rounded-xl border border-pink-500/30">
                    <h3 className="text-xl font-semibold text-white mb-2">2027 & Beyond</h3>
                    <p className="text-gray-300 text-sm">Futuristic technologies and beyond</p>
                    <div className="mt-3 text-pink-400 text-xs">✓ AGI Systems</div>
                    <div className="text-pink-400 text-xs">✓ Quantum Internet</div>
                    <div className="text-pink-400 text-xs">✓ Interstellar Tech</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Built with the latest AI, Quantum Computing, and Autonomous technologies
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-700/20 p-6 rounded-xl border border-blue-500/30 group-hover:border-blue-400 transition-all duration-300">
                <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">AI/ML</h3>
                <p className="text-gray-300 text-sm">Advanced Neural Networks, Deep Learning, NLP</p>
              </div>
            </motion.div>
            
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-700/20 p-6 rounded-xl border border-purple-500/30 group-hover:border-purple-400 transition-all duration-300">
                <Atom className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-300 text-sm">Quantum Algorithms, Superposition, Entanglement</p>
              </div>
            </motion.div>
            
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-700/20 p-6 rounded-xl border border-green-500/30 group-hover:border-green-400 transition-all duration-300">
                <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Autonomous Systems</h3>
                <p className="text-gray-300 text-sm">Self-Driving Operations, Auto-Scaling, ML-Ops</p>
              </div>
            </motion.div>
            
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-red-600/20 to-pink-700/20 p-6 rounded-xl border border-red-500/30 group-hover:border-red-400 transition-all duration-300">
                <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">Zero-Trust, AI-Powered Threat Detection</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">99.99%</div>
              <p className="text-gray-300 text-sm">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">50ms</div>
              <p className="text-gray-300 text-sm">Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">256-bit</div>
              <p className="text-gray-300 text-sm">Encryption</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">24/7</div>
              <p className="text-gray-300 text-sm">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/40 to-slate-900/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Revolutionary Impact by the Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">800%</div>
              <p className="text-gray-300">Average ROI</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">90%</div>
              <p className="text-gray-300">Time Reduction</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">1,500+</div>
              <p className="text-gray-300">Happy Clients</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Autonomous Operation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover how our revolutionary services are transforming businesses across industries
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-purple-600/20 to-indigo-700/20 p-8 rounded-xl border border-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The AI Autonomous Business Operations Platform has revolutionized our entire operation. We've seen an 800% ROI within just 12 months."
              </p>
              <div className="text-center">
                <p className="text-white font-semibold">Sarah Johnson</p>
                <p className="text-gray-400 text-sm">CTO, TechCorp Solutions</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-cyan-600/20 to-blue-700/20 p-8 rounded-xl border border-cyan-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The Quantum-Enhanced Cybersecurity Suite provides unmatched protection. It's like having a security team that never sleeps."
              </p>
              <div className="text-center">
                <p className="text-white font-semibold">Michael Chen</p>
                <p className="text-gray-400 text-sm">CISO, GlobalBank Inc.</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-green-600/20 to-emerald-700/20 p-8 rounded-xl border border-green-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "AI Autonomous DevOps Platform has reduced our deployment time by 90% and eliminated human errors completely."
              </p>
              <div className="text-center">
                <p className="text-white font-semibold">David Rodriguez</p>
                <p className="text-gray-400 text-sm">DevOps Lead, CloudScale Tech</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us to learn more about our revolutionary services and how they can drive your success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Grid and List icons for the view mode toggle
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

export default Revolutionary2025ServicesShowcase;