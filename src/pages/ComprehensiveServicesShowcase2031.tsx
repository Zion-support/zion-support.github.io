<<<<<<< HEAD
import React, { useState, useEffect } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Zap, 
  Shield, 
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  Brain, 
  Shield, 
  Atom, 
  Search, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu,
  Database,
  Lock,
  BarChart3,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Award,
  Target,
  Workflow,
  Zap,
  Eye,
  Code,
  GitFork,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Activity,
  Fingerprint,
  Key,
  Server,
  ShoppingCart,
  Heart,
  Factory,
  BookOpen,
  FileText,
  Calendar,
  Settings,
  Network,
  Cloud,
  Leaf,
  Building,
  Car,
  Home,
  City,
  CheckCircle2,
  ArrowUpRight,
  Play,
  MailIcon,
<<<<<<< HEAD
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
 } from 'lucide-react.ts';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2031  } from '../data/innovativeMicroSaasServices2031';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2031  } from '../data/specializedITInfrastructureServices2031';
import { SPECIALIZED_AI_SERVICES_2031  } from '../data/specializedAIServices2031';

interface ServiceContact {

  mobile: string;
  email: string;
  address: string;
  website: string;

}

const ComprehensiveServicesShowcase2031: React.FC = (): JSX.Element => {;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [priceRange, setPriceRange] = useState<any>([0, 10000]);
  const [innovationLevel, setInnovationLevel] = useState('all');

  // Combine all services
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2031,;
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2031,;
    ...SPECIALIZED_AI_SERVICES_2031;
  ];

  const categories = [
    { id: any'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s  => s.category === 'AI & Automation').length, icon: any'🤖' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s  => s.category === 'AI & Analytics').length, icon: any'📊' },
    { id: 'AI & Development', name: 'AI & Development', count: allServices.filter(s  => s.category === 'AI & Development').length, icon: any'💻' },
    { id: 'AI & Finance', name: 'AI & Finance', count: allServices.filter(s  => s.category === 'AI & Finance').length, icon: any'💰' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: allServices.filter(s  => s.category === 'AI & Logistics').length, icon: any'🚚' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s  => s.category === 'AI & Healthcare').length, icon: any'🏥' },
    { id: 'AI & Cybersecurity', name: 'AI & Cybersecurity', count: allServices.filter(s  => s.category === 'AI & Cybersecurity').length, icon: any'🛡️' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s  => s.category === 'AI & Marketing').length, icon: any'📢' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s  => s.category === 'AI & Research').length, icon: any'🔬' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s  => s.category === 'AI & HR').length, icon: any'👥' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s  => s.category === 'AI & Content').length, icon: any'✍️' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s  => s.category === 'AI & Transportation').length, icon: any'🚗' },
    { id: 'AI & Quantum Computing', name: 'AI & Quantum Computing', count: allServices.filter(s  => s.category === 'AI & Quantum Computing').length, icon: any'⚛️' },
    { id: 'AI & Robotics', name: 'AI & Robotics', count: allServices.filter(s  => s.category === 'AI & Robotics').length, icon: any'🤖' },
    { id: 'AI & Edge', name: 'AI & Edge', count: allServices.filter(s  => s.category === 'AI & Edge').length, icon: any'🌐' },
    { id: 'AI & Vision', name: 'AI & Vision', count: allServices.filter(s  => s.category === 'AI & Vision').length, icon: any'👁️' },
    { id: 'AI & Language', name: 'AI & Language', count: allServices.filter(s  => s.category === 'AI & Language').length, icon: any'🗣️' },
    { id: 'AI Strategy', name: 'AI Strategy', count: allServices.filter(s  => s.category === 'AI Strategy').length, icon: any'🎯' },
    { id: 'AI Governance', name: 'AI Governance', count: allServices.filter(s  => s.category === 'AI Governance').length, icon: any'⚖️' },
    { id: 'AI Talent', name: 'AI Talent', count: allServices.filter(s  => s.category === 'AI Talent').length, icon: any'🎓' },
    { id: 'AI R&D', name: 'AI R&D', count: allServices.filter(s  => s.category === 'AI R&D').length, icon: any'🔬' },
    { id: 'AI Operations', name: 'AI Operations', count: allServices.filter(s  => s.category === 'AI Operations').length, icon: any'⚙️' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s  => s.category === 'Cloud & DevOps').length, icon: any'☁️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s  => s.category === 'Cybersecurity').length, icon: any'🔒' },
    { id: 'Data & Analytics', name: 'Data & Analytics', count: allServices.filter(s  => s.category === 'Data & Analytics').length, icon: any'📈' },;
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s  => s.category === 'Edge Computing').length, icon: any'🌐' },;
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s  => s.category === 'Quantum Computing').length, icon: any'⚛️' },;
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s  => s.category === 'Blockchain').length, icon: any'🔗' },;
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s  => s.category === 'Sustainability').length, icon: any'🌱' },;
    { id: 'Managed Services', name: 'Managed Services', count: allServices.filter(s  => s.category === 'Managed Services').length, icon: any'🔄' },;
    { id: 'Digital Transformation', name: 'Digital Transformation', count: allServices.filter(s  => s.category === 'Digital Transformation').length, icon: '🔄' };
  ];

  const contactInfo: ServiceContact = {
  mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",;
  ;
  ;
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

  const getCategoryIcon = (category: anystring)  => {;
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀';
  };

  const getInnovationColor = (level: anystring)  => {;
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
=======
  User,
  Handshake,
  Briefcase,
  FileText as FileTextIcon,
  Users as UsersIcon,
  Code as CodeIcon,
  HelpCircle,
  DollarSign as DollarSignIcon,
  Users as UsersIcon2,
  Calendar as CalendarIcon,
  Shield as ShieldIcon,
  BookOpen as BookOpenIcon,
  Factory as FactoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Heart as HeartIcon,
  TrendingUp as TrendingUpIcon,
  Building as BuildingIcon,
  Rocket as RocketIcon,
  Atom as AtomIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon2,
  ShoppingCart as ShoppingCartIcon2,
  Users as UsersIcon3,
  BookOpen as BookOpenIcon2,
  FileText as FileTextIcon2,
  Users as UsersIcon4,
  Code as CodeIcon2,
  HelpCircle as HelpCircleIcon2,
  DollarSign as DollarSignIcon2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function ComprehensiveServicesShowcase2031() {
  const featuredServices = [
    {
      id: "ai-quantum-hybrid-platform",
      name: "AI Quantum Hybrid Platform",
      description: "Revolutionary AI-Quantum hybrid computing platform combining quantum computing with artificial intelligence",
      icon: Atom,
      color: "from-purple-500 to-cyan-500",
      price: "$2,999/month",
      features: ["Quantum-Classical Hybrid Processing", "AI-Quantum Algorithm Optimization", "Real-time Quantum Error Correction"],
      href: "/services/ai-quantum-hybrid-platform",
      category: "AI & Quantum Computing",
      featured: true
    },
    {
      id: "ai-autonomous-research-assistant",
      name: "AI Autonomous Research Assistant",
      description: "AI-powered research automation platform that discovers, analyzes, and synthesizes research autonomously",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      price: "$299/month",
      features: ["Autonomous Research Discovery", "Intelligent Literature Review", "Research Paper Generation"],
      href: "/services/ai-autonomous-research-assistant",
      category: "AI & Research",
      featured: true
    },
    {
      id: "ai-cybersecurity-threat-intelligence",
      name: "AI Cybersecurity Threat Intelligence",
      description: "Revolutionary AI-powered cybersecurity platform that detects, analyzes, and responds to cyber threats in real-time",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      price: "$599/month",
      features: ["AI-Powered Threat Detection", "24/7 Threat Monitoring", "Predictive Threat Intelligence"],
      href: "/services/ai-cybersecurity-threat-intelligence",
      category: "AI & Cybersecurity",
      featured: true
    },
    {
      id: "ai-business-intelligence",
      name: "AI Business Intelligence",
      description: "Advanced AI-powered business intelligence and analytics platform for data-driven decision making",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      price: "$799/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Reporting"],
      href: "/services/ai-business-intelligence",
      category: "AI & Analytics",
      featured: true
    },
    {
      id: "ai-financial-analytics",
      name: "AI Financial Analytics",
      description: "Intelligent financial analysis and forecasting platform powered by advanced AI algorithms",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500",
      price: "$999/month",
      features: ["Financial Forecasting", "Risk Assessment", "Portfolio Optimization"],
      href: "/services/ai-financial-analytics",
      category: "AI & Finance",
      featured: true
    },
    {
      id: "ai-marketing-automation",
      name: "AI Marketing Automation",
      description: "Intelligent marketing automation platform that personalizes campaigns and optimizes ROI",
      icon: Target,
      color: "from-pink-500 to-purple-500",
      price: "$699/month",
      features: ["Personalized Campaigns", "ROI Optimization", "Customer Segmentation"],
      href: "/services/ai-marketing-automation",
      category: "AI & Marketing",
      featured: true
    }
  ];

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-cyan-500",
      services: [
        "AI Business Intelligence",
        "AI Financial Analytics",
        "AI Marketing Automation",
        "AI Customer Support",
        "AI Content Creation",
        "AI HR Platform"
      ]
    },
    {
      title: "Quantum Computing",
      icon: Atom,
      color: "from-indigo-500 to-purple-500",
      services: [
        "AI Quantum Hybrid Platform",
        "Quantum Computing Solutions",
        "Quantum Machine Learning",
        "Quantum Cryptography"
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        "AI Cybersecurity Threat Intelligence",
        "Zero Trust Network Access",
        "Security Headers & CSP",
        "DSR Privacy Portal"
      ]
    },
    {
      title: "Research & Analytics",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      services: [
        "AI Autonomous Research Assistant",
        "Data Analytics Platform",
        "Business Intelligence",
        "Predictive Analytics"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      services: [
        "Cloud DevOps",
        "IT Infrastructure",
        "Digital Twin Platform",
        "IoT Edge Computing"
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      services: [
        "Micro CRM",
        "Helpdesk Platform",
        "Website Analytics",
        "Affiliate Tracking"
      ]
    }
  ];

  const benefits = [
    "Cutting-edge AI technology with proven results",
    "Transparent pricing with no hidden fees",
    "24/7 support and dedicated account management",
    "Custom integrations and white-label solutions",
    "Comprehensive compliance and security standards",
    "Scalable solutions that grow with your business"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "monthly",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic AI features",
        "Standard support",
        "Core integrations",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: "$799",
      period: "monthly",
      description: "Advanced features for growing organizations",
      features: [
        "Advanced AI capabilities",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "monthly",
      description: "Full-scale solutions for large enterprises",
      features: [
        "Custom AI development",
        "24/7 dedicated support",
        "White-label solutions",
        "On-premise deployment",
        "Custom consulting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2031 - Zion Tech Group"
        description="Discover our revolutionary AI-powered micro SAAS services and cutting-edge technology solutions for 2031 and beyond."
        keywords="AI services, micro SAAS, quantum computing, cybersecurity, research automation, Zion Tech Group 2031"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
<<<<<<< HEAD
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
=======
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Revolutionary Technology Solutions 2031
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase 2031
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary AI-powered micro SAAS services, 
              quantum computing solutions, and cutting-edge cybersecurity platforms. 
              Transform your business with intelligent automation and unprecedented capabilities.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all"
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/20 font-semibold rounded-lg transition-colors"
            >
              View Pricing
            </a>
          </motion.div>
<<<<<<< HEAD
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
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
        </div>
      </section>

<<<<<<< HEAD
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
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category  => (
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
              ? 'grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {sortedServices.map((service, index)  => (
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
=======
      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship AI-powered services that are transforming industries and 
              delivering unprecedented value to organizations worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.featured && (
                    <div className="inline-flex items-center px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 text-sm ml-1">starting</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={service.href}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
<<<<<<< HEAD
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
=======
              </motion.div>
            ))}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
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
                      {selectedService.benefits.map((benefit: anystring, idx: number)  => (
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
                      {selectedService.useCases.map((useCase: anystring, idx: number)  => (
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
                      {selectedService.targetAudience.map((audience: anystring, idx: number)  => (
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
                            {selectedService.technicalSpecs.technology.map((tech: anystring, idx: number)  => (
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
                </a>;
              </div>;
            </motion.div>;
          </motion.div>;
        )};
      </AnimatePresence>;
    </div>;
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete range of technology solutions organized by category, 
              from AI and machine learning to cybersecurity and infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your organization with our transparent, 
              enterprise-grade pricing structure designed to scale with your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  index === 1 ? 'border-purple-500/50 bg-purple-500/10' : 'border-white/10'
                } hover:border-purple-500/50 transition-all`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented technology capabilities and business transformation 
              with our cutting-edge AI and technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-lg text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
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
              Join the technology revolution and experience unprecedented capabilities 
              with our comprehensive suite of AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/20 font-semibold rounded-lg transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
              <p>Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  );
}