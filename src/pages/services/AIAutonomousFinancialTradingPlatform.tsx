import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp, DollarSign, Brain, Zap, Target, CheckCircle, ArrowRight,
  BarChart3, Cpu, Shield, Eye, AlertTriangle, Clock, Users, Globe,
  Activity, Network, Database, LineChart, PieChart, CandlestickChart,
  Coins, Wallet, CreditCard, Banknote, Calculator, Graph
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIAutonomousFinancialTradingPlatform() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Market Analysis',
      description: 'Advanced machine learning algorithms analyze market data in real-time',
      benefits: ['Real-time market scanning', 'Pattern recognition', 'Sentiment analysis']
    },
    {
      icon: TrendingUp,
      title: 'Autonomous Trading Execution',
      description: 'AI automatically executes trades based on predefined strategies',
      benefits: ['24/7 trading', 'Emotion-free decisions', 'Instant execution']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk controls and portfolio protection algorithms',
      benefits: ['Stop-loss automation', 'Position sizing', 'Portfolio diversification']
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: 'Comprehensive dashboard with live portfolio tracking',
      benefits: ['Live performance metrics', 'Alert system', 'Performance analytics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual traders',
      features: [
        'AI market analysis (basic)',
        'Automated trading (up to 10 strategies)',
        'Basic risk management',
        'Email support',
        'Basic performance dashboard'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for active traders',
      features: [
        'Advanced AI market analysis',
        'Unlimited trading strategies',
        'Advanced risk management',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For institutional clients',
      features: [
        'Custom AI models',
        'White-label solutions',
        'Dedicated support team',
        'Compliance reporting',
        'Multi-account management',
        'Advanced backtesting',
        'Full API access'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'Individual Traders',
      description: 'Automate your trading strategies and eliminate emotional decision-making',
      benefits: ['24/7 trading', 'Consistent execution', 'Risk management']
    },
    {
      industry: 'Hedge Funds',
      description: 'Scale your trading operations with institutional-grade AI technology',
      benefits: ['Multi-strategy execution', 'Risk controls', 'Performance analytics']
    },
    {
      industry: 'Family Offices',
      description: 'Preserve and grow wealth with sophisticated AI-driven strategies',
      benefits: ['Portfolio optimization', 'Risk mitigation', 'Tax efficiency']
    },
    {
      industry: 'Institutional Investors',
      description: 'Access advanced trading technology with enterprise-grade security',
      benefits: ['Compliance ready', 'Multi-asset support', 'Custom solutions']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Performance',
      value: '15-35%',
      description: 'Average annual returns improvement'
    },
    {
      icon: Clock,
      title: 'Trading Time',
      value: '24/7',
      description: 'Continuous market coverage'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      value: '40-60%',
      description: 'Reduced trading costs'
    },
    {
      icon: Shield,
      title: 'Risk Reduction',
      value: '30-50%',
      description: 'Lower portfolio volatility'
    }
  ];

  const tradingStrategies = [
    {
      name: 'Trend Following',
      description: 'AI identifies and follows market trends automatically',
      risk: 'Medium',
      expectedReturn: '15-25%'
    },
    {
      name: 'Mean Reversion',
      description: 'AI trades price reversals based on statistical analysis',
      risk: 'Low',
      expectedReturn: '10-20%'
    },
    {
      name: 'Arbitrage',
      description: 'AI exploits price differences across markets',
      risk: 'Very Low',
      expectedReturn: '5-15%'
    },
    {
      name: 'Momentum',
      description: 'AI rides market momentum with dynamic position sizing',
      risk: 'High',
      expectedReturn: '20-40%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Autonomous Financial Trading Platform - Zion Tech Group"
        description="Revolutionary AI-powered autonomous trading platform that executes trades 24/7 with advanced risk management and market analysis."
        keywords="AI trading, autonomous trading, algorithmic trading, risk management, portfolio optimization"
        canonicalUrl="https://ziontechgroup.com/services/ai-autonomous-financial-trading-platform"
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
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Autonomous Financial Trading Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your trading with AI-powered autonomous execution. 
              Trade 24/7 with emotion-free decisions, advanced risk management, and institutional-grade technology.
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
              Our AI Autonomous Trading Platform delivers measurable results 
              that directly impact your trading performance.
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
              Our AI platform autonomously manages your trading operations, 
              from market analysis to trade execution and risk management.
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

      {/* Trading Strategies Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Trading Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform implements sophisticated trading strategies 
              with advanced risk management and portfolio optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{strategy.name}</h3>
                <p className="text-gray-300 mb-4">{strategy.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Risk Level:</span>
                    <span className={`font-semibold ${
                      strategy.risk === 'Very Low' ? 'text-green-400' :
                      strategy.risk === 'Low' ? 'text-blue-400' :
                      strategy.risk === 'Medium' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {strategy.risk}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Expected Return:</span>
                    <span className="text-green-400 font-semibold">{strategy.expectedReturn}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
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
              Choose the perfect plan for your trading needs. 
              All plans include our core AI trading features.
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
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Uses Our Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Trading Platform is trusted by traders and institutions 
              worldwide to enhance their trading performance.
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of traders who trust our AI Autonomous Trading Platform 
              to enhance their performance and eliminate emotional decision-making.
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