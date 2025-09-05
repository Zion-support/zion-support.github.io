import React, {_useState} from 'react';
import Head from 'next/head';
import {_ArrowRight, _Check, _Star, _Users, _Zap, _Shield, _Globe, _TrendingUp, _Award, _Clock, _CheckCircle, _ExternalLink, _Brain, _Atom, _Rocket, _Cpu, _Database, _Target, _Sparkles, _ChevronRight, _Search, _Filter, _Grid, _List, _Phone, _Mail, _MapPin, _DollarSign, _Target as TargetIcon, _BarChart3, _Users as UsersIcon} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesAdvertising2026() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [searchTerm, _setSearchTerm] = useState('');
  const [selectedService, _setSelectedService] = useState<string | null>(null);

  // Combine all services
  const _allServices = [...advancedMicroSaasServices2026, _...specializedIndustrySolutions2026];

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀', _count: allServices.length},
    {_id: 'AI & Machine Learning', _name: 'AI & ML', _icon: '🧠', _count: allServices.filter(s => s.category === 'AI & Machine Learning').length},
    {_id: 'Quantum Computing & AI', _name: 'Quantum AI', _icon: '⚛️', _count: allServices.filter(s => s.category === 'Quantum Computing & AI').length},
    {_id: 'Cybersecurity', _name: 'Security', _icon: '🛡️', _count: allServices.filter(s => s.category === 'Cybersecurity').length},
    {_id: 'Edge Computing & IoT', _name: 'Edge & IoT', _icon: '🌐', _count: allServices.filter(s => s.category === 'Edge Computing & IoT').length},
    {_id: 'Healthcare AI', _name: 'Healthcare', _icon: '🏥', _count: allServices.filter(s => s.category === 'Healthcare AI').length},
    {_id: 'Blockchain & DeFi', _name: 'Blockchain', _icon: '🔗', _count: allServices.filter(s => s.category === 'Blockchain & DeFi').length},
    {_id: 'Space Technology', _name: 'Space Tech', _icon: '🛰️', _count: allServices.filter(s => s.category === 'Space Technology').length},
    {_id: 'Neural Technology & BCI', _name: 'Neural Tech', _icon: '🧬', _count: allServices.filter(s => s.category === 'Neural Technology & BCI').length},
    {_id: 'DevOps & Infrastructure', _name: 'DevOps', _icon: '⚙️', _count: allServices.filter(s => s.category === 'DevOps & Infrastructure').length},
    {_id: 'Financial Technology', _name: 'FinTech', _icon: '💰', _count: allServices.filter(s => s.category === 'Financial Technology').length},
    {_id: 'Energy & Sustainability', _name: 'Energy', _icon: '⚡', _count: allServices.filter(s => s.category === 'Energy & Sustainability').length},
    {_id: 'Transportation & Logistics', _name: 'Logistics', _icon: '🚚', _count: allServices.filter(s => s.category === 'Transportation & Logistics').length},
    {_id: 'Education Technology', _name: 'EdTech', _icon: '🎓', _count: allServices.filter(s => s.category === 'Education Technology').length},
    {_id: 'Real Estate Technology', _name: 'PropTech', _icon: '🏠', _count: allServices.filter(s => s.category === 'Real Estate Technology').length},
    {_id: 'Legal Technology', _name: 'LegalTech', _icon: '⚖️', _count: allServices.filter(s => s.category === 'Legal Technology').length},
    {_id: 'Manufacturing Technology', _name: 'Manufacturing', _icon: '🏭', _count: allServices.filter(s => s.category === 'Manufacturing Technology').length}
  ];

  const _filteredServices = allServices.filter(service => {_const _matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;});

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  };

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2026 Services Advertising & Marketing — Zion Tech Group</title>
        <meta name="description" content="Comprehensive advertising and marketing for our innovative micro SAAS services, _AI solutions, _quantum technologies, _and cutting-edge IT services. Real solutions with proven ROI and competitive pricing." />
        <meta property="og:title" content="2026 Services Advertising & Marketing — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive advertising and marketing for our innovative micro SAAS services, _AI solutions, _quantum technologies, _and cutting-edge IT services." />
        <meta name="keywords" content="micro SAAS advertising, _AI services marketing, _quantum computing services, _cybersecurity solutions, _edge computing, _space technology, _neural interfaces, _Zion Tech Group, _2026 services" />
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising-2026" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2026 Services Advertising & Marketing
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover why leading organizations choose Zion Tech Group for their digital transformation needs. 
              Our innovative micro SAAS services deliver proven ROI, _competitive pricing, _and cutting-edge technology.
            </p>
            
            {_/* Key Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                <p className="text-white/70">Cutting-edge AI, _quantum computing, _and emerging technologies</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
                <p className="text-white/70">Average 300%+ return on investment within 6 months</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-white/70">Setup in days, _not months. Start seeing results immediately</p>
              </div>
            </div>

            {_/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="font-semibold">+1 302 464 0950</span>
                  <span className="text-sm text-white/60">Call us today</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="font-semibold">kleber@ziontechgroup.com</span>
                  <span className="text-sm text-white/60">Email us</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span className="font-semibold">Middletown DE 19709</span>
                  <span className="text-sm text-white/60">Visit us</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Market Overview Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Market Overview & Competitive Advantage
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our services are positioned to dominate emerging markets with superior technology, _competitive pricing, _and proven results that outperform industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.1}}
              viewport={_{ once: true}}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Market Size</h3>
              <p className="text-3xl font-bold text-cyan-400 mb-2">$500B+</p>
              <p className="text-white/60">Total addressable market across all service categories</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.2}}
              viewport={_{ once: true}}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Growth Rate</h3>
              <p className="text-3xl font-bold text-green-400 mb-2">300%+</p>
              <p className="text-white/60">Annual growth rate across all service categories</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.3}}
              viewport={_{ once: true}}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Customer ROI</h3>
              <p className="text-3xl font-bold text-purple-400 mb-2">300%+</p>
              <p className="text-white/60">Average return on investment within 6 months</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.4}}
              viewport={_{ once: true}}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Setup Time</h3>
              <p className="text-3xl font-bold text-orange-400 mb-2">1-4 weeks</p>
              <p className="text-white/60">Average implementation time for most services</p>
            </motion.div>
          </div>
        </div>
      </section>

      {_/* Search and Filter Section */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {_/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={_searchTerm}
                onChange={_(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
              />
            </div>

            {_/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {_categories.slice(0, _8).map(_(category) => (_<button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
                >
                  <span>{_category.icon}</span>
                  <span>{_category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {_/* Services Showcase */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={_containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {_filteredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  variants={_itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {_/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{_service.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{_service.name}</h3>
                          <p className="text-white/60 text-sm">{_service.tagline}</p>
                        </div>
                      </div>
                      {_service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    <p className="text-white/80 mb-4 leading-relaxed">{_service.description}</p>

                    {_/* Pricing and Market Position */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-cyan-400">
                          {_service.price}<span className="text-white/60 text-lg">{_service.period}</span>
                        </div>
                        <div className="text-sm text-white/60">
                          {_service.trialDays} days free
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-1">Market Position</h4>
                        <p className="text-xs text-white/70">{_service.marketPosition}</p>
                      </div>
                    </div>

                    {_/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                      <div className="space-y-1">
                        {_service.features.slice(0, _3).map(_(feature, _idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{_feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {_/* Benefits and ROI */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-1">Benefits & ROI</h4>
                      <p className="text-xs text-white/70">{_service.roi}</p>
                    </div>

                    {_/* Technology Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technology</h4>
                      <div className="flex flex-wrap gap-1">
                        {_service.technology.slice(0, _3).map(_(tech, _idx) => (
                          <span key={idx} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                            {_tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {_/* Target Audience */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>
                      <p className="text-xs text-white/70">{_service.targetAudience}</p>
                    </div>

                    {_/* Setup and Rating */}
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Setup: {_service.setupTime}</span>
                      <span>Rating: {_service.rating}/5 ({_service.reviews})</span>
                    </div>

                    {_/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={_service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button
                        onClick={_() => setSelectedService(service.id)}
                        className="px-4 py-3 border border-white/20 text-white hover:border-cyan-400 transition-all duration-300 rounded-lg"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {_/* No Results */}
          {_filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {_/* Call to Action Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already transformed their operations 
              with our innovative micro SAAS services. Start your journey today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30 Days</div>
                <div className="text-white/60">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-white/60">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-white/60">Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg group"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white/20 text-white hover:border-cyan-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg group"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Service Details Modal */}
      <AnimatePresence>
        {_selectedService && (_<motion.div
            initial={{ opacity: 0}}
            animate={_{ opacity: 1}}
            exit={_{ opacity: 0}}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={_() => setSelectedService(null)}
          >
            <motion.div
              initial={_{ scale: 0.9, _opacity: 0}}
              animate={_{ scale: 1, _opacity: 1}}
              exit={_{ scale: 0.9, _opacity: 0}}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={_(_e) => e.stopPropagation()}
            >
              {_selectedService && __(() => {
                const _service = allServices.find(s => s.id === selectedService);
                if (!service) return null;

                return (_<div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{service.icon}</span>
                        <div>
                          <h2 className="text-3xl font-bold text-white">{_service.name}</h2>
                          <p className="text-xl text-white/60">{_service.tagline}</p>
                        </div>
                      </div>
                      <button
                        onClick={_() => setSelectedService(null)}
                        className="text-white/60 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {_/* Left Column */}
                      <div>
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Description</h3>
                          <p className="text-white/80 leading-relaxed">{_service.description}</p>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Features</h3>
                          <div className="space-y-2">
                            {_service.features.map(_(feature, _idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/80">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span>{_feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Benefits</h3>
                          <div className="space-y-2">
                            {_service.benefits.map(_(benefit, _idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/80">
                                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                <span>{_benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {_/* Right Column */}
                      <div>
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Pricing & Market</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-white/60">Our Price:</span>
                              <span className="text-2xl font-bold text-cyan-400">{_service.price}{_service.period}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Market Average:</span>
                              <span className="text-white/80">{_service.averageMarketPrice}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Trial Period:</span>
                              <span className="text-white/80">{_service.trialDays} days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Setup Time:</span>
                              <span className="text-white/80">{_service.setupTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Technology & Integrations</h3>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-white/80 mb-2">Technology Stack</h4>
                              <div className="flex flex-wrap gap-1">
                                {_service.technology.map(_(tech, _idx) => (
                                  <span key={idx} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                                    {_tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-white/80 mb-2">Integrations</h4>
                              <div className="flex flex-wrap gap-1">
                                {_service.integrations.slice(0, _6).map(_(integration, _idx) => (
                                  <span key={idx} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                                    {_integration}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Market Information</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-white/60">Market Size:</span>
                              <span className="text-white/80">{_service.marketSize}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Growth Rate:</span>
                              <span className="text-white/80">{_service.growthRate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Customers:</span>
                              <span className="text-white/80">{_service.customers}+</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Rating:</span>
                              <span className="text-white/80">{_service.rating}/5 ({_service.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>

                        {_/* Contact Information */}
                        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Get Started Today</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-400">📱</span>
                              <span className="text-white/80">{_service.contactInfo.mobile}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-400">✉️</span>
                              <span className="text-white/80">{_service.contactInfo.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-400">🌐</span>
                              <span className="text-white/80">{_service.contactInfo.website}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {_/* Action Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                      <a
                        href={_service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                      >
                        Visit Service Page
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <button
                        onClick={_() => setSelectedService(null)}
                        className="px-8 py-4 border border-white/20 text-white hover:border-cyan-400 transition-all duration-300 rounded-lg"
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