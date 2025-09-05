import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Star, Users, Zap, Shield, Globe, 
  TrendingUp, Award, Clock, CheckCircle, ExternalLink,
  Brain, Atom, Rocket, Cpu, Database, Target, Sparkles,
  ChevronRight, Search, Filter, Grid, List, Phone, Mail, MapPin,
  DollarSign, Target as TargetIcon, BarChart3, Users as UsersIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { advancedMicroSaasServices2026 } from '../data/2026-advanced-micro-saas-expansion';
import { specializedIndustrySolutions2026 } from '../data/2026-specialized-industry-solutions';

export default function ServicesAdvertising2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Combine all services
  const allServices = [...advancedMicroSaasServices2026, ...specializedIndustrySolutions2026];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing & AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing & IoT').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🛰️', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Neural Technology & BCI', name: 'Neural Tech', icon: '🧬', count: allServices.filter(s => s.category === 'Neural Technology & BCI').length },
    { id: 'DevOps & Infrastructure', name: 'DevOps', icon: '⚙️', count: allServices.filter(s => s.category === 'DevOps & Infrastructure').length },
    { id: 'Financial Technology', name: 'FinTech', icon: '💰', count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'Energy & Sustainability', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Energy & Sustainability').length },
    { id: 'Transportation & Logistics', name: 'Logistics', icon: '🚚', count: allServices.filter(s => s.category === 'Transportation & Logistics').length },
    { id: 'Education Technology', name: 'EdTech', icon: '🎓', count: allServices.filter(s => s.category === 'Education Technology').length },
    { id: 'Real Estate Technology', name: 'PropTech', icon: '🏠', count: allServices.filter(s => s.category === 'Real Estate Technology').length },
    { id: 'Legal Technology', name: 'LegalTech', icon: '⚖️', count: allServices.filter(s => s.category === 'Legal Technology').length },
    { id: 'Manufacturing Technology', name: 'Manufacturing', icon: '🏭', count: allServices.filter(s => s.category === 'Manufacturing Technology').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>2026 Services Advertising & Marketing — Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Comprehensive advertising and marketing for our innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Real solutions with proven ROI and competitive pricing.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2026 Services Advertising & Marketing — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive advertising and marketing for our innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS advertising, AI services marketing, quantum computing services, cybersecurity solutions, edge computing, space technology, neural interfaces, Zion Tech Group, 2026 services&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services-advertising-2026&quot; />
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
              2026 Services Advertising & Marketing
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
              Discover why leading organizations choose Zion Tech Group for their digital transformation needs. 
              Our innovative micro SAAS services deliver proven ROI, competitive pricing, and cutting-edge technology.
            </p>
            
            {/* Key Value Propositions */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-12&quot;>
              <div className=&quot;bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30&quot;>
                <div className=&quot;text-4xl mb-3&quot;>🚀</div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Innovation First</h3>
                <p className=&quot;text-white/70&quot;>Cutting-edge AI, quantum computing, and emerging technologies</p>
              </div>
              <div className=&quot;bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30&quot;>
                <div className=&quot;text-4xl mb-3&quot;>💰</div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Proven ROI</h3>
                <p className=&quot;text-white/70&quot;>Average 300%+ return on investment within 6 months</p>
              </div>
              <div className=&quot;bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30&quot;>
                <div className=&quot;text-4xl mb-3&quot;>⚡</div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Rapid Deployment</h3>
                <p className=&quot;text-white/70&quot;>Setup in days, not months. Start seeing results immediately</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-3xl mx-auto&quot;>
              <h3 className=&quot;text-2xl font-semibold mb-4 text-cyan-400&quot;>Ready to Transform Your Business?</h3>
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-center&quot;>
                <div className=&quot;flex flex-col items-center gap-2&quot;>
                  <Phone className=&quot;w-6 h-6 text-cyan-400&quot; />
                  <span className=&quot;font-semibold&quot;>+1 302 464 0950</span>
                  <span className=&quot;text-sm text-white/60&quot;>Call us today</span>
                </div>
                <div className=&quot;flex flex-col items-center gap-2&quot;>
                  <Mail className=&quot;w-6 h-6 text-cyan-400&quot; />
                  <span className=&quot;font-semibold&quot;>kleber@ziontechgroup.com</span>
                  <span className=&quot;text-sm text-white/60&quot;>Email us</span>
                </div>
                <div className=&quot;flex flex-col items-center gap-2&quot;>
                  <MapPin className=&quot;w-6 h-6 text-cyan-400&quot; />
                  <span className=&quot;font-semibold&quot;>Middletown DE 19709</span>
                  <span className=&quot;text-sm text-white/60&quot;>Visit us</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className=&quot;px-6 py-16&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Market Overview & Competitive Advantage
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Our services are positioned to dominate emerging markets with superior technology, 
              competitive pricing, and proven results that outperform industry standards.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;
            >
              <div className=&quot;text-3xl mb-3&quot;>📊</div>
              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Market Size</h3>
              <p className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>$500B+</p>
              <p className=&quot;text-white/60&quot;>Total addressable market across all service categories</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;
            >
              <div className=&quot;text-3xl mb-3&quot;>📈</div>
              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Growth Rate</h3>
              <p className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>300%+</p>
              <p className=&quot;text-white/60&quot;>Annual growth rate across all service categories</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;
            >
              <div className=&quot;text-3xl mb-3&quot;>🎯</div>
              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Customer ROI</h3>
              <p className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>300%+</p>
              <p className=&quot;text-white/60&quot;>Average return on investment within 6 months</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;
            >
              <div className=&quot;text-3xl mb-3&quot;>⚡</div>
              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Setup Time</h3>
              <p className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>1-4 weeks</p>
              <p className=&quot;text-white/60&quot;>Average implementation time for most services</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className=&quot;px-6 mb-12&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;flex flex-col md:flex-row gap-4 items-center justify-between&quot;>
            {/* Search */}
            <div className=&quot;relative flex-1 max-w-md&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/20&quot;
              />
            </div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap gap-2&quot;>
              {categories.slice(0, 8).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className=&quot;px-6 pb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
          >
            <AnimatePresence mode=&quot;wait&quot;>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
                >
                  {/* Service Header */}
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;flex items-center gap-3&quot;>
                        <span className=&quot;text-3xl&quot;>{service.icon}</span>
                        <div>
                          <h3 className=&quot;text-xl font-bold text-white&quot;>{service.name}</h3>
                          <p className=&quot;text-white/60 text-sm&quot;>{service.tagline}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full&quot;>
                          POPULAR
                        </span>
                      )}
                    </div>

                    <p className=&quot;text-white/80 mb-4 leading-relaxed&quot;>{service.description}</p>

                    {/* Pricing and Market Position */}
                    <div className=&quot;mb-4&quot;>
                      <div className=&quot;flex items-center justify-between mb-2&quot;>
                        <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                          {service.price}<span className=&quot;text-white/60 text-lg&quot;>{service.period}</span>
                        </div>
                        <div className=&quot;text-sm text-white/60&quot;>
                          {service.trialDays} days free
                        </div>
                      </div>
                      <div className=&quot;bg-white/5 rounded-lg p-3&quot;>
                        <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-1&quot;>Market Position</h4>
                        <p className=&quot;text-xs text-white/70&quot;>{service.marketPosition}</p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Key Features</h4>
                      <div className=&quot;space-y-1&quot;>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/70&quot;>
                            <CheckCircle className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits and ROI */}
                    <div className=&quot;bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-green-400 mb-1&quot;>Benefits & ROI</h4>
                      <p className=&quot;text-xs text-white/70&quot;>{service.roi}</p>
                    </div>

                    {/* Technology Stack */}
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Technology</h4>
                      <div className=&quot;flex flex-wrap gap-1&quot;>
                        {service.technology.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className=&quot;text-xs bg-white/10 text-white/60 px-2 py-1 rounded&quot;>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Target Audience</h4>
                      <p className=&quot;text-xs text-white/70&quot;>{service.targetAudience}</p>
                    </div>

                    {/* Setup and Rating */}
                    <div className=&quot;flex items-center justify-between text-sm text-white/60 mb-4&quot;>
                      <span>Setup: {service.setupTime}</span>
                      <span>Rating: {service.rating}/5 ({service.reviews})</span>
                    </div>

                    {/* Action Buttons */}
                    <div className=&quot;flex gap-3&quot;>
                      <a
                        href={service.link}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg&quot;
                      >
                        Learn More
                        <ExternalLink className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform&quot; />
                      </Link>
                      <button
                        onClick={() => setSelectedService(service.id)}
                        className=&quot;px-4 py-3 border border-white/20 text-white hover:border-cyan-400 transition-all duration-300 rounded-lg&quot;
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-white/60&quot;>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=&quot;px-6 py-20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Join hundreds of organizations that have already transformed their operations 
              with our innovative micro SAAS services. Start your journey today.
            </p>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>30 Days</div>
                <div className=&quot;text-white/60&quot;>Free Trial</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>24/7</div>
                <div className=&quot;text-white/60&quot;>Support</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>100%</div>
                <div className=&quot;text-white/60&quot;>Satisfaction</div>
              </div>
            </div>

            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg group&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                Call Now: +1 302 464 0950
              </Link>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;border border-white/20 text-white hover:border-cyan-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg group&quot;
              >
                <Mail className=&quot;w-5 h-5&quot; />
                Email Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=&quot;fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6&quot;
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className=&quot;bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto&quot;
              onClick={(e) => e.stopPropagation()}
            >
              {selectedService && (() => {
                const service = allServices.find(s => s.id === selectedService);
                if (!service) return null;

                return (
                  <div className=&quot;p-8&quot;>
                    <div className=&quot;flex items-start justify-between mb-6&quot;>
                      <div className=&quot;flex items-center gap-4&quot;>
                        <span className=&quot;text-5xl&quot;>{service.icon}</span>
                        <div>
                          <h2 className=&quot;text-3xl font-bold text-white&quot;>{service.name}</h2>
                          <p className=&quot;text-xl text-white/60&quot;>{service.tagline}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className=&quot;text-white/60 hover:text-white text-2xl&quot;
                      >
                        ×
                      </button>
                    </div>

                    <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                      {/* Left Column */}
                      <div>
                        <div className=&quot;mb-6&quot;>
                          <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-3&quot;>Description</h3>
                          <p className=&quot;text-white/80 leading-relaxed&quot;>{service.description}</p>
                        </div>

                        <div className=&quot;mb-6&quot;>
                          <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-3&quot;>Features</h3>
                          <div className=&quot;space-y-2&quot;>
                            {service.features.map((feature, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-white/80&quot;>
                                <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className=&quot;mb-6&quot;>
                          <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-3&quot;>Benefits</h3>
                          <div className=&quot;space-y-2&quot;>
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-white/80&quot;>
                                <Star className=&quot;w-4 h-4 text-yellow-400 flex-shrink-0&quot; />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <div className=&quot;mb-6&quot;>
                          <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-3&quot;>Pricing & Market</h3>
                          <div className=&quot;space-y-3&quot;>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-white/60&quot;>Our Price:</span>
                              <span className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}{service.period}</span>
                            </div>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-white/60&quot;>Market Average:</span>
                              <span className=&quot;text-white/80&quot;>{service.averageMarketPrice}</span>
                            </div>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-white/60&quot;>Trial Period:</span>
                              <span className=&quot;text-white/80&quot;>{service.trialDays} days</span>
                            </div>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-white/60&quot;>Setup Time:</span>
                              <span className=&quot;text-white/80&quot;>{service.setupTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className=&quot;mb-6&quot;>
                          <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-3&quot;>Technology & Integrations</h3>
                          <div className=&quot;space-y-3&quot;>
                            <div>
                              <h4 className=&quot;text-sm font-medium text-white/80 mb-2&quot;>Technology Stack</h4>
                              <div className=&quot;flex flex-wrap gap-1&quot;>
                                {service.technology.map((tech, idx) => (
                                  <span key={idx} className=&quot;text-xs bg-white/10 text-white/60 px-2 py-1 rounded&quot;>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className=&quot;text-sm font-medium text-white/80 mb-2&quot;>Integrations</h4>
                              <div className=&quot;flex flex-wrap gap-1&quot;>
                                {service.integrations.slice(0, 6).map((integration, idx) => (
                                  <span key={idx} className=&quot;text-xs bg-white/10 text-white/60 px-2 py-1 rounded&quot;>
                                    {integration}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=&quot;mb-6&quot;>
                          <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-3&quot;>Market Information</h3>
                          <div className=&quot;space-y-2 text-sm&quot;>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-white/60&quot;>Market Size:</span>
                              <span className=&quot;text-white/80&quot;>{service.marketSize}</span>
                            </div>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-white/60&quot;>Growth Rate:</span>
                              <span className=&quot;text-white/80&quot;>{service.growthRate}</span>
                            </div>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-white/60&quot;>Customers:</span>
                              <span className=&quot;text-white/80&quot;>{service.customers}+</span>
                            </div>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-white/60&quot;>Rating:</span>
                              <span className=&quot;text-white/80&quot;>{service.rating}/5 ({service.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4&quot;>
                          <h3 className=&quot;text-lg font-semibold text-cyan-400 mb-3&quot;>Get Started Today</h3>
                          <div className=&quot;space-y-2 text-sm&quot;>
                            <div className=&quot;flex items-center gap-2&quot;>
                              <span className=&quot;text-cyan-400&quot;>📱</span>
                              <span className=&quot;text-white/80&quot;>{service.contactInfo.mobile}</span>
                            </div>
                            <div className=&quot;flex items-center gap-2&quot;>
                              <span className=&quot;text-cyan-400&quot;>✉️</span>
                              <span className=&quot;text-white/80&quot;>{service.contactInfo.email}</span>
                            </div>
                            <div className=&quot;flex items-center gap-2&quot;>
                              <span className=&quot;text-cyan-400&quot;>🌐</span>
                              <span className=&quot;text-white/80&quot;>{service.contactInfo.website}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className=&quot;flex gap-4 mt-8 pt-6 border-t border-white/10&quot;>
                      <a
                        href={service.link}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg&quot;
                      >
                        Visit Service Page
                        <ExternalLink className=&quot;w-5 h-5&quot; />
                      </Link>
                      <button
                        onClick={() => setSelectedService(null)}
                        className=&quot;px-8 py-4 border border-white/20 text-white hover:border-cyan-400 transition-all duration-300 rounded-lg&quot;
                      >
                        Close
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnhancedFooter />
    </div>
  );
}