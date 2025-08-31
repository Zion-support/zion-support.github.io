<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, 
  ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, 
  Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, 
  Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, 
  Database, Network, Clock, ArrowRight, Sparkles, Phone, Mail, 
  MapPin, Satellite, FileText, Zap, Palette, Camera, Video, 
  Music, Gamepad2, Car, Plane, Ship, Train, Leaf, Sun, Wind, 
  Droplets, Mountain, TreePine, Recycle, Lightbulb, Battery, 
  Wifi, Bluetooth, Radio, Telescope, Microscope, Flask, TestTube, 
  Beaker, Pill, Stethoscope, Syringe, HeartPulse, Activity, 
  Thermometer, Droplet, EyeOff, Key, Fingerprint, Scan, QrCode, 
  CreditCard, Wallet, PiggyBank, TrendingDown, BarChart, PieChart, 
  LineChart, ScatterChart, AreaChart, CandlestickChart, GanttChart, 
  Kanban, Calendar, Timer, Stopwatch, AlertTriangle, Search
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react.ts';
import { motion, AnimatePresence              } from 'framer-motion.ts';
import { Search,
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
=======
import React, { useState              } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Lock,
  Cloud,
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Phone,
  Mail,
<<<<<<< HEAD
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
  Leaf
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025              } from '../data/innovativeMicroSaasServices2025';

interface ServiceContact {













  mobile: string;
  email: string;
  address: string;
  website: string;

const ComprehensiveServicesShowcase2025: React.FC = (): JSX.Element => {;
  const [activeCategory, setActiveCategory] = useState('all');
=======
  MapPin













} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025(...args: any[]): any {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      description: 'Comprehensive AI orchestration platform for enterprise-wide automation and decision-making.',
      category: 'AI & ML',
      price: '$4,500/month',
      features: ['Enterprise Automation', 'Decision Intelligence', 'Process Optimization', 'Integration Hub', 'Scalable Architecture'],
      icon: Brain,
      badge: 'Enterprise',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/ai-enterprise-orchestrator',
      marketPrice: '$5,800/month',
      savings: '22%',
      rating: 4.9,
      reviews: 234
    },
    {
      id: 'ai-workflow-orchestrator',
      name: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation with AI-powered process optimization and decision routing.',
      category: 'AI & ML',
      price: '$2,800/month',
      features: ['Process Automation', 'Decision Routing', 'Performance Analytics', 'Integration APIs', 'Custom Workflows'],
      icon: Workflow,
      badge: 'Featured',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/ai-workflow-orchestrator',
      marketPrice: '$3,600/month',
      savings: '22%',
      rating: 4.8,
      reviews: 167
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Predictive maintenance platform with IoT sensors, AI analytics, and automated alerts.',
      category: 'AI & ML',
      price: '$3,200/month',
      features: ['IoT Integration', 'Predictive Analytics', 'Automated Alerts', 'Maintenance Scheduling', 'Cost Optimization'],
      icon: Activity,
      badge: 'Industrial',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-predictive-maintenance',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.9,
      reviews: 189
    },

    // New Micro SaaS Solutions
    {
      id: 'smart-contract-risk-scanner',
      name: 'Smart Contract Risk Scanner',
      description: 'AI-powered smart contract security analysis and risk assessment platform.',
      category: 'Micro SaaS',
      price: '$1,800/month',
      features: ['Security Analysis', 'Risk Assessment', 'Vulnerability Detection', 'Compliance Checking', 'Audit Reports'],
      icon: Shield,
      badge: 'Blockchain',
      color: 'from-green-600 to-emerald-700',
      link: '/services/smart-contract-risk-scanner',
      marketPrice: '$2,300/month',
      savings: '22%',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'vendor-risk-management',
      name: 'Vendor Risk Management Platform',
      description: 'Comprehensive vendor risk assessment, monitoring, and compliance management.',
      category: 'Micro SaaS',
      price: '$1,600/month',
      features: ['Risk Assessment', 'Vendor Monitoring', 'Compliance Management', 'Due Diligence', 'Reporting Tools'],
      icon: Building,
      badge: 'Compliance',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/vendor-risk-management',
      marketPrice: '$2,100/month',
      savings: '24%',
      rating: 4.7,
      reviews: 134
    },
    {
      id: 'gdpr-cookie-compliance',
      name: 'GDPR Cookie Compliance Manager',
      description: 'Automated GDPR compliance for website cookies and user consent management.',
      category: 'Micro SaaS',
      price: '$400/month',
      features: ['Cookie Management', 'Consent Tracking', 'GDPR Compliance', 'Privacy Policy', 'Audit Trail'],
      icon: FileText,
      badge: 'Privacy',
      color: 'from-teal-600 to-cyan-700',
      link: '/services/gdpr-cookie-compliance',
      marketPrice: '$600/month',
      savings: '33%',
      rating: 4.6,
      reviews: 78
    },

