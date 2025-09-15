import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Cpu, Database, Lock, Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';

const InnovativeServicesShowcase2026: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');

  const categories = ['All', 'AI & Automation', 'Quantum Computing', 'Blockchain', 'Cybersecurity', 'IoT', 'AI & Content', 'DevOps', 'Finance', 'Sustainability'];

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2026;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          return b.innovationLevel === 'Revolutionary' ? 1 : -1;
        case 'roi':
          return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Cpu className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Zap className="w-5 h-5" />;
      case 'Blockchain':
        return <Database className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'IoT':
        return <Globe className="w-5 h-5" />;
      case 'AI & Content':
        return <Cpu className="w-5 h-5" />;
      case 'DevOps':
        return <Database className="w-5 h-5" />;
      case 'Finance':
        return <TrendingUp className="w-5 h-5" />;
      case 'Sustainability':
        return <Leaf className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getInnovationBadge = (level: string) => {
    const colors = {
      'Revolutionary': 'bg-gradient-to-r from-purple-600 to-pink-600',
      'Advanced': 'bg-gradient-to-r from-blue-600 to-cyan-600',
      'Cutting-Edge': 'bg-gradient-to-r from-green-600 to-emerald-600'
    };

    return (
      <span className={`${colors[level as keyof typeof colors] || colors.Advanced} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
        {level}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Innovative Services Showcase 2026 - Zion Tech Group" 
        description="Explore our cutting-edge 2026 innovative micro SAAS services including AI, Quantum Computing, Blockchain, and more. Transform your business with revolutionary technology solutions."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase 2026</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Discover revolutionary micro SAAS solutions that combine cutting-edge AI, quantum computing, blockchain, and emerging technologies to transform your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Revolutionary AI Solutions
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                Quantum Computing
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                Advanced Security
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  <option value="innovation">Innovation Level</option>
                  <option value="price">Price</option>
                  <option value="roi">ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-400/10 rounded-lg text-cyan-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-cyan-300/70">
                        {service.category}
                      </div>
                      <div className="text-xs text-slate-400">
                        {service.subcategory}
                      </div>
                    </div>
                  </div>
                  {getInnovationBadge(service.innovationLevel)}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-cyan-300/80 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-800/50 text-slate-300 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-slate-400 px-2 py-1">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing and ROI */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-slate-400 font-normal">/mo</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-400">
                      ROI: {service.roi}
                    </div>
                    <div className="text-xs text-slate-400">
                      {service.marketPrice}
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-cyan-300/80 mb-2">Key Benefits:</div>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Contact and CTA */}
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-slate-400">
                      Delivery: {service.estimatedDelivery}
                    </div>
                    <div className="text-xs text-slate-400">
                      Support: {service.supportLevel}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <a 
                        href={`tel:${service.contactInfo.phone}`}
                        className="text-cyan-300 hover:text-cyan-200 transition-colors"
                      >
                        {service.contactInfo.phone}
                      </a>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 group">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-300 mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
              Let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-slate-400">
                  <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-slate-400">
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Cutting-Edge Innovation</div>
                      <div className="text-sm text-slate-400">Access to the latest AI, quantum computing, and emerging technologies</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Enterprise Security</div>
                      <div className="text-sm text-slate-400">SOC 2, ISO 27001, and industry-leading security standards</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Proven ROI</div>
                      <div className="text-sm text-slate-400">Average 300-800% return on investment across our services</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Global Support</div>
                      <div className="text-sm text-slate-400">24/7 support and implementation across multiple time zones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2026;
