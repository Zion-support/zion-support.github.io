import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Rocket,
  Users,
  Building,
  Globe,
  Cpu,
  Brain,
  Lock,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 299, annual: 2999 },
      features: [
        'AI-Powered Business Analysis',
        'Basic Process Automation',
        'Cloud Migration Support',
        'Email & Phone Support',
        'Monthly Progress Reports',
        'Basic Security Assessment'
      ],
      notIncluded: [
        'Advanced AI Models',
        'Custom Development',
        'Priority Support',
        'Dedicated Account Manager'
      ],
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      cta: 'Get Started',
      ctaLink: '/request-quote'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and mid-size companies',
      price: { monthly: 799, annual: 7999 },
      features: [
        'Everything in Starter, plus:',
        'Advanced AI & Machine Learning',
        'Custom Solution Development',
        '24/7 Priority Support',
        'Dedicated Project Manager',
        'Advanced Analytics Dashboard',
        'Security & Compliance Tools',
        'API Integration Services',
        'Performance Optimization',
        'Monthly Strategy Sessions'
      ],
      notIncluded: [
        'Enterprise Security Features',
        'Custom AI Model Training',
        'Global Infrastructure Setup'
      ],
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      cta: 'Get Started',
      ctaLink: '/request-quote'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: { monthly: 2499, annual: 24999 },
      features: [
        'Everything in Professional, plus:',
        'Custom AI Model Development',
        'Enterprise Security & Compliance',
        'Global Infrastructure Setup',
        'Dedicated Support Team',
        'Custom Integration Development',
        'Advanced Analytics & Reporting',
        'Performance Monitoring',
        'Disaster Recovery Planning',
        'Quarterly Business Reviews',
        'Executive Dashboard',
        'Custom Training Programs'
      ],
      notIncluded: [],
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ];

  const microSaaSPackages = [
    {
      name: 'Basic Package',
      price: 99,
      description: 'Essential AI automation tools',
      features: [
        'AI Content Generation',
        'Basic Workflow Automation',
        'Email Support',
        'Standard Templates',
        'Basic Analytics'
      ],
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Pro Package',
      price: 299,
      description: 'Advanced automation with customization',
      features: [
        'Everything in Basic, plus:',
        'Custom Workflow Creation',
        'Advanced AI Models',
        'Priority Support',
        'Custom Templates',
        'Advanced Analytics',
        'API Access',
        'White-label Options'
      ],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Enterprise Package',
      price: 999,
      description: 'Full customization and dedicated support',
      features: [
        'Everything in Pro, plus:',
        'Custom AI Model Training',
        'Dedicated Support Team',
        'Custom Integrations',
        'Advanced Security Features',
        'SLA Guarantees',
        'Custom Development',
        'On-premise Options'
      ],
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: 'From $2,500',
      icon: Brain,
      features: ['Custom Data Training', 'Model Optimization', 'Performance Tuning']
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: 'From $1,500',
      icon: Shield,
      features: ['Vulnerability Assessment', 'Compliance Review', 'Security Recommendations']
    },
    {
      name: 'Performance Optimization',
      description: 'System performance analysis and optimization',
      price: 'From $1,000',
      icon: TrendingUp,
      features: ['Performance Analysis', 'Optimization Implementation', 'Monitoring Setup']
    },
    {
      name: 'Custom Development',
      description: 'Tailored software development services',
      price: 'From $150/hour',
      icon: Cpu,
      features: ['Custom Features', 'Integration Development', 'API Development']
    }
  ];

  const savings = {
    monthly: 0,
    annual: 20
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI-powered technology solutions. Choose from flexible plans designed for businesses of all sizes."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core AI-powered 
              solutions with transparent pricing and no hidden fees.
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
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save {savings.annual}%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, we have the perfect solution to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 ring-2 ring-cyan-400/50' 
                    : 'bg-slate-800/50 hover:bg-slate-800/70'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-white mb-2">
                    ${billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.annual / 12)}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-gray-400">
                      Billed annually (${plan.price.annual.toLocaleString()})
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.notIncluded.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Not Included:</h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-400">
                          <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  to={plan.ctaLink}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use AI automation tools with transparent, predictable pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaaSPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-slate-800/70 rounded-2xl p-6 hover:bg-slate-800/90 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-white">
                    ${pkg.price}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services/micro-saas"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom solutions and specialized services to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-3">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-800/70 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>

            <div className="bg-slate-800/70 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Do you offer custom pricing for enterprise clients?
              </h3>
              <p className="text-gray-300">
                Absolutely! We work with enterprise clients to create custom solutions and pricing that meet their specific requirements.
              </p>
            </div>

            <div className="bg-slate-800/70 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                What's included in the support packages?
              </h3>
              <p className="text-gray-300">
                Support includes email, phone, and chat support during business hours. Enterprise plans include 24/7 priority support and dedicated account managers.
              </p>
            </div>

            <div className="bg-slate-800/70 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Is there a setup fee?
              </h3>
              <p className="text-gray-300">
                No setup fees for standard plans. Custom enterprise solutions may include one-time setup costs depending on complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your needs and find the perfect solution for your business. 
            Our team is ready to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Your Quote
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
