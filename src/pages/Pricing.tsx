import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Globe,
  Lock,
  Sparkles
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, annual: 79 },
      features: [
        'AI Content Optimization (10K words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 AI Models Access',
        'Standard API Rate Limits',
        'Basic Documentation'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-600',
      icon: Zap,
      cta: 'Get Started',
      path: '/contact'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 299, annual: 239 },
      features: [
        'AI Content Optimization (100K words/month)',
        'Advanced Analytics & Reporting',
        'Priority Email & Chat Support',
        '25 AI Models Access',
        'Increased API Rate Limits',
        'Advanced Documentation',
        'Custom Integrations',
        'Team Collaboration Tools'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-600',
      icon: Star,
      cta: 'Start Free Trial',
      path: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      price: { monthly: 999, annual: 799 },
      features: [
        'Unlimited AI Content Optimization',
        'Custom AI Model Training',
        'Dedicated Account Manager',
        'Unlimited AI Models Access',
        'Custom API Rate Limits',
        'White-label Solutions',
        'Advanced Security Features',
        'SLA Guarantees',
        'Custom Development'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-600',
      icon: Sparkles,
      cta: 'Contact Sales',
      path: '/contact'
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model training for your specific use case',
      price: { monthly: 500, annual: 400 },
      features: ['Custom model development', 'Training data preparation', 'Model optimization', 'Ongoing maintenance'],
      icon: Brain
    },
    {
      name: 'Advanced Security',
      description: 'Enterprise-grade security and compliance features',
      price: { monthly: 200, annual: 160 },
      features: ['SOC 2 Compliance', 'Advanced encryption', 'Audit logging', 'Security monitoring'],
      icon: Shield
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure and DevOps services',
      price: { monthly: 300, annual: 240 },
      features: ['Auto-scaling', 'Load balancing', 'Monitoring', '24/7 support'],
      icon: Cloud
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'No Setup Fees',
      description: 'Get started immediately with no hidden costs'
    },
    {
      icon: Clock,
      title: 'Quick Implementation',
      description: 'Deploy solutions in days, not months'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance'
    }
  ];

  const savings = billingCycle === 'annual' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing Plans - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's AI services, IT solutions, and technology services. Choose the plan that fits your business needs."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Choose the plan that fits your business needs. All plans include our core features 
              with transparent pricing and no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                    Save {savings}%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`p-8 rounded-2xl border-2 h-full ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-slate-700/50' 
                    : 'border-slate-600/50 bg-slate-700/30'
                }`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">$</span>
                        <span className="text-6xl font-bold text-white">
                          {billingCycle === 'annual' ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-gray-400 mt-2">
                          Billed annually (${plan.price.annual * 12})
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.path}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:scale-105'
                        : 'bg-slate-600 text-white hover:bg-slate-500 hover:scale-105'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with additional services and features tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <addon.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{addon.name}</h3>
                    <p className="text-gray-400 text-sm">{addon.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">$</span>
                    <span className="text-3xl font-bold text-white">
                      {billingCycle === 'annual' ? addon.price.annual : addon.price.monthly}
                    </span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full py-2 px-4 bg-slate-600 text-white rounded-lg text-center text-sm font-medium hover:bg-slate-500 transition-colors"
                >
                  Add to Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Plans?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We believe in providing value that goes beyond just features and pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and plans.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate your billing accordingly.'
              },
              {
                question: 'Do you offer custom pricing for enterprise?',
                answer: 'Absolutely! Our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and get a tailored quote.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe.'
              },
              {
                question: 'Is there a free trial available?',
                answer: 'Yes! We offer a 14-day free trial for our Professional plan. No credit card required to start your trial.'
              },
              {
                question: 'What happens if I exceed my plan limits?',
                answer: 'We\'ll notify you when you\'re approaching your limits. You can either upgrade your plan or purchase additional credits as needed.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose the plan that fits your business needs and start transforming your operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
