import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check, Star, Users, Zap, Shield, Globe, Building, Rocket,
  ArrowRight, ExternalLink, Download, Play, FileText, Search,
  CheckCircle, AlertCircle, Info, Clock, Eye, Copy,
  Terminal, Key, Lock, Server, Wifi, Activity, BookOpen,
  MessageCircle, Mail, Github, Bookmark, Share2, TrendingUp,
  Cpu, Network, BarChart3, Database, Layers, Workflow,
  Palette, TestTube, Bug, Lightbulb, Heart, Crown, Target
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups getting started with AI and technology solutions',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Up to 5 users',
        'Basic AI analytics',
        'Email support',
        'Standard integrations',
        'Basic reporting',
        'Community forum access'
      ],
      limitations: [
        'Limited API calls (1K/month)',
        'Basic templates only',
        'No custom branding',
        'Standard security features'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'blue'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses that need advanced features and scalability',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Up to 25 users',
        'Advanced AI analytics',
        'Priority email support',
        'Advanced integrations',
        'Custom reporting',
        'Phone support',
        'Custom templates',
        'Advanced security features'
      ],
      limitations: [
        'Limited API calls (10K/month)',
        'No dedicated account manager',
        'Standard SLA (99.5%)'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'purple'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations with complex requirements',
      price: { monthly: 999, yearly: 9990 },
      features: [
        'Unlimited users',
        'Full AI platform access',
        '24/7 phone & email support',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated account manager',
        'Custom branding',
        'Enterprise security',
        'SLA guarantee (99.9%)',
        'On-premise options'
      ],
      limitations: [
        'Annual commitment required',
        'Custom pricing for large deployments'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'green'
    }
  ];

  const addOns = [
    {
      id: 1,
      name: 'Additional Users',
      description: 'Add more users to your plan',
      price: { monthly: 25, yearly: 250 },
      per: 'per user/month'
    },
    {
      id: 2,
      name: 'API Access',
      description: 'Increase API call limits',
      price: { monthly: 50, yearly: 500 },
      per: 'per 10K calls/month'
    },
    {
      id: 3,
      name: 'Custom Integrations',
      description: 'Build custom integrations for your systems',
      price: { monthly: 200, yearly: 2000 },
      per: 'per integration'
    },
    {
      id: 4,
      name: 'Priority Support',
      description: 'Get faster response times and dedicated support',
      price: { monthly: 100, yearly: 1000 },
      per: 'per month'
    }
  ];

  const enterpriseFeatures = [
    {
      category: 'Security & Compliance',
      features: [
        'SOC 2 Type II compliance',
        'GDPR compliance',
        'Advanced encryption',
        'Multi-factor authentication',
        'Role-based access control',
        'Audit logging'
      ]
    },
    {
      category: 'Performance & Scalability',
      features: [
        '99.9% uptime SLA',
        'Global CDN',
        'Auto-scaling infrastructure',
        'Load balancing',
        'Performance monitoring',
        'Custom performance tuning'
      ]
    },
    {
      category: 'Support & Services',
      features: [
        '24/7 dedicated support',
        'Dedicated account manager',
        'Custom training programs',
        'Implementation services',
        'Ongoing consulting',
        'Quarterly business reviews'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for Professional plans. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice.'
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer special pricing for qualified non-profit organizations and educational institutions.'
    }
  ];

  const getPlanColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      green: 'bg-green-600 hover:bg-green-700'
    };
    return colors[color as keyof typeof colors] || 'bg-blue-600 hover:bg-blue-700';
  };

  const getPopularBadge = (popular: boolean) => {
    if (!popular) return null;
    return (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features with flexible options to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'transform translate-x-8' : 'transform translate-x-1'
                }`} />
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 rounded-xl p-8 backdrop-blur-sm border ${
                  plan.popular ? 'border-purple-500/50' : 'border-white/10'
                } hover:border-white/20 transition-all hover:bg-white/10`}
              >
                {getPopularBadge(plan.popular)}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-6xl font-bold text-white">
                      {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-green-400 text-sm">Save ${(plan.price.monthly * 12) - plan.price.yearly}/year</p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${getPlanColor(plan.color)}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Add-ons & Extensions</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Customize your plan with additional features and services to meet your specific needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon) => (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-white mb-1">
                      ${billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly}
                    </div>
                    <div className="text-gray-400 text-sm">{addon.per}</div>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Plan
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Features</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Advanced capabilities for large organizations with complex requirements and compliance needs
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {enterpriseFeatures.map((category) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Choose the perfect plan for your business or contact us for custom enterprise solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Request Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