    // New IT Infrastructure Services
    {
      id: 'ai-cybersecurity-threat-detection',
      name: 'AI Cybersecurity Threat Detection',
      description: 'Advanced threat detection with machine learning and behavioral analysis.',
      category: 'IT Infrastructure',
      price: '$3,800/month',
      features: ['Threat Detection', 'Behavioral Analysis', 'Machine Learning', 'Real-time Monitoring', 'Incident Response'],
      icon: Lock,
      badge: 'Security',
      color: 'from-red-600 to-pink-700',
      link: '/services/ai-cybersecurity-threat-detection',
      marketPrice: '$4,900/month',
      savings: '22%',
      rating: 4.9,
      reviews: 267
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive cybersecurity platform with AI-powered threat prevention and response.',
      category: 'IT Infrastructure',
      price: '$4,200/month',
      features: ['Threat Prevention', 'AI Response', 'Security Analytics', 'Compliance Management', '24/7 Monitoring'],
      icon: Shield,
      badge: 'Premium',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/ai-cybersecurity-suite',
      marketPrice: '$5,400/month',
      savings: '22%',
      rating: 4.9,
      reviews: 189
    },

    // New Emerging Technology Services
    {
      id: 'quantum-computing-as-a-service',
      name: 'Quantum Computing as a Service',
      description: 'Cloud-based quantum computing platform for research and enterprise applications.',
      category: 'Emerging Tech',
      price: '$5,500/month',
      features: ['Quantum Algorithms', 'Cloud Access', 'Research Tools', 'Enterprise APIs', 'Expert Support'],
      icon: Atom,
      badge: 'Quantum',
      color: 'from-purple-600 to-pink-700',
      link: '/services/quantum-computing-as-a-service',
      marketPrice: '$7,100/month',
      savings: '23%',
      rating: 4.9,
      reviews: 67
    },
    {
      id: 'edge-computing-platform',
      name: 'Edge Computing Platform',
      description: 'Distributed edge computing for IoT, real-time processing, and low-latency applications.',
      category: 'Emerging Tech',
      price: '$2,900/month',
      features: ['Edge Nodes', 'Real-time Processing', 'IoT Integration', 'Low Latency', 'Scalable Architecture'],
      icon: Cpu,
      badge: 'Edge',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/edge-computing-platform',
      marketPrice: '$3,700/month',
      savings: '22%',
      rating: 4.8,
      reviews: 123
    },

