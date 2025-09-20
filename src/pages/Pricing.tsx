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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our core AI-powered features with no hidden costs.
            </p>
            
            {/* Billing Toggle */}
            <div className="mt-8 flex items-center justify-center">
              <div className="bg-slate-800/50 rounded-lg p-1 border border-white/10">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'annual'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Annual
                  <span className="ml-1 px-2 py-1 bg-green-500 text-white text-xs rounded-full">Save 20%</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105'
                    : 'border-white/10 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <div className="text-center mb-8">
                  {plan.price === 'Custom' ? (
                    <div className="text-3xl font-bold text-white">Custom Pricing</div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">${plan.originalPrice}</span>
                      )}
                      <span className="text-gray-300">/month</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="text-white font-semibold mb-4 mt-6">Not included:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <XMarkIcon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <a
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-lg'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
=======
            Contact Us for More Information
          </Link>
=======
        </div>
      </section>
    </div>
  );
};

export default $page;
=======
=======
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
=======
