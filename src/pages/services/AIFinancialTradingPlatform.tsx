import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Shield, 
  Zap, 
  Brain, 
  Target, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Activity,
  PieChart,
  LineChart,
  UserCheck,
  Heart,
  Star,
  Award,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Server,
  Lock,
  Eye,
  Settings,
  Bell,
  Mail,
  Phone,
  MapPin,
  Building2,
  Users,
  Target,
  Zap,
  TrendingDown,
  ArrowUpDown,
  CandlestickChart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIFinancialTradingPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Trading Algorithms",
      description: "Advanced machine learning algorithms that analyze market data and execute trades with high precision."
    },
    {
      icon: BarChart3,
      title: "Real-time Market Analysis",
      description: "Live market data feeds with AI-powered pattern recognition and trend analysis across multiple asset classes."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast market movements, identify trading opportunities, and predict price trends with high accuracy."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk management tools with AI-powered position sizing and stop-loss optimization."
    },
    {
      icon: Zap,
      title: "Automated Trading",
      description: "Fully automated trading systems that execute strategies 24/7 without emotional bias."
    },
    {
      icon: Globe,
      title: "Multi-Asset Support",
      description: "Trade stocks, forex, cryptocurrencies, commodities, and derivatives from a single platform."
    }
  ];

  const tradingModules = [
    {
      icon: Activity,
      title: "Algorithmic Trading",
      description: "Custom trading algorithms that execute complex strategies automatically based on market conditions"
    },
    {
      icon: LineChart,
      title: "Technical Analysis",
      description: "AI-powered technical indicators, chart patterns, and market structure analysis"
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Intelligent portfolio optimization with risk-adjusted returns and diversification strategies"
    },
    {
      icon: UserCheck,
      title: "Sentiment Analysis",
      description: "Real-time analysis of market sentiment using news, social media, and social trading data"
    },
    {
      icon: Target,
      title: "Backtesting Engine",
      description: "Comprehensive backtesting of trading strategies using historical data and Monte Carlo simulations"
    },
    {
      icon: CandlestickChart,
      title: "Market Microstructure",
      description: "Advanced analysis of order flow, liquidity, and market microstructure patterns"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for individual traders",
      features: [
        "Up to $100K trading volume/month",
        "Basic AI trading algorithms",
        "Standard market data feeds",
        "Email support",
        "Basic risk management",
        "Mobile app access"
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for active traders",
      features: [
        "Up to $1M trading volume/month",
        "Advanced AI algorithms",
        "Premium market data",
        "Priority support",
        "Advanced risk management",
        "API access",
        "Custom strategies",
        "Portfolio analytics"
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For institutional traders",
      features: [
        "Unlimited trading volume",
        "Custom AI models",
        "Institutional data feeds",
        "Dedicated account manager",
        "Advanced analytics",
        "White-label solutions",
        "On-premise options",
        "SLA guarantees"
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increase Trading Profits",
      description: "AI-powered algorithms identify profitable trading opportunities and execute trades with precision.",
      icon: TrendingUp
    },
    {
      title: "Reduce Trading Risks",
      description: "Advanced risk management tools protect your capital and optimize position sizing.",
      icon: Shield
    },
    {
      title: "Eliminate Emotional Bias",
      description: "Automated trading systems remove human emotions and maintain consistent strategy execution.",
      icon: Brain
    },
    {
      title: "24/7 Market Coverage",
      description: "Trade around the clock across global markets without missing opportunities.",
      icon: Globe
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Individual Traders",
      description: "Access institutional-grade AI trading tools and analytics"
    },
    {
      icon: Building2,
      title: "Hedge Funds",
      description: "Deploy sophisticated AI strategies across multiple asset classes"
    },
    {
      icon: DollarSign,
      title: "Asset Managers",
      description: "Optimize portfolio performance with AI-driven insights"
    },
    {
      icon: TrendingUp,
      title: "Day Traders",
      description: "Execute high-frequency strategies with millisecond precision"
    },
    {
      icon: Globe,
      title: "International Traders",
      description: "Access global markets with AI-powered analysis and execution"
    },
    {
      icon: Target,
      title: "Quantitative Traders",
      description: "Develop and backtest custom AI trading strategies"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Financial Trading Platform - Zion Tech Group"
        description="Advanced AI-powered financial trading platform for algorithmic trading, market analysis, and automated portfolio management with institutional-grade tools."
        canonical="/services/ai-financial-trading-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    AI Financial Trading Platform
                  </span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
                  Revolutionize your trading with AI-powered algorithms, real-time market analysis, 
                  and automated portfolio management across all asset classes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/request-quote"
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-slate-600 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:border-green-500"
                  >
                    Request Demo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful Features for Financial Trading
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI-powered platform provides institutional-grade trading tools and analytics for all market participants.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Modules Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Trading Modules
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Get access to advanced trading tools and analytics that give you the edge in financial markets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tradingModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{module.title}</h3>
                  <p className="text-slate-300">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your trading volume and access institutional-grade tools at competitive prices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-green-500/50 bg-green-500/5' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/request-quote"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transform hover:scale-105'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose AI Financial Trading?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Transform your trading performance with data-driven insights and AI-powered execution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Perfect for Every Trader
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our platform is designed to meet the unique needs of traders across all experience levels and strategies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-slate-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Revolutionize Your Trading?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join thousands of traders who have transformed their performance with AI-powered trading tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-600 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:border-green-500"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-slate-300 hover:text-green-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-green-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-slate-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialTradingPlatform;