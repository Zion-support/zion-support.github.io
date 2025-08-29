import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Zap, 
  Shield, 
  Cpu, 
  Rocket, 
  Heart, 
  Users, 
  TrendingUp, 
  Star, 
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface Service {
  name: string;
  description: string;
  href: string;
  category: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon: React.ComponentType<any>;
  color: string;
}

export default function ServicesOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const services: Service[] = [
    // AI & Analytics Services
    {
      name: 'AI Business Intelligence',
      description: 'Advanced AI-powered analytics and business intelligence platform',
      href: '/services/ai-business-intelligence',
      category: 'AI & Analytics',
      price: '$299/month',
      features: ['AI-powered insights', 'Custom dashboards', 'Predictive analytics', 'Real-time monitoring'],
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'AI Sales Copilot',
      description: 'Intelligent sales automation and optimization platform',
      href: '/services/ai-sales-copilot',
      category: 'AI & Analytics',
      price: '$199/month',
      features: ['Lead scoring', 'Sales forecasting', 'Automated outreach', 'Performance analytics'],
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'AI Project Management',
      description: 'AI-powered project management with intelligent task prioritization',
      href: '/services/ai-project-management',
      category: 'AI & Analytics',
      price: '$149/month',
      features: ['AI task prioritization', 'Predictive timelines', 'Team collaboration', 'Performance analytics'],
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'AI Customer Success Platform',
      description: 'Comprehensive customer success automation platform',
      href: '/services/ai-customer-success-platform',
      category: 'AI & Analytics',
      price: '$199/month',
      features: ['Churn prediction', 'Customer health scoring', 'Automated engagement', 'Success playbooks'],
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },

    // Cloud & DevOps Services
    {
      name: 'Cloud DevOps',
      description: 'Modern cloud infrastructure and DevOps automation',
      href: '/services/cloud-devops',
      category: 'Cloud & DevOps',
      price: '$199/month',
      features: ['Infrastructure automation', 'CI/CD pipelines', 'Cloud optimization', 'Monitoring & alerting'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Cloud FinOps Optimizer',
      description: 'Cloud cost optimization and financial operations management',
      href: '/services/cloud-finops-optimizer',
      category: 'Cloud & DevOps',
      price: '$299/month',
      features: ['Cost optimization', 'Resource management', 'Budget tracking', 'Performance monitoring'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Edge Computing Platform',
      description: 'Next-generation edge computing infrastructure',
      href: '/services/edge-computing-platform',
      category: 'Cloud & DevOps',
      price: '$399/month',
      features: ['Edge deployment', 'Low latency', 'Global distribution', 'Real-time processing'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },

    // Innovative Micro SaaS
    {
      name: 'Vendor Risk Management',
      description: 'Comprehensive vendor risk assessment and management',
      href: '/services/vendor-risk-management',
      category: 'Innovative Micro SaaS',
      price: '$99/month',
      features: ['Risk assessment', 'Compliance monitoring', 'Vendor scoring', 'Automated alerts'],
      icon: Zap,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'AI SEO Optimizer',
      description: 'AI-powered SEO optimization and content strategy',
      href: '/services/ai-seo-optimizer',
      category: 'Innovative Micro SaaS',
      price: '$79/month',
      features: ['Keyword research', 'Content optimization', 'Performance tracking', 'Competitor analysis'],
      icon: Zap,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'SaaS Churn Predictor',
      description: 'Predictive analytics for customer churn prevention',
      href: '/services/saas-churn-predictor',
      category: 'Innovative Micro SaaS',
      price: '$149/month',
      features: ['Churn prediction', 'Risk scoring', 'Automated alerts', 'Retention strategies'],
      icon: Zap,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'API Monitoring SaaS',
      description: 'Comprehensive API monitoring and performance tracking',
      href: '/services/api-monitoring',
      category: 'Innovative Micro SaaS',
      price: '$89/month',
      features: ['Uptime monitoring', 'Performance metrics', 'Error tracking', 'Alert management'],
      icon: Zap,
      color: 'from-emerald-500 to-teal-600'
    },

    // Cybersecurity & Compliance
    {
      name: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity platform',
      href: '/services/ai-cybersecurity-suite',
      category: 'Cybersecurity & Compliance',
      price: '$499/month',
      features: ['Threat detection', 'AI analysis', 'Incident response', 'Compliance automation'],
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'Zero Trust Architecture',
      description: 'Modern zero-trust network security framework',
      href: '/services/zero-trust-network-architecture',
      category: 'Cybersecurity & Compliance',
      price: '$399/month',
      features: ['Identity verification', 'Access control', 'Network segmentation', 'Continuous monitoring'],
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'GDPR Cookie Compliance',
      description: 'Automated GDPR and cookie compliance management',
      href: '/services/gdpr-cookie-compliance',
      category: 'Cybersecurity & Compliance',
      price: '$69/month',
      features: ['Cookie consent', 'GDPR compliance', 'Privacy management', 'Audit trails'],
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },

    // Emerging Technology
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      href: '/services/quantum-computing',
      category: 'Emerging Technology',
      price: '$999/month',
      features: ['Quantum algorithms', 'Quantum simulation', 'Research support', 'Expert consultation'],
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Blockchain Enterprise Solutions',
      description: 'Enterprise-grade blockchain implementation',
      href: '/services/blockchain-enterprise-solutions',
      category: 'Emerging Technology',
      price: '$599/month',
      features: ['Smart contracts', 'DApp development', 'Blockchain consulting', 'Integration support'],
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Space Technology',
      description: 'Innovative space-based technology solutions',
      href: '/services/space-tech',
      category: 'Emerging Technology',
      price: '$799/month',
      features: ['Satellite data', 'Space analytics', 'Research support', 'Innovation consulting'],
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const categories = ['all', 'AI & Analytics', 'Cloud & DevOps', 'Innovative Micro SaaS', 'Cybersecurity & Compliance', 'Emerging Technology'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Explore our comprehensive range of AI, IT, and micro SaaS services. Find the perfect solution for your business needs."
      />
      
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Services Overview
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our comprehensive range of AI-powered solutions, IT services, and innovative micro SaaS applications. 
            Find the perfect service to transform your business.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`relative rounded-2xl p-6 ${
                    service.popular 
                      ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-cyan-400 shadow-2xl shadow-cyan-400/20' 
                      : 'bg-slate-800/50 border border-slate-700'
                  } hover:border-cyan-400/50 transition-all duration-300`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-4">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </div>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-slate-400 bg-slate-700 px-2 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`p-6 rounded-xl ${
                    service.popular 
                      ? 'bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-cyan-400' 
                      : 'bg-slate-800/50 border border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <p className="text-slate-300 text-sm">{service.description}</p>
                        <span className="text-sm text-slate-400 bg-slate-700 px-2 py-1 rounded-md mt-2 inline-block">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                      <a
                        href={service.href}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our team can create tailored solutions that perfectly fit your business requirements. 
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              >
                Contact Sales
              </a>
              <a
                href="/request-quote"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}