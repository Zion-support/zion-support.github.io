import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Brain, Shield, Cloud, Code, Users, Building, Globe } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 990,
      originalPrice: billingCycle === 'monthly' ? 149 : 1490,
      features: [
        'AI Business Intelligence Basic',
        'Cloud DevOps Essentials',
        'Basic Cybersecurity',
        '5GB Cloud Storage',
        'Email Support',
        'Basic Analytics Dashboard',
        'Up to 5 Users',
        'Standard API Access'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 2990,
      originalPrice: billingCycle === 'monthly' ? 399 : 3990,
      features: [
        'Everything in Starter',
        'AI Compliance Assistant',
        'Advanced Cloud Services',
        'Enhanced Security Features',
        '25GB Cloud Storage',
        'Priority Support',
        'Advanced Analytics',
        'Up to 25 Users',
        'Custom Integrations',
        'Training Sessions'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: billingCycle === 'monthly' ? 799 : 7990,
      originalPrice: billingCycle === 'monthly' ? 999 : 9990,
      features: [
        'Everything in Professional',
        'AI Sales Copilot',
        'Quantum Computing Access',
        'Advanced Cybersecurity Platform',
        'Unlimited Cloud Storage',
        '24/7 Dedicated Support',
        'Custom AI Models',
        'Unlimited Users',
        'White-label Solutions',
        'Dedicated Account Manager',
        'Custom Development',
        'On-premise Options'
      ],
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', price: '$49/month' },
        { name: 'AI Compliance Assistant', price: '$79/month' },
        { name: 'AI Sales Copilot', price: '$99/month' },
        { name: 'AI Content Marketing Suite', price: '$69/month' },
        { name: 'AI Customer Support', price: '$89/month' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps', price: '$89/month' },
        { name: 'IT Infrastructure', price: '$129/month' },
        { name: 'FinOps Advisor', price: '$59/month' },
        { name: 'Cloud FinOps Optimizer', price: '$79/month' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'AI Cybersecurity Platform', price: '$149/month' },
        { name: 'Security Headers & CSP', price: '$39/month' },
        { name: 'DSR Privacy Portal', price: '$69/month' },
        { name: 'Zero Trust Network Access', price: '$199/month' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Code,
      services: [
        { name: 'Micro CRM', price: '$29/month' },
        { name: 'Helpdesk Platform', price: '$49/month' },
        { name: 'Website Analytics', price: '$19/month' },
        { name: 'Affiliate Tracking', price: '$39/month' }
      ]
    }
  ];

  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's AI solutions, cloud services, cybersecurity, and micro SaaS platforms. Choose the perfect plan for your business."
        keywords="pricing, AI solutions, cloud services, cybersecurity, micro SaaS, business plans"
        canonicalUrl="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Transparent Pricing for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Innovation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Choose the perfect plan for your business. All plans include our core AI solutions, 
            cloud infrastructure, and cybersecurity features with transparent pricing and no hidden fees.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save {savings}%
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/25' 
                    : 'border-gray-700'
                } hover:border-blue-400 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {plan.originalPrice > plan.price && (
                    <div className="mb-6">
                      <span className="text-lg text-gray-400 line-through">
                        ${plan.originalPrice}
                      </span>
                      <span className="text-green-400 ml-2 font-semibold">
                        Save ${plan.originalPrice - plan.price}
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Individual Service Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Need specific services? Choose from our à la carte options or bundle them for better value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                      <span className="text-gray-300 text-sm">{service.name}</span>
                      <span className="text-blue-400 font-semibold">{service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We provide custom pricing and solutions for enterprise clients with specific requirements. Contact our sales team for a personalized quote."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial."
              },
              {
                question: "What kind of support is included?",
                answer: "Support varies by plan: Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 dedicated support."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Zion Tech Group's innovative solutions. 
              Start your free trial today and experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
