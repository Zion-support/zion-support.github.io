<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Building, 
  Rocket,
  Brain,
  Cpu,
  Lock,
  Cloud,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Globe,
  Headphones
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      price: {
        monthly: 999,
        annual: 899
      },
      features: [
        'AI-powered business insights',
        'Basic workflow automation',
        'Email support',
        '5 user licenses',
        'Standard security features',
        'Monthly reports',
        'Basic integrations (3)',
        'Training sessions (2)'
      ],
      limitations: [
        'Limited AI model access',
        'Basic analytics only',
        'No custom development',
        'Standard response time'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      icon: Building,
      price: {
        monthly: 2499,
        annual: 2249
      },
      features: [
        'Everything in Starter',
        'Advanced AI models',
        'Custom workflow automation',
        'Priority support',
        '15 user licenses',
        'Enhanced security features',
        'Real-time analytics',
        'Advanced integrations (10)',
        'Quarterly strategy sessions',
        'Custom dashboard',
        'API access',
        'Performance monitoring'
      ],
      limitations: [
        'Limited quantum computing access',
        'Standard compliance features',
        'No dedicated account manager'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      icon: Rocket,
      price: {
        monthly: 4999,
        annual: 4499
      },
      features: [
        'Everything in Professional',
        'Full AI model access',
        'Quantum computing integration',
        'Dedicated account manager',
        'Unlimited user licenses',
        'Enterprise security & compliance',
        'Custom AI model training',
        'Advanced analytics & ML',
        'White-label solutions',
        '24/7 priority support',
        'Custom integrations',
        'On-site training',
        'SLA guarantees',
        'Compliance certifications'
      ],
      limitations: [],
      color: 'from-orange-500 to-red-500',
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Cybersecurity Assessment',
        'Cloud Infrastructure Setup',
        '24/7 Support',
        'Monthly Reports',
        'Basic Training'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Everything in Starter',
        'Advanced AI & Machine Learning',
        'Quantum-Safe Security',
        'Custom Micro SAAS Solutions',
        'Priority Support',
        'Weekly Reports',
        'Advanced Training',
        'API Access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'Quantum Computing Solutions',
        'Full-Stack Development',
        'Dedicated Support Team',
        'Custom Integrations',
        'On-site Training',
        'SLA Guarantees'
      ],
      cta: 'Contact Sales',
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
      popular: false
    }
  ];

