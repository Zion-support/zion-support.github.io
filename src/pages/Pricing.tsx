import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  MessageCircle,
  ArrowRight,
  Crown,
  Sparkles,
  Rocket,
  Brain,
  Cloud,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const pricingTiers = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 299, annual: 249 },
      description: 'Perfect for small businesses getting started with technology',
      features: [
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
      features: [
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
      features: [
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
    }
  ];

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
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: { monthly: 300, annual: 2700 },
      icon: Shield
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end business transformation consulting',
      price: { monthly: 1200, annual: 10800 },
      icon: Rocket
    }
  ];

  const savings = billingCycle === 'annual' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive AI, cloud, and technology solutions. Choose the plan that fits your business needs."
        keywords="pricing, AI services pricing, cloud services pricing, technology solutions pricing, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All our pricing is transparent with no hidden fees, 
              and includes comprehensive support and implementation assistance.
            </p>
            
            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
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
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 ${
                  tier.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-white">
                      ${tier.price[billingCycle]}
                      <span className="text-lg text-gray-400">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-green-400 mt-1">
                        Billed annually (${tier.price.annual * 12})
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-quote"
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105'
                      : 'bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600 hover:border-slate-500'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Enhance your solution with our specialized add-on services designed to meet specific business needs.
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
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${service.price[billingCycle]}
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <Link
                  to="/request-quote"
                  className="w-full text-center py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-colors text-sm"
                >
                  Add Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our team can create a tailored package that perfectly fits your business requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
