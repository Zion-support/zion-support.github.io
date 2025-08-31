import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  TrendingUp,
  DollarSign,
  Shield,
  BarChart3,
  Activity,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Settings,
  Database,
  Cloud,
  Lock,
  Target,
  Globe,
  Cpu,
  Bot,
  LineChart,
  PieChart,
  BarChart,
  Zap,
  Users,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  AlertTriangle,
  TrendingDown,
  Percent,
  Calculator,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

const AIFinancialTradingPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Market Analysis",
      description: "Advanced machine learning algorithms that analyze market patterns, news sentiment, and economic indicators in real-time",
      benefits: ["Real-time market analysis", "Sentiment analysis", "Pattern recognition", "Predictive modeling"]
    },
    {
      icon: TrendingUp,
      title: "Automated Trading Strategies",
      description: "Customizable trading bots that execute strategies based on AI insights and predefined rules",
      benefits: ["24/7 trading", "Emotion-free decisions", "Backtesting capabilities", "Risk management"]
    },
    {
      icon: Shield,
      title: "Advanced Risk Management",
      description: "Multi-layered risk controls including position sizing, stop-loss automation, and portfolio diversification",
      benefits: ["Automated risk controls", "Portfolio protection", "Compliance monitoring", "Real-time alerts"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Comprehensive trading analytics with performance metrics, P&L tracking, and strategy analysis",
      benefits: ["Live performance tracking", "Strategy optimization", "Historical analysis", "Custom reports"]
    },
    {
      icon: Globe,
      title: "Multi-Market Access",
      description: "Trade across multiple exchanges and asset classes including stocks, crypto, forex, and commodities",
      benefits: ["Global market access", "Multi-asset trading", "Liquidity optimization", "Arbitrage opportunities"]
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-low latency execution with sub-millisecond response times for high-frequency trading strategies",
      benefits: ["Ultra-fast execution", "Co-location options", "Direct market access", "Algorithmic trading"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for individual traders getting started with AI-powered trading",
      features: [
        "Basic AI market analysis",
        "Up to 5 trading strategies",
        "Standard risk management",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for active traders requiring advanced AI capabilities and multiple strategies",
      features: [
        "Advanced AI analysis",
        "Up to 20 trading strategies",
        "Advanced risk management",
        "Priority support",
        "Real-time analytics",
        "API access",
        "Custom indicators",
        "Backtesting tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For professional trading firms and institutional investors",
      features: [
        "Custom AI models",
        "Unlimited strategies",
        "Institutional risk management",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced compliance",
        "Multi-user access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const tradingStrategies = [
    {
      name: "Momentum Trading",
      description: "AI-powered momentum detection and trend following strategies",
      successRate: "78%",
      avgReturn: "12.5%",
      riskLevel: "Medium"
    },
    {
      name: "Mean Reversion",
      description: "Statistical arbitrage based on price deviation from historical averages",
      successRate: "82%",
      avgReturn: "8.3%",
      riskLevel: "Low"
    },
    {
      name: "Sentiment Analysis",
      description: "News and social media sentiment-based trading decisions",
      successRate: "71%",
      avgReturn: "15.2%",
      riskLevel: "High"
    },
    {
      name: "Pairs Trading",
      description: "Correlation-based trading of related securities",
      successRate: "85%",
      avgReturn: "6.8%",
      riskLevel: "Low"
    }
  ];

  const supportedMarkets = [
    { name: "Stocks", icon: TrendingUp, description: "Global equity markets" },
    { name: "Cryptocurrency", icon: Bitcoin, description: "Major crypto exchanges" },
    { name: "Forex", icon: DollarSign, description: "Currency pairs trading" },
    { name: "Commodities", icon: Package, description: "Gold, oil, agricultural" },
    { name: "Options", icon: FileText, description: "Derivatives trading" },
    { name: "Futures", icon: Calendar, description: "Futures contracts" }
  ];

  const performanceMetrics = [
    {
      icon: TrendingUp,
      title: "Average Annual Return",
      value: "24.7%",
      description: "Across all strategies"
    },
    {
      icon: Shield,
      title: "Risk-Adjusted Return",
      value: "2.8",
      description: "Sharpe ratio"
    },
    {
      icon: Activity,
      title: "Win Rate",
      value: "76.3%",
      description: "Successful trades"
    },
    {
      icon: Clock,
      title: "Execution Speed",
      value: "<1ms",
      description: "Average latency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Financial Trading
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Revolutionize Your Trading with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}AI-Powered Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Leverage the power of artificial intelligence to make smarter trading decisions. 
                Our platform combines advanced algorithms, real-time market analysis, and automated execution for optimal results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center mt-8 text-sm text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Free 14-day trial • No credit card required</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">AI Trading Platform</h3>
                    <p className="text-gray-300">Intelligent Market Analysis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Trading Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for professional-grade AI-powered trading
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Trading Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-optimized strategies with proven track records across various market conditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{strategy.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    strategy.riskLevel === 'Low' ? 'bg-green-500/20 text-green-400' :
                    strategy.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {strategy.riskLevel} Risk
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{strategy.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{strategy.successRate}</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{strategy.avgReturn}</div>
                    <div className="text-sm text-gray-400">Avg Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{strategy.riskLevel}</div>
                    <div className="text-sm text-gray-400">Risk Level</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your trading needs. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who have already increased their returns by 24.7% using our AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Schedule Demo
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Need help? Contact our team at{" "}
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialTradingPlatform;