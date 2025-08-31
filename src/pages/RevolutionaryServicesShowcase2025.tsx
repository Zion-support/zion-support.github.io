import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { REVOLUTIONARY_INNOVATIVE_SERVICES_2025 } from '../data/revolutionaryInnovativeServices2025';
import { EMERGING_TECH_INNOVATIVE_SERVICES_2025 } from '../data/emergingTechInnovativeServices2025';
import {
  Brain,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Cloud,
  Server,
  Target,
  Rocket,
  Atom,
  Network,
  Satellite,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Play,
  BookOpen,
  Code,
  Database,
  Lock,
  BarChart3,
  Workflow,
  MessageCircle,
  Heart,
  Truck,
  Factory,
  Building2,
  Cpu,
  Smartphone,
  Wifi,
  Monitor,
  Headphones,
  Camera,
  Microphone,
  Video,
  FileText,
  Calendar,
  Settings,
  Cog,
  Palette,
  Lightbulb,
  Sparkles,
  Eye,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Layers,
  Cube,
  Box,
  Package,
  Tag,
  ShoppingCart,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  AlertTriangle,
  Info,
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Share2,
  Download,
  Upload,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Menu,
  Home,
  User,
  Bell,
  Bookmark,
  Heart as HeartIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Trophy,
  Medal,
  Crown,
  Diamond,
  Gem,
  Sparkle,
  Zap as ZapIcon,
  Flash,
  Thunder,
  Fire,
  Water,
  Leaf,
  Tree,
  Flower,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Move,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Volume,
  VolumeX,
  Volume1,
  Volume2,
  Mute,
  Unmute,
  Play as PlayIcon,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Rewind as RewindIcon,
  FastForward as FastForwardIcon,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  Shuffle as ShuffleIcon2,
  Repeat as RepeatIcon2,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Rewind as RewindIcon2,
  FastForward as FastForwardIcon2,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  Shuffle as ShuffleIcon3,
  Repeat as RepeatIcon3,
  SkipBack as SkipBackIcon3,
  SkipForward as SkipForwardIcon3,
  Rewind as RewindIcon3,
  FastForward as FastForwardIcon3
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
    compliance: string[];
  };
  competitors: string[];
  marketTrend: string;
  aiModel?: string;
  trainingData?: string;
  marketingContent: {
    headline: string;
    valueProposition: string;
    keyFeatures: string[];
    competitiveAdvantages: string[];
    testimonials?: string[];
    caseStudies?: string[];
  };
}

