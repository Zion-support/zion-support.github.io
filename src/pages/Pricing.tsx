import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Users, 
  Building2, 
  Clock, 
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Crown,
  Gem,
  Diamond,
  Circle,
  Square,
  Triangle,
  ChevronDown,
  ChevronUp,
  Info,
  Calculator,
  BarChart3,
  Target,
  Rocket,
  Sparkles
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showComparison, setShowComparison] = useState(false);

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI Development', name: 'AI Development', count: allServices.filter(s => s.category === 'AI Development').length },
    { id: 'Digital Marketing', name: 'Digital Marketing', count: allServices.filter(s => s.category === 'Digital Marketing').length },
    { id: 'Customer Service', name: 'Customer Service', count: allServices.filter(s => s.category === 'AI Development').length },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'Legal Technology', name: 'Legal Technology', count: allServices.filter(s => s.category === 'Legal Technology').length },
    { id: 'Human Resources', name: 'Human Resources', count: allServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: allServices.filter(s => s.category === 'Supply Chain').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Healthcare', name: 'Healthcare', count: allServices.filter(s => s.category === 'Healthcare').length }
  ];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getPriceTier = (price: number) => {
    if (price <= 2000) return { tier: 'Bronze', icon: Circle, color: 'text-amber-600', bgColor: 'bg-amber-600/20' };
    if (price <= 3500) return { tier: 'Silver', icon: Square, color: 'text-gray-400', bgColor: 'bg-gray-400/20' };
    if (price <= 5000) return { tier: 'Gold', icon: Triangle, color: 'text-yellow-500', bgColor: 'bg-yellow-500/20' };
    if (price <= 7000) return { tier: 'Platinum', icon: Diamond, color: 'text-cyan-400', bgColor: 'bg-cyan-400/20' };
    return { tier: 'Diamond', icon: Crown, color: 'text-purple-500', bgColor: 'bg-purple-500/20' };
  };

  const getAnnualDiscount = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.15); // 15% annual discount
  };

  const getMonthlyPrice = (annualPrice: number) => {
    return Math.round(annualPrice / 12);
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Plans - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our comprehensive portfolio of AI, IT, and micro SAAS services. Choose the perfect plan for your business needs with competitive pricing and proven ROI." />
        <meta name="keywords" content="pricing, plans, AI services pricing, IT services cost, micro SAAS pricing, business solutions pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                & Plans
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Choose from our comprehensive portfolio of innovative services with transparent pricing, 
              proven ROI, and flexible plans designed to scale with your business.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-zion-cyan' : 'bg-zion-blue-dark'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-zion-slate-light'}`}>
                Annual
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Save 15%
                </span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>25+ Services Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-zion-cyan" />
                <span>400%+ Average ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-zion-cyan" />
                <span>2-5 Week Setup</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue hover:text-white'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const priceTier = getPriceTier(service.price);
              const annualPrice = billingCycle === 'annual' ? service.price : service.price * 12;
              const monthlyPrice = billingCycle === 'monthly' ? service.price : getMonthlyPrice(service.price);
              const savings = billingCycle === 'annual' ? getAnnualDiscount(service.price) : 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl border border-zion-purple/30 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-zion-purple/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors line-clamp-2">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full">
                            {service.category}
                          </span>
                          <span className={`px-2 py-1 ${priceTier.bgColor} ${priceTier.color} text-xs rounded-full flex items-center`}>
                            {React.createElement(priceTier.icon, { className: "w-3 h-3 mr-1" })}
                            {priceTier.tier}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-3xl font-bold text-zion-cyan">
                          ${billingCycle === 'annual' ? annualPrice.toLocaleString() : monthlyPrice.toLocaleString()}
                        </span>
                        <span className="text-zion-slate-light">
                          /{billingCycle === 'annual' ? 'year' : 'month'}
                        </span>
                      </div>
                      {billingCycle === 'annual' && savings > 0 && (
                        <div className="text-green-400 text-sm mt-1">
                          Save ${savings.toLocaleString()} annually
                        </div>
                      )}
                      <div className="text-zion-slate-light text-sm mt-2">
                        {service.availability} setup
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      {service.tags.slice(0, 4).map((tag, tagIndex) => (
                        <div key={tagIndex} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light text-sm">{tag}</span>
                        </div>
                      ))}
                      {service.tags.length > 4 && (
                        <div className="text-zion-slate-light text-sm text-center">
                          +{service.tags.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-lg font-bold text-white">{service.rating}</div>
                        <div className="text-xs text-zion-slate-light">Rating</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">{service.reviewCount}</div>
                        <div className="text-xs text-zion-slate-light">Reviews</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">{service.aiScore}</div>
                        <div className="text-xs text-zion-slate-light">AI Score</div>
                      </div>
                    </div>

                    {/* ROI & Market Info */}
                    <div className="bg-zion-blue-darker rounded-lg p-4 mb-6">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Market Price:</span>
                          <span className="text-white">{service.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Expected ROI:</span>
                          <span className="text-green-400 font-semibold">{service.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Setup Time:</span>
                          <span className="text-white">{service.setupTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium text-center hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </Link>
                      <button
                        onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`)}
                        className="w-full px-4 py-2 bg-zion-blue-darker text-white rounded-lg text-center hover:bg-zion-blue transition-all duration-300 border border-zion-purple/30"
                      >
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try selecting a different category or browse all services
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>

        {/* Pricing Comparison */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-zion-purple/30"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Pricing Comparison
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Compare our pricing with market alternatives and see the value we deliver
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zion-purple/20">
                    <th className="text-left py-4 px-4 text-zion-cyan font-semibold">Service</th>
                    <th className="text-center py-4 px-4 text-zion-cyan font-semibold">Our Price</th>
                    <th className="text-center py-4 px-4 text-zion-cyan font-semibold">Market Price</th>
                    <th className="text-center py-4 px-4 text-zion-cyan font-semibold">Savings</th>
                    <th className="text-center py-4 px-4 text-zion-cyan font-semibold">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.slice(0, 10).map((service, index) => {
                    const marketPrice = parseFloat(service.marketPrice.replace(/[$,]/g, ''));
                    const savings = marketPrice - service.price;
                    const savingsPercent = Math.round((savings / marketPrice) * 100);

                    return (
                      <tr key={service.id} className="border-b border-zion-purple/10 hover:bg-zion-blue-darker/30">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                              <Zap className="w-4 h-4 text-zion-cyan" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{service.title}</div>
                              <div className="text-zion-slate-light text-sm">{service.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="text-white font-bold">${service.price.toLocaleString()}</div>
                          <div className="text-zion-slate-light text-sm">/month</div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="text-zion-slate-light">{service.marketPrice}</div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="text-green-400 font-bold">${savings.toLocaleString()}</div>
                          <div className="text-green-400 text-sm">({savingsPercent}%)</div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="text-zion-cyan font-bold">{service.roi}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 backdrop-blur-sm rounded-3xl p-12 border border-zion-cyan/30 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you choose the perfect solution and implement it successfully. 
              Get in touch today for a personalized consultation and demo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium text-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-zion-blue-dark text-white rounded-lg font-medium text-lg hover:bg-zion-blue transition-all duration-300 border border-zion-purple/30"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-5 h-5 text-zion-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Custom Pricing</h4>
                  <p className="text-zion-slate-light text-sm">
                    Get personalized pricing based on your specific requirements and scale
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-zion-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">ROI Analysis</h4>
                  <p className="text-zion-slate-light text-sm">
                    Detailed analysis of expected returns and business impact
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-zion-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Implementation Plan</h4>
                  <p className="text-zion-slate-light text-sm">
                    Step-by-step implementation roadmap with timeline and milestones
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

// Helper component for CheckCircle icon
const CheckCircle: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default Pricing;
