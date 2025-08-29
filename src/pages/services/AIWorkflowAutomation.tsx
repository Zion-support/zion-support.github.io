import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Workflow, Zap, Brain, Shield, Users, Clock, TrendingUp, CheckCircle, ArrowRight, Play, Pause, Settings, BarChart3, Target, Globe, Smartphone, Laptop, Cloud, Database, Lock, RefreshCw, Eye, Activity, FileText, MessageSquare, Calendar, Bell, Search, Filter, Download, Share, Star, Heart, ThumbsUp, ThumbsDown, AlertTriangle, Info, HelpCircle, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
      icon: Workflow,
      title: 'Intelligent Process Mapping',
      description: 'AI automatically discovers and maps your business processes for optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Smart Decision Automation',
      description: 'AI-powered decision trees that learn and improve from business outcomes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time Workflow Execution',
      description: 'Instant workflow triggers and real-time status monitoring across all systems',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Built-in compliance checks and enterprise-grade security for all workflows',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration with role-based access and approval workflows',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive insights into workflow efficiency and optimization opportunities',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const services = [
    {
      title: 'Workflow Discovery & Analysis',
      description: 'AI-powered analysis of existing business processes to identify automation opportunities',
      price: 'From $5,000',
      features: ['Process mapping', 'Efficiency analysis', 'Automation recommendations', 'ROI calculation']
    },
    {
      title: 'Custom Workflow Builder',
      description: 'Drag-and-drop workflow designer with AI suggestions and best practices',
      price: 'From $15,000',
      features: ['Visual workflow designer', 'AI templates', 'Integration setup', 'Testing & validation']
    },
    {
      title: 'Enterprise Workflow Platform',
      description: 'Full-featured workflow automation platform with advanced AI capabilities',
      price: 'From $25,000',
      features: ['Multi-tenant architecture', 'Advanced AI features', 'Enterprise integrations', '24/7 support']
    },
    {
      title: 'Workflow Optimization & Maintenance',
      description: 'Ongoing optimization and maintenance of automated workflows',
      price: 'From $3,000/month',
      features: ['Performance monitoring', 'Continuous optimization', 'Updates & maintenance', 'Technical support']
    }
  ];

  const useCases = [
    {
      title: 'Customer Onboarding',
      description: 'Automate customer account setup, verification, and welcome processes',
      icon: Users,
      benefits: ['Reduce onboarding time by 70%', 'Improve customer satisfaction', 'Eliminate manual errors']
    },
    {
      title: 'Invoice Processing',
      description: 'Automate invoice receipt, approval, and payment workflows',
      icon: FileText,
      benefits: ['Process invoices 5x faster', 'Reduce processing costs', 'Improve accuracy']
    },
    {
      title: 'HR Operations',
      description: 'Streamline employee onboarding, performance reviews, and offboarding',
      icon: Users,
      benefits: ['Standardize HR processes', 'Reduce administrative overhead', 'Improve compliance']
    },
    {
      title: 'Sales Operations',
      description: 'Automate lead qualification, proposal generation, and contract management',
      icon: TrendingUp,
      benefits: ['Increase sales velocity', 'Improve lead conversion', 'Reduce manual work']
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '🔴', category: 'CRM' },
    { name: 'HubSpot', icon: '🟠', category: 'Marketing' },
    { name: 'Slack', icon: '🟡', category: 'Communication' },
    { name: 'Microsoft Teams', icon: '🔵', category: 'Collaboration' },
    { name: 'Zapier', icon: '🟢', category: 'Automation' },
    { name: 'QuickBooks', icon: '🟣', category: 'Accounting' },
    { name: 'Shopify', icon: '⚫', category: 'E-commerce' },
    { name: 'Jira', icon: '🟤', category: 'Project Management' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group"
        description="Transform your business with AI-powered workflow automation. Streamline processes, reduce costs, and improve efficiency with intelligent automation solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Workflow className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business processes with intelligent automation that learns, adapts, and scales with your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to automate, optimize, and scale your business workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services & Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the right automation solution for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300">
              See how AI workflow automation transforms different business areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300">
              Connect with your existing tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm font-medium text-white">{integration.name}</div>
                <div className="text-xs text-gray-400">{integration.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses that have transformed their operations with AI workflow automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors text-lg font-semibold"
              >
                <Mail className="w-6 h-6 mr-2" />
                Get Free Consultation
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}