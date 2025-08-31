import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Workflow,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Cloud,
  Lock,
  Target,
  Globe,
  Cpu,
  Bot,
  CheckCircle,
  ArrowRight,
  Play,
  Settings,
  Database,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Activity,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Star,
  ShoppingCart,
  UserPlus,
  UserMinus,
  Calendar,
  Bell,
  PieChart,
  LineChart,
  BarChart,
  Tag,
  CreditCard,
  Gift,
  Award,
  Rocket,
  Sparkles,
  Lightbulb,
  Wrench,
  Code,
  Server,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  Wifi,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Factory,
  Building,
  Car,
  Scale,
  HeartPulse,
  Stethoscope,
  Microscope,
  Flask,
  Atom,
  Dna,
  Virus,
  ShieldCheck,
  Key,
  Fingerprint,
  EyeOff,
  AlertTriangle,
  Info,
  HelpCircle,
  BookOpen,
  FileText,
  FolderOpen,
  HardDrive,
  Network,
  WifiOff,
  Signal,
  Bluetooth,
  Radio,
  Tv,
  Camera,
  Video,
  Music,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  Voicemail,
  MessageSquare,
  MessageCircle2,
  MailOpen,
  Inbox,
  Send,
  Archive,
  Trash2,
  Edit,
  Copy,
  Scissors,
  Save,
  Plus,
  Minus,
  X,
  MoreHorizontal,
  MoreVertical,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Move,
  Grid,
  List,
  Layout,
  Sidebar,
  SidebarClose,
  Menu,
  Search2,
  Filter2,
  Sliders,
  Settings2,
  User,
  UserCheck,
  UserX,
  Users2,
  UserPlus2,
  UserMinus2,
  UserCheck2,
  UserX2,
  UserCog,
  UserEdit,
  UserSettings,
  UserShield,
  UserStar,
  UserHeart,
  UserSmile,
  UserFrown,
  UserMeh,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  UserCog,
  UserEdit,
  UserSettings,
  UserShield,
  UserStar,
  UserHeart,
  UserSmile,
  UserFrown,
  UserMeh
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Grid,
      count: 35
    },
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      icon: Brain,
      count: 15
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation',
      icon: Workflow,
      count: 8
    },
    {
      id: 'customer-intelligence',
      name: 'Customer Intelligence',
      icon: Users,
      count: 6
    },
    {
      id: 'financial-trading',
      name: 'Financial Trading',
      icon: TrendingUp,
      count: 4
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      count: 8
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      count: 12
    },
    {
      id: 'edge-iot',
      name: 'Edge & IoT',
      icon: Zap,
      count: 6
    }
  ];

  const allServices = [
    // AI Solutions
    {
      id: 'ai-workflow-automation',
      name: 'AI Enterprise Workflow Automation',
      category: 'workflow-automation',
      description: 'Intelligent business process automation with AI-powered decision making',
      icon: Workflow,
      price: '$299/month',
      features: ['AI-powered decision making', 'Visual workflow designer', 'Smart automation triggers', 'Enterprise security'],
      href: '/services/ai-enterprise-workflow-automation',
      popular: true,
      new: true
    },
    {
      id: 'ai-customer-intelligence',
      name: 'AI Customer Intelligence Platform',
      category: 'customer-intelligence',
      description: 'Transform customer data into actionable insights with AI-powered analytics',
      icon: Users,
      price: '$199/month',
      features: ['AI-powered segmentation', '360° customer view', 'Predictive analytics', 'Personalized marketing'],
      href: '/services/ai-customer-intelligence-platform',
      popular: true,
      new: true
    },
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading Platform',
      category: 'financial-trading',
      description: 'Revolutionary AI-powered trading with advanced algorithms and risk management',
      icon: TrendingUp,
      price: '$99/month',
      features: ['AI market analysis', 'Automated trading strategies', 'Advanced risk management', 'Real-time analytics'],
      href: '/services/ai-financial-trading-platform',
      popular: false,
      new: true
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      category: 'ai-solutions',
      description: 'Intelligent supply chain management with predictive analytics and automation',
      icon: Globe,
      price: '$599/month',
      features: ['Predictive demand forecasting', 'Route optimization', 'Inventory management', 'Real-time tracking'],
      href: '/services/ai-supply-chain-optimization',
      popular: false,
      new: false
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'Advanced threat detection and response using artificial intelligence',
      icon: Shield,
      price: '$399/month',
      features: ['AI threat detection', 'Behavioral analysis', 'Automated response', 'Zero-day protection'],
      href: '/services/ai-cybersecurity-platform',
      popular: false,
      new: false
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Platform',
      category: 'ai-solutions',
      description: 'Revolutionary healthcare solutions powered by artificial intelligence',
      icon: HeartPulse,
      price: '$799/month',
      features: ['Diagnostic assistance', 'Treatment optimization', 'Patient monitoring', 'Drug discovery'],
      href: '/services/ai-healthcare-platform',
      popular: false,
      new: false
    },
    {
      id: 'ai-quantum-hybrid',
      name: 'AI Quantum Hybrid Platform',
      category: 'ai-solutions',
      description: 'Next-generation computing combining AI and quantum technologies',
      icon: Atom,
      price: '$1,999/month',
      features: ['Quantum AI algorithms', 'Hybrid computing', 'Advanced simulations', 'Research tools'],
      href: '/services/ai-quantum-hybrid-platform',
      popular: false,
      new: false
    },
    // Existing services
    {
      id: 'cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'cybersecurity',
      description: 'Comprehensive security solution with AI-powered threat detection',
      icon: ShieldCheck,
      price: '$299/month',
      features: ['Threat intelligence', 'Incident response', 'Compliance management', 'Security analytics'],
      href: '/services/ai-cybersecurity-suite',
      popular: false,
      new: false
    },
    {
      id: 'cloud-devops-platform',
      name: 'Cloud DevOps Platform',
      category: 'cloud-devops',
      description: 'Enterprise-grade cloud infrastructure and DevOps automation',
      icon: Cloud,
      price: '$199/month',
      features: ['Infrastructure as code', 'CI/CD pipelines', 'Monitoring & alerting', 'Auto-scaling'],
      href: '/services/cloud-devops',
      popular: false,
      new: false
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Platform',
      category: 'edge-iot',
      description: 'Ultra-low latency edge computing for real-time applications',
      icon: Zap,
      price: '$399/month',
      features: ['Edge AI processing', 'Real-time analytics', 'IoT integration', 'Global distribution'],
      href: '/services/edge-computing-platform',
      popular: false,
      new: false
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Grid;
  };

  const getCategoryName = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Other';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovative Services 2025
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {" "}Innovative Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of cutting-edge technology solutions designed to transform your business. 
              From AI-powered automation to advanced cybersecurity, we have everything you need to stay ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 h-full">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    {service.new && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        New
                      </span>
                    )}
                    {service.popular && (
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                    <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-full">
                      {getCategoryName(service.category)}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-2xl font-bold text-white mb-6">
                    {service.price}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our innovative services are designed to help you stay ahead of the competition and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Need help? Contact our team at{" "}
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;