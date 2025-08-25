import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Headphones,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  MessageSquare,
  FileText,
  Settings,
  BarChart3,
  Database,
  Cpu,
  Brain,
  Rocket
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: {
        monthly: 99,
        annual: 79
      },
      features: [
        'Up to 5 AI-powered workflows',
        'Basic automation templates',
        'Email support',
        'Standard integrations',
        '1GB data storage',
        'Basic analytics dashboard',
        'Community forum access',
        'Monthly reports'
      ],
      limitations: [
        'Limited to 3 team members',
        'Basic customization options',
        'Standard response time (24h)'
      ],
      icon: Rocket,
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: {
        monthly: 299,
        annual: 239
      },
      features: [
        'Up to 25 AI-powered workflows',
        'Advanced automation templates',
        'Priority email support',
        'Premium integrations',
        '10GB data storage',
        'Advanced analytics dashboard',
        'Priority community access',
        'Weekly reports',
        'Custom workflow builder',
        'Team collaboration tools',
        'API access',
        'Advanced security features'
      ],
      limitations: [
        'Limited to 15 team members',
        'Advanced customization options',
        'Priority response time (8h)'
      ],
      icon: TrendingUp,
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: {
        monthly: 999,
        annual: 799
      },
      features: [
        'Unlimited AI-powered workflows',
        'Custom automation templates',
        '24/7 phone & email support',
        'Enterprise integrations',
        'Unlimited data storage',
        'Custom analytics dashboard',
        'Dedicated success manager',
        'Real-time reporting',
        'Advanced workflow builder',
        'Enterprise collaboration tools',
        'Full API access',
        'Enterprise security features',
        'Custom AI model training',
        'White-label solutions',
        'SLA guarantees',
        'On-premise deployment options'
      ],
      limitations: [
        'Unlimited team members',
        'Full customization options',
        'Immediate response time'
      ],
      icon: Award,
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model training for your specific use case',
      price: {
        monthly: 199,
        annual: 159
      },
      features: ['Custom model training', 'Domain-specific optimization', 'Performance monitoring', 'Model updates']
    },
    {
      name: 'Advanced Analytics',
      description: 'Deep insights and predictive analytics',
      price: {
        monthly: 149,
        annual: 119
      },
      features: ['Predictive analytics', 'Custom dashboards', 'Data export', 'Advanced reporting']
    },
    {
      name: 'Priority Support',
      description: '24/7 dedicated support with guaranteed response times',
      price: {
        monthly: 99,
        annual: 79
      },
      features: ['24/7 phone support', 'Guaranteed 2-hour response', 'Dedicated support team', 'Priority ticket handling']
    },
    {
      name: 'Custom Integrations',
      description: 'Bespoke integrations with your existing systems',
      price: {
        monthly: 299,
        annual: 239
      },
      features: ['Custom API development', 'System integration', 'Testing & validation', 'Ongoing maintenance']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Get started in minutes with our pre-built templates and intuitive interface'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2 compliance, encryption, and regular security audits'
    },
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with flexible plans that adapt to your needs'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones with dedicated success managers'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for annual plans. Enterprise customers can also pay via invoice.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact our sales team for details.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data is preserved for 30 days after cancellation. You can reactivate your account during this period to restore access.'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getAnnualSavings = (monthlyPrice: number, annualPrice: number) => {
    const savings = ((monthlyPrice * 12) - (annualPrice * 12)) / (monthlyPrice * 12) * 100;
    return Math.round(savings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI capabilities 
              with flexible options to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-4 text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-4 text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save up to 20%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const currentPrice = plan.price[billingCycle];
            const originalPrice = billingCycle === 'annual' ? plan.price.monthly * 12 : plan.price.monthly;
            const savings = billingCycle === 'annual' ? getAnnualSavings(plan.price.monthly, plan.price.annual) : 0;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                    : 'border-gray-700 hover:border-cyan-500'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{formatPrice(currentPrice)}</span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                  </div>
                  
                  {billingCycle === 'annual' && savings > 0 && (
                    <div className="text-green-400 text-sm mb-4">
                      Save {savings}% with annual billing
                    </div>
                  )}
                  
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-cyan-500'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-400 mt-6 mb-4">Limitations:</h4>
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0">•</div>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Enhance Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Add powerful features to any plan with our flexible add-ons. 
              Mix and match to create the perfect solution for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(addon.price[billingCycle])}
                    </div>
                    <div className="text-gray-400 text-sm">/month</div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-200">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing the best value and experience for our customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven automation. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
              Contact Sales
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Questions? Our team is here to help you choose the right plan.
          </p>
        </div>
      </div>
    </div>
  );
}