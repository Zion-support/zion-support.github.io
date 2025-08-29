import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  DollarSign, 
  ExternalLink, 
  Workflow, 
  MessageSquare, 
  Globe,
  Brain,
  Shield,
  Atom,
  Heart,
  Zap,
  Target,
  Users,
  BarChart3,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Cloud,
  Database,
  Network,
  Eye,
  Activity,
  Cpu,
  Server,
  Phone
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { MICRO_SAAS_SERVICES } from '../data/microSaasServices';

const InnovativeServicesShowcase2025 = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const services = MICRO_SAAS_SERVICES;
  
  const categories = [
    'All',
    'AI Services',
    'IT Services',
    'Healthcare',
    'Cybersecurity',
    'Quantum Computing',
    'Sales & Marketing',
    'Compliance & Legal'
  ];

  const featuredServices = [
    {
      id: "ai-sales-copilot",
      title: "AI Sales Copilot Pro",
      description: "Intelligent sales assistant that automates lead qualification, follow-ups, and sales process optimization using advanced AI.",
      category: "AI Services",
      price: 199,
      marketPrice: "$199-499/month",
      benefits: ["35% increase in conversions", "80% faster follow-ups", "50% team productivity"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      route: "/services/ai-sales-copilot"
    },
    {
      id: "ai-cybersecurity-suite",
      title: "AI Cybersecurity Suite",
      description: "Comprehensive AI-powered cybersecurity platform for threat detection, prevention, and incident response.",
      category: "Cybersecurity",
      price: 399,
      marketPrice: "$399-999/month",
      benefits: ["10x faster threat detection", "60% fewer false positives", "Automated incident response"],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      route: "/services/ai-cybersecurity-suite"
    },
    {
      id: "quantum-ai-platform",
      title: "Quantum AI Platform",
      description: "Next-generation quantum computing platform for AI applications, optimization problems, and complex simulations.",
      category: "Quantum Computing",
      price: 999,
      marketPrice: "$999-2999/month",
      benefits: ["Quantum advantage", "100x+ speedup", "Future-proof technology"],
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      route: "/services/quantum-ai-platform"
    },
    {
      id: "ai-healthcare-analytics",
      title: "AI Healthcare Analytics",
      description: "AI-powered healthcare analytics platform for patient data analysis, predictive diagnostics, and treatment optimization.",
      category: "Healthcare",
      price: 599,
      marketPrice: "$599-1499/month",
      benefits: ["30% better diagnostics", "40% cost reduction", "Population health insights"],
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      route: "/services/ai-healthcare-analytics"
    }
  ];

  const filtered = useMemo(() => {
    let filteredServices = services;
    
    if (selectedCategory !== 'All') {
      filteredServices = services.filter(s => s.category === selectedCategory);
    }
    
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filteredServices = filteredServices.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags?.some(t => t.toLowerCase().includes(q))
      );
    }
    
    return filteredServices;
  }, [query, selectedCategory, services]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Server;
      case 'Healthcare': return Heart;
      case 'Cybersecurity': return Shield;
      case 'Quantum Computing': return Atom;
      case 'Sales & Marketing': return Target;
      case 'Compliance & Legal': return Lock;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Services': return 'from-blue-500 to-cyan-500';
      case 'IT Services': return 'from-green-500 to-emerald-500';
      case 'Healthcare': return 'from-green-500 to-emerald-500';
      case 'Cybersecurity': return 'from-red-500 to-orange-500';
      case 'Quantum Computing': return 'from-purple-500 to-pink-500';
      case 'Sales & Marketing': return 'from-blue-500 to-purple-500';
      case 'Compliance & Legal': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group" 
        description="Explore our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services. Transform your business with cutting-edge AI, cybersecurity, quantum computing, and healthcare analytics."
        keywords="AI services, micro SAAS, cybersecurity, quantum computing, healthcare analytics, IT services, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-4xl sm:text-6xl font-extrabold tracking-tight"
            >
              Innovative Services Showcase
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> 2025</span>
            </motion.h1>
            <p className="mt-6 text-xl text-slate-300">
              Discover our comprehensive portfolio of AI-powered micro SAAS services, cutting-edge IT solutions, 
              and revolutionary technology services designed to transform your business.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services, e.g. AI, cybersecurity, quantum, healthcare..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all rounded-2xl p-6 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4 line-clamp-3">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-xs text-cyan-300/80 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0"/>
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-white">${service.price}/month</span>
                  <span className="text-xs text-slate-400">Market: {service.marketPrice}</span>
                </div>
                <Link 
                  to={service.route}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Complete Service Portfolio</h2>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, 30).map((svc, index) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all rounded-2xl p-6 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(svc.category)} rounded-lg flex items-center justify-center`}>
                    {React.createElement(getCategoryIcon(svc.category), { className: "w-5 h-5 text-white" })}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    <span className="text-sm text-slate-300">{svc.rating}</span>
                  </div>
                </div>
                
                <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-2">{svc.category}</div>
                <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors mb-3">{svc.title}</h3>
                <p className="text-sm text-slate-300 line-clamp-3 mb-4">{svc.description}</p>
                
                <div className="space-y-2 mb-4">
                  {svc.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="text-xs text-cyan-300/80 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0"/>
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-white">${svc.price}/month</span>
                  <span className="text-xs text-slate-400">Market: {svc.marketPrice}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-slate-400">AI Score: {svc.aiScore}</span>
                  </div>
                  <Link 
                    to={`/services/${svc.id}`}
                    className="inline-flex items-center px-3 py-2 bg-slate-800/50 text-cyan-300 rounded-lg text-sm hover:bg-slate-700/50 transition-all"
                  >
                    Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Explore our innovative services and discover how AI-powered solutions can revolutionize your operations, 
            improve efficiency, and drive growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">
                ziontechgroup.com
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800/50 border border-cyan-400/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Office Location</h3>
            <p className="text-slate-300">
              364 E Main St STE 1008<br />
              Middletown DE 19709<br />
              United States
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;