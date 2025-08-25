import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Database, Brain, Zap, Shield, Network, ArrowRight, Star, Rocket, Target, Users, BarChart3, Clock, Cpu, HardDrive, Server } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  TrendingUp, 
  Zap, 
  Database, 
  BarChart3,
  Settings,
  Workflow,
  Target,
  Rocket,
  Monitor,
  Network
} from 'lucide-react';

const AIPoweredITAssetManagement: React.FC = () => {
  const features = [
    {
      icon: Server,
      title: "Intelligent Asset Discovery",
      description: "Automated discovery and classification of IT assets across your infrastructure"
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Real-time security threat detection and vulnerability assessment"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics for asset performance optimization and capacity planning"
    },
    {
      icon: Zap,
      title: "Automated Maintenance",
      description: "Predictive maintenance scheduling and automated remediation"
    },
    {
      icon: Database,
      title: "Centralized Management",
      description: "Single pane of glass for all IT asset management operations"
    },
    {
      icon: BarChart3,
      title: "Predictive Insights",
      description: "AI-driven forecasting for asset lifecycle and replacement planning"
    }
  ];

  const capabilities = [
    {
      title: "Asset Lifecycle Management",
      description: "Complete visibility into asset lifecycle from procurement to retirement",
      features: ["Procurement Tracking", "Deployment Management", "Retirement Planning"]
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT costs through intelligent asset utilization and optimization",
      features: ["Usage Analytics", "Cost Allocation", "ROI Tracking"]
    },
    {
      title: "Compliance Management",
      description: "Ensure regulatory compliance with automated audit trails and reporting",
      features: ["Audit Logs", "Compliance Reports", "Policy Enforcement"]
    },
    {
      title: "Integration Hub",
      description: "Seamless integration with existing IT infrastructure and tools",
      features: ["API Integration", "Third-party Tools", "Custom Workflows"]
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Shield, BarChart3, Zap, Database, Network, HardDrive, Cpu } from 'lucide-react';

const AIPoweredITAssetManagement = () => {
  const features = [
    {
      icon: Server,
      title: 'Intelligent Asset Discovery',
      description: 'AI-powered scanning and discovery of all IT assets across your infrastructure.'
    },
    {
      icon: Shield,
      title: 'Security Compliance',
      description: 'Automated security assessment and compliance monitoring for all assets.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-driven insights for asset lifecycle management and optimization.'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and alerting for asset performance and health.'
    },
    {
      icon: Database,
      title: 'Centralized Inventory',
      description: 'Comprehensive asset database with detailed tracking and history.'
    },
    {
      icon: Network,
      title: 'Network Mapping',
      description: 'Visual network topology and asset relationship mapping.'
    }
  ];

  const assetTypes = [
    {
      title: 'Hardware Assets',
      description: 'Servers, workstations, networking equipment, and peripherals.',
      icon: '🖥️',
      features: ['Server inventory', 'Workstation tracking', 'Network devices', 'Peripheral management']
    },
    {
      title: 'Software Assets',
      description: 'Licenses, applications, and software inventory management.',
      icon: '💾',
      features: ['License tracking', 'Software inventory', 'Version control', 'Compliance monitoring']
    },
    {
      title: 'Cloud Resources',
      description: 'Cloud instances, storage, and service monitoring.',
      icon: '☁️',
      features: ['Cloud instances', 'Storage monitoring', 'Service tracking', 'Cost optimization']
    },
    {
      title: 'Network Infrastructure',
      description: 'Network topology, bandwidth, and connectivity management.',
      icon: '🌐',
      features: ['Network mapping', 'Bandwidth monitoring', 'Connectivity tracking', 'Performance analysis']
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
      icon: TrendingUp,
      title: "30% Cost Reduction",
      description: "Optimize asset utilization and reduce unnecessary expenditures"
    },
    {
      icon: Target,
      title: "Improved Efficiency",
      description: "Streamline asset management processes and reduce manual work"
    },
    {
      icon: Rocket,
      title: "Better Decision Making",
      description: "Data-driven insights for strategic IT planning and investment"
    }
  ];
<<<<<<< HEAD

  return (
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133

  return (
<<<<<<< HEAD
    <>
      <SEOHead
        title="AI-Powered IT Asset Management | Zion Tech Group"
        description="Intelligent IT asset management platform powered by AI that automates inventory tracking, maintenance scheduling, and lifecycle management for optimal IT infrastructure performance."
        keywords="AI IT asset management, IT asset tracking, IT infrastructure management, AI-powered IT, asset lifecycle management, IT automation"
        canonical="https://ziontechgroup.com/ai-powered-it-asset-management"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <Database className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered IT Asset Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your IT infrastructure with intelligent asset management powered by AI. 
                Automate tracking, optimize performance, and maximize ROI across your entire IT ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Asset Management Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI platform provides comprehensive IT asset management with predictive analytics, 
                automated maintenance, and intelligent optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-xl border border-green-500/20">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-6">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Analytics</h3>
                <p className="text-gray-300">
                  Advanced machine learning algorithms that analyze asset performance, predict failures, 
                  and optimize resource allocation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-500/20">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Discovery</h3>
                <p className="text-gray-300">
                  Intelligent asset discovery and inventory management with real-time updates and 
                  automated categorization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-xl border border-purple-500/20">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security & Compliance</h3>
                <p className="text-gray-300">
                  Comprehensive security monitoring, compliance tracking, and automated risk assessment 
                  for all IT assets.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/20">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-6">
                  <HardDrive className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Lifecycle Management</h3>
                <p className="text-gray-300">
                  End-to-end asset lifecycle tracking from procurement to retirement with 
                  intelligent replacement recommendations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-8 rounded-xl border border-yellow-500/20">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg w-fit mb-6">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Performance Monitoring</h3>
                <p className="text-gray-300">
                  Real-time performance monitoring with predictive maintenance alerts and 
                  automated optimization suggestions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-8 rounded-xl border border-red-500/20">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Network Integration</h3>
                <p className="text-gray-300">
                  Seamless integration with existing network infrastructure and management tools 
                  for unified asset oversight.
                </p>
              </div>
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management platform for comprehensive infrastructure monitoring, optimization, and security." />
        <meta name="keywords" content="IT asset management, AI infrastructure, IT monitoring, asset optimization, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            AI-Powered IT Asset
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Management
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Transform your IT infrastructure management with AI-powered insights. 
            Monitor, optimize, and secure all your IT assets from a single intelligent platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT asset management powered by artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Asset Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Asset Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Manage all types of IT assets with intelligent automation and AI-powered insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Hardware Assets</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Servers & Workstations</h4>
                      <p className="text-gray-300">Comprehensive management of all computing infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Network Equipment</h4>
                      <p className="text-gray-300">Routers, switches, firewalls, and network appliances</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Storage Systems</h4>
                      <p className="text-gray-300">SAN, NAS, and cloud storage infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Software & Licenses</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Application Management</h4>
                      <p className="text-gray-300">Software inventory and license compliance tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Cloud Resources</h4>
                      <p className="text-gray-300">AWS, Azure, and Google Cloud asset management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Virtual Infrastructure</h4>
                      <p className="text-gray-300">VMware, Hyper-V, and container management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
=======
      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage your IT infrastructure effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl p-8 border border-green-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformative Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience unprecedented efficiency and cost savings with AI-powered IT asset management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">40% Cost Reduction</h3>
                <p className="text-gray-300">Significant reduction in IT asset management costs</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">90% Time Savings</h3>
                <p className="text-gray-300">Automated processes save valuable IT staff time</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">100% Compliance</h3>
                <p className="text-gray-300">Automated compliance tracking and reporting</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-fit mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">5x Efficiency</h3>
                <p className="text-gray-300">Dramatic improvement in asset utilization</p>
              </div>
            </div>
=======
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your IT operations and achieve measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
      metric: '100%',
      label: 'Asset Visibility',
      description: 'Complete visibility across all IT assets'
    },
    {
      metric: '40%',
      label: 'Cost Reduction',
      description: 'Significant reduction in IT asset costs'
    },
    {
      metric: '90%',
      label: 'Compliance',
      description: 'Automated compliance and audit readiness'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Round-the-clock asset monitoring'
    }
  ];

  return (
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your IT asset management with AI-driven insights, automated discovery, 
              and intelligent monitoring for complete infrastructure visibility and control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/services/it-infrastructure"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transform Your IT Asset Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented control and visibility over your IT infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">{benefit.label}</div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your IT infrastructure management with AI-powered automation and 
              intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Optimizing Today
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Schedule a Demo
              </Link>
=======
      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Monitor, name: "Real-time Monitoring" },
              { icon: Network, name: "Network Discovery" },
              { icon: Database, name: "Data Analytics" },
              { icon: Shield, name: "Security Framework" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <tech.icon className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform delivers intelligent insights and automation for comprehensive asset management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Comprehensive Asset Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From hardware to cloud resources, manage every aspect of your IT infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assetTypes.map((assetType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{assetType.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{assetType.title}</h3>
                    <p className="text-gray-300">{assetType.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {assetType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations using AI to optimize their IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 rounded-3xl border border-cyan-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Master Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get complete visibility and control over your IT infrastructure with AI-powered asset management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                View Pricing
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredITAssetManagement;