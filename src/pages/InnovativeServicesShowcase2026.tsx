import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Cpu,
  Database,
  Network,
  Lock,
  Globe,
  Users,
  Award,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Coins,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Bell,
  Clock,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Package,
  Truck,
  Warehouse,
  Route,
  Navigation,
  AlertTriangle,
  CheckSquare,
  FileText,
  Layers,
  GitBranch,
  RefreshCw,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Wifi,
  Key,
  Fingerprint,
  Scan,
  Bug,
  Virus,
  Fire,
  AlertCircle,
  ShieldCheck,
  UserCheck,
  Play,
  ExternalLink
} from 'lucide-react';

const InnovativeServicesShowcase2026 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Star className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Services', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'supply-chain', name: 'Supply Chain', icon: <Package className="w-5 h-5" /> },
    { id: 'financial', name: 'Financial Tech', icon: <DollarSign className="w-5 h-5" /> }
  ];

  const services = [
    {
      id: 'ai-quantum-financial',
      name: 'AI Quantum Financial Analytics Platform',
      description: 'Revolutionize your financial analysis with the world\'s first quantum AI-powered platform. Get real-time insights, predictive analytics, and risk management at quantum speed.',
      category: 'financial',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-600',
      price: 'Starting at $299/month',
      features: [
        'Quantum AI-Powered Analytics',
        'Real-Time Market Intelligence',
        'Advanced Risk Management',
        'Global Market Coverage',
        'Enterprise-Grade Security'
      ],
      href: '/services/ai-quantum-financial-analytics-platform',
      featured: true
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Autonomous Supply Chain Management Platform',
      description: 'Transform your supply chain with autonomous AI that learns, optimizes, and operates 24/7. Reduce costs, improve efficiency, and gain complete visibility across your global operations.',
      category: 'supply-chain',
      icon: <Package className="w-8 h-8" />,
      color: 'from-green-500 to-blue-600',
      price: 'Starting at $199/month',
      features: [
        'AI-Powered Autonomous Operations',
        'Intelligent Route Optimization',
        'Smart Inventory Management',
        'Global Supply Chain Visibility',
        'Blockchain Security'
      ],
      href: '/services/ai-autonomous-supply-chain-management-platform',
      featured: true
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Operations Center',
      description: 'Protect your organization with the most advanced AI-powered cybersecurity platform. Detect, prevent, and respond to threats in real-time with autonomous security operations.',
      category: 'cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600',
      price: 'Starting at $399/month',
      features: [
        'AI-Powered Threat Detection',
        'Zero-Day Attack Prevention',
        'Network Security Monitoring',
        'Global Threat Intelligence',
        'Automated Incident Response'
      ],
      href: '/services/ai-cybersecurity-operations-center',
      featured: true
    },
    {
      id: 'ai-content-creation',
      name: 'AI Content Creation Studio Pro',
      description: 'Revolutionary AI-powered content creation platform that generates high-quality, engaging content across all formats and channels.',
      category: 'ai',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      price: 'Starting at $99/month',
      features: [
        'Multi-format Content Generation',
        'AI-powered SEO Optimization',
        'Brand Voice Consistency',
        'Content Analytics & Insights',
        'Multi-language Support'
      ],
      href: '/services/AI-Content-Creation-Studio-Pro',
      featured: false
    },
    {
      id: 'quantum-ai-trading',
      name: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum trading platform that leverages quantum computing and AI for unprecedented market analysis and trading performance.',
      category: 'quantum',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      price: 'Starting at $1,999/month',
      features: [
        'Quantum Computing Algorithms',
        'AI-powered Market Analysis',
        'Real-time Trading Signals',
        'Risk Management',
        'Portfolio Optimization'
      ],
      href: '/services/Quantum-AI-Trading-Platform',
      featured: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "Cutting-Edge Technology",
      description: "Leverage the latest AI, quantum computing, and machine learning innovations"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Proven Results",
      description: "Our solutions deliver measurable improvements in efficiency, security, and ROI"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Scalable Solutions",
      description: "Grow with confidence using our enterprise-grade, scalable platforms"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance across all our services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              2026 Innovative Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI, quantum computing, and innovative micro SAAS solutions. 
              Transform your business with the most advanced technology available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-blue-500 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-blue-500/20' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={service.href}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that transform businesses and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies already using our innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400">
              Ready to discuss how our innovative services can transform your business?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="https://ziontechgroup.com/services" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  All Services
                </a>
                <a href="https://ziontechgroup.com/pricing" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Pricing Guide
                </a>
                <a href="https://ziontechgroup.com/case-studies" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Case Studies
                </a>
                <a href="https://ziontechgroup.com/contact" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2026;
