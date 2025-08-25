import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Building, Brain, Zap, Shield, Database, Network, ArrowRight, Star, Rocket, Target, Users, BarChart3, Clock, Cpu } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Bot, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  Settings,
  Workflow,
  Target,
  Rocket
} from 'lucide-react';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Intelligent automation of complex business processes and workflows"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of business operations"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification and mitigation of operational risks"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Instant insights into business performance and trends"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhanced collaboration tools for distributed teams"
    },
    {
      icon: BarChart3,
      title: "Predictive Insights",
      description: "AI-driven forecasting and strategic planning"
    }
  ];

  const modules = [
    {
      title: "Process Automation",
      description: "Streamline workflows and eliminate manual tasks",
      features: ["Workflow Designer", "Rule Engine", "Integration Hub"]
    },
    {
      title: "Business Intelligence",
      description: "Transform data into actionable insights",
      features: ["Real-time Dashboards", "Custom Reports", "Data Visualization"]
    },
    {
      title: "Resource Management",
      description: "Optimize resource allocation and utilization",
      features: ["Resource Planning", "Capacity Management", "Cost Optimization"]
    },
    {
      title: "Compliance & Security",
      description: "Ensure regulatory compliance and data security",
      features: ["Audit Trails", "Access Controls", "Compliance Monitoring"]
    }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133

  return (
<<<<<<< HEAD
    <>
      <SEOHead
        title="Autonomous Business Operations Platform | Zion Tech Group"
        description="Revolutionary AI-powered platform that autonomously manages and optimizes business operations, processes, and workflows for maximum efficiency."
        keywords="autonomous business operations, AI business automation, business process automation, autonomous systems, AI operations management"
        canonical="https://ziontechgroup.com/autonomous-business-operations-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Autonomous Business Operations Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our revolutionary AI-powered platform that autonomously 
                manages, optimizes, and scales your operations. Experience unprecedented efficiency 
                and growth through intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
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
                Revolutionary Autonomous Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform leverages advanced AI to create truly autonomous business operations 
                that learn, adapt, and optimize continuously.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-500/20">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-6">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intelligent Decision Making</h3>
                <p className="text-gray-300">
                  AI-powered decision engines that analyze data, predict outcomes, and make optimal 
                  business decisions autonomously.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-xl border border-green-500/20">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Process Automation</h3>
                <p className="text-gray-300">
                  End-to-end automation of complex business processes with intelligent workflow 
                  optimization and error handling.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-xl border border-purple-500/20">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Autonomous Security</h3>
                <p className="text-gray-300">
                  Self-monitoring security systems that detect threats, respond to incidents, and 
                  maintain compliance automatically.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/20">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-6">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Intelligence</h3>
                <p className="text-gray-300">
                  Advanced analytics and insights that drive autonomous decision-making and 
                  continuous business optimization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-8 rounded-xl border border-yellow-500/20">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg w-fit mb-6">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Scalable Infrastructure</h3>
                <p className="text-gray-300">
                  Cloud-native architecture that automatically scales resources based on demand 
                  and business requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-8 rounded-xl border border-red-500/20">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Operations</h3>
                <p className="text-gray-300">
                  Continuous autonomous operation with self-healing capabilities and proactive 
                  maintenance scheduling.
                </p>
              </div>
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary autonomous business operations platform powered by AI for seamless business process automation and optimization." />
        <meta name="keywords" content="business automation, AI operations, process optimization, business intelligence, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Autonomous Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Operations Platform
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Transform your business operations with AI-powered automation. 
            Streamline processes, optimize performance, and drive growth with our intelligent platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Shield, Zap, Users, BarChart3, Globe, Target } from 'lucide-react';

const AutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Bot,
      title: 'Fully Autonomous Operations',
      description: 'AI-powered systems that run your business operations 24/7 without human intervention.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Optimization',
      description: 'Real-time analysis and optimization of business processes for maximum efficiency.'
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'Advanced threat detection and automated response systems for business protection.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Millisecond response times for critical business decisions and operations.'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between autonomous systems and human teams.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-driven insights that predict trends and optimize business strategies.'
    }
  ];

  const businessAreas = [
    {
      title: 'Finance & Accounting',
      description: 'Automated financial reporting, budgeting, and compliance management.',
      icon: '💰',
      features: ['Automated bookkeeping', 'Real-time financial analysis', 'Compliance monitoring']
    },
    {
      title: 'Human Resources',
      description: 'AI-powered recruitment, performance management, and employee engagement.',
      icon: '👥',
      features: ['Smart candidate screening', 'Performance analytics', 'Employee satisfaction tracking']
    },
    {
      title: 'Supply Chain',
      description: 'Intelligent inventory management and logistics optimization.',
      icon: '📦',
      features: ['Demand forecasting', 'Route optimization', 'Supplier management']
    },
    {
      title: 'Customer Service',
      description: '24/7 automated customer support with human-like interactions.',
      icon: '🎧',
      features: ['Multi-language support', 'Issue resolution', 'Customer satisfaction tracking']
    },
    {
      title: 'Marketing & Sales',
      description: 'Automated lead generation, campaign management, and sales optimization.',
      icon: '📈',
      features: ['Lead scoring', 'Campaign automation', 'Sales forecasting']
    },
    {
      title: 'Operations',
      description: 'Streamlined business processes and workflow automation.',
      icon: '⚙️',
      features: ['Process optimization', 'Resource allocation', 'Performance monitoring']
    }
  ];

  const benefits = [
    {
      metric: '24/7',
      label: 'Operations',
      description: 'Round-the-clock business operations without downtime'
    },
    {
      metric: '90%',
      label: 'Efficiency Gain',
      description: 'Significant improvement in operational efficiency'
    },
    {
      metric: '60%',
      label: 'Cost Reduction',
      description: 'Substantial reduction in operational costs'
    },
    {
      metric: '100%',
      label: 'Compliance',
      description: 'Automated compliance monitoring and reporting'
    }
  ];

  return (
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
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with AI-powered autonomous operations that run 24/7, 
              continuously optimize performance, and drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
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
              Comprehensive tools for autonomous business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
=======
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
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business with autonomous operations that deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
        {/* Business Functions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Autonomous Business Functions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Every aspect of your business operations can be managed autonomously with 
                intelligent AI systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Core Operations</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Financial Management</h4>
                      <p className="text-gray-300">Automated accounting, budgeting, and financial reporting</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Human Resources</h4>
                      <p className="text-gray-300">AI-powered recruitment, performance management, and training</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Supply Chain</h4>
                      <p className="text-gray-300">Intelligent inventory management and logistics optimization</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Advanced Functions</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Customer Service</h4>
                      <p className="text-gray-300">AI chatbots and intelligent customer support systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Marketing Automation</h4>
                      <p className="text-gray-300">Intelligent campaign management and customer engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Risk Management</h4>
                      <p className="text-gray-300">Proactive risk assessment and mitigation strategies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
=======
      {/* Modules Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions for every aspect of business operations
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
              Advanced Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with business intelligence to create truly autonomous operations.
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

      {/* Business Areas Section */}
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
              Comprehensive Business Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From finance to operations, our autonomous platform covers every aspect of your business.
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {modules.map((module, index) => (
=======
            {businessAreas.map((area, index) => (
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl p-8 border border-blue-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{module.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
=======
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                    <p className="text-gray-300">{area.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformative Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience unprecedented growth and efficiency with autonomous business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">300% Efficiency</h3>
                <p className="text-gray-300">Dramatic increase in operational efficiency</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Operations</h3>
                <p className="text-gray-300">Continuous business operation without interruption</p>
=======
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
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
              Transform your operations and achieve measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">30% Efficiency Gain</h3>
              <p className="text-gray-300">Automate repetitive tasks and optimize workflows</p>
            </motion.div>

<<<<<<< HEAD
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">90% Cost Reduction</h3>
                <p className="text-gray-300">Significant reduction in operational costs</p>
=======
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Improved Accuracy</h3>
              <p className="text-gray-300">Reduce errors with AI-powered validation</p>
            </motion.div>

<<<<<<< HEAD
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-fit mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">10x Growth</h3>
                <p className="text-gray-300">Accelerated business growth and scalability</p>
=======
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Faster Scaling</h3>
              <p className="text-gray-300">Scale operations without proportional cost increases</p>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and unlock unprecedented efficiency, 
              growth, and competitive advantage.
=======
      {/* CTA Section */}
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already running on autonomous operations.
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Autonomous Journey
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule a Demo
              </Link>
=======
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already transforming their operations with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform;