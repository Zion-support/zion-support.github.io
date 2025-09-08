import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence   } from 'framer-motion';
import { Link   } from 'react-router-dom';
import { Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Atom,
  Blockchain,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Eye,
  EyeOff,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  Sparkles,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Dna,
  Space,
  Layers,
  Monitor,
  Smartphone,
  Globe2,
  Leaf
  } from 'lucide-react';
import { SEO   } from '@/components/SEO';
import { ULTIMATE_INNOVATIVE_SERVICES_2026   } from '@/data/ultimateInnovativeServices2026';

export default function UltimateInnovativeServices2026(...args: any[]): any {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [expandedService, setExpandedService] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'quantum-ai', name: 'Quantum AI', icon: Atom, color: 'from-zion-purple to-zion-cyan' },
    { id: 'neuromorphic-ai', name: 'Neuromorphic AI', icon: BrainIcon, color: 'from-zion-pink to-zion-purple' },
    { id: 'synthetic-biology', name: 'Synthetic Biology', icon: Dna, color: 'from-zion-green to-zion-blue' },
    { id: 'space-technology', name: 'Space Technology', icon: Space, color: 'from-zion-blue to-zion-purple' },
    { id: 'advanced-materials', name: 'Advanced Materials', icon: Layers, color: 'from-zion-orange to-zion-red' },
    { id: 'brain-computer-interface', name: 'Brain-Computer Interface', icon: Monitor, color: 'from-zion-purple to-zion-pink' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Globe2, color: 'from-zion-cyan to-zion-green' },
    { id: 'extended-reality', name: 'Extended Reality', icon: Smartphone, color: 'from-zion-orange to-zion-purple' },
    { id: 'edge-ai', name: 'Edge AI', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'federated-learning', name: 'Federated Learning', icon: Network, color: 'from-zion-purple to-zion-blue' },
    { id: 'sustainable-technology', name: 'Sustainable Technology', icon: Leaf, color: 'from-zion-green to-zion-blue' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'under-10k', name: 'Under $10K', range: 'Under $10,000' },
    { id: '10k-20k', name: '$10K - $20K', range: '$10,000 - $20,000' },
    { id: 'over-20k', name: 'Over $20K', range: 'Over $20,000' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'innovation', name: 'Innovation Level' },
    { id: 'roi', name: 'ROI Potential' }
  ];

  const getCategoryIcon = (category: string)   => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string)   => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2026.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'under-10k' && service.price < 10000) ||
                        (selectedPriceRange === '10k-20k' && service.price >= 10000 && service.price <= 20000) ||
                        (selectedPriceRange === 'over-20k' && service.price > 20000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        const innovationOrder = { 'Revolutionary': 3, 'Cutting-edge': 2, 'Advanced': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      case 'roi':
        const aROI = parseInt(a.roi.split('-')[0]);
        const bROI = parseInt(b.roi.split('-')[0]);
        return bROI - aROI;
      default:
        return 0;
    }
  ];

  const toggleServiceExpansion = (serviceId: string)   => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <>
      <SEO 
        title="Ultimate Innovative Services 2026 | Zion Tech Group"
        description="Discover our comprehensive suite of innovative AI, quantum computing, and technology services. Transform your business with cutting-edge solutions from Zion Tech Group."
        keywords="AI services, quantum computing, edge computing, healthcare AI, financial AI, business automation, Zion Tech Group"
        canonical="https://ziontechgroup.com/ultimate-innovative-services-2026"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
                <Rocket className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 text-lg font-medium">2026 Innovation Showcase</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
                Ultimate Innovative
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Services 2026
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
                Experience the future of technology with our comprehensive suite of AI, quantum computing, 
                and cutting-edge solutions designed to transform businesses across all industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center space-x-3 border-2 border-cyan-500/30 text-cyan-400 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </a>
              </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-300 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category   => (
                  <option key={category.id} value={category.id} className="bg-zion-slate-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-300 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {priceRanges.map(range   => (
                  <option key={range.id} value={range.id} className="bg-zion-slate-800 text-white">
                    {range.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-zion-slate-300">Sort by: any</span>
            {sortOptions.map(option   => (
              <button
                key={option.id}
                onClick={() => setSortBy(option.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  sortBy === option.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-300 hover:bg-white/20'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Revolutionary Services Found
            </h2>
            <p className="text-zion-slate-300 text-lg">
              Discover the future of technology with our cutting-edge micro SAAS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {sortedServices.map((service, index)   => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {contactInfo.phone}
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <span className="text-blue-400 text-sm">{contactInfo.address}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Featured Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover our most advanced and transformative services that are reshaping industries 
                and driving the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 ${
                    service.popular ? 'border-cyan-500/50 bg-gradient-to-br from-slate-800/80 to-cyan-900/20' : 'border-slate-700/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center space-x-2 bg-slate-700/50 rounded-full px-3 py-1 mb-3">
                        <span className="text-xs text-gray-300">{service.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      {expandedService === service.id ? (
  {/* Empty JSX fragment */}
                          <EyeOff className="w-4 h-4" />
                          Show Less
                        </React.Fragment>
                      ) : (
  {/* Empty JSX fragment */}
                          <Eye className="w-4 h-4" />
                          Learn More
                        </React.Fragment>
                      )}
                    ></button>

                    {/* Expanded Service Details */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-zion-slate-600/30"
                        >
                          {/* Features */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 5).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2 text-xs text-zion-slate-300">
                                  <CheckCircle className="w-3 h-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-2 text-xs text-zion-slate-300">
                                  <ZapIcon className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Market Info */}
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div>
                              <span className="text-zion-slate-400">Market Size:</span>
                              <div className="text-white font-semibold">{service.marketSize}</div>
                            </div>
                            <div>
                              <span className="text-zion-slate-400">Delivery:</span>
                              <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                            </div>
                          </div>

                          {/* Contact Button */}
                          <div className="mt-4">
                            <Link
                              to="/contact"
                              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-200 font-semibold"
                            >
                              <MessageCircle className="w-4 h-4" />
                              Get Started
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit) => (
                            <li key={benefit} className="flex items-center space-x-2 text-sm text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase) => (
                          <span key={useCase} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={service.link}
                    className={`block w-full text-center py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transform hover:-translate-y-1'
                        : 'border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Learn More & Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 bg-slate-800/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Tailored AI and technology solutions designed specifically for your industry's 
                unique challenges and opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{solution.price}</div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
                Join the technology revolution with Zion Tech Group. Our innovative services 
                are designed to drive growth, efficiency, and competitive advantage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Free Consultation</h3>
                  <p className="text-gray-300">Get expert advice on implementing our solutions</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Custom Solutions</h3>
                  <p className="text-gray-300">Tailored solutions for your specific needs</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-5 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl"
                >
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center space-x-3 border-2 border-cyan-500/30 text-cyan-400 px-12 py-5 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call {contactInfo.phone}</span>
                </a>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">Visit our website for more information</p>
                <a 
                  href={contactInfo.website} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.website}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UltimateInnovativeServices2026;
