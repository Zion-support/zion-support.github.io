import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_SERVICES_2025 } from '@/data/innovativeServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  const services = INNOVATIVE_SERVICES_2025;

  const categories = useMemo(() => {
    const cats = services.reduce((acc, service) => {
      if (!acc.includes(service.category)) {
        acc.push(service.category);
      }
      return acc;
    }, [] as string[]);
    return ['all', ...cats];
  }, [services]);

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'innovation':
        filtered = [...filtered].sort((a, b) => {
          const innovationOrder = { 'Cutting Edge': 3, 'Advanced': 2, 'Standard': 1 };
          return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
                 (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
        });
        break;
      case 'roi':
        filtered = [...filtered].sort((a, b) => {
          const aROI = parseInt(a.roi.split('-')[0]);
          const bROI = parseInt(b.roi.split('-')[0]);
          return bROI - aROI;
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [services, searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Sales':
      case 'AI & Compliance':
      case 'AI & Communication':
      case 'AI & Customer Experience':
      case 'AI & Content':
      case 'AI & Finance':
        return Brain;
      case 'Cloud & DevOps':
        return Cloud;
      case 'IoT & Digital Twin':
        return Cpu;
      case 'Quantum Computing':
        return Rocket;
      default:
        return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Sales':
      case 'AI & Compliance':
      case 'AI & Communication':
      case 'AI & Customer Experience':
      case 'AI & Content':
      case 'AI & Finance':
        return 'from-purple-600 to-pink-600';
      case 'Cloud & DevOps':
        return 'from-blue-600 to-cyan-600';
      case 'IoT & Digital Twin':
        return 'from-green-600 to-emerald-600';
      case 'Quantum Computing':
        return 'from-indigo-600 to-purple-600';
      default:
        return 'from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Innovative Services 2025 - Zion Tech Group" 
        description="Explore our cutting-edge AI, Cloud, IoT, and Quantum Computing services. Transform your business with innovative technology solutions."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">2025</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              Transform your business with cutting-edge AI, Cloud, IoT, and Quantum Computing solutions. 
              Built for the future, delivered today.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-colors"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
              </div>

              {/* Category Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  <option value="innovation" className="bg-slate-800 text-white">Most Innovative</option>
                  <option value="roi" className="bg-slate-800 text-white">Highest ROI</option>
                  <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                </select>
              </div>
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
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColor} flex items-center justify-center`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-1">
                        {service.innovationLevel}
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-400">per month</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Category and ROI */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-slate-800 px-2 py-1 rounded text-cyan-300">
                      {service.category}
                    </span>
                    <div className="text-right">
                      <div className="text-xs text-slate-400">ROI</div>
                      <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-2">Key Benefits:</div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-300">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-xs text-slate-400 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-white">{service.marketPrice}</div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSortBy('innovation');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Our team of experts is ready to help you implement these innovative solutions. 
              Get in touch today to start your transformation journey.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <div className="text-white font-semibold mb-2">Call Us</div>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <div className="text-white font-semibold mb-2">Email Us</div>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <div className="text-white font-semibold mb-2">Visit Us</div>
                <div className="text-slate-300 text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/request-quote" 
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-colors"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-slate-300 mb-6">
              <strong>Zion Tech Group</strong> - Your partner in digital transformation and innovation.
              Visit us at{' '}
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                ziontechgroup.com
              </a>
              {' '}to explore our full range of services and solutions.
            </div>
            <div className="text-sm text-slate-400">
              All services include comprehensive support, documentation, and integration assistance. 
              Custom solutions available for enterprise clients.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;