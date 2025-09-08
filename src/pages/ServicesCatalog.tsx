import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Workflow, 
  Atom, 
  Network, 
  Cpu, 
  Cloud, 
  Lock, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  FileText, 
  Target, 
  Rocket, 
  Star, 
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid3X3,
  List,
  Globe,
  Server,
  Database,
  Monitor,
  Smartphone,
  Code,
  Palette,
  Lightbulb,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Eye,
  Settings,
  PenTool,
  Building2,
  Handshake,
  Briefcase,
  GraduationCap,
  Video,
  FileText as FileTextIcon,
  HelpCircle,
  BarChart3 as BarChart3Icon
} from 'lucide-react';

export default function ServicesCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'category' | 'popularity'>('popularity');

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3, count: 50, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain, count: 15, color: 'from-purple-500 to-pink-500' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 12, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 8, color: 'from-red-500 to-pink-500' },
    { id: 'data-analytics', name: 'Data & Analytics', icon: BarChart3, count: 10, color: 'from-green-500 to-emerald-500' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, count: 5, color: 'from-violet-500 to-purple-500' }
  ];

  const allServices = [
    // AI & Automation Services
    {
      id: 'ai-enterprise-automation',
      name: 'AI Enterprise Automation Platform',
      category: 'ai-automation',
      description: 'Comprehensive automation platform for enterprise business processes',
      features: ['Process automation', 'Workflow optimization', 'Intelligent routing', 'Performance analytics'],
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-enterprise-automation-platform',
      popularity: 95,
      pricing: 'Starting from $2,500/month',
      delivery: '4-8 weeks'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Platform',
      category: 'ai-automation',
      description: 'Advanced analytics platform powered by machine learning',
      features: ['Predictive analytics', 'Real-time insights', 'Data visualization', 'Custom dashboards'],
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-data-analytics-platform',
      popularity: 92,
      pricing: 'Starting from $1,800/month',
      delivery: '3-6 weeks'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'Next-generation security with AI-powered threat detection',
      features: ['Threat detection', 'Behavioral analysis', 'Incident response', 'Compliance monitoring'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      link: '/services/ai-cybersecurity-platform',
      popularity: 98,
      pricing: 'Starting from $3,200/month',
      delivery: '6-10 weeks'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Platform',
      category: 'ai-automation',
      description: 'AI solutions for healthcare analytics and patient care',
      features: ['Patient analytics', 'Diagnostic support', 'Treatment optimization', 'Health monitoring'],
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      link: '/services/ai-healthcare-platform',
      popularity: 89,
      pricing: 'Starting from $4,500/month',
      delivery: '8-12 weeks'
    },
    {
      id: 'ai-quantum-hybrid',
      name: 'AI Quantum Hybrid Platform',
      category: 'quantum-computing',
      description: 'Hybrid AI platform combining classical and quantum computing',
      features: ['Quantum algorithms', 'Hybrid optimization', 'Quantum ML', 'Performance scaling'],
      icon: Atom,
      color: 'from-violet-500 to-purple-500',
      link: '/services/ai-quantum-hybrid-platform',
      popularity: 87,
      pricing: 'Starting from $8,500/month',
      delivery: '12-16 weeks'
    },
    {
      id: 'ai-autonomous-research',
      name: 'AI Autonomous Research Assistant',
      category: 'ai-automation',
      description: 'Autonomous AI system for research and development',
      features: ['Literature review', 'Hypothesis generation', 'Data analysis', 'Report generation'],
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      link: '/services/ai-autonomous-research-assistant',
      popularity: 84,
      pricing: 'Starting from $2,800/month',
      delivery: '6-10 weeks'
    },
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading Platform',
      category: 'ai-automation',
      description: 'AI-powered platform for financial trading and analysis',
      features: ['Market analysis', 'Risk assessment', 'Portfolio optimization', 'Trading signals'],
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/ai-financial-trading-platform',
      popularity: 91,
      pricing: 'Starting from $5,500/month',
      delivery: '10-14 weeks'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      category: 'ai-automation',
      description: 'Intelligent optimization for supply chain management',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Cost reduction'],
      icon: Network,
      color: 'from-cyan-500 to-blue-500',
      link: '/services/ai-supply-chain-optimization',
      popularity: 86,
      pricing: 'Starting from $3,800/month',
      delivery: '8-12 weeks'
    },
    {
      id: 'ai-content-creation',
      name: 'AI Content Creation Studio',
      category: 'ai-automation',
      description: 'AI-powered content creation and management platform',
      features: ['Content generation', 'SEO optimization', 'Brand consistency', 'Performance tracking'],
      icon: PenTool,
      color: 'from-pink-500 to-rose-500',
      link: '/services/ai-content-creation-studio',
      popularity: 82,
      pricing: 'Starting from $1,200/month',
      delivery: '4-6 weeks'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'data-analytics',
      description: 'Advanced BI platform with AI-powered insights',
      features: ['Data integration', 'Smart dashboards', 'Predictive insights', 'Actionable recommendations'],
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      link: '/services/ai-business-intelligence',
      popularity: 88,
      pricing: 'Starting from $2,200/month',
      delivery: '6-8 weeks'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience Analytics',
      category: 'data-analytics',
      description: 'Comprehensive customer experience analysis platform',
      features: ['Customer journey mapping', 'Sentiment analysis', 'Behavioral insights', 'Personalization'],
      icon: Eye,
      color: 'from-teal-500 to-green-500',
      link: '/services/ai-customer-experience-analytics-platform',
      popularity: 85,
      pricing: 'Starting from $2,800/month',
      delivery: '6-10 weeks'
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      category: 'ai-automation',
      description: 'AI assistant for sales teams and customer engagement',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automated follow-ups'],
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500',
      link: '/services/ai-sales-copilot',
      popularity: 83,
      pricing: 'Starting from $1,500/month',
      delivery: '4-6 weeks'
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      category: 'cybersecurity',
      description: 'AI-powered compliance monitoring and reporting',
      features: ['Regulatory tracking', 'Risk assessment', 'Audit automation', 'Compliance reporting'],
      icon: CheckCircle,
      color: 'from-lime-500 to-green-500',
      link: '/services/ai-compliance-assistant',
      popularity: 90,
      pricing: 'Starting from $2,500/month',
      delivery: '6-8 weeks'
    },
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing Solutions',
      category: 'quantum-computing',
      description: 'Quantum computing solutions for AI applications',
      features: ['Quantum algorithms', 'Quantum ML', 'Optimization problems', 'Research support'],
      icon: Cpu,
      color: 'from-purple-500 to-violet-500',
      link: '/services/ai-quantum-computing-solutions',
      popularity: 79,
      pricing: 'Starting from $6,500/month',
      delivery: '12-16 weeks'
    },
    {
      id: 'ai-enterprise-intelligence',
      name: 'AI Enterprise Intelligence Platform',
      category: 'data-analytics',
      description: 'Comprehensive enterprise intelligence platform',
      features: ['Data unification', 'AI insights', 'Decision support', 'Performance monitoring'],
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/ai-enterprise-intelligence-platform',
      popularity: 87,
      pricing: 'Starting from $4,200/month',
      delivery: '8-12 weeks'
    },
    {
      id: 'ai-autonomous-business',
      name: 'AI Autonomous Business Operations',
      category: 'ai-automation',
      description: 'Fully autonomous business operations platform',
      features: ['Process automation', 'Decision making', 'Resource optimization', 'Continuous learning'],
      icon: Rocket,
      color: 'from-rose-500 to-pink-500',
      link: '/services/ai-autonomous-business-operations-platform',
      popularity: 81,
      pricing: 'Starting from $7,500/month',
      delivery: '12-18 weeks'
    },
    {
      id: 'ai-quantum-neural',
      name: 'AI Quantum Neural Network Platform',
      category: 'quantum-computing',
      description: 'Quantum neural networks for advanced AI applications',
      features: ['Quantum neural networks', 'Hybrid learning', 'Quantum advantage', 'Scalable architecture'],
      icon: Atom,
      color: 'from-violet-500 to-purple-500',
      link: '/services/ai-quantum-neural-network-platform',
      popularity: 76,
      pricing: 'Starting from $9,500/month',
      delivery: '16-20 weeks'
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics Platform',
      category: 'data-analytics',
      description: 'Advanced analytics for healthcare data and insights',
      features: ['Patient analytics', 'Clinical insights', 'Population health', 'Predictive medicine'],
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/ai-healthcare-analytics-platform',
      popularity: 86,
      pricing: 'Starting from $3,800/month',
      delivery: '8-12 weeks'
    },
    {
      id: 'blockchain-enterprise',
      name: 'Blockchain Enterprise Solutions',
      category: 'cybersecurity',
      description: 'Enterprise blockchain solutions with AI integration',
      features: ['Smart contracts', 'Supply chain tracking', 'Identity management', 'Financial services'],
      icon: Network,
      color: 'from-amber-500 to-orange-500',
      link: '/services/blockchain-enterprise-solutions',
      popularity: 78,
      pricing: 'Starting from $4,800/month',
      delivery: '10-14 weeks'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      category: 'cloud-devops',
      description: 'AI-powered edge computing for IoT and real-time applications',
      features: ['Real-time processing', 'Low latency', 'IoT integration', 'Distributed AI'],
      icon: Cpu,
      color: 'from-slate-500 to-gray-500',
      link: '/services/edge-computing-solutions',
      popularity: 80,
      pricing: 'Starting from $2,800/month',
      delivery: '6-10 weeks'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Services',
      category: 'cloud-devops',
      description: 'Comprehensive cloud infrastructure and DevOps automation',
      features: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging'],
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/cloud-devops',
      popularity: 93,
      pricing: 'Starting from $1,800/month',
      delivery: '4-8 weeks'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'cybersecurity',
      description: 'End-to-end cybersecurity solutions and consulting',
      features: ['Security audits', 'Penetration testing', 'Incident response', 'Security training'],
      icon: Lock,
      color: 'from-red-500 to-pink-500',
      link: '/services/cybersecurity',
      popularity: 94,
      pricing: 'Starting from $2,200/month',
      delivery: '2-6 weeks'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Management',
      category: 'cloud-devops',
      description: 'Comprehensive IT infrastructure management and optimization',
      features: ['Infrastructure design', 'Performance optimization', 'Capacity planning', 'Disaster recovery'],
      icon: Server,
      color: 'from-gray-500 to-slate-500',
      link: '/services/it-infrastructure-management',
      popularity: 89,
      pricing: 'Starting from $2,500/month',
      delivery: '6-10 weeks'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      category: 'ai-automation',
      description: 'End-to-end digital transformation consulting and implementation',
      features: ['Strategy development', 'Process redesign', 'Technology implementation', 'Change management'],
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      link: '/services/digital-transformation',
      popularity: 91,
      pricing: 'Starting from $5,500/month',
      delivery: '12-24 weeks'
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS Solutions',
      category: 'ai-automation',
      description: 'Custom micro SaaS applications for business automation',
      features: ['Custom development', 'SaaS architecture', 'Subscription management', 'Analytics & reporting'],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      link: '/services/micro-saas-solutions-comprehensive',
      popularity: 85,
      pricing: 'Starting from $3,200/month',
      delivery: '8-16 weeks'
    }
  ];

  const filteredServices = allServices
    .filter(service => 
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'popularity':
        default:
          return b.popularity - a.popularity;
      }
    });

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.color || 'from-gray-500 to-slate-500';
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || 'Other';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <div className="bg-zinc-800/50 border-b border-zinc-700/50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-6">
              <BookOpen className="w-10 h-10 text-zion-cyan" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Services <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Catalog</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Explore our comprehensive catalog of technology services. From AI and automation to cloud infrastructure 
              and cybersecurity, we offer solutions for every business need.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zinc-600 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="ml-2 px-2 py-1 bg-zinc-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-zinc-700/50 border border-zinc-600 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'category' | 'popularity')}
                className="px-4 py-2 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-zinc-400">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>

        {/* Services Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="group relative"
                >
                  <Link to={service.link}>
                    <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 h-full hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-zinc-700/50 rounded-full text-xs text-zinc-300">
                            {getCategoryName(service.category)}
                          </span>
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-xs ml-1">{service.popularity}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                        {service.name}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-zinc-300">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-zinc-700/50 pt-4">
                        <div className="flex items-center justify-between text-sm text-zinc-400 mb-3">
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {service.pricing}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.delivery}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                          <span className="text-sm font-medium">Explore Service</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="group"
                >
                  <Link to={service.link}>
                    <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
                      <div className="flex items-start space-x-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors">
                              {service.name}
                            </h3>
                            <div className="flex items-center space-x-3">
                              <span className="px-3 py-1 bg-zinc-700/50 rounded-full text-sm text-zinc-300">
                                {getCategoryName(service.category)}
                              </span>
                              <div className="flex items-center text-yellow-400">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm ml-1">{service.popularity}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-zinc-400 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium text-zinc-300 mb-2">Key Features:</h4>
                              <div className="space-y-1">
                                {service.features.slice(0, 3).map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-zinc-400">
                                    <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-zinc-300 mb-2">Service Details:</h4>
                              <div className="space-y-2 text-sm text-zinc-400">
                                <div className="flex items-center">
                                  <DollarSign className="w-4 h-4 mr-2" />
                                  {service.pricing}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2" />
                                  Delivery: {service.delivery}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                            <span className="font-medium">Learn More</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? Our team can create custom solutions 
            tailored to your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