    // New Healthcare Technology Services
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Platform',
      description: 'Comprehensive healthcare AI platform with diagnostics, treatment planning, and patient care.',
      category: 'AI & ML',
      price: '$4,800/month',
      features: ['AI Diagnostics', 'Treatment Planning', 'Patient Care', 'Clinical Decision Support', 'HIPAA Compliance'],
      icon: HeartPulse,
      badge: 'Healthcare',
      color: 'from-red-600 to-pink-700',
      link: '/services/ai-healthcare-platform',
      marketPrice: '$6,200/month',
      savings: '23%',
      rating: 4.9,
      reviews: 189
    },

    // New Financial Technology Services
    {
      id: 'ai-financial-analytics',
      name: 'AI Financial Analytics Platform',
      description: 'Advanced financial analytics with AI-powered insights and predictive modeling.',
      category: 'AI & ML',
      price: '$3,600/month',
      features: ['Financial Analytics', 'Predictive Modeling', 'Risk Assessment', 'Portfolio Optimization', 'Real-time Data'],
      icon: BarChart3,
      badge: 'Finance',
      color: 'from-emerald-600 to-green-700',
      link: '/services/ai-financial-analytics',
      marketPrice: '$4,600/month',
      savings: '22%',
      rating: 4.8,
      reviews: 156
    },

    // New Marketing & Sales Services
    {
      id: 'ai-content-optimizer-pro',
      name: 'AI Content Optimizer Pro',
      description: 'Advanced content optimization with AI-powered SEO, readability, and engagement analysis.',
      category: 'AI & ML',
      price: '$2,400/month',
      features: ['Content Optimization', 'SEO Analysis', 'Readability Scoring', 'Engagement Metrics', 'A/B Testing'],
      icon: PenTool,
      badge: 'Content',
      color: 'from-pink-600 to-rose-700',
      link: '/services/ai-content-optimizer-pro',
      marketPrice: '$3,100/month',
      savings: '23%',
      rating: 4.8,
      reviews: 134
    },

    // New Supply Chain Services
    {
      id: 'ai-supply-chain-platform',
      name: 'AI Supply Chain Platform',
      description: 'End-to-end supply chain optimization with AI-powered forecasting and logistics management.',
      category: 'AI & ML',
      price: '$3,800/month',
      features: ['Supply Chain Optimization', 'Demand Forecasting', 'Logistics Management', 'Risk Assessment', 'Real-time Tracking'],
      icon: Truck,
      badge: 'Supply Chain',
      color: 'from-blue-600 to-indigo-700',
      link: '/services/ai-supply-chain-platform',
      marketPrice: '$4,900/month',
      savings: '22%',
      rating: 4.9,
      reviews: 178
    },

    // New Customer Experience Services
    {
      id: 'ai-customer-support-automation',
      name: 'AI Customer Support Automation',
      description: 'Intelligent customer service automation with chatbots, ticket routing, and sentiment analysis.',
      category: 'AI & ML',
      price: '$2,100/month',
      features: ['Smart Chatbots', 'Ticket Routing', 'Sentiment Analysis', 'Knowledge Base', 'Performance Metrics'],
      icon: MessageCircle,
      badge: 'Support',
      color: 'from-cyan-600 to-blue-700',
      link: '/services/ai-customer-support-automation',
      marketPrice: '$2,700/month',
      savings: '22%',
      rating: 4.8,
      reviews: 203
    },

    // New Project Management Services
    {
      id: 'ai-project-management-platform',
      name: 'AI Project Management Platform',
      description: 'Intelligent project planning, resource allocation, and risk management with AI insights.',
      category: 'AI & ML',
      price: '$2,800/month',
      features: ['Smart Planning', 'Resource Optimization', 'Risk Management', 'Team Collaboration', 'Progress Tracking'],
      icon: Workflow,
      badge: 'Project Mgmt',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-project-management-platform',
      marketPrice: '$3,600/month',
      savings: '22%',
      rating: 4.9,
      reviews: 178
    },

    // New DevOps Services
    {
      id: 'ai-devops-automation-platform',
      name: 'AI DevOps Automation Platform',
      description: 'Intelligent DevOps automation with AI-powered deployment, testing, and monitoring.',
      category: 'IT Infrastructure',
      price: '$3,800/month',
      features: ['AI Deployment', 'Automated Testing', 'Intelligent Monitoring', 'Performance Optimization', 'Security Integration'],
      icon: Workflow,
      badge: 'DevOps',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-devops-automation-platform',
      marketPrice: '$4,900/month',
      savings: '22%',
      rating: 4.9,
      reviews: 178
    },

    // New IoT Services
    {
      id: 'ai-iot-edge-computing-platform',
      name: 'AI IoT Edge Computing Platform',
      description: 'Edge computing platform for IoT devices with AI processing and real-time analytics.',
      category: 'IT Infrastructure',
      price: '$2,900/month',
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'AI Models', 'Scalable Architecture'],
      icon: Cpu,
      badge: 'IoT',
      color: 'from-cyan-600 to-blue-700',
      link: '/services/ai-iot-edge-computing-platform',
      marketPrice: '$3,700/month',
      savings: '22%',
      rating: 4.8,
      reviews: 145
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: services.length },
    { id: 'AI & ML', name: 'AI & Machine Learning', icon: Brain, count: services.filter(s => s.category === 'AI & ML').length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: services.filter(s => s.category === 'IT Infrastructure').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Rocket, count: services.filter(s => s.category === 'Micro SaaS').length },
    { id: 'Emerging Tech', name: 'Emerging Technology', icon: Atom, count: services.filter(s => s.category === 'Emerging Tech').length }
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

<<<<<<< HEAD
=======
  const handleServiceClick = (service: anyanyanyanyanyanyanyanyanyanyanyanyany)              => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1


  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"


=======
  const categories = ['all', ...new Set(allServices.map(service => service.category))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $1,000/month' },
    { value: 'medium', label: '$1,000 - $5,000/month' },
    { value: 'high', label: '$5,000 - $15,000/month' },
    { value: 'premium', label: 'Over $15,000/month' }
  ];

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2025
    .filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          return getInnovationScore(b.innovationLevel) - getInnovationScore(a.innovationLevel);
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseFloat(b.roi.split('%')[0]) - parseFloat(a.roi.split('%')[0]);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const getPriceRange = (price: anyanyanyanyanyanyanyanyanyanyanyanyanynumber)              => {
    if (price < 1000) return 'low';
    if (price < 5000) return 'medium';
    if (price < 15000) return 'high';
    return 'premium';
  };

  const getPriceRangeColor = (range: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (range) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'high': return 'bg-yellow-100 text-yellow-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Services Showcase 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-8"
          >
            Discover our complete portfolio of innovative AI solutions, micro SAAS platforms, and cutting-edge IT services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-slate-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
<<<<<<< HEAD
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
=======

            {/* Category Filter */}
            <div>
              <select
<<<<<<< HEAD
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"

                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="innovation">Innovation Level</option>
=======
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category              => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
<<<<<<< HEAD
              <div className="flex bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}

                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}

                  List
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Innovation Level */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Innovation Level
              </label>
              <select
                value={innovationLevel}
                onChange={(e) => setInnovationLevel(e.target.value)}
                className="w-full px-3 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"

                <option value="all">All Levels</option>
                <option value="Breakthrough">Breakthrough</option>
                <option value="Revolutionary">Revolutionary</option>
                <option value="Advanced">Advanced</option>
