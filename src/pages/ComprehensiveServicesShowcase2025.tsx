import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Bot,
  Workflow,
  Automation,
  Robot,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  ShieldCheck,
  Eye,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  Handshake,
  Lightbulb,
  Users,
  Globe,
  Code,
  HardDrive,
  FileText,
  HelpCircle,
  BarChart3,
  Building2,
  GraduationCap,
  Briefcase,
  Heart,
  DollarSign,
  Target,
  Rocket,
  Clock,
  Gauge,
  BarChart4,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  Calendar,
  AlertTriangle,
  Bell,
  Mail,
  Phone,
  Video,
  Camera,
  Microphone,
  Headphones,
  Printer,
  Scanner,
  Fax,
  Copier,
  Projector,
  Whiteboard,
  Flipchart,
  Easel,
  StickyNote,
  Paperclip,
  Folder,
  File,
  Archive,
  Trash2,
  Download,
  Upload,
  Share2,
  Link as LinkIcon,
  ExternalLink,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  Save,
  Edit,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  Sidebar,
  Menu,
  MoreHorizontal,
  MoreVertical,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Move,
  RotateCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  RefreshCw,
  RefreshCw2,
  RefreshCw3,
  RefreshCw4,
  RefreshCw5,
  RefreshCw6,
  RefreshCw7,
  RefreshCw8,
  RefreshCw9,
  RefreshCw10,
  RefreshCw11,
  RefreshCw12,
  RefreshCw13,
  RefreshCw14,
  RefreshCw15,
  RefreshCw16,
  RefreshCw17,
  RefreshCw18,
  RefreshCw19,
  RefreshCw20,
  RefreshCw21,
  RefreshCw22,
  RefreshCw23,
  RefreshCw24,
  RefreshCw25,
  RefreshCw26,
  RefreshCw27,
  RefreshCw28,
  RefreshCw29,
  RefreshCw30,
  RefreshCw31,
  RefreshCw32,
  RefreshCw33,
  RefreshCw34,
  RefreshCw35,
  RefreshCw36,
  RefreshCw37,
  RefreshCw38,
  RefreshCw39,
  RefreshCw40,
  RefreshCw41,
  RefreshCw42,
  RefreshCw43,
  RefreshCw44,
  RefreshCw45,
  RefreshCw46,
  RefreshCw47,
  RefreshCw48,
  RefreshCw49,
  RefreshCw50,
  RefreshCw51,
  RefreshCw52,
  RefreshCw53,
  RefreshCw54,
  RefreshCw55,
  RefreshCw56,
  RefreshCw57,
  RefreshCw58,
  RefreshCw59,
  RefreshCw60,
  RefreshCw61,
  RefreshCw62,
  RefreshCw63,
  RefreshCw64,
  RefreshCw65,
  RefreshCw66,
  RefreshCw67,
  RefreshCw68,
  RefreshCw69,
  RefreshCw70,
  RefreshCw71,
  RefreshCw72,
  RefreshCw73,
  RefreshCw74,
  RefreshCw75,
  RefreshCw76,
  RefreshCw77,
  RefreshCw78,
  RefreshCw79,
  RefreshCw80,
  RefreshCw81,
  RefreshCw82,
  RefreshCw83,
  RefreshCw84,
  RefreshCw85,
  RefreshCw86,
  RefreshCw87,
  RefreshCw88,
  RefreshCw89,
  RefreshCw90,
  RefreshCw91,
  RefreshCw92,
  RefreshCw93,
  RefreshCw94,
  RefreshCw95,
  RefreshCw96,
  RefreshCw97,
  RefreshCw98,
  RefreshCw99,
  RefreshCw100,
  ShoppingCart,
  Truck,
  CreditCard,
  Wallet,
  PiggyBank,
  Banknote,
  Receipt,
  Calculator,
  Percent,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10,
  Atom,
  Cloud,
  ShoppingCart as ShoppingCartIcon
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { id: 'it', name: 'IT Services', icon: Cpu, color: 'from-blue-600 to-cyan-600' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Bot, color: 'from-green-600 to-emerald-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-orange-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-600 to-purple-600' },
    { id: 'automation', name: 'Automation', icon: Workflow, color: 'from-yellow-600 to-orange-600' }
  ];

  const services = [
    // AI Services
    {
      id: 'ai-quantum-neural-network',
      name: 'AI Quantum Neural Network Platform',
      category: 'ai',
      description: 'Revolutionary platform combining quantum computing with neural networks for unprecedented processing power',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      features: ['Quantum advantage', 'Neural optimization', 'Real-time processing'],
      useCases: ['Financial trading', 'Drug discovery', 'Climate modeling'],
      pricing: 'Starting at $2,500/month',
      link: '/services/ai-quantum-neural-network-platform',
      highlight: true
    },
    {
      id: 'ai-autonomous-operations',
      name: 'AI Autonomous Business Operations Platform',
      category: 'ai',
      description: 'Transform business with autonomous operations that work 24/7 and make intelligent decisions',
      icon: Bot,
      color: 'from-green-600 to-emerald-600',
      features: ['Process automation', 'Autonomous decisions', 'Predictive operations'],
      useCases: ['Manufacturing', 'Supply chain', 'Customer service'],
      pricing: 'Starting at $1,500/month',
      link: '/services/ai-autonomous-business-operations-platform',
      highlight: true
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'Advanced AI-powered threat detection and response system for comprehensive security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation'],
      useCases: ['Enterprise security', 'Compliance', 'Incident response'],
      pricing: 'Starting at $1,200/month',
      link: '/services/ai-cybersecurity-platform',
      highlight: false
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Analytics Platform',
      category: 'ai',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      color: 'from-green-600 to-emerald-600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization'],
      useCases: ['Hospitals', 'Clinics', 'Research institutions'],
      pricing: 'Starting at $2,000/month',
      link: '/services/ai-healthcare-analytics-platform',
      highlight: false
    },
    // IT Services
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Solutions',
      category: 'it',
      description: 'Comprehensive cloud infrastructure and DevOps automation for modern businesses',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      features: ['Cloud migration', 'DevOps automation', 'Infrastructure as code'],
      useCases: ['Startups', 'Enterprises', 'Digital transformation'],
      pricing: 'Starting at $800/month',
      link: '/services/cloud-devops',
      highlight: false
    },
    {
      id: 'it-onsite-services',
      name: 'IT Onsite Support Services',
      category: 'it',
      description: 'Professional IT support and infrastructure management for businesses of all sizes',
      icon: Users,
      color: 'from-blue-600 to-cyan-600',
      features: ['Infrastructure management', 'Technical support', 'System maintenance'],
      useCases: ['Small businesses', 'Medium enterprises', 'Large corporations'],
      pricing: 'Starting at $500/month',
      link: '/services/it-onsite-services',
      highlight: false
    },
    // Micro SAAS
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      category: 'micro-saas',
      description: 'Intelligent sales assistant for lead generation and conversion optimization',
      icon: MessageCircle,
      color: 'from-green-600 to-emerald-600',
      features: ['Lead scoring', 'Sales automation', 'Performance analytics'],
      useCases: ['Sales teams', 'Marketing agencies', 'Startups'],
      pricing: 'Starting at $99/month',
      link: '/services/ai-sales-copilot',
      highlight: false
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      category: 'micro-saas',
      description: 'Automated compliance monitoring and reporting for regulated industries',
      icon: ShieldCheck,
      color: 'from-green-600 to-emerald-600',
      features: ['Compliance monitoring', 'Automated reporting', 'Risk assessment'],
      useCases: ['Financial services', 'Healthcare', 'Manufacturing'],
      pricing: 'Starting at $150/month',
      link: '/services/ai-compliance-assistant',
      highlight: false
    },
    // Quantum Computing
    {
      id: 'quantum-ai-trading',
      name: 'Quantum AI Trading Platform',
      category: 'quantum',
      description: 'Next-generation quantum computing for financial trading and risk optimization',
      icon: Coins,
      color: 'from-indigo-600 to-purple-600',
      features: ['Quantum algorithms', 'Risk optimization', 'Real-time trading'],
      useCases: ['Hedge funds', 'Investment banks', 'Trading firms'],
      pricing: 'Starting at $5,000/month',
      link: '/services/quantum-ai-trading-platform',
      highlight: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const highlightedServices = services.filter(service => service.highlight);

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI Development':
      case 'AI Content':
      case 'AI HR':
        return <Brain className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Chip className="w-5 h-5" />;
      case 'Blockchain':
        return <Lock className="w-5 h-5" />;
      case 'Healthcare Technology':
        return <Heart className="w-5 h-5" />;
      case 'Edge Computing':
        return <Network className="w-5 h-5" />;
      case 'Metaverse':
        return <Globe className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Sustainability':
        return <Award className="w-5 h-5" />;
      default:
        return <Rocket className="w-5 h-5" />;
    }
  };

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const getPriceTier = (price: number) => {
    if (price <= 2000) return { tier: 'Bronze', icon: Bronze, color: 'text-amber-600' };
    if (price <= 3500) return { tier: 'Silver', icon: Silver, color: 'text-gray-400' };
    if (price <= 5000) return { tier: 'Gold', icon: Gold, color: 'text-yellow-500' };
    if (price <= 7000) return { tier: 'Platinum', icon: Platinum, color: 'text-cyan-400' };
    return { tier: 'Diamond', icon: Diamond, color: 'text-purple-500' };
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive range of AI, IT, Micro SAAS, and specialized services. Transform your business with cutting-edge technology solutions."
        keywords="AI services, IT services, micro SAAS, cybersecurity, quantum computing, automation, Zion Tech Group services"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our complete range of innovative AI, IT, and Micro SAAS solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                View Pricing Guide
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-12 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light border border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Highlighted Services */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most innovative and cutting-edge solutions that are transforming industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {highlightedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative bg-zion-blue-light border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-zion-slate-light mb-3">{service.description}</p>
                    <div className="text-zion-cyan font-semibold">{service.pricing}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-blue text-zion-slate-light text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    to={service.link}
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <div className="text-xl font-bold text-zion-cyan mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 8 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to meet every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-light border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-sm text-zion-cyan capitalize">{service.category.replace('-', ' ')}</p>
                  </div>
                </div>

                <p className="text-zion-slate-light mb-4 text-sm">{service.description}</p>

                <div className="mb-4">
                  <div className="text-zion-cyan font-semibold text-sm">{service.pricing}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full">
                        {feature}
                      </li>
                    ))}
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

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-white">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-blue text-zion-slate-light text-xs rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    {service.innovationLevel}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-cyan-400">{service.aiScore}%</div>
                    <div className="text-xs text-gray-400">AI Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-purple-400">{service.marketSize}</div>
                    <div className="text-xs text-gray-400">Market Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-400">{service.currency}{service.price}</div>
                    <div className="text-xs text-gray-400">Price</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    to={service.link}
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 text-sm"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters</p>
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">
                No services found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Clear filters and show all services
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Pricing Comparison Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Tiers Comparison
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the service tier that best fits your business needs and budget requirements.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left text-white font-semibold p-4">Feature</th>
                  <th className="text-center text-white font-semibold p-4">Starter</th>
                  <th className="text-center text-white font-semibold p-4">Professional</th>
                  <th className="text-center text-white font-semibold p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row, index) => (
                  <tr key={index} className="border-b border-slate-600/30">
                    <td className="text-gray-300 p-4">{row.feature}</td>
                    <td className="text-center text-gray-400 p-4">{row.starter}</td>
                    <td className="text-center text-gray-400 p-4">{row.professional}</td>
                    <td className="text-center text-gray-400 p-4">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Choose from our comprehensive range of services and start your digital transformation journey today
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their operations with our comprehensive technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
