<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
<<<<<<< HEAD
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
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
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
=======
  Brain, 
  Shield, 
  Heart, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Lock,
  BarChart3,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Cpu,
  Database,
  Network,
  Code,
  Palette,
  ShoppingCart,
  TrendingUp,
  Eye,
  MessageCircle
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      description: "Transform your business with intelligent automation and insights",
      services: [
        {
          name: "AI Autonomous Business Intelligence Platform",
          href: "/services/ai-autonomous-business-intelligence-platform",
          description: "Autonomous AI that continuously analyzes data and delivers actionable intelligence",
          price: "From $299/month",
          features: ["Autonomous data analysis", "Predictive analytics", "Real-time dashboards"]
        },
        {
          name: "AI Healthcare Analytics Platform",
          href: "/services/ai-healthcare-analytics-platform",
          description: "AI-powered healthcare analytics for improved patient outcomes",
          price: "From $399/month",
          features: ["AI diagnostics", "Patient monitoring", "HIPAA compliance"]
        },
        {
          name: "AI Cybersecurity Threat Intelligence Platform",
          href: "/services/ai-cybersecurity-threat-intelligence-platform",
          description: "Next-generation AI cybersecurity with real-time threat detection",
          price: "From $499/month",
          features: ["AI threat detection", "Real-time monitoring", "Automated response"]
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      description: "Scalable cloud solutions for modern businesses",
      services: [
        {
          name: "Cloud DevOps Automation",
          href: "/services/cloud-devops",
          description: "Streamline your development and operations with automated cloud solutions",
          price: "From $199/month",
          features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring & alerting"]
        },
        {
          name: "FinOps Advisor",
          href: "/services/finops-advisor",
          description: "Optimize cloud costs and financial operations",
          price: "From $299/month",
          features: ["Cost optimization", "Budget management", "ROI analysis"]
        }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      description: "Protect your business with enterprise-grade security",
      services: [
        {
          name: "Zero Trust Network Architecture",
          href: "/services/zero-trust-network-architecture",
          description: "Modern security architecture for the digital age",
          price: "From $599/month",
          features: ["Identity verification", "Access control", "Continuous monitoring"]
        },
        {
          name: "SOC2 Compliance Automation",
          href: "/services/soc2-compliance-automation",
          description: "Automate your compliance processes and maintain SOC2 certification",
          price: "From $399/month",
          features: ["Automated audits", "Policy management", "Evidence collection"]
        }
      ]
    },
    {
      title: "Digital Transformation",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      description: "Accelerate your digital journey with proven strategies",
      services: [
        {
          name: "Digital Twin Solutions",
          href: "/services/digital-twin",
          description: "Create virtual replicas of your physical systems for optimization",
          price: "From $799/month",
          features: ["Real-time monitoring", "Predictive maintenance", "Performance optimization"]
        },
        {
          name: "Digital Transformation Consulting",
          href: "/services/digital-transformation",
          description: "Strategic guidance for your digital transformation journey",
          price: "From $1,499/month",
          features: ["Strategy development", "Implementation planning", "Change management"]
        }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      description: "Stay ahead with cutting-edge technology solutions",
      services: [
        {
          name: "Quantum Computing Solutions",
          href: "/services/quantum-computing-solutions",
          description: "Harness the power of quantum computing for complex problems",
          price: "From $1,999/month",
          features: ["Quantum algorithms", "Hybrid computing", "Optimization solutions"]
        },
        {
          name: "IoT Edge Computing Platform",
          href: "/services/iot-edge",
          description: "Build intelligent IoT solutions with edge computing",
          price: "From $599/month",
          features: ["Edge processing", "Real-time analytics", "Device management"]
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      description: "Specialized software solutions for niche markets",
      services: [
        {
          name: "Micro CRM Platform",
          href: "/services/micro-crm",
          description: "Customer relationship management tailored for small businesses",
          price: "From $99/month",
          features: ["Contact management", "Sales tracking", "Customer insights"]
        },
        {
          name: "AI Content Optimizer Pro",
          href: "/services/ai-content-optimizer-pro",
          description: "AI-powered content optimization for better engagement",
          price: "From $199/month",
          features: ["Content analysis", "SEO optimization", "Performance tracking"]
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "Innovation Leadership",
      description: "Stay ahead of the competition with cutting-edge technology",
      icon: Rocket
    },
    {
      title: "Cost Optimization",
      description: "Reduce operational costs while improving efficiency",
      icon: TrendingUp
    },
    {
      title: "Scalability",
      description: "Grow your business without infrastructure limitations",
      icon: BarChart3
    },
    {
      title: "Security & Compliance",
      description: "Protect your business with enterprise-grade security",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Zion Tech Group 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Services Showcase
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our complete portfolio of AI-powered services, IT solutions, and innovative 
              micro SaaS platforms designed to transform your business in 2025 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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

<<<<<<< HEAD
      {/* Services Grid */}
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
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
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
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of services designed to meet every business need
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                        <div className="text-cyan-400 font-semibold text-lg mb-4">{service.price}</div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
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
              Choose from our comprehensive portfolio of services and start your transformation 
              journey today. Our experts are ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our team of experts is here to help you choose the right services and 
              implement solutions that drive real business results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
