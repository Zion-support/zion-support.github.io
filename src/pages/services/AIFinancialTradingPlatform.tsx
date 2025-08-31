import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Lock,
  Globe,
  Smartphone,
  DollarSign,
  ChartLine,
  Target,
  Zap
} from 'lucide-react';

const AIFinancialTradingPlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms analyze market patterns and predict price movements with high accuracy"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Market Analysis",
      description: "Instant market data processing with AI-driven insights for optimal trading decisions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Intelligent risk assessment and portfolio protection with automated stop-loss and position sizing"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Strategy Support",
      description: "Support for various trading strategies including algorithmic, quantitative, and discretionary trading"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive trading performance metrics and portfolio optimization insights"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Frequency Trading",
      description: "Ultra-low latency execution for high-frequency trading strategies with microsecond precision"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional Trader",
      price: "$499",
      period: "/month",
      description: "Perfect for individual professional traders and small trading firms",
      features: [
        "Up to $1M trading volume/month",
        "Basic AI predictions",
        "Standard risk management",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Institutional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for hedge funds and institutional trading desks",
      features: [
        "Up to $100M trading volume/month",
        "Advanced AI algorithms",
        "Full risk management suite",
        "Priority support",
        "Custom dashboards",
        "API access",
        "Multi-exchange support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large financial institutions and global trading operations",
      features: [
        "Unlimited trading volume",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Increase trading profits by 35% with AI-powered insights"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Reduce trading losses by 40% through intelligent risk management"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Execute trades 10x faster with high-frequency capabilities"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Access institutional-grade tools at competitive pricing"
    }
  ];

  const tradingStrategies = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Algorithmic Trading",
      description: "Automated trading strategies based on technical indicators and market conditions"
    },
    {
      icon: <ChartLine className="w-8 h-8" />,
      title: "Quantitative Analysis",
      description: "Data-driven trading decisions using statistical models and machine learning"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Momentum Trading",
      description: "AI-powered momentum detection and trend following strategies"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Arbitrage",
      description: "Multi-exchange arbitrage opportunities with real-time execution"
    }
  ];

  const supportedMarkets = [
    "Stocks & ETFs",
    "Forex",
    "Cryptocurrencies",
    "Commodities",
    "Options",
    "Futures",
    "Bonds",
    "Indices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Financial Trading Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your trading with AI-powered financial analysis. Advanced algorithms, real-time insights, and intelligent risk management for professional traders and institutions." />
        <meta name="keywords" content="AI trading platform, algorithmic trading, quantitative trading, financial AI, trading algorithms, risk management" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-financial-trading-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial
              <span className="text-green-400 block">Trading Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your trading with AI-powered financial analysis. Advanced algorithms, 
              real-time insights, and intelligent risk management for professional traders and institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Trading Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to dominate the financial markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Trading Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              AI-powered strategies for every trading style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-green-400 mb-4 flex justify-center">{strategy.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{strategy.title}</h3>
                <p className="text-gray-300 text-sm">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Markets Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Global Market Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trade across all major financial markets worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportedMarkets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{market}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Trading Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real performance that transforms your trading outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                {benefit.icon}
                <span className="text-lg text-gray-300">{benefit.text}</span>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional trading tools at accessible prices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of traders using AI to dominate the markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Trading Platform Implementation Help?
          </h3>
          <p className="text-gray-300 mb-6">
            Our financial technology experts are here to guide your AI trading transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Globe className="w-5 h-5 mr-2" />
              <span>ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Lock className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialTradingPlatform;
