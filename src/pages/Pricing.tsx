import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 999, annual: 899 },
      features: [
        'AI-powered business intelligence dashboard',
        'Basic cybersecurity assessment',
        'Cloud infrastructure setup',
        '24/7 email support',
        'Monthly performance reports',
        'Basic compliance monitoring'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and mid-size companies',
      price: { monthly: 2499, annual: 2249 },
      features: [
        'Everything in Starter, plus:',
        'Advanced AI analytics and insights',
        'Comprehensive cybersecurity suite',
        'Custom cloud architecture',
        'Priority phone support',
        'Weekly performance reviews',
        'SOC2 compliance automation',
        'AI-powered asset management',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Most Popular',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 4999, annual: 4499 },
      features: [
        'Everything in Professional, plus:',
        'Custom AI model development',
        'Quantum computing solutions',
        'Advanced threat intelligence',
        'Dedicated account manager',
        'Daily performance monitoring',
        'Full compliance automation',
        'Custom AI autonomous systems',
        'White-label solutions',
        'API access and documentation'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Research Assistant',
      description: 'Dedicated AI research and development support',
      price: { monthly: 299, annual: 269 },
      features: ['Custom AI model training', 'Research paper analysis', 'Technology trend insights']
    },
    {
      name: 'Quantum Neural Networks',
      description: 'Access to quantum computing resources',
      price: { monthly: 599, annual: 539 },
      features: ['Quantum algorithm development', 'Quantum simulation tools', 'Expert consultation']
    },
    {
      name: 'SOC2 Compliance Automation',
      description: 'Automated compliance monitoring and reporting',
      price: { monthly: 399, annual: 359 },
      features: ['Continuous monitoring', 'Automated reporting', 'Compliance dashboard']
    },
    {
      name: '5G Enterprise Solutions',
      description: 'Next-generation network infrastructure',
      price: { monthly: 499, annual: 449 },
      features: ['5G network design', 'Edge computing setup', 'Performance optimization']
    }
  ];

  const savings = billingCycle === 'annual' ? 10 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6">
            Pricing Plans
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transparent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our core AI and technology solutions 
            with flexible billing options and enterprise-grade support.
          </p>
        </section>

        {/* Billing Toggle */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/50 p-2 rounded-xl border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
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
        </section>

        {/* Main Plans */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-purple-400/50 shadow-lg shadow-purple-500/25'
                    : 'border-white/10 hover:border-blue-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {plan.cta}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-5xl font-bold text-white">
                      {billingCycle === 'annual' ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-green-400 text-sm">Billed annually (${plan.price.annual * 12})</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/request-quote'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with specialized services and advanced solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                    <p className="text-gray-400 text-sm">{addon.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      ${billingCycle === 'annual' ? addon.price.annual : addon.price.monthly}
                    </div>
                    <div className="text-gray-400 text-sm">/month</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="block w-full text-center py-2 px-4 bg-blue-600/20 text-blue-400 rounded-lg font-medium hover:bg-blue-600/30 transition-all duration-300"
                >
                  Add to Plan
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing adjustments.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">What's included in the support?</h3>
              <p className="text-gray-400">
                All plans include email support. Professional and Enterprise plans include priority phone support 
                and dedicated account management.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-400">
                Absolutely! Our Enterprise plan includes custom development, and we can create tailored solutions 
                for any business need.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-400">
                No setup fees for any of our plans. We believe in transparent pricing with no hidden costs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-xl border border-blue-400/20">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can create a tailored package that perfectly fits your business requirements and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}