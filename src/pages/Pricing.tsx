import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Users,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'AI-Powered Analytics Dashboard',
        'Basic Reporting & Insights',
        'Email Support',
        '5 User Accounts',
        'Basic Security Features',
        'Cloud Storage (10GB)'
      ],
      notIncluded: [
        'Advanced AI Models',
        'Custom Integrations',
        'Priority Support',
        'Advanced Security'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Everything in Starter',
        'Advanced AI Models & Training',
        'Custom Integrations',
        'Priority Support (4hr response)',
        '25 User Accounts',
        'Advanced Security & Compliance',
        'Cloud Storage (100GB)',
        'API Access',
        'Custom Branding'
      ],
      notIncluded: [
        'Enterprise Security',
        'Dedicated Account Manager',
        'Custom Development'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Everything in Professional',
        'Enterprise-Grade Security',
        'Dedicated Account Manager',
        'Custom Development',
        'Unlimited User Accounts',
        'Advanced Compliance (SOC2, HIPAA)',
        'Unlimited Cloud Storage',
        '24/7 Phone Support',
        'Custom AI Model Training',
        'On-Premise Deployment Options'
      ],
      notIncluded: [],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional Users',
      description: 'Add more team members to your plan',
      price: 15,
      per: 'user/month'
    },
    {
      name: 'Advanced AI Models',
      description: 'Access to premium AI models and training',
      price: 50,
      per: 'month'
    },
    {
      name: 'Custom Integrations',
      description: 'Connect with your existing tools and systems',
      price: 200,
      per: 'month'
    },
    {
      name: 'Priority Support',
      description: 'Get faster response times and dedicated support',
      price: 100,
      per: 'month'
    }
  ];

  const savings = billingCycle === 'yearly' ? 17 : 0;

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI-powered features 
              with transparent pricing and no hidden fees.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="bg-gray-800 p-1 rounded-lg flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}
              </button>
            </div>
          </motion.div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`relative ${
                  plan.popular ? 'scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-2 ${
                  plan.popular ? 'border-cyan-500' : 'border-gray-700'
                } hover:border-cyan-500/50 transition-all duration-300 h-full`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-400 mt-1">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Add-On Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Customize your plan with additional services to meet your specific business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400">
                  ${addon.price}
                  <span className="text-sm text-gray-400 font-normal">/{addon.per}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Common questions about our pricing and services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
              },
              {
                question: 'Is there a free trial available?',
                answer: 'Yes, we offer a 30-day free trial on all plans. No credit card required to start your trial.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely.'
              },
              {
                question: 'Do you offer custom pricing for enterprise?',
                answer: 'Yes, we offer custom pricing for enterprise customers with specific requirements. Contact our sales team for a personalized quote.'
              },
              {
                question: 'What happens if I exceed my plan limits?',
                answer: 'We\'ll notify you before you reach your limits and offer options to upgrade or purchase additional capacity as needed.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your 30-day free trial today. No credit card required. 
              Our team is here to help you choose the right plan for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
