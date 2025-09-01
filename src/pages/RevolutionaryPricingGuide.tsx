import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star,
  CheckCircle,
  X,
  DollarSign,
  TrendingUp,
  Clock,
  Users,
  Shield,
  Zap,
  Brain,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Search,
  Filter,
  Calculator,
  BarChart3,
  Target,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { REVOLUTIONARY_PRICING_GUIDE_2030 } from '../data/revolutionaryPricingGuide2030';

export default function RevolutionaryPricingGuide() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', count: REVOLUTIONARY_PRICING_GUIDE_2030.length },
    ...Array.from(new Set(REVOLUTIONARY_PRICING_GUIDE_2030.map(service => service.service.category)))
      .map(category => ({
        id: category,
        name: category,
        count: REVOLUTIONARY_PRICING_GUIDE_2030.filter(service => service.service.category === category).length
      }))
  ];

  // Price range options
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($1,000-3,000)', range: '1000-3000' },
    { id: 'mid', name: 'Mid-Range ($3,000-6,000)', range: '3000-6000' },
    { id: 'premium', name: 'Premium ($6,000+)', range: '6000-999999' }
  ];

  const filteredServices = REVOLUTIONARY_PRICING_GUIDE_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.service.category === activeCategory;
    const matchesSearch = service.service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const range = priceRanges.find(r => r.id === priceRange);
      if (range && range.range !== 'All') {
        const [min, max] = range.range.split('-').map(Number);
        matchesPrice = service.pricingTiers.some(tier => tier.price >= min && tier.price <= max);
      }
    }
    
    return matchesCategory && matchesSearch && matchesPrice;
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Revolutionary Services Pricing Guide 2030 | Zion Tech Group"
        description="Comprehensive pricing guide for our revolutionary micro SAAS, IT, and AI services. Compare pricing tiers, ROI analysis, and market comparisons across all service categories."
        keywords="pricing guide, revolutionary services, micro SAAS pricing, AI services pricing, IT services pricing, ROI analysis, market comparison"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Pricing Guide 2030
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
                Transparent pricing for our cutting-edge micro SAAS, IT infrastructure, and AI services. 
                Compare pricing tiers, analyze ROI, and see how we stack up against the competition.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-lg border border-cyan-500/30">
                  <div className="text-cyan-400 text-3xl font-bold mb-2">
                    {REVOLUTIONARY_PRICING_GUIDE_2030.length}
                  </div>
                  <div className="text-white text-sm">Services Available</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg border border-purple-500/30">
                  <div className="text-purple-400 text-3xl font-bold mb-2">400%+</div>
                  <div className="text-white text-sm">Average ROI</div>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-lg border border-green-500/30">
                  <div className="text-green-400 text-3xl font-bold mb-2">60%</div>
                  <div className="text-white text-sm">Cost Savings</div>
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-lg border border-yellow-500/30">
                  <div className="text-yellow-400 text-3xl font-bold mb-2">3-8</div>
                  <div className="text-white text-sm">Months to ROI</div>
                </div>
              </div>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-80"
                  />
                </div>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {filteredServices.map((servicePricing) => (
                <motion.div
                  key={servicePricing.service.id}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden"
                >
                  {/* Service Header */}
                  <div className="p-8 border-b border-slate-700">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                            {servicePricing.service.subcategory}
                          </span>
                          {servicePricing.service.featured && (
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          )}
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-3">
                          {servicePricing.service.title}
                        </h2>
                        <p className="text-slate-300 text-lg mb-4">
                          {servicePricing.service.description}
                        </p>
                        
                        {/* Service Stats */}
                        <div className="flex flex-wrap gap-6 text-sm">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{servicePricing.service.rating}</span>
                            <span className="text-slate-500">({servicePricing.service.reviewCount} reviews)</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Brain className="w-4 h-4 text-cyan-400" />
                            <span>AI Score: {servicePricing.service.aiScore}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Clock className="w-4 h-4 text-green-400" />
                            <span>Setup: {servicePricing.service.setupTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Quick ROI Info */}
                      <div className="lg:text-right">
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
                          <div className="text-green-400 text-2xl font-bold mb-1">
                            {servicePricing.roiAnalysis.averageROI}
                          </div>
                          <div className="text-white text-sm">Average ROI</div>
                          <div className="text-slate-400 text-xs mt-1">
                            {servicePricing.roiAnalysis.timeToROI} to achieve
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Pricing Tiers</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {servicePricing.pricingTiers.map((tier, index) => (
                        <div
                          key={tier.name}
                          className={`relative p-6 rounded-xl border transition-all duration-300 ${
                            index === 1 
                              ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                              : 'border-slate-600 bg-slate-800/50'
                          }`}
                        >
                          {index === 1 && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                                Most Popular
                              </span>
                            </div>
                          )}
                          
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                            <div className="text-3xl font-bold text-cyan-400 mb-1">
                              ${tier.price.toLocaleString()}
                              <span className="text-lg text-slate-400">/month</span>
                            </div>
                            {tier.setupFee > 0 && (
                              <div className="text-slate-400 text-sm">
                                +${tier.setupFee.toLocaleString()} setup fee
                              </div>
                            )}
                          </div>

                          <div className="space-y-3 mb-6">
                            {tier.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {tier.limitations.length > 0 && (
                            <div className="mb-6">
                              <h5 className="text-slate-400 text-sm font-medium mb-2">Limitations:</h5>
                              <div className="space-y-2">
                                {tier.limitations.map((limitation, limitationIndex) => (
                                  <div key={limitationIndex} className="flex items-start gap-3">
                                    <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-400 text-sm">{limitation}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="text-center">
                            <div className="text-slate-400 text-xs mb-3">
                              Best for: <span className="text-white">{tier.bestFor}</span>
                            </div>
                            <a
                              href={`mailto:${servicePricing.service.contactInfo.email}?subject=Pricing Inquiry - ${tier.name} Tier - ${servicePricing.service.title}`}
                              className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                            >
                              Get Started
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Comparison & ROI Analysis */}
                  <div className="p-8 bg-slate-800/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Market Comparison */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-cyan-400" />
                          Market Comparison
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Market Average:</span>
                            <span className="text-white font-medium">{servicePricing.marketComparison.marketAverage}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Our Advantage:</span>
                            <span className="text-green-400 font-medium">{servicePricing.marketComparison.ourAdvantage}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Price Difference:</span>
                            <span className="text-cyan-400 font-medium">{servicePricing.marketComparison.priceDifference}</span>
                          </div>
                          <div className="pt-3 border-t border-slate-700">
                            <span className="text-slate-400 text-sm">Competitors:</span>
                            <div className="text-slate-300 text-sm mt-1">
                              {servicePricing.marketComparison.competitors.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ROI Analysis */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-400" />
                          ROI Analysis
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Average ROI:</span>
                            <span className="text-green-400 font-bold">{servicePricing.roiAnalysis.averageROI}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Time to ROI:</span>
                            <span className="text-white font-medium">{servicePricing.roiAnalysis.timeToROI}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Cost Savings:</span>
                            <span className="text-green-400 font-medium">{servicePricing.roiAnalysis.costSavings}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Revenue Increase:</span>
                            <span className="text-cyan-400 font-medium">{servicePricing.roiAnalysis.revenueIncrease}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Case Studies */}
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <h4 className="text-lg font-bold text-white mb-3">Success Stories</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {servicePricing.roiAnalysis.caseStudies.map((caseStudy, index) => (
                          <div key={index} className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-cyan-400 text-sm font-medium mb-1">Case Study {index + 1}</div>
                            <div className="text-slate-300 text-sm">{caseStudy}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Implementation Details */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <Rocket className="w-5 h-5 text-purple-400" />
                          Implementation & Support
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Implementation</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-slate-400">Setup Time:</span>
                                <span className="text-white font-medium">{servicePricing.implementation.setupTime}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-slate-400">Training Included:</span>
                                <span className="text-green-400 font-medium">
                                  {servicePricing.implementation.trainingIncluded ? 'Yes' : 'No'}
                                </span>
                              </div>
                              <div className="pt-3 border-t border-slate-700">
                                <span className="text-slate-400 text-sm">Customization Options:</span>
                                <div className="text-slate-300 text-sm mt-1">
                                  {servicePricing.implementation.customizationOptions.join(', ')}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Support & Services</h4>
                            <div className="space-y-3">
                              <div className="pt-3 border-t border-slate-700">
                                <span className="text-slate-400 text-sm">Integration Services:</span>
                                <div className="text-slate-300 text-sm mt-1">
                                  {servicePricing.implementation.integrationServices.join(', ')}
                                </div>
                              </div>
                              <div className="pt-3 border-t border-slate-700">
                                <span className="text-slate-400 text-sm">Ongoing Support:</span>
                                <div className="text-slate-300 text-sm mt-1">
                                  {servicePricing.implementation.ongoingSupport}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </motion.div>
              ))}

              {/* No Results Message */}
              {filteredServices.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                  <p className="text-slate-400">Try adjusting your search criteria or browse all categories.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Contact us for a personalized consultation and custom pricing tailored to your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation Request"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}