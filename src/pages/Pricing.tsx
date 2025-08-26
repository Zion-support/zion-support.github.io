import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckIcon,
  XMarkIcon,
  StarIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UsersIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'annual' ? 299 : 349,
      originalPrice: billingCycle === 'annual' ? 359 : 419,
      features: [
        'AI-powered business insights',
        'Basic automation workflows',
        'Email support',
        '5 user licenses',
        'Standard integrations',
        'Basic reporting',
        'Cloud storage (50GB)',
        'Mobile app access'
      ],
      notIncluded: [
        'Advanced AI models',
        'Custom integrations',
        'Priority support',
        'Advanced analytics',
        'White-label solutions'
      ],
      icon: UsersIcon,
      popular: false,
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'annual' ? 799 : 899,
      originalPrice: billingCycle === 'annual' ? 959 : 1079,
      features: [
        'Everything in Starter',
        'Advanced AI models & training',
        'Custom automation workflows',
        'Priority support (4-hour response)',
        'Unlimited user licenses',
        'Advanced integrations',
        'Comprehensive analytics',
        'Cloud storage (500GB)',
        'API access',
        'Team collaboration tools',
        'Advanced security features',
        'Custom branding'
      ],
      notIncluded: [
        'Enterprise-grade security',
        'Custom AI model development',
        'Dedicated account manager',
        'On-premise deployment',
        'SLA guarantees'
      ],
      icon: RocketLaunchIcon,
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 'Custom',
      originalPrice: null,
      features: [
        'Everything in Professional',
        'Custom AI model development',
        'Enterprise-grade security',
        'Dedicated account manager',
        '24/7 priority support',
        'On-premise deployment options',
        'Custom integrations',
        'Advanced compliance features',
        'Unlimited cloud storage',
        'SLA guarantees',
        'White-label solutions',
        'Custom training programs'
      ],
      notIncluded: [],
      icon: SparklesIcon,
      popular: false,
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: billingCycle === 'annual' ? 299 : 349,
      period: 'per month',
      features: ['Custom model development', 'Training data preparation', 'Model optimization', 'Ongoing maintenance']
    },
    {
      name: 'Advanced Analytics',
      description: 'Enhanced reporting and business intelligence',
      price: billingCycle === 'annual' ? 199 : 249,
      period: 'per month',
      features: ['Custom dashboards', 'Advanced reporting', 'Data visualization', 'Predictive analytics']
    },
    {
      name: 'Priority Support',
      description: '24/7 dedicated support with SLA guarantees',
      price: billingCycle === 'annual' ? 399 : 449,
      period: 'per month',
      features: ['24/7 phone support', '1-hour response time', 'Dedicated support team', 'SLA guarantees']
    },
    {
      name: 'Custom Integrations',
      description: 'Bespoke integrations with your existing systems',
      price: billingCycle === 'annual' ? 599 : 699,
      period: 'per month',
      features: ['Custom API development', 'System integration', 'Data migration', 'Ongoing maintenance']
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Contact our sales team for details.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your current billing period.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support. Professional and Enterprise plans include priority support with faster response times and additional channels.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our core AI-powered features with no hidden costs.
            </p>
            
            {/* Billing Toggle */}
            <div className="mt-8 flex items-center justify-center">
              <div className="bg-slate-800/50 rounded-lg p-1 border border-white/10">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'annual'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Annual
                  <span className="ml-1 px-2 py-1 bg-green-500 text-white text-xs rounded-full">Save 20%</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105'
                    : 'border-white/10 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <div className="text-center mb-8">
                  {plan.price === 'Custom' ? (
                    <div className="text-3xl font-bold text-white">Custom Pricing</div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">${plan.originalPrice}</span>
                      )}
                      <span className="text-gray-300">/month</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="text-white font-semibold mb-4 mt-6">Not included:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <XMarkIcon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <a
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-lg'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-300">Enhance your plan with additional services tailored to your needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-white">${addon.price}</span>
                  <span className="text-gray-300 text-sm">/{addon.period}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm"
                >
                  Add Service
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing and plans</p>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the plan that's right for your business and start transforming your operations with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;