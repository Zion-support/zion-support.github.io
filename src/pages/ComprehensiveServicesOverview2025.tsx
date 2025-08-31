import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Filter,
  Grid,
  List,
  ArrowUpRight,
  Award,
  Zap as ZapIcon,
  Crown
} from 'lucide-react';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2025 } from '../data/revolutionaryMicroSaasServices2025';

export default function ComprehensiveServicesOverview2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'roi' | 'innovation'>('name');

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.length, color: 'from-gray-500 to-gray-600' },
    { id: 'AI & Business Automation', name: 'AI & Business Automation', icon: Brain, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Business Automation').length, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Quantum Computing', name: 'AI & Quantum Computing', icon: Atom, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Quantum Computing').length, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Customer Experience', name: 'AI & Customer Experience', icon: Users, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Customer Experience').length, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Sales Automation', name: 'AI & Sales Automation', icon: Target, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Sales Automation').length, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Compliance', name: 'AI & Compliance', icon: Shield, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Compliance').length, color: 'from-red-500 to-pink-500' },
    { id: 'Cloud & FinOps', name: 'Cloud & FinOps', icon: Cloud, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Cloud & FinOps').length, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & IoT', name: 'AI & IoT', icon: Cpu, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & IoT').length, color: 'from-green-500 to-blue-500' },
    { id: 'AI & Human Resources', name: 'AI & Human Resources', icon: Users2, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Human Resources').length, color: 'from-orange-500 to-red-500' },
    { id: 'AI & Financial Services', name: 'AI & Financial Services', icon: Coins, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Financial Services').length, color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Content Creation', name: 'AI & Content Creation', icon: FileText, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Content Creation').length, color: 'from-purple-500 to-blue-500' },
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: Wifi, count: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Edge Computing & IoT').length, color: 'from-cyan-500 to-blue-500' }
  ];

  const filteredServices = REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'roi':
        return parseInt(b.roi) - parseInt(a.roi);
      case 'innovation':
        const innovationOrder = { 'Advanced': 1, 'Breakthrough': 2, 'Revolutionary': 3 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return a.title.localeCompare(b.title);
    }
  });

  const toggleServiceDetails = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || Rocket;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  const getPricingTier = (price: number) => {
    if (price >= 10000) return { name: 'Enterprise', icon: Crown, color: 'from-purple-500 to-pink-500' };
    if (price >= 5000) return { name: 'Professional', icon: Award, color: 'from-blue-500 to-cyan-500' };
    if (price >= 2000) return { name: 'Business', icon: Star, color: 'from-green-500 to-emerald-500' };
    return { name: 'Starter', icon: ZapIcon, color: 'from-yellow-500 to-orange-500' };
  };

  const stats = [
    { number: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.length, label: 'Revolutionary Services', icon: Rocket },
    { number: Math.max(...REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.map(s => parseInt(s.roi))), label: 'Max ROI %', icon: TrendingUp },
    { number: Math.min(...REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.map(s => s.price)), label: 'Starting Price $', icon: DollarSign },
    { number: REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.filter(s => s.innovationLevel === 'Revolutionary').length, label: 'Revolutionary Level', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Comprehensive Services Overview 2025 | Zion Tech Group</title>
        <meta name="description" content="Complete overview of our revolutionary micro SAAS services and solutions. AI-powered platforms, quantum computing, edge computing, and innovative solutions." />
        <meta name="keywords" content="comprehensive services, micro SAAS overview, AI services overview, quantum computing services, edge computing services, innovative solutions 2025" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-overview-2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services Overview
              </span>
              <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2025 Edition</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of revolutionary micro SAAS services, AI-powered platforms, 
              and cutting-edge technology solutions that transform businesses across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">{REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.length} Services</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Atom className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">Quantum Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-white mb-2" />
              <span className="text-white font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-white mb-2" />
              <span className="text-white font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-white mb-2" />
              <span className="text-white font-medium text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.number.toLocaleString()}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search comprehensive services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Sort By */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                <option value="roi" className="bg-gray-800 text-white">Sort by ROI</option>
                <option value="innovation" className="bg-gray-800 text-white">Sort by Innovation</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="lg:w-32">
              <div className="flex border border-white/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-4 py-3 transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5 mx-auto" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-4 py-3 transition-all ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5 mx-auto" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 border-white/20 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Revolutionary Services</h2>
            <p className="text-xl text-gray-300">
              {filteredServices.length} services found • {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {React.createElement(getCategoryIcon(service.category), { 
                          className: "w-8 h-8 text-white" 
                        })}
                        <span className="text-white font-semibold text-sm">
                          {service.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-medium">
                          {service.innovationLevel}
                        </span>
                        {service.innovationLevel === 'Revolutionary' && (
                          <Sparkles className="w-4 h-4 text-yellow-300" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2">{service.description}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-white">
                          ${service.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-sm">/month</span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-semibold">{service.roi}</div>
                        <div className="text-gray-400 text-sm">ROI</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Features</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => toggleServiceDetails(service.id)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                      >
                        {selectedService === service.id ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Less Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            More Details
                          </>
                        )}
                      </button>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Learn More
                      </a>
                    </div>

                    {/* Expanded Details */}
                    {selectedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        {/* Technical Specifications */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Technical Specs</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Technology:</span>
                              <div className="text-white">
                                {service.technicalSpecs?.technology.slice(0, 3).join(', ')}
                              </div>
                            </div>
                            <div>
                              <span className="text-gray-400">Uptime:</span>
                              <div className="text-white">{service.technicalSpecs?.uptime}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">API Endpoints:</span>
                              <div className="text-white">{service.technicalSpecs?.apiEndpoints}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Delivery:</span>
                              <div className="text-white">{service.estimatedDelivery}</div>
                            </div>
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Use Cases</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.useCases.slice(0, 4).map((useCase, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                              >
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Get Started Today</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Phone className="w-4 h-4 text-cyan-400" />
                              <span>{service.contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Mail className="w-4 h-4 text-cyan-400" />
                              <span>{service.contactInfo.email}</span>
                            </div>
                          </div>
                          <a
                            href={service.contactInfo.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Visit Website
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                            {React.createElement(getCategoryIcon(service.category), { 
                              className: "w-8 h-8 text-white" 
                            })}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                                {service.innovationLevel}
                              </span>
                            </div>
                            <p className="text-gray-300 mb-4">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {service.tags.slice(0, 5).map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and Actions */}
                      <div className="lg:w-64">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-white mb-1">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-gray-400 text-sm mb-2">/month</div>
                          <div className="text-green-400 font-semibold text-lg">{service.roi} ROI</div>
                        </div>
                        <div className="space-y-3">
                          <button
                            onClick={() => toggleServiceDetails(service.id)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                          >
                            {selectedService === service.id ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Less Details
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                More Details
                              </>
                            )}
                          </button>
                          <a
                            href={service.contactInfo.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Learn More
                          </a>
                          <a
                            href={`tel:${service.contactInfo.phone}`}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
                          >
                            <Phone className="w-4 h-4" />
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10 pt-6 mt-6"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Features */}
                          <div>
                            <h4 className="text-white font-semibold mb-3">Key Features</h4>
                            <div className="space-y-2">
                              {service.features.slice(0, 6).map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="text-white font-semibold mb-3">Key Benefits</h4>
                            <div className="space-y-2">
                              {service.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                  <Star className="w-4 h-4 text-yellow-400" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technical Specs */}
                          <div>
                            <h4 className="text-white font-semibold mb-3">Technical Specs</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="text-gray-400">Technology:</span>
                                <div className="text-white">
                                  {service.technicalSpecs?.technology.slice(0, 3).join(', ')}
                                </div>
                              </div>
                              <div>
                                <span className="text-gray-400">Uptime:</span>
                                <div className="text-white">{service.technicalSpecs?.uptime}</div>
                              </div>
                              <div>
                                <span className="text-gray-400">Delivery:</span>
                                <div className="text-white">{service.estimatedDelivery}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter to find the services you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our comprehensive portfolio of revolutionary services and discover 
              how we can accelerate your growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 text-lg font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 text-sm">
                Leading provider of revolutionary micro SAAS services and innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors block">
                  Home
                </a>
                <a href="https://ziontechgroup.com/services" className="text-gray-300 hover:text-cyan-400 transition-colors block">
                  All Services
                </a>
                <a href="https://ziontechgroup.com/about" className="text-gray-300 hover:text-cyan-400 transition-colors block">
                  About Us
                </a>
                <a href="https://ziontechgroup.com/contact" className="text-gray-400 hover:text-cyan-400 transition-colors block">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com/privacy" className="text-cyan-400 hover:text-cyan-300 ml-2">
                Privacy Policy
              </a>
              | 
              <a href="https://ziontechgroup.com/terms" className="text-cyan-400 hover:text-cyan-300 ml-2">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}