export default function RevolutionaryServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const allServices = [...REVOLUTIONARY_INNOVATIVE_SERVICES_2025, ...EMERGING_TECH_INNOVATIVE_SERVICES_2025];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesInnovationLevel = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesInnovationLevel;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'AI & Customer Success':
        return <Users className="w-6 h-6" />;
      case 'AI & Supply Chain':
        return <Truck className="w-6 h-6" />;
      case 'AI & Financial Services':
        return <DollarSign className="w-6 h-6" />;
      case 'AI & Human Resources':
        return <Users className="w-6 h-6" />;
      case 'AI & Sales':
        return <TrendingUp className="w-6 h-6" />;
      case 'AI & Compliance':
        return <Shield className="w-6 h-6" />;
      case 'Cloud & FinOps':
        return <Cloud className="w-6 h-6" />;
      case 'AI & Project Management':
        return <Workflow className="w-6 h-6" />;
      case 'AI & Marketing':
        return <BarChart3 className="w-6 h-6" />;
      case 'Quantum Computing & AI':
        return <Atom className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Network className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Wifi className="w-6 h-6" />;
      case 'Space Technology':
        return <Satellite className="w-6 h-6" />;
      case 'AI & Business Operations':
        return <Building2 className="w-6 h-6" />;
      case 'AI & Customer Experience':
        return <Eye className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Breakthrough':
        return 'bg-gradient-to-r from-purple-600 to-pink-600 text-white';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-600 to-emerald-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-darkest">
      <SEO
        title="Revolutionary Innovative Services Showcase 2025 | Zion Tech Group"
        description="Discover our revolutionary innovative services including AI-powered platforms, quantum computing solutions, blockchain enterprise tools, and cutting-edge emerging technologies."
        keywords="AI services, quantum computing, blockchain solutions, IoT edge computing, space technology, innovative services, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Innovative Services{' '}
              </span>
              2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI-powered platforms, quantum computing solutions, 
              blockchain enterprise tools, and emerging technologies that will transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-zion-purple/20 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span className="text-white font-medium">50+ Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-zion-cyan/20 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-zion-purple" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-zion-purple/20 px-4 py-2 rounded-full">
                <Rocket className="w-5 h-5 text-zion-cyan" />
                <span className="text-white font-medium">Future-Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-purple/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-zion-slate-darker text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 pointer-events-none" />
              </div>

              {/* Innovation Level Filter */}
              <div className="relative">
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent appearance-none cursor-pointer"
                >
                  {innovationLevels.map(level => (
                    <option key={level} value={level} className="bg-zion-slate-darker text-white">
                      {level === 'all' ? 'All Innovation Levels' : level}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center justify-center space-x-2 bg-zion-slate-darker rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-zion-slate-dark' 
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-zion-slate-dark' 
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {filteredServices.length} Revolutionary Services Found
            </h2>
            <p className="text-zion-slate-light">
              Discover cutting-edge solutions that will transform your business operations
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl border border-zion-purple/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  {/* Service Header */}
                  <div className="p-6 border-b border-zion-purple/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-zion-purple/20 rounded-lg">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                            {service.innovationLevel}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {formatPrice(service.price)}
                        </div>
                        <div className="text-sm text-zion-slate-light">per month</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm line-clamp-3">{service.description}</p>
                  </div>

                  {/* Service Features */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-zion-slate-light line-clamp-2">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-zion-slate-light line-clamp-2">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-zion-slate-light">
                        ROI: <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <button
                        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center space-x-1"
                      >
                        <span>{expandedService === service.id ? 'Show Less' : 'Learn More'}</span>
                        {expandedService === service.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Service Details */}
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-zion-purple/20 p-6 bg-zion-slate-darker/50"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-zion-cyan mb-3">Technical Specifications</h4>
                          {service.technicalSpecs && (
                            <div className="space-y-3">
                              <div>
                                <span className="text-xs text-zion-slate-light">Technology:</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {service.technicalSpecs.technology.slice(0, 3).map((tech, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-zion-purple/20 rounded text-xs text-white">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <span className="text-xs text-zion-slate-light">API Endpoints:</span>
                                <span className="text-white text-sm ml-2">{service.technicalSpecs.apiEndpoints.toLocaleString()}</span>
                              </div>
                              <div>
                                <span className="text-xs text-zion-slate-light">Uptime:</span>
                                <span className="text-white text-sm ml-2">{service.technicalSpecs.uptime}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-zion-cyan mb-3">Use Cases</h4>
                          <div className="space-y-2">
                            {service.useCases.slice(0, 4).map((useCase, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                                <span className="text-sm text-zion-slate-light">{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-zion-purple/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                            <span>Delivery: {service.estimatedDelivery}</span>
                            <span>Support: {service.supportLevel}</span>
                          </div>
                          <div className="flex space-x-2">
                            <a
                              href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                              className="px-4 py-2 bg-zion-cyan text-zion-slate-dark rounded-lg hover:bg-zion-cyan-light transition-colors text-sm font-medium"
                            >
                              Get Quote
                            </a>
                            <a
                              href={service.contactInfo.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/20 transition-colors rounded-lg text-sm font-medium"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl border border-zion-purple/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="p-3 bg-zion-purple/20 rounded-lg">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            <div className="flex items-center space-x-3">
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                                {service.innovationLevel}
                              </span>
                              <span className="text-zion-slate-light text-sm">{service.category}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-zion-slate-light mb-4 max-w-3xl">{service.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                          <div>
                            <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                            <div className="space-y-2">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  <span className="text-sm text-zion-slate-light">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
                            <div className="space-y-2">
                              {service.benefits.slice(0, 3).map((benefit, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                  <span className="text-sm text-zion-slate-light">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-zion-cyan mb-2">Quick Info</h4>
                            <div className="space-y-2 text-sm text-zion-slate-light">
                              <div>Price: <span className="text-white font-semibold">{formatPrice(service.price)}/month</span></div>
                              <div>ROI: <span className="text-green-400 font-semibold">{service.roi}</span></div>
                              <div>Delivery: <span className="text-white">{service.estimatedDelivery}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:ml-8 flex flex-col items-center lg:items-end space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-zion-cyan mb-1">
                            {formatPrice(service.price)}
                          </div>
                          <div className="text-sm text-zion-slate-light">per month</div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                            className="px-4 py-2 border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/20 transition-colors rounded-lg text-sm font-medium"
                          >
                            {expandedService === service.id ? 'Show Less' : 'View Details'}
                          </button>
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                            className="px-4 py-2 bg-zion-cyan text-zion-slate-dark rounded-lg hover:bg-zion-cyan-light transition-colors text-sm font-medium"
                          >
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Service Details */}
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-zion-purple/20 p-6 bg-zion-slate-darker/50"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-zion-cyan mb-4">Technical Specifications</h4>
                          {service.technicalSpecs && (
                            <div className="space-y-4">
                              <div>
                                <span className="text-sm text-zion-slate-light">Technology Stack:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {service.technicalSpecs.technology.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-zion-purple/20 rounded-full text-sm text-white">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <span className="text-sm text-zion-slate-light">API Endpoints:</span>
                                  <div className="text-white font-semibold">{service.technicalSpecs.apiEndpoints.toLocaleString()}</div>
                                </div>
                                <div>
                                  <span className="text-sm text-zion-slate-light">Uptime:</span>
                                  <div className="text-white font-semibold">{service.technicalSpecs.uptime}</div>
                                </div>
                              </div>
                              <div>
                                <span className="text-sm text-zion-slate-light">Security Features:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {service.technicalSpecs.security.map((sec, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-green-500/20 rounded text-xs text-green-400">
                                      {sec}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-zion-cyan mb-4">Use Cases & Target Audience</h4>
                          <div className="space-y-4">
                            <div>
                              <span className="text-sm text-zion-slate-light">Primary Use Cases:</span>
                              <div className="mt-2 space-y-2">
                                {service.useCases.map((useCase, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                                    <span className="text-sm text-zion-slate-light">{useCase}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <span className="text-sm text-zion-slate-light">Target Audience:</span>
                              <div className="mt-2 space-y-2">
                                {service.targetAudience.map((audience, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                                    <span className="text-sm text-zion-slate-light">{audience}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-zion-purple/20">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                          <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
                            <span>Market Price: <span className="text-white font-semibold">{service.marketPrice}</span></span>
                            <span>Support Level: <span className="text-white font-semibold">{service.supportLevel}</span></span>
                            <span>Delivery: <span className="text-white font-semibold">{service.estimatedDelivery}</span></span>
                          </div>
                          
                          <div className="flex space-x-3">
                            <a
                              href={service.contactInfo.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/20 transition-colors rounded-lg text-sm font-medium flex items-center space-x-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Visit Website</span>
                            </a>
                            <a
                              href={`tel:${service.contactInfo.phone}`}
                              className="px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors text-sm font-medium flex items-center space-x-2"
                            >
                              <Phone className="w-4 h-4" />
                              <span>Call Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple/10 via-zion-cyan/10 to-zion-purple/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our team to discuss how our revolutionary services can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Revolutionary Services"
                className="px-8 py-4 bg-zion-cyan text-zion-slate-dark rounded-lg hover:bg-zion-cyan-light transition-colors text-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get Started Today</span>
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white transition-colors rounded-lg text-lg font-semibold flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Our Website</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}