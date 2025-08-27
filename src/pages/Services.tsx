import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Users,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Activity,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Globe2,
  Layers,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Hash,
  Headphones,
  Home,
  Image,
  Inbox,
  Info,
  Key,
  Layout,
  LifeBuoy,
  Link2,
  List,
  Loader,
  Loader2,
  Lock2,
  Mail,
  MapPin,
  Maximize,
  Maximize2,
  Menu,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Monitor2,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCw,
  RefreshCcw,
  Repeat,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search,
  Send,
  Server2,
  Settings2,
  Share,
  Share2,
  Shield2,
  ShieldOff,
  ShoppingBag,
  ShoppingCart2,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slash,
  Sliders,
  Smartphone2,
  Smile,
  Speaker,
  Square,
  Star2,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Tablet,
  Tag,
  Target2,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash,
  Trash2,
  TrendingDown,
  TrendingUp2,
  Truck,
  Tv,
  Type,
  Umbrella,
  Underline,
  Unlock,
  Upload,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users2,
  Video2,
  VideoOff,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  Wifi2,
  WifiOff,
  Wind,
  X,
  XCircle,
  XSquare,
  Youtube,
  Zap2,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Zap, count: 0 },
    { id: 'micro-saas', name: 'Micro SAAS Solutions', icon: Rocket, count: 0 },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, count: 0 },
    { id: 'consulting', name: 'Consulting', icon: Users, count: 0 }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Research',
      category: 'ai-ml',
      description: 'Breakthrough research in artificial consciousness and self-aware AI systems',
      icon: Brain,
      features: ['Neural architecture design', 'Consciousness modeling', 'Ethical AI frameworks', 'Research collaboration'],
      pricing: 'Custom Research Project',
      estimatedCost: '$500K - $2M',
      timeline: '12-24 months',
      complexity: 'Extreme',
      marketDemand: 'Very High',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Integration',
      category: 'ai-ml',
      description: 'Integration of quantum computing with artificial intelligence for unprecedented performance',
      icon: Atom,
      features: ['Quantum algorithm optimization', 'AI model acceleration', 'Hybrid computing solutions', 'Performance benchmarking'],
      pricing: 'Enterprise Solution',
      estimatedCost: '$200K - $800K',
      timeline: '6-18 months',
      complexity: 'Very High',
      marketDemand: 'High',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Business Systems',
      category: 'ai-ml',
      description: 'Self-managing business processes and decision-making systems',
      icon: BrainCircuit,
      features: ['Process automation', 'Decision intelligence', 'Self-optimization', 'Continuous learning'],
      pricing: 'Platform + Implementation',
      estimatedCost: '$150K - $500K',
      timeline: '4-12 months',
      complexity: 'High',
      marketDemand: 'High',
      color: 'from-green-500 to-emerald-500'
    },

    // Cloud Infrastructure Services
    {
      id: 'multi-cloud-strategy',
      title: 'Multi-Cloud Strategy & Implementation',
      category: 'cloud',
      description: 'Comprehensive multi-cloud architecture and management solutions',
      icon: Cloud,
      features: ['Cloud architecture design', 'Multi-cloud orchestration', 'Cost optimization', 'Security compliance'],
      pricing: 'Strategy + Implementation',
      estimatedCost: '$100K - $400K',
      timeline: '3-9 months',
      complexity: 'High',
      marketDemand: 'High',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'serverless-architecture',
      title: 'Serverless Architecture Design',
      category: 'cloud',
      description: 'Modern serverless solutions for scalable and cost-effective applications',
      icon: Server,
      features: ['Serverless design patterns', 'Auto-scaling solutions', 'Cost optimization', 'Performance monitoring'],
      pricing: 'Architecture + Development',
      estimatedCost: '$80K - $300K',
      timeline: '2-8 months',
      complexity: 'Medium-High',
      marketDemand: 'High',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation & CI/CD',
      category: 'cloud',
      description: 'Complete DevOps pipeline automation and continuous integration/deployment',
      icon: GitBranch,
      features: ['Pipeline automation', 'Infrastructure as code', 'Monitoring & alerting', 'Security integration'],
      pricing: 'Platform + Training',
      estimatedCost: '$60K - $200K',
      timeline: '2-6 months',
      complexity: 'Medium',
      marketDemand: 'Very High',
      color: 'from-orange-500 to-red-500'
    },

    // Cybersecurity Services
    {
      id: 'zero-trust-architecture',
      title: 'Zero Trust Security Architecture',
      category: 'cybersecurity',
      description: 'Comprehensive zero trust security implementation for modern enterprises',
      icon: ShieldCheck,
      features: ['Identity verification', 'Access control', 'Network segmentation', 'Threat detection'],
      pricing: 'Architecture + Implementation',
      estimatedCost: '$120K - $450K',
      timeline: '4-12 months',
      complexity: 'High',
      marketDemand: 'Very High',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'threat-intelligence',
      title: 'Advanced Threat Intelligence',
      category: 'cybersecurity',
      description: 'Proactive threat detection and intelligence gathering systems',
      icon: Eye,
      features: ['Threat monitoring', 'Intelligence gathering', 'Incident response', 'Security training'],
      pricing: 'Platform + Services',
      estimatedCost: '$90K - $350K',
      timeline: '3-9 months',
      complexity: 'High',
      marketDemand: 'High',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'compliance-frameworks',
      title: 'Compliance & Regulatory Frameworks',
      category: 'cybersecurity',
      description: 'Comprehensive compliance solutions for various industry standards',
      icon: CheckCircle,
      features: ['Framework implementation', 'Audit preparation', 'Policy development', 'Training programs'],
      pricing: 'Framework + Implementation',
      estimatedCost: '$70K - $250K',
      timeline: '2-8 months',
      complexity: 'Medium',
      marketDemand: 'High',
      color: 'from-green-500 to-teal-500'
    },

    // Digital Transformation Services
    {
      id: 'process-automation',
      title: 'Business Process Automation',
      category: 'digital-transformation',
      description: 'End-to-end business process automation and optimization',
      icon: Zap,
      features: ['Process mapping', 'Automation design', 'Integration services', 'Change management'],
      pricing: 'Process + Implementation',
      estimatedCost: '$80K - $300K',
      timeline: '3-10 months',
      complexity: 'Medium-High',
      marketDemand: 'High',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'legacy-modernization',
      title: 'Legacy System Modernization',
      category: 'digital-transformation',
      description: 'Modernization of legacy systems and infrastructure',
      icon: RefreshCw,
      features: ['System assessment', 'Modernization strategy', 'Migration planning', 'Implementation support'],
      pricing: 'Assessment + Modernization',
      estimatedCost: '$150K - $600K',
      timeline: '6-18 months',
      complexity: 'Very High',
      marketDemand: 'High',
      color: 'from-gray-500 to-blue-500'
    },
    {
      id: 'data-strategy',
      title: 'Data Strategy & Governance',
      category: 'digital-transformation',
      description: 'Comprehensive data strategy and governance frameworks',
      icon: Database,
      features: ['Data strategy', 'Governance frameworks', 'Quality management', 'Analytics implementation'],
      pricing: 'Strategy + Implementation',
      estimatedCost: '$100K - $400K',
      timeline: '4-12 months',
      complexity: 'High',
      marketDemand: 'Very High',
      color: 'from-blue-500 to-cyan-500'
    },

    // Micro SAAS Solutions
    {
      id: 'project-management-saas',
      title: 'Project Management Platform',
      category: 'micro-saas',
      description: 'Comprehensive project management and team collaboration platform',
      icon: Briefcase,
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Reporting analytics'],
      pricing: 'SaaS Platform',
      estimatedCost: '$50K - $150K',
      timeline: '3-8 months',
      complexity: 'Medium',
      marketDemand: 'Very High',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'crm-saas',
      title: 'Customer Relationship Management',
      category: 'micro-saas',
      description: 'Modern CRM solution for sales and customer management',
      icon: Users,
      features: ['Lead management', 'Sales pipeline', 'Customer analytics', 'Integration APIs'],
      pricing: 'SaaS Platform',
      estimatedCost: '$60K - $180K',
      timeline: '4-10 months',
      complexity: 'Medium',
      marketDemand: 'Very High',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'analytics-dashboard',
      title: 'Business Analytics Dashboard',
      category: 'micro-saas',
      description: 'Real-time business intelligence and analytics platform',
      icon: BarChart3,
      features: ['Data visualization', 'Real-time analytics', 'Custom dashboards', 'Export capabilities'],
      pricing: 'SaaS Platform',
      estimatedCost: '$40K - $120K',
      timeline: '2-6 months',
      complexity: 'Medium',
      marketDemand: 'High',
      color: 'from-orange-500 to-red-500'
    },

    // IT Infrastructure Services
    {
      id: 'network-architecture',
      title: 'Network Architecture & Design',
      category: 'it-infrastructure',
      description: 'Enterprise network architecture and infrastructure design',
      icon: Network,
      features: ['Network design', 'Security implementation', 'Performance optimization', 'Monitoring setup'],
      pricing: 'Design + Implementation',
      estimatedCost: '$80K - $300K',
      timeline: '3-10 months',
      complexity: 'High',
      marketDemand: 'High',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'data-center-optimization',
      title: 'Data Center Optimization',
      category: 'it-infrastructure',
      description: 'Data center design, optimization, and management solutions',
      icon: Server2,
      features: ['Infrastructure design', 'Energy optimization', 'Capacity planning', 'Management systems'],
      pricing: 'Design + Implementation',
      estimatedCost: '$200K - $800K',
      timeline: '6-18 months',
      complexity: 'Very High',
      marketDemand: 'Medium',
      color: 'from-gray-500 to-blue-500'
    },
    {
      id: 'disaster-recovery',
      title: 'Disaster Recovery & Business Continuity',
      category: 'it-infrastructure',
      description: 'Comprehensive disaster recovery and business continuity planning',
      icon: Shield2,
      features: ['Recovery planning', 'Backup systems', 'Testing procedures', 'Training programs'],
      pricing: 'Planning + Implementation',
      estimatedCost: '$100K - $400K',
      timeline: '4-12 months',
      complexity: 'High',
      marketDemand: 'High',
      color: 'from-red-500 to-orange-500'
    },

    // Consulting Services
    {
      id: 'technology-strategy',
      title: 'Technology Strategy Consulting',
      category: 'consulting',
      description: 'Strategic technology planning and roadmap development',
      icon: Target,
      features: ['Technology assessment', 'Strategic planning', 'Roadmap development', 'Implementation guidance'],
      pricing: 'Consulting Engagement',
      estimatedCost: '$50K - $200K',
      timeline: '2-6 months',
      complexity: 'Medium',
      marketDemand: 'High',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'digital-transformation-consulting',
      title: 'Digital Transformation Consulting',
      category: 'consulting',
      description: 'End-to-end digital transformation strategy and implementation',
      icon: Lightbulb,
      features: ['Transformation strategy', 'Change management', 'Implementation support', 'Success measurement'],
      pricing: 'Consulting Engagement',
      estimatedCost: '$80K - $300K',
      timeline: '3-12 months',
      complexity: 'High',
      marketDemand: 'Very High',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization Consulting',
      category: 'consulting',
      description: 'System and application performance optimization services',
      icon: TrendingUp,
      features: ['Performance analysis', 'Optimization strategies', 'Implementation support', 'Monitoring setup'],
      pricing: 'Consulting Engagement',
      estimatedCost: '$40K - $150K',
      timeline: '2-6 months',
      complexity: 'Medium',
      marketDemand: 'High',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Update category counts
  serviceCategories.forEach(category => {
    category.count = services.filter(service => 
      selectedCategory === 'all' || service.category === category.id
    ).length;
  });

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Medium-High': return 'text-orange-400';
      case 'High': return 'text-red-400';
      case 'Very High': return 'text-red-500';
      case 'Extreme': return 'text-purple-500';
      default: return 'text-gray-400';
    }
  };

  const getMarketDemandColor = (demand) => {
    switch (demand) {
      case 'Low': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-green-400';
      case 'Very High': return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Our Services"
        description="Comprehensive technology services including AI, Cloud Infrastructure, Cybersecurity, Digital Transformation, and Micro SAAS solutions. Expert consulting and implementation services."
        keywords="AI services, cloud infrastructure, cybersecurity, digital transformation, micro saas, IT consulting, technology services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Zion Tech Group Services",
          "description": "Comprehensive technology services and solutions",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "serviceType": "Technology Services",
          "areaServed": "Worldwide"
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Revolutionary Technology Solutions
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform businesses and drive innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-slate/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white border-zion-cyan'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light border-zion-slate/20 hover:border-zion-cyan/30'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-zion-slate/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl border border-zion-slate/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-zion-slate/20">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                </div>

                {/* Service Features */}
                <div className="p-6 border-b border-zion-slate/20">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-xs text-zion-slate-light uppercase tracking-wide">Pricing Model</span>
                      <p className="text-sm font-medium text-white">{service.pricing}</p>
                    </div>
                    <div>
                      <span className="text-xs text-zion-slate-light uppercase tracking-wide">Estimated Cost</span>
                      <p className="text-sm font-medium text-white">{service.estimatedCost}</p>
                    </div>
                    <div>
                      <span className="text-xs text-zion-slate-light uppercase tracking-wide">Timeline</span>
                      <p className="text-sm font-medium text-white">{service.timeline}</p>
                    </div>
                    <div>
                      <span className="text-xs text-zion-slate-light uppercase tracking-wide">Complexity</span>
                      <p className={`text-sm font-medium ${getComplexityColor(service.complexity)}`}>
                        {service.complexity}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs text-zion-slate-light uppercase tracking-wide">Market Demand</span>
                    <p className={`text-sm font-medium ${getMarketDemandColor(service.marketDemand)}`}>
                      {service.marketDemand}
                    </p>
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-zion-cyan/25">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let our expert team help you implement the right technology solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
