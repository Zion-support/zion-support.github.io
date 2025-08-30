import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Database, 
  Globe,
  CheckCircle,
  Star,
  Clock,
  Target,
  DollarSign,
  PieChart,
  LineChart,
  Activity,
  AlertTriangle,
  Lock,
  Network
} from 'lucide-react';

const AIFinancialTradingPlatform: React.FC = () => {
  const features = [
    "AI-powered market prediction with 87% accuracy",
    "Real-time algorithmic trading and execution",
    "Advanced risk management and portfolio optimization",
    "Multi-asset trading (stocks, forex, crypto, commodities)",
    "Sentiment analysis and news impact assessment",
    "Automated portfolio rebalancing and tax optimization",
    "High-frequency trading capabilities with microsecond latency",
    "Custom trading strategy development and backtesting",
    "Real-time market data and advanced charting tools",
    "Compliance monitoring and regulatory reporting",
    "Mobile trading app with push notifications",
    "White-label solution for financial institutions"
  ];

  const benefits = [
    "Increase trading returns by 25-40% through AI optimization",
    "Reduce trading costs by 30-50% with automated execution",
    "Minimize portfolio risk by 40-60% with AI risk management",
    "Achieve 24/7 market coverage with automated trading",
    "Eliminate emotional trading decisions with AI algorithms",
    "Optimize tax efficiency and reduce tax liabilities",
    "Scale trading operations without proportional cost increase",
    "Access institutional-grade tools at retail prices"
  ];

  const tradingAssets = [
    {
      category: "Stocks & ETFs",
      description: "Global equity markets with real-time data",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      category: "Forex Trading",
      description: "Major and exotic currency pairs",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      category: "Cryptocurrency",
      description: "Bitcoin, Ethereum, and altcoin trading",
      icon: Network,
      color: "text-orange-600"
    },
    {
      category: "Commodities",
      description: "Gold, oil, agricultural products",
      icon: PieChart,
      color: "text-purple-600"
    },
    {
      category: "Options & Futures",
      description: "Derivatives trading with leverage",
      icon: TrendingUp,
      color: "text-red-600"
    },
    {
      category: "Bonds & Fixed Income",
      description: "Government and corporate debt instruments",
      icon: LineChart,
      color: "text-indigo-600"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: 99,
      period: "month",
      features: [
        "Up to $100K portfolio",
        "Basic AI trading signals",
        "5 trading strategies",
        "Standard market data",
        "Email support",
        "Basic risk management"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 299,
      period: "month",
      features: [
        "Up to $1M portfolio",
        "Advanced AI algorithms",
        "Unlimited strategies",
        "Real-time market data",
        "Priority support",
        "Advanced risk management",
        "Custom indicators"
      ],
      popular: true
    },
    {
      name: "Institutional",
      price: 999,
      period: "month",
      features: [
        "Unlimited portfolio size",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Full customization",
        "API access",
        "On-premise option"
      ],
      popular: false
    }
  ];

  const complianceStandards = [
    "SEC Registration",
    "FINRA Compliance",
    "SOC 2 Type II",
    "ISO 27001",
    "PCI DSS",
    "GDPR",
    "CCPA",
    "MiFID II"
  ];

  const tradingStrategies = [
    {
      title: "Momentum Trading",
      description: "AI-powered momentum detection and trend following",
      success: "78% win rate"
    },
    {
      title: "Mean Reversion",
      description: "Statistical arbitrage and price correction trading",
      success: "82% win rate"
    },
    {
      title: "Sentiment Analysis",
      description: "News and social media sentiment-driven trading",
      success: "75% win rate"
    },
    {
      title: "Risk Parity",
      description: "Portfolio optimization and risk distribution",
      success: "85% win rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered Financial Trading Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Revolutionize your trading with intelligent algorithms, real-time market analysis, 
              and automated portfolio optimization powered by cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trading Assets Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Asset Trading Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trade across all major asset classes with our comprehensive 
              AI-powered platform designed for maximum flexibility and profit potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <asset.icon className={`w-8 h-8 ${asset.color} mr-3`} />
                  <h3 className="text-lg font-semibold text-gray-900">{asset.category}</h3>
                </div>
                <p className="text-gray-600">{asset.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven AI Trading Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI algorithms have been tested across multiple market cycles 
              and consistently deliver superior returns with managed risk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{strategy.title}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">Success Rate: {strategy.success}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Trading Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence and machine learning 
              to gain a competitive edge in financial markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Regulatory Compliance & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet and exceed financial industry standards with automated compliance 
              monitoring and enterprise-grade security.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg text-center shadow-lg"
              >
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{standard}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measurable Trading Improvements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See real results with our AI-powered trading platform that delivers 
              measurable improvements in returns and risk management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Trading Platform Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the trading platform plan that fits your investment needs. 
              All plans include our core AI capabilities and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  tier.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                    <span className="text-gray-600">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-16 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              Risk Warning
            </h3>
            <p className="text-yellow-700 mb-4">
              Trading involves substantial risk of loss and is not suitable for all investors. 
              Past performance does not guarantee future results. Please ensure you understand 
              the risks involved and seek independent advice if necessary.
            </p>
            <p className="text-yellow-700 text-sm">
              Zion Tech Group is not a registered broker-dealer or investment advisor. 
              This platform is for educational and informational purposes only.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of traders already using our AI-powered platform 
              to optimize their portfolios and maximize returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Trading Team
              </button>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Trading questions? Call us at <strong>+1 302 464 0950</strong></p>
              <p>Or email <strong>kleber@ziontechgroup.com</strong></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialTradingPlatform;