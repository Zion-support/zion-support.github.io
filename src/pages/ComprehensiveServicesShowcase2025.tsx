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
  Flask,
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
  ShieldCheck
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedService, setSelectedService] = useState(null);

  // Comprehensive Services Catalog 2025 - Micro SAAS, IT, and AI Solutions
  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      description: 'Advanced AI-powered business analytics and insights platform with predictive modeling and real-time dashboards.',
      category: 'AI & ML',
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'API Integration', '24/7 Support'],
      icon: Brain,
      badge: 'Popular',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/ai-business-intelligence',
      marketPrice: '$3,200/month',
      savings: '22%',
      rating: 4.9,
      reviews: 127,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Automation Suite',
      description: 'Automated compliance monitoring and reporting for regulatory requirements across industries.',
      category: 'AI & ML',
      price: '$1,800/month',
      features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Trails', 'Compliance Dashboard'],
      icon: Shield,
      badge: 'New',
      color: 'from-green-600 to-emerald-700',
      link: '/services/ai-compliance-assistant',
      marketPrice: '$2,400/month',
      savings: '25%',
      rating: 4.8,
      reviews: 89,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot Platform',
      description: 'Intelligent sales automation with lead scoring, customer insights, and sales forecasting.',
      category: 'AI & ML',
      price: '$2,200/month',
      features: ['Lead Scoring', 'Customer Insights', 'Sales Forecasting', 'CRM Integration', 'Performance Analytics'],
      icon: TrendingUp,
      badge: 'Featured',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/ai-sales-copilot',
      marketPrice: '$2,800/month',
      savings: '21%',
      rating: 4.9,
      reviews: 156,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generation Suite',
      description: 'Multi-format content creation platform for marketing, documentation, and creative writing.',
      category: 'AI & ML',
      price: '$1,500/month',
      features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Consistency', 'Plagiarism Detection', 'Content Analytics'],
      icon: PenTool,
      badge: 'Trending',
      color: 'from-pink-600 to-rose-700',
      link: '/services/ai-content-generator',
      marketPrice: '$2,000/month',
      savings: '25%',
      rating: 4.7,
      reviews: 203,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbot and support ticket automation with sentiment analysis.',
      category: 'AI & ML',
      price: '$1,200/month',
      features: ['Smart Chatbots', 'Ticket Automation', 'Sentiment Analysis', 'Multi-language Support', 'Integration APIs'],
      icon: MessageCircle,
      badge: 'Best Value',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-customer-support',
      marketPrice: '$1,600/month',
      savings: '25%',
      rating: 4.8,
      reviews: 178,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Micro SAAS Services
    {
      id: 'project-management-saas',
      name: 'Project Management Micro SAAS',
      description: 'Lightweight project management solution for small teams with task tracking and collaboration.',
      category: 'Micro SAAS',
      price: '$99/month',
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'File Sharing', 'Progress Reports'],
      icon: Kanban,
      badge: 'Micro SAAS',
      color: 'from-teal-600 to-cyan-700',
      link: '/services/project-management-saas',
      marketPrice: '$150/month',
      savings: '34%',
      rating: 4.6,
      reviews: 89,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'inventory-management-saas',
      name: 'Inventory Management System',
      description: 'Simple inventory tracking and management for small businesses and e-commerce.',
      category: 'Micro SAAS',
      price: '$79/month',
      features: ['Stock Tracking', 'Low Stock Alerts', 'Barcode Scanning', 'Purchase Orders', 'Inventory Reports'],
      icon: Package,
      badge: 'Micro SAAS',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/inventory-management-saas',
      marketPrice: '$120/month',
      savings: '34%',
      rating: 4.5,
      reviews: 67,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'hr-management-saas',
      name: 'HR Management Platform',
      description: 'Complete HR solution for small to medium businesses with employee management and payroll.',
      category: 'Micro SAAS',
      price: '$149/month',
      features: ['Employee Database', 'Time & Attendance', 'Payroll Processing', 'Benefits Management', 'Performance Reviews'],
      icon: Users,
      badge: 'Micro SAAS',
      color: 'from-emerald-600 to-green-700',
      link: '/services/hr-management-saas',
      marketPrice: '$200/month',
      savings: '25%',
      rating: 4.7,
      reviews: 112,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'accounting-saas',
      name: 'Cloud Accounting Suite',
      description: 'Professional accounting software with invoicing, expense tracking, and financial reporting.',
      category: 'Micro SAAS',
      price: '$129/month',
      features: ['Invoicing', 'Expense Tracking', 'Bank Reconciliation', 'Financial Reports', 'Tax Preparation'],
      icon: Calculator,
      badge: 'Micro SAAS',
      color: 'from-blue-600 to-indigo-700',
      link: '/services/accounting-saas',
      marketPrice: '$180/month',
      savings: '28%',
      rating: 4.8,
      reviews: 156,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'crm-saas',
      name: 'Customer Relationship Management',
      description: 'Simple yet powerful CRM for small businesses to manage customer interactions and sales.',
      category: 'Micro SAAS',
      price: '$89/month',
      features: ['Contact Management', 'Lead Tracking', 'Sales Pipeline', 'Email Integration', 'Customer Analytics'],
      icon: UserCheck,
      badge: 'Micro SAAS',
      color: 'from-rose-600 to-pink-700',
      link: '/services/crm-saas',
      marketPrice: '$130/month',
      savings: '32%',
      rating: 4.6,
      reviews: 98,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // IT Infrastructure Services
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Complete cloud migration strategy and implementation for legacy systems.',
      category: 'IT Infrastructure',
      price: '$15,000+',
      features: ['Migration Strategy', 'Data Transfer', 'Application Modernization', 'Performance Optimization', '24/7 Support'],
      icon: Cloud,
      badge: 'Enterprise',
      color: 'from-sky-600 to-blue-700',
      link: '/services/cloud-migration',
      marketPrice: '$25,000+',
      savings: '40%',
      rating: 4.9,
      reviews: 45,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'cybersecurity-audit',
      name: 'Cybersecurity Audit & Assessment',
      description: 'Comprehensive security assessment and vulnerability testing for your IT infrastructure.',
      category: 'IT Infrastructure',
      price: '$8,500+',
      features: ['Security Assessment', 'Vulnerability Testing', 'Penetration Testing', 'Compliance Review', 'Security Report'],
      icon: ShieldCheck,
      badge: 'Security',
      color: 'from-red-600 to-rose-700',
      link: '/services/cybersecurity-audit',
      marketPrice: '$12,000+',
      savings: '29%',
      rating: 4.8,
      reviews: 67,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'network-optimization',
      name: 'Network Infrastructure Optimization',
      description: 'Network performance optimization and infrastructure modernization services.',
      category: 'IT Infrastructure',
      price: '$12,000+',
      features: ['Network Assessment', 'Performance Optimization', 'Infrastructure Modernization', 'Monitoring Setup', 'Documentation'],
      icon: Network,
      badge: 'Infrastructure',
      color: 'from-violet-600 to-purple-700',
      link: '/services/network-optimization',
      marketPrice: '$18,000+',
      savings: '33%',
      rating: 4.7,
      reviews: 34,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive data protection and business continuity solutions.',
      category: 'IT Infrastructure',
      price: '$6,500+',
      features: ['Backup Strategy', 'Automated Backups', 'Disaster Recovery Plan', 'Testing & Validation', '24/7 Monitoring'],
      icon: Database,
      badge: 'Data Protection',
      color: 'from-amber-600 to-orange-700',
      link: '/services/data-backup-recovery',
      marketPrice: '$9,500+',
      savings: '32%',
      rating: 4.8,
      reviews: 89,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      description: 'Complete IT management and support for businesses of all sizes.',
      category: 'IT Infrastructure',
      price: '$2,500/month',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Security Management', 'Regular Reporting'],
      icon: Server,
      badge: 'Managed Services',
      color: 'from-slate-600 to-gray-700',
      link: '/services/managed-it-services',
      marketPrice: '$3,500/month',
      savings: '29%',
      rating: 4.9,
      reviews: 156,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Emerging Technology Services
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Development Services',
      description: 'Custom blockchain solutions for supply chain, finance, and decentralized applications.',
      category: 'Emerging Tech',
      price: '$25,000+',
      features: ['Smart Contract Development', 'DApp Development', 'Blockchain Integration', 'Security Auditing', 'Maintenance'],
      icon: Link,
      badge: 'Blockchain',
      color: 'from-yellow-600 to-amber-700',
      link: '/services/blockchain-solutions',
      marketPrice: '$40,000+',
      savings: '38%',
      rating: 4.7,
      reviews: 23,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'iot-platform',
      name: 'IoT Platform Development',
      description: 'Custom IoT solutions for smart cities, industrial automation, and connected devices.',
      category: 'Emerging Tech',
      price: '$18,000+',
      features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Mobile Apps', 'Cloud Integration'],
      icon: Wifi,
      badge: 'IoT',
      color: 'from-cyan-600 to-teal-700',
      link: '/services/iot-platform',
      marketPrice: '$28,000+',
      savings: '36%',
      rating: 4.6,
      reviews: 18,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Consulting',
      description: 'Expert guidance on quantum computing applications and implementation strategies.',
      category: 'Emerging Tech',
      price: '$35,000+',
      features: ['Quantum Strategy', 'Algorithm Development', 'Hardware Selection', 'Training Programs', 'Implementation Support'],
      icon: Atom,
      badge: 'Quantum',
      color: 'from-purple-600 to-violet-700',
      link: '/services/quantum-computing',
      marketPrice: '$50,000+',
      savings: '30%',
      rating: 4.8,
      reviews: 12,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure and application development for low-latency applications.',
      category: 'Emerging Tech',
      price: '$22,000+',
      features: ['Edge Infrastructure', 'Application Development', 'Performance Optimization', 'Monitoring', 'Maintenance'],
      icon: Cpu,
      badge: 'Edge Computing',
      color: 'from-emerald-600 to-teal-700',
      link: '/services/edge-computing',
      marketPrice: '$32,000+',
      savings: '31%',
      rating: 4.7,
      reviews: 28,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: '5g-solutions',
      name: '5G Network Solutions',
      description: '5G network planning, implementation, and optimization for businesses.',
      category: 'Emerging Tech',
      price: '$30,000+',
      features: ['Network Planning', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation', 'Ongoing Support'],
      icon: Signal,
      badge: '5G',
      color: 'from-blue-600 to-indigo-700',
      link: '/services/5g-solutions',
      marketPrice: '$45,000+',
      savings: '33%',
      rating: 4.6,
      reviews: 15,
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: services.length },
    { id: 'AI & ML', name: 'AI & Machine Learning', icon: Brain, count: services.filter(s => s.category === 'AI & ML').length },
    { id: 'Micro SAAS', name: 'Micro SAAS Solutions', icon: Rocket, count: services.filter(s => s.category === 'Micro SAAS').length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: services.filter(s => s.category === 'IT Infrastructure').length },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our comprehensive portfolio of AI, IT, and Micro SAAS services. Discover innovative solutions designed to transform your business in 2025 and beyond."
        keywords="AI services, IT services, Micro SAAS, cybersecurity, healthcare AI, quantum computing, cloud DevOps, business intelligence"
      />

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
              Comprehensive Services
              <span className="block text-zion-cyan">Showcase 2025</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            >
              Discover our cutting-edge micro SAAS, IT infrastructure, and AI solutions designed to transform your business. 
              Competitive pricing with enterprise-grade quality.
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
                      service.badge === 'Popular' ? 'bg-green-500/20 text-green-400' :
                      service.badge === 'New' ? 'bg-blue-500/20 text-blue-400' :
                      service.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400' :
                      service.badge === 'Best Value' ? 'bg-orange-500/20 text-orange-400' :
                      service.badge === 'Micro SAAS' ? 'bg-cyan-500/20 text-cyan-400' :
                      service.badge === 'Enterprise' ? 'bg-indigo-500/20 text-indigo-400' :
                      service.badge === 'Security' ? 'bg-red-500/20 text-red-400' :
                      service.badge === 'Infrastructure' ? 'bg-violet-500/20 text-violet-400' :
                      service.badge === 'Data Protection' ? 'bg-amber-500/20 text-amber-400' :
                      service.badge === 'Managed Services' ? 'bg-slate-500/20 text-slate-400' :
                      service.badge === 'Blockchain' ? 'bg-yellow-500/20 text-yellow-400' :
                      service.badge === 'IoT' ? 'bg-cyan-500/20 text-cyan-400' :
                      service.badge === 'Quantum' ? 'bg-purple-500/20 text-purple-400' :
                      service.badge === 'Edge Computing' ? 'bg-emerald-500/20 text-emerald-400' :
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Our expert team is ready to help you implement the perfect solution for your needs. 
              Get in touch today for a personalized consultation.
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
