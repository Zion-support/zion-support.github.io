import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '@/components/SEO';
import { Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart,
  Users,
  Building,
  Rocket,
  Brain,
  Cloud,
  Lock
 } from 'lucide-react';

export default function Pricing(...args[]):  {
  const [billingCycle, setBillingCycle] = useState<any>('annual');

  const pricingTiers = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 299, annual: 249 },
      description: 'Perfect for small businesses getting started with technology',
      features[
        'AI Business Intelligence Basic',
        'Cloud Infrastructure Setup',
        'Basic Security Monitoring',
        'Email Support',
        'Monthly Reports',
        'Up to 5 Users'
      ],
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      icon: Star,
      price: { monthly: 799, annual: 649 },
      description: 'Ideal for growing companies with advanced technology needs',
      features[
        'Everything in Starter',
        'Advanced AI Analytics',
        'Full Cloud DevOps Suite',
        '24/7 Security Monitoring',
        'Priority Support',
        'Up to 25 Users',
        'Custom Integrations',
        'Quarterly Strategy Sessions'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 1999, annual: 1599 },
      description: 'Comprehensive solutions for large enterprises',
      features[
        'Everything in Professional',
        'Custom AI Solutions',
        'Full Digital Transformation',
        'Zero Trust Security',
        'Dedicated Account Manager',
        'Unlimited Users',
        'Onsite Support',
        'Custom SLA Agreements'
      ],
      color: 'from-amber-500 to-orange-600',
      popular: false
    };
  ];

<<<<<<< HEAD
  const addOnServices = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: { monthly: 500, annual: 4500 },
      icon: Brain
    },
    {
      name: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration',
      price: { monthly: 800, annual: 7200 },
      icon: Cloud
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment',
      price: { monthly: 300, annual: 2700 },
      icon: Shield
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support',
      price: { monthly: 400, annual: 3600 },
      icon: Clock
    };
  ];

  const savings = {
  monthly: 0,
  annual: 20
  ;
};

