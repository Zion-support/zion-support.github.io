import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Check, 
=======
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '../components/SEO';
import { Link              } from 'react-router-dom.ts';
import { Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  CreditCard,
  Clock,
import { Check, Star, Zap, Shield, Users, Globe } from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
=======
  MessageSquare,
  Phone,
=======
  Brain,
  Cloud,
  Rocket,
  Award,
  ArrowRight,
  Download,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

export default function Pricing(...args: any[]): any {
  const [billingCycle, setBillingCycle] = useState<any>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
=======
import { Check, X, Star, Zap, Shield, Crown, ArrowRight, Calculator, DollarSign } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
<<<<<<< HEAD
      description: 'Perfect for small businesses and startups',
      price: { monthly: 299, annual: 2999 },
      features: [
        'AI-Powered Analytics Dashboard',
        'Basic Cloud Infrastructure',
        'Email Support',
        '5 User Licenses',
        'Standard Security Features',
        'Monthly Reports',
        'Basic Training Materials'
      ],
      popular: false,
      icon: Rocket,
      color: 'from-zion-cyan to-zion-blue'
=======
      icon: Zap,
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 299,
      annualPrice: 2390, // 20% discount
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Basic AI Chatbot',
        'Email Support',
        'Up to 1,000 queries/month',
        'Standard analytics',
        'Basic integrations',
        '1 team member',
        'Community access'
      ],
      limitations: [
        'No phone support',
        'Limited customization',
        'Basic reporting only'
      ],
      cta: 'Start Free Trial',
      popular: false
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
    },
    {
      id: 'professional',
      name: 'Professional',
<<<<<<< HEAD
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 799, annual: 7999 },
      features: [
        'Everything in Starter',
        'Advanced AI & Machine Learning',
        'Priority Support (4-hour response)',
        '25 User Licenses',
        'Advanced Security & Compliance',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Weekly Performance Reviews',
        'Advanced Training & Workshops'
      ],
      popular: true,
      icon: Star,
      color: 'from-zion-purple to-zion-cyan'
=======
      icon: Star,
      description: 'Ideal for growing businesses',
      monthlyPrice: 799,
      annualPrice: 6392, // 20% discount
      color: 'from-purple-500 to-pink-500',
      features: [
        'Advanced AI Solutions',
        'Priority Email & Chat Support',
        'Up to 10,000 queries/month',
        'Advanced analytics & reporting',
        'Custom integrations',
        'Up to 5 team members',
        'Training & onboarding',
        'API access',
        'Custom workflows'
      ],
      limitations: [
        'Limited phone support hours',
        'Standard SLA'
      ],
      cta: 'Start Free Trial',
      popular: true
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations with complex needs',
<<<<<<< HEAD
      price: { monthly: 1999, annual: 19999 },
      features: [
        'Everything in Professional',
        'Custom AI Model Development',
        '24/7 Premium Support',
        'Unlimited User Licenses',
        'Enterprise Security & Compliance',
        'Custom Development',
        'Dedicated Success Team',
        'Daily Performance Monitoring',
        'Executive Strategy Sessions',
        'Custom Training Programs'
      ],
      popular: false,
      icon: Award,
      color: 'from-zion-cyan to-zion-purple'
