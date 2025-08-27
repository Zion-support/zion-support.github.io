import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Workflow, 
  Database, 
  Lock, 
  Eye,
  Target,
  TrendingUp,
  MessageCircle,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Cpu,
  Network,
  Bot,
  Settings,
  FileText,
  Search,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  Heart,
  Activity,
  ShoppingCart,
  Rocket,
  Sparkles,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function NewServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'automation', name: 'Automation', icon: Workflow },
    { id: 'data', name: 'Data', icon: Database }
  ];

  const services = [
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation with AI-powered optimization and process management',
      category: 'ai',
      icon: Workflow,
      color: 'from-cyan-500 to-blue-500',
      price: 'From $99/month',
      features: ['AI-powered optimization', 'Visual workflow designer', 'Automated execution', 'Smart analytics'],
      link: '/services/ai-workflow-orchestrator',
      popular: true
    },
    {
      id: 'ai-data-governance',
      title: 'AI Data Governance Platform',
      description: 'Comprehensive data governance with AI-powered compliance monitoring and security',
      category: 'data',
      icon: Shield,
      color: 'from-green-500 to-blue-500',
      price: 'From $199/month',
      features: ['AI discovery', 'Compliance monitoring', 'Access control', 'Data lineage'],
      link: '/services/ai-data-governance-platform',
      popular: false
    },
    {
      id: 'ai-customer-analytics',
      title: 'AI Customer Experience Analytics',
      description: 'Deep customer insights with AI-powered sentiment analysis and predictive modeling',
      category: 'analytics',
      icon: Users,
      color: 'from-pink-500 to-purple-500',
      price: 'From $149/month',
      features: ['Sentiment analysis', 'Journey mapping', 'Predictive analytics', 'Real-time dashboards'],
      link: '/services/ai-customer-experience-analytics',
      popular: false
    },
    {
      id: 'ai-financial-analytics',
      title: 'AI Financial Analytics',
      description: 'Intelligent financial insights and risk management with machine learning',
      category: 'ai',
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      price: 'From $299/month',
      features: ['Risk assessment', 'Financial forecasting', 'Compliance monitoring', 'Performance analytics'],
      link: '/services/ai-financial-analytics',
      popular: false
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Smart marketing campaigns with AI-driven personalization and optimization',
      category: 'automation',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      price: 'From $199/month',
      features: ['Personalization engine', 'Campaign optimization', 'A/B testing', 'ROI tracking'],
      link: '/services/ai-marketing-automation',
      popular: false
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Management',
      description: 'Intelligent project planning and execution with AI-powered insights',
      category: 'ai',
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      price: 'From $179/month',
      features: ['Smart scheduling', 'Resource optimization', 'Risk prediction', 'Performance tracking'],
      link: '/services/ai-project-management',
      popular: false
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Automation',
      description: 'Automated customer support with intelligent routing and resolution',
      category: 'automation',
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-500',
      price: 'From $159/month',
      features: ['Intelligent routing', 'Auto-resolution', 'Sentiment analysis', '24/7 support'],
      link: '/services/ai-customer-support-automation',
      popular: false
    },
    {
      id: 'ai-code-review',
      title: 'AI Code Review Security Scanner',
      description: 'Automated code security analysis with AI-powered vulnerability detection',
      category: 'security',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      price: 'From $249/month',
      features: ['Vulnerability detection', 'Code quality analysis', 'Security compliance', 'Automated reviews'],
      link: '/services/ai-code-review-security-scanner',
      popular: false
    },
    {
      id: 'zero-trust-network',
      title: 'Zero Trust Network Access',
      description: 'Modern security architecture with continuous verification and access control',
      category: 'security',
      icon: Lock,
      color: 'from-purple-500 to-indigo-500',
      price: 'From $399/month',
      features: ['Continuous verification', 'Micro-segmentation', 'Identity management', 'Threat detection'],
      link: '/services/zero-trust-network-access',
      popular: false
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Analytics',
      description: 'Advanced business insights with AI-powered data analysis and visualization',
      category: 'analytics',
      icon: BarChart3,
      color: 'from-cyan-500 to-blue-500',
      price: 'From $349/month',
      features: ['Predictive analytics', 'Data visualization', 'Custom dashboards', 'Real-time insights'],
      link: '/services/ai-business-intelligence-analytics',
      popular: false
    },
    {
      id: 'ai-workflow-orchestrator-2',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation with AI-powered optimization and process management',
      category: 'automation',
      icon: Workflow,
      color: 'from-green-500 to-emerald-500',
      price: 'From $199/month',
      features: ['Process automation', 'AI optimization', 'Workflow design', 'Performance monitoring'],
      link: '/services/ai-workflow-orchestrator',
      popular: false
    },
    {
      id: 'ai-data-governance-2',
      title: 'AI Data Governance Platform',
      description: 'Comprehensive data governance with AI-powered compliance monitoring and security',
      category: 'data',
      icon: Database,
      color: 'from-blue-500 to-indigo-500',
      price: 'From $299/month',
      features: ['Data cataloging', 'Policy enforcement', 'Audit trails', 'Compliance reporting'],
      link: '/services/ai-data-governance-platform',
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">2025 Innovation Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary AI &
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI-powered services and micro SAAS solutions designed to transform 
              your business operations and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered solutions designed for modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border ${
                  service.popular 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-600/50'
                } hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col space-y-3">
                  <Link
                    to={service.link}
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our AI-powered solutions can drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-sm">{contactInfo.address}</p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}