import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  Globe, 
  Cpu, 
  Atom, 
  Rocket,
  ArrowRight,
  DollarSign,
  Calendar,
  Users,
  Shield,
  TrendingUp,
  Target,
  Award,
  Clock,
  MessageCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string>('professional');

  const pricingPlans = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 99, annual: 79 },
      description: 'Perfect for small businesses and startups getting started with AI',
      color: 'from-green-500 to-emerald-500',
      popular: false,
      features: [
        'AI Content Generation (100/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 User Accounts',
        'Standard Security',
        'Basic API Access',
        'Community Forum Access',
        'Monthly Reports'
      ],
      limitations: [
        'Limited AI Models',
        'Basic Customization',
        'Standard Response Time'
      ],
      cta: 'Get Started',
      href: '/request-quote?plan=starter'
    },
    {
      name: 'Professional',
      icon: Brain,
      price: { monthly: 299, annual: 239 },
      description: 'Ideal for growing businesses that need advanced AI capabilities',
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      features: [
        'AI Content Generation (1000/month)',
        'Advanced Analytics Dashboard',
        'Priority Email Support',
        '25 User Accounts',
        'Enhanced Security',
        'Full API Access',
        'Priority Community Access',
        'Weekly Reports',
        'Custom AI Training',
        'Advanced Integrations',
        'Dedicated Account Manager',
        '24/7 Support'
      ],
      limitations: [
        'Some Advanced Features Limited',
        'Standard SLA'
      ],
      cta: 'Start Free Trial',
      href: '/request-quote?plan=professional'
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      price: { monthly: 999, annual: 799 },
      description: 'For large organizations requiring enterprise-grade AI solutions',
      color: 'from-purple-500 to-pink-500',
      popular: false,
      features: [
        'Unlimited AI Content Generation',
        'Enterprise Analytics Suite',
        'Phone & Email Support',
        'Unlimited User Accounts',
        'Enterprise Security',
        'Custom API Development',
        'VIP Community Access',
        'Real-time Reports',
        'Full AI Model Access',
        'Custom Integrations',
        'Dedicated Success Team',
        '99.9% SLA Guarantee',
        'Custom Training Programs',
        'White-label Solutions',
        'Advanced Compliance'
      ],
      limitations: [
        'Custom Pricing Available',
        'Contact Sales Team'
      ],
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Training',
      icon: Brain,
      price: { monthly: 199, annual: 159 },
      description: 'Custom AI model training for your specific use case',
      features: ['Custom Model Development', 'Training Data Preparation', 'Model Optimization', 'Ongoing Maintenance']
    },
    {
      name: 'Advanced Analytics',
      icon: TrendingUp,
      price: { monthly: 149, annual: 119 },
      description: 'Deep-dive analytics and business intelligence tools',
      features: ['Advanced Reporting', 'Predictive Analytics', 'Custom Dashboards', 'Data Export']
    },
    {
      name: 'Priority Support',
      icon: MessageCircle,
      price: { monthly: 99, annual: 79 },
      description: '24/7 priority support with dedicated response team',
      features: ['Phone Support', 'Live Chat', 'Escalation Management', 'Custom SLA']
    },
    {
      name: 'Custom Integrations',
      icon: Globe,
      price: { monthly: 299, annual: 239 },
      description: 'Custom integrations with your existing systems',
      features: ['API Development', 'System Integration', 'Testing & Validation', 'Documentation']
    }
  ];

  const comparisonFeatures = [
    {
      feature: 'AI Content Generation',
      starter: '100/month',
      professional: '1000/month',
      enterprise: 'Unlimited'
    },
    {
      feature: 'User Accounts',
      starter: '5',
      professional: '25',
      enterprise: 'Unlimited'
    },
    {
      feature: 'API Access',
      starter: 'Basic',
      professional: 'Full',
      enterprise: 'Custom'
    },
    {
      feature: 'Support Response',
      starter: '24 hours',
      professional: '4 hours',
      enterprise: '1 hour'
    },
    {
      feature: 'Security Level',
      starter: 'Standard',
      professional: 'Enhanced',
      enterprise: 'Enterprise'
    },
    {
      feature: 'Customization',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Full'
    },
    {
      feature: 'SLA Guarantee',
      starter: '99%',
      professional: '99.5%',
      enterprise: '99.9%'
    },
    {
      feature: 'Training & Onboarding',
      starter: 'Self-service',
      professional: 'Guided',
      enterprise: 'Custom'
    }
  ];

  const savings = billingCycle === 'annual' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI-powered technology solutions. Choose from Starter, Professional, and Enterprise plans with flexible billing options."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
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
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core AI capabilities 
              with flexible billing options and no hidden fees.
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
                  <span className="ml-2 inline-flex items-center px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                    Save {savings}%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
                className={`relative ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`p-8 rounded-2xl border transition-all duration-300 h-full ${
                  plan.popular
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}>
                  <div className="text-center mb-8">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${plan.color} w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">${plan.price[billingCycle]}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-green-400 mt-1">Billed annually</p>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="mb-8 p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Limitations:</h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="text-xs text-gray-500 flex items-start">
                            <span className="text-gray-600 mr-2">•</span>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Link
                    to={plan.href}
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25'
                        : 'border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
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
              Add-on Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs. 
              Mix and match to create the perfect solution for your business.
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
                className="group"
              >
                <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 h-full">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 mb-4 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-white">${service.price[billingCycle]}</span>
                      <span className="text-gray-400 ml-1 text-sm">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start">
                        <Check className="w-3 h-3 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/request-quote"
                    className="block w-full text-center px-4 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Add to Plan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
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
              Plan Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare all features across our plans to find the perfect fit for your business needs.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-medium">Starter</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-medium">Professional</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-4 px-6 text-white font-medium">{feature.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-300">{feature.starter}</td>
                    <td className="py-4 px-6 text-center text-gray-300">{feature.professional}</td>
                    <td className="py-4 px-6 text-center text-gray-300">{feature.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              
              <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30">
                <h3 className="text-lg font-semibold text-white mb-3">Is there a free trial?</h3>
                <p className="text-gray-300">We offer a 14-day free trial for our Professional plan. No credit card required to start your trial.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30">
                <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can set up custom payment terms.</p>
              </div>
              
              <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer discounts for nonprofits?</h3>
                <p className="text-gray-300">Yes, we offer special pricing for qualified nonprofit organizations. Contact our sales team for more information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the plan that best fits your needs, or contact our team for a custom solution. 
              We're here to help you succeed with AI-powered technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