<<<<<<< HEAD
  const servicePackages = [
    {
      id: 'ai-autonomous',
      name: 'AI Autonomous Systems',
      description: 'Complete AI-powered business automation',
      icon: Brain,
      startingPrice: 15000,
      features: [
        'Custom AI model development',
        'Business process automation',
        'Predictive analytics',
        'Natural language processing',
        'Machine learning integration',
        'Continuous learning systems'
      ],
      deliveryTime: '8-12 weeks',
      support: '6 months included'
    },
    {
      id: 'quantum-solutions',
      name: 'Quantum Technology',
      description: 'Next-generation quantum computing solutions',
      icon: Cpu,
      startingPrice: 25000,
      features: [
        'Quantum algorithm development',
        'Hybrid quantum-classical systems',
        'Quantum cryptography',
        'Optimization algorithms',
        'Quantum machine learning',
        'Future-ready architecture'
      ],
      deliveryTime: '12-16 weeks',
      support: '12 months included'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security and compliance',
      icon: Shield,
      startingPrice: 12000,
      features: [
        'Threat detection & response',
        'Compliance management',
        'Security audits',
        'Penetration testing',
        'Incident response',
        'Security training'
      ],
      deliveryTime: '6-10 weeks',
      support: '6 months included'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration',
      description: 'Seamless cloud transformation',
      icon: Cloud,
      startingPrice: 8000,
      features: [
        'Cloud strategy planning',
        'Migration execution',
        'Performance optimization',
        'Cost optimization',
        'Security implementation',
        'Training & documentation'
      ],
      deliveryTime: '4-8 weeks',
      support: '3 months included'
    }
  ];

  const addOns = [
    {
      name: 'Priority Support',
      description: '24/7 dedicated support with 2-hour response time',
      price: 499,
      period: 'month',
      features: ['Dedicated support team', 'Priority ticket handling', 'SLA guarantees']
    },
    {
      name: 'Custom Development',
      description: 'Tailored software development for your specific needs',
      price: 150,
      period: 'hour',
      features: ['Custom features', 'Integration development', 'API development']
    },
    {
      name: 'Training & Certification',
      description: 'Comprehensive training for your team',
      price: 2999,
      period: 'session',
      features: ['On-site training', 'Certification program', 'Ongoing support']
    },
    {
      name: 'Compliance Services',
      description: 'SOC2, ISO 27001, and industry compliance',
      price: 8999,
      period: 'project',
      features: ['Compliance assessment', 'Implementation', 'Audit support']
    }
  ];

  const getCurrentPrice = (plan: typeof pricingPlans[0]) => {
    return billingCycle === 'annual' ? plan.price.annual : plan.price.monthly;
  };

  const getSavings = (plan: typeof pricingPlans[0]) => {
    if (billingCycle === 'annual') {
      return plan.price.monthly * 12 - plan.price.annual * 12;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI and 
              technology solutions with flexible pricing options.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 bg-gray-700 rounded-full transition-colors duration-300 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : ''
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                    Save up to 20%
                  </span>
                )}
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;
              const currentPrice = getCurrentPrice(plan);
              const savings = getSavings(plan);
              
              return (
                <div
                  key={plan.id}
                  className={`relative bg-gray-800/50 rounded-2xl border-2 p-8 transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-gray-700 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">${currentPrice}</span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'month, billed annually'}
                      </span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="text-green-400 text-sm mb-4">
                        Save ${savings} annually
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                          : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-white mb-4">What's included:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-white mt-6 mb-4">Limitations:</h4>
                        {plan.limitations.map((limitation, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                            <span className="text-gray-400">{limitation}</span>
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
      </section>

      {/* Service Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Custom Service Packages
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Need a tailored solution? Our custom service packages are designed to meet your 
              specific business requirements and technology goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {servicePackages.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">Starting at ${service.startingPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{service.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span className="text-green-400">{service.support}</span> support included
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enhance your experience with our premium add-on services designed to provide 
              additional value and support for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">${addon.price.toLocaleString()}</span>
                  <span className="text-gray-400 text-sm ml-1">/{addon.period}</span>
                </div>

                <div className="space-y-2 mb-4">
                  {addon.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 px-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-sm">
=======
  const addOns = [
    {
      name: 'AI Training & Workshops',
      price: '$299',
      period: '/session',
      description: 'Custom AI training for your team'
    },
    {
      name: 'Security Audit',
      price: '$1,499',
      period: '/audit',
      description: 'Comprehensive security assessment'
    },
    {
      name: 'Cloud Migration',
      price: '$4,999',
      period: '/project',
      description: 'Complete cloud infrastructure setup'
    },
    {
      name: 'Custom Development',
      price: '$150',
      period: '/hour',
      description: 'Tailored software development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core AI services with flexible options to scale as you grow.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-400">Monthly</span>
            <div className="relative">
              <div className="w-14 h-7 bg-cyan-500 rounded-full p-1">
                <div className="w-5 h-5 bg-white rounded-full transform translate-x-7 transition-transform duration-300"></div>
              </div>
            </div>
            <span className="text-cyan-400 font-medium">Annual (Save 20%)</span>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                    : 'border-gray-700 bg-gray-800/30 hover:border-cyan-400/50'
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
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600 hover:border-cyan-400'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with specialized services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-bold text-cyan-400">{addon.price}</span>
                  <span className="text-gray-400 ml-1">{addon.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                <button className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300">
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
                  Add Service
                </button>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
              Our team of experts is ready to help you choose the perfect solution and get you up and running quickly. 
              Get in touch today to start your digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 (302) 464-0950</p>
                <p className="text-sm text-zion-slate-light">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                <p className="text-sm text-zion-slate-light">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008</p>
                <p className="text-sm text-zion-slate-light">Middletown DE 19709</p>
=======
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom solutions and pricing that fits their specific requirements and budget."
              },
              {
                question: "What's included in the support?",
                answer: "All plans include 24/7 support. Professional and Enterprise plans include priority support with dedicated account managers."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for monthly plans. Annual plans include free setup and onboarding services."
              },
              {
                question: "Can I cancel my subscription?",
                answer: "Yes, you can cancel at any time with no penalties. We'll help you export your data and ensure a smooth transition."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a free consultation to discuss your needs and find the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>
=======
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already transforming their operations with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
    </div>
  );
}