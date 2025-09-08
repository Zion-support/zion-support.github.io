import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  TrendingUp, 
  Zap, 
  Brain, 
  Users, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  BarChart3,
  Activity,
  Bot,
  Sparkles,
  Target,
  Settings,
  Globe,
  Rocket,
  Shield,
  Lock,
  Network,
  Server,
  Database,
  Cpu,
  ChartBar,
  LineChart,
  PieChart,
  Target,
  Award,
  Star,
  Clock,
  Eye,
  AlertTriangle
} from 'lucide-react';

export default function AIFinancialTradingAnalyticsPlatform() {
  const features = [
    {
      title: "AI-Powered Trading Algorithms",
      description: "Advanced machine learning algorithms that analyze market patterns and execute trades automatically",
      icon: Brain,
      benefits: ["Real-time market analysis", "Automated trade execution", "Risk management"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast market trends and identify profitable opportunities using historical data and AI",
      icon: ChartBar,
      benefits: ["Market trend prediction", "Risk assessment", "Portfolio optimization"]
    },
    {
      title: "Real-Time Market Data",
      description: "Access to global financial markets with millisecond latency and comprehensive coverage",
      icon: Activity,
      benefits: ["Global market coverage", "Ultra-low latency", "Real-time updates"]
    },
    {
      title: "Portfolio Management",
      description: "Intelligent portfolio optimization and rebalancing based on AI-driven insights",
      icon: PieChart,
      benefits: ["Automated rebalancing", "Risk diversification", "Performance tracking"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$3,000",
      period: "/month",
      description: "Perfect for individual traders",
      features: [
        "Up to 5 trading strategies",
        "Basic market data",
        "Email support",
        "Standard analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for active traders",
      features: [
        "Up to 20 trading strategies",
        "Advanced market data",
        "Priority support",
        "Custom indicators",
        "API access",
        "Risk management tools"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$18,000",
      period: "/month",
      description: "For institutional clients",
      features: [
        "Unlimited strategies",
        "Institutional data feeds",
        "24/7 dedicated support",
        "Custom algorithms",
        "White-label options",
        "Advanced compliance",
        "On-site training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const tradingInstruments = [
    {
      category: "Stocks & ETFs",
      instruments: ["US Equities", "International Stocks", "Sector ETFs", "Index Funds", "Dividend Stocks"],
      icon: TrendingUp
    },
    {
      category: "Forex & Commodities",
      instruments: ["Major Currency Pairs", "Precious Metals", "Energy Futures", "Agricultural Products", "Cryptocurrencies"],
      icon: DollarSign
    },
    {
      category: "Options & Derivatives",
      instruments: ["Stock Options", "Index Options", "Futures Contracts", "Swaps", "Structured Products"],
      icon: Target
    },
    {
      category: "Fixed Income",
      instruments: ["Government Bonds", "Corporate Bonds", "Municipal Bonds", "Treasury Bills", "Money Market"],
      icon: Shield
    }
  ];

  const performanceMetrics = [
    { metric: "Average Annual Return", value: "18.5%", icon: TrendingUp },
    { metric: "Sharpe Ratio", value: "1.8", icon: Star },
    { metric: "Maximum Drawdown", value: "8.2%", icon: AlertTriangle },
    { metric: "Win Rate", value: "73%", icon: CheckCircle },
    { metric: "Risk-Adjusted Return", value: "15.2%", icon: Award },
    { metric: "Execution Speed", value: "<1ms", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI-Powered Financial Trading & Analytics Platform | Zion Tech Group"
        description="Revolutionize your trading with our AI-powered financial platform. Advanced algorithms, real-time analytics, and automated portfolio management for maximum returns."
        keywords="AI trading, financial analytics, automated trading, portfolio management, trading algorithms, financial platform"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-zion-blue to-emerald-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-900/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>AI-Powered Financial Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Trading &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Analytics Platform
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your trading strategy with intelligent algorithms, real-time analytics, and automated 
              portfolio management. Maximize returns while minimizing risk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Trading Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with institutional-grade trading infrastructure to deliver 
              superior performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Instruments Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Trading Instruments
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Access global markets with our extensive range of trading instruments and asset classes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tradingInstruments.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.instruments.map((instrument, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{instrument}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Performance Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI trading platform consistently delivers superior returns with managed risk.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 text-center hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{metric.metric}</h3>
                <p className="text-lg text-green-400 font-bold">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the trading plan that fits your investment strategy. All plans include our core AI trading features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-400 shadow-lg shadow-green-500/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/25'
                    : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of traders already using our AI-powered platform to maximize their returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}