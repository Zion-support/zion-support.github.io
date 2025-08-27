import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown, 
  ChevronUp,
  Star,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Shield,
  Brain,
  Rocket,
  Atom,
  Eye,
  Clock,
  DollarSign,
  Target,
  Award
} from 'lucide-react';
import revolutionary2029Services from '../../data/revolutionary-2029-advanced-micro-saas-services';
import revolutionary2030Services from '../../data/revolutionary-2030-cutting-edge-innovations';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  pricing: {
    monthly: string;
    yearly: string;
    enterprise: string;
  };
  marketPosition: string;
  competitiveAdvantage: string;
  roi: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
    website: string;
  };
}

const RevolutionaryServicesShowcase2030: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine both service arrays
  const allServices = useMemo(() => {
    const services2029 = revolutionary2029Services.map(service => ({
      ...service,
      year: '2029'
    }));
    const services2030 = revolutionary2030Services.map(service => ({
      ...service,
      year: '2030'
    }));
    return [...services2029, ...services2030];
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(allServices.map(service => service.category))];
    return cats;
  }, [allServices]);

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allServices, searchTerm, selectedCategory]);

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Consciousness':
        return <Brain className="w-5 h-5" />;
      case 'Manufacturing & AI':
        return <Zap className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Space Technology':
        return <Rocket className="w-5 h-5" />;
      case 'Neural Technology':
        return <Brain className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Atom className="w-5 h-5" />;
      case 'Biotechnology':
        return <Eye className="w-5 h-5" />;
      case 'Energy':
        return <Zap className="w-5 h-5" />;
      case 'Reality Technology':
        return <Globe className="w-5 h-5" />;
      case 'Quantum Physics':
        return <Atom className="w-5 h-5" />;
      case 'Physics Engineering':
        return <Atom className="w-5 h-5" />;
      case 'AI Governance':
        return <Shield className="w-5 h-5" />;
      case 'Materials Science':
        return <Atom className="w-5 h-5" />;
      case 'Computing':
        return <Zap className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Revolutionary Services 2030
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge revolutionary services. 
              From quantum consciousness to space colonization, we're building tomorrow's innovations today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-cyan-900/30 px-4 py-2 rounded-full border border-cyan-500/30">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>19 Revolutionary Services</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-full border border-blue-500/30">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>1000%+ ROI Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Industry Leading</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-zinc-700/50 rounded-xl p-1 border border-zinc-600/50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <span className="inline-block px-2 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                              {service.year}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleServiceExpansion(service.id)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {expandedService === service.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">Starting at {service.pricing.monthly}/month</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{service.roi}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">{service.marketPosition}</span>
                        </div>
                      </div>

                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-zinc-700/50 pt-4 mt-4"
                        >
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-white mb-2">Key Features</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {service.features.slice(0, 4).map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-white mb-2">Benefits</h4>
                              <div className="space-y-1">
                                {service.benefits.slice(0, 3).map((benefit, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    {benefit}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="pt-4 border-t border-zinc-700/50">
                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-400">
                                  <p>Contact: {service.contactInfo.email}</p>
                                  <p>Phone: {service.contactInfo.phone}</p>
                                </div>
                                <a
                                  href={`mailto:${service.contactInfo.email}`}
                                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors text-sm font-medium"
                                >
                                  Get Quote
                                </a>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    // List View
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                            <div className="flex items-center gap-2">
                              <span className="inline-block px-2 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                                {service.year}
                              </span>
                              <span className="text-gray-400 text-sm">{service.category}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleServiceExpansion(service.id)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {expandedService === service.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>

                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">{service.pricing.monthly}</div>
                          <div className="text-xs text-gray-400">Monthly</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{service.roi}</div>
                          <div className="text-xs text-gray-400">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">{service.features.length}</div>
                          <div className="text-xs text-gray-400">Features</div>
                        </div>
                      </div>

                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-zinc-700/50 pt-4 mt-4"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-white mb-3">Features & Benefits</h4>
                              <div className="space-y-3">
                                {service.features.slice(0, 6).map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-white mb-3">Use Cases & ROI</h4>
                              <div className="space-y-3">
                                {service.useCases.slice(0, 4).map((useCase, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    {useCase}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-zinc-700/50">
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-400">
                                <p><strong>Contact:</strong> {service.contactInfo.email}</p>
                                <p><strong>Phone:</strong> {service.contactInfo.phone}</p>
                                <p><strong>Address:</strong> {service.contactInfo.address}</p>
                              </div>
                              <a
                                href={`mailto:${service.contactInfo.email}`}
                                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium"
                              >
                                Request Quote
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution and transform your business with our cutting-edge revolutionary services. 
              Get in touch today to start your journey into the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-zinc-700/50 hover:bg-zinc-600/50 text-white rounded-xl font-semibold transition-all duration-300 border border-zinc-600/50"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryServicesShowcase2030;