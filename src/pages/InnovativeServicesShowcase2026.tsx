import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, 
  ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, 
  Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, 
  Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, 
  Database, Network, Clock, ArrowRight, Sparkles, Phone, Mail, 
  MapPin, Satellite, FileText, Zap, Palette, Camera, Video, 
  Music, Gamepad2, Car, Plane, Ship, Train, Leaf, Sun, Wind, 
  Droplets, Mountain, TreePine, Recycle, Lightbulb, Battery, 
  Wifi, Bluetooth, Radio, Telescope, Microscope, Flask, TestTube, 
  Beaker, Pill, Stethoscope, Syringe, HeartPulse, Activity, 
  Thermometer, Droplet, EyeOff, Key, Fingerprint, Scan, QrCode, 
  CreditCard, Wallet, PiggyBank, TrendingDown, BarChart, PieChart, 
  LineChart, ScatterChart, AreaChart, CandlestickChart, GanttChart, 
  Kanban, Calendar, Timer, Stopwatch, AlertTriangle, Search,
  TrendingDown, AlertTriangle, Scale, Workflow, Building, CheckCircle
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Rocket },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Network },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Wifi },
    { id: 'healthcare', name: 'Healthcare Tech', icon: Heart },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'legal', name: 'Legal Tech', icon: Scale },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-customer-churn-predictor',
      name: 'AI Customer Churn Predictor',
      description: 'Stop losing customers before they leave with AI that predicts churn with 95% accuracy and automatically triggers retention campaigns.',
      category: 'ai-ml',
      price: '$299/month',
      features: ['Real-time churn prediction', 'Behavioral analytics', 'Automated interventions', 'Predictive scoring', 'Multi-channel integration', 'ROI analytics'],
      icon: TrendingDown,
      badge: 'Featured',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/ai-powered-customer-churn-predictor',
      marketPrice: '$800/month',
      savings: '63%',
      rating: 4.9,
      reviews: 234,
      highlights: ['Reduce churn by 40%', 'Increase customer LTV 3.2x', 'Save 5x on acquisition costs']
    },
    {
      id: 'ai-powered-seo',
      name: 'AI-Powered SEO Platform',
      description: 'Revolutionize your search engine optimization with AI that understands search intent, predicts trends, and automatically optimizes content.',
      category: 'ai-ml',
      price: '$199/month',
      features: ['AI content optimization', 'Predictive keyword research', 'Competitive intelligence', 'Automated technical SEO', 'Voice search optimization', 'Local SEO automation'],
      icon: Search,
      badge: 'Popular',
      color: 'from-green-600 to-emerald-700',
      link: '/services/ai-powered-seo',
      marketPrice: '$500/month',
      savings: '60%',
      rating: 4.8,
      reviews: 189,
      highlights: ['Increase organic traffic 200-400%', 'Improve rankings 15+ positions', 'Reduce bounce rate 25-35%']
    },
    {
      id: 'ai-legal-document-automation',
      name: 'AI Legal Document Automation',
      description: 'Transform your legal practice with AI that generates, reviews, and optimizes legal documents in seconds.',
      category: 'legal',
      price: '$299/month',
      features: ['AI document generation', 'Smart contract analysis', 'Compliance automation', 'Document comparison', 'Legal research assistant', 'Workflow automation'],
      icon: FileText,
      badge: 'New',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/ai-legal-document-automation-platform',
      marketPrice: '$800/month',
      savings: '63%',
      rating: 4.9,
      reviews: 156,
      highlights: ['Save 80% time', 'Reduce errors by 95%', 'Lower costs 60-70%']
    },
    {
      id: 'ai-project-management-platform',
      name: 'AI Project Management Platform',
      description: 'Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation.',
      category: 'micro-saas',
      price: '$399/month',
      features: ['AI-powered insights', 'Automated workflows', 'Intelligent resource allocation', 'Predictive analytics', 'Team collaboration', 'Integration hub'],
      icon: Workflow,
      badge: 'Featured',
      color: 'from-indigo-600 to-blue-700',
      link: '/services/ai-project-management-platform',
      marketPrice: '$1,000/month',
      savings: '60%',
      rating: 4.8,
      reviews: 203,
      highlights: ['Increase productivity 40%', 'Reduce project delays 60%', 'Improve team efficiency 35%']
    },
    {
      id: 'ai-marketing-automation-platform',
      name: 'AI Marketing Automation Platform',
      description: 'Revolutionize your marketing with AI that personalizes campaigns, optimizes content, and predicts customer behavior.',
      category: 'micro-saas',
      price: '$299/month',
      features: ['AI personalization', 'Content optimization', 'Behavioral prediction', 'Multi-channel automation', 'ROI optimization', 'Advanced analytics'],
      icon: Target,
      badge: 'Popular',
      color: 'from-pink-600 to-rose-700',
      link: '/services/ai-marketing-automation-platform',
      marketPrice: '$700/month',
      savings: '57%',
      rating: 4.7,
      reviews: 178,
      highlights: ['Increase conversions 50%', 'Reduce marketing costs 40%', 'Improve ROI 3x']
    },
    {
      id: 'ai-customer-support-automation',
      name: 'AI Customer Support Automation',
      description: 'Transform customer support with AI that understands queries, provides instant answers, and escalates complex issues.',
      category: 'micro-saas',
      price: '$199/month',
      features: ['AI query understanding', 'Instant answers', 'Smart escalation', 'Multi-language support', 'Integration APIs', 'Performance analytics'],
      icon: MessageCircle,
      badge: 'Featured',
      color: 'from-cyan-600 to-blue-700',
      link: '/services/ai-customer-support-automation',
      marketPrice: '$500/month',
      savings: '60%',
      rating: 4.8,
      reviews: 145,
      highlights: ['Reduce response time 80%', 'Increase satisfaction 45%', 'Lower support costs 50%']
    },
    {
      id: 'ai-business-intelligence-dashboard',
      name: 'AI Business Intelligence Dashboard',
      description: 'Transform data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
      category: 'micro-saas',
      price: '$399/month',
      features: ['AI-powered analytics', 'Predictive modeling', 'Automated reporting', 'Real-time dashboards', 'Custom metrics', 'Data integration'],
      icon: BarChart3,
      badge: 'Enterprise',
      color: 'from-emerald-600 to-green-700',
      link: '/services/ai-business-intelligence-dashboard',
      marketPrice: '$1,200/month',
      savings: '67%',
      rating: 4.9,
      reviews: 267,
      highlights: ['Faster decision making 3x', 'Reduce manual reporting 90%', 'Improve data accuracy 95%']
    },
    {
      id: 'ai-hr-platform',
      name: 'AI HR Management Platform',
      description: 'Revolutionize HR operations with AI that automates recruitment, performance management, and employee engagement.',
      category: 'micro-saas',
      price: '$299/month',
      features: ['AI recruitment', 'Performance management', 'Employee engagement', 'Compliance automation', 'Analytics dashboard', 'Integration suite'],
      icon: Users,
      badge: 'Popular',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-hr-platform',
      marketPrice: '$800/month',
      savings: '63%',
      rating: 4.7,
      reviews: 189,
      highlights: ['Reduce hiring time 70%', 'Improve retention 40%', 'Lower HR costs 50%']
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Predict equipment failures before they happen with IoT sensors, AI analytics, and automated maintenance scheduling.',
      category: 'ai-ml',
      price: '$399/month',
      features: ['IoT integration', 'Predictive analytics', 'Automated alerts', 'Maintenance scheduling', 'Cost optimization', 'Performance tracking'],
      icon: Activity,
      badge: 'Industrial',
      color: 'from-amber-600 to-orange-700',
      link: '/services/ai-predictive-maintenance',
      marketPrice: '$1,000/month',
      savings: '60%',
      rating: 4.8,
      reviews: 156,
      highlights: ['Reduce downtime 60%', 'Lower maintenance costs 40%', 'Extend equipment life 30%']
    },
    {
      id: 'ai-workflow-orchestrator',
      name: 'AI Workflow Orchestrator',
      description: 'Streamline business processes with intelligent workflow automation that learns and optimizes over time.',
      category: 'ai-ml',
      price: '$299/month',
      features: ['Process automation', 'Decision routing', 'Performance analytics', 'Integration APIs', 'Custom workflows', 'Scalable architecture'],
      icon: Workflow,
      badge: 'Featured',
      color: 'from-violet-600 to-purple-700',
      link: '/services/ai-workflow-orchestrator',
      marketPrice: '$700/month',
      savings: '57%',
      rating: 4.7,
      reviews: 134,
      highlights: ['Increase efficiency 50%', 'Reduce errors 80%', 'Faster process completion 3x']
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      description: 'Protect your organization with AI-powered threat detection, automated response systems, and predictive security.',
      category: 'cybersecurity',
      price: '$599/month',
      features: ['AI threat detection', 'Automated response', 'Predictive security', 'Behavioral analysis', 'Compliance monitoring', '24/7 protection'],
      icon: Shield,
      badge: 'Security',
      color: 'from-red-600 to-pink-700',
      link: '/services/ai-cybersecurity-platform',
      marketPrice: '$1,500/month',
      savings: '60%',
      rating: 4.9,
      reviews: 289,
      highlights: ['Detect threats 10x faster', 'Reduce false positives 90%', 'Prevent attacks 95%']
    },
    {
      id: 'quantum-edge-computing',
      name: 'Quantum Edge Computing Solutions',
      description: 'Revolutionize your infrastructure with the world\'s first quantum-enhanced edge computing platform.',
      category: 'quantum',
      price: '$1,999/month',
      features: ['Quantum processing', 'Edge computing', 'Real-time analytics', 'Low latency', 'Scalable architecture', 'Advanced security'],
      icon: Atom,
      badge: 'Quantum',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/quantum-edge-computing-solutions',
      marketPrice: '$5,000/month',
      savings: '60%',
      rating: 4.9,
      reviews: 89,
      highlights: ['1000x faster computation', '99.9% uptime', 'Ultra-low latency']
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace('/month', '')) - parseFloat(b.price.replace('$', '').replace('/month', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace('/month', '')) - parseFloat(a.price.replace('$', '').replace('/month', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Innovation 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Showcase 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our cutting-edge AI-powered solutions, micro SaaS platforms, and innovative services 
              designed to transform your business and drive exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-zion-blue-dark border border-purple-500/30 text-gray-300 hover:border-purple-400/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-dark border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:outline-none"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.badge === 'Featured' ? 'bg-purple-500/20 text-purple-300' :
                      service.badge === 'Popular' ? 'bg-blue-500/20 text-blue-300' :
                      service.badge === 'New' ? 'bg-green-500/20 text-green-300' :
                      service.badge === 'Enterprise' ? 'bg-orange-500/20 text-orange-300' :
                      service.badge === 'Security' ? 'bg-red-500/20 text-red-300' :
                      service.badge === 'Quantum' ? 'bg-indigo-500/20 text-indigo-300' :
                      service.badge === 'Industrial' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {service.badge}
                    </span>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500 mt-1">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-xs text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      <span className="text-sm text-green-400 font-medium">Save {service.savings}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies that have revolutionized their operations with our innovative AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
