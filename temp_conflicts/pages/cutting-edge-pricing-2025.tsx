import React, {_useState} from 'react';
import Head from 'next/head';
import {_Check, _Zap, _Shield, _Brain, _Atom, _Target, _Rocket, _Star, _TrendingUp, _Award, _Users, _ArrowRight, _ExternalLink, _Phone, _Mail, _MapPin} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _pricingTiers = [
  {_name: 'Starter', _price: 99, _period: 'month', _description: 'Perfect for small businesses and startups', _features: [
      'Up to 5 team members', _'Basic AI content generation', _'Standard support', _'Core integrations', _'Basic analytics', _'Email support'
    ], _icon: <Target className="w-6 h-6" />, _color: 'from-blue-500 to-cyan-500', _cta: 'Start Free Trial', _ctaLink: '/contact', _popular: false},
  {_name: 'Professional', _price: 299, _period: 'month', _description: 'Ideal for growing businesses and teams', _features: [
      'Up to 25 team members', _'Advanced AI features', _'Priority support', _'Advanced integrations', _'Advanced analytics', _'Phone & email support', _'Custom branding', _'API access'
    ], _icon: <Zap className="w-6 h-6" />, _color: 'from-purple-500 to-pink-500', _cta: 'Start Free Trial', _ctaLink: '/contact', _popular: true},
  {_name: 'Enterprise', _price: 999, _period: 'month', _description: 'For large organizations with complex needs', _features: [
      'Unlimited team members', _'Full AI suite access', _'24/7 dedicated support', _'Custom integrations', _'Advanced analytics & reporting', _'Dedicated account manager', _'Custom development', _'SLA guarantees', _'On-premise options', _'Compliance certifications'
    ], _icon: <Shield className="w-6 h-6" />, _color: 'from-green-500 to-emerald-500', _cta: 'Contact Sales', _ctaLink: '/contact', _popular: false}
];

const _serviceCategories = [
  {_name: 'AI & Consciousness Services', _icon: <Brain className="w-8 h-8" />, _color: 'from-cyan-500 to-blue-500', _services: cuttingEdgeAIServices2025.slice(0, _6), _description: 'Revolutionary AI platforms with consciousness and emotional intelligence'},
  {_name: 'Quantum & Emerging Tech', _icon: <Atom className="w-8 h-8" />, _color: 'from-purple-500 to-pink-500', _services: cuttingEdgeQuantumServices2025.slice(0, _6), _description: 'Breakthrough quantum computing and space technology solutions'},
  {_name: 'Enterprise IT Solutions', _icon: <Shield className="w-8 h-8" />, _color: 'from-blue-500 to-cyan-500', _services: cuttingEdgeEnterpriseITServices2025.slice(0, _6), _description: 'Advanced enterprise infrastructure and security solutions'},
  {_name: 'Micro SAAS Solutions', _icon: <Rocket className="w-8 h-8" />, _color: 'from-teal-500 to-emerald-500', _services: cuttingEdgeMicroSaasServices2025.slice(0, _6), _description: 'Innovative business solutions for modern enterprises'}
];

const _stats = [
  {_number: '25+', _label: 'Cutting-Edge Services', _icon: Star, _color: 'text-cyan-400'},
  {_number: '$500B+', _label: 'Market Coverage', _icon: TrendingUp, _color: 'text-purple-400'},
  {_number: '99.9%', _label: 'Success Rate', _icon: Award, _color: 'text-green-400'},
  {_number: '24/7', _label: 'Expert Support', _icon: Users, _color: 'text-pink-400'}
];

export default function CuttingEdgePricing2025() {_const [selectedCategory, _setSelectedCategory] = useState('all');

  const _allServices = [
    ...cuttingEdgeAIServices2025, _...cuttingEdgeQuantumServices2025, _...cuttingEdgeEnterpriseITServices2025, _...cuttingEdgeMicroSaasServices2025
  ];

  const _filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const _containerVariants = {
    hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  };

  return (_<>
      <Head>
        <title>Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Discover competitive pricing for our revolutionary cutting-edge services including AI consciousness, _quantum computing, _space mining, _and advanced enterprise solutions." />
        <meta name="keywords" content="cutting-edge pricing, _AI services pricing, _quantum computing pricing, _enterprise IT pricing, _micro SAAS pricing" />
        <meta name="viewport" content="width=device-width, _initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {_/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                initial={_{ opacity: 0, _scale: 0.9}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 1, _delay: 0.2}}
              >
                Cutting-Edge
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
                  Pricing 2025
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.4}}
              >
                Experience revolutionary technology at competitive prices. Our cutting-edge services are designed to give you 
                a competitive advantage while maintaining affordability and value.
              </motion.p>

              {_/* Hero Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.6}}
              >
                {_stats.map((stat, _index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        <stat.icon className={_`w-5 h-5 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{_stat.number}</div>
                    <div className="text-sm text-white/70">{_stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {_/* Pricing Tiers Section */}
        <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Flexible
                </span>{_' '}
                Pricing Plans
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our cutting-edge technology 
                and world-class support to ensure your success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {_pricingTiers.map(_(tier, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className={_`relative group ${
                    tier.popular ? 'scale-105' : ''}`}
                >
                  {_tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={_`relative p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    tier.popular ? 'border-cyan-500/50 shadow-cyan-500/20' : ''}`}>
                    <div className="text-center mb-8">
                      <div className={_`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mb-4`}>
                        {_tier.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{_tier.name}</h3>
                      <p className="text-white/70 mb-6">{_tier.description}</p>
                      <div className="text-4xl font-bold text-white mb-2">
                        ${_tier.price}
                        <span className="text-lg font-normal text-white/60">/{_tier.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {_tier.features.map(_(feature, _featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-white/80">{_feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={_tier.ctaLink}
                      className={_`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                          : 'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'}`}
                    >
                      {_tier.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Service Categories Section */}
        <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Service
                </span>{_' '}
                Categories
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive range of cutting-edge services across multiple technology domains. 
                Each category offers specialized solutions for different business needs.
              </p>
            </motion.div>

            {_/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={_() => setSelectedCategory('all')}
                className={_`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'}`}
              >
                All Categories ({_allServices.length})
              </button>
              {_serviceCategories.map(_(category) => (_<button
                  key={category.name}
                  onClick={_() => setSelectedCategory(category.name)}
                  className={_`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'}`}
                >
                  {_category.name} ({_category.services.length})
                </button>
              ))}
            </div>

            {_/* Services Grid */}
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {_filteredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  variants={_itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {_service.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                          {_service.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Star className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {_/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {_service.tags.slice(0, _3).map(_(tag, _tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                        >
                          {_tag}
                        </span>
                      ))}
                    </div>

                    {_/* Market Info */}
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Market: {_service.marketSize}</span>
                      <span className="text-cyan-400">{_service.category}</span>
                    </div>

                    {_/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                        Starting From
                      </h4>
                      <div className="text-2xl font-bold text-white">
                        ${_service.pricing.starter.price}
                        <span className="text-sm font-normal text-white/60">/{_service.pricing.starter.period}</span>
                      </div>
                    </div>

                    {_/* CTA */}
                    <div className="flex items-center justify-between">
                      <a
                        href={_service.website}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {_/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {_/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our team of experts is ready to help you choose the perfect plan and get you started with our 
                cutting-edge technology solutions. Contact us today for a personalized consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={_`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>

              {_/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href={_`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {_contactInfo.mobile}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Email</div>
                  <a href={_`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {_contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm">{_contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}