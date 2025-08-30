import React, { useState } from 'react';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '@/components/SEO';
import { Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart,
  Users,
  Building,
  Rocket,
  Brain,
  Cloud,
  Lock
 } from 'lucide-react';

export default function Pricing(...args[]):  {
  const [billingCycle, setBillingCycle] = useState<any>('annual');

  const pricingTiers = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 299, annual: 249 },
      description: 'Perfect for small businesses getting started with technology',
      features[
        'AI Business Intelligence Basic',
        'Cloud Infrastructure Setup',
        'Basic Security Monitoring',
        'Email Support',
        'Monthly Reports',
        'Up to 5 Users'
      ],
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      icon: Star,
      price: { monthly: 799, annual: 649 },
      description: 'Ideal for growing companies with advanced technology needs',
      features[
        'Everything in Starter',
        'Advanced AI Analytics',
        'Full Cloud DevOps Suite',
        '24/7 Security Monitoring',
        'Priority Support',
        'Up to 25 Users',
        'Custom Integrations',
        'Quarterly Strategy Sessions'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 1999, annual: 1599 },
      description: 'Comprehensive solutions for large enterprises',
      features[
        'Everything in Professional',
        'Custom AI Solutions',
        'Full Digital Transformation',
        'Zero Trust Security',
        'Dedicated Account Manager',
        'Unlimited Users',
        'Onsite Support',
        'Custom SLA Agreements'
      ],
      color: 'from-amber-500 to-orange-600',
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: { monthly: 500, annual: 4500 },
      icon: Brain
    },
    {
      name: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration',
      price: { monthly: 800, annual: 7200 },
      icon: Cloud
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment',
      price: { monthly: 300, annual: 2700 },
      icon: Shield
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support',
      price: { monthly: 400, annual: 3600 },
      icon: Clock
    }
  ];

  const savings = {
    monthly: 0,
    annual: 20
  };

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's AI, cloud, and technology services. Choose the plan that fits your business needs."
        keywords="pricing, AI services pricing, cloud solutions cost, technology consulting rates, Zion Tech Group"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the perfect plan for your business technology needs
          </motion.p>
          <motion.div 
            className="text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            No hidden fees • Cancel time • 30-day money-back guarantee
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-700 rounded-2xl p-2 flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === 'annual'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save {savings.annual}%
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg: grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index)  => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative group ${
                  tier.popular ? 'lg:scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">${tier.price[billingCycle]}</span>
                      <span className="text-slate-400 ml-2">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-cyan-400 text-sm mt-1">
                        Billed annually (${tier.price.annual * 12})
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Add-on Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Additional Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enhance your plan with specialized services tailored to your needs
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 gap-8 max-w-6xl mx-auto">
            {addOnServices.map((service, index)  => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-slate-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price[billingCycle]}</div>
                    <div className="text-slate-400 text-sm">/month</div>
                  </div>
                </div>
                
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                  Add Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan at  time?",
                answer: "Yes, you can upgrade or downgrade your plan at  time. Changes take effect immediately, and we'll prorate  billing adjustments."
              },
              {
                question: "What's included in the 30-day money-back guarantee?",
                answer: "If you're not satisfied with our services within 30 days, we'll provide a full refund. No questions asked."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom pricing and service packages that meet their specific needs."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for our standard plans. Custom implementations may have associated costs, which we'll discuss upfront."
              }
            ].map((faq, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose your plan and start transforming your business with cutting-edge technology
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </a>
            <a 
              href="/services-overview" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )}
