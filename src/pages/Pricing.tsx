import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Brain, Shield, Cloud, Rocket, Users, Building, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic AI consultation',
        'IT infrastructure assessment',
        'Email support',
        'Monthly reports',
        'Basic security audit'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI solutions',
        'Full IT infrastructure management',
        'Priority support',
        'Weekly reports',
        'Advanced security features',
        'Cloud migration support',
        '24/7 monitoring'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Custom AI development',
        'Full digital transformation',
        'Dedicated support team',
        'Real-time analytics',
        'Advanced cybersecurity',
        'Quantum computing access',
        'Custom integrations',
        'SLA guarantees'
      ],
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Compliance Assistant',
      price: '$199',
      period: '/month',
      description: 'Automated regulatory compliance monitoring',
      icon: Shield
    },
    {
      name: 'Cloud FinOps Optimizer',
      price: '$149',
      period: '/month',
      description: 'Cloud cost optimization and management',
      icon: Cloud
    },
    {
      name: 'AI Sales Copilot',
      price: '$179',
      period: '/month',
      description: 'Intelligent sales automation and insights',
      icon: Users
    },
    {
      name: 'Quantum Computing Access',
      price: '$499',
      period: '/month',
      description: 'Access to quantum computing resources',
      icon: Rocket
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's AI and technology services. Choose from our flexible plans designed for businesses of all sizes." />
        <meta name="keywords" content="pricing, AI services, IT services, technology consulting, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business. All our pricing is transparent with no hidden fees.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-black hover:from-cyan-500 hover:to-blue-500'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-cyan-400/30'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enhance your plan with specialized AI and technology services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <addon.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{addon.price}</span>
                    <span className="text-gray-400 text-sm">{addon.period}</span>
                  </div>
                  <button className="w-full mt-4 py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-cyan-400/30">
                    Add Service
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I change my plan at any time?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
                },
                {
                  question: "Do you offer custom pricing for enterprise?",
                  answer: "Absolutely! We provide custom pricing and solutions for enterprise clients. Contact our sales team for a personalized quote."
                },
                {
                  question: "What's included in the support?",
                  answer: "Support varies by plan. Starter includes email support, Professional includes priority support, and Enterprise includes dedicated support."
                },
                {
                  question: "Are there any setup fees?",
                  answer: "No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Started?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your specific needs and get a custom quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
                  Contact Sales
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-cyan-400/30 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
