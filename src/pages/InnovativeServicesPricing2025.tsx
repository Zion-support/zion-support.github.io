import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Crown, 
  Sparkles,
  Brain,
  Cloud,
  Lock,
  Users,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSAASServices2025';

export default function InnovativeServicesPricing2025() {
  const [selectedPlan, setSelectedPlan] = useState('starter');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        'Community forum access'
      ],
      limitations: [
        'Limited AI processing',
        'Basic reporting',
        'Standard security',
        '5GB storage'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: Zap,
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Up to 25 users',
        'Advanced AI capabilities',
        'Priority email support',
        'Advanced integrations',
        'Comprehensive analytics',
        'Advanced security features',
        '25GB storage',
        'Custom workflows',
        'API access',
        'Training sessions'
      ],
      limitations: [
        'No dedicated support',
        'Limited customization',
        'Standard SLA'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Crown,
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 899, yearly: 8990 },
      features: [
        'Unlimited users',
        'Full AI capabilities',
        '24/7 phone support',
        'All integrations',
        'Advanced analytics & BI',
        'Enterprise security',
        'Unlimited storage',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees',
        'On-premise options',
        'Custom training programs'
      ],
      limitations: [
        'Annual commitment required',
        'Custom pricing for large deployments'
      ],
      color: 'from-orange-500 to-red-500',
      icon: Sparkles,
      popular: false
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Content Services',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Content'),
      icon: Brain
    },
    {
      name: 'AI & Customer Support',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Customer Support'),
      icon: Users
    },
    {
      name: 'FinTech Solutions',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'FinTech'),
      icon: DollarSign
    },
    {
      name: 'AI & Operations',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Operations'),
      icon: TrendingUp
    },
    {
      name: 'AI & HR',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & HR'),
      icon: Users
    },
    {
      name: 'AI & Legal Tech',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Legal Tech'),
      icon: Shield
    },
    {
      name: 'AI & Healthcare',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Healthcare'),
      icon: Shield
    },
    {
      name: 'AI & Marketing',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Marketing'),
      icon: TrendingUp
    }
  ];

  const getCurrentPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;
  };

  const getSavings = (plan: any) => {
    if (billingCycle === 'yearly') {
      return plan.price.monthly * 12 - plan.price.yearly;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Pricing 2025 - Zion Tech Group"
        description="Comprehensive pricing for our cutting-edge AI-powered micro SAAS solutions. Choose from Starter, Professional, or Enterprise plans with flexible billing options."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
              <br />
              <span className="text-white">for Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs with our flexible pricing options and comprehensive feature sets
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-white/20 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-cyan-400">Save up to 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${getCurrentPrice(plan).toLocaleString()}</span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                    <div className="text-cyan-400 text-sm mb-4">
                      Save ${getSavings(plan).toLocaleString()} annually
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-white mb-4">Limitations:</h4>
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Category Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Individual Service Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Choose specific services or bundle them for maximum value
            </p>
          </div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={service.id}
                      className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-white text-sm leading-tight">
                          {service.title}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-white">{service.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                        {service.description.substring(0, 100)}...
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">Price</span>
                          <span className="text-sm font-semibold text-white">
                            ${service.price.toLocaleString()}/month
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">Market Price</span>
                          <span className="text-xs text-gray-300">{service.marketPrice}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">AI Score</span>
                          <span className="text-xs text-cyan-400">{service.aiScore}%</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <a
                          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-3 rounded-lg text-xs font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                        >
                          Get Quote
                        </a>
                        <a
                          href={`/services/${service.id}`}
                          className="px-3 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors text-xs"
                          title="Learn More"
                        >
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Plan Comparison
            </h2>
            <p className="text-xl text-gray-400">
              Detailed feature comparison across all plans
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.id} className="text-center p-6">
                        <div className="text-white font-semibold mb-2">{plan.name}</div>
                        <div className="text-2xl font-bold text-cyan-400">
                          ${getCurrentPrice(plan).toLocaleString()}
                        </div>
                        <div className="text-gray-400 text-sm">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-6 text-white font-medium">Users</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="text-center p-6 text-gray-300">
                        {plan.id === 'starter' ? 'Up to 5' : plan.id === 'professional' ? 'Up to 25' : 'Unlimited'}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 text-white font-medium">AI Processing</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="text-center p-6 text-gray-300">
                        {plan.id === 'starter' ? 'Basic' : plan.id === 'professional' ? 'Advanced' : 'Full'}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 text-white font-medium">Storage</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="text-center p-6 text-gray-300">
                        {plan.id === 'starter' ? '5GB' : plan.id === 'professional' ? '25GB' : 'Unlimited'}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 text-white font-medium">Support</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="text-center p-6 text-gray-300">
                        {plan.id === 'starter' ? 'Email' : plan.id === 'professional' ? 'Priority Email' : '24/7 Phone'}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 text-white font-medium">Integrations</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="text-center p-6 text-gray-300">
                        {plan.id === 'starter' ? 'Standard' : plan.id === 'professional' ? 'Advanced' : 'All'}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 text-white font-medium">Security</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="text-center p-6 text-gray-300">
                        {plan.id === 'starter' ? 'Basic' : plan.id === 'professional' ? 'Advanced' : 'Enterprise'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 text-white font-medium">SLA</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="text-center p-6 text-gray-300">
                        {plan.id === 'starter' ? 'N/A' : plan.id === 'professional' ? 'Standard' : 'Guaranteed'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I switch between plans?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              },
              {
                question: "Is there a free trial available?",
                answer: "We offer a 14-day free trial for all plans, no credit card required. Experience the full power of our AI solutions before committing."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also arrange custom payment terms."
              },
              {
                question: "Do you offer custom pricing for large deployments?",
                answer: "Absolutely! For enterprise customers with 100+ users or specific requirements, we offer custom pricing and dedicated solutions."
              },
              {
                question: "What's included in the setup and onboarding?",
                answer: "All plans include basic setup assistance. Professional and Enterprise plans include comprehensive onboarding, training sessions, and dedicated support."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team to discuss your specific needs and get a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg"
              >
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-200 text-lg"
              >
                Call Sales Team
              </a>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📞 Phone: +1 (302) 464-0950</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}