=======
      monthlyPrice: 2499,
      annualPrice: 19992, // 20% discount
      color: 'from-orange-500 to-red-500',
      features: [
        'Full AI & Quantum Solutions Suite',
        '24/7 Dedicated Support',
        'Unlimited queries',
        'Custom analytics & BI dashboards',
        'Enterprise integrations',
        'Unlimited team members',
        'Dedicated success manager',
        'Premium API access',
        'Custom development',
        'White-label options',
        'Advanced security features',
        'Compliance assistance'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    },
    {
      name: 'Custom',
      icon: Shield,
      description: 'Tailored solutions for unique requirements',
      monthlyPrice: null,
      annualPrice: null,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Fully customized solutions',
        'Dedicated development team',
        'Custom AI model training',
        'On-premise deployment options',
        'Custom SLA agreements',
        'Unlimited everything',
        'Executive support',
        'Custom integrations',
        'Regulatory compliance',
        'Data sovereignty options'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
    }
  ];

  const addOnServices = [
    {
<<<<<<< HEAD
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: { monthly: 500, annual: 5000 },
      features: ['Custom Model Development', 'Data Preprocessing', 'Model Optimization', 'Performance Monitoring']
    },
    {
      name: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration',
      price: { monthly: 1000, annual: 10000 },
      features: ['Infrastructure Assessment', 'Migration Planning', 'Data Transfer', 'Post-Migration Support']
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment',
      price: { monthly: 300, annual: 3000 },
      features: ['Vulnerability Assessment', 'Compliance Review', 'Security Recommendations', 'Remediation Support']
    },
    {
      name: 'Custom Development',
      description: 'Tailored software development',
      price: { monthly: 1500, annual: 15000 },
      features: ['Requirements Analysis', 'Custom Development', 'Testing & QA', 'Deployment Support']
    }
  ];

  const valuePropositions = [
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'Cutting-edge artificial intelligence and machine learning capabilities built into every solution.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 Type II compliance and advanced threat protection.'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across multiple time zones with dedicated account management.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to our world-class team of AI researchers, engineers, and business experts.'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! We offer custom pricing and enterprise agreements for organizations with specific needs or large deployments.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise customers.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for our standard plans. Custom implementations may have associated costs that we\'ll discuss upfront.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you reach your limits and can help you upgrade to a plan that better fits your needs.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for new customers. Enterprise customers have custom terms outlined in their agreements.'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getSavings = (monthly: number, annual: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - annual;
    const savingsPercent = Math.round((savings / monthlyTotal) * 100);
    return { amount: savings, percent: savingsPercent };
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
      name: 'Additional AI Models',
      description: 'Access to specialized AI models for specific use cases',
      price: '$199/month per model'
    },
    {
      name: 'Premium Support',
      description: '24/7 phone support with guaranteed response times',
      price: '$499/month'
    },
    {
      name: 'Custom Training',
      description: 'Personalized training sessions for your team',
      price: '$299/hour'
    },
    {
      name: 'Data Migration',
      description: 'Professional data migration and setup services',
      price: '$2,999 one-time'
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: '$4,999 one-time'
    }
  ];

  const enterpriseFeatures = [
    {
      category: 'AI & Machine Learning',
      features: [
        'Custom AI model development',
        'Advanced natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'Automated decision making'
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      features: [
        'Multi-cloud deployment',
        'Auto-scaling infrastructure',
        'Load balancing',
        'CDN integration',
        'Disaster recovery'
      ]
    },
    {
      category: 'Security & Compliance',
      features: [
        'Zero-trust architecture',
        'End-to-end encryption',
        'Compliance frameworks (SOC2, GDPR)',
        'Security monitoring',
        'Threat intelligence'
      ]
    },
    {
      category: 'Support & Services',
      features: [
        'Dedicated success manager',
        '24/7 premium support',
        'Custom training programs',
        'Regular health checks',
        'Strategic consulting'
      ]
    }
  ];

  const getPrice = (plan: typeof pricingPlans[0]) => {
    if (!plan.monthlyPrice) return 'Custom';
    return billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12);
  };

  const getSavings = (plan: typeof pricingPlans[0]) => {
    if (!plan.monthlyPrice) return 0;
    return Math.round(((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12)) * 100);
  };

  return (
    <>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's AI and technology solutions. Choose from flexible plans designed for businesses of all sizes."
        keywords="pricing, AI solutions, technology services, business plans, enterprise pricing"
      />
      
<<<<<<< HEAD
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Choose the perfect plan for your AI and technology needs. Start with a free trial and scale as you grow.
            </motion.p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the plan that fits your business needs. All plans include our core AI and technology solutions with enterprise-grade support.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-zion-cyan' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-zion-cyan' : 'text-zion-slate-light'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zion-cyan/20 text-zion-cyan">
                    Save up to 20%
                  </span>
                )}
              </span>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-1 border border-white/20">
              <div className="flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    billingCycle === 'annual'
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Annual
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            </div>
          </motion.div>

