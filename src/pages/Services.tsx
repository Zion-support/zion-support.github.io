import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEOOptimizer } from '../components/SEOOptimizer';
import {
  Brain,
  Zap,
  Shield,
  Cloud,
  Server,
  Code,
  TrendingUp,
  Users,
  Target,
  Rocket,
  Lightbulb,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid,
  List,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  BarChart3,
  Workflow,
  Cpu,
  Database,
  Network,
  Activity,
  Monitor,
  Smartphone,
  Globe,
  Truck,
  PenTool,
  FileText,
  Image,
  Video,
  Search as SearchIcon,
  Palette,
  GitBranch,
  TestTube,
  Deploy,
  Scale,
  Lock,
  Key,
  RefreshCw,
  Play,
  Pause,
  Stop,
  AlertTriangle,
  Info,
  CheckCircle2,
  XCircle,
  Calendar,
  PieChart,
  LineChart,
  Target2,
  UserCheck,
  UserX,
  Wifi,
  Bluetooth,
  HardDrive,
  MemoryStick,
  Router,
  Switch,
  Hub,
  Terminal,
  Command,
  Shell,
  TerminalSquare,
  Code2,
  Brackets,
  Braces,
  Parentheses,
  Hash,
  AtSign,
  Percent,
  Plus,
  Minus,
  Divide,
  X,
  Equal,
  NotEqual,
  LessThan,
  GreaterThan,
  LessThanOrEqual,
  GreaterThanOrEqual,
  Infinity,
  Pi,
  Sigma,
  Omega,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Atom
} from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Automation', icon: <Brain className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { id: 'security', name: 'Security & Compliance', icon: <Shield className="w-4 h-4" /> },
    { id: 'devops', name: 'DevOps & Development', icon: <Code className="w-4 h-4" /> },
    { id: 'specialized', name: 'Specialized Solutions', icon: <Target className="w-4 h-4" /> }
  ];

  const services = [
    // AI & Automation Services
    {
<<<<<<< HEAD
      id: 'ai-autonomous-business-operations',
      title: 'AI Autonomous Business Operations Platform',
      description: 'Revolutionary AI platform that autonomously manages and optimizes entire business operations.',
      category: 'ai',
      icon: <Brain className="w-8 h-8" />,
      price: '$8,999/month',
      features: ['Autonomous decision making', 'Process optimization', 'Real-time analytics', 'Predictive insights'],
      link: '/services/ai-autonomous-business-operations-platform',
      popular: true
    },
    {
      id: 'ai-enterprise-intelligence',
      title: 'AI Enterprise Intelligence Platform',
      description: 'Comprehensive AI platform that transforms enterprise data into actionable intelligence.',
      category: 'ai',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$6,999/month',
      features: ['Data analytics', 'Business intelligence', 'Predictive modeling', 'Real-time insights'],
      link: '/services/ai-enterprise-intelligence-platform'
    },
    {
      id: 'ai-content-marketing-studio',
      title: 'AI Content Marketing Studio',
      description: 'AI-powered content creation platform that generates, optimizes, and distributes high-quality content.',
      category: 'ai',
      icon: <PenTool className="w-8 h-8" />,
      price: '$4,999/month',
      features: ['AI content generation', 'Multi-format content', 'SEO optimization', 'Performance analytics'],
      link: '/services/ai-content-marketing-studio',
      new: true
    },
    {
      id: 'ai-autonomous-logistics',
      title: 'AI Autonomous Logistics Platform',
      description: 'Intelligent logistics platform that autonomously optimizes routes, manages fleets, and streamlines supply chains.',
      category: 'ai',
      icon: <Truck className="w-8 h-8" />,
      price: '$5,999/month',
      features: ['Route optimization', 'Fleet management', 'Inventory management', 'Supply chain visibility'],
      link: '/services/ai-autonomous-logistics-platform',
      new: true
    },
    {
      id: 'ai-devops-automation',
      title: 'AI DevOps Automation Platform',
      description: 'AI-powered DevOps platform that streamlines CI/CD, testing, and infrastructure management.',
      category: 'devops',
      icon: <Cpu className="w-8 h-8" />,
      price: '$7,999/month',
      features: ['CI/CD automation', 'Testing automation', 'Security scanning', 'Infrastructure scaling'],
      link: '/services/ai-devops-automation-platform',
      new: true
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Management Platform',
      description: 'Intelligent project management with AI-powered planning, execution, and optimization.',
      category: 'ai',
      icon: <Workflow className="w-8 h-8" />,
      price: '$3,999/month',
      features: ['AI planning', 'Resource optimization', 'Risk assessment', 'Performance tracking'],
      link: '/services/ai-project-management-platform'
    },
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Advanced workflow automation that intelligently orchestrates complex business processes.',
      category: 'ai',
      icon: <Workflow className="w-8 h-8" />,
      price: '$4,999/month',
      features: ['Process automation', 'Intelligent routing', 'Performance optimization', 'Real-time monitoring'],
      link: '/services/ai-workflow-orchestrator'
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights and analytics.',
      category: 'ai',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$3,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      link: '/services/ai-business-intelligence-dashboard'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer support platform that automates responses and improves customer experience.',
      category: 'ai',
      icon: <Users className="w-8 h-8" />,
      price: '$2,999/month',
      features: ['Automated responses', 'Intelligent routing', 'Sentiment analysis', 'Performance tracking'],
      link: '/services/ai-customer-support-automation'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Platform',
      description: 'Advanced marketing automation with AI-powered targeting and optimization.',
      category: 'ai',
      icon: <Target className="w-8 h-8" />,
      price: '$4,999/month',
      features: ['Campaign automation', 'AI targeting', 'Performance optimization', 'Multi-channel integration'],
      link: '/services/ai-marketing-automation-platform'
    },
    {
      id: 'ai-predictive-maintenance',
      title: 'AI Predictive Maintenance',
      description: 'AI-powered predictive maintenance that prevents equipment failures and optimizes operations.',
      category: 'ai',
      icon: <Activity className="w-8 h-8" />,
      price: '$3,999/month',
      features: ['Failure prediction', 'Maintenance scheduling', 'Performance monitoring', 'Cost optimization'],
      link: '/services/ai-predictive-maintenance'
    },
    {
      id: 'ai-hr-platform',
      title: 'AI HR Management Platform',
      description: 'Intelligent HR platform that automates recruitment, performance management, and employee engagement.',
      category: 'ai',
      icon: <Users className="w-8 h-8" />,
      price: '$3,999/month',
      features: ['Recruitment automation', 'Performance tracking', 'Employee engagement', 'Analytics dashboard'],
      link: '/services/ai-hr-platform'
    },
    {
      id: 'ai-financial-trading',
      title: 'AI Financial Trading Platform',
      description: 'Advanced AI-powered trading platform with real-time analysis and automated decision making.',
      category: 'ai',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$8,999/month',
      features: ['Real-time analysis', 'Automated trading', 'Risk management', 'Performance tracking'],
      link: '/services/ai-financial-trading-platform'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Platform',
      description: 'Next-generation cybersecurity with AI-powered threat detection and automated response.',
      category: 'security',
      icon: <Shield className="w-8 h-8" />,
      price: '$6,999/month',
      features: ['Threat detection', 'Automated response', 'Compliance monitoring', 'Real-time protection'],
      link: '/services/ai-cybersecurity-platform'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'AI-powered healthcare analytics that improves patient outcomes and operational efficiency.',
      category: 'ai',
      icon: <Activity className="w-8 h-8" />,
      price: '$5,999/month',
      features: ['Patient analytics', 'Operational insights', 'Predictive modeling', 'Compliance tracking'],
      link: '/services/ai-healthcare-analytics-platform'
    },
    {
      id: 'ai-legal-document',
      title: 'AI Legal Document Automation',
      description: 'Intelligent legal document automation that streamlines contract creation and management.',
      category: 'ai',
      icon: <FileText className="w-8 h-8" />,
      price: '$4,999/month',
      features: ['Document generation', 'Contract analysis', 'Compliance checking', 'Workflow automation'],
      link: '/services/ai-legal-document-automation-platform'
    },
    {
      id: 'ai-sales-copilot',
      title: 'AI Sales Copilot',
      description: 'AI-powered sales assistant that enhances sales performance and customer engagement.',
      category: 'ai',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$2,999/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Performance optimization'],
      link: '/services/ai-sales-copilot'
    },
    {
      id: 'ai-compliance-assistant',
      title: 'AI Compliance Assistant',
      description: 'Intelligent compliance platform that automates regulatory monitoring and reporting.',
      category: 'security',
      icon: <Shield className="w-8 h-8" />,
      price: '$4,999/month',
      features: ['Regulatory monitoring', 'Automated reporting', 'Risk assessment', 'Compliance tracking'],
      link: '/services/ai-compliance-assistant'
    },
    {
      id: 'cloud-finops-optimizer',
      title: 'Cloud FinOps Optimizer',
      description: 'AI-powered cloud cost optimization that reduces expenses and improves resource utilization.',
      category: 'cloud',
      icon: <Cloud className="w-8 h-8" />,
      price: '$3,999/month',
      features: ['Cost optimization', 'Resource management', 'Performance monitoring', 'Automated scaling'],
      link: '/services/cloud-finops-optimizer'
    },
    {
      id: 'quantum-edge-computing',
      title: 'Quantum Edge Computing Solutions',
      description: 'Cutting-edge quantum computing solutions for complex optimization problems.',
      category: 'cloud',
      icon: <Atom className="w-8 h-8" />,
      price: '$12,999/month',
      features: ['Quantum algorithms', 'Edge computing', 'Real-time processing', 'Advanced optimization'],
      link: '/services/quantum-edge-computing-solutions'
    },
    {
      id: 'blockchain-enterprise',
      title: 'Blockchain Enterprise Solutions',
      description: 'Enterprise-grade blockchain solutions for secure and transparent business operations.',
      category: 'security',
      icon: <Network className="w-8 h-8" />,
      price: '$7,999/month',
      features: ['Smart contracts', 'Supply chain tracking', 'Digital identity', 'Secure transactions'],
      link: '/services/blockchain-enterprise-solutions'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure management with monitoring and optimization.',
      category: 'cloud',
      icon: <Server className="w-8 h-8" />,
      price: '$4,999/month',
      features: ['Infrastructure monitoring', 'Performance optimization', 'Automated management', '24/7 support'],
      link: '/services/it-infrastructure-management'

    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const seoData = {
    title: "Comprehensive AI & Technology Services | Zion Tech Group",
    description: "Explore our complete portfolio of AI-powered services, cloud solutions, cybersecurity, and specialized technology solutions. Transform your business with cutting-edge innovation.",
    keywords: "AI services, technology solutions, cloud computing, cybersecurity, DevOps automation, business intelligence, Zion Tech Group",
    url: "https://ziontechgroup.com/services"
  };

  return (
    <>
      <SEOOptimizer {...seoData} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Zap className="w-4 h-4 mr-2" />
                Comprehensive Technology Solutions
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our Complete
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Services</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-purple to-zion-cyan">Portfolio</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered services, cloud solutions, and cutting-edge technology 
                that transforms businesses and drives innovation across industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (302) 464-0950
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-zion-cyan/30 rounded-full blur-lg animate-pulse delay-500"></div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-zion-cyan text-white border-zion-cyan'
                        : 'bg-zion-slate-dark text-zion-slate-light border-zion-purple/20 hover:border-zion-cyan/50'
                    }`}
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate-light/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate-light/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                {filteredServices.length} Services Available
              </h2>
              <p className="text-xl text-zion-slate-light">
                Find the perfect solution for your business needs
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-xs font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    {service.new && (
                      <div className="absolute -top-3 right-6">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          New
                        </span>
                      </div>
                    )}
                    
                    <div className="text-zion-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">
                        {service.price}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        Starting price
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                      <div className="text-zion-cyan group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-zion-slate-light leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                          
                          <div className="lg:text-right">
                            <div className="text-2xl font-bold text-zion-cyan">
                              {service.price}
                            </div>
                            <div className="text-sm text-zion-slate-light">
                              Starting price
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Link
                            to={service.link}
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 group-hover:scale-105 whitespace-nowrap"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Our team of experts is ready to help you choose the right services and implement solutions 
                that drive real business value. Get started with a free consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (302) 464-0950
                </motion.button>
              </div>
              
              <div className="mt-8 text-zion-slate-light">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>📧 kleber@ziontechgroup.com</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
