import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, AlertTriangle, TrendingUp, CheckCircle, ArrowRight, Brain, Zap, Target, Globe, Lock, Clock, DollarSign, Star, Rocket, Cpu, Cloud, Database, Network, FileText, Search, Filter, Activity, Sparkles, Award, GitFork, Atom, Leaf, Gamepad2, Coins, Satellite, MessageCircle, Server, ShoppingCart, Smartphone, Users, Eye, Heart, Building, Car, Plane, Ship, Truck, CreditCard, PiggyBank, Calculator, PieChart, LineChart, Activity as ActivityIcon, TrendingDown, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle, Settings, RefreshCw, Download, Upload, Share2, ExternalLink, ArrowUpRight, ChevronRight, ChevronDown, ChevronUp, Minus, Plus, Equal, Divide, Percent, Hash, AtSign, Hash as HashIcon, AtSign as AtSignIcon } from 'lucide-react';

const AIFinancialRiskManagement = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Risk Assessment',
      description: 'Advanced machine learning algorithms that analyze financial data in real-time to identify potential risks and predict market volatility.',
      benefits: ['Real-time risk monitoring', 'Predictive risk modeling', 'Automated risk scoring', 'Multi-factor analysis']
    },
    {
      icon: Shield,
      title: 'Comprehensive Risk Coverage',
      description: 'Cover all types of financial risks including market risk, credit risk, operational risk, liquidity risk, and compliance risk.',
      benefits: ['360-degree risk view', 'Integrated risk framework', 'Regulatory compliance', 'Risk aggregation']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast potential financial losses and market movements using historical data analysis and machine learning models.',
      benefits: ['Loss forecasting', 'Market trend prediction', 'Scenario analysis', 'Stress testing']
    },
    {
      icon: AlertTriangle,
      title: 'Real-time Risk Alerts',
      description: 'Instant notifications when risk thresholds are exceeded, enabling proactive risk management and rapid response.',
      benefits: ['Instant alerts', 'Customizable thresholds', 'Escalation workflows', 'Mobile notifications']
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Risk Optimization',
      description: 'AI-driven portfolio optimization that balances risk and return while maintaining compliance with investment mandates.',
      benefits: ['Risk-adjusted returns', 'Portfolio rebalancing', 'Asset allocation optimization', 'Performance tracking']
    },
    {
      icon: Lock,
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring for Basel III, Solvency II, IFRS 9, and other regulatory frameworks.',
      benefits: ['Automated reporting', 'Regulatory updates', 'Audit trails', 'Compliance dashboards']
    }
  ];

  const pricing = [
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Perfect for financial institutions',
      features: [
        'Up to $100M portfolio value',
        'Basic risk assessment',
        'Standard compliance reporting',
        'Email support',
        'Basic risk alerts'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$8,500',
      period: '/month',
      description: 'Ideal for large financial organizations',
      features: [
        'Up to $1B portfolio value',
        'Advanced AI risk modeling',
        'Full compliance automation',
        'Priority support',
        'Custom risk frameworks',
        'API access',
        'Real-time monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Institutional',
      price: '$18,000',
      period: '/month',
      description: 'For major financial institutions',
      features: [
        'Unlimited portfolio value',
        'Custom AI models',
        'White-label solutions',
        '24/7 dedicated support',
        'Advanced integrations',
        'Custom workflows',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Investment Management',
      description: 'Optimize portfolio risk-return profiles and ensure compliance with investment mandates and regulatory requirements.',
      icon: PieChart,
      benefits: ['Portfolio optimization', 'Risk-adjusted returns', 'Compliance monitoring', 'Performance attribution']
    },
    {
      title: 'Commercial Banking',
      description: 'Manage credit risk, market risk, and operational risk across lending portfolios and trading operations.',
      icon: Building,
      benefits: ['Credit risk assessment', 'Market risk monitoring', 'Operational risk management', 'Regulatory reporting']
    },
    {
      title: 'Insurance & Reinsurance',
      description: 'Assess underwriting risk, investment risk, and catastrophe risk while maintaining solvency requirements.',
      icon: Shield,
      benefits: ['Underwriting risk analysis', 'Investment risk management', 'Catastrophe modeling', 'Solvency monitoring']
    },
    {
      title: 'Corporate Treasury',
      description: 'Manage financial risk exposure including interest rate risk, foreign exchange risk, and commodity price risk.',
      icon: Calculator,
      benefits: ['Interest rate risk', 'FX risk management', 'Commodity hedging', 'Cash flow optimization']
    }
  ];

  const riskTypes = [
    {
      title: 'Market Risk',
      description: 'Risk of losses due to changes in market prices, interest rates, and exchange rates.',
      icon: TrendingUp,
      examples: ['Equity price risk', 'Interest rate risk', 'Foreign exchange risk', 'Commodity price risk']
    },
    {
      title: 'Credit Risk',
      description: 'Risk of losses due to borrowers or counterparties failing to meet their financial obligations.',
      icon: Users,
      examples: ['Default risk', 'Counterparty risk', 'Concentration risk', 'Settlement risk']
    },
    {
      title: 'Operational Risk',
      description: 'Risk of losses due to inadequate or failed internal processes, people, and systems.',
      icon: Settings,
      examples: ['Technology failures', 'Human errors', 'Process inefficiencies', 'External events']
    },
    {
      title: 'Liquidity Risk',
      description: 'Risk of being unable to meet financial obligations when they come due.',
      icon: Activity,
      examples: ['Funding liquidity risk', 'Market liquidity risk', 'Asset liquidity risk', 'Contingent liquidity risk']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Financial Risk Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Financial
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Risk Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your financial assets with AI-driven risk management that provides real-time 
              insights, predictive analytics, and automated compliance monitoring across all risk types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform covers all major types of financial risk with AI-powered analysis 
              and real-time monitoring capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskTypes.map((riskType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <riskType.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{riskType.title}</h3>
                    <p className="text-gray-300 mb-3">{riskType.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-red-400 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {riskType.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Minus className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive risk management to deliver 
              actionable insights and automated compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
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
              Choose the plan that fits your financial risk management needs. 
              All plans include our core AI-powered features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500/50 ring-2 ring-red-500/20' 
                    : 'border-gray-700'
                } hover:border-red-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Financial Risk Management platform is trusted across the financial 
              industry to protect assets and ensure regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Financial Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading financial institutions that trust our AI-powered platform to 
              manage risk and ensure compliance at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialRiskManagement;