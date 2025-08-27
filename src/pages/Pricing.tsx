import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  ArrowRight,
  Users,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, annual: 990 },
      features: [
        'AI-powered email automation',
        'Basic analytics dashboard',
        'Email support',
        '5 user accounts',
        'Basic integrations',
        'Standard security features'
      ],
      popular: false,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 299, annual: 2990 },
      features: [
        'Everything in Starter',
        'Advanced AI features',
        'Priority support',
        'Unlimited user accounts',
        'Advanced integrations',
        'Enhanced security features',
        'Custom branding',
        'API access'
      ],
      popular: true,
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 799, annual: 7990 },
      features: [
        'Everything in Professional',
        'Custom AI models',
        'Dedicated support manager',
        'White-label solutions',
        'Advanced security & compliance',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment options'
      ],
      popular: false,
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const servicePackages = [
    {
      name: 'AI Implementation',
      description: 'Custom AI solutions for your business',
      price: 'From $5,000',
      duration: '4-8 weeks',
      features: [
        'Custom AI model development',
        'Data preparation & training',
        'Integration with existing systems',
        'User training & documentation',
        '3 months of support'
      ],
      icon: Brain
    },
    {
      name: 'Cloud Migration',
      description: 'Seamless cloud infrastructure setup',
      price: 'From $10,000',
      duration: '6-12 weeks',
      features: [
        'Infrastructure assessment',
        'Migration planning & execution',
        'Performance optimization',
        'Security implementation',
        'Monitoring & alerting setup'
      ],
      icon: Cloud
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment',
      price: 'From $3,000',
      duration: '2-4 weeks',
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Compliance review',
        'Security recommendations',
        'Remediation guidance'
      ],
      icon: Shield
    }
  ];

  const addOns = [
    {
      name: 'Priority Support',
      description: '24/7 dedicated support with 2-hour response time',
      price: '$500/month',
      icon: MessageSquare
    },
    {
      name: 'Custom Development',
      description: 'Bespoke features and integrations',
      price: '$150/hour',
      icon: Rocket
    },
    {
      name: 'Training & Onboarding',
      description: 'Comprehensive team training and setup',
      price: '$2,000/day',
      icon: Users
    }
  ];

  const savings = billingCycle === 'annual' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's AI, cloud, and technology services. Choose the plan that fits your business needs."
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our core features 
              with flexible options to scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-slate-800/50 rounded-xl p-1 border border-slate-600/50">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-400 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  billingCycle === 'annual'
                    ? 'bg-cyan-400 text-white'
                    : 'text-white'
                }`}
              >
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${
                  plan.popular ? 'scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border ${
                  plan.popular ? 'border-purple-400/50' : 'border-slate-600/50'
                } hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full`}>
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'annual' ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-300 ml-2">
                        /{billingCycle === 'annual' ? 'year' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-sm text-green-400 mt-1">
                        Save ${(plan.price.monthly * 12) - plan.price.annual} annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                    } hover:scale-105`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Custom Service Packages</h2>
            <p className="text-xl text-gray-300">
              Need something specific? We offer custom solutions tailored to your business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mb-4">
                  <pkg.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-4">{pkg.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{pkg.price}</span>
                  <span className="text-gray-400 text-sm">{pkg.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center w-full justify-center py-2 px-4 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300">
              Enhance your experience with these optional add-ons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mb-4">
                  <addon.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Get answers to common pricing questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for our subscription plans. Custom service packages may have one-time setup costs depending on complexity."
              },
              {
                question: "Do you offer discounts for nonprofits?",
                answer: "Yes, we offer special pricing for qualified nonprofit organizations. Contact us for more details about our nonprofit discount program."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about pricing or need a custom quote? 
              Our team is here to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Request Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
