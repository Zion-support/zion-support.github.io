import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  ArrowRight,
  Crown,
  Sparkles
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Basic AI Services',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Basic Security Features',
        '5GB Storage',
        'Monthly Reports'
      ],
      popular: false,
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      icon: <Shield className="w-8 h-8 text-zion-purple" />,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Advanced AI Services',
        'Full Cloud Management',
        'Priority Support',
        'Advanced Security Suite',
        '50GB Storage',
        'Weekly Reports & Analytics',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      popular: true,
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      icon: <Crown className="w-8 h-8 text-zion-cyan" />,
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Full AI Suite Access',
        'Multi-Cloud Management',
        '24/7 Premium Support',
        'Enterprise Security',
        'Unlimited Storage',
        'Real-time Analytics',
        'Custom Development',
        'Dedicated Team',
        'SLA Guarantees',
        'On-site Support'
      ],
      popular: false,
      color: 'from-zion-cyan to-zion-blue'
    }
  ];

  const addOnServices = [
    {
      name: 'Cybersecurity Suite',
      description: 'Advanced threat protection and compliance',
      price: billingCycle === 'monthly' ? 199 : 1990,
      features: ['Threat Detection', 'Compliance Monitoring', 'Security Audits']
    },
    {
      name: 'Quantum Computing',
      description: 'Access to quantum computing resources',
      price: billingCycle === 'monthly' ? 499 : 4990,
      features: ['Quantum Algorithms', 'Optimization Tools', 'Research Support']
    },
    {
      name: 'Blockchain Services',
      description: 'Blockchain development and consulting',
      price: billingCycle === 'monthly' ? 299 : 2990,
      features: ['Smart Contracts', 'DApp Development', 'Consulting']
    },
    {
      name: 'IoT Solutions',
      description: 'Internet of Things implementation',
      price: billingCycle === 'monthly' ? 399 : 3990,
      features: ['Device Management', 'Data Analytics', 'Integration']
    }
  ];

  const savings = billingCycle === 'yearly' ? 17 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-8">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core services 
              with flexible options to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save {savings}%
                </span>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-blue rounded-full"></div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-purple/40 shadow-lg shadow-zion-purple/20' 
                    : 'border-zion-cyan/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-zion-slate-light">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:shadow-lg hover:shadow-zion-purple/25'
                        : 'bg-zion-cyan text-white hover:bg-zion-cyan-dark'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Enhance your plan with specialized services tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOnServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-zion-cyan">
                      ${service.price}
                    </div>
                    <div className="text-zion-slate-light">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 px-6 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Add Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom pricing plans that meet their specific requirements and scale."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees! All plans include free setup and onboarding to get you started quickly and efficiently."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business and start transforming your operations with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center"
              >
                View All Plans
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
