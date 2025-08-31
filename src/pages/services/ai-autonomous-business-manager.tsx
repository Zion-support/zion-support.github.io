import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  TrendingUp,
  BarChart3,
  Users,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  Globe,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Calendar,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Activity,
  Award,
  Gift,
  ShieldCheck,
  Car,
  Building,
  Calculator,
  Leaf,
  Atom,
  Rocket,
  ShoppingCart,
  Factory,
  Heart,
  Cloud
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIAutonomousBusinessManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Eye },
    { id: 'features', name: 'Features', icon: Sparkles },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'benefits', name: 'Benefits', icon: Star },
    { id: 'use-cases', name: 'Use Cases', icon: Target },
    { id: 'technology', name: 'Technology', icon: Cpu }
  ];

  const features = {
    starter: [
      'Basic Business Monitoring & Analytics',
      'Automated Reporting (Daily/Weekly)',
      'Performance Metrics Dashboard',
      'Email Support (24/48 hour response)',
      'Basic Integration with 5 systems',
      'Standard Security & Compliance'
    ],
    professional: [
      'Advanced Business Intelligence',
      'Real-time Performance Analytics',
      'Predictive Analytics & Forecasting',
      'Automated Decision Making Engine',
      'Priority Support (4-8 hour response)',
      'Integration with 15+ systems',
      'Custom Workflow Automation',
      'Advanced Security & Compliance'
    ],
    enterprise: [
      'Full Business Autonomy',
      'Real-time Business Optimization',
      'Multi-location Management',
      'AI-Powered Strategic Planning',
      'Dedicated Support Team (1-2 hour response)',
      'Unlimited System Integrations',
      'Custom AI Model Training',
      'White-label Solutions',
      'Advanced Analytics & Reporting',
      'Enterprise Security & Compliance'
    ]
  };

  const pricing = {
    starter: {
      price: '$2,500/month',
      setup: '$5,000',
      contract: '12 months',
      savings: 'Save 60% vs. market rates'
    },
    professional: {
      price: '$5,000/month',
      setup: '$10,000',
      contract: '24 months',
      savings: 'Save 65% vs. market rates'
    },
    enterprise: {
      price: '$12,000/month',
      setup: '$25,000',
      contract: '36 months',
      savings: 'Save 70% vs. market rates'
    }
  };

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by 40-60% through automation and optimization',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      metric: '40-60%'
    },
    {
      title: 'Decision Speed',
      description: 'Improve decision-making speed by 80% with real-time insights',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      metric: '80%'
    },
    {
      title: 'Efficiency Gain',
      description: 'Increase overall business efficiency by 50% through process optimization',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      metric: '50%'
    },
    {
      title: '24/7 Operation',
      description: 'Continuous business monitoring and optimization without human intervention',
      icon: Clock,
      color: 'from-orange-500 to-red-500',
      metric: '24/7'
    },
    {
      title: 'Market Adaptation',
      description: 'Real-time market analysis and automatic strategy adjustment',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      metric: 'Real-time'
    },
    {
      title: 'Risk Mitigation',
      description: 'Proactive risk identification and automated response systems',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      metric: '90%'
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Business Management',
      description: 'Complete autonomous management of large enterprise operations across multiple locations and departments.',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      industries: ['Fortune 500', 'Multi-national', 'Conglomerates']
    },
    {
      title: 'E-commerce Optimization',
      description: 'Automated inventory management, pricing optimization, and customer experience enhancement.',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      industries: ['E-commerce', 'Retail', 'Marketplaces']
    },
    {
      title: 'Financial Services',
      description: 'Automated risk assessment, portfolio optimization, and regulatory compliance management.',
      icon: DollarSign,
      color: 'from-purple-500 to-pink-500',
      industries: ['Banking', 'Investment', 'Insurance']
    },
    {
      title: 'Manufacturing Operations',
      description: 'Supply chain optimization, production planning, and quality control automation.',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      industries: ['Manufacturing', 'Automotive', 'Aerospace']
    },
    {
      title: 'Healthcare Management',
      description: 'Patient care optimization, resource allocation, and compliance management.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      industries: ['Healthcare', 'Hospitals', 'Clinics']
    },
    {
      title: 'Service Industry',
      description: 'Customer service automation, appointment scheduling, and service delivery optimization.',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      industries: ['Consulting', 'Legal', 'Real Estate']
    }
  ];

  const technology = [
    {
      title: 'Advanced AI Models',
      description: 'GPT-4, Claude 3.5, and custom fine-tuned models for business intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Machine Learning',
      description: 'Predictive analytics, pattern recognition, and continuous learning algorithms',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Real-time Processing',
      description: 'High-performance data processing and real-time decision making',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud architecture with 99.9% uptime guarantee',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SOC 2, ISO 27001, and GDPR compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with 100+ business systems and platforms',
      icon: Network,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Autonomous Business Manager - Zion Tech Group"
        description="Transform your business with our AI Autonomous Business Manager. Fully autonomous AI system that manages your entire business operations with 40-60% cost reduction."
        keywords="AI autonomous business manager, business automation, AI business intelligence, autonomous operations, business optimization, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/ai-autonomous-business-manager"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Featured AI Service
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Business Manager
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Fully autonomous AI system that manages your entire business operations, from strategy to execution. 
                Reduce costs by 40-60% while improving efficiency and decision-making speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/comprehensive-pricing-guide-2028"
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free Consultation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  30-Day Trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  24/7 Support
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Autonomous Business Management</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Real-time monitoring
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Automated decisions
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Predictive analytics
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      Continuous optimization
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Revolutionize Your Business Operations
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                  Our AI Autonomous Business Manager is the future of business management. 
                  It combines advanced artificial intelligence with deep business understanding to create a system 
                  that can autonomously manage your entire business operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {benefits.slice(0, 6).map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-4`}>
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-300 mb-4">{benefit.description}</p>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {benefit.metric}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Demo
                </Link>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Comprehensive Feature Sets
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                  Choose the plan that best fits your business needs. All plans include our core AI capabilities 
                  with additional features and support levels as you scale.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {Object.entries(pricing).map(([plan, details], index) => (
                  <motion.div
                    key={plan}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-slate-800 rounded-xl p-8 border ${
                      plan === 'professional' 
                        ? 'border-purple-500 ring-2 ring-purple-500/50' 
                        : 'border-slate-700'
                    }`}
                  >
                    {plan === 'professional' && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                      <div className="text-4xl font-bold text-purple-400 mb-2">{details.price}</div>
                      <div className="text-sm text-slate-400 mb-4">{details.savings}</div>
                      <div className="text-sm text-slate-500">
                        Setup: {details.setup} | Contract: {details.contract}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {features[plan as keyof typeof features].map((feature, idx) => (
                        <li key={idx} className="flex items-start text-slate-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                        plan === 'professional'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                          : 'bg-slate-700 text-white hover:bg-slate-600'
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Transparent Pricing
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                  Competitive pricing with significant savings compared to market rates. 
                  All plans include setup, training, and ongoing support.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  {Object.entries(pricing).map(([plan, details], index) => (
                    <div key={plan} className="text-center">
                      <h3 className="text-xl font-bold text-white mb-4 capitalize">{plan}</h3>
                      <div className="text-3xl font-bold text-purple-400 mb-2">{details.price}</div>
                      <div className="text-sm text-slate-400 mb-4">{details.savings}</div>
                      <div className="space-y-2 text-sm text-slate-500">
                        <div>Setup Fee: {details.setup}</div>
                        <div>Contract: {details.contract}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/comprehensive-pricing-guide-2028"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Detailed Pricing
                </Link>
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Transform Your Business
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                  Experience unprecedented business transformation with measurable results 
                  that impact your bottom line and competitive position.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-6`}>
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-300 mb-4">{benefit.description}</p>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {benefit.metric}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'use-cases' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Industry Applications
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                  Our AI Autonomous Business Manager is designed to work across industries, 
                  providing tailored solutions for different business models and challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white mb-6`}>
                      <useCase.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-slate-300 mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-purple-400">Industries:</div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.industries.map((industry, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Cutting-Edge Technology
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                  Built on the latest advancements in artificial intelligence, machine learning, 
                  and cloud computing to deliver unmatched performance and reliability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technology.map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-white mb-6`}>
                      <tech.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                    <p className="text-slate-300">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Join the future of autonomous business management. Contact us today to schedule a demo 
              and see how our AI can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="text-slate-400 space-y-2">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="text-sm mt-4">Free consultation and 30-day trial available</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessManager;