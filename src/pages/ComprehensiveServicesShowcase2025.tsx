<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  BarChart3,
  Zap,
  Server,
  Cloud,
  Atom,
  PenTool,
  Eye,
  Workflow,
  TrendingUp,
  Users,
  Target,
  MessageCircle,
  Heart,
  Star,
  CheckCircle,
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Database,
  Rocket,
  Leaf,
  Building,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Network,
  Clock,
>>>>>>> origin/main
  ArrowRight,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  Sparkles,
  Rocket,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  Globe,
  Cpu,
  Palette,
  Video,
  Music,
  FileText,
  Calendar,
  Award,
  Clock,
  DollarSign
=======
  ExternalLink,
  CheckCircle,
  Award,
  Target,
  Lightbulb,
  Sparkles,
  Eye,
  Heart,
  DollarSign,
  Calendar,
  Settings,
  Monitor,
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Shield as SecurityIcon,
  Zap as PerformanceIcon
>>>>>>> origin/main
} from 'lucide-react';
import { comprehensiveServices2025Enhanced, serviceCategories } from '../data/comprehensive-services-2025-enhanced';

<<<<<<< HEAD
const ComprehensiveServicesShowcase2025: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Automation Services',
      description: 'Revolutionary AI-powered solutions that transform business operations',
      icon: <Brain className="w-8 h-8" />,
      services: [
        {
          name: 'AI Enterprise Automation Platform',
          description: 'Comprehensive automation platform for enterprise operations and workflow optimization',
          href: '/services/ai-enterprise-automation-platform',
          features: ['Workflow orchestration', 'Process mining', 'RPA integration', 'Real-time analytics'],
          pricing: 'From $299/month',
          icon: <Workflow className="w-6 h-6" />
        },
        {
          name: 'AI Data Analytics Platform',
          description: 'Enterprise-grade AI-powered analytics for business intelligence and predictive insights',
          href: '/services/ai-data-analytics-platform',
          features: ['Predictive analytics', 'Real-time processing', 'Interactive dashboards', 'Data governance'],
          pricing: 'From $199/month',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'AI Business Intelligence',
          description: 'Advanced BI solutions with AI-powered insights and automated reporting',
          href: '/services/ai-business-intelligence',
          features: ['Automated insights', 'Custom dashboards', 'Real-time monitoring', 'Predictive modeling'],
          pricing: 'From $399/month',
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'AI Content Creation & Marketing',
      description: 'Cutting-edge content creation tools powered by artificial intelligence',
      icon: <PenTool className="w-8 h-8" />,
      services: [
        {
          name: 'AI Content Creation Studio',
          description: 'Revolutionary AI-powered platform for creating text, images, videos, and audio content',
          href: '/services/ai-content-creation-studio',
          features: ['AI text generation', 'Image creation', 'Video production', 'Audio synthesis'],
          pricing: 'From $99/month',
          icon: <Sparkles className="w-6 h-6" />
        },
        {
          name: 'AI Marketing Automation Platform',
          description: 'Intelligent marketing automation with AI-driven personalization and optimization',
          href: '/services/ai-marketing-automation-platform',
          features: ['Personalized campaigns', 'Behavioral targeting', 'A/B testing', 'ROI optimization'],
          pricing: 'From $199/month',
          icon: <Target className="w-6 h-6" />
        },
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent AI assistant that helps sales teams close more deals',
          href: '/services/ai-sales-copilot',
          features: ['Lead scoring', 'Sales forecasting', 'Email automation', 'Performance analytics'],
          pricing: 'From $49/month',
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'AI Customer Experience & Analytics',
      description: 'Advanced customer experience solutions with AI-powered insights',
      icon: <Eye className="w-8 h-8" />,
      services: [
        {
          name: 'AI Customer Experience Analytics Platform',
          description: 'Comprehensive analytics platform for understanding and optimizing customer experiences',
          href: '/services/ai-customer-experience-analytics-platform',
          features: ['Customer insights', 'Journey mapping', 'Sentiment analysis', 'Predictive behavior'],
          pricing: 'From $199/month',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'AI Customer Support Automation',
          description: 'Intelligent customer support with automated responses and human-like interactions',
          href: '/services/ai-customer-support-automation',
          features: ['24/7 support', 'Natural language processing', 'Ticket routing', 'Knowledge base'],
          pricing: 'From $149/month',
          icon: <MessageCircle className="w-6 h-6" />
        },
        {
          name: 'AI HR Management Platform',
          description: 'Comprehensive HR management with AI-powered recruitment and employee analytics',
          href: '/services/ai-hr-management-platform',
          features: ['Smart recruitment', 'Employee analytics', 'Performance tracking', 'Compliance management'],
          pricing: 'From $299/month',
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'AI Cybersecurity & Security',
      description: 'Next-generation security solutions powered by AI and quantum computing',
      icon: <Shield className="w-8 h-8" />,
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced AI-powered cybersecurity with real-time threat detection and response',
          href: '/services/ai-cybersecurity-platform',
          features: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Compliance reporting'],
          pricing: 'From $399/month',
          icon: <Lock className="w-6 h-6" />
        },
        {
          name: 'Quantum AI Cybersecurity Platform',
          description: 'Next-generation security combining quantum computing and AI for unbreakable protection',
          href: '/services/quantum-ai-cybersecurity-platform',
          features: ['Quantum encryption', 'AI threat detection', 'Post-quantum crypto', 'Zero-day prevention'],
          pricing: 'From $799/month',
          icon: <Atom className="w-6 h-6" />
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Intelligent compliance management with automated monitoring and reporting',
          href: '/services/ai-compliance-assistant',
          features: ['Regulatory monitoring', 'Automated reporting', 'Risk assessment', 'Audit trails'],
          pricing: 'From $199/month',
          icon: <CheckCircle className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud Solutions',
      description: 'Enterprise-grade infrastructure and cloud management services',
      icon: <Server className="w-8 h-8" />,
      services: [
        {
          name: 'IT Infrastructure Management',
          description: 'Comprehensive IT infrastructure management with 24/7 monitoring and optimization',
          href: '/services/it-infrastructure-management',
          features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Disaster recovery'],
          pricing: 'From $599/month',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Cloud & DevOps Solutions',
          description: 'Modern cloud infrastructure and DevOps practices for scalable applications',
          href: '/services/cloud-devops',
          features: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging'],
          pricing: 'From $399/month',
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization platform that reduces spending and improves resource utilization',
          href: '/services/cloud-finops-optimizer',
          features: ['Cost monitoring', 'Resource optimization', 'Budget management', 'Multi-cloud support'],
          pricing: 'From $99/month',
          icon: <DollarSign className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Quantum Computing & Emerging Tech',
      description: 'Cutting-edge quantum computing and emerging technology solutions',
      icon: <Atom className="w-8 h-8" />,
      services: [
        {
          name: 'AI Quantum Neural Network Platform',
          description: 'Revolutionary platform combining quantum computing and neural networks',
          href: '/services/ai-quantum-neural-network-platform',
          features: ['Quantum neural networks', 'AI acceleration', 'Quantum advantage', 'Research applications'],
          pricing: 'From $999/month',
          icon: <Brain className="w-6 h-6" />
        },
        {
          name: 'Quantum Edge Computing Solutions',
          description: 'Next-generation edge computing with quantum processing capabilities',
          href: '/services/quantum-edge-computing-solutions',
          features: ['Quantum edge processing', 'Low latency', 'Distributed computing', 'IoT integration'],
          pricing: 'From $699/month',
          icon: <Network className="w-6 h-6" />
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise-grade blockchain solutions for secure and transparent operations',
          href: '/services/blockchain-enterprise-solutions',
          features: ['Smart contracts', 'Supply chain tracking', 'Digital identity', 'DeFi solutions'],
          pricing: 'From $499/month',
          icon: <Globe className="w-6 h-6" />
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: '10x Faster Implementation',
      description: 'Our AI-powered solutions reduce implementation time from months to weeks'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '40-60% Cost Reduction',
      description: 'Significant cost savings through automation and optimization'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '99.9% Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA guarantees'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from our team of certified professionals'
=======
export function ComprehensiveServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredServices = comprehensiveServices2025Enhanced.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'category':
        return a.category.localeCompare(b.category);
      case 'popularity':
        return (b.badges.includes('Popular') ? 1 : 0) - (a.badges.includes('Popular') ? 1 : 0);
      default:
        return a.title.localeCompare(b.title);
>>>>>>> origin/main
    }
  ];

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return <Code className="w-6 h-6" />;
      case 'AI Solutions': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Digital Twin': return <Globe className="w-6 h-6" />;
      case 'Sustainable Tech': return <Leaf className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-blue-600 to-cyan-700';
      case 'AI Solutions': return 'from-purple-600 to-indigo-700';
      case 'IT Services': return 'from-green-600 to-emerald-700';
      case 'Digital Twin': return 'from-orange-600 to-red-700';
      case 'Sustainable Tech': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-600 to-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Services Showcase 2025
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-zion-cyan mb-4"
            >
              Comprehensive Services Showcase 2025
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Discover our complete portfolio of innovative micro SaaS, IT services, and AI solutions 
              designed to transform your business in 2025 and beyond. From AI-powered automation to 
              quantum computing solutions, we have everything you need to stay ahead of the competition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/pricing-guide"
                className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors text-lg"
              >
                View Pricing Guide
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
              >
                Call: +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive service portfolio delivers unmatched value, innovation, and results 
              for businesses of all sizes across every industry.
            </p>
=======
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Zion Tech Group
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionary AI, Micro SaaS, and IT Solutions for the Future
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
              AI-Powered Solutions
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
              Micro SaaS Platform
            </span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full border border-green-500/30">
              Enterprise IT Services
            </span>
            <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full border border-orange-500/30">
              Emerging Technologies
            </span>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-black/50 backdrop-blur-xl border-b border-cyan-500/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or capabilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters and Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map(category => (
                  <option key={category.slug} value={category.name}>{category.name}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
                <option value="popularity">Sort by Popularity</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-cyan-300">
              Showing {filteredServices.length} of {comprehensiveServices2025Enhanced.length} services
            </p>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row gap-6' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-sm text-gray-400">per {service.billing}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.shortDescription}</p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service Actions */}
                  <div className={`flex flex-col gap-3 ${viewMode === 'list' ? 'lg:w-64' : ''}`}>
                    <button
                      onClick={() => openServiceModal(service)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Details</span>
                    </button>
                    
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-cyan-500/30"
                    >
                      <span>{service.ctaLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Quick Info */}
                    <div className="bg-white/5 rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-medium">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-cyan-400 font-medium">{service.trialDays} days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup:</span>
                        <span className="text-cyan-400 font-medium">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-cyan-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-cyan-500/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(selectedService.category)}`}>
                        {getCategoryIcon(selectedService.category)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                        <p className="text-cyan-400">{selectedService.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Pricing and Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Pricing</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{selectedService.price}</div>
                    <div className="text-gray-400">per {selectedService.billing}</div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400">{selectedService.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-cyan-400">{selectedService.trialDays} days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup:</span>
                        <span className="text-cyan-400">{selectedService.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Market Position</h3>
                    <p className="text-gray-300 text-sm mb-3">{selectedService.marketPosition}</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-gray-400">Competitors:</span>
                        <div className="text-cyan-400 mt-1">{selectedService.competitors.join(', ')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.mobile}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features and Capabilities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Capabilities</h3>
                    <ul className="space-y-2">
                      {selectedService.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Benefits and Use Cases */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Use Cases</h3>
                    <ul className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <Target className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technology and Integrations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologyStack.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.integrations.map((integration, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Target Industries and Compliance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Target Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetIndustries.map((industry, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded border border-green-500/30">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Compliance & Security</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 mb-1">Compliance</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.compliance.map((compliance, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                              {compliance}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 mb-1">Security Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.security.map((security, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded border border-red-500/30">
                              {security}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scalability */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Scalability</h3>
                  <p className="text-gray-300">{selectedService.scalability}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-cyan-500/30 flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedService.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{selectedService.ctaLabel}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 text-gray-400 hover:text-white font-semibold border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-200 mb-8">
              Join hundreds of companies already leveraging Zion Tech Group's cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg border border-cyan-500/30"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
>>>>>>> origin/main
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category. Each service is designed 
              to work independently or integrate seamlessly with others for maximum business impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      className="bg-zion-blue-darker border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                          <p className="text-sm text-zion-slate-light">{service.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-xs text-zion-slate-light flex items-center">
                              <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-zion-slate-light">
                          Starting at: <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                        </div>
                      </div>

                      <Link
                        to={service.href}
                        className="w-full bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zion-cyan-light transition-colors text-center block"
                      >
                        Learn More
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-lg p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you implement the perfect combination of services 
                for your business needs. Get in touch today for a personalized consultation and demo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors text-lg"
                >
                  Get Started Today
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
                >
                  Call Now: +1 302 464 0950
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">50+</div>
                  <div className="text-zion-slate-light">Services Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-slate-light">Expert Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">30-Day</div>
                  <div className="text-zion-slate-light">Money Back Guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> origin/main

export default ComprehensiveServicesShowcase2025;
