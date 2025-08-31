import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Globe, 
  Zap, 
  Lock, 
  Users, 
  BarChart3, 
  Cpu,
  Network,
  Smartphone,
  Code,
  Search,
  MessageSquare,
  FileText,
  PieChart,
  TrendingUp,
  Target,
  Rocket,
  Atom,
  Palette,
  Camera,
  Video,
  Music,
  BookOpen,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 0 },
    { id: 'ai', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'it', name: 'IT Services', icon: Cpu, count: 0 },
    { id: 'saas', name: 'Micro SAAS', icon: Cloud, count: 0 },
    { id: 'security', name: 'Security', icon: Shield, count: 0 },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, count: 0 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 0 }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization Platform',
      category: 'ai',
      description: 'Intelligent supply chain management with predictive analytics and real-time optimization',
      features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Risk Assessment'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Brain,
      link: '/services/ai-supply-chain-optimization',
      popular: true
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      category: 'ai',
      description: 'Advanced threat detection and response using machine learning algorithms',
      features: ['Threat Intelligence', 'Behavioral Analysis', 'Incident Response', 'Compliance Monitoring'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-platform',
      popular: true
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Analytics Platform',
      category: 'ai',
      description: 'Healthcare data analytics and patient outcome prediction',
      features: ['Patient Analytics', 'Treatment Optimization', 'Risk Assessment', 'Clinical Decision Support'],
      pricing: { monthly: 499, yearly: 4999, enterprise: 'Custom' },
      icon: Brain,
      link: '/services/ai-healthcare-platform',
      popular: false
    },
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI-Quantum Hybrid Platform',
      category: 'ai',
      description: 'Combines AI and quantum computing for complex problem solving',
      features: ['Quantum ML', 'Optimization Algorithms', 'Cryptography', 'Simulation'],
      pricing: { monthly: 999, yearly: 9999, enterprise: 'Custom' },
      icon: Atom,
      link: '/services/ai-quantum-hybrid-platform',
      popular: true
    },
    {
      id: 'ai-quantum-neural-network',
      name: 'AI Quantum Neural Network Platform',
      category: 'ai',
      description: 'Next-generation neural networks powered by quantum computing',
      features: ['Quantum Neural Networks', 'Advanced ML', 'Pattern Recognition', 'Optimization'],
      pricing: { monthly: 1299, yearly: 12999, enterprise: 'Custom' },
      icon: Brain,
      link: '/services/ai-quantum-neural-network-platform',
      popular: false
    },
    {
      id: 'ai-autonomous-business-operations',
      name: 'AI Autonomous Business Operations Platform',
      category: 'ai',
      description: 'Fully automated business processes with intelligent decision making',
      features: ['Process Automation', 'Decision Intelligence', 'Resource Optimization', 'Performance Monitoring'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Zap,
      link: '/services/ai-autonomous-business-operations-platform',
      popular: true
    },
    {
      id: 'ai-customer-experience-analytics',
      name: 'AI Customer Experience Analytics Platform',
      category: 'ai',
      description: 'Comprehensive customer journey analysis and optimization',
      features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Behavioral Insights', 'Personalization'],
      pricing: { monthly: 349, yearly: 3499, enterprise: 'Custom' },
      icon: Users,
      link: '/services/ai-customer-experience-analytics-platform',
      popular: false
    },

    // IT Services
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Management',
      category: 'it',
      description: 'Comprehensive IT infrastructure design, deployment, and management',
      features: ['Network Design', 'Cloud Migration', 'Server Management', 'Monitoring'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/it-services',
      popular: false
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'security',
      description: 'End-to-end cybersecurity solutions for modern businesses',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Training'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/cybersecurity',
      popular: true
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions & DevOps',
      category: 'it',
      description: 'Cloud-native solutions with automated DevOps practices',
      features: ['Cloud Architecture', 'CI/CD Pipelines', 'Containerization', 'Monitoring'],
      pricing: { monthly: 249, yearly: 2499, enterprise: 'Custom' },
      icon: Cloud,
      link: '/cloud-solutions',
      popular: false
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation Consulting',
      category: 'it',
      description: 'Strategic digital transformation planning and implementation',
      features: ['Strategy Development', 'Process Optimization', 'Technology Selection', 'Change Management'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Rocket,
      link: '/digital-transformation',
      popular: false
    },

    // Micro SAAS Services
    {
      id: 'micro-crm',
      name: 'Micro CRM Platform',
      category: 'saas',
      description: 'Lightweight CRM solution for small to medium businesses',
      features: ['Contact Management', 'Sales Tracking', 'Email Integration', 'Reporting'],
      pricing: { monthly: 29, yearly: 299, enterprise: 'Custom' },
      icon: Users,
      link: '/services/micro-crm',
      popular: false
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      category: 'ai',
      description: 'AI-powered content creation for marketing and communications',
      features: ['Content Writing', 'SEO Optimization', 'Multi-language Support', 'Brand Voice'],
      pricing: { monthly: 49, yearly: 499, enterprise: 'Custom' },
      icon: FileText,
      link: '/services/ai-content-generator',
      popular: false
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      category: 'ai',
      description: 'Intelligent SEO optimization and keyword analysis',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Analysis', 'Competitor Insights'],
      pricing: { monthly: 39, yearly: 399, enterprise: 'Custom' },
      icon: Search,
      link: '/services/ai-powered-seo',
      popular: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      category: 'ai',
      description: 'Automated customer support with intelligent response system',
      features: ['Chatbot Integration', 'Ticket Management', 'Knowledge Base', 'Analytics'],
      pricing: { monthly: 79, yearly: 799, enterprise: 'Custom' },
      icon: MessageSquare,
      link: '/services/ai-customer-support-automation',
      popular: false
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      category: 'ai',
      description: 'Intelligent project management with predictive analytics',
      features: ['Task Management', 'Resource Allocation', 'Risk Assessment', 'Progress Tracking'],
      pricing: { monthly: 59, yearly: 599, enterprise: 'Custom' },
      icon: Target,
      link: '/services/ai-project-management-platform',
      popular: false
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      description: 'Intelligent workflow automation and process optimization',
      features: ['Process Mapping', 'Automation Rules', 'Integration APIs', 'Analytics'],
      pricing: { monthly: 69, yearly: 699, enterprise: 'Custom' },
      icon: Zap,
      link: '/services/ai-workflow-automation',
      popular: false
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      category: 'analytics',
      description: 'Advanced business intelligence with AI-powered insights',
      features: ['Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Reports'],
      pricing: { monthly: 89, yearly: 899, enterprise: 'Custom' },
      icon: BarChart3,
      link: '/services/ai-business-intelligence',
      popular: false
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation Platform',
      category: 'automation',
      description: 'Intelligent marketing automation with personalization',
      features: ['Email Marketing', 'Social Media', 'Lead Scoring', 'Campaign Optimization'],
      pricing: { monthly: 99, yearly: 999, enterprise: 'Custom' },
      icon: Target,
      link: '/services/ai-marketing-automation',
      popular: false
    },
    {
      id: 'ai-code-review-security',
      name: 'AI Code Review & Security',
      category: 'security',
      description: 'Automated code review with security vulnerability detection',
      features: ['Code Analysis', 'Security Scanning', 'Quality Metrics', 'Compliance Checks'],
      pricing: { monthly: 79, yearly: 799, enterprise: 'Custom' },
      icon: Code,
      link: '/services/ai-code-review-security',
      popular: false
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive cybersecurity with AI-powered threat detection',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-suite',
      popular: false
    },
    {
      id: 'ai-iot-edge-computing',
      name: 'AI IoT Edge Computing Platform',
      category: 'ai',
      description: 'Edge computing platform for IoT devices with AI capabilities',
      features: ['Edge Processing', 'Device Management', 'Real-time Analytics', 'Security'],
      pricing: { monthly: 149, yearly: 1499, enterprise: 'Custom' },
      icon: Network,
      link: '/services/ai-iot-edge-computing-platform',
      popular: false
    },
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading Platform',
      category: 'ai',
      description: 'AI-powered financial trading and portfolio management',
      features: ['Algorithmic Trading', 'Risk Management', 'Portfolio Optimization', 'Market Analysis'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: TrendingUp,
      link: '/services/ai-financial-trading-platform',
      popular: false
    },
    {
      id: 'ai-hr-platform',
      name: 'AI HR Management Platform',
      category: 'ai',
      description: 'Intelligent human resources management and analytics',
      features: ['Recruitment AI', 'Performance Analytics', 'Employee Engagement', 'Compliance'],
      pricing: { monthly: 89, yearly: 899, enterprise: 'Custom' },
      icon: Users,
      link: '/services/ai-hr-platform',
      popular: false
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance Platform',
      category: 'ai',
      description: 'Predictive maintenance for industrial equipment and machinery',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/services/ai-predictive-maintenance',
      popular: false
    },
    {
      id: 'ai-devops-automation',
      name: 'AI DevOps Automation Platform',
      category: 'automation',
      description: 'Intelligent DevOps automation with AI-powered optimization',
      features: ['CI/CD Automation', 'Infrastructure as Code', 'Monitoring', 'Performance Optimization'],
      pricing: { monthly: 129, yearly: 1299, enterprise: 'Custom' },
      icon: Zap,
      link: '/services/ai-devops-automation-platform',
      popular: false
    },
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      category: 'ai',
      description: 'Enterprise-wide AI orchestration and management platform',
      features: ['Service Orchestration', 'Resource Management', 'Performance Monitoring', 'Integration'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/services/ai-enterprise-orchestrator',
      popular: false
    },
    {
      id: 'llm-content-studio',
      name: 'LLM Content Studio Platform',
      category: 'ai',
      description: 'Large Language Model content creation and management',
      features: ['Content Generation', 'Model Training', 'Custom Prompts', 'Quality Control'],
      pricing: { monthly: 159, yearly: 1599, enterprise: 'Custom' },
      icon: FileText,
      link: '/services/llm-content-studio',
      popular: false
    },
    {
      id: 'blockchain-enterprise',
      name: 'Blockchain Enterprise Solutions',
      category: 'it',
      description: 'Enterprise blockchain solutions for business transformation',
      features: ['Smart Contracts', 'Supply Chain', 'Identity Management', 'Compliance'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Lock,
      link: '/services/blockchain-enterprise-solutions',
      popular: false
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      category: 'it',
      description: 'Quantum computing services and consulting',
      features: ['Algorithm Development', 'Problem Solving', 'Research Support', 'Training'],
      pricing: { monthly: 999, yearly: 9999, enterprise: 'Custom' },
      icon: Atom,
      link: '/services/quantum-computing-solutions',
      popular: false
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin Platform',
      category: 'it',
      description: 'Digital twin solutions for physical assets and processes',
      features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Analytics', 'Simulation'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/services/digital-twin',
      popular: false
    },
    {
      id: 'green-it',
      name: 'Green IT Solutions',
      category: 'it',
      description: 'Sustainable IT solutions for environmental responsibility',
      features: ['Energy Optimization', 'Carbon Footprint', 'Sustainable Hardware', 'Green Cloud'],
      pricing: { monthly: 149, yearly: 1499, enterprise: 'Custom' },
      icon: Globe,
      link: '/services/green-it',
      popular: false
    },
    {
      id: 'healthcare-tech',
      name: 'Healthcare Technology Solutions',
      category: 'it',
      description: 'Technology solutions for healthcare industry',
      features: ['Patient Management', 'Telemedicine', 'Data Security', 'Compliance'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Users,
      link: '/services/healthcare-tech',
      popular: false
    },
    {
      id: 'incident-response',
      name: 'Incident Response Platform',
      category: 'security',
      description: 'Comprehensive incident response and management',
      features: ['Alert Management', 'Response Automation', 'Forensics', 'Reporting'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/incident-response-platform',
      popular: false
    },
    {
      id: 'soc2-compliance',
      name: 'SOC2 Compliance Tracker',
      category: 'security',
      description: 'SOC2 compliance monitoring and management',
      features: ['Compliance Monitoring', 'Audit Trails', 'Risk Assessment', 'Reporting'],
      pricing: { monthly: 149, yearly: 1499, enterprise: 'Custom' },
      icon: Lock,
      link: '/services/soc2-compliance-tracker',
      popular: false
    },
    {
      id: 'smart-contract-risk',
      name: 'Smart Contract Risk Scanner',
      category: 'security',
      description: 'Blockchain smart contract security and risk assessment',
      features: ['Code Analysis', 'Vulnerability Detection', 'Risk Scoring', 'Compliance'],
      pricing: { monthly: 99, yearly: 999, enterprise: 'Custom' },
      icon: Code,
      link: '/services/smart-contract-risk-scanner',
      popular: false
    },
    {
      id: 'zero-trust-architecture',
      name: 'Zero Trust Network Architecture',
      category: 'security',
      description: 'Zero trust security framework implementation',
      features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Monitoring'],
      pricing: { monthly: 249, yearly: 2499, enterprise: 'Custom' },
      link: '/services/zero-trust-network-architecture',
      popular: false
    },
    {
      id: 'uptime-sla-monitor',
      name: 'Uptime SLA Monitor',
      category: 'it',
      description: 'Service level agreement monitoring and reporting',
      features: ['Uptime Tracking', 'Performance Monitoring', 'Alert Management', 'Reporting'],
      pricing: { monthly: 49, yearly: 499, enterprise: 'Custom' },
      icon: BarChart3,
      link: '/services/uptime-sla-monitor',
      popular: false
    },
    {
      id: 'vendor-risk-management',
      name: 'Vendor Risk Management Platform',
      category: 'security',
      description: 'Third-party vendor risk assessment and management',
      features: ['Risk Assessment', 'Compliance Monitoring', 'Due Diligence', 'Reporting'],
      pricing: { monthly: 79, yearly: 799, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/vendor-risk-management',
      popular: false
    },
    {
      id: 'ai-auto-email-responder',
      name: 'AI Auto Email Responder',
      category: 'ai',
      description: 'Intelligent email automation and response system',
      features: ['Email Classification', 'Auto Responses', 'Sentiment Analysis', 'Analytics'],
      pricing: { monthly: 39, yearly: 399, enterprise: 'Custom' },
      icon: Mail,
      link: '/services/ai-auto-email-responder',
      popular: false
    },
    {
      id: 'ai-content-optimizer-pro',
      name: 'AI Content Optimizer Pro',
      category: 'ai',
      description: 'Advanced content optimization with AI insights',
      features: ['SEO Optimization', 'Readability Analysis', 'Content Scoring', 'A/B Testing'],
      pricing: { monthly: 59, yearly: 599, enterprise: 'Custom' },
      icon: FileText,
      link: '/services/ai-content-optimizer-pro',
      popular: false
    },
    {
      id: 'ai-cybersecurity-threat-detection',
      name: 'AI Cybersecurity Threat Detection',
      category: 'security',
      description: 'Advanced threat detection using artificial intelligence',
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Threat Intelligence', 'Response Automation'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-threat-detection',
      popular: false
    },
    {
      id: 'finops-advisor',
      name: 'FinOps Advisor Platform',
      category: 'it',
      description: 'Financial operations optimization for cloud and IT',
      features: ['Cost Optimization', 'Budget Management', 'Resource Allocation', 'ROI Analysis'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: BarChart3,
      link: '/services/finops-advisor',
      popular: false
    },
    {
      id: 'space-tech',
      name: 'Space Technology Solutions',
      category: 'it',
      description: 'Innovative solutions for space industry applications',
      features: ['Satellite Data', 'Space Analytics', 'Mission Planning', 'Research Support'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Rocket,
      link: '/services/space-tech',
      popular: false
    },
    {
      id: 'sustainability',
      name: 'Sustainability Analytics Platform',
      category: 'analytics',
      description: 'Environmental impact measurement and optimization',
      features: ['Carbon Tracking', 'ESG Reporting', 'Sustainability Metrics', 'Goal Setting'],
      pricing: { monthly: 99, yearly: 999, enterprise: 'Custom' },
      icon: Globe,
      link: '/services/sustainability',
      popular: false
    }
  ];

  // Calculate category counts
  useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = allServices.length;
      } else {
        cat.count = allServices.filter(service => service.category === cat.id).length;
      }
    });
  }, []);

  const filteredServices = allServices.filter(service => {
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
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Services Showcase 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Discover our complete portfolio of AI-powered solutions, IT services, and innovative micro SAAS platforms designed to transform your business
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">{allServices.length}+ Services</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">AI-Powered Solutions</span>
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
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      ? 'bg-blue-600 text-white'
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
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Starting at</div>
                  <div className="text-2xl font-bold text-white">
                    ${service.pricing.monthly}
                    <span className="text-sm text-gray-400">/mo</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-xs text-gray-300 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="bg-white/10 text-xs text-gray-300 px-2 py-1 rounded-full">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Yearly</div>
                  <div className="text-lg font-semibold text-white">
                    ${service.pricing.yearly}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get in touch with our team to discuss your specific needs and discover how our innovative solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
          <div className="mt-6 text-blue-100">
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

export default ComprehensiveServicesShowcase2025;
