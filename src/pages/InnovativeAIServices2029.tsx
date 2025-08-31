import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cpu, Rocket, Zap, ArrowRight, CheckCircle, Star, 
  Users, BarChart3, Heart, Eye, Atom, Activity, Code, Database, 
  Server, Network, Lock, Cloud, Target, TrendingUp, Briefcase, Globe,
  Phone, Mail, MapPin, Palette, Camera, Video, Music, Gamepad2,
  Car, Plane, Ship, Leaf, Sun, Wind, Smartphone, Watch, Headphones,
  Printer, Wifi, Bluetooth, Satellite, Telescope, Microscope, Flask,
  Pill, Stethoscope, Calculator, BookOpen, GraduationCap, DollarSign,
  CreditCard, ShoppingCart, Truck, Warehouse, Factory, Building2,
  Home, Store, Bank, Insurance, Law, Gavel, FileText, Calendar,
  Clock, Timer, Stopwatch, Thermometer, Gauge, Compass, Map, Search,
  Filter, SortAsc, SortDesc, ChevronDown, ChevronUp, ExternalLink,
  Download, Upload, Share, Bookmark, MessageCircle, PhoneCall,
  VideoCall, MailOpen, Send, Plus, Minus, X, Menu, ChevronRight
} from 'lucide-react';

interface AIService {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  useCases: string[];
  pricing: string;
  benefits: string[];
  icon: any;
  color: string;
  featured?: boolean;
  innovationLevel: 'Revolutionary' | 'Advanced' | 'Innovative';
  learnMoreUrl?: string;
  ctaUrl?: string;
}

