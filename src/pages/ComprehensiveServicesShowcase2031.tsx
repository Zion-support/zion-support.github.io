import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  DollarSign, 
  CheckCircle,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Target,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  FileText,
  MessageCircle,
  Calendar,
  Settings,
  Monitor,
  Truck,
  Car,
  Clipboard,
  Link,
  Microscope,
  X,
  Atom,
  Heart,
  Leaf,
  Gauge,
  CpuIcon,
  DatabaseIcon,
  NetworkIcon,
  SmartphoneIcon,
  BarChart3Icon,
  CodeIcon,
  ServerIcon,
  ChipIcon,
  WifiIcon,
  ShieldCheckIcon,
  BotIcon,
  WorkflowIcon,
  EyeIcon,
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  TargetIcon,
  LightbulbIcon,
  BarChartIcon,
  PieChartIcon,
  LineChartIcon,
  ActivityIcon,
  FileTextIcon,
  MessageCircleIcon,
  CalendarIcon,
  SettingsIcon,
  MonitorIcon,
  TruckIcon,
  CarIcon,
  ClipboardIcon,
  LinkIcon,
  MicroscopeIcon,
  XIcon,
  AtomIcon,
  HeartIcon,
  LeafIcon
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2031 } from "../data/innovativeMicroSaasServices2031";
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2031 } from "../data/specializedITInfrastructureServices2031";
import { SPECIALIZED_AI_SERVICES_2031 } from "../data/specializedAIServices2031";

interface ServiceContact {
  mobile: string;
  email: string;
  address: string;
  website: string;
}

