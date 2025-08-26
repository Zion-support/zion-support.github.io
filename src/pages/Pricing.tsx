<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckIcon,
  XMarkIcon,
  StarIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UsersIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'annual' ? 299 : 349,
      originalPrice: billingCycle === 'annual' ? 359 : 419,
      features: [
        'AI-powered business insights',
        'Basic automation workflows',
        'Email support',
        '5 user licenses',
        'Standard integrations',
        'Basic reporting',
        'Cloud storage (50GB)',
        'Mobile app access'
      ],
      notIncluded: [
        'Advanced AI models',
        'Custom integrations',
        'Priority support',
        'Advanced analytics',
        'White-label solutions'
      ],
      icon: UsersIcon,
      popular: false,
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'annual' ? 799 : 899,
      originalPrice: billingCycle === 'annual' ? 959 : 1079,
      features: [
        'Everything in Starter',
        'Advanced AI models & training',
        'Custom automation workflows',
        'Priority support (4-hour response)',
        'Unlimited user licenses',
        'Advanced integrations',
        'Comprehensive analytics',
        'Cloud storage (500GB)',
        'API access',
        'Team collaboration tools',
        'Advanced security features',
        'Custom branding'
      ],
      notIncluded: [
        'Enterprise-grade security',
        'Custom AI model development',
        'Dedicated account manager',
        'On-premise deployment',
        'SLA guarantees'
      ],
      icon: RocketLaunchIcon,
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 'Custom',
      originalPrice: null,
      features: [
        'Everything in Professional',
        'Custom AI model development',
        'Enterprise-grade security',
        'Dedicated account manager',
        '24/7 priority support',
        'On-premise deployment options',
        'Custom integrations',
        'Advanced compliance features',
        'Unlimited cloud storage',
        'SLA guarantees',
        'White-label solutions',
        'Custom training programs'
      ],
      notIncluded: [],
      icon: SparklesIcon,
      popular: false,
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: billingCycle === 'annual' ? 299 : 349,
      period: 'per month',
      features: ['Custom model development', 'Training data preparation', 'Model optimization', 'Ongoing maintenance']
    },
    {
      name: 'Advanced Analytics',
      description: 'Enhanced reporting and business intelligence',
      price: billingCycle === 'annual' ? 199 : 249,
      period: 'per month',
      features: ['Custom dashboards', 'Advanced reporting', 'Data visualization', 'Predictive analytics']
    },
    {
      name: 'Priority Support',
      description: '24/7 dedicated support with SLA guarantees',
      price: billingCycle === 'annual' ? 399 : 449,
      period: 'per month',
      features: ['24/7 phone support', '1-hour response time', 'Dedicated support team', 'SLA guarantees']
    },
    {
      name: 'Custom Integrations',
      description: 'Bespoke integrations with your existing systems',
      price: billingCycle === 'annual' ? 599 : 699,
      period: 'per month',
      features: ['Custom API development', 'System integration', 'Data migration', 'Ongoing maintenance']
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Contact our sales team for details.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your current billing period.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support. Professional and Enterprise plans include priority support with faster response times and additional channels.'
    }
  ];
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-300">Enhance your plan with additional services tailored to your needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-white">${addon.price}</span>
                  <span className="text-gray-300 text-sm">/{addon.period}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm"
                >
                  Add Service
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing and plans</p>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the plan that's right for your business and start transforming your operations with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from '../data/ultimateMicroSaasServices2025';

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price');

  const categories = [
    'all',
    'AI & Analytics',
    'AI & Customer Experience',
    'AI & Supply Chain',
    'AI & FinTech',
    'AI & Healthcare',
    'AI & Education',
    'AI & Marketing',
    'AI & Human Resources',
    'AI & Legal Technology',
    'AI & Real Estate',
    'AI & Manufacturing',
    'AI & Energy',
    'AI & Transportation',
    'AI & Agriculture',
    'AI & Environment'
  ];

  const filteredServices = ULTIMATE_MICRO_SAAS_SERVICES_2025.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  const getPriceTier = (price: number) => {
    if (price < 1000) return 'starter';
    if (price < 3000) return 'professional';
    if (price < 5000) return 'enterprise';
    return 'premium';
  };

  const getPriceTierColor = (tier: string) => {
    switch (tier) {
      case 'starter': return 'text-green-400 bg-green-400/20';
      case 'professional': return 'text-blue-400 bg-blue-400/20';
      case 'enterprise': return 'text-purple-400 bg-purple-400/20';
      case 'premium': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriceTierLabel = (tier: string) => {
    switch (tier) {
      case 'starter': return 'Starter';
      case 'professional': return 'Professional';
      case 'enterprise': return 'Enterprise';
      case 'premium': return 'Premium';
      default: return 'Custom';
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Ultimate Micro SAAS Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our comprehensive portfolio of AI-powered micro SAAS services. Find the perfect solution for your business needs and budget." />
        <meta name="keywords" content="pricing, micro SAAS pricing, AI services pricing, business intelligence pricing, customer experience pricing, supply chain pricing, fintech pricing, healthcare pricing, education pricing, marketing pricing, HR pricing, legal tech pricing, real estate pricing, manufacturing pricing, energy pricing, transportation pricing, agriculture pricing, environmental monitoring pricing" />
        <meta property="og:title" content="Pricing - Ultimate Micro SAAS Services 2025 - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for our AI-powered micro SAAS services. Find the perfect solution for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect AI-powered micro SAAS solution for your business. 
              Our transparent pricing ensures you get maximum value for your investment.
            </p>
            
            {/* Pricing Tiers Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-2">Starter</div>
                <div className="text-sm text-gray-300">Under $1,000/month</div>
                <div className="text-xs text-gray-400 mt-1">Perfect for small businesses</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-blue-400 mb-2">Professional</div>
                <div className="text-sm text-gray-300">$1,000 - $3,000/month</div>
                <div className="text-xs text-gray-400 mt-1">Ideal for growing companies</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-purple-400 mb-2">Enterprise</div>
                <div className="text-sm text-gray-300">$3,000 - $5,000/month</div>
                <div className="text-xs text-gray-400 mt-1">Built for large organizations</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Premium</div>
                <div className="text-sm text-gray-300">$5,000+/month</div>
                <div className="text-xs text-gray-400 mt-1">Custom enterprise solutions</div>
              </div>
            </div>

            {/* Filters */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="price" className="bg-slate-800">Sort by Price</option>
                  <option value="name" className="bg-slate-800">Sort by Name</option>
                  <option value="category" className="bg-slate-800">Sort by Category</option>
                </select>
              </div>
              
              <div className="text-sm text-gray-400 mt-4">
                <p>Showing {filteredServices.length} services • {selectedCategory === 'all' ? 'All categories' : selectedCategory}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => {
                const priceTier = getPriceTier(service.price);
                const tierColor = getPriceTierColor(priceTier);
                const tierLabel = getPriceTierLabel(priceTier);
                
                return (
                  <div
                    key={service.id}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tierColor}`}>
                          {tierLabel}
                        </span>
                        <span className="text-xs font-semibold text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-white/5 rounded-lg">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-white mb-1">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">
                          per {service.pricingModel}
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Market Range:</span>
                          <span className="text-white">{service.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Expected ROI:</span>
                          <span className="text-yellow-400">{service.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Innovation Level:</span>
                          <span className="text-green-400">{service.innovationLevel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="line-clamp-2">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-gray-500 text-center">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="line-clamp-2">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery & Support */}
                    <div className="mb-6 p-4 bg-white/5 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-gray-400">Delivery:</span>
                          <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Support:</span>
                          <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                        Get Started
                      </button>
                      <div className="flex gap-2">
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="flex-1 bg-white/10 text-white text-center py-2 px-3 rounded-lg hover:bg-white/20 transition-colors text-sm"
                        >
                          Call Now
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}`}
                          className="flex-1 bg-white/10 text-white text-center py-2 px-3 rounded-lg hover:bg-white/20 transition-colors text-sm"
                        >
                          Email
                        </a>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 pt-4 border-t border-white/20 text-xs text-gray-400">
                      <div className="space-y-1">
                        <div>📞 {service.contactInfo.phone}</div>
                        <div>✉️ {service.contactInfo.email}</div>
                        <div>🌐 <a href={service.contactInfo.website} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                          {service.contactInfo.website}
                        </a></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing Comparison
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Compare our pricing tiers to find the perfect solution for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-4">Starter</div>
                <div className="text-4xl font-bold text-white mb-2">$999</div>
                <div className="text-sm text-gray-400 mb-6">per month</div>
                <ul className="text-left space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Basic features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Standard support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Up to 5 users
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Basic integrations
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Choose Starter
                </button>
              </div>

              <div className="text-center p-6 bg-white/10 rounded-xl border border-blue-400/40 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-4">Professional</div>
                <div className="text-4xl font-bold text-white mb-2">$2,499</div>
                <div className="text-sm text-gray-400 mb-6">per month</div>
                <ul className="text-left space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    All Starter features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Advanced features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Up to 25 users
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Choose Professional
                </button>
              </div>

              <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-purple-400 mb-4">Enterprise</div>
                <div className="text-4xl font-bold text-white mb-2">$3,999</div>
                <div className="text-sm text-gray-400 mb-6">per month</div>
                <ul className="text-left space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    All Professional features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Enterprise features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    24/7 support
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Choose Enterprise
                </button>
              </div>

              <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-4">Premium</div>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-sm text-gray-400 mb-6">pricing</div>
                <ul className="text-left space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    All Enterprise features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Custom development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    SLA guarantees
                  </li>
                </ul>
                <button className="w-full bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is ready to help you choose the perfect solution and get you up and running quickly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                📞 Call: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                ✉️ Email: kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
              >
                Schedule a Consultation →
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
            Contact Us for More Information
          </Link>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
        </div>
      </section>
    </div>
  );
};

export default $page;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Brain, Cloud, Users, MessageCircle, FileText, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and small teams getting started with AI tools",
      features: [
        "AI Content Generation (100 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (5 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/signup?plan=starter"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (500 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (20 hours/month)",
        "AI Translation (10 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (1000 calls/month)",
        "Team Collaboration Tools"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/signup?plan=professional"
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "AI Content Generation (2000 credits/month)",
        "AI Code Assistant (Advanced)",
        "AI Data Analytics Platform",
        "AI Threat Detection",
        "Multi-Cloud Management",
        "AI-Powered CRM",
        "Business Process Automation",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (100+ languages)",
        "24/7 Support",
        "Custom Integrations",
        "API Access (10000 calls/month)",
        "Advanced Security Features"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/signup?plan=business"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Everything in Business",
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Zero Trust Security Suite",
        "Edge Computing Solutions",
        "AI Market Research Platform",
        "AI Legal Document Review",
        "AI Financial Advisor",
        "AI Healthcare Assistant",
        "Dedicated Account Manager",
        "Custom Development",
        "On-Premise Deployment",
        "SLA Guarantees",
        "Compliance Certifications"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      services: [
        { name: "AI Content Generator Pro", price: "$29/month", features: ["Unlimited content generation", "50+ content types", "API access", "Advanced AI models"] },
        { name: "AI Image & Video Editor", price: "$19/month", features: ["Background removal", "Quality enhancement", "Style transfer", "Batch processing"] },
        { name: "AI Code Assistant", price: "$39/month", features: ["50+ languages", "IDE integrations", "Code review", "Debugging assistance"] },
        { name: "AI Data Analytics", price: "$199/month", features: ["Predictive analytics", "Real-time insights", "Custom dashboards", "Automated reporting"] }
      ]
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-8 w-8 text-zion-purple" />,
      services: [
        { name: "AI Threat Detection", price: "$99/month", features: ["24/7 monitoring", "Instant alerts", "Automated response", "Threat intelligence"] },
        { name: "Zero Trust Security", price: "$499/month", features: ["Identity verification", "Network segmentation", "Continuous monitoring", "Compliance tools"] },
        { name: "Penetration Testing", price: "$299/month", features: ["Monthly assessments", "Detailed reports", "Remediation guidance", "Compliance support"] }
      ]
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-8 w-8 text-zion-blue" />,
      services: [
        { name: "Multi-Cloud Management", price: "$79/month", features: ["Unified dashboard", "Cost optimization", "Security compliance", "Performance monitoring"] },
        { name: "DevOps Automation", price: "$49/month", features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Deployment automation"] },
        { name: "Edge Computing", price: "$149/month", features: ["Global edge network", "IoT integration", "Real-time processing", "Low latency"] }
      ]
    },
    {
      name: "Business Intelligence",
      icon: <Users className="h-8 w-8 text-zion-green" />,
      services: [
        { name: "AI-Powered CRM", price: "$39/user/month", features: ["Lead scoring", "Sales forecasting", "Automated follow-ups", "Predictive analytics"] },
        { name: "Business Automation", price: "$29/month", features: ["Workflow automation", "100+ integrations", "Document processing", "Process optimization"] },
        { name: "AI Market Research", price: "$199/month", features: ["Competitor analysis", "Trend prediction", "Real-time monitoring", "Market insights"] }
      ]
    },
    {
      name: "Communication & Collaboration",
      icon: <MessageCircle className="h-8 w-8 text-zion-orange" />,
      services: [
        { name: "AI Meeting Assistant", price: "$19/month", features: ["Real-time transcription", "Smart summaries", "Action tracking", "Automated follow-ups"] },
        { name: "Virtual Event Platform", price: "$99/month", features: ["Interactive features", "AI engagement", "Event analytics", "1000 attendees"] },
        { name: "AI Translation", price: "$29/month", features: ["100+ languages", "Cultural adaptation", "Real-time translation", "API access"] }
      ]
    },
    {
      name: "Specialized Tools",
      icon: <FileText className="h-8 w-8 text-zion-red" />,
      services: [
        { name: "AI Legal Review", price: "$149/month", features: ["Contract analysis", "Risk assessment", "Compliance monitoring", "Legal insights"] },
        { name: "AI Financial Advisor", price: "$39/month", features: ["Portfolio optimization", "Risk assessment", "Financial planning", "Investment advice"] },
        { name: "AI Healthcare Assistant", price: "$29/month", features: ["Health monitoring", "Symptom analysis", "Wellness coaching", "HIPAA compliant"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple-dark">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
            Transparent Pricing for Every Business
          </h1>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include a 14-day free trial, 
            no credit card required. Scale up or down anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-lg">
              <Zap className="h-5 w-5 mr-2" />
              14-Day Free Trial
            </Badge>
            <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30 px-4 py-2 text-lg">
              <Shield className="h-5 w-5 mr-2" />
              Enterprise Security
            </Badge>
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-lg">
              <Brain className="h-5 w-5 mr-2" />
              AI-Powered Tools
            </Badge>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-zion-purple shadow-2xl shadow-zion-purple/25 bg-gradient-to-br from-zion-purple/10 to-zion-purple/5' 
                    : 'border-zion-blue-light/30 hover:border-zion-purple/50 hover:shadow-xl hover:shadow-zion-purple/20'
                } bg-zion-slate-dark/80 backdrop-blur-sm`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-center py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 inline mr-2" />
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center ${tier.popular ? 'pt-12' : 'pt-6'}`}>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                    <span className="text-zion-cyan/70">{tier.period}</span>
                  </div>
                  <CardDescription className="text-zion-cyan/80">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-cyan/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple' 
                        : 'bg-gradient-to-r from-zion-blue to-zion-blue-dark hover:from-zion-cyan hover:to-zion-blue'
                    } text-white border-0 shadow-lg`}
                  >
                    <Link to={tier.link}>
                      {tier.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-lg text-zion-cyan/80 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered micro SAAS solutions, 
              each designed to address specific business needs and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30 hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-2 border-zion-purple/50 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-zion-cyan">{service.name}</h4>
                        <span className="text-zion-purple font-bold">{service.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-zion-cyan/70 flex items-center gap-2">
                            <Check className="h-3 w-3 text-zion-purple" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 backdrop-blur-sm border-zion-purple/30 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-white mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-lg text-zion-cyan/80">
                Join thousands of businesses already using Zion's AI-powered solutions to accelerate growth, 
                improve efficiency, and stay ahead of the competition.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">14 Days</div>
                  <div className="text-zion-cyan/70">Free Trial</div>
                </div>
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-cyan/70">Expert Support</div>
                </div>
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">99.9%</div>
                  <div className="text-zion-cyan/70">Uptime SLA</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white border-0 shadow-lg shadow-zion-purple/25">
                <Link to="/signup">
                  Start Free Trial
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/contact">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Sales
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">What's included in the free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  All plans include a 14-day free trial with full access to all features. 
                  No credit card required. You can upgrade, downgrade, or cancel anytime.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">Can I change my plan later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing adjustments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">Do you offer enterprise discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  Yes, we offer volume discounts for enterprise customers. Contact our sales team 
                  for custom pricing and dedicated support options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">What support options are available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  All plans include email support. Professional and Business plans include priority support, 
                  while Enterprise plans include 24/7 dedicated support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
