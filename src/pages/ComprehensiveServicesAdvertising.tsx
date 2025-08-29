import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  TrendingUp, 
  Zap,
  Shield,
  Brain,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Lock,
  Users,
  BarChart3,
  Target,
  Lightbulb,
  Code,
  Palette,
  Camera,
  MessageSquare,
  FileText,
  ShoppingCart,
  Truck,
  Factory,
  Leaf,
  Car,
  Building,
  Eye,
  Network,
  Atom,
  Dna,
  Sun,
  Satellite,
  Wifi,
  CloudRain,
  Monitor,
  Settings
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesAdvertising() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-purple-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: Target, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Users, color: 'from-pink-500 to-red-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: Shield, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: Settings, color: 'from-gray-500 to-slate-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Lock, color: 'from-red-500 to-orange-500' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Rocket, color: 'from-violet-500 to-purple-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: Satellite, color: 'from-purple-500 to-pink-500' }
  ];

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Business Intelligence': Brain,
      'AI & Marketing': Target,
      'AI & Healthcare': Users,
      'AI & Legal Tech': Shield,
      'AI & Operations': Settings,
      'AI & Green Tech': Leaf,
      'AI & Autonomous Systems': Car,
      'AI & FinTech': TrendingUp,
      'AI & Environmental Tech': CloudRain,
      'AI & Content': FileText,
      'AI & Customer Support': MessageSquare,
      'AI & HR': Users,
      'AI & Research': Lightbulb,
      'AI & Metaverse': Eye,
      'AI & Space Tech': Satellite,
      'AI & Development': Code,
      'AI & Education': Users,
      'AI & Entertainment': Palette,
      'Cybersecurity': Lock,
      'Cloud & DevOps': Cloud,
      'Quantum Computing': Atom,
      'IoT & Edge Computing': Cpu,
      'Blockchain & Web3': Network,
      'Digital Twin': Database,
      'Space Technology': Satellite,
      'Sustainable Technology': Leaf,
      'IT Infrastructure': Building,
      'Emerging Technology': Rocket,
      'Enterprise Solutions': Building,
      'Advanced Analytics': BarChart3,
      'Predictive Maintenance': Settings,
      'Supply Chain Management': Truck,
      'Threat Intelligence': Shield,
      'Financial Risk Management': TrendingUp,
      'Smart Cities': Building,
      'Fleet Management': Car,
      'Content Creation': FileText,
      'SEO Optimization': Target,
      'Project Management': Users,
      'Email Marketing': Mail,
      'Social Media Management': MessageSquare,
      'Workflow Automation': Zap,
      'Inventory Management': ShoppingCart,
      'Metaverse Development': Eye,
      'Brain-Computer Interface': Brain,
      'Synthetic Biology': Dna,
      'Fusion Energy': Sun,
      'Space Mining': Satellite,
      'Quantum Internet': Wifi,
      'Climate Modeling': CloudRain,
      'Holographic Displays': Monitor
    };
    return iconMap[category] || Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive AI & Technology Services 2030 | Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge AI, quantum computing, cybersecurity, and emerging technology services. Transform your business with Zion Tech Group's innovative solutions."
        keywords="AI services, quantum computing, cybersecurity, emerging technology, micro SAAS, enterprise solutions, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Technology Services 2030
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI, quantum computing, cybersecurity, and emerging technology solutions. 
              From micro SAAS to enterprise platforms, we deliver innovation that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                <Phone className="inline-block mr-2" />
                Contact Us: +1 302 464 0950
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                <Mail className="inline-block mr-2" />
                kleber@ziontechgroup.com
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered business solutions to cutting-edge quantum computing and emerging technologies, 
              we offer the most comprehensive range of innovative services in the industry.
            </p>
          </motion.div>

          {/* Service Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-6 text-center border border-blue-500/30"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{COMPREHENSIVE_SERVICES_INDEX_2030.length}+</div>
              <div className="text-gray-300">Total Services</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-6 text-center border border-purple-500/30"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{categories.length}</div>
              <div className="text-gray-300">Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-lg p-6 text-center border border-pink-500/30"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">95%+</div>
              <div className="text-gray-300">AI Score</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-6 text-center border border-green-500/30"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">500%+</div>
              <div className="text-gray-300">Average ROI</div>
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <CategoryIcon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-2xl font-bold text-green-400">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-gray-300">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Setup Time:</span>
                      <span className="text-gray-300">{service.setupTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">AI Score: {service.aiScore}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already leveraging our cutting-edge technology solutions. 
              Get started today and experience the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                <Phone className="inline-block mr-2" />
                Call +1 302 464 0950
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                <Mail className="inline-block mr-2" />
                Email kleber@ziontechgroup.com
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="bg-gray-900/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-2 text-gray-300">
                <div>✓ Industry-leading AI technology</div>
                <div>✓ Proven ROI and results</div>
                <div>✓ Global expertise and support</div>
                <div>✓ Cutting-edge innovation</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Website</h3>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                https://ziontechgroup.com
              </a>
              <div className="mt-4 text-gray-300">
                <p>Discover our full range of services</p>
                <p>and innovative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}