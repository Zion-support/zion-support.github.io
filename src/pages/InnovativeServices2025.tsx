import React, { useState, useEffect } from 'react.ts';
import { Link              } from 'react-router-dom.ts';
import { motion, AnimatePresence              } from 'framer-motion.ts';
import { Brain, 
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
  Satellite,
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
  Eye,
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
  Clock,
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
  CalendarDays2,
  CalendarCheck2,
  CalendarX2,
  CalendarPlus2,
  CalendarMinus2,
  CalendarRange2,
  CalendarSearch2,
  CalendarClock2,
  CalendarHeart2,
  CalendarStar2,
  CalendarUser2,
  CalendarSettings2,
  CalendarEdit2,
  CalendarTrash2,
  CalendarOff2,
  CalendarEvent2,
  CalendarTime2,
  CalendarWeek2,
  CalendarMonth2,
  CalendarYear2
             } from 'lucide-react.ts';

export default function InnovativeServices2025(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  // Enhanced Services Catalog 2025
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
      reviews: 127
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
      reviews: 89
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
      reviews: 156
    },
    {
      id: 'ai-content-marketing-suite',
      name: 'AI Content Marketing Suite',
      description: 'Complete content creation, optimization, and distribution platform powered by advanced AI.',
      category: 'AI & ML',
      price: '$1,900/month',
      features: ['Content Creation', 'SEO Optimization', 'Social Media Management', 'Analytics Dashboard', 'Multi-platform Publishing'],
      icon: PenTool,
      badge: 'New',
      color: 'from-pink-600 to-rose-700',
      link: '/services/ai-content-marketing-suite',
      marketPrice: '$2,500/month',
      savings: '24%',
      rating: 4.7,
      reviews: 94
    },
    {
      id: 'ai-customer-support-automation',
      name: 'AI Customer Support Automation',
      description: 'Intelligent customer service automation with chatbots, ticket routing, and sentiment analysis.',
      category: 'AI & ML',
      price: '$1,600/month',
      features: ['Smart Chatbots', 'Ticket Routing', 'Sentiment Analysis', 'Knowledge Base', 'Performance Metrics'],
      icon: MessageCircle,
      badge: 'Popular',
      color: 'from-cyan-600 to-blue-700',
      link: '/services/ai-customer-support-automation',
      marketPrice: '$2,100/month',
      savings: '24%',
      rating: 4.8,
      reviews: 203
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      description: 'Intelligent project planning, resource allocation, and risk management with AI insights.',
      category: 'AI & ML',
      price: '$2,300/month',
      features: ['Smart Planning', 'Resource Optimization', 'Risk Management', 'Team Collaboration', 'Progress Tracking'],
      icon: Workflow,
      badge: 'Featured',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-project-management',
      marketPrice: '$2,900/month',
      savings: '21%',
      rating: 4.9,
      reviews: 178
    },

    // IT Infrastructure Services
    {
      id: 'cloud-devops-platform',
      name: 'Cloud DevOps Automation Platform',
      description: 'Comprehensive DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring.',
      category: 'IT Infrastructure',
      price: '$3,200/month',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Scanning', 'Auto-scaling'],
      icon: Cloud,
      badge: 'Popular',
      color: 'from-blue-600 to-indigo-700',
      link: '/services/cloud-devops',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.9,
      reviews: 234
    },
    {
      id: 'it-infrastructure-management',
      name: 'IT Infrastructure Management Suite',
      description: 'Complete IT infrastructure monitoring, management, and optimization platform.',
      category: 'IT Infrastructure',
      price: '$2,800/month',
      features: ['Infrastructure Monitoring', 'Performance Optimization', 'Capacity Planning', 'Security Management', 'Backup & Recovery'],
      icon: Server,
      badge: 'Featured',
      color: 'from-gray-600 to-slate-700',
      link: '/services/it-infrastructure',
      marketPrice: '$3,500/month',
      savings: '20%',
      rating: 4.8,
      reviews: 167
    },
    {
      id: 'cybersecurity-platform',
      name: 'AI-Powered Cybersecurity Platform',
      description: 'Advanced threat detection, vulnerability assessment, and security automation platform.',
      category: 'IT Infrastructure',
      price: '$3,500/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Automation', 'Incident Response', 'Compliance Reporting'],
      icon: Lock,
      badge: 'Popular',
      color: 'from-red-600 to-pink-700',
      link: '/services/ai-cybersecurity-platform',
      marketPrice: '$4,400/month',
      savings: '20%',
      rating: 4.9,
      reviews: 289
    },

    // Micro SaaS Solutions
    {
      id: 'finops-advisor',
      name: 'FinOps Cloud Cost Optimizer',
      description: 'Cloud cost optimization and financial operations management platform for enterprises.',
      category: 'Micro SaaS',
      price: '$1,200/month',
      features: ['Cost Optimization', 'Budget Management', 'Resource Tracking', 'Cost Allocation', 'Savings Recommendations'],
      icon: DollarSign,
      badge: 'New',
      color: 'from-green-600 to-emerald-700',
      link: '/services/finops-advisor',
      marketPrice: '$1,600/month',
      savings: '25%',
      rating: 4.7,
      reviews: 76
    },
    {
      id: 'zero-trust-network',
      name: 'Zero Trust Network Access Platform',
      description: 'Secure network access control with identity verification and continuous monitoring.',
      category: 'Micro SaaS',
      price: '$2,100/month',
      features: ['Identity Verification', 'Access Control', 'Continuous Monitoring', 'Threat Detection', 'Compliance Reporting'],
      icon: Shield,
      badge: 'Featured',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/zero-trust-network-access',
      marketPrice: '$2,700/month',
      savings: '22%',
      rating: 4.8,
      reviews: 134
    },
    {
      id: 'dsr-portal',
      name: 'Data Subject Rights Portal',
      description: 'GDPR compliance platform for managing data subject requests and privacy rights.',
      category: 'Micro SaaS',
      price: '$900/month',
      features: ['Request Management', 'Data Mapping', 'Consent Management', 'Privacy Impact Assessment', 'Compliance Reporting'],
      icon: FileText,
      badge: 'New',
      color: 'from-teal-600 to-cyan-700',
      link: '/services/dsr-portal',
      marketPrice: '$1,200/month',
      savings: '25%',
      rating: 4.6,
      reviews: 89
    },

    // Emerging Technology Services
    {
      id: 'quantum-computing-platform',
      name: 'Quantum Computing Solutions',
      description: 'Quantum computing services for optimization, cryptography, and scientific computing.',
      category: 'Emerging Tech',
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Scientific Computing', 'Research Support'],
      icon: Atom,
      badge: 'Future',
      color: 'from-purple-600 to-pink-700',
      link: '/services/quantum-computing',
      marketPrice: '$6,500/month',
      savings: '23%',
      rating: 4.9,
      reviews: 45
    },
    {
      id: 'edge-computing-platform',
      name: 'Edge Computing Platform',
      description: 'Distributed edge computing platform for IoT, real-time processing, and low-latency applications.',
      category: 'Emerging Tech',
      price: '$2,800/month',
      features: ['Edge Nodes', 'Real-time Processing', 'IoT Integration', 'Low Latency', 'Scalable Architecture'],
      icon: Cpu,
      badge: 'Featured',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/edge-computing',
      marketPrice: '$3,600/month',
      savings: '22%',
      rating: 4.8,
      reviews: 123
    },
    {
      id: 'blockchain-platform',
      name: 'Enterprise Blockchain Platform',
      description: 'Scalable blockchain solutions for supply chain, finance, and digital identity management.',
      category: 'Emerging Tech',
      price: '$3,200/month',
      features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Token Management', 'Consensus Mechanisms'],
      icon: Link,
      badge: 'Popular',
      color: 'from-green-600 to-blue-700',
      link: '/services/blockchain',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.7,
      reviews: 167
    },

    // New AI-Powered Business Intelligence Services
    {
      id: 'ai-business-intelligence-suite',
      name: 'AI Business Intelligence Suite',
      description: 'Advanced analytics and business intelligence platform with AI-powered insights and predictive modeling.',
      category: 'AI & ML',
      price: '$2,800/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Visualization', 'Custom Reports', 'AI Insights'],
      icon: BarChart3,
      badge: 'Featured',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/ai-business-intelligence-suite',
      marketPrice: '$3,600/month',
      savings: '22%',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 'ai-code-review-security',
      name: 'AI Code Review & Security Scanner',
      description: 'Automated code review, security vulnerability detection, and code quality improvement platform.',
      category: 'AI & ML',
      price: '$1,900/month',
      features: ['Security Scanning', 'Code Quality Analysis', 'Vulnerability Detection', 'Best Practices', 'Integration Support'],
      icon: Code,
      badge: 'New',
      color: 'from-red-600 to-orange-700',
      link: '/services/ai-code-review-security',
      marketPrice: '$2,400/month',
      savings: '21%',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'ai-financial-trading-platform',
      name: 'AI Financial Trading Platform',
      description: 'Intelligent trading platform with market analysis, risk management, and automated trading strategies.',
      category: 'AI & ML',
      price: '$4,200/month',
      features: ['Market Analysis', 'Risk Management', 'Automated Trading', 'Portfolio Optimization', 'Real-time Alerts'],
      icon: TrendingUp,
      badge: 'Premium',
      color: 'from-emerald-600 to-green-700',
      link: '/services/ai-financial-trading-platform',
      marketPrice: '$5,500/month',
      savings: '24%',
      rating: 4.9,
      reviews: 234
    },

    // New Micro SaaS Solutions
    {
      id: 'employee-scheduling-saas',
      name: 'AI Employee Scheduling Platform',
      description: 'Intelligent employee scheduling with shift optimization, conflict resolution, and compliance management.',
      category: 'Micro SaaS',
      price: '$800/month',
      features: ['Shift Optimization', 'Conflict Resolution', 'Compliance Management', 'Mobile App', 'Integration APIs'],
      icon: Users,
      badge: 'New',
      color: 'from-blue-600 to-indigo-700',
      link: '/services/employee-scheduling-saas',
      marketPrice: '$1,100/month',
      savings: '27%',
      rating: 4.7,
      reviews: 67
    },
    {
      id: 'soc2-compliance-tracker',
      name: 'SOC2 Compliance Tracker',
      description: 'Automated SOC2 compliance monitoring, documentation, and audit preparation platform.',
      category: 'Micro SaaS',
      price: '$1,500/month',
      features: ['Compliance Monitoring', 'Documentation Management', 'Audit Preparation', 'Risk Assessment', 'Reporting Tools'],
      icon: Shield,
      badge: 'Featured',
      color: 'from-purple-600 to-pink-700',
      link: '/services/soc2-compliance-tracker',
      marketPrice: '$2,000/month',
      savings: '25%',
      rating: 4.8,
      reviews: 123
    },
    {
      id: 'uptime-sla-monitor',
      name: 'Uptime SLA Monitor',
      description: 'Comprehensive uptime monitoring with SLA tracking, alerting, and performance analytics.',
      category: 'Micro SaaS',
      price: '$600/month',
      features: ['Uptime Monitoring', 'SLA Tracking', 'Performance Analytics', 'Alerting System', 'Custom Dashboards'],
      icon: Activity,
      badge: 'Popular',
      color: 'from-green-600 to-teal-700',
      link: '/services/uptime-sla-monitor',
      marketPrice: '$800/month',
      savings: '25%',
      rating: 4.9,
      reviews: 189
    },

    // New IT Infrastructure Services
    {
      id: 'ai-devops-automation',
      name: 'AI DevOps Automation Platform',
      description: 'Intelligent DevOps automation with AI-powered deployment, testing, and monitoring.',
      category: 'IT Infrastructure',
      price: '$3,800/month',
      features: ['AI Deployment', 'Automated Testing', 'Intelligent Monitoring', 'Performance Optimization', 'Security Integration'],
      icon: Workflow,
      badge: 'Premium',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-devops-automation',
      marketPrice: '$4,900/month',
      savings: '22%',
      rating: 4.9,
      reviews: 178
    },
    {
      id: 'ai-iot-edge-computing',
      name: 'AI IoT Edge Computing Platform',
      description: 'Edge computing platform for IoT devices with AI processing and real-time analytics.',
      category: 'IT Infrastructure',
      price: '$2,900/month',
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'AI Models', 'Scalable Architecture'],
      icon: Cpu,
      badge: 'Featured',
      color: 'from-cyan-600 to-blue-700',
      link: '/services/ai-iot-edge-computing',
      marketPrice: '$3,700/month',
      savings: '22%',
      rating: 4.8,
      reviews: 145
    },

    // New Emerging Technology Services
    {
      id: 'quantum-ai-platform',
      name: 'Quantum AI Hybrid Platform',
      description: 'Hybrid quantum-classical AI platform for complex optimization and machine learning tasks.',
      category: 'Emerging Tech',
      price: '$6,500/month',
      features: ['Quantum Algorithms', 'AI Integration', 'Optimization Problems', 'Research Support', 'Enterprise APIs'],
      icon: Atom,
      badge: 'Future',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/quantum-ai-platform',
      marketPrice: '$8,200/month',
      savings: '21%',
      rating: 4.9,
      reviews: 67
    },
    {
      id: 'space-tech-solutions',
      name: 'Space Technology Solutions',
      description: 'Satellite data analytics, space mission planning, and aerospace technology services.',
      category: 'Emerging Tech',
      price: '$4,800/month',
      features: ['Satellite Analytics', 'Mission Planning', 'Data Processing', 'Space Weather', 'Research Support'],
      icon: Satellite,
      badge: 'Innovative',
      color: 'from-blue-600 to-purple-700',
      link: '/services/space-tech-solutions',
      marketPrice: '$6,100/month',
      savings: '21%',
      rating: 4.8,
      reviews: 89
    },

    // New Healthcare Technology Services
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics with patient insights, predictive diagnostics, and treatment optimization.',
      category: 'AI & ML',
      price: '$3,600/month',
      features: ['Patient Analytics', 'Predictive Diagnostics', 'Treatment Optimization', 'Clinical Insights', 'HIPAA Compliance'],
      icon: HeartPulse,
      badge: 'Specialized',
      color: 'from-red-600 to-pink-700',
      link: '/services/ai-healthcare-analytics',
      marketPrice: '$4,600/month',
      savings: '22%',
      rating: 4.9,
      reviews: 234
    },

    // New Sustainability & Green Tech Services
    {
      id: 'green-it-solutions',
      name: 'Green IT Solutions Platform',
      description: 'Sustainable technology solutions with carbon footprint tracking and energy optimization.',
      category: 'Emerging Tech',
      price: '$2,200/month',
      features: ['Carbon Tracking', 'Energy Optimization', 'Sustainability Metrics', 'Green Certifications', 'Reporting Tools'],
      icon: Leaf,
      badge: 'Eco-Friendly',
      color: 'from-green-600 to-emerald-700',
      link: '/services/green-it-solutions',
      marketPrice: '$2,800/month',
      savings: '21%',
      rating: 4.7,
      reviews: 156
    },

    // New Digital Transformation Services
    {
      id: 'digital-transformation-hub',
      name: 'Digital Transformation Hub',
      description: 'Comprehensive digital transformation platform with strategy, implementation, and optimization tools.',
      category: 'IT Infrastructure',
      price: '$4,500/month',
      features: ['Strategy Planning', 'Implementation Tools', 'Change Management', 'Performance Monitoring', 'ROI Tracking'],
      icon: Rocket,
      badge: 'Strategic',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/digital-transformation-hub',
      marketPrice: '$5,700/month',
      savings: '21%',
      rating: 4.8,
      reviews: 189
    },

    // New Cybersecurity & Compliance Services
    {
      id: 'incident-response-platform',
      name: 'AI Incident Response Platform',
      description: 'Intelligent incident response with automated threat detection, response coordination, and recovery.',
      category: 'IT Infrastructure',
      price: '$3,200/month',
      features: ['Threat Detection', 'Response Coordination', 'Recovery Automation', 'Forensic Analysis', 'Compliance Reporting'],
      icon: AlertTriangle,
      badge: 'Critical',
      color: 'from-red-600 to-orange-700',
      link: '/services/incident-response-platform',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.9,
      reviews: 267
    },

    // New Financial Technology Services
    {
      id: 'finops-cloud-optimizer',
      name: 'FinOps Cloud Cost Optimizer',
      description: 'Cloud financial operations platform with cost optimization, budgeting, and resource management.',
      category: 'Micro SaaS',
      price: '$1,400/month',
      features: ['Cost Optimization', 'Budget Management', 'Resource Tracking', 'Savings Recommendations', 'Multi-cloud Support'],
      icon: DollarSign,
      badge: 'Cost-Effective',
      color: 'from-emerald-600 to-green-700',
      link: '/services/finops-cloud-optimizer',
      marketPrice: '$1,800/month',
      savings: '22%',
      rating: 4.8,
      reviews: 134
    },

    // New Marketing & Sales Services
    {
      id: 'ai-marketing-automation-suite',
      name: 'AI Marketing Automation Suite',
      description: 'Intelligent marketing automation with personalized campaigns, lead scoring, and ROI optimization.',
      category: 'AI & ML',
      price: '$2,100/month',
      features: ['Campaign Automation', 'Lead Scoring', 'Personalization', 'ROI Optimization', 'Multi-channel Integration'],
      icon: Target,
      badge: 'Popular',
      color: 'from-pink-600 to-rose-700',
      link: '/services/ai-marketing-automation-suite',
      marketPrice: '$2,700/month',
      savings: '22%',
      rating: 4.8,
      reviews: 198
    },

    // New Supply Chain & Logistics Services
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
      category: 'AI & ML',
      price: '$3,400/month',
      features: ['Demand Forecasting', 'Inventory Management', 'Logistics Optimization', 'Risk Assessment', 'Real-time Tracking'],
      icon: Truck,
      badge: 'Featured',
      color: 'from-blue-600 to-indigo-700',
      link: '/services/ai-supply-chain-optimization',
      marketPrice: '$4,300/month',
      savings: '21%',
      rating: 4.9,
      reviews: 167
    },

    // New Customer Experience Services
    {
      id: 'ai-customer-experience-analytics',
      name: 'AI Customer Experience Analytics',
      description: 'Advanced customer experience analytics with sentiment analysis, journey mapping, and optimization insights.',
      category: 'AI & ML',
      price: '$2,600/month',
      features: ['Sentiment Analysis', 'Journey Mapping', 'Experience Optimization', 'Customer Insights', 'Predictive Analytics'],
      icon: Eye,
      badge: 'Customer-Focused',
      color: 'from-purple-600 to-pink-700',
      link: '/services/ai-customer-experience-analytics',
      marketPrice: '$3,300/month',
      savings: '21%',
      rating: 4.8,
      reviews: 145
    }
  ];

  const categories = [
    { id: anyanyanyanyanyanyanyanyanyanyanyanyany'all', name: 'All Services', icon: Star, count: services.length },
    { id: 'AI & ML', name: 'AI & Machine Learning', icon: Brain, count: services.filter(s              => s.category === 'AI & ML').length },
    { id: anyanyanyanyanyanyanyanyanyanyanyanyany'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: services.filter(s              => s.category === 'IT Infrastructure').length },
    { id: anyanyanyanyanyanyanyanyanyanyanyanyany'Micro SaaS', name: 'Micro SaaS', icon: Rocket, count: services.filter(s              => s.category === 'Micro SaaS').length },
    { id: anyanyanyanyanyanyanyanyanyanyanyanyany'Emerging Tech', name: 'Emerging Technology', icon: Atom, count: services.filter(s              => s.category === 'Emerging Tech').length }
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Innovative Services 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-blue-light max-w-4xl mx-auto mb-8"
          >
            Discover cutting-edge AI solutions, micro SAAS platforms, and revolutionary IT services that will transform your business in 2025
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-zion-blue-dark px-8 py-3 rounded-full font-semibold hover:bg-zion-blue-light transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-zion-slate-dark py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-blue-light">
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
                      ? 'bg-zion-blue text-white'
                      : 'bg-zion-slate text-zion-blue-light hover:bg-zion-slate-light'
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
                  className="w-full sm:w-64 px-4 py-2 pl-10 bg-zion-slate text-white rounded-lg border border-zion-slate-light focus:border-zion-blue focus:outline-none"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-zion-blue-light" />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-slate text-white rounded-lg border border-zion-slate-light focus:border-zion-blue focus:outline-none"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service, index)              => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-zion-slate-light hover:border-zion-blue transition-all duration-300 hover:shadow-2xl hover:shadow-zion-blue/20"
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.badge === 'New' ? 'bg-green-500 text-white' :
                        service.badge === 'Popular' ? 'bg-blue-500 text-white' :
                        service.badge === 'Featured' ? 'bg-purple-500 text-white' :
                        service.badge === 'Premium' ? 'bg-indigo-500 text-white' :
                        service.badge === 'Innovative' ? 'bg-cyan-500 text-white' :
                        service.badge === 'Specialized' ? 'bg-red-500 text-white' :
                        service.badge === 'Eco-Friendly' ? 'bg-green-500 text-white' :
                        service.badge === 'Strategic' ? 'bg-orange-500 text-white' :
                        service.badge === 'Critical' ? 'bg-pink-500 text-white' :
                        service.badge === 'Cost-Effective' ? 'bg-emerald-500 text-white' :
                        service.badge === 'Customer-Focused' ? 'bg-pink-500 text-white' :
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
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-blue-light transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-zion-blue-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-blue-light mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-zion-blue-light flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-blue rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-zion-blue-light line-through">{service.marketPrice}</div>
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
                                : 'text-zion-slate-light'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-zion-blue-light">
                        {service.rating} ({service.reviews} reviews)
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-zion-blue to-zion-blue-light text-white py-3 px-6 rounded-xl font-semibold hover:from-zion-blue-light hover:to-zion-blue transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-zion-blue/25"
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
              <p className="text-zion-blue-light">Try adjusting your search criteria or browse all services.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-light">
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
            className="text-xl text-zion-blue-light max-w-3xl mx-auto mb-8"
          >
            Join thousands of businesses already leveraging our innovative services to stay ahead of the competition.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-zion-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-zion-blue-light transition-colors duration-300 text-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors duration-300 text-lg"
            >
              View Full Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}