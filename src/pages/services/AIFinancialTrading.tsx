import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  DollarSign, 
  CheckCircle, 
  Star, 
  Users, 
  Globe,
  Lock,
  Cpu,
  Database,
  Network,
  BarChart3,
  ArrowRight,
  Sparkles,
  Atom,
  Workflow,
  Target,
  Rocket,
  Shield,
  Zap,
  Activity,
  LineChart,
  PieChart,
  Target as TargetIcon,
  BrainCircuit,
  Clock,
  AlertTriangle,
  TrendingDown,
  DollarSign as DollarIcon,
  BarChart,
  PieChart as PieChartIcon
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIFinancialTrading() {
  const features = [
    {
      icon: Brain,
      title: "AI Trading Algorithms",
      description: "Advanced machine learning algorithms that adapt to market conditions in real-time"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast market movements with high accuracy using historical data and AI models"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Intelligent risk assessment and automated stop-loss mechanisms"
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-fast execution with microsecond precision for optimal trade timing"
    }
  ];

  const tradingStrategies = [
    {
      name: "Momentum Trading",
      description: "AI-powered momentum detection and trend following strategies",
      successRate: "87.3%",
      avgReturn: "12.5%",
      icon: TrendingUp
    },
    {
      name: "Arbitrage Trading",
      description: "Real-time price difference detection across multiple exchanges",
      successRate: "94.1%",
      avgReturn: "8.2%",
      icon: DollarSign
    },
    {
      name: "Mean Reversion",
      description: "Statistical analysis for price correction opportunities",
      successRate: "82.7%",
      avgReturn: "15.8%",
      icon: BarChart
    },
    {
      name: "Sentiment Analysis",
      description: "Social media and news sentiment-driven trading decisions",
      successRate: "79.5%",
      avgReturn: "18.3%",
      icon: BrainCircuit
    }
  ];

  const benefits = [
    "Increase trading profits by up to 300%",
    "Reduce trading risks by 65%",
    "24/7 automated trading operations",
    "Real-time market analysis and alerts",
    "Multi-asset portfolio management",
    "Advanced backtesting and optimization"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$4,500",
      period: "/month",
      features: [
        "Up to $100K portfolio",
        "5 trading strategies",
        "Basic risk management",
        "Email support",
        "Standard reporting"
      ]
    },
    {
      name: "Professional",
      price: "$9,500",
      period: "/month",
      features: [
        "Up to $1M portfolio",
        "15 trading strategies",
        "Advanced risk management",
        "Priority support",
        "Custom strategies",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "$25,000",
      period: "/month",
      features: [
        "Unlimited portfolio size",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom development"
      ]
    }
  ];

  const supportedAssets = [
    "Stocks & ETFs",
    "Cryptocurrencies",
    "Forex Pairs",
    "Commodities",
    "Options & Futures",
    "Bonds & Fixed Income"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Financial Trading Platform - Zion Tech Group"
        description="Revolutionary AI-powered financial trading platform with advanced algorithms, predictive analytics, and automated risk management."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-green-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Financial Trading Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your trading with AI-powered algorithms, predictive analytics, 
              and automated risk management for maximum returns and minimal risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Trading Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400/10 transition-all duration-300"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
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
              Advanced Trading Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI trading platform combines cutting-edge machine learning with financial expertise 
              to deliver unprecedented trading performance and risk management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Trading Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform employs multiple sophisticated trading strategies with proven 
              track records and consistent returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <strategy.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{strategy.name}</h3>
                    <p className="text-gray-300 text-sm">{strategy.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-2xl">{strategy.successRate}</div>
                    <div className="text-gray-400 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-2xl">{strategy.avgReturn}</div>
                    <div className="text-gray-400 text-sm">Avg Return</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Assets Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Asset Trading Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trade across multiple asset classes with our unified AI trading platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 text-center hover:border-green-400/50 transition-all duration-300"
              >
                <DollarIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <span className="text-white font-semibold text-lg">{asset}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Trading?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your trading performance with intelligent automation and advanced analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              Choose the plan that fits your trading needs. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border ${
                  index === 1 
                    ? 'border-green-400/50 shadow-lg shadow-green-500/25' 
                    : 'border-slate-600/50'
                } relative`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg hover:shadow-green-500/25'
                      : 'border border-green-400 text-green-400 hover:bg-green-400/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start AI-Powered Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join successful traders worldwide who have already transformed their 
              trading performance with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}