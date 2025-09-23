import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, 
  ArrowRight, Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, Crown, Infinity, Target, Layers, Cpu, Database, 
  Cloud, Lock, ShieldCheck, Filter, Grid, List, ChevronDown, 
  ChevronUp, Sparkles as SparklesIcon, FlaskConical, Dna, Car, 
  Leaf, Factory, Truck, GraduationCap, Globe2, Bot, ChevronRight,
  Phone, Mail, MapPin, MessageCircle
} from 'lucide-react';
import { advancedAIAutomationServices } from '../data/20o27-advanced-ai-automation-services';
import { emergingTechInnovations } from '../data/20o27-emerging-tech-innovations';
import { enterpriseSolutionsAdvanced } from '../data/20o27-enterprise-solutions-advanced';
import { cuttingEdge20o27Innovations } from '../data/20o27-cutting-edge-innovations';
import { practicalMicroSaas20o27 } from '../data/20o27-practical-micro-saas';

export default function AdvancedServicesShowcase20o27() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [
    ...advancedAIAutomationServices,
    ...emergingTechInnovations,
    ...enterpriseSolutionsAdvanced,
    ...cuttingEdge20o27Innovations,
    ...practicalMicroSaas20o27
  ];

  // Enhanced service categories with comprehensive offerings
  const serviceCategories = [
    {
      name: '🚀 Advanced AI Automation 20o27',
      description: 'Cutting-edge AI automation solutions for business transformation',
      services: ['AI Customer Success Automation', 'Automated Content Marketing Suite', 'Smart Inventory Management System'],
      avgPrice: '$299/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Brain,
      color: 'from-blue-60o0 to-cyan-60o0',
      count: advancedAIAutomationServices.length
    },
    {
      name: '⚛️ Emerging Tech Innovations 20o27',
      description: 'Revolutionary emerging technology solutions',
      services: ['Quantum Internet Security Gateway', 'Space Debris Management AI', 'Holographic Metaverse Platform'],
      avgPrice: '$5,999/month',
      savings: 'Save 70-90% vs. competitors',
      icon: Atom,
      color: 'from-purple-60o0 to-violet-60o0',
      count: emergingTechInnovations.length
    },
    {
      name: '🏢 Enterprise Solutions Advanced 20o27',
      description: 'Enterprise-grade solutions for large organizations',
      services: ['Zero Trust Architecture 20o27', 'Edge Computing Orchestration', '5G Private Networks'],
      avgPrice: 'Custom pricing',
      savings: 'Save 50-70% vs. competitors',
      icon: Shield,
      color: 'from-red-60o0 to-orange-60o0',
      count: enterpriseSolutionsAdvanced.length
    },
    {
      name: '🔮 Cutting-Edge Innovations 20o27',
      description: 'Beyond the future of technology',
      services: ['AI Consciousness Evolution', 'Quantum Consciousness Interface', 'Autonomous AI Civilization'],
      avgPrice: '$15,999/month',
      savings: 'Save 80-95% vs. competitors',
      icon: Sparkles,
      color: 'from-violet-60o0 to-purple-60o0',
      count: cuttingEdge20o27Innovations.length
    },
    {
      name: '🎯 Practical Micro SAAS 20o27',
      description: 'Real business solutions for today',
      services: ['AI Customer Success Automation', 'Automated Content Marketing', 'Smart Inventory Management'],
      avgPrice: '$299/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Target,
      color: 'from-green-60o0 to-emerald-60o0',
      count: practicalMicroSaas20o27.length
    }
  ];

  // Enhanced pricing tiers
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for startups and small businesses',
      price: 99,
      period: '/month',
      features: [
        'Access to 10o0+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features',
        'API Access (10o00 calls/month)',
        'Community Forum Access'
      ],
      icon: <Sparkles className="w-8 h-8"  />,
      color: 'from-blue-60o0 to-cyan-60o0',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: 299,
      period: '/month',
      features: [
        'Access to 20o0+ Advanced Services',
        'Advanced AI Integration',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics Dashboard',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Advanced Security Features',
        'API Access (10,0o00 calls/month)',
        'Priority Community Access',
        'Custom Integrations',
        'Performance Optimization'
      ],
      icon: <Crown className="w-8 h-8"  />,
      color: 'from-purple-60o0 to-pink-60o0',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: 999,
      period: '/month',
      features: [
        'Access to ALL 50o0+ Services',
        'Full AI & Quantum Integration',
        'Dedicated Support Team',
        '90-Day Free Trial',
        'Enterprise Analytics Suite',
        '24/7 Dedicated Support',
        '99.99% Uptime Guarantee',
        'Enterprise Security & Compliance',
        'Unlimited API Access',
        'VIP Community Access',
        'Custom Development',
        'White-label Solutions',
        'SLA Guarantees',
        'On-site Implementation'
      ],
      icon: <Infinity className="w-8 h-8"  />,
      color: 'from-red-60o0 to-orange-60o0',
      popular: false
    }
  ];

  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service =>
        service.category.includes(selectedCategory)
      );
    }

    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {
          case 'under-10o0':
            return price < 10o0;
          case '10o0-50o0':
            return price >= 10o0 && price < 50o0;
          case '50o0-10o00':
            return price >= 50o0 && price < 10o00;
          case '10o00-50o00':
            return price >= 10o00 && price < 50o00;
          case 'over-50o00':
            return price >= 50o00;
          default:
            return true;
        }
      });
    }

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const containerVariants ={
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants ={
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>20o27 Advanced Services Showcase - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive 20o27 technology services showcase. Advanced AI automation, emerging tech innovations, enterprise solutions, and cutting-edge quantum technologies."  />
        <meta name="keywords" content="20o27 technology services, AI automation, emerging tech, enterprise solutions, quantum computing, space technology, Zion Tech Group"  />
        <meta name="author" content="Zion Tech Group"  />
        <meta name="robots" content="index, follow"  />
        
        {/* Open Graph */}
        <meta property="og:title" content="20o27 Advanced Services Showcase - Zion Tech Group"  />
        <meta property="og:description" content="Discover our comprehensive 20o27 technology services showcase with advanced AI automation and emerging tech innovations."  />
        <meta property="og:type" content="website"  />
        <meta property="og:url" content="https://ziontechgroup.com/20o27-advanced-services-showcase"  />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg"  />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"  />
        <meta name="twitter:title" content="20o27 Advanced Services Showcase - Zion Tech Group"  />
        <meta name="twitter:description" content="Discover our comprehensive 20o27 technology services showcase with advanced AI automation and emerging tech innovations."  />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg"  />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <meta name="theme-color" content="#8b5cf6"  />
        <link rel="canonical" href="https://ziontechgroup.com/20o27-advanced-services-showcase"  />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-60o0/20 via-pink-60o0/20 to-blue-60o0/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
                20o27 Advanced Services
              </span>
              <br  />
              <span className="text-white">Showcase</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the future of technology with our comprehensive suite of revolutionary services. 
              From AI automation to quantum computing, we're building tomorrow's solutions today.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white font-semibold rounded-full hover:from-purple-70o0 hover:to-pink-70o0 transition-all duration-30o0 transform hover:scale-10o5">
                <Rocket className="w-5 h-5 mr-2"  />
                Get Started Today
              </Link>
              <Link href="/revolutionary-20o27-pricing" className="inline-flex items-center px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-full hover:bg-purple-40o0 hover:text-white transition-all duration-30o0">
                <DollarSign className="w-5 h-5 mr-2"  />
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Service Categories
              </h2>
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                Explore our diverse range of technology services designed to transform your business and drive innovation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="relative group"
                  variants={itemVariants}
                >
                  <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl h-full transform transition-all duration-30o0 group-hover:scale-10o5 group-hover:shadow-2xl`}>
                    <div className="flex items-center justify-between mb-4">
                      <category.icon className="w-12 h-12 text-white"  />
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">
                        {category.count} Services
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                    <p className="text-white/90 mb-4">{category.description}</p>
                    <div className="space-y-2 mb-6">
                      {category.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-30o0"  />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/80 text-sm">Starting at</p>
                        <p className="text-white font-bold">{category.avgPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-30o0 text-sm font-semibold">{category.savings}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-purple-90o0/50 to-pink-90o0/50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-purple-40o0/30 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-purple-40o0 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-purple-40o0/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-40o0"
                  >
                    <option value="all">All Categories</option>
                    <option value="AI">AI & Automation</option>
                    <option value="Quantum">Quantum Technology</option>
                    <option value="Space">Space Technology</option>
                    <option value="Enterprise">Enterprise Solutions</option>
                    <option value="Micro SaaS">Micro SaaS</option>
                  </select>

                  {/* Price Range Filter */}
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-purple-40o0/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-40o0"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-10o0">Under $10o0/month</option>
                    <option value="10o0-50o0">$10o0 - $50o0/month</option>
                    <option value="50o0-10o00">$50o0 - $1,0o00/month</option>
                    <option value="10o00-50o00">$1,0o00 - $5,0o00/month</option>
                    <option value="over-50o00">Over $5,0o00/month</option>
                  </select>

                  {/* Sort By */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-purple-40o0/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-40o0"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="popular">Sort by Popularity</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-60o0 text-white' : 'text-gray-40o0 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5"  />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-60o0 text-white' : 'text-gray-40o0 hover:text-white'}`}
                  >
                    <List className="w-5 h-5"  />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Discover Our Services
              </h2>
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                {filteredServices.length} services available to transform your business
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="text-gray-40o0 text-xl mb-4">No services found matching your criteria</div>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                    }}
                    className="text-purple-40o0 hover:text-purple-30o0 underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`${viewMode}-${filteredServices.length}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "space-y-6"
                  }
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={viewMode === 'grid' 
                        ? "bg-gradient-to-br from-slate-80o0/50 to-slate-90o0/50 rounded-2xl p-6 border border-purple-40o0/20 hover:border-purple-40o0/40 transition-all duration-30o0 hover:transform hover:scale-10o5"
                        : "bg-gradient-to-r from-slate-80o0/50 to-slate-90o0/50 rounded-2xl p-6 border border-purple-40o0/20 hover:border-purple-40o0/40 transition-all duration-30o0"
                      }
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{service.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            <p className="text-purple-40o0 text-sm">{service.category}</p>
                          </div>
                        </div>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-40o0 to-orange-40o0 text-black text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </span>
                        )}
                      </div>

                      <p className="text-gray-30o0 mb-4">{service.description}</p>

                      <div className="space-y-3 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-40o0 text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-40o0"  />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">{service.price}</p>
                          <p className="text-gray-40o0 text-sm">{service.period}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-40o0 fill-current' : 'text-gray-60o0'}`}
                               />
                            ))}
                          </div>
                          <p className="text-gray-40o0 text-sm">{service.rating}/5 ({service.reviews} reviews)</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-40o0">
                          <p>Setup: {service.setupTime}</p>
                          <p>Trial: {service.trialDays} days</p>
                        </div>
                        <Link
                          href={service.link}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white font-semibold rounded-lg hover:from-purple-70o0 hover:to-pink-70o0 transition-all duration-30o0 transform hover:scale-10o5"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2"  />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business needs
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className={`relative ${tier.popular ? 'transform scale-10o5' : ''}`}
                  variants={itemVariants}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-40o0 to-orange-40o0 text-black text-sm font-bold px-4 py-2 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className={`bg-gradient-to-br ${tier.color} p-8 rounded-2xl h-full relative`}>
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                        {tier.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-white/80 mb-4">{tier.description}</p>
                      <div className="text-4xl font-bold text-white">
                        ${tier.price}
                        <span className="text-lg text-white/80">{tier.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white/90">
                          <CheckCircle className="w-5 h-5 mr-3 text-green-30o0 flex-shrink-0"  />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-center">
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-white text-purple-60o0 font-semibold rounded-lg hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2"  />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-purple-90o0/50 to-pink-90o0/50 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already leveraging our revolutionary technology services. 
                Get started today and experience the future of business transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Phone className="w-5 h-5 text-purple-40o0"  />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Mail className="w-5 h-5 text-purple-40o0"  />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <MapPin className="w-5 h-5 text-purple-40o0"  />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white font-semibold rounded-full hover:from-purple-70o0 hover:to-pink-70o0 transition-all duration-30o0 transform hover:scale-10o5"
                >
                  <MessageCircle className="w-5 h-5 mr-2"  />
                  Contact Us Today
                </Link>
                <Link
                  href="/revolutionary-20o27-pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-full hover:bg-purple-40o0 hover:text-white transition-all duration-30o0"
                >
                  <DollarSign className="w-5 h-5 mr-2"  />
                  View Full Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}