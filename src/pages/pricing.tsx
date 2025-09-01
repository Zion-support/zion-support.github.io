import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'AI Business Intelligence Basic',
        'Cloud DevOps Essentials',
        'Basic Cybersecurity',
        'Email Support',
        '5GB Storage',
        'Monthly Reports'
      ],
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Everything in Starter',
        'AI Sales Copilot',
        'Advanced Cybersecurity Suite',
        'Priority Support',
        '25GB Storage',
        'Weekly Reports',
        'Custom Integrations',
        'Team Collaboration Tools'
      ],
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Professional',
        'Quantum Computing Access',
        'AI Healthcare Platform',
        '24/7 Dedicated Support',
        'Unlimited Storage',
        'Real-time Analytics',
        'Custom AI Models',
        'On-site Implementation',
        'SLA Guarantees'
      ],
      icon: Rocket,
      color: 'from-cyan-500 to-cyan-600',
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: 'AI Content Creation Studio Pro',
      price: '$199',
      period: '/month',
      description: 'Advanced AI-powered content creation and optimization'
    },
    {
      name: 'Quantum AI Trading Platform',
      price: '$499',
      period: '/month',
      description: 'Next-generation quantum computing for financial trading'
    },
    {
      name: 'AI Cybersecurity Suite',
      price: '$399',
      period: '/month',
      description: 'Comprehensive AI-driven security and threat detection'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan-light max-w-3xl mx-auto"
          >
            Choose the perfect plan for your business. All plans include our core AI and technology services with flexible scaling options.
          </motion.p>
        </div>
      </div>

      {/* Main Pricing Tiers */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-2xl p-8 ${
                  tier.popular ? 'ring-4 ring-zion-cyan scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${tier.color} text-white mb-4`}>
                    <tier.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-xl text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add specialized AI and technology services to any plan for enhanced capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-zion-cyan">{service.price}</div>
                  <span className="text-gray-600">{service.period}</span>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 w-full py-2 px-4 bg-zion-purple text-white rounded-lg text-center hover:bg-zion-purple-dark transition-colors duration-300"
                >
                  Add Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our pricing and services</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer: "Absolutely! We work with enterprise clients to create custom solutions tailored to their specific needs and requirements."
              },
              {
                question: "What kind of support do you provide?",
                answer: "Support varies by plan - from email support for Starter to 24/7 dedicated support for Enterprise. All plans include our comprehensive knowledge base."
              },
              {
                question: "Are there any setup fees?",
                answer: "No setup fees for our standard plans. Custom enterprise solutions may have one-time implementation costs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-cyan-light mb-8">
              Get started with Zion Tech Group today and experience the power of AI-driven innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}