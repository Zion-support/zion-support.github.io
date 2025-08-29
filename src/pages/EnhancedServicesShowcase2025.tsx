import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  TrendingUp,
  Search,
  Filter,
  ExternalLink,
  Calendar,
  MapPin,
  Globe as GlobeIcon,
  Award,
  Clock as ClockIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Brain as BrainIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  Satellite,
  Building2,
  Cog,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Smartphone as SmartphoneIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  Key,
  Eye as EyeIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,
  Signal,
  WifiOff,
  BluetoothOff,
  RadioOff,
  SignalOff,
  WifiOn,
  BluetoothOn,
  RadioOn,
  SignalOn,
  WifiOff2,
  BluetoothOff2,
  RadioOff2,
  SignalOff2,
  WifiOn2,
  BluetoothOn2,
  RadioOn2,
  SignalOn2
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { enhancedServicesCatalog, EnhancedServiceItem, EnhancedServiceCategory } from '@/data/enhancedServicesCatalog2025';

export default function EnhancedServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'innovation'>('name');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const filteredServices = enhancedServicesCatalog
    .flatMap(category => category.items)
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = service.price === 'Contact Us' || 
                          (parseInt(service.price.replace(/[$,]/g, '')) >= priceRange[0] && 
                           parseInt(service.price.replace(/[$,]/g, '')) <= priceRange[1]);
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = a.price === 'Contact Us' ? 999999 : parseInt(a.price.replace(/[$,]/g, ''));
          const priceB = b.price === 'Contact Us' ? 999999 : parseInt(b.price.replace(/[$,]/g, ''));
          return priceA - priceB;
        case 'innovation':
          return b.innovationLevel.localeCompare(a.innovationLevel);
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return Brain;
      case 'IT Services': return Server;
      case 'AI Solutions': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Data & Analytics': return BarChart3;
      case 'Cloud & DevOps': return Cloud;
      case 'Quantum Computing': return Atom;
      case 'Blockchain & Web3': return Globe2;
      case 'IoT & Edge': return Cpu;
      case 'Green Tech': return Leaf;
      case 'Space Tech': return Satellite;
      case 'Digital Transformation': return Cog;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-blue-500 to-cyan-500';
      case 'IT Services': return 'from-purple-500 to-pink-500';
      case 'AI Solutions': return 'from-green-500 to-emerald-500';
      case 'Cybersecurity': return 'from-red-500 to-orange-500';
      case 'Data & Analytics': return 'from-indigo-500 to-purple-500';
      case 'Cloud & DevOps': return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing': return 'from-violet-500 to-purple-500';
      case 'Blockchain & Web3': return 'from-yellow-500 to-orange-500';
      case 'IoT & Edge': return 'from-teal-500 to-green-500';
      case 'Green Tech': return 'from-emerald-500 to-green-500';
      case 'Space Tech': return 'from-slate-500 to-gray-500';
      case 'Digital Transformation': return 'from-rose-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const categories = [
    { name: 'All Services', value: 'all', count: enhancedServicesCatalog.flatMap(cat => cat.items).length },
    ...enhancedServicesCatalog.map(cat => ({
      name: cat.name,
      value: cat.slug,
      count: cat.items.length
    }))
  ];

  return (
    <>
      <SEO 
        title="Enhanced Services Showcase 2025 - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT services, and AI solutions. Real, useful, and intelligent services with transparent pricing and proven ROI."
        keywords="micro saas, IT services, AI solutions, quantum computing, blockchain, IoT, green tech, space tech, digital transformation"
        url="https://ziontechgroup.com/enhanced-services-showcase-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                Enhanced Services Showcase{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  2025
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
              >
                Discover our comprehensive portfolio of innovative micro SAAS, IT services, and AI solutions. 
                Real, useful, and intelligent services with transparent pricing and proven ROI.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-lg font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
                <p className="text-slate-300">Contact our experts for personalized solutions and pricing</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex items-center text-cyan-400">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-semibold">+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="font-semibold">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="innovation">Sort by Innovation</option>
                </select>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">Price Range</label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-24 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <span className="text-slate-400">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                  className="w-24 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <span className="text-slate-400 text-sm">USD</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-slate-300 text-lg">
                Discover innovative solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = getCategoryIcon(service.category);
                const categoryColor = getCategoryColor(service.category);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    {/* Service Header */}
                    <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-white">{service.price}</span>
                          <span className="text-sm text-slate-400 capitalize">{service.billing}</span>
                        </div>
                        {service.freeTier && (
                          <span className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                            Free Tier Available
                          </span>
                        )}
                        {service.trialPeriod && (
                          <span className="inline-block bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full ml-2">
                            {service.trialPeriod} Trial
                          </span>
                        )}
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-sm text-slate-500">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-400">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-slate-500">ROI:</span>
                          <p className="text-cyan-400 font-medium">{service.roi}</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Setup:</span>
                          <p className="text-slate-300">{service.setupTime}</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Market Size:</span>
                          <p className="text-slate-300">{service.marketSize}</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Innovation:</span>
                          <p className="text-slate-300">{service.innovationLevel}</p>
                        </div>
                      </div>

                      {/* Target Audience */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                          Target Audience
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.targetAudience.slice(0, 3).map((audience, idx) => (
                            <span key={idx} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full">
                              {audience}
                            </span>
                          ))}
                          {service.targetAudience.length > 3 && (
                            <span className="bg-slate-700 text-slate-500 text-xs px-2 py-1 rounded-full">
                              +{service.targetAudience.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex flex-col gap-3">
                        <Link
                          to={service.href}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center flex items-center justify-center"
                        >
                          {service.ctaLabel}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                        
                        {/* Contact Info */}
                        <div className="text-center">
                          <p className="text-xs text-slate-500 mb-2">Or contact us directly:</p>
                          <div className="flex items-center justify-center text-xs text-slate-400">
                            <Phone className="w-3 h-3 mr-1" />
                            {service.contactInfo.phone}
                          </div>
                          <div className="flex items-center justify-center text-xs text-slate-400">
                            <Mail className="w-3 h-3 mr-1" />
                            {service.contactInfo.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your search criteria or contact us for custom solutions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you implement the perfect solution for your business needs. 
                Get started today with a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Complete Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-green-400 font-medium">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-purple-400 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 font-medium hover:text-orange-300 transition-colors"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}