export default function Pricing() {
  return (
    <div className = "min-h-screen bg-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's AI, cloud, and technology services. Choose the plan that fits your business needs."
        keywords="pricing, AI services pricing, cloud solutions cost, technology consulting rates, Zion Tech Group"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial = {
  { opacity: 0,
  y: 30 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial = {
  { opacity: 0,
  y: 30 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition = {
  { duration: 0.8,
  delay: 0.2 
}}
          >
            Choose the perfect plan for your business technology needs
          </motion.p>
          <motion.div 
            className="text-slate-400"
            initial = {
  { opacity: 0,
  y: 30 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition = {
  { duration: 0.8,
  delay: 0.4 
}}
          >
            No hidden fees • Cancel time • 30-day money-back guarantee
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex justify-center"
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
=======
const servicePricing = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    services: [
      { name: 'AI Workflow Orchestrator', price: '$299/month', description: 'AI-powered workflow automation' },
      { name: 'AI Data Governance Platform', price: '$199/month', description: 'AI-powered data governance' },
      { name: 'AI Customer Experience Analytics', price: '$399/month', description: 'AI-powered customer insights' },
      { name: 'AI Business Intelligence Analytics', price: '$599/month', description: 'Advanced analytics & ML insights' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    services: [
      { name: 'Cloud DevOps', price: '$799/month', description: 'Infrastructure automation & scaling' },
      { name: 'IT Infrastructure', price: '$1,199/month', description: 'Enterprise infrastructure solutions' },
      { name: 'FinOps Advisor', price: '$299/month', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', price: '$499/month', description: 'Financial operations automation' }
    ]
  },
  {
    category: 'Cybersecurity & Privacy',
    icon: Shield,
    services: [
      { name: 'AI Cybersecurity Platform', price: '$899/month', description: 'Advanced AI-powered security' },
      { name: 'Security Headers & CSP', price: '$199/month', description: 'Web security hardening' },
      { name: 'DSR Privacy Portal', price: '$299/month', description: 'GDPR/CCPA compliance' },
      { name: 'Zero Trust Network Access', price: '$599/month', description: 'Modern security architecture' }
    ]
  },
  {
    category: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    services: [
      { name: 'Micro CRM', price: '$49/month', description: 'Customer relationship management' },;
      { name: 'Helpdesk Platform', price: '$79/month', description: 'Customer support system' },;
      { name: 'Website Analytics', price: '$29/month', description: 'Performance tracking & insights' },;
      { name: 'IT Helpdesk', price: '$99/month', description: 'IT support system' };
    ];
  };
];

export default function Pricing() {
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.6 }}
            className="text-center"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
            <div className="bg-slate-700 rounded-2xl p-2 flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === 'annual'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save {savings.annual}%
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg: grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index)  => (
              <motion.div
                key={tier.name}
                initial = {
  { opacity: 0,
  y: 30 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 
}}
                className={`relative group ${
                  tier.popular ? 'lg:scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 





}}
          animate = {
  { opacity: 1,
  y: 0 





}}
          transition = {
  { duration: 0.6,
  delay: 0.2 





}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start with what you need and scale as you grow. All plans include our core features.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial = {
  { opacity: 0,
  y: 30 





}}
              animate = {
  { opacity: 1,
  y: 0 





}}
              transition = {
  { duration: 0.6,
  delay: 0.3 + index * 0.1 





}}
              className={`relative ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`p-8 bg-white/5 backdrop-blur-sm rounded-2xl border ${
                tier.popular 
                  ? 'border-zion-cyan/40 ring-2 ring-zion-cyan/20' 
                  : 'border-zion-cyan/20'
              } hover:border-zion-cyan/40 transition-all duration-300 h-full`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={tier.ctaLink}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/80 hover:to-zion-purple/80'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-zion-cyan/20'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Pricing */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 





}}
          animate = {
  { opacity: 1,
  y: 0 





}}
          transition = {
  { duration: 0.6,
  delay: 0.6 





}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Individual Service Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need just one specific service? Check out our individual service pricing below.
          </p>
        </motion.div>

        <div className="space-y-12">
          {servicePricing.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial = {
  { opacity: 0,
  y: 30 





}}
              animate = {
  { opacity: 1,
  y: 0 





}}
              transition = {
  { duration: 0.6,
  delay: 0.7 + categoryIndex * 0.1 





}}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial = {
  { opacity: 0,
  y: 20 





}}
                    animate = {
  { opacity: 1,
  y: 0 





}}
                    transition = {
  { duration: 0.6,
  delay: 0.8 + categoryIndex * 0.1 + serviceIndex * 0.05 





}}
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                      <Link
                        to = {
  `/services/${service.name.toLowerCase().replace(/\s+/g,
  '-')





}`}
                        className="w-full py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium text-center block"
                      >
                        Learn More
                      </Link>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                    </div>
                  </div>
                )}
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">${tier.price[billingCycle]}</span>
                      <span className="text-slate-400 ml-2">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-cyan-400 text-sm mt-1">
                        Billed annually (${tier.price.annual * 12})
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
      {/* Add-on Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Additional Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enhance your plan with specialized services tailored to your needs
=======
        {/* Additional Information */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 





}}
          animate = {
  { opacity: 1,
  y: 0 





}}
          transition = {
  { duration: 0.6,
  delay: 1.0 





}}
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">30-Day Free Trial</h3>
            <p className="text-gray-400">Try our Professional plan free for 30 days with no commitment.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
            <p className="text-gray-400">24/7 support available across all time zones for Enterprise customers.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
            <p className="text-gray-400">Bank-level security with SOC 2, ISO 27001, and GDPR compliance.</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 





}}
          animate = {
  { opacity: 1,
  y: 0 





}}
          transition = {
  { duration: 0.6,
  delay: 1.2 





}}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can create a custom plan tailored to your specific business needs and budget.
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 gap-8 max-w-6xl mx-auto">
            {addOnServices.map((service, index)  => (
              <motion.div
                key={service.name}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -30 : 30 
}}
                whileInView = {
  { opacity: 1,
  x: 0 
}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 
}}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
<<<<<<< HEAD
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-slate-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price[billingCycle]}</div>
                    <div className="text-slate-400 text-sm">/month</div>
                  </div>
                </div>
                
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                  Add Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan at  time?",
                answer: "Yes, you can upgrade or downgrade your plan at  time. Changes take effect immediately, and we'll prorate  billing adjustments."
              },
              {
                question: "What's included in the 30-day money-back guarantee?",
                answer: "If you're not satisfied with our services within 30 days, we'll provide a full refund. No questions asked."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom pricing and service packages that meet their specific needs."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for our standard plans. Custom implementations may have associated costs, which we'll discuss upfront."
              }
            ].map((faq, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 
}}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            viewport={{ once: true }}
            transition = {
  { duration: 0.8,
  delay: 0.2 
}}
          >
            Choose your plan and start transforming your business with cutting-edge technology
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            viewport={{ once: true }}
            transition = {
  { duration: 0.8,
  delay: 0.4 
}}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </a>
            <a 
              href="/services-overview" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )}
=======
                Get Custom Quote
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20 font-semibold"
              >
                View Case Studies
              </Link>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
