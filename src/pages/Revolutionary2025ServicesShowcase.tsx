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