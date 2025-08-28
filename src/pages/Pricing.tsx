import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  ArrowRight,
  Crown,
  Sparkles,
  Flame,
  Infinity,
  Target,
  Award,
  Code,
  Server,
  Database,
  Network,
  Lock,
  Globe,
  Rocket,
  Heart,
  Scale,
  Leaf,
  TrendingUp,
  DollarSign,
  Calendar,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  const pricingPlans = [
    {
      name: 'Starter',
      price: { monthly: 99, annual: 79 },
      description: 'Perfect for small businesses and startups',
      features: [
        'AI-Powered Business Intelligence',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 User Licenses',
        'Basic Security Features',
        'Cloud Storage (10GB)',
        'API Access (100 calls/month)',
        'Mobile App Access'
      ],
      icon: Sparkles,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      cta: 'Get Started',
      href: '/request-quote'
    },
    {
      name: 'Professional',
      price: { monthly: 299, annual: 239 },
      description: 'Ideal for growing businesses and teams',
      features: [
        'Everything in Starter',
        'Advanced AI Analytics',
        'Custom Dashboards',
        'Priority Support',
        '25 User Licenses',
        'Advanced Security',
        'Cloud Storage (100GB)',
        'API Access (1000 calls/month)',
        'White-label Options',
        'Advanced Reporting',
        'Integration Support',
        'Training Sessions'
      ],
      icon: Crown,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      cta: 'Start Free Trial',
      href: '/request-quote'
    },
    {
      name: 'Enterprise',
      price: { monthly: 999, annual: 799 },
      description: 'For large organizations and enterprises',
      features: [
        'Everything in Professional',
        'Custom AI Models',
        'Dedicated Support Team',
        'Unlimited User Licenses',
        'Enterprise Security',
        'Unlimited Cloud Storage',
        'Unlimited API Access',
        'Custom Integrations',
        'On-premise Options',
        'SLA Guarantees',
        '24/7 Phone Support',
        'Custom Training Programs'
      ],
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const servicePricing = [
    {
      category: 'AI & Analytics Services',
      services: [
        { name: 'AI Business Intelligence', price: 'From $2,500/month', description: 'Custom AI solutions for business insights' },
        { name: 'Data Analytics Platform', price: 'From $1,800/month', description: 'Comprehensive data analysis and reporting' },
        { name: 'Machine Learning Models', price: 'From $3,500/month', description: 'Custom ML model development and training' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud Migration', price: 'From $5,000', description: 'Complete cloud infrastructure migration' },
        { name: 'DevOps Automation', price: 'From $2,000/month', description: 'CI/CD pipeline and automation setup' },
        { name: 'Infrastructure Management', price: 'From $1,500/month', description: 'Ongoing infrastructure monitoring and maintenance' }
      ]
    },
    {
      category: 'Cybersecurity',
      services: [
        { name: 'Security Assessment', price: 'From $3,000', description: 'Comprehensive security audit and recommendations' },
        { name: 'Threat Detection', price: 'From $2,500/month', description: 'AI-powered threat detection and response' },
        { name: 'Compliance Framework', price: 'From $4,000', description: 'GDPR, HIPAA, SOC2 compliance setup' }
      ]
    }
  ];

  const addOnServices = [
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Custom software development and integrations',
      icon: Code
    },
    {
      name: 'Training & Workshops',
      price: '$2,000/day',
      description: 'Team training and skill development sessions',
      icon: Users
    },
    {
      name: '24/7 Support',
      price: '$1,500/month',
      description: 'Round-the-clock technical support and monitoring',
      icon: Clock
    },
    {
      name: 'Data Migration',
      price: 'From $3,000',
      description: 'Legacy system data migration and cleanup',
      icon: Database
    }
  ];

  const benefits = [
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges',
      icon: DollarSign
    },
    {
      title: 'Flexible Plans',
      description: 'Scale up or down as your business grows',
      icon: TrendingUp
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored to your specific business needs',
      icon: Target
    },
    {
      title: 'Expert Support',
      description: 'Access to our team of technology experts',
      icon: Users
    }
  ];

  const savings = billingCycle === 'annual' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI-powered technology solutions. Choose from flexible plans including Starter, Professional, and Enterprise tiers with annual savings."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core 
              AI-powered technology solutions with transparent pricing and no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
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
              <span className={`text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${plan.color} w-fit mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  
                  <a
                    href={plan.href}
                    className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Detailed pricing for our specialized technology services and solutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {servicePricing.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</p>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enhance your experience with our premium add-on services and support options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{service.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-3 text-center">{service.price}</p>
                <p className="text-gray-400 text-sm text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Pricing?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in fair, transparent pricing that provides real value to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'Do you offer custom pricing for enterprise clients?',
                answer: 'Absolutely! We work with enterprise clients to create custom pricing plans that meet their specific needs and requirements.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs depending on complexity.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business or contact us for a custom solution. 
              Our team is here to help you make the right choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