=======
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range              => (
                  <option key={range.value} value={range.value} className="bg-slate-800 text-white">
                    {range.label}
                  </option>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </select>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-blue-200 hover:bg-slate-600'
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
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2 pl-10 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-blue-300" />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
<<<<<<< HEAD
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.badge === 'New' ? 'bg-green-500 text-white' :
                        service.badge === 'Popular' ? 'bg-blue-500 text-white' :
                        service.badge === 'Featured' ? 'bg-purple-500 text-white' :
                        service.badge === 'Premium' ? 'bg-indigo-500 text-white' :
                        service.badge === 'Enterprise' ? 'bg-purple-600 text-white' :
                        service.badge === 'Industrial' ? 'bg-orange-500 text-white' :
                        service.badge === 'Blockchain' ? 'bg-green-600 text-white' :
                        service.badge === 'Compliance' ? 'bg-indigo-600 text-white' :
                        service.badge === 'Privacy' ? 'bg-teal-500 text-white' :
                        service.badge === 'Security' ? 'bg-red-500 text-white' :
                        service.badge === 'Quantum' ? 'bg-purple-500 text-white' :
                        service.badge === 'Edge' ? 'bg-blue-500 text-white' :
                        service.badge === 'Healthcare' ? 'bg-red-600 text-white' :
                        service.badge === 'Finance' ? 'bg-emerald-500 text-white' :
                        service.badge === 'Content' ? 'bg-pink-500 text-white' :
                        service.badge === 'Supply Chain' ? 'bg-blue-600 text-white' :
                        service.badge === 'Support' ? 'bg-cyan-500 text-white' :
                        service.badge === 'Project Mgmt' ? 'bg-orange-500 text-white' :
                        service.badge === 'DevOps' ? 'bg-orange-600 text-white' :
                        service.badge === 'IoT' ? 'bg-cyan-600 text-white' :
                        'bg-orange-500 text-white'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
=======
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}

            {sortedServices.map((service, index)              => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  viewMode === 'list' ? 'p-6' : 'p-6'
                }`}
                onClick={() => handleServiceClick(service)}

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-blue-200 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-blue-200 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-blue-200 line-through">{service.marketPrice}</div>
                      <div className="text-xs text-green-400">Save {service.savings}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-blue-200">
                        {service.rating} ({service.reviews} reviews)
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    Learn More
                    <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-blue-200">Try adjusting your search criteria or browse all services.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
=======
            viewport={{ once: true }}

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-12">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-First Approach",
                description: "Every solution is built with cutting-edge AI at its core, ensuring maximum efficiency and innovation."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with SOC 2 compliance, ensuring your data and operations are always protected."
              },
              {
                icon: Zap,
                title: "Rapid Implementation",
                description: "Get up and running in weeks, not months, with our proven implementation methodology."

            ].map((feature, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"

                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            Join thousands of businesses already leveraging our comprehensive services to stay ahead of the competition.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300 text-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 text-lg"
            >
              View Full Pricing
            </Link>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
=======

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-zion-slate-light text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-zion-slate-light hover:text-white transition-colors"

                    <X className="w-6 h-6" />
=======
      </div>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index)              => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} rounded-lg flex items-center justify-center`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-semibold text-sm">{service.innovationLevel}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Pricing & ROI */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Market Price</span>
                  </div>
                  <p className="text-white font-bold">{service.marketPrice}</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">ROI</span>
                  </div>
                  <p className="text-white font-bold">{service.roi}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 5 && (
                    <div className="text-sm text-gray-500 mt-2">
                      +{service.features.length - 5} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits & Use Cases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Quote
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  </button>
                  <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Delivery & Support */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold text-sm">Delivery</span>
                  </div>
                  <p className="text-white text-sm">{service.estimatedDelivery}</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold text-sm">Support</span>
                  </div>
                  <p className="text-white text-sm">{service.supportLevel}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  to={`/services/${service.id}`}
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-transparent text-cyan-400 px-4 py-3 rounded-lg font-semibold border border-cyan-400 hover:bg-cyan-400/10 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Trends Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Market Trends & Opportunities 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Market Growth</h3>
                <p className="text-cyan-100">50% annual growth rate in AI-powered solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Market Size</h3>
                <p className="text-cyan-100">$800B+ AI market by 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Adoption Rate</h3>
                <p className="text-cyan-100">85% of enterprises adopting AI by 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ROI Potential</h3>
                <p className="text-cyan-100">400-1500% average ROI on AI investments</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Success Stories & Case Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from businesses using our revolutionary technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Quantum Breakthrough</h3>
              <p className="text-gray-400 mb-4 text-center">
                "Our quantum AI platform solved a drug discovery problem in days that would have taken years on classical computers"
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <span className="text-green-400 font-semibold">1000x Faster</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Edge AI Success</h3>
              <p className="text-gray-400 mb-4 text-center">
                "Our autonomous vehicle response time improved by 90% with edge AI processing"
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <span className="text-blue-400 font-semibold">90% Faster Response</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Trading Success</h3>
              <p className="text-gray-400 mb-4 text-center">
                "Our trading performance improved by 35% using AI signals and automated strategies"
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                  <span className="text-purple-400 font-semibold">35% Performance Gain</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary technology solutions to drive growth, 
              reduce costs, and gain competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-cyan-500/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-cyan-100">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    </div>
  );
}
