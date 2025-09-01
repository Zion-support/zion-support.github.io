import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  Atom,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Award
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const PricingGuide: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: 'From $999',
      period: '/month',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Basic AI implementation',
        'Cloud infrastructure setup',
        '24/7 support',
        'Monthly reporting',
        'Basic security features'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/request-quote'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: 'From $2,999',
      period: '/month',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Advanced AI solutions',
        'Full cloud migration',
        'Priority support',
        'Real-time analytics',
        'Advanced security',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Get Started',
      href: '/request-quote'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      period: '',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Custom AI development',
        'Full digital transformation',
        'Dedicated support team',
        'Advanced analytics',
        'Enterprise security',
        'Custom solutions',
        'On-site implementation'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const servicePricing = [
    {
      category: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', price: 'From $2,999/month', description: 'Machine Learning & Data Science' },
        { name: 'AI Workflow Orchestrator', price: 'From $3,500/month', description: 'Intelligent Process Automation' },
        { name: 'AI Data Governance', price: 'From $2,500/month', description: 'AI-Powered Data Protection' },
        { name: 'AI Customer Success Platform', price: 'From $4,500/month', description: 'Proactive Customer Engagement' }
      ]
    },;
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Cloud DevOps', price: 'From $5,000/month', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', price: 'From $1,999/month', description: 'Cost optimization' },
        { name: 'FinOps Advisor', price: 'From $2,500/month', description: 'Financial operations' }
      ]
    },;
    {
      category: 'Edge & IoT',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'IoT & Edge Computing', price: 'From $3,500/month', description: 'Smart Devices & Networks' },
        { name: 'Edge Computing Platform', price: 'From $4,500/month', description: 'Ultra-Low Latency Processing' },
        { name: 'Digital Twin', price: 'From $6,000/month', description: 'Simulation & Monitoring' }
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Compliance Copilot', price: 'From $2,500/month', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', price: 'From $8,000/month', description: 'Advanced security' },
        { name: 'AI Cybersecurity Suite', price: 'From $3,500/month', description: 'Comprehensive security' }
      ]
    }
  ];

  const addOnServices = [
    {
      name: 'On-site Support',
      price: 'From $150/hour',
      description: 'Expert technicians available on-site for immediate assistance',
      icon: Shield
    },
    {
      name: 'Custom Development',
      price: 'From $200/hour',
      description: 'Tailored software solutions built specifically for your needs',
      icon: Rocket
    },
    {
      name: 'Training & Workshops',
      price: 'From $1,500/day',
      description: 'Comprehensive training for your team on new technologies',
      icon: Brain
    },
    {
      name: '24/7 Monitoring',
      price: 'From $500/month',
      description: 'Round-the-clock system monitoring and alerting',
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing Guide - Zion Tech Group"
        description="Transparent pricing for all AI-powered technology services. Choose the perfect plan for your business needs."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pricing Guide
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All our pricing is transparent with no hidden fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Speak with Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-slate-800/50 rounded-xl p-8 border ${tier.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'border-slate-700'} h-full`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-slate-400 mb-6">{tier.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                      <span className="text-slate-400">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={tier.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Service-Specific Pricing</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Detailed pricing for individual services. Mix and match to create your perfect solution.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicePricing.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                    <p className="text-slate-400 text-sm">Professional services</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div key={service.name} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{service.name}</h4>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </div>
                      <p className="text-sm text-slate-400">{service.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Enhance your solution with these additional services and support options.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <div className="text-cyan-400 font-semibold mb-3">{service.price}</div>
                <p className="text-sm text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                <p className="text-slate-300">Yes, we provide custom pricing for enterprise clients and specialized requirements. Contact our sales team for a personalized quote.</p>
              </div>
              
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan later?</h3>
                <p className="text-slate-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">What's included in support?</h3>
                <p className="text-slate-300">All plans include 24/7 technical support, regular updates, and maintenance. Enterprise plans include dedicated support teams.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Are there setup fees?</h3>
                <p className="text-slate-300">Setup fees vary by service complexity. Simple implementations may have no setup fee, while complex solutions may include one-time setup costs.</p>
              </div>
              
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer discounts?</h3>
                <p className="text-slate-300">We offer volume discounts for enterprise clients and annual payment discounts. Contact us to learn about available discounts.</p>
              </div>
              
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-slate-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Get a custom quote tailored to your specific business needs and requirements.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Speak with Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingGuide;