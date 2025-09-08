// Removed unused: import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Rocket, Star, CheckCircle, ArrowRight, Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '@/data/innovativeMicroSaasServices2027';
import { EMERGING_TECH_SERVICES_2027 } from '@/data/emergingTechServices2027';
export default function InnovativeServicesShowcase2027() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'aiScore' | 'rating' | 'price'>('aiScore');
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2027, ...EMERGING_TECH_SERVICES_2027];
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];
  const filteredServices = allServices
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (searchQuery === '' || 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .sort((a, b) => b[sortBy] - a[sortBy]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  benefits: string[];
  useCases: string[];
  href: string;
  color: string;
  category: string;
  featured: boolean;
}

const services: Service[] = [
  {
    id: 'ai-legal-document-analysis',
    name: 'AI Legal Document Analysis',
    description: 'Advanced AI-powered legal document review, contract analysis, and compliance checking with 99.9% accuracy.',
    icon: Scale,
    features: [
      'Contract clause analysis and risk assessment',
      'Regulatory compliance checking',
      'Legal precedent research automation',
      'Document comparison and version control',
      'Multi-language legal document support',
      'Real-time compliance alerts'
    ],
    pricing: {
      starter: '$299/month',
      professional: '$799/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Reduce legal review time by 80%',
      'Minimize compliance risks',
      'Cost-effective legal operations',
      '24/7 document processing'
    ],
    useCases: [
      'Law firms and legal departments',
      'Corporate compliance teams',
      'Contract management',
      'Regulatory reporting'
    ],
    href: '/services/ai-legal-document-analysis',
    color: 'from-blue-600 to-indigo-700',
    category: 'AI & Legal Tech',
    featured: true
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics, demand forecasting, and real-time optimization.',
    icon: Truck,
    features: [
      'Predictive demand forecasting',
      'Real-time inventory optimization',
      'Route optimization and logistics',
      'Supplier performance analytics',
      'Risk assessment and mitigation',
      'Sustainability tracking'
    ],
    pricing: {
      starter: '$499/month',
      professional: '$1,299/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times by 40%',
      'Enhanced supplier relationships',
      'Real-time visibility and control'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail and e-commerce',
      'Logistics providers',
      'Distribution networks'
    ],
    href: '/services/ai-supply-chain-optimization',
    color: 'from-green-600 to-emerald-700',
    category: 'AI & Operations',
    featured: true
  },
  {
    id: 'ai-healthcare-analytics',
    name: 'AI Healthcare Analytics Platform',
    description: 'Comprehensive healthcare analytics with patient insights, predictive diagnostics, and operational optimization.',
    icon: Heart,
    features: [
      'Patient outcome prediction',
      'Diagnostic accuracy improvement',
      'Operational efficiency analytics',
      'Population health insights',
      'Clinical trial optimization',
      'Healthcare cost analysis'
    ],
    pricing: {
      starter: '$599/month',
      professional: '$1,499/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce healthcare costs by 20%',
      'Enhanced patient outcomes',
      'Compliance with healthcare regulations'
    ],
    useCases: [
      'Hospitals and clinics',
      'Healthcare systems',
      'Medical research institutions',
      'Health insurance companies'
    ],
    href: '/services/ai-healthcare-analytics',
    color: 'from-red-600 to-pink-700',
    category: 'AI & Healthcare',
    featured: true
  },
  {
    id: 'ai-financial-trading',
    name: 'AI Financial Trading Platform',
    description: 'Advanced algorithmic trading with machine learning, risk management, and real-time market analysis.',
    icon: TrendingUp,
    features: [
      'Algorithmic trading strategies',
      'Real-time market analysis',
      'Risk management and compliance',
      'Portfolio optimization',
      'Sentiment analysis',
      'Backtesting and simulation'
    ],
    pricing: {
      starter: '$999/month',
      professional: '$2,999/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Increase trading efficiency by 60%',
      'Reduce risk exposure',
      '24/7 market monitoring',
      'Compliance automation'
    ],
    useCases: [
      'Investment firms',
      'Hedge funds',
      'Individual traders',
      'Financial institutions'
    ],
    href: '/services/ai-financial-trading',
    color: 'from-yellow-600 to-orange-700',
    category: 'AI & Fintech',
    featured: true
  },
  {
    id: 'quantum-ai-trading',
    name: 'Quantum AI Trading Platform',
    description: 'Next-generation quantum computing-powered trading with unprecedented speed and accuracy.',
    icon: Atom,
    features: [
      'Quantum algorithm optimization',
      'Ultra-fast market analysis',
      'Quantum risk assessment',
      'Portfolio quantum optimization',
      'Real-time quantum simulations',
      'Quantum machine learning models'
    ],
    pricing: {
      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      '1000x faster processing speed',
      'Quantum advantage in complex calculations',
      'Enhanced prediction accuracy',
      'Future-proof technology'
    ],
    useCases: [
      'High-frequency trading',
      'Complex financial modeling',
      'Risk assessment',
      'Portfolio optimization'
    ],
    href: '/services/quantum-ai-trading-platform',
    color: 'from-purple-600 to-pink-700',
    category: 'Quantum Computing',
    featured: true
  },
  {
    id: 'ai-workflow-orchestrator',
    name: 'AI Workflow Orchestrator',
    description: 'Intelligent workflow automation with AI-powered decision making and process optimization.',
    icon: GitFork,
    features: [
      'Intelligent process automation',
      'AI decision making',
      'Workflow optimization',
      'Integration management',
      'Performance analytics',
      'Custom workflow builder'
    ],
    pricing: {
      starter: '$399/month',
      professional: '$999/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Increase productivity by 50%',
      'Reduce manual errors',
      'Streamlined operations',
      'Real-time process insights'
    ],
    useCases: [
      'Business process automation',
      'Customer service operations',
      'Marketing automation',
      'HR process management'
    ],
    href: '/services/ai-workflow-orchestrator',
    color: 'from-indigo-600 to-blue-700',
    category: 'AI & Automation',
    featured: true
  },
  {
    id: 'cybersecurity-platform',
    name: 'AI-Powered Cybersecurity Platform',
    description: 'Advanced threat detection and prevention with machine learning and behavioral analysis.',
    icon: Shield,
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Vulnerability assessment',
      'Compliance monitoring',
      'Security analytics dashboard'
    ],
    pricing: {
      starter: '$599/month',
      professional: '$1,299/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      '24/7 security monitoring',
      'Compliance automation'
    ],
    useCases: [
      'Enterprise security',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies'
    ],
    href: '/services/cybersecurity',
    color: 'from-green-600 to-teal-700',
    category: 'Cybersecurity',
    featured: true
  },
  {
    id: 'digital-twin-platform',
    name: 'Digital Twin Platform',
    description: 'Create virtual replicas of physical assets for monitoring, simulation, and predictive maintenance.',
    icon: Globe,
    features: [
      '3D asset modeling',
      'Real-time monitoring',
      'Predictive maintenance',
      'Simulation capabilities',
      'IoT integration',
      'Performance analytics'
    ],
    pricing: {
      starter: '$799/month',
      professional: '$1,999/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Reduce downtime by 40%',
      'Optimize asset performance',
      'Predictive maintenance savings',
      'Enhanced operational visibility'
    ],
    useCases: [
      'Manufacturing facilities',
      'Smart cities',
      'Energy infrastructure',
      'Transportation systems'
    ],
    href: '/services/digital-twin',
    color: 'from-teal-600 to-cyan-700',
    category: 'IoT & Digital Twins',
    featured: true
  },
  {
    id: 'micro-crm',
    name: 'AI-Powered Micro CRM',
    description: 'Intelligent customer relationship management with AI insights and automation.',
    icon: Users,
    features: [
      'AI customer insights',
      'Automated lead scoring',
      'Smart email campaigns',
      'Customer behavior analysis',
      'Sales forecasting',
      'Integration capabilities'
    ],
    pricing: {
      starter: '$99/month',
      professional: '$299/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Increase sales by 35%',
      'Improve customer retention',
      'Automated lead nurturing',
      'Data-driven insights'
    ],
    useCases: [
      'Small businesses',
      'Sales teams',
      'Marketing agencies',
      'Startups'
    ],
    href: '/services/micro-crm',
    color: 'from-blue-600 to-purple-700',
    category: 'CRM & Sales',
    featured: true
  },
  {
    id: 'space-tech-platform',
    name: 'Space Technology Platform',
    description: 'Advanced space technology solutions including satellite management and space debris tracking.',
    icon: Rocket,
    features: [
      'Satellite constellation management',
      'Space debris tracking',
      'Orbital optimization',
      'Space weather monitoring',
      'Launch vehicle optimization',
      'Space mission planning'
    ],
    pricing: {
      starter: '$1,499/month',
      professional: '$3,999/month',
      enterprise: 'Custom pricing'
    },
    benefits: [
      'Optimize satellite operations',
      'Reduce collision risks',
      'Enhanced mission success',
      'Cost-effective space operations'
    ],
    useCases: [
      'Satellite operators',
      'Space agencies',
      'Aerospace companies',
      'Research institutions'
    ],
    href: '/services/space-tech',
    color: 'from-indigo-600 to-purple-700',
    category: 'Space Technology',
    featured: true
  }
];

