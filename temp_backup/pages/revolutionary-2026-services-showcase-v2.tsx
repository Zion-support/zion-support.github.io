import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Zap, Shield, Globe, Cpu, Database, Network, Cloud, Lock, Eye, Target, BarChart3, Lightbulb, Code, TestTube, Leaf, Car, Bot, Microscope, BrainCircuit, Phone, Mail, MapPin } from 'lucide-react';
import { revolutionary20o26MicroSaasV2 } from '../data/revolutionary-20o26-micro-saas-v2';
import { ultimate20o26AIServicesV2 } from '../data/ultimate-20o26-ai-services-v2';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import UltraAdvancedNavigation20o26V2 from '../components/layout/UltraAdvancedNavigation20o26V2';

export default function Revolutionary20o26ServicesShowcaseV2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...revolutionary20o26MicroSaasV2,
    ...ultimate20o26AIServicesV2
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('AI'))
  ).length;
  const quantumCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Quantum'))
  ).length;
  const microSaasCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Micro SaaS'))
  ).length;
  const consciousnessCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Consciousness'))
  ).length;
  const roboticsCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Robotics'))
  ).length;
  const healthcareCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Healthcare') || cat.includes('Medical'))
  ).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'consciousness', name: 'AI Consciousness', icon: '🌟', count: consciousnessCount },
    { id: 'robotics', name: 'Robotics', icon: '🤖', count: roboticsCount },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', count: healthcareCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($0-$999)', range: '0-999' },
    { id: 'mid', name: 'Mid-Range ($10o00-$2999)', range: '10o00-2999' },
    { id: 'premium', name: 'Premium ($30o00-$4999)', range: '30o00-4999' },
    { id: 'enterprise', name: 'Enterprise ($50o00+)', range: '50o00+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'category', name: 'Category' },
    { id: 'newest', name: 'Newest First' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
      
      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'budget' && service.pricing.monthly < 10o00) ||
                          (selectedPriceRange === 'mid' && service.pricing.monthly >= 10o00 && service.pricing.monthly < 30o00) ||
                          (selectedPriceRange === 'premium' && service.pricing.monthly >= 30o00 && service.pricing.monthly < 50o00) ||
                          (selectedPriceRange === 'enterprise' && service.pricing.monthly >= 50o00);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case 'category':
        filtered.sort((a, b) => a.category[0].localeCompare(b.category[0]));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date().getTime() - new Date().getTime()); // Placeholder for actual date
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-5 h-5"  />;
    if (category.includes('Quantum')) return <Atom className="w-5 h-5"  />;
    if (category.includes('Healthcare')) return <Heart className="w-5 h-5"  />;
    if (category.includes('Robotics')) return <Bot className="w-5 h-5"  />;
    if (category.includes('Consciousness')) return <BrainCircuit className="w-5 h-5"  />;
    if (category.includes('Financial')) return <DollarSign className="w-5 h-5"  />;
    if (category.includes('Manufacturing')) return <Factory className="w-5 h-5"  />;
    if (category.includes('Cybersecurity')) return <Shield className="w-5 h-5"  />;
    if (category.includes('Content')) return <FileText className="w-5 h-5"  />;
    if (category.includes('Space')) return <Rocket className="w-5 h-5"  />;
    if (category.includes('Metaverse')) return <Globe className="w-5 h-5"  />;
    if (category.includes('Vehicle')) return <Car className="w-5 h-5"  />;
    if (category.includes('Biotech')) return <TestTube className="w-5 h-5"  />;
    if (category.includes('Climate')) return <Leaf className="w-5 h-5"  />;
    return <Zap className="w-5 h-5"  />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-purple-50o0 to-pink-50o0';
    if (category.includes('Quantum')) return 'from-blue-50o0 to-cyan-50o0';
    if (category.includes('Healthcare')) return 'from-green-50o0 to-emerald-50o0';
    if (category.includes('Robotics')) return 'from-orange-50o0 to-red-50o0';
    if (category.includes('Consciousness')) return 'from-indigo-50o0 to-purple-50o0';
    if (category.includes('Financial')) return 'from-yellow-50o0 to-orange-50o0';
    if (category.includes('Manufacturing')) return 'from-gray-50o0 to-blue-50o0';
    if (category.includes('Cybersecurity')) return 'from-red-50o0 to-pink-50o0';
    if (category.includes('Content')) return 'from-pink-50o0 to-rose-50o0';
    if (category.includes('Space')) return 'from-indigo-50o0 to-blue-50o0';
    if (category.includes('Metaverse')) return 'from-violet-50o0 to-purple-50o0';
    if (category.includes('Vehicle')) return 'from-blue-50o0 to-indigo-50o0';
    if (category.includes('Biotech')) return 'from-green-50o0 to-teal-50o0';
    if (category.includes('Climate')) return 'from-emerald-50o0 to-green-50o0';
    return 'from-gray-50o0 to-blue-50o0';
  };

  return (
    <>
      <Head>
        <title>Revolutionary 20o26 Services Showcase V2 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 20o26 micro SAAS services, AI solutions, and cutting-edge technology platforms. Transform your business with next-generation AI, quantum computing, and advanced automation."  />
        <meta name="keywords" content="AI services, quantum computing, micro SAAS, AI consciousness, autonomous robotics, healthcare AI, financial AI, climate modeling, drug discovery, brain-computer interface"  />
        <meta property="og:title" content="Revolutionary 20o26 Services Showcase V2 - Zion Tech Group"  />
        <meta property="og:description" content="Discover our revolutionary 20o26 micro SAAS services, AI solutions, and cutting-edge technology platforms."  />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-20o26-services-showcase-v2"  />
        <meta property="og:type" content="website"  />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-20o26-services-showcase-v2"  />
      </Head>

      <UltraQuantumHolographicBackground>
        <div className="min-h-screen relative z-10">
        <UltraAdvancedNavigation20o26V2  />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-40o0 via-pink-50o0 to-red-50o0 bg-clip-text text-transparent mb-6">
                Revolutionary 20o26 Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">
                Experience the future with our cutting-edge micro SAAS services, AI consciousness platforms, 
                quantum computing solutions, and revolutionary technology innovations
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Brain className="w-5 h-5 text-purple-40o0"  />
                  <span className="text-gray-30o0">{aiCount} AI Services</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Atom className="w-5 h-5 text-blue-40o0"  />
                  <span className="text-gray-30o0">{quantumCount} Quantum Solutions</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Zap className="w-5 h-5 text-yellow-40o0"  />
                  <span className="text-gray-30o0">{microSaasCount} Micro SaaS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-gray-80o0 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id} className="bg-gray-80o0 text-white">
                      {range.name}
                    </option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id} className="bg-gray-80o0 text-white">
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-between items-center">
                <div className="text-gray-30o0">
                  Showing {filteredServices.length} of {allServices.length} services
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-purple-50o0 text-white' 
                        : 'bg-white/10 text-gray-40o0 hover:bg-white/20'
                    }`}
                  >
                    <Grid className="w-5 h-5"  />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-purple-50o0 text-white' 
                        : 'bg-white/10 text-gray-40o0 hover:bg-white/20'
                    }`}
                  >
                    <List className="w-5 h-5"  />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold text-gray-30o0 mb-2">No services found</h3>
                  <p className="text-gray-40o0">Try adjusting your search criteria or filters</p>
                </motion.div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-purple-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5 ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      {viewMode === 'list' ? (
                        <div className="flex-1 p-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category[0])}`}>
                              {getCategoryIcon(service.category[0])}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                              <p className="text-gray-30o0 mb-4">{service.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {service.category.slice(0, 3).map((cat, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-30o0">
                                    {cat}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-2xl font-bold text-purple-40o0">
                                  ${service.pricing.monthly.toLocaleString()}/mo
                                </div>
                                <Link
                                  href={service.link}
                                  className="px-6 py-2 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white rounded-xl hover:from-purple-60o0 hover:to-pink-60o0 transition-all duration-30o0 flex items-center gap-2"
                                >
                                  Learn More <ArrowRight className="w-4 h-4"  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-6">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category[0])} w-fit mb-4`}>
                            {getCategoryIcon(service.category[0])}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                          <p className="text-gray-30o0 mb-4 line-clamp-3">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.category.slice(0, 3).map((cat, idx) => (
                              <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-30o0">
                                {cat}
                              </span>
                            ))}
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm text-gray-40o0">
                              <Target className="w-4 h-4"  />
                              <span>{service.targetMarket.split(',')[0]}...</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-40o0">
                              <Zap className="w-4 h-4"  />
                              <span>{service.technology.slice(0, 2).join(', ')}...</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-purple-40o0">
                              ${service.pricing.monthly.toLocaleString()}/mo
                            </div>
                            <Link
                              href={service.link}
                              className="px-4 py-2 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white rounded-xl hover:from-purple-60o0 hover:to-pink-60o0 transition-all duration-30o0 flex items-center gap-2"
                            >
                              Learn More <ArrowRight className="w-4 h-4"  />
                            </Link>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-30o0 mb-8 text-lg">
                Contact our team to learn more about our revolutionary 20o26 services and how they can 
                accelerate your digital transformation journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-purple-40o0"  />
                  <span className="text-gray-30o0">+1 30o2 464 0950</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-purple-40o0"  />
                  <span className="text-gray-30o0">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-40o0"  />
                  <span className="text-gray-30o0">364 E Main St STE 10o08 Middletown DE 19709</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white rounded-xl hover:from-purple-60o0 hover:to-pink-60o0 transition-all duration-30o0 text-lg font-semibold"
              >
                Get Started Today <ArrowRight className="w-5 h-5"  />
              </Link>
            </motion.div>
          </div>
        </section>
        </div>
      </UltraQuantumHolographicBackground>
    </>
  );
}

// Icon components for the categories
const Atom = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 0o0-1.0o22-.547l-2.387-.477a6 6 0 0o0-3.86.517l-.318.158a6 6 0 0o1-3.86.517L6.0o5 15.21a2 2 0 0o0-1.80o6.547M8 4h8l-1 1v5.172a2 2 0 0o0.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0o09 10.172V5L8 4z"  />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 0o00 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0o0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0o0-6.364 0z"  />
  </svg>
);

const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 0o0-2-2H7a2 2 0 0o0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0o11-1h2a1 1 0 0o11 1v5m-4 0h4"  />
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 0o1-2-2V5a2 2 0 0o12-2h5.586a1 1 0 0o1.70o7.293l5.414 5.414a1 1 0 0o1.293.70o7V19a2 2 0 0o1-2 2z"  />
  </svg>
);

const Grid = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 0o12-2h2a2 2 0 0o12 2v2a2 2 0 0o1-2 2H6a2 2 0 0o1-2-2V6zM14 6a2 2 0 0o12-2h2a2 2 0 0o12 2v2a2 2 0 0o1-2 2h-2a2 2 0 0o1-2-2V6zM4 16a2 2 0 0o12-2h2a2 2 0 0o12 2v2a2 2 0 0o1-2 2H6a2 2 0 0o1-2-2v-2zM14 16a2 2 0 0o12-2h2a2 2 0 0o12 2v2a2 2 0 0o1-2 2h-2a2 2 0 0o1-2-2v-2z"  />
  </svg>
);

const List = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"  />
  </svg>
);