const ComprehensiveServicesShowcase2031: React.FC = () => {;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [innovationLevel, setInnovationLevel] = useState('all');

  // Combine all services
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2031,;
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2031,;
    ...SPECIALIZED_AI_SERVICES_2031;
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '📊' },
    { id: 'AI & Development', name: 'AI & Development', count: allServices.filter(s => s.category === 'AI & Development').length, icon: '💻' },
    { id: 'AI & Finance', name: 'AI & Finance', count: allServices.filter(s => s.category === 'AI & Finance').length, icon: '💰' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: allServices.filter(s => s.category === 'AI & Logistics').length, icon: '🚚' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥' },
    { id: 'AI & Cybersecurity', name: 'AI & Cybersecurity', count: allServices.filter(s => s.category === 'AI & Cybersecurity').length, icon: '🛡️' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📢' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s => s.category === 'AI & Transportation').length, icon: '🚗' },
    { id: 'AI & Quantum Computing', name: 'AI & Quantum Computing', count: allServices.filter(s => s.category === 'AI & Quantum Computing').length, icon: '⚛️' },
    { id: 'AI & Robotics', name: 'AI & Robotics', count: allServices.filter(s => s.category === 'AI & Robotics').length, icon: '🤖' },
    { id: 'AI & Edge', name: 'AI & Edge', count: allServices.filter(s => s.category === 'AI & Edge').length, icon: '🌐' },
    { id: 'AI & Vision', name: 'AI & Vision', count: allServices.filter(s => s.category === 'AI & Vision').length, icon: '👁️' },
    { id: 'AI & Language', name: 'AI & Language', count: allServices.filter(s => s.category === 'AI & Language').length, icon: '🗣️' },
    { id: 'AI Strategy', name: 'AI Strategy', count: allServices.filter(s => s.category === 'AI Strategy').length, icon: '🎯' },
    { id: 'AI Governance', name: 'AI Governance', count: allServices.filter(s => s.category === 'AI Governance').length, icon: '⚖️' },
    { id: 'AI Talent', name: 'AI Talent', count: allServices.filter(s => s.category === 'AI Talent').length, icon: '🎓' },
    { id: 'AI R&D', name: 'AI R&D', count: allServices.filter(s => s.category === 'AI R&D').length, icon: '🔬' },
    { id: 'AI Operations', name: 'AI Operations', count: allServices.filter(s => s.category === 'AI Operations').length, icon: '⚙️' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🔒' },
    { id: 'Data & Analytics', name: 'Data & Analytics', count: allServices.filter(s => s.category === 'Data & Analytics').length, icon: '📈' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️' },;
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗' },;
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱' },;
    { id: 'Managed Services', name: 'Managed Services', count: allServices.filter(s => s.category === 'Managed Services').length, icon: '🔄' },;
    { id: 'Digital Transformation', name: 'Digital Transformation', count: allServices.filter(s => s.category === 'Digital Transformation').length, icon: '🔄' };
  ];

  const contactInfo: ServiceContact = {
  mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",;
  ;
  ;
  website: "https://ziontechgroup.com";
  ;




};

  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesInnovation = innovationLevel === 'all' || service.innovationLevel === innovationLevel;
    
    return matchesCategory && matchesSearch && matchesPrice && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price-low':;
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : -1;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {;
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀';
  };

  const getInnovationColor = (level: string) => {;
    switch (level) {;
      case 'Revolutionary':;
        return 'text-purple-400';
      case 'Advanced':
        return 'text-blue-400';
      case 'Innovative':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <motion.h1 
            initial = {
  { opacity: 0,
  y: 20 




}}
            animate = {
  { opacity: 1,
  y: 0 




}}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Zion Tech Group 2031
          </motion.h1>
          <motion.p 
            initial = {
  { opacity: 0,
  y: 20 




}}
            animate = {
  { opacity: 1,
  y: 0 




}}
            transition = {
  { duration: 0.8,
  delay: 0.2 




}}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300"
          >
            Revolutionary AI, IT Infrastructure & Micro SAAS Services
          </motion.p>
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 




}}
            animate = {
  { opacity: 1,
  y: 0 




}}
            transition = {
  { duration: 0.8,
  delay: 0.4 




}}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              📞 Call {contactInfo.mobile}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              ✉️ {contactInfo.email}
            </a>
          </motion.div>
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 




}}
            animate = {
  { opacity: 1,
  y: 0 




}}
            transition = {
  { duration: 0.8,
  delay: 0.6 




}}
            className="mt-8 text-gray-400"
          >
            <p className="text-lg">📍 {contactInfo.address}</p>
            <p className="text-lg">🌐 {contactInfo.website}</p>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial = {
  { opacity: 0,
  y: 20 




}}
          animate = {
  { opacity: 1,
  y: 0 




}}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge AI, IT infrastructure, and micro SAAS solutions designed to transform your business and drive innovation in 2031 and beyond.
          </p>
        </motion.div>

        {/* Service Statistics */}
        <motion.div 
          initial = {
  { opacity: 0,
  y: 20 




}}
          animate = {
  { opacity: 1,
  y: 0 




}}
          transition = {
  { duration: 0.8,
  delay: 0.2 




}}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
            <div className="text-gray-300">Innovative Services</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-gray-300">Service Categories</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300">Expert Support</div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial = {
  { opacity: 0,
  y: 20 




}}
          animate = {
  { opacity: 1,
  y: 0 




}}
          transition = {
  { duration: 0.8,
  delay: 0.4 




}}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name} ({category.count})
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="innovation">Innovation Level</option>
              <option value="roi">ROI</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial = {
  { opacity: 0,
  y: 20 




}}
          animate = {
  { opacity: 1,
  y: 0 




}}
          transition = {
  { duration: 0.8,
  delay: 0.6 




}}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial = {
  { opacity: 0,
  y: 20 




}}
              animate = {
  { opacity: 1,
  y: 0 




}}
              transition = {
  { duration: 0.5,
  delay: index * 0.1 




}}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl mb-2">{getCategoryIcon(service.category)}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationColor(service.innovationLevel)} bg-white/10`}>
                  {service.innovationLevel}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {service.currency}{service.price.toLocaleString()}
                  <span className="text-sm text-gray-400 ml-1">/{service.pricingModel}</span>
                </div>
                <div className="text-sm text-gray-400">
                  Market Price: {service.marketPrice}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-300 mb-2">
                  <span className="text-green-400 font-semibold">ROI:</span> {service.roi}
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-blue-400 font-semibold">Delivery:</span> {service.estimatedDelivery}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.useCases.slice(0, 3).map((useCase, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  View Details
                </button>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No services found</h3>
            <p className="text-gray-300">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <motion.div 
        initial = {
  { opacity: 0,
  y: 20 




}}
        animate = {
  { opacity: 1,
  y: 0 




}}
        transition = {
  { duration: 0.8,
  delay: 0.8 




}}
        className="container mx-auto px-4 py-16"
      >
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Talk with our experts to scope a pilot or request a tailored quote. We respond within 24 hours and provide comprehensive solutions tailored to your needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              📞 Call {contactInfo.mobile}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              ✉️ {contactInfo.email}
            </a>
            <a 
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              🌐 Visit Website
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p className="text-lg">📍 {contactInfo.address}</p>
            <p className="text-lg">🚀 Leading Innovation Since 2025</p>
          </div>
        </div>
      </motion.div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial = {
  { scale: 0.9,
  opacity: 0 




}}
              animate = {
  { scale: 1,
  opacity: 1 




}}
              exit = {
  { scale: 0.9,
  opacity: 0 




}}
              className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.useCases.map((useCase: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-sm text-blue-300">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-2xl font-bold text-blue-400">
                          {selectedService.currency}{selectedService.price.toLocaleString()}/{selectedService.pricingModel}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">ROI:</span>
                        <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Delivery:</span>
                        <span className="text-white">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Support:</span>
                        <span className="text-white capitalize">{selectedService.supportLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.map((audience: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-purple-600/20 border border-purple-400/30 rounded-full text-sm text-purple-300">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
                    {selectedService.technicalSpecs && (
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-300 text-sm">Technology:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedService.technicalSpecs.technology.map((tech: string, idx: number) => (
                              <span key={idx} className="px-2 py-1 bg-slate-600/50 rounded text-xs text-gray-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-300 text-sm">Uptime:</span>
                          <span className="text-white ml-2">{selectedService.technicalSpecs.uptime}</span>
                        </div>
                        <div>
                          <span className="text-gray-300 text-sm">API Endpoints:</span>
                          <span className="text-white ml-2">{selectedService.technicalSpecs.apiEndpoints}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  📞 Call {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-center"
                >
                  ✉️ {contactInfo.email}
                </a>
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                >
                  🌐 Visit Website
                </a>
              </div>
            </motion.div>;
          </motion.div>;
        )};
      </AnimatePresence>;
    </div>;
  );
};

export default ComprehensiveServicesShowcase2031;