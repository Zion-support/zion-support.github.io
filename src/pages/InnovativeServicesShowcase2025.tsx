import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Star, TrendingUp, Zap, Brain, Shield, Heart, Atom, Globe, Users, BarChart3, CheckCircle, Phone, Mail, MapPin, ExternalLink, Workflow, Activity, Lock, Cloud, Database, Network, Smartphone, Laptop, Server, Eye, FileText, Microscope, Pill, Flask, TrendingDown, ShoppingCart, Settings, Target, Layers, PieChart, LineChart, BarChart, Clock, RefreshCw, MessageSquare, Bell, Calendar, Key, Fingerprint, Bug, Virus, Fire, AlertCircle, ShieldCheck, UserCheck, Globe2, LockKeyhole, ChartBar, PieChart as PieChartIcon, LineChart as LineChartIcon, ScatterPlot, Histogram, BellRing, AlertOctagon, CheckSquare, XCircle, Clock3, User, Users2, UserPlus, UserMinus, UserX, UserCheck2, UserClock, UserCog, UserEdit, UserSearch, UserVoice, UserCheck3, UserX2, UserMinus2, UserPlus2, UserCheck4, UserX3, UserMinus3, UserPlus3, UserCheck5, UserX4, UserMinus4, UserPlus4, UserCheck6, UserX5, UserMinus5, UserPlus5, UserCheck7, UserX6, UserMinus6, UserPlus6, UserCheck8, UserX7, UserMinus7, UserPlus7, UserCheck9, UserX8, UserMinus8, UserPlus8, UserCheck10, UserX9, UserMinus9, UserPlus9 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

export default function InnovativeServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('All');

  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];
  const innovationLevels = ['All', ...Array.from(new Set(services.map(s => s.innovationLevel)))];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'All' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovation;
    });
  }, [services, searchQuery, selectedCategory, selectedInnovationLevel]);

  const featuredServices = [
    {
      id: 'ai-workflow-automation-platform',
      title: 'AI Workflow Automation Platform',
      description: 'Intelligent workflow automation that reduces manual work by 70% and improves process efficiency by 60%',
      category: 'AI & Automation',
      price: '$1,999/month',
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-workflow-automation'
    },
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection that identifies threats 10x faster with 60% fewer false positives',
      category: 'AI & Security',
      price: '$2,999/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/services/ai-cybersecurity-suite'
    },
    {
      id: 'ai-healthcare-analytics-platform',
      title: 'AI Healthcare Analytics Platform',
      description: 'Improve diagnostic accuracy by 30% and reduce healthcare costs by 25%',
      category: 'AI & Healthcare',
      price: '$3,999/month',
      icon: Heart,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-healthcare-analytics'
    },
    {
      id: 'quantum-ai-platform',
      title: 'Quantum AI Platform',
      description: 'Revolutionary quantum computing with AI integration for solving previously impossible problems',
      category: 'Quantum Computing',
      price: '$9,999/month',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      link: '/services/quantum-ai-platform'
    }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': BarChart3,
      'AI & Customer Experience': Users,
      'AI & Automation': Workflow,
      'AI & Security': Shield,
      'AI & Healthcare': Heart,
      'AI & Edge Computing': Smartphone,
      'AI & Sustainability': Globe,
      'Quantum Computing': Atom,
      'Blockchain': Lock,
      'IoT & Edge': Network,
      'Cloud & DevOps': Cloud,
      'Data & Analytics': Database
    };
    return iconMap[category] || BarChart3;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Analytics': 'from-blue-500 to-cyan-500',
      'AI & Customer Experience': 'from-green-500 to-emerald-500',
      'AI & Automation': 'from-blue-500 to-cyan-500',
      'AI & Security': 'from-red-500 to-orange-500',
      'AI & Healthcare': 'from-green-500 to-emerald-500',
      'AI & Edge Computing': 'from-purple-500 to-pink-500',
      'AI & Sustainability': 'from-green-500 to-emerald-500',
      'Quantum Computing': 'from-purple-500 to-pink-500',
      'Blockchain': 'from-yellow-500 to-orange-500',
      'IoT & Edge': 'from-indigo-500 to-purple-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Data & Analytics': 'from-blue-500 to-cyan-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Explore our cutting-edge AI, quantum computing, cybersecurity, healthcare, and automation services. Transform your business with innovative technology solutions."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover cutting-edge AI, quantum computing, cybersecurity, and automation solutions that transform businesses and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300">
              Our most innovative and transformative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group"
              >
                <Link to={service.link}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-300">{service.category}</span>
                    <span className="text-lg font-bold text-blue-400">{service.price}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                />
              </div>
              
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {innovationLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-400">
              Showing {filteredServices.length} of {services.length} services
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.innovationLevel}</div>
                    <div className="text-sm text-green-400">{service.roi} ROI</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{service.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-cyan-300">{service.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-blue-400 font-semibold">{service.currency}{service.price.toLocaleString()}/{service.pricingModel}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Delivery:</span>
                    <span className="text-green-400">{service.estimatedDelivery}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    Market: {service.marketPrice}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive portfolio of innovative services and start your digital transformation journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors text-lg font-semibold"
              >
                <Mail className="w-6 h-6 mr-2" />
                Get Free Consultation
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}