const categories = [
  { name: 'AI & Machine Learning', count: 6, color: 'from-purple-500 to-pink-500' },
  { name: 'Cybersecurity', count: 2, color: 'from-green-500 to-blue-500' },
  { name: 'Quantum Computing', count: 1, color: 'from-purple-500 to-indigo-500' },
  { name: 'IoT & Digital Twins', count: 2, color: 'from-teal-500 to-cyan-500' },
  { name: 'Space Technology', count: 1, color: 'from-indigo-500 to-purple-500' },
  { name: 'CRM & Sales', count: 1, color: 'from-blue-500 to-purple-500' }
];

export default function InnovativeServicesShowcase2027() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2027 | Zion Tech Group"
        description="Discover our cutting-edge AI, cybersecurity, quantum computing, and innovative micro SAAS services. Transform your business with next-generation technology solutions."
        keywords="AI services, cybersecurity, quantum computing, micro SAAS, digital transformation, IT services, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the future of technology with our cutting-edge micro SAAS services, 
            featuring quantum computing, AI, blockchain, and emerging technologies
          </motion.p>
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: 'Total Services', value: allServices.length, icon: Rocket, color: 'from-cyan-500 to-blue-600' },
              { label: 'AI Score Avg', value: `${Math.round(allServices.reduce((acc, s) => acc + s?.aiScore, 0) / allServices.length)}%`, icon: Brain, color: 'from-purple-500 to-pink-600' },
              { label: 'Rating Avg', value: `${(allServices.reduce((acc, s) => acc + s?.rating, 0) / allServices.length).toFixed(1)}`, icon: Star, color: 'from-yellow-500 to-orange-600' },
              { label: 'Categories', value: categories.length - 1, icon: Grid, color: 'from-green-500 to-teal-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of innovative services across multiple technology domains
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.count} services available</p>
                <Link
                  to={`/services#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Explore Services →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.filter(service => service.featured).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={viewMode === 'grid' ? itemVariants : {}}
                    className={viewMode === 'grid' ? '' : 'bg-zion-blue-dark/30 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20'}
                  >
                    {viewMode === 'grid' ? (
                      <motion.div
                        className="bg-zion-blue-dark/30 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20 h-full group cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                        onClick={() => window.open(service?.website, '_blank')}
                      >
                        {/* Service Image */}
                        <div className="relative mb-6 overflow-hidden rounded-lg">
                          <img 
                            src={service?.images[0]} 
                            alt={service.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4 bg-zion-cyan text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {service.category}
                          </div>
                          {service.featured && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              Featured
                            </div>
                          )}
                        </div>
                        {/* Service Content */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 text-sm line-clamp-3">
                            {service.description}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {service.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {/* Stats */}
                          <div className="flex items-center justify-between pt-4 border-t border-zion-purple/20">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Brain className="w-4 h-4 text-zion-cyan" />
                                <span className="text-sm text-gray-300">{service?.aiScore}%</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm text-gray-300">{service?.rating}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-zion-cyan">{service.currency}{service.price}</div>
                              <div className="text-xs text-gray-400">per {service.pricingModel}</div>
                            </div>
                          </div>
                          {/* CTA Button */}
                          <button className="w-full mt-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex gap-6">
                        {/* Service Image */}
                        <div className="relative w-48 h-32 overflow-hidden rounded-lg flex-shrink-0">
                          <img 
                            src={service?.images[0]} 
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-zion-cyan text-black px-2 py-1 rounded-full text-xs font-semibold">
                            {service.category}
                          </div>
                        </div>
                        {/* Service Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <div className="text-right">
                              <div className="text-lg font-bold text-zion-cyan">{service.currency}{service.price}</div>
                              <div className="text-xs text-gray-400">per {service.pricingModel}</div>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Brain className="w-4 h-4 text-zion-cyan" />
                              AI Score: {service?.aiScore}%
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              Rating: {service?.rating}
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {service?.availability}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {service.tags.slice(0, 4).map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex}
                                  className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <button 
                              onClick={() => window.open(service?.website, '_blank')}
                              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold py-2 px-4 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center gap-2"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete overview of our innovative service portfolio
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700 text-purple-300 text-xs rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Starting at:</h4>
                  <div className="text-2xl font-bold text-purple-400">{service.pricing.starter}</div>
                </div>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss how our innovative services can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
