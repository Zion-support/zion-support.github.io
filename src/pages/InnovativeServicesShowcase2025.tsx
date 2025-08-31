import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Atom,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Target,
  Rocket,
  Lightbulb,
  Smartphone,
  Cloud,
  MessageCircle,
  FileText,
  Search,
  BarChart,
  Settings,
  Palette,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Leaf,
  Factory,
  Heart,
  Building,
  GraduationCap,
  Handshake,
  Newspaper,
  Video,
  Play,
  Briefcase,
  Automation,
  Signal,
  ShoppingCart,
  Gauge,
  PieChart,
  TrendingDown,
  Calendar,
  Clock4,
  AlertCircle,
  CheckSquare,
  FileCheck,
  UserCheck,
  Target2,
  WifiOff,
  Bluetooth,
  Radio,
  Antenna,
  Router,
  HardDrive,
  MemoryStick,
  Monitor,
  Watch,
  Car,
  Plane,
  Ship,
  Train
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-purple-600 to-pink-600' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-blue-600 to-cyan-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-purple-600 to-indigo-600' },
    { id: 'automation', name: 'Business Automation', icon: Automation, color: 'from-green-600 to-emerald-600' },
    { id: 'edge', name: 'Edge Computing & IoT', icon: Signal, color: 'from-teal-600 to-cyan-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-orange-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-sky-600 to-blue-600' },
    { id: 'data', name: 'Data & Analytics', icon: Database, color: 'from-indigo-600 to-purple-600' }
  ];

  const innovativeServices = [
    {
      id: 'ai-quantum-hybrid',
      title: 'AI Quantum Hybrid Platform',
      description: 'Revolutionary AI-powered quantum-classical hybrid computing platform for unprecedented performance',
      category: 'quantum',
      icon: Atom,
      price: 'From $2,999/month',
      features: ['Quantum-Classical Hybrid Processing', 'AI-Powered Quantum Optimization', 'Real-time Error Correction'],
      benefits: ['10x faster computation', '40% cost savings', 'Unlimited scalability'],
      href: '/services/ai-quantum-hybrid-platform',
      color: 'from-purple-600 to-indigo-600',
      popular: true
    },
    {
      id: 'ai-autonomous-business',
      title: 'AI Autonomous Business Operations Platform',
      description: 'Transform business operations with AI-powered automation and intelligent process optimization',
      category: 'automation',
      icon: Automation,
      price: 'From $1,499/month',
      features: ['Intelligent Process Automation', 'Predictive Analytics', 'Autonomous Decision Making'],
      benefits: ['85% faster operations', '40% cost reduction', '99.9% compliance'],
      href: '/services/ai-autonomous-business-operations-platform',
      color: 'from-green-600 to-emerald-600',
      popular: true
    },
    {
      id: 'ai-edge-computing',
      title: 'AI Edge Computing Platform',
      description: 'Ultra-low latency edge computing for IoT devices with AI-powered real-time processing',
      category: 'edge',
      icon: Signal,
      price: 'From $999/month',
      features: ['Intelligent Edge Processing', 'Multi-Protocol Connectivity', 'Real-time Analytics'],
      benefits: ['<10ms latency', '80% bandwidth reduction', '60% cost savings'],
      href: '/services/ai-edge-computing-platform',
      color: 'from-teal-600 to-cyan-600',
      popular: true
    },
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity with threat detection and automated response',
      category: 'cybersecurity',
      icon: Shield,
      price: 'From $1,999/month',
      features: ['AI Threat Detection', 'Automated Response', 'Zero-Trust Architecture'],
      benefits: ['Real-time protection', '99.9% threat detection', 'Automated incident response'],
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      popular: false
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Analytics',
      description: 'Comprehensive business intelligence powered by AI for data-driven decision making',
      category: 'data',
      icon: BarChart3,
      price: 'From $1,299/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'AI-Powered Insights'],
      benefits: ['Faster decision making', 'Improved ROI', 'Competitive advantage'],
      href: '/services/ai-business-intelligence-analytics',
      color: 'from-indigo-600 to-purple-600',
      popular: false
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent workflow automation that learns and optimizes business processes',
      category: 'automation',
      icon: Workflow,
      price: 'From $899/month',
      features: ['Process Learning', 'Intelligent Routing', 'Performance Optimization'],
      benefits: ['70% time savings', 'Reduced errors', 'Improved efficiency'],
      href: '/services/ai-workflow-automation',
      color: 'from-green-600 to-teal-600',
      popular: false
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization',
      description: 'AI-powered supply chain optimization for cost reduction and efficiency improvement',
      category: 'ai',
      icon: Network,
      price: 'From $1,799/month',
      features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management'],
      benefits: ['15% cost reduction', 'Faster delivery', 'Better inventory control'],
      href: '/services/ai-supply-chain-optimization',
      color: 'from-blue-600 to-cyan-600',
      popular: false
    },
    {
      id: 'ai-healthcare-platform',
      title: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics and patient monitoring with AI insights',
      category: 'ai',
      icon: Heart,
      price: 'From $2,499/month',
      features: ['Patient Monitoring', 'Predictive Diagnostics', 'Treatment Optimization'],
      benefits: ['Improved patient outcomes', 'Reduced costs', 'Better care quality'],
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-pink-600 to-rose-600',
      popular: false
    }
  ];

  const filteredServices = innovativeServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: 'Services Available', value: '25+', icon: Zap },
    { label: 'Industries Served', value: '15+', icon: Building },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Cost Savings', value: '40%', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of innovative AI, quantum computing, and business automation services. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, quantum computing, business automation, edge computing, cybersecurity, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Innovative Services 2025</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of cutting-edge AI, quantum computing, and business automation services. 
              Transform your business with the latest technology innovations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 border border-purple-500/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-24 h-24 border border-pink-500/30 rounded-full"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of cutting-edge services designed to transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-sm border rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 ${
                  service.popular ? 'border-purple-500/60 scale-105' : 'border-purple-500/20'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-purple-400 mb-4">{service.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our innovative services and experience the future of technology today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-purple-400" />
              <span className="text-gray-300">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-purple-400" />
              <span className="text-gray-300">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;