<<<<<<< HEAD
      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
=======
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index)              => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-zion-cyan bg-zion-slate-darker shadow-lg shadow-zion-cyan/20'
                    : 'border-zion-purple/20 bg-zion-slate-dark hover:border-zion-cyan/40'
=======
          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                  plan.popular ? 'lg:scale-105 border-cyan-400/50' : ''
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
=======
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                      Most Popular
                    </span>
                  </div>
                )}
<<<<<<< HEAD

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period && (
                      <span className="text-lg text-gray-400 ml-1">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
=======
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zion-cyan mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-zion-slate-light ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
=======
                
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white">
                          ${getPrice(plan)}
                        </span>
                        <span className="text-gray-300 ml-2">
                          /month
                        </span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className="text-green-400 text-sm mt-1">
                          Save {getSavings(plan)}% annually
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-white">
                      Contact us
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-center text-gray-400">
                      <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Add-on Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOnServices.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {addon.description}
                  </p>
                  <div className="text-cyan-400 font-semibold">
                    {addon.price}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Enterprise Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-bold text-white mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Custom Service Packages</h2>
            <p className="text-xl text-gray-300">
              Need something specific? We offer custom solutions tailored to your business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {servicePackages.map((pkg, index)              => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mb-4">
                  <pkg.icon className="w-6 h-6 text-cyan-400" />
                  
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-zion-cyan">
                      Save {getSavings(plan.price.monthly, plan.price.annual).percent}% annually
                    </div>
                  )}
=======
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-zion-cyan hover:bg-zion-cyan/80 text-white'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {tier.cta}
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index)              => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-zion-cyan mb-3">{service.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">
                    {formatPrice(service.price[billingCycle])}
                  </span>
                  <span className="text-zion-slate-light text-sm ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                </a>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <Check className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 px-4 border border-zion-cyan text-zion-cyan rounded-lg text-sm font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Add Service
                </button>
=======
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver exceptional value through cutting-edge technology, expert support, and proven results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((proposition, index) => (
              <motion.div
                key={proposition.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <proposition.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-zion-cyan mb-3">{proposition.title}</h3>
                <p className="text-zion-slate-light">{proposition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-6">
=======
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
              },
              {
                question: "Do you offer custom pricing for large teams?",
                answer: "Yes, we offer custom pricing and features for enterprise customers. Contact our sales team for details."
              }
            ].map((faq, index)              => (
=======
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl p-6 border border-zion-purple/20"
              >
                <h3 className="text-lg font-semibold text-zion-cyan mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact our sales team to discuss your needs and get a personalized quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Contact Sales
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </h3>
                <p className="text-zion-slate-light mb-3">
                  Get a quick response from our sales team.
                </p>
                <a href="mailto:sales@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan/80">
                  sales@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </h3>
                <p className="text-zion-slate-light mb-3">
                  Speak directly with our sales representatives.
                </p>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan/80">
                  +1 (302) 464-0950
                </a>
              </div>

              <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </h3>
                <p className="text-zion-slate-light mb-3">
                  Book a personalized demonstration of our solutions.
                </p>
                <button className="text-zion-cyan hover:text-zion-cyan/80">
                  Book Demo
                </button>
              </div>
=======
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  Can I change plans at any time?
                </h3>
                <p className="text-gray-300 text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300 text-sm">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300 text-sm">
                  We accept all major credit cards, bank transfers, and can accommodate purchase orders for enterprise clients.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  Do you offer custom pricing for large organizations?
                </h3>
                <p className="text-gray-300 text-sm">
                  Yes, we offer volume discounts and custom pricing for organizations with specific requirements. Contact our sales team for details.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI solutions. Start your free trial today or contact our sales team for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
