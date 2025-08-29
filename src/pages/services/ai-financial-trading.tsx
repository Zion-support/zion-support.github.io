import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target,
  Rocket,
  Brain,
  Eye,
  Settings,
  Palette,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Cpu,
  Lock,
  Users,
  Monitor,
  Building
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIFinancialTrading() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Trading Algorithms",
      description: "Advanced machine learning models that analyze market patterns and execute trades with millisecond precision"
    },
    {
      icon: BarChart3,
      title: "Real-time Market Analysis",
      description: "Live market data processing with predictive analytics for informed trading decisions"
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-fast execution capabilities with latency under 1ms for competitive advantage"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "AI-powered risk assessment and automated stop-loss mechanisms for portfolio protection"
    },
    {
      icon: Eye,
      title: "Portfolio Optimization",
      description: "Intelligent asset allocation and rebalancing based on market conditions and risk tolerance"
    },
    {
      icon: Palette,
      title: "Customizable Strategies",
      description: "White-label solutions and customizable trading algorithms to match your investment strategy"
    }
  ];

  const useCases = [
    {
      title: "Institutional Trading",
      description: "High-volume trading for hedge funds, banks, and institutional investors",
      icon: Building
    },
    {
      title: "Retail Trading",
      description: "Automated trading strategies for individual investors and traders",
      icon: Users
    },
    {
      title: "Algorithmic Trading",
      description: "Custom trading algorithms and quantitative strategies",
      icon: Cpu
    },
    {
      title: "Portfolio Management",
      description: "AI-powered portfolio optimization and risk management",
      icon: PieChart
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$799",
      period: "/month",
      description: "Perfect for individual traders and small investment firms",
      features: [
        "Up to $100K trading volume",
        "Basic AI algorithms",
        "Real-time market data",
        "Standard analytics",
        "Basic risk management",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing trading firms and professional traders",
      features: [
        "Up to $1M trading volume",
        "Advanced AI algorithms",
        "High-frequency trading",
        "Advanced analytics",
        "API access",
        "Custom strategies",
        "Priority support",
        "Advanced risk management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large institutions with high-volume trading needs",
      features: [
        "Unlimited trading volume",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees",
        "On-premise options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Trading Performance",
      description: "Improve trading performance with AI-powered insights and automation",
      metric: "35%",
      icon: TrendingUp
    },
    {
      title: "Risk Reduction",
      description: "Reduce trading risks through intelligent risk management",
      metric: "60%",
      icon: Shield
    },
    {
      title: "Execution Speed",
      description: "Ultra-fast trade execution for competitive advantage",
      metric: "1ms",
      icon: Zap
    },
    {
      title: "ROI Improvement",
      description: "Increase returns through optimized trading strategies",
      metric: "25%",
      icon: DollarSign
    }
  ];

  const integrations = [
    "Interactive Brokers", "TD Ameritrade", "E*TRADE", "Charles Schwab", "Fidelity",
    "Robinhood", "Webull", "Alpaca", "Polygon", "IEX Cloud", "Alpha Vantage",
    "Yahoo Finance", "Bloomberg", "Reuters", "MarketWatch", "TradingView",
    "MetaTrader", "NinjaTrader", "ThinkOrSwim", "Zapier", "Webhooks"
  ];

  const markets = [
    "Stocks", "Options", "Futures", "Forex", "Cryptocurrency", "Commodities",
    "Bonds", "ETFs", "Mutual Funds", "Real Estate", "Private Equity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <SEO 
        title="AI-Powered Financial Trading Platform | Zion Tech Group"
        description="Revolutionary AI platform that transforms financial trading with intelligent algorithms, real-time analysis, and high-frequency execution capabilities."
        keywords="AI trading, financial trading platform, algorithmic trading, high-frequency trading, AI algorithms, trading automation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4 mr-2" />
              AI-Powered Financial Trading
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Financial
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Trading Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your trading operations with AI-powered algorithms, real-time market analysis, 
              and high-frequency execution capabilities. Gain competitive advantage with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500/30 text-emerald-300 font-semibold hover:bg-emerald-500/10 transition-all duration-200"
              >
                Watch Demo
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
              Revolutionary Trading Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with deep financial expertise 
              to deliver unprecedented trading automation and optimization capabilities.
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Transform Trading Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From institutional trading to retail investors, our AI platform revolutionizes 
              how you approach financial markets and execute trading strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-8 border border-emerald-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
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
              Multi-Market Support
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trade across multiple asset classes and markets with our comprehensive AI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {markets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-emerald-500/30 transition-all duration-200 text-center"
              >
                <span className="text-gray-300 font-medium text-sm">{market}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your trading volume and requirements. All plans include our core AI capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/50' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the impact of AI-powered trading on your performance metrics and investment returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with your existing brokerage accounts and trading platforms for a unified trading ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-emerald-500/30 transition-all duration-200 text-center"
              >
                <span className="text-gray-300 font-medium text-sm">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders and institutions who have already revolutionized their trading 
              operations with AI-powered algorithms and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/schedule-demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500/30 text-emerald-300 font-semibold hover:bg-emerald-500/10 transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}