const InnovativeAIServices2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain, count: 0 },
    { id: 'autonomous-ai', name: 'Autonomous AI', icon: Rocket, count: 0 },
    { id: 'quantum-ai', name: 'Quantum AI', icon: Atom, count: 0 },
    { id: 'ai-cybersecurity', name: 'AI Cybersecurity', icon: Shield, count: 0 },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart3, count: 0 },
    { id: 'ai-automation', name: 'AI Automation', icon: Zap, count: 0 },
    { id: 'ai-research', name: 'AI Research', icon: Microscope, count: 0 }
  ];

  const aiServices: AIService[] = [
    // Autonomous AI Services
    {
      id: 'autonomous-business-ai',
      title: 'Autonomous Business AI',
      description: 'Fully autonomous AI system that manages entire business operations without human intervention.',
      category: 'autonomous-ai',
      features: [
        'Autonomous decision-making engine',
        'Real-time business optimization',
        'Predictive market analysis',
        'Automated resource allocation',
        'Self-learning algorithms',
        '24/7 autonomous operation'
      ],
      useCases: [
        'Enterprise resource planning',
        'Supply chain optimization',
        'Financial portfolio management',
        'Customer relationship management',
        'Strategic planning & execution'
      ],
      pricing: '$15,000 - $75,000/month',
      benefits: [
        'Reduce operational costs by 60-80%',
        'Improve decision accuracy by 95%',
        '24/7 autonomous business operation',
        'Real-time market adaptation',
        'Predictive business insights'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      innovationLevel: 'Revolutionary',
      learnMoreUrl: 'https://ziontechgroup.com/services/autonomous-business-ai',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    {
      id: 'autonomous-ai-manager',
      title: 'Autonomous AI Manager',
      description: 'AI-powered management system that autonomously manages teams, projects, and business processes.',
      category: 'autonomous-ai',
      features: [
        'Team performance optimization',
        'Project timeline management',
        'Resource allocation automation',
        'Performance analytics',
        'Conflict resolution',
        'Strategic planning'
      ],
      useCases: [
        'Project management',
        'Team leadership',
        'Resource optimization',
        'Performance monitoring',
        'Strategic execution'
      ],
      pricing: '$8,000 - $35,000/month',
      benefits: [
        'Improve team productivity by 40%',
        'Reduce management overhead by 70%',
        '24/7 autonomous management',
        'Data-driven decision making',
        'Scalable team management'
      ],
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      innovationLevel: 'Advanced',
      learnMoreUrl: 'https://ziontechgroup.com/services/autonomous-ai-manager',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // Quantum AI Services
    {
      id: 'quantum-ai-hybrid',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with AI for solving previously intractable problems.',
      category: 'quantum-ai',
      features: [
        'Quantum-classical hybrid algorithms',
        'AI-optimized quantum circuits',
        'Real-time quantum simulation',
        'Hybrid optimization engines',
        'Quantum-safe cryptography',
        'Scalable quantum infrastructure'
      ],
      useCases: [
        'Drug discovery & development',
        'Financial modeling',
        'Climate change modeling',
        'Logistics optimization',
        'Cryptographic security'
      ],
      pricing: '$25,000 - $100,000/month',
      benefits: [
        'Solve previously intractable problems',
        'Exponential speedup for optimization',
        'Future-proof quantum security',
        'Access to cutting-edge quantum tech',
        'Competitive advantage in research'
      ],
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      featured: true,
      innovationLevel: 'Revolutionary',
      learnMoreUrl: 'https://ziontechgroup.com/services/quantum-ai-hybrid',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // AI Cybersecurity Services
    {
      id: 'ai-cybersecurity-elite',
      title: 'AI Cybersecurity Elite',
      description: 'Military-grade AI-powered cybersecurity with real-time threat detection and autonomous response.',
      category: 'ai-cybersecurity',
      features: [
        'AI threat detection & prevention',
        'Behavioral analytics',
        'Automated incident response',
        'Zero-trust architecture',
        'Compliance automation',
        'Security posture scoring'
      ],
      useCases: [
        'Enterprise security',
        'Government agencies',
        'Financial institutions',
        'Healthcare organizations',
        'Critical infrastructure'
      ],
      pricing: '$12,000 - $50,000/month',
      benefits: [
        '99.9% threat detection accuracy',
        'Reduce response time by 95%',
        'Automated compliance reporting',
        'Real-time security monitoring',
        'Predictive threat intelligence'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: true,
      innovationLevel: 'Advanced',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-cybersecurity-elite',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // AI Analytics Services
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Elite',
      description: 'Advanced AI-powered analytics platform with real-time insights and predictive modeling.',
      category: 'ai-analytics',
      features: [
        'Real-time data processing',
        'AI-powered insights generation',
        'Predictive modeling',
        'Natural language queries',
        'Automated reporting',
        'Custom dashboards'
      ],
      useCases: [
        'Business intelligence',
        'Market analysis',
        'Customer insights',
        'Performance optimization',
        'Strategic planning'
      ],
      pricing: '$6,000 - $30,000/month',
      benefits: [
        'Unlock hidden data insights',
        'Improve decision-making speed',
        'Automated reporting',
        'Real-time business intelligence',
        'Predictive analytics'
      ],
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      innovationLevel: 'Advanced',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-business-intelligence',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // AI Automation Services
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent automation platform that learns and optimizes business workflows autonomously.',
      category: 'ai-automation',
      features: [
        'Workflow learning & optimization',
        'Process automation',
        'Intelligent routing',
        'Performance monitoring',
        'Continuous improvement',
        'Integration capabilities'
      ],
      useCases: [
        'Business process automation',
        'Customer service automation',
        'Sales process optimization',
        'HR process automation',
        'Financial process automation'
      ],
      pricing: '$4,000 - $20,000/month',
      benefits: [
        'Reduce manual work by 80%',
        'Improve process efficiency by 60%',
        '24/7 automated operation',
        'Continuous optimization',
        'Scalable automation'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      innovationLevel: 'Innovative',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-workflow-automation',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // AI Research Services
    {
      id: 'ai-research-development',
      title: 'AI Research & Development',
      description: 'Cutting-edge AI research and development services for breakthrough innovations.',
      category: 'ai-research',
      features: [
        'Custom AI model development',
        'Research collaboration',
        'Innovation consulting',
        'Patent development',
        'Technology transfer',
        'Academic partnerships'
      ],
      useCases: [
        'Academic research',
        'Corporate R&D',
        'Government research',
        'Startup innovation',
        'Technology consulting'
      ],
      pricing: '$10,000 - $100,000/month',
      benefits: [
        'Access to cutting-edge AI research',
        'Innovation leadership',
        'Patent portfolio development',
        'Research collaboration',
        'Technology commercialization'
      ],
      icon: Microscope,
      color: 'from-violet-500 to-purple-500',
      innovationLevel: 'Advanced',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-research-development',
      ctaUrl: 'https://ziontechgroup.com/contact'
    }
  ];

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = aiServices.filter(service => 
      cat.id === 'all' || service.category === cat.id
    ).length;
  });

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Zion Tech Group</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Future Technology Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              <a href="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
              <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Innovative
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}AI Services 2029
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Discover cutting-edge artificial intelligence solutions that are revolutionizing industries and transforming the future of technology.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden ${
                  service.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-8 h-8" />
                    <div className="flex items-center space-x-2">
                      {service.featured && (
                        <Star className="w-5 h-5 text-yellow-300" />
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Use Cases</h4>
                    <ul className="space-y-2">
                      {service.useCases.slice(0, 3).map((useCase, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pricing</h4>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{service.pricing}</p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.ctaUrl || '/contact'}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </a>
                    {service.learnMoreUrl && (
                      <a
                        href={service.learnMoreUrl}
                        className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-center py-3 px-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No AI services found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business with AI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Let our team of AI experts help you implement cutting-edge artificial intelligence solutions that drive innovation and growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Pioneering the future of technology with AI-powered solutions that transform businesses and empower innovation.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
                <li><a href="/innovative-services-showcase-2029" className="hover:text-white transition-colors">Innovative Services</a></li>
                <li><a href="/comprehensive-services-2029" className="hover:text-white transition-colors">Comprehensive Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InnovativeAIServices2029;