import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Shield, Zap, Brain, Rocket, Heart, Globe, Lock, TrendingUp, Award, Phone, Mail, MapPin, ExternalLink, ArrowRight, DollarSign, Clock, Users, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_SERVICES_2025, InnovativeService } from '@/data/innovativeServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES_2025.map(s => s.category)))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-2000', label: 'Under $2,000' },
    { value: '2000-5000', label: '$2,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000+', label: 'Over $10,000' }
  ];

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025;

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        if (max) {
          return service.price >= min && service.price <= max;
        } else {
          return service.price >= min;
        }
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Cybersecurity': return Shield;
      case 'Quantum AI': return Brain;
      case 'AI & Healthcare': return Heart;
      case 'Green IT': return Globe;
      case 'Space Technology': return Rocket;
      case 'AI & Finance': return TrendingUp;
      case 'IoT & Edge Computing': return Zap;
      case 'Blockchain': return Lock;
      case 'Digital Twin': return Rocket;
      case 'AI & Content': return Brain;
      default: return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Cybersecurity': return 'from-red-600 to-pink-600';
      case 'Quantum AI': return 'from-purple-600 to-indigo-600';
      case 'AI & Healthcare': return 'from-green-600 to-emerald-600';
      case 'Green IT': return 'from-green-500 to-teal-500';
      case 'Space Technology': return 'from-blue-600 to-cyan-600';
      case 'AI & Finance': return 'from-yellow-600 to-orange-600';
      case 'IoT & Edge Computing': return 'from-blue-500 to-indigo-500';
      case 'Blockchain': return 'from-purple-500 to-pink-500';
      case 'Digital Twin': return 'from-cyan-500 to-blue-500';
      case 'AI & Content': return 'from-pink-500 to-rose-500';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group" 
        description="Explore our cutting-edge AI, IT, and Micro SaaS services. From quantum computing to cybersecurity, discover solutions that drive innovation and growth."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Innovative Services Showcase 2025
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Discover our revolutionary AI-powered solutions, cutting-edge technology services, and innovative Micro SaaS platforms designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services, technologies, or use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex-1 min-w-[200px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="flex-1 min-w-[200px]">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-slate-400">
              From AI-powered cybersecurity to quantum computing solutions
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                      <CategoryIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-1">
                        {service.innovationLevel}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Title and Category */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-2">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {service.title}
                    </div>
                    <p className="text-sm text-slate-300 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-2">
                      Key Features
                    </div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-slate-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing and ROI */}
                  <div className="mb-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-slate-400">/month</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-400 font-semibold">
                          ROI: {service.roi}
                        </div>
                        <div className="text-xs text-slate-400">
                          Market: {service.marketPrice}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-2">
                      Key Benefits
                    </div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <TrendingUp className="h-3 w-3 text-blue-400 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-slate-800/70 text-cyan-300 rounded-md border border-cyan-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact and Action */}
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-slate-400">
                        Delivery: {service.estimatedDelivery}
                      </div>
                      <div className="text-sm text-slate-400">
                        Support: {service.supportLevel}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <Phone className="h-4 w-4" />
                        Get Quote
                      </a>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <a
                          href={`mailto:${service.contactInfo.email}`}
                          className="flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          <Mail className="h-3 w-3" />
                          Email
                        </a>
                        <a
                          href={service.contactInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Website
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team of experts is ready to help you implement these innovative solutions. 
              Get in touch today to discuss your specific needs and requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-cyan-300">
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-cyan-300">
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-cyan-300">
                <MapPin className="h-5 w-5" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/request-quote"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;