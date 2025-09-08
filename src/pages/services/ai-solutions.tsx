import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Cpu,
  Rocket,
  Eye,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Heart,
  Building,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  ChevronRight
} from 'lucide-react';

export default function AISolutionsPage() {
  const aiServices = [
    {
      title: 'AI Business Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics',
      icon: BarChart3,
      href: '/services/ai-business-intelligence',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Natural Language Queries', 'Automated Reporting'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'AI Workflow Orchestrator',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: Activity,
      href: '/services/ai-workflow-orchestrator',
      features: ['Process Automation', 'Smart Routing', 'Performance Optimization', 'Real-time Monitoring'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI Project Management',
      description: 'Streamline project execution with AI-driven insights and automation',
      icon: Target,
      href: '/services/ai-project-management',
      features: ['Resource Optimization', 'Risk Assessment', 'Timeline Prediction', 'Team Collaboration'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Personalize customer experiences with intelligent marketing automation',
      icon: TrendingUp,
      href: '/services/ai-marketing-automation',
      features: ['Customer Segmentation', 'Predictive Campaigns', 'Content Optimization', 'ROI Analytics'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer satisfaction with intelligent support automation',
      icon: Users,
      href: '/services/ai-customer-support-automation',
      features: ['24/7 Support', 'Intelligent Routing', 'Sentiment Analysis', 'Knowledge Management'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'AI Cybersecurity Platform',
      description: 'Protect your digital assets with AI-powered threat detection',
      icon: Shield,
      href: '/services/ai-cybersecurity-platform',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Management'],
      color: 'from-red-500 to-pink-600'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Advanced algorithms that learn and improve from data',
      icon: Brain,
      features: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning']
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and process human language naturally',
      icon: Code,
      features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Chatbot Development']
    },
    {
      title: 'Computer Vision',
      description: 'Extract insights from images and video content',
      icon: Eye,
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analytics']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors',
      icon: TrendingUp,
      features: ['Trend Analysis', 'Risk Assessment', 'Demand Forecasting', 'Performance Prediction']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
    { name: 'Finance', icon: Building, description: 'Intelligent financial analysis and trading' },
    { name: 'Manufacturing', icon: Cpu, description: 'Smart manufacturing and quality control' },
    { name: 'Retail', icon: Globe, description: 'Personalized shopping experiences' },
    { name: 'Transportation', icon: Rocket, description: 'Autonomous vehicles and logistics' },
    { name: 'Energy', icon: Zap, description: 'Smart grid and energy optimization' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions that drive innovation, 
              efficiency, and competitive advantage across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our AI Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address your specific business challenges and drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">AI Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage the full spectrum of artificial intelligence technologies to solve complex business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities across diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}