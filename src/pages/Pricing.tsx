import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: '$999',
      yearlyPrice: '$9,999',
      period: '/month',
      yearlyPeriod: '/year',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI Solutions',
        'Email Support',
        'Standard Security',
        'Monthly Reports',
        '5 Team Members'
      ],
      savings: '17%'
    },
    {
      name: 'Professional',
      monthlyPrice: '$2,999',
      yearlyPrice: '$29,999',
      period: '/month',
      yearlyPeriod: '/year',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Enhanced Security',
        'Weekly Reports',
        '25 Team Members',
        'Custom Integrations'
      ],
      popular: true,
      savings: '17%'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Real-time Analytics',
        'Unlimited Team Members',
        'Custom Development',
        'SLA Guarantee'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-extrabold mb-6 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pricing Plans
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the perfect plan for your business needs. All plans include our core technology solutions.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <motion.span
                className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Save 17%
              </motion.span>
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-slate-800 p-8 rounded-lg border transition-all duration-300 ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-slate-700'
              } ${hoveredPlan === index ? 'scale-105 shadow-2xl shadow-blue-500/20' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={billingPeriod}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {plan.name === 'Enterprise' ? (
                        <span className="text-4xl font-bold">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold">
                            {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                          </span>
                          <span className="text-gray-400">
                            {billingPeriod === 'monthly' ? plan.period : plan.yearlyPeriod}
                          </span>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  {plan.savings && billingPeriod === 'yearly' && (
                    <motion.div
                      className="text-green-400 text-sm font-medium mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Save {plan.savings}
                    </motion.div>
                  )}
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                size="large"
                className="w-full"
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our pricing? We've got answers.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Can I change my plan anytime?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started."
                },
                {
                  question: "What happens if I exceed my plan limits?",
                  answer: "We'll notify you before you reach your limits and offer options to upgrade or purchase additional capacity."
                },
                {
                  question: "Do you offer discounts for annual billing?",
                  answer: "Yes, annual billing saves you 17% compared to monthly billing. This discount is automatically applied."
                },
                {
                  question: "Can I get a custom quote?",
                  answer: "Absolutely! Contact our sales team for a custom quote tailored to your specific needs and requirements."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center mt-16">
          <motion.div
            className="bg-slate-800 p-8 rounded-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-6">
              We understand that every business is unique. Let's work together to create a solution that perfectly fits your needs.
            </p>
            <Button variant="primary" size="large">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;