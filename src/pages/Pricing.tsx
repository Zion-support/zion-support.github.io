import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown, 
  Rocket, 
  Building, 
  Users, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  Calendar,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Award,
  Target,
  BarChart3,
  Cpu,
  Database,
  Network,
  Server,
  Smartphone,
  Code,
  Settings,
  Gauge,
  Eye,
  Leaf,
  Atom,
  Globe,
  Heart,
  Scale,
  Factory,
  ShoppingCart,
  GraduationCap,
  Building2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      name: 'Starter',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      description: 'Perfect for startups and small businesses getting started with AI',
      monthlyPrice: 299,
      annualPrice: 2999,
      features: [
        'AI Content Generation (100 articles/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 AI Workflow Automations',
        'Standard Security Features',
        'Basic Training & Documentation',
        'Community Forum Access',
        'Monthly Performance Reports'
      ],
      notIncluded: [
        'Advanced AI Models',
        'Custom Integrations',
        'Priority Support',
        'Advanced Analytics',
        'Custom Branding',
        'API Access'
      ],
      cta: 'Get Started',
      popular: false,
      href: '/request-quote?plan=starter'
    },
    {
      name: 'Professional',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      description: 'Ideal for growing businesses and mid-market companies',
      monthlyPrice: 799,
      annualPrice: 7999,
      features: [
        'AI Content Generation (500 articles/month)',
        'Advanced Analytics & BI',
        'Priority Email & Chat Support',
        '25 AI Workflow Automations',
        'Advanced Security & Compliance',
        'Comprehensive Training & Certification',
        'Dedicated Success Manager',
        'Weekly Performance Reviews',
        'Custom Integrations (5)',
        'API Access & Webhooks',
        'Advanced AI Models',
        'Custom Branding'
      ],
      notIncluded: [
        'Enterprise Security Features',
        'Custom AI Model Training',
        '24/7 Phone Support',
        'On-site Implementation',
        'Custom SLA Agreements'
      ],
      cta: 'Start Free Trial',
      popular: true,
      href: '/request-quote?plan=professional'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      description: 'For large enterprises requiring custom solutions and dedicated support',
      monthlyPrice: 2499,
      annualPrice: 24999,
      features: [
        'Unlimited AI Content Generation',
        'Enterprise Analytics & BI Platform',
        '24/7 Priority Support (Phone, Email, Chat)',
        'Unlimited AI Workflow Automations',
        'Enterprise Security & Compliance',
        'Custom AI Model Training',
        'Dedicated Implementation Team',
        'Custom SLA Agreements',
        'Unlimited Custom Integrations',
        'Full API Access & Custom Development',
        'White-label Solutions',
        'On-site Training & Implementation',
        'Custom Reporting & Dashboards',
        'Advanced Threat Intelligence',
        'Compliance & Audit Support'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false,
      href: '/request-quote?plan=enterprise'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model training for your specific use case',
      price: 'From $5,000',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Custom Development',
      description: 'Bespoke software development and integrations',
      price: 'From $150/hour',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and compliance review',
      price: 'From $3,000',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Data Migration',
      description: 'Seamless data migration and system integration',
      price: 'From $2,000',
      icon: Database,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Training & Certification',
      description: 'Comprehensive team training and certification programs',
      price: 'From $1,500',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      price: 'From $500/month',
      icon: Clock,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      description: 'HIPAA-compliant AI solutions for medical diagnostics and patient care',
      startingPrice: '$1,999/month'
    },
    {
      industry: 'Financial Services',
      icon: TrendingUp,
      description: 'FINRA-compliant AI solutions for risk management and compliance',
      startingPrice: '$2,499/month'
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      description: 'Industry 4.0 AI solutions for predictive maintenance and quality control',
      startingPrice: '$1,799/month'
    },
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'AI-powered customer experience and inventory optimization',
      startingPrice: '$1,599/month'
    },
    {
      industry: 'Education',
      icon: GraduationCap,
      description: 'AI-powered learning platforms and student analytics',
      startingPrice: '$1,299/month'
    },
    {
      industry: 'Government',
      icon: Building2,
      description: 'FedRAMP-compliant AI solutions for public sector innovation',
      startingPrice: '$2,999/month'
    }
  ];

  const savings = billingCycle === 'annual' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI-powered technology solutions. Choose from Starter, Professional, or Enterprise plans with flexible billing options."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing for
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core AI technology, 
              with flexible options to scale as you grow.
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
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Save 20%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700/50'
                } hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-green-400 mt-1">
                      Billed annually (${plan.annualPrice.toLocaleString()})
                    </p>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.notIncluded.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-400 mb-4">Not Included:</h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  to={plan.href}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/50 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your solution with our specialized add-on services, 
              tailored to meet your specific business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 rounded-xl border border-slate-600/50 p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized pricing and features for different industries, 
              with compliance and security requirements built-in.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>
                <p className="text-gray-300 mb-4 text-sm">{industry.description}</p>
                <div className="text-lg font-semibold text-cyan-400">{industry.startingPrice}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                answer: 'Absolutely! Enterprise clients receive custom pricing based on their specific requirements, volume, and deployment needs.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can accommodate custom payment terms for enterprise clients.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'Setup fees vary by plan. Starter plans have no setup fee, while Professional and Enterprise plans may include implementation costs.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day money-back guarantee for all plans. If you\'re not satisfied, we\'ll refund your payment in full.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and get a customized quote 
              for your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
