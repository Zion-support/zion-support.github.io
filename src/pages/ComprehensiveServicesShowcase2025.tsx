import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Heart, 
  Zap, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Lock,
  Target,
  Rocket,
  Activity,
  Clock,
  Star,
  Eye,
  Network,
  Database,
  FileText,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Search,
  Filter,
  Grid,
  List,
  TrendingUp,
  DollarSign,
  Briefcase,
  Building,
  Factory,
  ShoppingCart,
  Truck,
  GraduationCap,
  Government
} from 'lucide-react';

const ComprehensiveServicesShowcase2025 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'healthcare', name: 'Healthcare Tech', icon: Heart, count: 0 },
    { id: 'fintech', name: 'Financial Technology', icon: DollarSign, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu, count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Smartphone, count: 0 },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Lock, count: 0 },
    { id: 'analytics', name: 'Data & Analytics', icon: BarChart3, count: 0 },
    { id: 'automation', name: 'Process Automation', icon: Activity, count: 0 },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Rocket, count: 0 }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-quantum-financial-trading',
      title: 'AI Quantum Financial Trading Platform',
      description: 'Revolutionary AI-powered trading platform with quantum computing integration. Increase trading accuracy by 40-60% and reduce risk by 70%.',
      category: 'ai-ml',
      pricing: '$999 - $4,999/month',
      features: ['AI Market Analysis', 'Quantum Computing', 'Risk Management', 'Global Markets'],
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      href: '/services/ai-quantum-financial-trading-platform',
      popular: true
    },
    {
      id: 'ai-cybersecurity-threat-intelligence',
      title: 'AI Cybersecurity Threat Intelligence Platform',
      description: 'Advanced AI-powered cybersecurity platform with real-time threat detection, automated response, and 99.9% accuracy.',
      category: 'cybersecurity',
      pricing: '$799 - $3,999/month',
      features: ['AI Threat Detection', 'Real-Time Monitoring', 'Automated Response', 'Compliance'],
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      href: '/services/ai-cybersecurity-threat-intelligence-platform',
      popular: true
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Revolutionary AI-powered healthcare analytics platform with predictive diagnostics, patient monitoring, and HIPAA compliance.',
      category: 'healthcare',
      pricing: '$1,299 - $7,999/month',
      features: ['AI Diagnosis Support', 'Patient Monitoring', 'Predictive Analytics', 'HIPAA Compliance'],
      icon: Heart,
      color: 'from-green-500 to-blue-600',
      href: '/services/ai-healthcare-analytics-platform',
      popular: true
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain optimization with AI-powered demand forecasting and automated inventory management.',
      category: 'ai-ml',
      pricing: '$299 - $2,999/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Optimization', 'Real-time Analytics'],
      icon: Truck,
      color: 'from-purple-500 to-pink-600',
      href: '/services/ai-supply-chain-optimization',
      popular: false
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Comprehensive AI-powered cybersecurity solution with advanced threat detection and automated response.',
      category: 'cybersecurity',
      pricing: '$599 - $2,999/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Analytics'],
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      href: '/services/ai-cybersecurity-platform',
      popular: false
    },
    {
      id: 'ai-healthcare-platform',
      title: 'AI Healthcare Platform',
      description: 'AI-powered healthcare platform with telemedicine, patient management, and clinical decision support.',
      category: 'healthcare',
      pricing: '$399 - $3,999/month',
      features: ['Telemedicine', 'Patient Management', 'Clinical Support', 'EHR Integration'],
      icon: Heart,
      color: 'from-green-500 to-teal-600',
      href: '/services/ai-healthcare-platform',
      popular: false
    },
    {
      id: 'ai-quantum-hybrid-platform',
      title: 'AI Quantum Hybrid Platform',
      description: 'Next-generation platform combining AI and quantum computing for complex problem solving.',
      category: 'quantum',
      pricing: '$1,999 - $9,999/month',
      features: ['Quantum Algorithms', 'AI Integration', 'High Performance', 'Scalable Architecture'],
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      href: '/services/ai-quantum-hybrid-platform',
      popular: false
    },
    {
      id: 'ai-quantum-neural-network',
      title: 'AI Quantum Neural Network Platform',
      description: 'Revolutionary quantum neural network platform for advanced AI applications and research.',
      category: 'quantum',
      pricing: '$2,499 - $12,999/month',
      features: ['Quantum Neural Networks', 'AI Research', 'Advanced Algorithms', 'Research Tools'],
      icon: Brain,
      color: 'from-violet-500 to-purple-600',
      href: '/services/ai-quantum-neural-network-platform',
      popular: false
    },
    {
      id: 'ai-autonomous-business-operations',
      title: 'AI Autonomous Business Operations Platform',
      description: 'Fully autonomous business operations platform with AI-driven decision making and process automation.',
      category: 'automation',
      pricing: '$1,499 - $6,999/month',
      features: ['Autonomous Operations', 'AI Decision Making', 'Process Automation', 'Business Intelligence'],
      icon: Activity,
      color: 'from-blue-500 to-cyan-600',
      href: '/services/ai-autonomous-business-operations-platform',
      popular: false
    },
    {
      id: 'ai-customer-experience-analytics',
      title: 'AI Customer Experience Analytics Platform',
      description: 'Advanced customer experience analytics with AI-powered insights and predictive modeling.',
      category: 'analytics',
      pricing: '$899 - $4,499/month',
      features: ['Customer Analytics', 'Predictive Modeling', 'Behavior Analysis', 'ROI Optimization'],
      icon: Users,
      color: 'from-teal-500 to-green-600',
      href: '/services/ai-customer-experience-analytics-platform',
      popular: false
    },
    // Additional Micro SaaS Services
    {
      id: 'ai-invoice-factoring',
      title: 'AI-Powered Invoice Factoring Platform',
      description: 'Automated invoice factoring with AI credit risk assessment and instant funding approval.',
      category: 'fintech',
      pricing: '$299 - $2,999/month',
      features: ['AI Credit Assessment', 'Instant Funding', 'Automated Collections', 'Risk Management'],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      href: '/services/ai-invoice-factoring-platform',
      popular: false
    },
    {
      id: 'crypto-payment-gateway',
      title: 'Crypto Payment Gateway SaaS',
      description: 'Enterprise-grade crypto payment gateway with 100+ cryptocurrency support and fraud protection.',
      category: 'fintech',
      pricing: '$199 - $1,999/month',
      features: ['100+ Cryptocurrencies', 'Instant Conversion', 'Fraud Protection', 'Global Markets'],
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      href: '/services/crypto-payment-gateway-saas',
      popular: false
    },
    {
      id: 'ai-expense-management',
      title: 'AI Expense Management Automation',
      description: 'Intelligent expense management with OCR and policy enforcement for enterprises.',
      category: 'automation',
      pricing: '$89 - $899/month',
      features: ['OCR Processing', 'AI Categorization', 'Policy Compliance', 'Automated Workflows'],
      icon: FileText,
      color: 'from-blue-500 to-indigo-600',
      href: '/services/ai-expense-management-automation',
      popular: false
    },
    {
      id: 'ai-telemedicine',
      title: 'AI Telemedicine Platform',
      description: 'Advanced telemedicine with AI symptom analysis and intelligent patient routing.',
      category: 'healthcare',
      pricing: '$399 - $3,999/month',
      features: ['AI Symptom Checker', 'Video Consultations', 'EHR Integration', 'Patient Routing'],
      icon: Heart,
      color: 'from-green-500 to-blue-600',
      href: '/services/ai-telemedicine-platform',
      popular: false
    },
    {
      id: 'ai-personalized-learning',
      title: 'AI Personalized Learning Platform',
      description: 'Intelligent learning platform with adaptive algorithms and personalized content delivery.',
      category: 'micro-saas',
      pricing: '$149 - $1,499/month',
      features: ['Adaptive Learning', 'Personalized Content', 'Progress Tracking', 'Analytics'],
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-600',
      href: '/services/ai-personalized-learning-platform',
      popular: false
    },
    {
      id: 'virtual-classroom',
      title: 'Virtual Classroom SaaS',
      description: 'Immersive online learning with 3D environments and interactive collaboration tools.',
      category: 'micro-saas',
      pricing: '$199 - $1,999/month',
      features: ['3D Environments', 'Interactive Tools', 'Real-time Collaboration', 'Virtual Reality'],
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      href: '/services/virtual-classroom-saas',
      popular: false
    },
    {
      id: 'ai-content-optimization',
      title: 'AI Content Optimization Engine',
      description: 'Intelligent content optimization with AI-powered suggestions and A/B testing.',
      category: 'ai-ml',
      pricing: '$179 - $1,799/month',
      features: ['Content Analytics', 'AI Optimization', 'A/B Testing', 'Performance Tracking'],
      icon: FileText,
      color: 'from-teal-500 to-blue-600',
      href: '/services/ai-content-optimization-engine',
      popular: false
    },
    {
      id: 'predictive-customer-segmentation',
      title: 'Predictive Customer Segmentation',
      description: 'AI-powered customer behavior prediction and dynamic segmentation for marketing.',
      category: 'analytics',
      pricing: '$249 - $2,499/month',
      features: ['Behavioral Analysis', 'Predictive Modeling', 'Dynamic Segmentation', 'Campaign Optimization'],
      icon: Target,
      color: 'from-pink-500 to-rose-600',
      href: '/services/predictive-customer-segmentation',
      popular: false
    },
    {
      id: 'ai-project-resource-optimizer',
      title: 'AI Project Resource Optimizer',
      description: 'AI-powered project management with resource optimization and risk assessment.',
      category: 'automation',
      pricing: '$199 - $1,999/month',
      features: ['Resource Allocation', 'Timeline Prediction', 'Risk Assessment', 'Project Analytics'],
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-600',
      href: '/services/ai-project-resource-optimizer',
      popular: false
    },
    {
      id: 'intelligent-inventory-management',
      title: 'Intelligent Inventory Management',
      description: 'AI-powered demand forecasting and inventory optimization for retail and manufacturing.',
      category: 'automation',
      pricing: '$159 - $1,599/month',
      features: ['AI Demand Forecasting', 'Automated Reordering', 'Multi-location', 'Cost Optimization'],
      icon: Factory,
      color: 'from-orange-500 to-red-600',
      href: '/services/intelligent-inventory-management',
      popular: false
    },
    {
      id: 'ai-threat-intelligence',
      title: 'AI Threat Intelligence Platform',
      description: 'Advanced threat intelligence with AI-powered detection and automated response.',
      category: 'cybersecurity',
      pricing: '$399 - $3,999/month',
      features: ['Real-time Detection', 'AI Analysis', 'Automated Response', 'Threat Hunting'],
      icon: Eye,
      color: 'from-red-500 to-orange-600',
      href: '/services/ai-threat-intelligence-platform',
      popular: false
    },
    {
      id: 'automated-compliance-monitoring',
      title: 'Automated Compliance Monitoring',
      description: 'Intelligent compliance monitoring with automated reporting and real-time alerts.',
      category: 'automation',
      pricing: '$299 - $2,999/month',
      features: ['Multi-regulation Support', 'Automated Checking', 'Real-time Alerts', 'Audit Readiness'],
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      href: '/services/automated-compliance-monitoring',
      popular: false
    }
  ];

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts = { ...Object.fromEntries(categories.map(cat => [cat.id, 0])) };
    services.forEach(service => {
      if (counts[service.category] !== undefined) {
        counts[service.category]++;
      }
      counts.all++;
    });
    return counts;
  }, []);

  // Update category counts
  categories.forEach(cat => {
    cat.count = categoryCounts[cat.id] || 0;
  });

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our complete portfolio of innovative AI services, IT solutions, and micro SaaS platforms. Transform your business with cutting-edge technology solutions."
        keywords="AI services, IT solutions, micro SaaS, cybersecurity, healthcare tech, fintech, quantum computing, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                <span>2025 Services Portfolio</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Comprehensive
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Services Showcase
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our complete portfolio of innovative AI services, IT solutions, and micro SaaS platforms. 
                Transform your business with cutting-edge technology solutions designed for the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-slate-600/50 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-700/50 text-gray-400 hover:bg-slate-600/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-700/50 text-gray-400 hover:bg-slate-600/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-gray-300">
                {selectedCategory !== 'all' && `Showing ${categories.find(c => c.id === selectedCategory)?.name} services`}
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={service.href}>
                      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group-hover:scale-105">
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                              <service.icon className="w-8 h-8" />
                            </div>
                            {service.popular && (
                              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                Popular
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="mb-4">
                            <span className="text-2xl font-bold text-white">{service.pricing}</span>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                            <div className="space-y-2">
                              {service.features.slice(0, 4).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-cyan-400 text-sm font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={service.href}>
                      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 p-6">
                        <div className="flex items-start space-x-6">
                          <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <service.icon className="w-10 h-10 text-white" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {service.title}
                              </h3>
                              {service.popular && (
                                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                                  Popular
                                </span>
                              )}
                            </div>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-6">
                                <span className="text-2xl font-bold text-white">{service.pricing}</span>
                                <div className="flex items-center space-x-4">
                                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center space-x-2">
                                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                      <span className="text-gray-400 text-sm">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-12 text-center border border-cyan-500/30"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose from our comprehensive portfolio of innovative services and start your 
                digital transformation journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Need help choosing the right service? Contact our team at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                <p>Or call us at <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;
