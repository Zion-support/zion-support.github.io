import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Rocket, 
  Crown, 
  Sparkles,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Cpu,
  Brain,
  Cloud,
  Lock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      price: { monthly: 99, yearly: 990 },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Content Generation (50 pieces/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        '5 User Accounts',
        'Basic Integration Support'
      ],
      notIncluded: [
        'Advanced AI Models',
        'Custom Training',
        'Priority Support',
        'Advanced Analytics',
        'Custom Integrations'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      price: { monthly: 299, yearly: 2990 },
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'AI Content Generation (200 pieces/month)',
        'Advanced Analytics & Reporting',
        'Priority Email Support',
        'Enhanced Security Features',
        '25 User Accounts',
        'Advanced Integration Support',
        'Custom AI Model Training',
        'Performance Optimization'
      ],
      notIncluded: [
        'Enterprise Security',
        'Dedicated Account Manager',
        'Custom Development',
        'White-label Solutions'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      price: { monthly: 999, yearly: 9990 },
      description: 'Full-featured solution for large enterprises',
      features: [
        'Unlimited AI Content Generation',
        'Enterprise Analytics & BI',
        '24/7 Phone & Email Support',
        'Enterprise Security & Compliance',
        'Unlimited User Accounts',
        'Custom Integrations & APIs',
        'Advanced AI Model Training',
        'Performance Optimization',
        'Dedicated Account Manager',
        'Custom Development Services',
        'White-label Solutions',
        'SLA Guarantees'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom training for your specific use case',
      price: { monthly: 199, yearly: 1990 },
      icon: Brain
    },
    {
      name: 'Advanced Analytics',
      description: 'Deep insights and predictive analytics',
      price: { monthly: 149, yearly: 1490 },
      icon: Cpu
    },
    {
      name: 'Custom Integration',
      description: 'Tailored integration with your existing systems',
      price: { monthly: 299, yearly: 2990 },
      icon: Cloud
    },
    {
      name: 'Priority Support',
      description: '24/7 dedicated support team',
      price: { monthly: 99, yearly: 990 },
      icon: Users
    }
  ];

  const savings = {
    monthly: 0,
    yearly: 20
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI-powered technology solutions. Choose the plan that fits your business needs with flexible monthly and yearly options."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI features with 
              transparent pricing and no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-4 text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === 'yearly' ? 32 : 4 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <span className={`ml-4 text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                    Save {savings.yearly}%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20' 
                    : 'bg-slate-800/50 border border-slate-700/50'
                } hover:border-cyan-400/30 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly / 12)}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-400 mb-6">
                      Billed annually (${plan.price.yearly}/year)
                    </p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-white mt-6 mb-4">Not included:</h4>
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-lg hover:shadow-cyan-400/25'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 hover:border-cyan-400/30'
                  }`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <addon.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                <div className="text-center">
                  <span className="text-2xl font-bold text-white">
                    ${billingCycle === 'monthly' ? addon.price.monthly : Math.round(addon.price.yearly / 12)}
                  </span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees. You only pay for the plan you choose and any additional services you add on."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start your trial."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the plan that's right for your business and start transforming your operations with AI today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
              >
                Start Free Trial
              </motion.a>
              <motion.a
                href="/request-quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Get Custom Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
