import React, { useState } from 'react';
import { Check, X, Star, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 1500,
      yearlyPrice: 15000,
      features: [
        'Basic AI consultation',
        'Up to 5 team members',
        'Email support',
        'Basic analytics dashboard',
        'Standard security features',
        'Monthly progress reports',
      ],
      limitations: [
        'Limited AI model access',
        'Basic customization',
        'Standard response time',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      monthlyPrice: 3500,
      yearlyPrice: 35000,
      features: [
        'Advanced AI solutions',
        'Up to 25 team members',
        'Priority support',
        'Advanced analytics & reporting',
        'Enhanced security features',
        'Weekly progress reports',
        'Custom AI model training',
        'API access',
        'Integration support',
      ],
      limitations: [
        'Limited to 2 custom models',
        'Standard SLA',
      ],
      popular: true,
      cta: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      monthlyPrice: 7500,
      yearlyPrice: 75000,
      features: [
        'Full AI transformation suite',
        'Unlimited team members',
        '24/7 dedicated support',
        'Real-time analytics & monitoring',
        'Enterprise-grade security',
        'Daily progress reports',
        'Unlimited custom AI models',
        'Full API access',
        'White-label solutions',
        'Dedicated account manager',
        'Custom integrations',
        'On-site training',
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      description: 'Extra custom AI models for specialized use cases',
      price: 500,
      period: 'per model/month',
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support with guaranteed response times',
      price: 200,
      period: 'per month',
    },
    {
      name: 'Custom Integrations',
      description: 'Bespoke integrations with your existing systems',
      price: 1000,
      period: 'per integration',
    },
    {
      name: 'Training & Workshops',
      description: 'On-site training for your team on AI tools and best practices',
      price: 2500,
      period: 'per day',
    },
  ];

  const faqs = [
    {
      question: 'What\'s included in the free consultation?',
      answer: 'Our free consultation includes a comprehensive analysis of your current systems, identification of AI opportunities, and a detailed roadmap for implementation. This typically takes 2-3 hours and provides you with actionable insights even if you don\'t proceed with our services.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. We\'ll prorate any changes and ensure a smooth transition without disrupting your ongoing projects.',
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Absolutely! For enterprise clients with unique requirements, we offer custom pricing and tailored solutions. Contact our sales team to discuss your specific needs.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including email support for all plans, priority support for Professional and Enterprise plans, and 24/7 dedicated support for Enterprise clients. We also offer training, documentation, and regular check-ins.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on the complexity of your project. Simple AI integrations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during the consultation phase.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied with our work within the first 30 days, we\'ll provide a full refund.',
    },
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI solutions and digital transformation services. Choose the plan that fits your business needs. Starting from $1,500/month."
        keywords={['pricing', 'AI solutions pricing', 'digital transformation cost', 'enterprise AI pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your business needs. All plans include our core AI solutions 
                with the flexibility to scale as you grow.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Yearly
                </span>
                {billingCycle === 'yearly' && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Save 20%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                    plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {plan.cta}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.yearlyPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 font-medium">
                        Save ${((plan.monthlyPrice * 12) - plan.yearlyPrice).toLocaleString()} per year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-start">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Add-ons & Extensions
              </h2>
              <p className="text-xl text-gray-600">
                Enhance your plan with additional services and features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {addOn.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {addOn.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    ${addOn.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {addOn.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our pricing and services
              </p>
            </div>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already transformed their operations with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Consultation
              </a>
              <a
                href="tel:+1-302-464-0950"
                className="flex items-center justify-center space-x-2 bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call +1-302-464-0950</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;