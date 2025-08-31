import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Cpu,
  Network,
  Code,
  Search,
  MessageSquare,
  FileText,
  TrendingUp,
  Target,
  Rocket,
  Atom,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Eye,
  Lock,
  Globe,
  Database,
  Palette,
  Camera,
  Video,
  Music,
  BookOpen,
  Calendar,
  ExternalLink,
  Sparkles,
  Gauge,
  Workflow,
  Heart,
  Truck,
  Building,
  Server,
  Smartphone,
  Clock,
  Satellite,
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
  Timer,
  Stopwatch,
  Warehouse,
  Factory,
  Package,
  Navigation,
  Route,
  Compass,
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
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train
} from 'lucide-react';

const InnovativeAIServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain, count: 0 },
    { id: 'quantum', name: 'Quantum AI', icon: Atom, count: 0 },
    { id: 'cybersecurity', name: 'AI Security', icon: Shield, count: 0 },
    { id: 'healthcare', name: 'AI Healthcare', icon: Heart, count: 0 },
    { id: 'business', name: 'Business AI', icon: Building, count: 0 },
    { id: 'automation', name: 'AI Automation', icon: Zap, count: 0 },
    { id: 'analytics', name: 'AI Analytics', icon: BarChart3, count: 0 }
  ];

  const innovativeAIServices = [
    // Quantum AI Services
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI-Quantum Hybrid Platform',
      category: 'quantum',
      description: 'Revolutionary platform combining artificial intelligence with quantum computing for unprecedented computational power and problem-solving capabilities.',
      features: ['Quantum Neural Networks', 'Quantum Algorithm Optimization', 'Real-time Quantum Processing', 'Quantum-Safe Security', 'Quantum Analytics', 'Hybrid Computing'],
      pricing: { monthly: 999, yearly: 9999, enterprise: 'Custom' },
      icon: Atom,
      link: '/services/ai-quantum-hybrid-platform',
      popular: true,
      highlights: ['1000x faster computations', 'Quantum-safe security', 'Hybrid quantum-classical AI'],
      rating: 4.9,
      reviews: 156,
      badge: 'Revolutionary',
      color: 'from-purple-600 to-pink-700'
    },
    {
      id: 'ai-quantum-neural-network-platform',
      name: 'AI Quantum Neural Network Platform',
      category: 'quantum',
      description: 'Next-generation neural networks powered by quantum computing for advanced pattern recognition and optimization.',
      features: ['Quantum Neural Networks', 'Advanced ML', 'Pattern Recognition', 'Optimization', 'Quantum Learning', 'Neural Evolution'],
      pricing: { monthly: 1299, yearly: 12999, enterprise: 'Custom' },
      icon: Brain,
      link: '/services/ai-quantum-neural-network-platform',
      popular: false,
      highlights: ['Quantum neural evolution', 'Advanced pattern recognition', 'Quantum learning algorithms'],
      rating: 4.8,
      reviews: 89,
      badge: 'Future Tech',
      color: 'from-blue-600 to-cyan-700'
    },

    // AI Cybersecurity Services
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI-Powered Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'Next-generation cybersecurity powered by artificial intelligence, providing proactive threat detection and automated response.',
      features: ['AI Threat Detection', 'Zero-Day Protection', 'Network Security', 'Data Encryption', 'Continuous Monitoring', 'Automated Response'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-platform',
      popular: true,
      highlights: ['99.9% threat blocking', '< 1 second response time', 'AI-powered automation'],
      rating: 4.9,
      reviews: 289,
      badge: 'Enterprise',
      color: 'from-red-600 to-orange-700'
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'cybersecurity',
      description: 'Comprehensive cybersecurity with AI-powered threat detection and response automation.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance', 'Behavioral Analysis', 'Risk Scoring'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-suite',
      popular: false,
      highlights: ['AI behavioral analysis', 'Automated threat response', 'Compliance automation'],
      rating: 4.7,
      reviews: 134,
      badge: 'Security',
      color: 'from-orange-600 to-red-700'
    },
    {
      id: 'ai-cybersecurity-threat-detection',
      name: 'AI Cybersecurity Threat Detection',
      category: 'cybersecurity',
      description: 'Advanced threat detection using artificial intelligence and machine learning algorithms.',
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Threat Intelligence', 'Response Automation', 'Real-time Monitoring', 'Predictive Analytics'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-threat-detection',
      popular: false,
      highlights: ['Behavioral anomaly detection', 'Predictive threat analysis', 'Automated response'],
      rating: 4.6,
      reviews: 98,
      badge: 'AI Security',
      color: 'from-indigo-600 to-purple-700'
    },

    // AI Healthcare Services
    {
      id: 'ai-healthcare-platform',
      name: 'AI-Powered Healthcare Platform',
      category: 'healthcare',
      description: 'Revolutionary healthcare technology combining AI with medical expertise for superior patient care and diagnostics.',
      features: ['AI Diagnostic Assistant', 'Predictive Healthcare', 'Virtual Health Monitoring', 'HIPAA Compliant Security', 'Healthcare Analytics', 'Automated Workflows'],
      pricing: { monthly: 499, yearly: 4999, enterprise: 'Custom' },
      icon: Heart,
      link: '/services/ai-healthcare-platform',
      popular: true,
      highlights: ['95% diagnostic accuracy', '25% cost reduction', 'HIPAA compliance'],
      rating: 4.8,
      reviews: 234,
      badge: 'Healthcare',
      color: 'from-green-600 to-blue-700'
    },
    {
      id: 'ai-healthcare-analytics-platform',
      name: 'AI Healthcare Analytics Platform',
      category: 'healthcare',
      description: 'Healthcare data analytics and patient outcome prediction using advanced AI algorithms.',
      features: ['Patient Analytics', 'Treatment Optimization', 'Risk Assessment', 'Clinical Decision Support', 'Population Health', 'Predictive Modeling'],
      pricing: { monthly: 499, yearly: 4999, enterprise: 'Custom' },
      icon: Brain,
      link: '/services/ai-healthcare-analytics-platform',
      popular: false,
      highlights: ['Patient outcome prediction', 'Treatment optimization', 'Population health analytics'],
      rating: 4.7,
      reviews: 167,
      badge: 'Analytics',
      color: 'from-teal-600 to-green-700'
    },

    // Business AI Services
    {
      id: 'ai-autonomous-business-operations-platform',
      name: 'AI Autonomous Business Operations Platform',
      category: 'business',
      description: 'Fully automated business processes with intelligent decision making and resource optimization.',
      features: ['Process Automation', 'Decision Intelligence', 'Resource Optimization', 'Performance Monitoring', 'Predictive Analytics', 'Autonomous Operations'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Zap,
      link: '/services/ai-autonomous-business-operations-platform',
      popular: true,
      highlights: ['100% process automation', 'Intelligent decision making', 'Resource optimization'],
      rating: 4.8,
      reviews: 198,
      badge: 'Autonomous',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'ai-customer-experience-analytics-platform',
      name: 'AI Customer Experience Analytics Platform',
      category: 'business',
      description: 'Comprehensive customer journey analysis and optimization using AI-powered insights.',
      features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Behavioral Insights', 'Personalization', 'Predictive Analytics', 'ROI Optimization'],
      pricing: { monthly: 349, yearly: 3499, enterprise: 'Custom' },
      icon: Users,
      link: '/services/ai-customer-experience-analytics-platform',
      popular: false,
      highlights: ['Customer journey optimization', 'Sentiment analysis', 'Personalization engine'],
      rating: 4.6,
      reviews: 145,
      badge: 'CX Analytics',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      category: 'business',
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.',
      features: ['Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Reports', 'AI Insights', 'Trend Analysis'],
      pricing: { monthly: 89, yearly: 899, enterprise: 'Custom' },
      icon: BarChart3,
      link: '/services/ai-business-intelligence',
      popular: false,
      highlights: ['AI-powered insights', 'Predictive analytics', 'Real-time intelligence'],
      rating: 4.5,
      reviews: 123,
      badge: 'BI Platform',
      color: 'from-slate-600 to-gray-700'
    },

    // AI Automation Services
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      description: 'Intelligent workflow automation and process optimization using AI algorithms.',
      features: ['Process Mapping', 'Automation Rules', 'Integration APIs', 'Analytics', 'Smart Routing', 'Performance Optimization'],
      pricing: { monthly: 69, yearly: 699, enterprise: 'Custom' },
      icon: Zap,
      link: '/services/ai-workflow-automation',
      popular: false,
      highlights: ['Intelligent process mapping', 'Smart automation rules', 'Performance optimization'],
      rating: 4.4,
      reviews: 87,
      badge: 'Automation',
      color: 'from-yellow-600 to-orange-700'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation Platform',
      category: 'automation',
      description: 'Intelligent marketing automation with personalization and campaign optimization.',
      features: ['Email Marketing', 'Social Media', 'Lead Scoring', 'Campaign Optimization', 'Personalization', 'ROI Tracking'],
      pricing: { monthly: 99, yearly: 999, enterprise: 'Custom' },
      icon: Target,
      link: '/services/ai-marketing-automation',
      popular: false,
      highlights: ['AI personalization', 'Campaign optimization', 'ROI tracking'],
      rating: 4.5,
      reviews: 156,
      badge: 'Marketing',
      color: 'from-pink-600 to-rose-700'
    },
    {
      id: 'ai-devops-automation-platform',
      name: 'AI DevOps Automation Platform',
      category: 'automation',
      description: 'Intelligent DevOps automation with AI-powered optimization and monitoring.',
      features: ['CI/CD Automation', 'Infrastructure as Code', 'Monitoring', 'Performance Optimization', 'Security Scanning', 'Auto-scaling'],
      pricing: { monthly: 129, yearly: 1299, enterprise: 'Custom' },
      icon: Zap,
      link: '/services/ai-devops-automation-platform',
      popular: false,
      highlights: ['AI-powered optimization', 'Intelligent monitoring', 'Auto-scaling'],
      rating: 4.6,
      reviews: 134,
      badge: 'DevOps',
      color: 'from-cyan-600 to-blue-700'
    },

    // AI Analytics Services
    {
      id: 'ai-content-optimizer-pro',
      name: 'AI Content Optimizer Pro',
      category: 'analytics',
      description: 'Advanced content optimization with AI insights and performance analytics.',
      features: ['SEO Optimization', 'Readability Analysis', 'Content Scoring', 'A/B Testing', 'Performance Analytics', 'Content Intelligence'],
      pricing: { monthly: 59, yearly: 599, enterprise: 'Custom' },
      icon: FileText,
      link: '/services/ai-content-optimizer-pro',
      popular: false,
      highlights: ['AI content scoring', 'Performance analytics', 'Content intelligence'],
      rating: 4.4,
      reviews: 98,
      badge: 'Content AI',
      color: 'from-violet-600 to-purple-700'
    },
    {
      id: 'ai-powered-seo',
      name: 'AI-Powered SEO Platform',
      category: 'analytics',
      description: 'Intelligent SEO optimization and keyword analysis using advanced AI algorithms.',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Analysis', 'Competitor Insights', 'Performance Tracking', 'AI Recommendations'],
      pricing: { monthly: 39, yearly: 399, enterprise: 'Custom' },
      icon: Search,
      link: '/services/ai-powered-seo',
      popular: false,
      highlights: ['AI keyword research', 'Content optimization', 'Competitor analysis'],
      rating: 4.3,
      reviews: 76,
      badge: 'SEO AI',
      color: 'from-lime-600 to-green-700'
    },

    // Specialized AI Services
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization Platform',
      category: 'business',
      description: 'Intelligent supply chain management with predictive analytics and real-time optimization.',
      features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Risk Assessment', 'Real-time Analytics', 'Global Optimization'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Truck,
      link: '/services/ai-supply-chain-optimization',
      popular: true,
      highlights: ['30% cost reduction', '95% forecast accuracy', '40% efficiency increase'],
      rating: 4.8,
      reviews: 178,
      badge: 'Logistics',
      color: 'from-blue-600 to-cyan-700'
    },
    {
      id: 'ai-financial-trading-platform',
      name: 'AI Financial Trading Platform',
      category: 'business',
      description: 'AI-powered financial trading and portfolio management with advanced algorithms.',
      features: ['Algorithmic Trading', 'Risk Management', 'Portfolio Optimization', 'Market Analysis', 'Predictive Modeling', 'Real-time Execution'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: TrendingUp,
      link: '/services/ai-financial-trading-platform',
      popular: false,
      highlights: ['Algorithmic trading', 'Risk management', 'Portfolio optimization'],
      rating: 4.7,
      reviews: 145,
      badge: 'FinTech',
      color: 'from-green-600 to-emerald-700'
    },
    {
      id: 'ai-hr-platform',
      name: 'AI HR Management Platform',
      category: 'business',
      description: 'Intelligent human resources management and analytics using AI algorithms.',
      features: ['Recruitment AI', 'Performance Analytics', 'Employee Engagement', 'Compliance', 'Predictive HR', 'Talent Analytics'],
      pricing: { monthly: 89, yearly: 899, enterprise: 'Custom' },
      icon: Users,
      link: '/services/ai-hr-platform',
      popular: false,
      highlights: ['AI recruitment', 'Performance analytics', 'Talent optimization'],
      rating: 4.5,
      reviews: 123,
      badge: 'HR Tech',
      color: 'from-amber-600 to-yellow-700'
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance Platform',
      category: 'business',
      description: 'Predictive maintenance for industrial equipment and machinery using AI algorithms.',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Real-time Alerts', 'Performance Analytics'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/services/ai-predictive-maintenance',
      popular: false,
      highlights: ['Failure prediction', 'Cost optimization', 'Real-time monitoring'],
      rating: 4.6,
      reviews: 134,
      badge: 'IoT AI',
      color: 'from-slate-600 to-gray-700'
    },
    {
      id: 'ai-iot-edge-computing-platform',
      name: 'AI IoT Edge Computing Platform',
      category: 'automation',
      description: 'Edge computing platform for IoT devices with AI capabilities and real-time processing.',
      features: ['Edge Processing', 'Device Management', 'Real-time Analytics', 'Security', 'Scalable Architecture', 'AI Inference'],
      pricing: { monthly: 149, yearly: 1499, enterprise: 'Custom' },
      icon: Network,
      link: '/services/ai-iot-edge-computing-platform',
      popular: false,
      highlights: ['Edge AI processing', 'Real-time analytics', 'Scalable architecture'],
      rating: 4.5,
      reviews: 98,
      badge: 'Edge AI',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      category: 'business',
      description: 'Enterprise-wide AI orchestration and management platform for large organizations.',
      features: ['Service Orchestration', 'Resource Management', 'Performance Monitoring', 'Integration', 'Scalability', 'Enterprise Security'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/services/ai-enterprise-orchestrator',
      popular: false,
      highlights: ['Enterprise orchestration', 'Resource management', 'Scalable architecture'],
      rating: 4.7,
      reviews: 167,
      badge: 'Enterprise',
      color: 'from-gray-600 to-slate-700'
    },
    {
      id: 'llm-content-studio',
      name: 'LLM Content Studio Platform',
      category: 'analytics',
      description: 'Large Language Model content creation and management with advanced AI capabilities.',
      features: ['Content Generation', 'Model Training', 'Custom Prompts', 'Quality Control', 'Multi-language Support', 'Brand Voice'],
      pricing: { monthly: 159, yearly: 1599, enterprise: 'Custom' },
      icon: FileText,
      link: '/services/llm-content-studio',
      popular: false,
      highlights: ['LLM content generation', 'Custom model training', 'Quality control'],
      rating: 4.4,
      reviews: 87,
      badge: 'LLM AI',
      color: 'from-purple-600 to-pink-700'
    },
    {
      id: 'ai-auto-email-responder',
      name: 'AI Auto Email Responder',
      category: 'automation',
      description: 'Intelligent email automation and response system using AI algorithms.',
      features: ['Email Classification', 'Auto Responses', 'Sentiment Analysis', 'Analytics', 'Smart Routing', 'Performance Tracking'],
      pricing: { monthly: 39, yearly: 399, enterprise: 'Custom' },
      icon: Mail,
      link: '/services/ai-auto-email-responder',
      popular: false,
      highlights: ['Smart email routing', 'Sentiment analysis', 'Auto responses'],
      rating: 4.3,
      reviews: 65,
      badge: 'Email AI',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'ai-customer-support-automation',
      name: 'AI Customer Support Automation',
      category: 'automation',
      description: 'Automated customer support with intelligent response system and chatbot integration.',
      features: ['Chatbot Integration', 'Ticket Management', 'Knowledge Base', 'Analytics', 'Sentiment Analysis', 'Smart Routing'],
      pricing: { monthly: 79, yearly: 799, enterprise: 'Custom' },
      icon: MessageSquare,
      link: '/services/ai-customer-support-automation',
      popular: false,
      highlights: ['Intelligent chatbots', 'Smart ticket routing', 'Sentiment analysis'],
      rating: 4.5,
      reviews: 134,
      badge: 'Support AI',
      color: 'from-cyan-600 to-blue-700'
    },
    {
      id: 'ai-project-management-platform',
      name: 'AI Project Management Platform',
      category: 'business',
      description: 'Intelligent project management with predictive analytics and AI-powered insights.',
      features: ['Task Management', 'Resource Allocation', 'Risk Assessment', 'Progress Tracking', 'Predictive Analytics', 'Team Collaboration'],
      pricing: { monthly: 59, yearly: 599, enterprise: 'Custom' },
      icon: Target,
      link: '/services/ai-project-management-platform',
      popular: false,
      highlights: ['AI project planning', 'Risk assessment', 'Resource optimization'],
      rating: 4.4,
      reviews: 98,
      badge: 'Project AI',
      color: 'from-orange-600 to-red-700'
    },
    {
      id: 'ai-code-review-security',
      name: 'AI Code Review & Security',
      category: 'cybersecurity',
      description: 'Automated code review with security vulnerability detection using AI algorithms.',
      features: ['Code Analysis', 'Security Scanning', 'Quality Metrics', 'Compliance Checks', 'Vulnerability Detection', 'Performance Analysis'],
      pricing: { monthly: 79, yearly: 799, enterprise: 'Custom' },
      icon: Code,
      link: '/services/ai-code-review-security',
      popular: false,
      highlights: ['AI code analysis', 'Security scanning', 'Quality metrics'],
      rating: 4.6,
      reviews: 123,
      badge: 'Code AI',
      color: 'from-green-600 to-emerald-700'
    }
  ];

  // Calculate category counts
  useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = innovativeAIServices.length;
      } else {
        cat.count = innovativeAIServices.filter(service => service.category === cat.id).length;
      }
    });
  }, []);

  const filteredServices = innovativeAIServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 AI Innovation Showcase
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Innovative AI Services Showcase 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto mb-8"
          >
            Discover our cutting-edge AI solutions that combine artificial intelligence with quantum computing, cybersecurity, healthcare, and business automation to transform your organization
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">{innovativeAIServices.length}+ AI Services</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">Quantum AI</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">Enterprise Ready</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}

              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.badge === 'Revolutionary' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                      service.badge === 'Enterprise' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' :
                      service.badge === 'Healthcare' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' :
                      service.badge === 'Logistics' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                      'bg-gradient-to-r from-gray-500 to-slate-500 text-white'
                    }`}>
                      {service.badge}
                    </span>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                      <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Highlights</h4>
                <div className="space-y-2">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-400">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="border-t border-purple-500/20 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">${service.pricing.monthly}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Yearly</div>
                    <div className="text-lg font-semibold text-white">
                      ${service.pricing.yearly}
                    </div>
                  </div>
                </div>
                <Link
                  to={service.link}
                  className="w-full block text-center py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Get in touch with our AI experts to discuss your specific needs and discover how our innovative AI solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-6 text-purple-100">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeAIServicesShowcase2025;