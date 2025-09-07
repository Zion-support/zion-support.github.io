import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, Shield, Truck, TrendingUp, Zap, Target, CheckCircle, ArrowRight,
  BarChart3, Cpu, Eye, AlertTriangle, Clock, DollarSign, Users, Globe,
  Activity, Network, Database, Rocket, Atom, Star, Award, Sparkles,
  Lightbulb, Code, Server, Cloud, Lock, Key, Search, Filter
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesShowcase2028() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: 25 },
    { id: 'ai-cybersecurity', name: 'AI Cybersecurity', icon: Shield, count: 8 },
    { id: 'ai-autonomous', name: 'AI Autonomous', icon: Brain, count: 6 },
    { id: 'ai-trading', name: 'AI Trading', icon: TrendingUp, count: 4 },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart3, count: 7 }
  ];

  const allServices = [
    // AI Cybersecurity Services
    {
      id: 'ai-quantum-cybersecurity-platform',
      name: 'AI Quantum Cybersecurity Platform',
      category: 'ai-cybersecurity',
      description: 'Revolutionary AI-powered cybersecurity with quantum-resistant encryption',
      price: 'From $299/month',
      features: ['AI threat detection', 'Quantum encryption', 'Zero-day prevention'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/services/ai-quantum-cybersecurity-platform',
      popular: true
    },
    {
      id: 'ai-cybersecurity-threat-intelligence',
      name: 'AI Cybersecurity Threat Intelligence',
      category: 'ai-cybersecurity',
      description: 'Advanced threat detection and response with machine learning',
      price: 'From $199/month',
      features: ['Real-time monitoring', 'Behavioral analysis', 'Automated response'],
      icon: Eye,
      color: 'from-red-500 to-pink-500',
      href: '/services/ai-cybersecurity-threat-intelligence'
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      category: 'ai-cybersecurity',
      description: 'Comprehensive security platform with AI-powered protection',
      price: 'From $399/month',
      features: ['Endpoint protection', 'Network security', 'Compliance management'],
      icon: Lock,
      color: 'from-red-500 to-purple-500',
      href: '/services/ai-cybersecurity-platform'
    },

    // AI Autonomous Services
    {
      id: 'ai-autonomous-supply-chain-optimization',
      name: 'AI Autonomous Supply Chain Optimization',
      category: 'ai-autonomous',
      description: 'Transform your supply chain with AI-powered autonomous optimization',
      price: 'From $499/month',
      features: ['Demand forecasting', 'Route optimization', 'Risk management'],
      icon: Truck,
      color: 'from-green-500 to-blue-500',
      href: '/services/ai-autonomous-supply-chain-optimization',
      popular: true
    },
    {
      id: 'ai-autonomous-business-manager',
      name: 'AI Autonomous Business Manager',
      category: 'ai-autonomous',
      description: 'Fully autonomous business operations management',
      price: 'From $799/month',
      features: ['Process automation', 'Decision making', 'Performance optimization'],
      icon: Brain,
      color: 'from-blue-500 to-purple-500',
      href: '/services/ai-autonomous-business-manager'
    },
    {
      id: 'ai-autonomous-research-assistant',
      name: 'AI Autonomous Research Assistant',
      category: 'ai-autonomous',
      description: 'Intelligent research automation and analysis',
      price: 'From $299/month',
      features: ['Data collection', 'Analysis automation', 'Report generation'],
      icon: Search,
      color: 'from-indigo-500 to-blue-500',
      href: '/services/ai-autonomous-research-assistant'
    },

    // AI Trading Services
    {
      id: 'ai-autonomous-financial-trading-platform',
      name: 'AI Autonomous Financial Trading Platform',
      category: 'ai-trading',
      description: 'Revolutionary AI-powered autonomous trading platform',
      price: 'From $199/month',
      features: ['Market analysis', 'Automated trading', 'Risk management'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-autonomous-financial-trading-platform',
      popular: true
    },
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading',
      category: 'ai-trading',
      description: 'Advanced AI algorithms for financial market trading',
      price: 'From $299/month',
      features: ['Algorithmic trading', 'Portfolio optimization', 'Market insights'],
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      href: '/services/ai-financial-trading'
    },

    // AI Analytics Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai-analytics',
      description: 'Advanced analytics and machine learning insights',
      price: 'From $399/month',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards'],
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-business-intelligence'
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics',
      category: 'ai-analytics',
      description: 'Healthcare data analysis and insights platform',
      price: 'From $599/month',
      features: ['Patient analytics', 'Clinical insights', 'Compliance reporting'],
      icon: Activity,
      color: 'from-teal-500 to-green-500',
      href: '/services/ai-healthcare-analytics'
    },
    {
      id: 'ai-customer-experience-analytics',
      name: 'AI Customer Experience Analytics',
      category: 'ai-analytics',
      description: 'Comprehensive customer behavior analysis and insights',
      price: 'From $299/month',
      features: ['Behavior tracking', 'Sentiment analysis', 'Journey mapping'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-customer-experience-analytics'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.icon || Sparkles;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Comprehensive Services Showcase 2028 - Zion Tech Group"
        description="Explore our complete portfolio of innovative AI, cybersecurity, and technology services. From quantum cybersecurity to autonomous business management."
        keywords="AI services, cybersecurity, autonomous systems, trading platforms, analytics, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/comprehensive-services-showcase-2028"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Comprehensive Services Showcase 2028
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge AI, cybersecurity, and technology services. 
              Transform your business with the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="ml-1 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered cybersecurity to autonomous business management, 
              we offer comprehensive solutions for every industry and use case.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  service.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-600/50 hover:border-blue-500/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Starting at</div>
                    <div className="text-lg font-bold text-white">{service.price}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of experts is ready to help you implement the perfect solution 
              for your business needs. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}