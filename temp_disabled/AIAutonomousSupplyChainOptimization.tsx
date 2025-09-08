import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Truck, Package, Globe, TrendingUp, CheckCircle, ArrowRight,
  BarChart3, Cpu, Brain, Zap, Target, Clock, DollarSign, Users,
  MapPin, Activity, Network, Database, Shield, Eye, AlertTriangle,
  RefreshCw, ArrowUpDown, Route, Warehouse, Factory, Ship
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIAutonomousSupplyChainOptimization() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Demand Forecasting',
      description: 'Advanced machine learning algorithms predict demand with 95%+ accuracy',
      benefits: ['Real-time market analysis', 'Seasonal trend prediction', 'Dynamic inventory optimization']
    },
    {
      icon: Network,
      title: 'Autonomous Route Optimization',
      description: 'AI continuously optimizes delivery routes for maximum efficiency',
      benefits: ['Real-time traffic integration', 'Fuel cost reduction', 'Delivery time optimization']
    },
    {
      icon: Eye,
      title: 'End-to-End Visibility',
      description: 'Complete transparency across your entire supply chain network',
      benefits: ['Real-time tracking', 'Predictive analytics', 'Risk assessment']
    },
    {
      icon: Shield,
      title: 'Risk Management & Compliance',
      description: 'Automated risk detection and regulatory compliance monitoring',
      benefits: ['Supply chain resilience', 'Regulatory compliance', 'Insurance optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'AI demand forecasting (up to 100 SKUs)',
        'Basic route optimization',
        'Real-time tracking',
        'Email support',
        'Basic analytics dashboard'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'AI demand forecasting (up to 1000 SKUs)',
        'Advanced route optimization',
        'End-to-end visibility',
        'Risk management',
        'Priority support',
        'Advanced analytics',
        'API integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKU forecasting',
        'Full autonomous optimization',
        'Custom AI models',
        'Dedicated support team',
        'Compliance reporting',
        'White-label solutions',
        'Full API access'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce & Retail',
      description: 'Optimize inventory levels and delivery routes for maximum customer satisfaction',
      benefits: ['Reduced stockouts', 'Faster delivery', 'Lower operational costs']
    },
    {
      industry: 'Manufacturing',
      description: 'Streamline production planning and raw material procurement',
      benefits: ['Just-in-time inventory', 'Reduced waste', 'Improved efficiency']
    },
    {
      industry: 'Logistics & Transportation',
      description: 'Optimize fleet operations and route planning for maximum efficiency',
      benefits: ['Fuel cost reduction', 'Improved delivery times', 'Better resource utilization']
    },
    {
      industry: 'Healthcare & Pharmaceuticals',
      description: 'Ensure critical supplies reach their destination on time and safely',
      benefits: ['Temperature monitoring', 'Compliance tracking', 'Emergency response']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      value: '25-40%',
      description: 'Average reduction in supply chain costs'
    },
    {
      icon: Clock,
      title: 'Delivery Time',
      value: '30-50%',
      description: 'Faster delivery times'
    },
    {
      icon: DollarSign,
      title: 'Inventory Optimization',
      value: '20-35%',
      description: 'Reduced inventory carrying costs'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      value: '60-80%',
      description: 'Reduced supply chain disruptions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Autonomous Supply Chain Optimization - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform that autonomously manages your entire supply chain for maximum efficiency and cost savings."
        keywords="AI supply chain, supply chain optimization, autonomous logistics, demand forecasting, route optimization"
        canonicalUrl="https://ziontechgroup.com/services/ai-autonomous-supply-chain-optimization"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Autonomous Supply Chain Optimization
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your supply chain with AI-powered autonomous optimization. 
              Reduce costs by 25-40%, improve delivery times by 30-50%, and eliminate supply chain disruptions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-400 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Supply Chain Optimization platform delivers measurable results 
              that directly impact your bottom line.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform autonomously manages your entire supply chain, 
              from demand forecasting to final delivery optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your supply chain optimization needs. 
              All plans include our core AI optimization features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500 shadow-lg shadow-green-500/25' 
                    : 'border-slate-600/50 hover:border-green-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Supply Chain Optimization platform is trusted by organizations 
              across industries to streamline their operations and reduce costs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join hundreds of organizations that trust our AI Autonomous Supply Chain 
              Optimization platform to reduce costs and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-400 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}