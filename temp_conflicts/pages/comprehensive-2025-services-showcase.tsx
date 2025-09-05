import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, 
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom,
  Search, Filter, ArrowRight, Award, Target, Cpu, Database
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services-2025';

export default function Comprehensive2025ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: enhancedMicroSaasServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: enhancedMicroSaasServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', icon: '⚛️', count: enhancedMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: enhancedMicroSaasServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: enhancedMicroSaasServices.filter(s => s.category === 'Space Technology').length },
    { id: 'DevOps & Infrastructure', name: 'DevOps', icon: '⚙️', count: enhancedMicroSaasServices.filter(s => s.category === 'DevOps & Infrastructure').length },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐', count: enhancedMicroSaasServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: enhancedMicroSaasServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: enhancedMicroSaasServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Legal Technology', name: 'Legal Tech', icon: '⚖️', count: enhancedMicroSaasServices.filter(s => s.category === 'Legal Technology').length },
    { id: 'Autonomous Vehicles', name: 'Auto Tech', icon: '🚗', count: enhancedMicroSaasServices.filter(s => s.category === 'Autonomous Vehicles').length },
    { id: 'Climate Technology', name: 'Climate Tech', icon: '🌍', count: enhancedMicroSaasServices.filter(s => s.category === 'Climate Technology').length },
    { id: 'Education Technology', name: 'EdTech', icon: '🎓', count: enhancedMicroSaasServices.filter(s => s.category === 'Education Technology').length },
    { id: 'Manufacturing Technology', name: 'Manufacturing', icon: '🏭', count: enhancedMicroSaasServices.filter(s => s.category === 'Manufacturing Technology').length }
  ];

  const filteredServices = enhancedMicroSaasServices
    .filter(service => 
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';
  };

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', ''));
    const annualPrice = price * 12 * 0.8; // 20% discount for annual
    return `$${Math.round(annualPrice)}`;
  };

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Comprehensive 2025 Services Showcase — Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Discover the future of technology.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Comprehensive 2025 Services Showcase — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group, comprehensive services&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-2025-services-showcase&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent&quot;>
              Comprehensive 2025 Services
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
              Discover our complete portfolio of revolutionary micro SAAS services, AI solutions, 
              quantum technologies, and cutting-edge IT services that are transforming industries.
            </p>
            
            {/* Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{enhancedMicroSaasServices.length}+</div>
                <div className=&quot;text-white/70&quot;>Innovative Services</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>{categories.length - 1}</div>
                <div className=&quot;text-white/70&quot;>Technology Categories</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>99.9%</div>
                <div className=&quot;text-white/70&quot;>Uptime Guarantee</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>24/7</div>
                <div className=&quot;text-white/70&quot;>Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className=&quot;px-6 pb-12&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10&quot;>
            <div className=&quot;flex flex-col lg:flex-row gap-6 items-center&quot;>
              {/* Search */}
              <div className=&quot;flex-1 relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300&quot;
                />
              </div>

              {/* Sort */}
              <div className=&quot;flex items-center gap-3&quot;>
                <span className=&quot;text-white/70&quot;>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className=&quot;bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400&quot;
                >
                  <option value=&quot;popularity&quot;>Popularity</option>
                  <option value=&quot;name&quot;>Name</option>
                  <option value=&quot;price&quot;>Price</option>
                  <option value=&quot;rating&quot;>Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className=&quot;px-6 pb-12&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-3&quot;>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
                <span className=&quot;text-xs bg-white/20 px-2 py-1 rounded-full&quot;>{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;px-6 pb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <AnimatePresence mode=&quot;wait&quot;>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className=&quot;absolute top-4 right-4 z-10&quot;>
                      <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1&quot;>
                        <Star className=&quot;w-3 h-3&quot; />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Service Header */}
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;text-4xl&quot;>{service.icon}</div>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-2xl font-bold text-white&quot;>{service.price}</div>
                        <div className=&quot;text-sm text-white/60&quot;>{service.period}</div>
                        <div className=&quot;text-xs text-white/40 mt-1&quot;>
                          Annual: {getAnnualPrice(service.price)}
                        </div>
                      </div>
                    </div>

                    <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                    <p className=&quot;text-white/70 text-sm mb-4&quot;>{service.tagline}</p>

                    {/* Rating */}
                    <div className=&quot;flex items-center gap-2 mb-4&quot;>
                      <div className=&quot;flex items-center gap-1&quot;>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-white/30'
                            }`}
                          />
                        ))}
                      </div>
                      <span className=&quot;text-white/60 text-sm&quot;>{service.rating}</span>
                      <span className=&quot;text-white/40 text-sm&quot;>({service.reviews} reviews)</span>
                    </div>

                    {/* Features */}
                    <div className=&quot;space-y-2 mb-6&quot;>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/70&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className=&quot;text-white/50 text-sm&quot;>
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* ROI and Benefits */}
                    <div className=&quot;bg-white/5 rounded-lg p-4 mb-6&quot;>
                      <div className=&quot;text-sm text-white/60 mb-2&quot;>Expected ROI:</div>
                      <div className=&quot;text-sm text-white/90 font-medium&quot;>{service.roi}</div>
                    </div>

                    {/* Action Buttons */}
                    <div className=&quot;flex gap-3&quot;>
                      <a
                        href={service.link}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;
                      >
                        Learn More
                        <ExternalLink className=&quot;w-4 h-4&quot; />
                      </Link>
                      <a
                        href=&quot;mailto:kleber@ziontechgroup.com&quot;
                        className=&quot;bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 border border-white/20 hover:border-white/40&quot;
                      >
                        Contact
                      </Link>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot; />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-white/70 mb-6&quot;>Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300&quot;
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;px-6 pb-20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30&quot;
          >
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/80 mb-8 max-w-2xl mx-auto&quot;>
              Join hundreds of companies already leveraging our cutting-edge technology solutions 
              to drive innovation and growth.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2&quot;
              >
                Schedule Consultation
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2&quot;
              >
                Call Now: +1 302 464 0950
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}