'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSAASPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 29,
      yearlyPrice: 290,
      originalYearlyPrice: 348,
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        '5GB storage',
        'Basic analytics',
        'Mobile app access'
      ],
      limitations: [
        'Limited integrations',
        'Basic reporting'
      ],
      popular: false,
      category: 'Micro SAAS'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 59,
      yearlyPrice: 590,
      originalYearlyPrice: 708,
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        '50GB storage',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Team collaboration'
      ],
      limitations: [],
      popular: true,
      category: 'Micro SAAS'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 99,
      yearlyPrice: 990,
      originalYearlyPrice: 1188,
      features: [
        'Unlimited users',
        'Full AI capabilities',
        '24/7 phone support',
        'Unlimited storage',
        'Custom analytics',
        'Full API access',
        'White-label options',
        'Dedicated account manager',
        'Custom training'
      ],
      limitations: [],
      popular: false,
      category: 'Micro SAAS'
    }
  ];

  const aiServicePlans = [
    {
      name: 'AI Analytics',
      description: 'AI-powered data analytics and insights',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      originalYearlyPrice: 1788,
      features: [
        'Real-time data processing',
        'Machine learning models',
        'Predictive analytics',
        'Custom dashboards',
        'API integrations',
        'Expert consultation'
      ],
      category: 'AI Services'
    },
    {
      name: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      originalYearlyPrice: 3588,
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Incident response',
        'Compliance monitoring',
        '24/7 monitoring',
        'Security team support'
      ],
      category: 'AI Services'
    },
    {
      name: 'AI Marketing',
      description: 'AI-driven marketing automation',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      originalYearlyPrice: 2388,
      features: [
        'Campaign automation',
        'Personalization engine',
        'A/B testing',
        'Customer segmentation',
        'Performance analytics',
        'ROI tracking'
      ],
      category: 'AI Services'
    }
  ];

  const itServicePlans = [
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      originalYearlyPrice: 2388,
      features: [
        'AWS/Azure/GCP setup',
        'Auto-scaling',
        'Backup solutions',
        '24/7 monitoring',
        'Security implementation',
        'Migration services'
      ],
      category: 'IT Services'
    },
    {
      name: 'Network Security',
      description: 'Comprehensive network security',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      originalYearlyPrice: 3588,
      features: [
        'Firewall management',
        'VPN setup',
        'Intrusion detection',
        'Security audits',
        'Threat monitoring',
        'Incident response'
      ],
      category: 'IT Services'
    },
    {
      name: 'Database Management',
      description: 'Expert database services',
      monthlyPrice: 249,
      yearlyPrice: 2490,
      originalYearlyPrice: 2988,
      features: [
        'Database design',
        'Performance optimization',
        'Backup strategies',
        'Migration services',
        'Security implementation',
        'Monitoring & maintenance'
      ],
      category: 'IT Services'
    }
  ];

  const allPlans = [...microSAASPlans, ...aiServicePlans, ...itServicePlans];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getOriginalPrice = (plan: any) => {
    return billingCycle === 'monthly' ? null : plan.originalYearlyPrice;
  };

  const getSavings = (plan: any) => {
    if (billingCycle === 'yearly' && plan.originalYearlyPrice) {
      return Math.round(((plan.originalYearlyPrice - plan.yearlyPrice) / plan.originalYearlyPrice) * 100);
    }
    return 0;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing - Zion Tech Group | Affordable AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI services, micro SAAS solutions, and IT services. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, micro SAAS pricing, IT services pricing, affordable solutions" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI services, micro SAAS solutions, and IT services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. No hidden fees, no surprises. 
              Start with a free trial and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Save up to 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable micro SAAS solutions designed for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSAASPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white border-2 rounded-xl p-8 ${
                plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">${getPrice(plan)}</span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {getOriginalPrice(plan) && (
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg text-gray-500 line-through">
                        ${getOriginalPrice(plan)}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Save {getSavings(plan)}%
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <li key={limitationIndex} className="flex items-center">
                      <XMarkIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI solutions to transform your business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicePlans.map((plan, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-purple-600">${getPrice(plan)}</span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {getOriginalPrice(plan) && (
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg text-gray-500 line-through">
                        ${getOriginalPrice(plan)}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Save {getSavings(plan)}%
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicePlans.map((plan, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-green-600">${getPrice(plan)}</span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {getOriginalPrice(plan) && (
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg text-gray-500 line-through">
                        ${getOriginalPrice(plan)}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Save {getSavings(plan)}%
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes, we offer a 14-day free trial for all our micro SAAS services. No credit card required to start.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h3>
              <p className="text-gray-600">Yes, we offer custom pricing for enterprise customers with specific requirements. Contact us to discuss your needs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in support?</h3>
              <p className="text-gray-600">Support includes email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise plans.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose your plan and start transforming your business today. 
            Contact us for a free consultation to find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PricingPage;