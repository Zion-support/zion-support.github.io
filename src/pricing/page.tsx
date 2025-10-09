'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, Star, Zap, Shield, Users, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const microSaasPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Up to 5 AI tools',
        'Basic analytics',
        'Email support',
        'Standard templates',
        '1 user account',
        'Basic integrations'
      ],
      limitations: [
        'Limited AI requests',
        'No custom branding',
        'Basic reporting only'
      ],
      popular: false,
      color: 'cyan'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Up to 20 AI tools',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'Up to 10 user accounts',
        'Advanced integrations',
        'API access',
        'Custom workflows',
        'A/B testing'
      ],
      limitations: [
        'No white-labeling',
        'Limited custom development'
      ],
      popular: true,
      color: 'purple'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete AI solution for large organizations',
      price: { monthly: 999, yearly: 9990 },
      features: [
        'Unlimited AI tools',
        'Real-time analytics',
        '24/7 dedicated support',
        'Fully customizable',
        'Unlimited user accounts',
        'All integrations',
        'Full API access',
        'Custom development',
        'White-labeling',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom training'
      ],
      limitations: [],
      popular: false,
      color: 'pink'
    }
  ];

  const aiServicesPlans = [
    {
      id: 'ai-basic',
      name: 'AI Development',
      description: 'Custom AI solutions for specific business needs',
      price: { monthly: 2500, yearly: 25000 },
      features: [
        'Custom AI model development',
        'Data analysis and preparation',
        'Model training and optimization',
        'Integration with existing systems',
        'Performance monitoring',
        '3 months support included'
      ],
      popular: false,
      color: 'blue'
    },
    {
      id: 'ai-advanced',
      name: 'AI Transformation',
      description: 'Complete AI transformation for enterprise operations',
      price: { monthly: 5000, yearly: 50000 },
      features: [
        'End-to-end AI implementation',
        'Multiple AI models and systems',
        'Advanced analytics and reporting',
        'Custom integrations',
        'Staff training and onboarding',
        '6 months support included',
        'Dedicated AI specialist',
        'Performance optimization'
      ],
      popular: true,
      color: 'purple'
    },
    {
      id: 'ai-premium',
      name: 'AI Innovation',
      description: 'Cutting-edge AI solutions with ongoing innovation',
      price: { monthly: 10000, yearly: 100000 },
      features: [
        'Latest AI technologies',
        'Quantum computing integration',
        'Autonomous systems development',
        'Research and development',
        '12 months support included',
        'Dedicated AI team',
        'Continuous innovation',
        'Exclusive access to new features'
      ],
      popular: false,
      color: 'pink'
    }
  ];

  const itServicesPlans = [
    {
      id: 'it-basic',
      name: 'IT Support',
      description: 'Comprehensive IT support and maintenance',
      price: { monthly: 1500, yearly: 15000 },
      features: [
        '24/7 technical support',
        'System monitoring',
        'Security updates',
        'Backup and recovery',
        'Performance optimization',
        'Monthly reports'
      ],
      popular: false,
      color: 'green'
    },
    {
      id: 'it-advanced',
      name: 'IT Management',
      description: 'Complete IT infrastructure management',
      price: { monthly: 3500, yearly: 35000 },
      features: [
        'Full IT infrastructure management',
        'Cloud migration and optimization',
        'Security audits and compliance',
        'Disaster recovery planning',
        'Staff training',
        'Quarterly reviews',
        'Dedicated IT manager'
      ],
      popular: true,
      color: 'blue'
    },
    {
      id: 'it-premium',
      name: 'IT Transformation',
      description: 'Complete digital transformation services',
      price: { monthly: 7500, yearly: 75000 },
      features: [
        'Complete digital transformation',
        'Legacy system modernization',
        'Advanced security implementation',
        'AI integration',
        'Custom development',
        'Executive consulting',
        'Dedicated transformation team'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;
  };

  const getSavings = (plan: any) => {
    const monthlyTotal = plan.price.monthly * 12;
    const yearlyPrice = plan.price.yearly;
    return monthlyTotal - yearlyPrice;
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500 to-cyan-600 border-cyan-400 text-cyan-400',
      purple: 'from-purple-500 to-purple-600 border-purple-400 text-purple-400',
      pink: 'from-pink-500 to-pink-600 border-pink-400 text-pink-400',
      blue: 'from-blue-500 to-blue-600 border-blue-400 text-blue-400',
      green: 'from-green-500 to-green-600 border-green-400 text-green-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <>
      <SEOOptimizer
        title="AI & IT Services Pricing - Zion Tech Group"
        description="Transparent pricing for AI and IT services. Choose from flexible plans designed for businesses of all sizes. Start your AI transformation today."
        keywords={['AI pricing', 'IT services pricing', 'AI solutions cost', 'enterprise AI pricing', 'AI development cost']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our commitment to delivering exceptional results.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save up to 20%
                </span>
              )}
            </div>
          </div>

          {/* Micro SAAS Plans */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Affordable AI-powered tools designed for modern businesses
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {microSaasPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${getPrice(plan).toLocaleString()}</span>
                      <span className="text-gray-400 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">
                        Save ${getSavings(plan).toLocaleString()}/year
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700'
                        : `bg-gradient-to-r ${getColorClasses(plan.color).split(' ')[0]} ${getColorClasses(plan.color).split(' ')[1]} text-white hover:opacity-90`
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Plans */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Custom AI solutions tailored to your business requirements
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aiServicesPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${getPrice(plan).toLocaleString()}</span>
                      <span className="text-gray-400 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">
                        Save ${getSavings(plan).toLocaleString()}/year
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'
                        : `bg-gradient-to-r ${getColorClasses(plan.color).split(' ')[0]} ${getColorClasses(plan.color).split(' ')[1]} text-white hover:opacity-90`
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Plans */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive IT solutions for modern enterprise infrastructure
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {itServicesPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-blue-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${getPrice(plan).toLocaleString()}</span>
                      <span className="text-gray-400 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">
                        Save ${getSavings(plan).toLocaleString()}/year
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                        : `bg-gradient-to-r ${getColorClasses(plan.color).split(' ')[0]} ${getColorClasses(plan.color).split(' ')[1]} text-white hover:opacity-90`
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Custom Solutions */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We understand that every business is unique. Let us create a tailored solution that perfectly fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="cyber-button px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Custom Quote
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Pricing FAQ
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "Can I change my plan later?",
                    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
                  },
                  {
                    question: "Do you offer discounts for annual billing?",
                    answer: "Yes! Annual billing saves you up to 20% compared to monthly billing. The discount is automatically applied when you choose yearly billing."
                  },
                  {
                    question: "What's included in support?",
                    answer: "All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes 24/7 dedicated support."
                  },
                  {
                    question: "Can I cancel anytime?",
                    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
                  },
                  {
                    question: "Do you offer custom pricing for large organizations?",
                    answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients."
                  }
                ].map((faq, index) => (
                  <div key={index} className="cyber-card p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;