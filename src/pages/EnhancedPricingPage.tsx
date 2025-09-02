import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Shield,
  Zap,
  Brain,
  Rocket,
  Atom,
  Leaf,
  Cpu,
  CreditCard,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  X,
  Info,
  Target,
  Award,
  Globe,
  Building,
  Briefcase
} from 'lucide-react';
import { enhancedServices2025, EnhancedService } from '../data/enhancedServices2025';

const EnhancedPricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'month' | 'year'>('month');
  const [showComparison, setShowComparison] = useState(false);

  const allServices = enhancedServices2025.flatMap(category => category.items);
  const featuredServices = allServices.filter(service => service.featured);

  const getDiscountedPrice = (price: string, cycle: 'month' | 'year') => {
    if (cycle === 'year') {
      const monthlyPrice = parseInt(price.replace(/[^0-9]/g, ''));
      const yearlyPrice = monthlyPrice * 12 * 0.8; // 20% discount
      return `$${yearlyPrice.toLocaleString()}`;
    }
    return price;
  };

  const openPlanModal = (service: EnhancedService) => {
    setSelectedPlan(service.id);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic AI integration',
        'Email support',
        'Standard compliance',
        'Basic analytics',
        '5 user licenses'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$299',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Priority support',
        'Enhanced compliance',
        'Advanced analytics',
        '25 user licenses',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$999',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        '24/7 dedicated support',
        'Enterprise compliance',
        'Custom AI models',
        'Unlimited users',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the perfect plan for your business with our competitive pricing and proven ROI
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className={`text-lg ${billingCycle === 'month' ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'month' ? 'year' : 'month')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'year' ? 'bg-cyan-500' : 'bg-slate-600'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                billingCycle === 'year' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${billingCycle === 'year' ? 'text-white' : 'text-slate-400'}`}>
              Yearly
              <span className="ml-2 text-sm text-green-400">Save 20%</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative bg-white/5 border rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                tier.popular 
                  ? 'border-cyan-400 shadow-lg shadow-cyan-500/25' 
                  : 'border-white/10 hover:border-cyan-400/40'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-300 mb-4">{tier.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                {billingCycle === 'year' && (
                  <p className="text-sm text-green-400">
                    {getDiscountedPrice(tier.price, 'year')}/year
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Services Pricing */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Services Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our most popular services with transparent pricing and guaranteed ROI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openPlanModal(service)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{service.icon}</div>
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 mb-3">
                {service.category}
              </span>

              <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                {service.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-lg">
                    {billingCycle === 'year' ? getDiscountedPrice(service.price, 'year') : service.price}
                  </span>
                  <span className="text-xs text-slate-400">
                    /{billingCycle === 'year' ? 'year' : service.billing}
                  </span>
                </div>
                <div className="text-xs text-green-400">
                  ROI: {service.roi}
                </div>
                <div className="text-xs text-slate-400">
                  Market: {service.marketPrice}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {service.implementationTime}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {service.support}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                {service.ctaLabel}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              ROI Calculator
            </h2>
            <p className="text-xl text-slate-300">
              Calculate your potential return on investment with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Current Monthly Revenue</label>
                <input
                  type="number"
                  placeholder="$10,000"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Service Investment</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option value="">Select a service</option>
                  {featuredServices.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.title} - {service.price}/{service.billing}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Expected Growth Rate</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option value="0.1">10% (Conservative)</option>
                  <option value="0.25">25% (Moderate)</option>
                  <option value="0.5">50% (Aggressive)</option>
                </select>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Projected Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-300">Monthly Investment:</span>
                  <span className="text-white font-semibold">$299</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Expected Revenue Increase:</span>
                  <span className="text-green-400 font-semibold">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Net Monthly Gain:</span>
                  <span className="text-cyan-400 font-semibold">$2,201</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">ROI:</span>
                  <span className="text-yellow-400 font-semibold">735%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Break-even:</span>
                  <span className="text-white font-semibold">1 month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Pricing is Different */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Our Pricing is Different
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We believe in transparent, value-based pricing that delivers real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: 'Guaranteed ROI',
              description: 'We guarantee measurable results within 6 months or your money back'
            },
            {
              icon: Shield,
              title: 'No Hidden Fees',
              description: 'Transparent pricing with no surprise charges or setup fees'
            },
            {
              icon: Zap,
              title: 'Rapid Implementation',
              description: 'Most solutions deployed in 2-8 weeks, not months'
            },
            {
              icon: Users,
              title: 'Dedicated Support',
              description: '24/7 support with dedicated specialists, not just chatbots'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and get a customized quote
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950" 
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-6 h-6" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              <Mail className="w-6 h-6" />
              Email Us
            </a>
            <a 
              href="/contact" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-6 h-6" />
              Request Quote
            </a>
          </div>

          <div className="mt-8 p-4 bg-white/5 rounded-lg">
            <p className="text-slate-300 mb-2">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
            <p className="text-slate-300">
              <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM EST
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-slate-900 border border-white/20 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const service = featuredServices.find(s => s.id === selectedPlan);
                if (!service) return null;

                return (
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={closeModal}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                        <p className="text-slate-300">{service.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 p-4 rounded-lg">
                          <h4 className="font-semibold text-white mb-2">Pricing & ROI</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-300">Our Price:</span>
                              <span className="text-cyan-400 font-semibold">
                                {billingCycle === 'year' ? getDiscountedPrice(service.price, 'year') : service.price}/{billingCycle === 'year' ? 'year' : service.billing}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300">Market Price:</span>
                              <span className="text-slate-300">{service.marketPrice}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300">ROI:</span>
                              <span className="text-green-400">{service.roi}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300">Implementation:</span>
                              <span className="text-slate-300">{service.implementationTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg">
                          <h4 className="font-semibold text-white mb-2">Support & Compliance</h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="text-slate-300">Support:</span>
                              <p className="text-white">{service.support}</p>
                            </div>
                            <div>
                              <span className="text-slate-300">Compliance:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {service.compliance.map((comp, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">
                                    {comp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <a
                          href={service.href}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105"
                        >
                          {service.ctaLabel}
                        </a>
                        <a
                          href="tel:+13024640950"
                          className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105"
                        >
                          Call +1 302 464 0950
                        </a>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedPricingPage;