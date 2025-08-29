import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe, Brain, Cloud, Rocket, Zap, Shield, Heart, Cpu, Lock, ShoppingCart, BookOpen, Users, MessageCircle, DollarSign as DollarSignIcon } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const Services: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  
  const featuredCategories = [
    { 
      icon: Brain, 
      title: 'AI & Analytics', 
      desc: 'AI-powered business intelligence, sales automation, and predictive analytics solutions.',
      href: '/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Cloud, 
      title: 'Cloud & DevOps', 
      desc: 'Infrastructure automation, cost optimization, and digital transformation services.',
      href: '/it-services',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Rocket, 
      title: 'Emerging Tech', 
      desc: 'Quantum computing, IoT, blockchain, and next-generation technology solutions.',
      href: '/services',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: ShoppingCart, 
      title: 'Micro SaaS', 
      desc: 'Productized SaaS solutions for specific business needs and industry verticals.',
      href: '/micro-saas',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'Digital Transformation', name: 'Digital Transformation', icon: Rocket },
    { id: 'Quantum Technology', name: 'Quantum Technology', icon: Zap },
    { id: 'IoT & Edge', name: 'IoT & Edge', icon: Cpu },
    { id: 'Blockchain', name: 'Blockchain', icon: Lock },
    { id: 'Healthcare IoT', name: 'Healthcare IoT', icon: Heart },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'Sustainability', name: 'Sustainability', icon: Globe },
    { id: '5G Technology', name: '5G Technology', icon: Zap },
    { id: 'Content Marketing', name: 'Content Marketing', icon: BookOpen },
    { id: 'Supply Chain', name: 'Supply Chain', icon: Workflow },
    { id: 'Customer Experience', name: 'Customer Experience', icon: Users },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: ShoppingCart }
  ];

  const filtered = useMemo(() => {
    let filteredServices = services;
    
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filteredServices = services.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.subcategory?.toLowerCase().includes(q) ||
        s.tags?.some(t => t.toLowerCase().includes(q))
      );
    }
    
    if (selectedCategory !== 'all') {
      filteredServices = filteredServices.filter(s => 
        s.category === selectedCategory || s.subcategory === selectedCategory
      );
    }
    
    return filteredServices;
  }, [query, selectedCategory, services]);

  const pricingTiers = [
    {
      name: 'Micro SaaS Solutions',
      range: '$39 - $299/month',
      description: 'Productized SaaS for specific business needs',
      features: ['Quick setup', 'Monthly billing', 'Standard support', 'Core features']
    },
    {
      name: 'AI & Analytics Projects',
      range: '$5,000 - $60,000+',
      description: 'Custom AI solutions and analytics platforms',
      features: ['Custom development', 'AI model training', 'Enterprise support', 'Full ownership']
    },
    {
      name: 'IT Infrastructure & DevOps',
      range: '$10,000 - $120,000+',
      description: 'Enterprise infrastructure and automation',
      features: ['Architecture design', 'Implementation', '24/7 support', 'Compliance ready']
    },
    {
      name: 'Emerging Technology',
      range: '$15,000 - $100,000+',
      description: 'Quantum, blockchain, and cutting-edge solutions',
      features: ['Research & development', 'Proof of concept', 'Expert consultation', 'Future-proof tech']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Services - Zion Tech Group" description="Comprehensive AI, Micro SaaS, Cloud/DevOps, Digital Twin, Data & Analytics, and Enterprise IT solutions. Transform your business with cutting-edge technology." />

      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Transform Your Business
            </motion.h1>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI, Micro SaaS, Cloud/DevOps, and emerging technology solutions designed to accelerate your digital transformation journey.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-cyan-400">
                <Brain className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Cloud className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Cloud & DevOps</span>
              </div>
              <div className="flex items-center text-green-400">
                <Rocket className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Emerging Tech</span>
              </div>
              <div className="flex items-center text-orange-400">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Micro SaaS</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, e.g. AI analytics, quantum computing, cloud devops..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-lg"
            />
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-slate-600 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Categories</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((category) => (
              <Link key={category.title} to={category.href} className="group">
                <div className={`bg-gradient-to-br ${category.color} p-1 rounded-2xl transition-transform duration-300 group-hover:scale-105`}>
                  <div className="bg-slate-900 rounded-2xl p-6 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{category.desc}</p>
                    <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore Services</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Available Services</h2>
            <div className="text-slate-400">
              Showing {filtered.length} of {services.length} services
            </div>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, 30).map((svc) => (
              <motion.div 
                key={svc.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-3">{svc.category}</div>
                <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors mb-3">{svc.title}</h3>
                <p className="text-sm text-slate-300 line-clamp-3 mb-4">{svc.description}</p>
                
                {svc.features && svc.features.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {svc.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-slate-800 px-2 py-1 rounded text-cyan-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-cyan-300/80 font-medium">
                    {svc.marketPrice}
                  </div>
                  {svc.roi && (
                    <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">
                      ROI: {svc.roi}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length > 30 && (
            <div className="text-center mt-12">
              <Link 
                to="/services/micro-saas-solutions" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90 transition-opacity font-medium"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing Overview</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Transparent pricing for all our services. From micro SaaS solutions to enterprise-grade implementations, we have options for every business size and budget.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="bg-slate-800/60 border border-cyan-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{tier.name}</h3>
                <div className="text-2xl font-bold mb-2">{tier.range}</div>
                <p className="text-slate-300 text-sm mb-4">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Contact Us</h3>
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 mr-3 text-cyan-400" />
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 mr-3 text-cyan-400" />
                      <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 mr-3 text-cyan-400" />
                      <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Office Location</h3>
                  <div className="text-slate-300">
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown, DE 19709</p>
                    <p>United States</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link 
                      to="/request-quote" 
                      className="block w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-center"
                    >
                      Request Quote
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors text-center"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-slate-400">
              <p className="mb-2">
                <strong>Blended rates:</strong> $110–$220/hr | <strong>Fixed scope projects:</strong> Available
              </p>
              <p>
                All services include comprehensive support, documentation, and ongoing maintenance options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

