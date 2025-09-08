import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Zap, Brain, Shield, Cloud, Rocket, Globe, Heart, Crown, Sparkles, Flame, Thunder, Lightning, Sun, Moon, Planet, Galaxy, Universe, Infinity, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega, ArrowRight, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(services.map(s => s.category)))];
    return cats.sort();
  }, [services]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'innovation':
        filtered.sort((a, b) => {
          const innovationOrder = { 'Revolutionary': 3, 'Advanced': 2, 'Standard': 1 };
          return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
                 (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
        });
        break;
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.replace('%', ''));
          const bROI = parseInt(b.roi.replace('%', ''));
          return bROI - aROI;
        });
        break;
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [services, searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'AI & Sales': Brain,
      'Quantum & AI': Zap,
      'AI & Healthcare': Heart,
      'Blockchain & IoT': Shield,
      'AI & Cybersecurity': Shield,
      'IoT & Smart Cities': Globe,
      'AI & Legal Tech': Crown,
      'AI & Content': Sparkles,
      'AI & Edge Computing': Cloud,
      'AI & Sales': Brain,
      'AI & Legal Tech': Crown,
      'AI & Content': Sparkles,
      'AI & Edge Computing': Cloud
    };
    return iconMap[category] || Zap;
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 border-purple-400';
      case 'Advanced': return 'text-blue-400 border-blue-400';
      case 'Standard': return 'text-green-400 border-green-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology platforms. Transform your business with Zion Tech Group's revolutionary solutions."
        canonical="/innovative-services-showcase-2025"
        url="https://ziontechgroup.com"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services Showcase 2025
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Discover our comprehensive portfolio of cutting-edge micro SAAS services, AI-powered solutions, and revolutionary technology platforms designed to transform your business.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-400/20">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>AI & Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-blue-400/20">
                <Rocket className="w-4 h-4 text-blue-400" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-400/20">
                <Shield className="w-4 h-4 text-purple-400" />
                <span>Cybersecurity</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-green-400/20">
                <Globe className="w-4 h-4 text-green-400" />
                <span>IoT & Smart Cities</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services, technologies, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800/70 border border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="innovation">Innovation Level</option>
                <option value="roi">ROI: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-1"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-cyan-300/70 font-medium">
                          {service.category}
                        </div>
                        {service.subcategory && (
                          <div className="text-xs text-slate-400">
                            {service.subcategory}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getInnovationColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">Key Features</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-300">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">Key Benefits</div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & ROI */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-slate-800/30 rounded-lg">
                    <div>
                      <div className="text-lg font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-slate-400">/{service.pricingModel}</span>
                      </div>
                      <div className="text-xs text-slate-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-400">
                        ROI: {service.roi}
                      </div>
                      <div className="text-xs text-slate-400">
                        {service.estimatedDelivery}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.tags.slice(0, 4).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400 border border-slate-600/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="text-xs text-slate-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Phone className="w-3 h-3" />
                        {service.contactInfo.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {service.contactInfo.email}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                      Get Quote
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team of experts is ready to help you implement these innovative solutions and drive real business results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-400/20">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-slate-300 text-sm">+1 302 464 0950</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-400/20">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-slate-300 text-sm">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-400/20">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://ziontechgroup.com/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>

            <div className="mt-8 text-sm text-slate-400">
              <p>Visit our website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;