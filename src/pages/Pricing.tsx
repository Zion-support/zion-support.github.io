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
  Rocket,
  Building,
  Enterprise,
  TrendingUp
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, annual: 79 },
      features: [
        'AI-powered business intelligence',
        'Basic analytics dashboard',
        'Email support',
        'Up to 5 team members',
        'Standard security features',
        'API access (1000 calls/month)',
        'Basic integrations',
        'Community forum access'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      cta: 'Get Started',
      ctaColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 299, annual: 239 },
      features: [
        'Everything in Starter',
        'Advanced AI models',
        'Custom analytics reports',
        'Priority email support',
        'Up to 25 team members',
        'Enhanced security features',
        'API access (10,000 calls/month)',
        'Advanced integrations',
        'Dedicated account manager',
        'Training and onboarding',
        'Custom dashboards',
        'White-label options'
      ],
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      cta: 'Start Free Trial',
      ctaColor: 'from-purple-500 to-pink-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 999, annual: 799 },
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'Unlimited team members',
        '24/7 phone support',
        'Enterprise security & compliance',
        'Unlimited API calls',
        'Custom integrations',
        'Dedicated support team',
        'On-site training',
        'Custom SLA agreements',
        'Advanced analytics',
        'Multi-tenant architecture'
      ],
      icon: Crown,
      color: 'from-orange-500 to-red-500',
      popular: false,
      cta: 'Contact Sales',
      ctaColor: 'from-orange-500 to-red-500'
    }
  ];

  const addOns = [
    {
      name: 'Additional Team Members',
      description: 'Add more users to your plan',
      price: { monthly: 15, annual: 12 },
      per: 'per user/month'
    },
    {
      name: 'Advanced AI Models',
      description: 'Access to premium AI capabilities',
      price: { monthly: 50, annual: 40 },
      per: 'per month'
    },
    {
      name: 'Custom Integrations',
      description: 'Build custom integrations for your needs',
      price: { monthly: 200, annual: 160 },
      per: 'per integration'
    },
    {
      name: 'Priority Support',
      description: 'Get faster response times and dedicated support',
      price: { monthly: 100, annual: 80 },
      per: 'per month'
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliance, advanced threat protection, and custom security policies.'
    },
    {
      icon: Users,
      title: 'Unlimited Users',
      description: 'Scale your team without worrying about user limits or additional costs.'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment with 99.9% uptime SLA and disaster recovery.'
    },
    {
      icon: Building,
      title: 'Custom Solutions',
      description: 'Tailored AI models, custom integrations, and dedicated engineering support.'
    }
  ];

  const getCurrentPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'annual' ? plan.price.annual : plan.price.monthly;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (billingCycle === 'annual') {
      const monthlyCost = plan.price.monthly * 12;
      const annualCost = plan.price.annual * 12;
      return Math.round(((monthlyCost - annualCost) / monthlyCost) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple,
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your business needs. All plans include our core AI services 
              with flexible options to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-slate-600'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Save up to 20%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-slate-700/50'
                } hover:border-cyan-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${getCurrentPrice(plan)}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  
                  {billingCycle === 'annual' && (
                    <div className="text-green-400 text-sm mb-4">
                      Save {getSavings(plan)}% with annual billing
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full bg-gradient-to-r ${plan.ctaColor} text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Add-Ons & Extensions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Customize your plan with additional features and capabilities to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    ${billingCycle === 'annual' ? addon.price.annual : addon.price.monthly}
                  </div>
                  <div className="text-gray-400 text-sm">{addon.per}</div>
                </div>
                <button className="w-full mt-4 bg-slate-700/50 text-white py-2 rounded-lg font-medium hover:bg-slate-600 transition-all duration-300">
                  Add to Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced capabilities for large organizations with complex requirements and compliance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common questions about our pricing and plans.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
              },
              {
                question: 'Is there a free trial available?',
                answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start your trial.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers. All payments are processed securely.'
              },
              {
                question: 'Do you offer custom pricing for large teams?',
                answer: 'Yes, for teams of 100+ users or enterprise requirements, we offer custom pricing and dedicated account management.'
              },
              {
                question: 'What happens if I exceed my plan limits?',
                answer: 'We\'ll notify you before you reach your limits. You can either upgrade your plan or purchase additional add-ons as needed.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees for our standard plans. Enterprise customers may have custom implementation costs based on their specific requirements.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose the plan that fits your business needs and start transforming your operations with AI today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
