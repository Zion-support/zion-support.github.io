import React, {_useState} from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function ComprehensivePricingPage() {_const [selectedCategory, _setSelectedCategory] = useState('All');
  const [priceRange, _setPriceRange] = useState('All');
  const [searchQuery, _setSearchQuery] = useState('');
  const [sortBy, _setSortBy] = useState('price');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');

  const _allServices = [...revolutionaryMicroSaasServices, _...enhancedMicroSaasServices];

  const _priceRanges = [
    { value: 'All', _label: 'All Prices'},
    {_value: '0-100', _label: '$0 - $100'},
    {_value: '101-500', _label: '$101 - $500'},
    {_value: '501-1000', _label: '$501 - $1, _000'},
    {_value: '1001-2500', _label: '$1, _001 - $2, _500'},
    {_value: '2501-5000', _label: '$2, _501 - $5, _000'},
    {_value: '5001+', _label: '$5, _001+'}
  ];

  const _sortOptions = [
    {_value: 'price', _label: 'Price Low-High'},
    {_value: 'name', _label: 'Name A-Z'},
    {_value: 'popularity', _label: 'Most Popular'},
    {_value: 'category', _label: 'Category'},
    {_value: 'roi', _label: 'Highest ROI'}
  ];

  // Filter and sort services
  let _filteredServices = allServices;

  // Category filter
  if (selectedCategory !== 'All') {_filteredServices = filteredServices.filter(service => service.category === selectedCategory);}

  // Price range filter
  if (priceRange !== 'All') {_const [min, _max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices.filter(service => {
      const _price = parseFloat(service.price.replace('$', _'').replace(', _', _''));
      return price >= min && (max === Infinity || price <= max);});
  }

  // Search filter
  if (searchQuery) {_filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );}

  // Sort services
  filteredServices.sort(_(a, _b) => {_switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', _'').replace(', _', _'')) - parseFloat(b.price.replace('$', _'').replace(', _', _''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        const _aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
        const _bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default:
        return a.name.localeCompare(b.name);}
  });

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  // Pricing tiers
  const _pricingTiers = [
    {_name: 'Starter', _price: '$49', _period: '/month', _description: 'Perfect for small businesses and startups', _features: [
        'Basic service access', _'Email support', _'Standard features', _'Community forum access', _'Basic analytics'
      ], _icon: <Star className="w-6 h-6" />, _color: 'from-blue-500 to-cyan-600', _popular: false},
    {_name: 'Professional', _price: '$199', _period: '/month', _description: 'Ideal for growing businesses and teams', _features: [
        'Advanced service access', _'Priority support', _'Advanced features', _'API access', _'Advanced analytics', _'Custom integrations'
      ], _icon: <Gem className="w-6 h-6" />, _color: 'from-purple-500 to-pink-600', _popular: true},
    {_name: 'Enterprise', _price: '$499', _period: '/month', _description: 'For large organizations and enterprises', _features: [
        'Full service access', _'24/7 dedicated support', _'All features', _'Custom development', _'Enterprise analytics', _'White-label options', _'SLA guarantees'
      ], _icon: <Crown className="w-6 h-6" />, _color: 'from-yellow-500 to-orange-600', _popular: false}
  ];

  // Market statistics
  const _marketStats = [
    {_metric: '$15.2B', _label: 'Total Market Size', _description: 'Combined market value of all services', _icon: <ChartBar className="w-6 h-6" />},
    {_metric: '400+', _label: 'Services Available', _description: 'Comprehensive micro SaaS portfolio', _icon: <Database className="w-6 h-6" />},
    {_metric: '99.99%', _label: 'Uptime Guarantee', _description: 'Enterprise-grade reliability', _icon: <Shield className="w-6 h-6" />},
    {_metric: '2000%+', _label: 'Average ROI', _description: 'Proven business value', _icon: <TrendingUp className="w-6 h-6" />}
  ];

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  };

  return (_<UltraFuturisticBackground variant="holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Comprehensive Pricing | Zion Tech Group - Micro SaaS Services Pricing & Plans</title>
          <meta name="description" content="Explore comprehensive pricing for all Zion Tech Group micro SaaS services. Transparent pricing, _market analysis, _ROI guarantees, _and flexible plans for every business size." />
          <meta name="keywords" content="micro SaaS pricing, _service pricing, _business pricing, _ROI guarantees, _market analysis, _transparent pricing, _enterprise pricing" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Comprehensive Pricing | Zion Tech Group" />
          <meta property="og:description" content="Transparent pricing for all micro SaaS services with market analysis and ROI guarantees." />
          <meta property="og:url" content="https://ziontechgroup.com/comprehensive-pricing" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing" />
        </Head>

        {_/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 futuristic-glow"
                initial={_{ opacity: 0, _y: 30}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8}}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Comprehensive
                </span>
                <br />
                <span className="text-white">Pricing & Plans</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.2}}
              >
                Transparent pricing for all our revolutionary micro SaaS services. 
                Choose the perfect plan for your business with guaranteed ROI and enterprise-grade reliability.
              </motion.p>
              
              {_/* Market Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.4}}
              >
                {_marketStats.map((stat, _index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{_stat.metric}</div>
                    <div className="text-gray-400 text-sm">{_stat.label}</div>
                    <div className="text-gray-500 text-xs">{_stat.description}</div>
                  </div>
                ))}
              </motion.div>

              {_/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.6}}
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={_() => document.getElementById('pricing-tiers')?.scrollIntoView({ behavior: 'smooth'})}
                >
                  View Pricing Tiers
                  <DollarSign className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="futuristic" 
                  size="lg"
                  onClick={_() => document.getElementById('services-pricing')?.scrollIntoView({ behavior: 'smooth'})}
                >
                  Browse All Services
                  <Search className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {_/* Contact Information Banner */}
        <section className="py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-purple-400/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">{_contactInfo.mobile}</span>
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white">{_contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white">{_contactInfo.address}</span>
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white">{_contactInfo.website}</span>
              </div>
            </div>
          </div>
        </section>

        {_/* Pricing Tiers */}
        <section id="pricing-tiers" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.6}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Flexible Pricing
                </span>
                <br />
                <span className="text-white">for Every Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan that scales with your business. All plans include our 21-day free trial and ROI guarantee.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
            >
              {_pricingTiers.map(_(tier, _index) => (
                <motion.div
                  key={tier.name}
                  variants={_itemVariants}
                  whileHover={_{ y: -10}}
                >
                  <UltraFuturisticCard
                    variant={_tier.popular ? 'holographic-advanced' : 'quantum-advanced'}
                    size="large"
                    className={_`h-full relative ${tier.popular ? 'ring-2 ring-purple-400' : ''}`}
                  >
                    {_tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className={_`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.color} mb-6`}>
                        {_tier.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{_tier.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{_tier.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{_tier.price}</div>
                      <div className="text-sm text-gray-400">{_tier.period}</div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      {_tier.features.map(_(feature, _idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{_feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                                             <Button 
                         variant={_tier.popular ? 'futuristic' : 'primary'} 
                         size="md"
                         onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                         className="w-full"
                       >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {_/* Services Pricing Grid */}
        <section id="services-pricing" className="py-20">
          <div className="container mx-auto px-4">
            {_/* Filters and Controls */}
            <motion.div 
              className="mb-8"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.6}}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-4">
                  <select
                    value={_selectedCategory}
                    onChange={_(_e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="All">All Categories</option>
                    {_revolutionaryServiceCategories.map(category => (
                      <option key={category} value={_category}>{_category}</option>
                    ))}
                  </select>
                  
                  <select
                    value={_priceRange}
                    onChange={_(_e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  >
                    {_priceRanges.map(range => (
                      <option key={range.value} value={_range.value}>{_range.label}</option>
                    ))}
                  </select>
                  
                  <select
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400"
                  >
                    {_sortOptions.map(option => (
                      <option key={option.value} value={_option.value}>{_option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={_searchQuery}
                      onChange={_(_e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64"
                    />
                  </div>
                  
                  <div className="flex border border-gray-600 rounded-lg overflow-hidden">
                    <button
                      onClick={_() => setViewMode('grid')}
                      className={_`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={_() => setViewMode('list')}
                      className={_`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Services Display */}
            <motion.div 
              className={_viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"}
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
            >
              {_filteredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  variants={_itemVariants}
                  whileHover={_{ y: -5}}
                >
                  <UltraFuturisticCard
                    variant={_service.variant as any || 'quantum-advanced'}
                    size={_viewMode === 'grid' ? 'large' : 'medium'}
                    className={_`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                  >
                    {_viewMode === 'grid' ? (
                      // Grid View
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{_service.tagline}</p>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{_service.price}</div>
                        <div className="text-sm text-gray-400 mb-4">{_service.period}</div>
                        
                        <div className="space-y-2 mb-6">
                          {_service.features.slice(0, _3).map(_(feature, _idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{_feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="text-center space-y-2">
                                                     <Button 
                             variant="primary" 
                             size="sm"
                             onClick={_() => window.open(service.link, _'_blank')}
                             className="w-full"
                           >
                             Learn More
                             <ExternalLink className="ml-2 w-4 h-4" />
                           </Button>
                           <Button 
                             variant="futuristic" 
                             size="sm"
                             onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                             className="w-full"
                           >
                             Get Pricing
                             <DollarSign className="ml-2 w-4 h-4" />
                           </Button>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="text-4xl md:text-5xl flex-shrink-0">{_service.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                              <p className="text-gray-300 text-sm">{_service.tagline}</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                              <div className="text-2xl font-bold text-cyan-400">{_service.price}</div>
                              <div className="text-sm text-gray-400">{_service.period}</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                              <div className="space-y-1">
                                {_service.features.slice(0, _4).map(_(feature, _idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">{_feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400 mb-2">Market Info</h4>
                              <div className="space-y-1 text-sm text-gray-300">
                                <div><span className="text-gray-400">ROI:</span> {_service.roi}</div>
                                <div><span className="text-gray-400">Market:</span> {_service.marketSize}</div>
                                <div><span className="text-gray-400">Growth:</span> {_service.growthRate}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                                                         <Button 
                               variant="primary" 
                               size="sm"
                               onClick={_() => window.open(service.link, _'_blank')}
                             >
                               Learn More
                               <ExternalLink className="ml-2 w-4 h-4" />
                             </Button>
                             <Button 
                               variant="futuristic" 
                               size="sm"
                               onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                             >
                               Get Pricing
                               <DollarSign className="ml-2 w-4 h-4" />
                             </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>

            {_filteredServices.length === 0 && (_<motion.div 
                className="text-center py-16"
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}}
                transition={_{ duration: 0.6}}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters.</p>
                                 <Button 
                   variant="primary"
                   onClick={_() => {
                     setSearchQuery('');
                     setSelectedCategory('All');
                     setPriceRange('All');}}
                 >
                   Clear Filters
                 </Button>
              </motion.div>
            )}
          </div>
        </section>

        {_/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.8}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our sales team to discuss pricing, custom plans, and implementation options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                >
                  Contact Sales
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="futuristic" 
                  size="lg"
                  onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                >
                  Schedule Demo
                  <Calendar className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us 24/7</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Visit our office</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}