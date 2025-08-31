import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Crown, ArrowRight, Calculator, DollarSign } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 299,
      annualPrice: 2390, // 20% discount
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Basic AI Chatbot',
        'Email Support',
        'Up to 1,000 queries/month',
        'Standard analytics',
        'Basic integrations',
        '1 team member',
        'Community access'
      ],
      limitations: [
        'No phone support',
        'Limited customization',
        'Basic reporting only'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      icon: Star,
      description: 'Ideal for growing businesses',
      monthlyPrice: 799,
      annualPrice: 6392, // 20% discount
      color: 'from-purple-500 to-pink-500',
      features: [
        'Advanced AI Solutions',
        'Priority Email & Chat Support',
        'Up to 10,000 queries/month',
        'Advanced analytics & reporting',
        'Custom integrations',
        'Up to 5 team members',
        'Training & onboarding',
        'API access',
        'Custom workflows'
      ],
      limitations: [
        'Limited phone support hours',
        'Standard SLA'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations with complex needs',
      monthlyPrice: 2499,
      annualPrice: 19992, // 20% discount
      color: 'from-orange-500 to-red-500',
      features: [
        'Full AI & Quantum Solutions Suite',
        '24/7 Dedicated Support',
        'Unlimited queries',
        'Custom analytics & BI dashboards',
        'Enterprise integrations',
        'Unlimited team members',
        'Dedicated success manager',
        'Premium API access',
        'Custom development',
        'White-label options',
        'Advanced security features',
        'Compliance assistance'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    },
    {
      name: 'Custom',
      icon: Shield,
      description: 'Tailored solutions for unique requirements',
      monthlyPrice: null,
      annualPrice: null,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Fully customized solutions',
        'Dedicated development team',
        'Custom AI model training',
        'On-premise deployment options',
        'Custom SLA agreements',
        'Unlimited everything',
        'Executive support',
        'Custom integrations',
        'Regulatory compliance',
        'Data sovereignty options'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: 'Additional AI Models',
      description: 'Access to specialized AI models for specific use cases',
      price: '$199/month per model'
    },
    {
      name: 'Premium Support',
      description: '24/7 phone support with guaranteed response times',
      price: '$499/month'
    },
    {
      name: 'Custom Training',
      description: 'Personalized training sessions for your team',
      price: '$299/hour'
    },
    {
      name: 'Data Migration',
      description: 'Professional data migration and setup services',
      price: '$2,999 one-time'
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: '$4,999 one-time'
    }
  ];

  const enterpriseFeatures = [
    {
      category: 'AI & Machine Learning',
      features: [
        'Custom AI model development',
        'Advanced natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'Automated decision making'
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      features: [
        'Multi-cloud deployment',
        'Auto-scaling infrastructure',
        'Load balancing',
        'CDN integration',
        'Disaster recovery'
      ]
    },
    {
      category: 'Security & Compliance',
      features: [
        'Zero-trust architecture',
        'End-to-end encryption',
        'Compliance frameworks (SOC2, GDPR)',
        'Security monitoring',
        'Threat intelligence'
      ]
    },
    {
      category: 'Support & Services',
      features: [
        'Dedicated success manager',
        '24/7 premium support',
        'Custom training programs',
        'Regular health checks',
        'Strategic consulting'
      ]
    }
  ];

  const getPrice = (plan: typeof pricingPlans[0]) => {
    if (!plan.monthlyPrice) return 'Custom';
    return billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12);
  };

  const getSavings = (plan: typeof pricingPlans[0]) => {
    if (!plan.monthlyPrice) return 0;
    return Math.round(((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12)) * 100);
  };

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's AI and technology solutions. Choose from flexible plans designed for businesses of all sizes."
        keywords="pricing, AI solutions, technology services, business plans, enterprise pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-1 border border-white/20">
              <div className="flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    billingCycle === 'annual'
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Annual
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                  plan.popular ? 'lg:scale-105 border-cyan-400/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white">
                          ${getPrice(plan)}
                        </span>
                        <span className="text-gray-300 ml-2">
                          /month
                        </span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className="text-green-400 text-sm mt-1">
                          Save {getSavings(plan)}% annually
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-white">
                      Contact us
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-center text-gray-400">
                      <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Add-on Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOnServices.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {addon.description}
                  </p>
                  <div className="text-cyan-400 font-semibold">
                    {addon.price}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Enterprise Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-bold text-white mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  Can I change plans at any time?
                </h3>
                <p className="text-gray-300 text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300 text-sm">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300 text-sm">
                  We accept all major credit cards, bank transfers, and can accommodate purchase orders for enterprise clients.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  Do you offer custom pricing for large organizations?
                </h3>
                <p className="text-gray-300 text-sm">
                  Yes, we offer volume discounts and custom pricing for organizations with specific requirements. Contact our sales team for details.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI solutions. Start your free trial today or contact our sales team for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
