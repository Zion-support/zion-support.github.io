import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
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
  Workflow, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Code, 
  Truck, 
  Building, 
  BarChart3, 
  PenTool, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Satellite, 
  FileText,
  Zap,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Leaf,
  Sun,
  Wind,
  Droplets,
  Mountain,
  TreePine,
  Recycle,
  Lightbulb,
  Battery,
  Wifi,
  Bluetooth,
  Radio,
  Telescope,
  Microscope,
  FlaskConical,
  TestTube,
  Beaker,
  Pill,
  Stethoscope,
  Syringe,
  HeartPulse,
  Activity,
  Thermometer,
  Droplet,
  EyeOff,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban,
  Calendar,
  Timer,
  Stopwatch,
  Hourglass,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarClock,
  CalendarHeart,
  CalendarStar,
  CalendarUser,
  CalendarSettings,
  CalendarEdit,
  CalendarTrash,
  CalendarOff,
  CalendarEvent,
  CalendarTime,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  ExternalLink,
  Download,
  Upload,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Send,
  Edit,
  Trash2,
  Copy,
  Paste,
  Cut,
  Scissors,
  Paperclip,
  Unlink,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Grid,
  List,
  Filter,
  Settings,
  UserCog,
  UserEdit,
  ShieldAlert,
  ShieldX,
  Unlock,
  Package,
  Calculator,
  UserCheck,
  Signal,
  ShieldCheck,
  Bot,
  CircuitBoard,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Layers,
  Monitor,
  MousePointer,
  Network,
  Server,
  Smartphone,
  Tablet,
  Terminal,
  Wifi,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Target,
  Handshake,
  Lightbulb,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Heart as HeartIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Users as UsersIcon,
  X
} from 'lucide-react';

