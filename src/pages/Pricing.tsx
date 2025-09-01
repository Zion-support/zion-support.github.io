<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Check, 
=======
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { SEO              } from '@/components/SEO';
import { Check,
  Star,
  Zap,
  Brain,
  Shield,
  Users,
  Globe,
  Clock,
  TrendingUp,
  Rocket,
  Crown,
  Sparkles
=======
import { SEO              } from '../components/SEO';
import { Link              } from 'react-router-dom.ts';
import { Check, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe,
<<<<<<< HEAD
  CreditCard,
  Clock,
<<<<<<< HEAD
  Headphones,
  Rocket,
  Award,
  Lock
} from 'lucide-react';
=======
import { Check, Star, Zap, Shield, Users, Globe } from 'lucide-react';
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089

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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    {
<<<<<<< HEAD
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups getting started with AI tools",
      features: [
        "AI Content Generation (500 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (10 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access",
        "AI Sales Copilot (Basic)",
        "AI Compliance Assistant (Basic)"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (2000 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (50 hours/month)",
        "AI Translation (25 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (5000 calls/month)",
        "Team Collaboration Tools",
        "AI Project Management Platform",
        "AI Marketing Automation",
        "AI Customer Support Automation"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/contact"
    },
    {
      name: "Business",
      price: "$799",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "AI Content Generation (10000 credits/month)",
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
        "API Access (50000 calls/month)",
        "Advanced Security Features",
        "AI Predictive Maintenance",
        "AI HR Platform",
        "AI Financial Risk Management"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact"
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
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
        "Compliance Certifications",
        "Quantum AI Solutions",
        "Blockchain Integration",
        "IoT Edge Computing Platform"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Get up and running in days, not months"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock technical support"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Deployed across multiple continents"
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
<<<<<<< HEAD
    <>
      <SEO
        title="Pricing - Zion Tech Group AI Services"
        description="Transparent pricing for our comprehensive suite of AI-powered services. Choose the plan that fits your business needs and scale as you grow."
        canonical="/pricing"
      />

      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"

              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Choose the perfect plan for your business. All plans include a 14-day free trial
                and no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Pricing */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                AI Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI-powered services designed to transform
                your business operations and drive growth.
              </p>
            </motion.div>

            <div className="space-y-16">
              {services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                  className="bg-glass-dark rounded-2xl p-8 border border-slate-700/50"

                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-xl text-gray-300">{service.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
                    {service.pricing.map((plan, planIndex)              => (
                      <div
                        key={planIndex}
                        className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                          plan.name === 'Professional'
                            ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                            : 'border-slate-700/50'
                        }`}

                        {plan.name === 'Professional' && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Most Popular
                            </span>
                          </div>
                        )}

                        <div className="text-center mb-6">
                          <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                          <div className="flex items-baseline justify-center mb-2">
                            <span className="text-3xl font-bold text-cyan-400">{plan.price}</span>
                            <span className="text-gray-400 ml-1">{plan.period}</span>
                          </div>
                        </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for Zion Tech Group's AI, cloud, and technology services. Choose the plan that fits your business needs."
      />
      
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
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

<<<<<<< HEAD
      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
=======
      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-slate-800/50 rounded-xl p-1 border border-slate-600/50">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-400 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
=======
      id: 'starter',
      name: 'Starter',
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
    },
    {
      id: 'professional',
      name: 'Professional',
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
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
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
    }
  ];

  const addOnServices = [
    {
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 border rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 ${
                  tier.popular
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/25 scale-105'
                    : 'border-gray-700 hover:border-gray-600'
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-zion-cyan bg-zion-slate-darker shadow-lg shadow-zion-cyan/20'
                    : 'border-zion-purple/20 bg-zion-slate-dark hover:border-zion-cyan/40'
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="w-4 h-4" />
=======
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                      Most Popular
                    </span>
                  </div>
                )}

<<<<<<< HEAD
<<<<<<< HEAD
                {tier.savings && (
                  <div className="absolute -top-4 right-4">
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/50">
                      {tier.savings}
                    </div>
                  </div>
                )}

<<<<<<< HEAD
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
=======
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period && (
                      <span className="text-lg text-gray-400 ml-1">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
=======
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                    } hover:scale-105`}
                  >
                    Get Started
                  </button>
=======
                <div className="text-center mb-8">
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
                  
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-zion-cyan">
                      Save {getSavings(plan.price.monthly, plan.price.annual).percent}% annually
                    </div>
                  )}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Enhance your solution with specialized services tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
<<<<<<< HEAD
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mb-4">
                  <pkg.icon className="w-6 h-6 text-cyan-400" />
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
=======
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

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <Check className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                    </li>
                  ))}
                </ul>

<<<<<<< HEAD
                <a
                  href={tier.link}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105'
                      : 'bg-transparent border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500'
                  }`}
                >
                  {tier.cta}
<<<<<<< HEAD
                </Link>
=======
                <button className="w-full py-2 px-4 border border-zion-cyan text-zion-cyan rounded-lg text-sm font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Add Service
                </button>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Add-ons Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with additional services and features
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
=======
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              <motion.div
                key={proposition.title}
                initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</div>
                <p className="text-gray-300 text-sm">{addon.description}</p>
=======
                </a>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Why Choose Zion Tech Group?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
=======
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <proposition.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-zion-cyan mb-3">{proposition.title}</h3>
                <p className="text-zion-slate-light">{proposition.description}</p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common questions about our pricing and billing
            </p>
          </motion.div>

<<<<<<< HEAD
=======
            Frequently Asked Questions
          </motion.h2>
          
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
          <div className="space-y-6">
=======
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8 max-w-4xl mx-auto">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact us for enterprise pricing and custom solutions tailored to your specific needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
            >
              Contact Sales
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              Schedule Demo
            </a>
=======
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
            </div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Pricing;
=======
}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
