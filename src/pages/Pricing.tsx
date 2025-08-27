import React from 'react'
import { SEO } from '../components/SEO'
import { CheckCircle2 } from 'lucide-react'

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$49/mo', includes: ['Email support', 'Basic analytics', 'Community access'] },
    { name: 'Growth', price: '$149/mo', includes: ['Priority support', 'Automation tools', 'API access'] },
    { name: 'Pro', price: '$399/mo', includes: ['SLA support', 'Advanced analytics', 'Custom integrations'] },
  ]
  return (
    <div className="min-h-screen bg-futuristic">
      <SEO title="Pricing - Zion Tech Group" description="Transparent pricing for AI, Micro SaaS, and IT services." canonical="https://ziontechgroup.com/pricing" />
      <section className="pt-28 pb-12">
        <div className="container-responsive">
          <h1 className="heading-responsive text-gradient">Pricing</h1>
          <p className="text-responsive text-zion-blue-light/80 max-w-2xl mt-4">
            Fair, transparent pricing for products and services. Scale as you grow.
          </p>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-responsive grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="card-futuristic">
              <div className="text-sm text-zion-blue-light/70">{p.name}</div>
              <div className="text-3xl font-bold text-white mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2">
                {p.includes.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-zion-blue-light/80">
                    <CheckCircle2 className="w-4 h-4 text-zion-cyan" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-20">
        <div className="container-responsive">
          <div className="card-futuristic">
            <h2 className="text-xl text-white font-semibold">Custom & Enterprise</h2>
            <p className="text-zion-blue-light/80 mt-2">We tailor solutions for regulated and high-scale environments.</p>
            <a href="https://ziontechgroup.com/contact" className="btn-futuristic mt-6 inline-block">Contact Sales</a>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Check, Zap, Shield, Cloud, Brain, Users, Globe, ArrowRight, Phone, Mail } from 'lucide-react';

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$2,500',
      period: 'per month',
      features: [
        'AI-powered chatbot implementation',
        'Basic cybersecurity assessment',
        'Cloud migration consultation',
        '5 hours of technical support',
        'Monthly performance reports',
        'Basic analytics dashboard'
      ],
      popular: false,
      color: 'from-zion-cyan to-zion-cyan-light',
      icon: Zap
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and enterprises',
      price: '$7,500',
      period: 'per month',
      features: [
        'Everything in Starter, plus:',
        'Custom AI model development',
        'Advanced cybersecurity implementation',
        'Full cloud infrastructure setup',
        'DevOps automation',
        '24/7 monitoring and support',
        'Advanced analytics and reporting',
        'Dedicated account manager'
      ],
      popular: true,
      color: 'from-zion-purple to-zion-purple-light',
      icon: Shield
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: '$15,000',
      period: 'per month',
      features: [
        'Everything in Professional, plus:',
        'Custom enterprise AI solutions',
        'Advanced threat detection systems',
        'Multi-cloud architecture',
        'Digital transformation consulting',
        'Custom software development',
        'Advanced data analytics',
        'Priority support and SLA guarantees',
        'On-site implementation support'
      ],
      popular: false,
      color: 'from-zion-blue to-zion-blue-light',
      icon: Globe
    }
  ];

  const servicePackages = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      packages: [
        { name: 'Basic AI Integration', price: '$5,000', duration: '2-4 weeks' },
        { name: 'Custom AI Development', price: '$25,000', duration: '8-12 weeks' },
        { name: 'Enterprise AI Platform', price: '$100,000', duration: '16-24 weeks' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      packages: [
        { name: 'Security Assessment', price: '$3,000', duration: '1-2 weeks' },
        { name: 'Security Implementation', price: '$15,000', duration: '4-8 weeks' },
        { name: 'Advanced Security Suite', price: '$50,000', duration: '12-16 weeks' }
      ]
    },
    {
      name: 'Cloud Infrastructure',
      icon: Cloud,
      packages: [
        { name: 'Cloud Migration', price: '$10,000', duration: '4-6 weeks' },
        { name: 'Cloud Architecture', price: '$30,000', duration: '8-12 weeks' },
        { name: 'Multi-Cloud Strategy', price: '$75,000', duration: '16-20 weeks' }
      ]
    }
  ];

  const addOnServices = [
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      price: '$2,000/month',
      icon: Users
    },
    {
      name: 'Custom Development',
      description: 'Tailored software solutions for your specific needs',
      price: '$150/hour',
      icon: Brain
    },
    {
      name: 'Training & Workshops',
      description: 'Team training and knowledge transfer sessions',
      price: '$500/day',
      icon: Users
    },
    {
      name: 'Performance Optimization',
      description: 'Continuous improvement and optimization services',
      price: '$1,500/month',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our core services with flexible options to scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Flexible pricing options designed to meet your business needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${
                tier.popular 
                  ? 'ring-2 ring-zion-purple shadow-2xl transform scale-105' 
                  : 'border border-zion-slate-light/20 shadow-lg'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-purple to-zion-purple-light text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zion-slate-dark mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-zion-slate-dark">{tier.price}</span>
                    <span className="text-zion-slate-light">/{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-zion-purple to-zion-purple-light text-white hover:shadow-lg'
                    : 'bg-zion-slate-light/10 text-zion-slate-dark hover:bg-zion-slate-light/20'
                }`}>
                  {tier.popular ? 'Get Started Now' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              Individual Service Packages
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Need specific services? Choose from our individual packages or combine them for a custom solution
            </p>
          </div>
          
          <div className="space-y-12">
            {servicePackages.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-zion-slate-dark">{service.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.packages.map((pkg, pkgIndex) => (
                    <div key={pkgIndex} className="border border-zion-slate-light/20 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-zion-slate-dark mb-2">{pkg.name}</h4>
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{pkg.price}</div>
                      <div className="text-sm text-zion-slate-light mb-4">Duration: {pkg.duration}</div>
                      <button className="w-full py-2 px-4 bg-zion-slate-light/10 text-zion-slate-dark rounded-lg hover:bg-zion-slate-light/20 transition-colors">
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Enhance your experience with our add-on services and specialized support options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="text-center p-6 border border-zion-slate-light/20 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">{service.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                <div className="text-xl font-bold text-zion-cyan mb-4">{service.price}</div>
                <button className="px-4 py-2 bg-zion-slate-light/10 text-zion-slate-dark rounded-lg hover:bg-zion-slate-light/20 transition-colors">
                  Add Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light">
              Get answers to common questions about our pricing and services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-zion-slate-light">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                Do you offer custom pricing for enterprise clients?
              </h3>
              <p className="text-zion-slate-light">
                Absolutely! We work with enterprise clients to create custom pricing packages that meet their specific needs and requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                What's included in the support hours?
              </h3>
              <p className="text-zion-slate-light">
                Support hours include technical assistance, troubleshooting, and guidance for all services included in your plan.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                Is there a setup fee?
              </h3>
              <p className="text-zion-slate-light">
                Setup fees vary by plan and complexity. Contact us for a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your needs and get a personalized quote for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
              Schedule Call
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white">sales@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