export default function ZionCuttingEdgeServices2031() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedService, setSelectedService] = useState(null);

  // Cutting-Edge Services Catalog 2031 - Next-Generation AI, Quantum, and Emerging Tech
  const services = [
    // Quantum AI Services
    {
      id: 'quantum-ai-hybrid-platform',
      name: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with AI for solving previously intractable problems in optimization, cryptography, and scientific research.',
      category: 'Quantum AI',
      price: '$50,000/month',
      features: ['Quantum-AI Hybrid Algorithms', 'Complex Optimization Solving', 'Advanced Simulations', 'Quantum Machine Learning', 'Hybrid Computing Workflows'],
      icon: Atom,
      badge: 'Quantum AI',
      color: 'from-purple-600 to-violet-700',
      link: '/services/quantum-ai-hybrid-platform',
      marketPrice: '$75,000/month',
      savings: '33%',
      rating: 4.9,
      reviews: 45,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'quantum-cybersecurity',
      name: 'Quantum Cybersecurity Suite',
      description: 'Next-generation security platform using quantum-resistant algorithms and quantum key distribution for unbreakable encryption.',
      category: 'Quantum AI',
      price: '$35,000/month',
      features: ['Quantum-Resistant Algorithms', 'Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation', 'Future-Proof Security'],
      icon: Shield,
      badge: 'Quantum Security',
      color: 'from-red-600 to-rose-700',
      link: '/services/quantum-cybersecurity',
      marketPrice: '$50,000/month',
      savings: '30%',
      rating: 4.8,
      reviews: 32,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'quantum-financial-modeling',
      name: 'Quantum Financial Modeling Platform',
      description: 'Advanced financial modeling using quantum algorithms for risk assessment, portfolio optimization, and market prediction.',
      category: 'Quantum AI',
      price: '$40,000/month',
      features: ['Quantum Risk Assessment', 'Portfolio Optimization', 'Market Prediction Models', 'Real-time Analysis', 'Regulatory Compliance'],
      icon: BarChart3,
      badge: 'Quantum Finance',
      color: 'from-green-600 to-emerald-700',
      link: '/services/quantum-financial-modeling',
      marketPrice: '$60,000/month',
      savings: '33%',
      rating: 4.7,
      reviews: 28,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Autonomous AI Systems
    {
      id: 'autonomous-business-ai',
      name: 'Autonomous Business AI Platform',
      description: 'Fully autonomous AI system that runs entire business operations, makes strategic decisions, and optimizes processes without human intervention.',
      category: 'Autonomous AI',
      price: '$25,000/month',
      features: ['Autonomous Decision Making', 'Process Optimization', 'Strategic Planning', 'Performance Monitoring', 'Continuous Learning'],
      icon: Bot,
      badge: 'Autonomous',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/autonomous-business-ai',
      marketPrice: '$35,000/month',
      savings: '29%',
      rating: 4.9,
      reviews: 67,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'autonomous-research-ai',
      name: 'Autonomous Research AI',
      description: 'AI system that autonomously conducts scientific research, generates hypotheses, designs experiments, and publishes findings.',
      category: 'Autonomous AI',
      price: '$30,000/month',
      features: ['Autonomous Research', 'Hypothesis Generation', 'Experiment Design', 'Data Analysis', 'Publication Generation'],
      icon: Microscope,
      badge: 'Research AI',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/autonomous-research-ai',
      marketPrice: '$45,000/month',
      savings: '33%',
      rating: 4.8,
      reviews: 41,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'autonomous-creative-ai',
      name: 'Autonomous Creative AI Studio',
      description: 'AI system that autonomously creates art, music, literature, and multimedia content with human-level creativity.',
      category: 'Autonomous AI',
      price: '$20,000/month',
      features: ['Autonomous Content Creation', 'Multi-media Generation', 'Style Adaptation', 'Creative Collaboration', 'Royalty Management'],
      icon: Palette,
      badge: 'Creative AI',
      color: 'from-pink-600 to-rose-700',
      link: '/services/autonomous-creative-ai',
      marketPrice: '$30,000/month',
      savings: '33%',
      rating: 4.7,
      reviews: 89,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Neuromorphic Computing
    {
      id: 'neuromorphic-computing-platform',
      name: 'Neuromorphic Computing Platform',
      description: 'Brain-inspired computing platform that mimics neural networks for ultra-efficient AI processing and edge computing applications.',
      category: 'Neuromorphic',
      price: '$45,000/month',
      features: ['Brain-Inspired Architecture', 'Ultra-Efficient Processing', 'Edge Computing', 'Low Power Consumption', 'Real-time Learning'],
      icon: Brain,
      badge: 'Neuromorphic',
      color: 'from-cyan-600 to-teal-700',
      link: '/services/neuromorphic-computing',
      marketPrice: '$65,000/month',
      savings: '31%',
      rating: 4.8,
      reviews: 23,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'neuromorphic-sensors',
      name: 'Neuromorphic Sensor Networks',
      description: 'Advanced sensor networks using neuromorphic computing for real-time environmental monitoring and predictive analytics.',
      category: 'Neuromorphic',
      price: '$35,000/month',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Energy Efficient', 'Scalable Networks', 'AI-Powered Insights'],
      icon: Activity,
      badge: 'Smart Sensors',
      color: 'from-emerald-600 to-green-700',
      link: '/services/neuromorphic-sensors',
      marketPrice: '$50,000/month',
      savings: '30%',
      rating: 4.6,
      reviews: 18,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Space Technology Services
    {
      id: 'space-ai-platform',
      name: 'Space AI Platform',
      description: 'AI-powered platform for space exploration, satellite management, and extraterrestrial data analysis.',
      category: 'Space Tech',
      price: '$60,000/month',
      features: ['Satellite Management', 'Space Data Analysis', 'Mission Planning', 'Astronomical Research', 'Space Debris Tracking'],
      icon: Satellite,
      badge: 'Space AI',
      color: 'from-slate-600 to-gray-700',
      link: '/services/space-ai-platform',
      marketPrice: '$85,000/month',
      savings: '29%',
      rating: 4.9,
      reviews: 15,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'mars-colony-ai',
      name: 'Mars Colony AI System',
      description: 'Comprehensive AI system designed for autonomous management of Mars colonies and extraterrestrial habitats.',
      category: 'Space Tech',
      price: '$100,000/month',
      features: ['Habitat Management', 'Resource Optimization', 'Life Support Systems', 'Scientific Research', 'Emergency Response'],
      icon: Rocket,
      badge: 'Mars AI',
      color: 'from-orange-600 to-red-700',
      link: '/services/mars-colony-ai',
      marketPrice: '$150,000/month',
      savings: '33%',
      rating: 4.8,
      reviews: 8,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Biotechnology AI
    {
      id: 'synthetic-biology-ai',
      name: 'Synthetic Biology AI Platform',
      description: 'AI platform for designing and engineering biological systems, genetic circuits, and synthetic organisms.',
      category: 'Bio AI',
      price: '$55,000/month',
      features: ['Genetic Design', 'Biological Engineering', 'Safety Protocols', 'Regulatory Compliance', 'Lab Automation'],
      icon: FlaskConical,
      badge: 'Bio AI',
      color: 'from-lime-600 to-green-700',
      link: '/services/synthetic-biology-ai',
      marketPrice: '$80,000/month',
      savings: '31%',
      rating: 4.7,
      reviews: 25,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-drug-discovery',
      name: 'AI Drug Discovery Platform',
      description: 'Advanced AI platform for accelerating drug discovery, molecular design, and pharmaceutical research.',
      category: 'Bio AI',
      price: '$70,000/month',
      features: ['Molecular Design', 'Drug Screening', 'Clinical Trial Optimization', 'Safety Prediction', 'Regulatory Support'],
      icon: Pill,
      badge: 'Pharma AI',
      color: 'from-violet-600 to-purple-700',
      link: '/services/ai-drug-discovery',
      marketPrice: '$100,000/month',
      savings: '30%',
      rating: 4.9,
      reviews: 34,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Climate AI
    {
      id: 'climate-prediction-ai',
      name: 'Climate Prediction AI Platform',
      description: 'Advanced AI system for climate modeling, weather prediction, and environmental impact assessment.',
      category: 'Climate AI',
      price: '$40,000/month',
      features: ['Climate Modeling', 'Weather Prediction', 'Impact Assessment', 'Policy Recommendations', 'Real-time Monitoring'],
      icon: Cloud,
      badge: 'Climate AI',
      color: 'from-sky-600 to-blue-700',
      link: '/services/climate-prediction-ai',
      marketPrice: '$60,000/month',
      savings: '33%',
      rating: 4.8,
      reviews: 56,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'carbon-capture-ai',
      name: 'AI Carbon Capture Optimization',
      description: 'AI-powered system for optimizing carbon capture technologies and carbon credit management.',
      category: 'Climate AI',
      price: '$45,000/month',
      features: ['Capture Optimization', 'Credit Management', 'Emission Tracking', 'Compliance Monitoring', 'Sustainability Reporting'],
      icon: Leaf,
      badge: 'Carbon AI',
      color: 'from-green-600 to-emerald-700',
      link: '/services/carbon-capture-ai',
      marketPrice: '$65,000/month',
      savings: '31%',
      rating: 4.7,
      reviews: 42,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: services.length },
    { id: 'Quantum AI', name: 'Quantum AI', icon: Atom, count: services.filter(s => s.category === 'Quantum AI').length },
    { id: 'Autonomous AI', name: 'Autonomous AI', icon: Bot, count: services.filter(s => s.category === 'Autonomous AI').length },
    { id: 'Neuromorphic', name: 'Neuromorphic', icon: Brain, count: services.filter(s => s.category === 'Neuromorphic').length },
    { id: 'Space Tech', name: 'Space Technology', icon: Satellite, count: services.filter(s => s.category === 'Space Tech').length },
    { id: 'Bio AI', name: 'Biotechnology AI', icon: Flask, count: services.filter(s => s.category === 'Bio AI').length },
    { id: 'Climate AI', name: 'Climate AI', icon: Cloud, count: services.filter(s => s.category === 'Climate AI').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Zion Cutting-Edge
              <span className="block text-zion-cyan">Services 2031</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            >
              Experience the future of technology with our revolutionary quantum AI, autonomous systems, and emerging technology solutions. 
              Be among the first to harness the power of tomorrow's innovations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us: +1 302 464 0950
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark border-t border-b border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-zion-blue-dark/50 border-b border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue text-zion-slate-light hover:bg-zion-blue-light'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-blue border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Service Header */}
              <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                <service.icon className="w-16 h-16 text-white" />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  {service.badge && (
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      service.badge === 'Quantum AI' ? 'bg-purple-500/20 text-purple-400' :
                      service.badge === 'Quantum Security' ? 'bg-red-500/20 text-red-400' :
                      service.badge === 'Quantum Finance' ? 'bg-green-500/20 text-green-400' :
                      service.badge === 'Autonomous' ? 'bg-blue-500/20 text-blue-400' :
                      service.badge === 'Research AI' ? 'bg-indigo-500/20 text-indigo-400' :
                      service.badge === 'Creative AI' ? 'bg-pink-500/20 text-pink-400' :
                      service.badge === 'Neuromorphic' ? 'bg-cyan-500/20 text-cyan-400' :
                      service.badge === 'Smart Sensors' ? 'bg-emerald-500/20 text-emerald-400' :
                      service.badge === 'Space AI' ? 'bg-slate-500/20 text-slate-400' :
                      service.badge === 'Mars AI' ? 'bg-orange-500/20 text-orange-400' :
                      service.badge === 'Bio AI' ? 'bg-lime-500/20 text-lime-400' :
                      service.badge === 'Pharma AI' ? 'bg-violet-500/20 text-violet-400' :
                      service.badge === 'Climate AI' ? 'bg-sky-500/20 text-sky-400' :
                      service.badge === 'Carbon AI' ? 'bg-green-500/20 text-green-400' :
                      'bg-zion-cyan/20 text-zion-cyan'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-zion-slate-light ml-5">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-sm text-zion-slate-light line-through">
                          {service.marketPrice}
                        </span>
                      )}
                    </div>
                    {service.savings && (
                      <span className="text-sm text-green-400 font-semibold">
                        Save {service.savings}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-zion-slate-light">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2">
                  <Link
                    to={service.link}
                    className="w-full bg-zion-cyan text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-zion-cyan-dark transition-colors"
                  >
                    Learn More
                  </Link>
                  <div className="flex space-x-2">
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex-1 bg-zion-blue text-zion-cyan py-2 px-4 rounded-lg font-semibold text-center hover:bg-zion-blue-light transition-colors"
                    >
                      <Phone className="w-4 h-4 inline mr-1" />
                      Call
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex-1 bg-zion-blue text-zion-cyan py-2 px-4 rounded-lg font-semibold text-center hover:bg-zion-blue-light transition-colors"
                    >
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-zion-blue-dark border-t border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Our cutting-edge services represent the pinnacle of technological innovation. 
              Be among the first to experience the future of AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p className="text-sm">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-sm">
                <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}