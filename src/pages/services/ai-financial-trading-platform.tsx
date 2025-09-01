import React from 'react';
import { motion } from 'framer-motion';
import {

  TrendingUp, 
  DollarSign, 
  Brain, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Clock,
  Target,
  Zap,
  Eye,
  Lock,
  Globe,
  Activity,
  LineChart,
  PieChart,
  AlertTriangle,
  Settings,
  Database,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIFinancialTradingPlatform = () => {

  const features = [
    {

      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Market Analysis",
      description: "Advanced machine learning algorithms analyze market data in real-time to identify profitable trading opportunities with 85% accuracy."
    },
    {

      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Trading Signals",
      description: "Get real-time trading signals based on AI analysis of market patterns, news sentiment, and technical indicators."
    },
    {

      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Intelligent risk assessment and portfolio protection with automated stop-loss and position sizing recommendations."
    },
    {

      icon: <Users className="w-6 h-6" />,
      title: "Portfolio Optimization",
      description: "AI-driven portfolio rebalancing and asset allocation based on market conditions and your risk tolerance."
    },
    {

      icon: <Database className="w-6 h-6" />,
      title: "Multi-Market Access",
      description: "Trade stocks, forex, cryptocurrencies, and commodities across global markets from a single platform."
    },
    {

      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive performance tracking, backtesting capabilities, and detailed trading analytics."
    }
  ];

  const pricingPlans = [
    {

      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for individual traders and beginners",
      features: [
        "Basic AI trading signals",
        "Up to 10 trades/month",
        "Standard market data",
        "Email support",
        "Basic risk management",
        "Mobile app access"
      ],
      popular: false
    },
    {

      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for active traders and professionals",
      features: [
        "Advanced AI algorithms",
        "Unlimited trades",
        "Real-time market data",
        "Priority support",
        "Advanced risk management",
        "Portfolio optimization",
        "Backtesting tools",
        "API access"
      ],
      popular: true
    },
    {

      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For institutional traders and hedge funds",
      features: [
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced analytics",
        "Multi-account management",
        "Custom integrations",
        "Training and consultation",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {

      icon: <TrendingUp className="w-8 h-8" />,
      title: "Higher Returns",
      description: "AI-powered strategies deliver 20-40% better returns than traditional trading methods"
    },
    {

      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Trading",
      description: "Automated trading that works around the clock, never missing market opportunities"
    },
    {

      icon: <Shield className="w-8 h-8" />,
      title: "Risk Reduction",
      description: "Intelligent risk management reduces portfolio volatility by up to 60%"
    },
    {

      icon: <Zap className="w-8 h-8" />,
      title: "Speed & Efficiency",
      description: "Execute trades in milliseconds with AI-powered decision making"
    }
  ];

  const tradingMarkets = [
    {

      icon: <TrendingUp className="w-8 h-8" />,
      title: "Stocks",
      description: "Trade global equities with AI-powered analysis and recommendations"
    },
    {

      icon: <DollarSign className="w-8 h-8" />,
      title: "Forex",
      description: "Currency trading with real-time market analysis and automated strategies"
    },
    {

      icon: <Activity className="w-8 h-8" />,
      title: "Cryptocurrencies",
      description: "Digital asset trading with advanced blockchain analytics and AI insights"
    },
    {

      icon: <BarChart3 className="w-8 h-8" />,
      title: "Commodities",
      description: "Trade precious metals, oil, and agricultural products with AI guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-green-500 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Financial
                <span className="text-green-500 block">Trading Platform</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your trading with AI-powered market analysis, predictive signals, 
              and automated portfolio management. Trade smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Start Trading Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-green-500 transition-colors"
              >
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
              Advanced Trading Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with financial expertise to deliver 
              insights that maximize your trading performance and minimize risk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-green-500 transition-colors"
              >
                <div className="text-green-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Markets Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trade Multiple Markets
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access global financial markets with AI-powered analysis and automated trading strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingMarkets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-green-500 mb-4 flex justify-center">{market.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{market.title}</h3>
                <p className="text-gray-300">{market.description}</p>
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
              Why Traders Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of trading with measurable results and proven performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-green-500 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your trading style and experience level. 
              All plans include our core AI capabilities and market access.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800 p-8 rounded-lg border ${

                  plan.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-slate-700'
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${

                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start AI-Powered Trading?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of traders who have already improved their performance with AI analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Phone className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialTradingPlatform;