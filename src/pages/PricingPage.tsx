import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight,
  Brain,
  Cpu,
  Zap,
  Shield,
  Cloud,
  Rocket,
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        'AI-powered workflow automation',
        'Basic analytics dashboard',
        'Email support',
        '5 user licenses',
        'Standard integrations',
        'Basic security features'
      ],
      notIncluded: [
        'Advanced AI models',
        'Custom integrations',
        'Priority support',
        'Advanced security'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      icon: Zap
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      monthlyPrice: 799,
      yearlyPrice: 7999,
      features: [
        'Everything in Starter',
        'Advanced AI models & training',
        'Custom integrations',
        'Priority support (4hr response)',
        'Advanced analytics & reporting',
        '25 user licenses',
        'Enhanced security features',
        'API access'
      ],
      notIncluded: [
        'Enterprise security',
        'Custom AI model development',
        'Dedicated account manager'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
      icon: Brain
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 2499,
      yearlyPrice: 24999,
      features: [
        'Everything in Professional',
        'Unlimited user licenses',
        'Custom AI model development',
        'Enterprise-grade security',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom integrations',
        'Advanced compliance features',
        'On-premise deployment options'
      ],
      notIncluded: [],
      popular: false,
      color: 'from-green-500 to-emerald-500',
      icon: Rocket
    }
  ];

  const servicePricing = [
    {
      category: 'AI Services',
      services: [
        { name: 'AI Strategy Consulting', price: '$2,500 - $15,000', period: 'per project' },
        { name: 'Custom AI Model Development', price: '$5,000 - $50,000', period: 'per project' },
        { name: 'AI Integration Services', price: '$2,000 - $20,000', period: 'per project' },
        { name: 'AI Training & Workshops', price: '$500 - $3,000', period: 'per person' }
      ]
    },
    {
      category: 'IT Services',
      services: [
        { name: 'Cloud Migration', price: '$10,000 - $100,000', period: 'per project' },
        { name: 'Cybersecurity Assessment', price: '$5,000 - $25,000', period: 'per project' },
        { name: 'Infrastructure Setup', price: '$15,000 - $75,000', period: 'per project' },
        { name: 'DevOps Implementation', price: '$8,000 - $40,000', period: 'per project' }
      ]
    },
    {
      category: 'Micro SaaS Development',
      services: [
        { name: 'Platform Development', price: '$25,000 - $150,000', period: 'per platform' },
        { name: 'Custom Features', price: '$5,000 - $30,000', period: 'per feature' },
        { name: 'Integration Development', price: '$3,000 - $20,000', period: 'per integration' },
        { name: 'Maintenance & Support', price: '$1,000 - $5,000', period: 'per month' }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our clients see an average 300% return on investment within 12 months.',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Clock,
      title: 'Fast Implementation',
      description: 'Get up and running in weeks, not months, with our rapid deployment approach.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance built into every solution.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones with local language support.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const getCurrentPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: any) => {
    if (billingCycle === 'yearly') {
      const yearlyTotal = plan.monthlyPrice * 12;
      const yearlyPrice = plan.yearlyPrice;
      return yearlyTotal - yearlyPrice;
    }
    return 0;
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Technology Solution Costs</title>
        <meta name="description" content="Explore Zion Tech Group's transparent pricing for AI services, IT solutions, and micro SaaS platforms. Find the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services cost, IT services pricing, micro SaaS pricing, technology solutions cost" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All our pricing is transparent 
              with no hidden fees, ensuring you get maximum value for your investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-cyan-500/50 shadow-xl shadow-cyan-500/20'
                    : 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-cyan-500/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">${getCurrentPrice(plan).toLocaleString()}</span>
                    <span className="text-gray-400">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {getSavings(plan) > 0 && (
                    <div className="text-emerald-400 text-sm font-medium">
                      Save ${getSavings(plan).toLocaleString()} annually
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Not Included */}
                {plan.notIncluded.length > 0 && (
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Not Included:</h4>
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-white border border-gray-700 hover:border-cyan-500 hover:bg-gray-800/70'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Custom Service Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need a custom solution? Our expert team can develop tailored technology solutions 
              to meet your specific business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicePricing.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="p-4 bg-gray-800/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">{service.name}</h4>
                        <span className="text-cyan-400 font-bold">{service.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{service.period}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through cutting-edge technology, expert support, 
              and proven results that drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'Do you offer custom pricing for enterprise clients?',
                answer: 'Absolutely! We work with enterprise clients to create custom pricing plans that align with their specific needs and scale.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs depending on complexity.'
              },
              {
                question: 'What happens if I exceed my plan limits?',
                answer: 'We\'ll notify you before you reach your limits and work with you to upgrade your plan or adjust usage accordingly.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your business or contact us for a custom solution 
              that meets your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}