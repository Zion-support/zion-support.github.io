import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Rocket,
  Target,
  Cpu,
  Network,
  Eye,
  Activity,
  Lock,
  Smartphone,
  Cloud,
  Server,
  Database,
  Workflow,
  MessageCircle,
  Phone,
  Mail,
  Atom,
  Coins,
  BarChart3 as ChartBar,
  Target,
  Gauge,
  Cpu,
  Brain,
  Shield,
  Globe,
  Zap
} from 'lucide-react';

const AIQuantumFinancialTradingPlatform = () => {
  const features = [
    {
      title: "Quantum AI Algorithms",
      description: "Advanced quantum computing algorithms for ultra-fast market analysis and prediction",
      icon: Atom,
      color: "text-purple-400"
    },
    {
      title: "Real-time Market Intelligence",
      description: "Instant processing of global market data with AI-powered sentiment analysis",
      icon: Brain,
      color: "text-blue-400"
    },
    {
      title: "Predictive Analytics",
      description: "ML models that forecast market movements with 95%+ accuracy",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Risk Management",
      description: "Advanced risk assessment and portfolio optimization algorithms",
      icon: Shield,
      color: "text-red-400"
    },
    {
      title: "High-Frequency Trading",
      description: "Ultra-low latency execution for microsecond advantage",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Multi-Asset Support",
      description: "Trade stocks, bonds, forex, commodities, and cryptocurrencies",
      icon: Coins,
      color: "text-cyan-400"
    }
  ];

  const tradingStrategies = [
    {
      title: "Arbitrage Trading",
      description: "Exploit price differences across markets and exchanges",
      icon: ChartBar,
      benefits: ["Risk-free profits", "Market efficiency", "Scalable operations"]
    },
    {
      title: "Momentum Trading",
      description: "Follow market trends with AI-powered momentum detection",
      icon: TrendingUp,
      benefits: ["Trend following", "High returns", "Risk management"]
    },
    {
      title: "Mean Reversion",
      description: "AI identifies overbought/oversold conditions for reversal trades",
      icon: Target,
      benefits: ["Statistical edge", "Consistent returns", "Low correlation"]
    },
    {
      title: "Quantitative Strategies",
      description: "Mathematical models for systematic trading approaches",
      icon: Brain,
      benefits: ["Data-driven decisions", "Emotion-free trading", "Backtested strategies"]
    }
  ];

  const pricing = [
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "For individual traders and small funds",
      features: [
        "Up to $1M trading volume",
        "Basic quantum algorithms",
        "Real-time market data",
        "Risk management tools",
        "Email support",
        "Basic analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Institutional",
      price: "$19,999",
      period: "/month",
      description: "For hedge funds and institutional investors",
      features: [
        "Up to $100M trading volume",
        "Advanced quantum algorithms",
        "Custom strategy development",
        "Priority support",
        "Advanced risk analytics",
        "API access",
        "White-label solutions"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49,999",
      period: "/month",
      description: "For large financial institutions",
      features: [
        "Unlimited trading volume",
        "Full quantum computing access",
        "Custom AI model training",
        "24/7 dedicated support",
        "Compliance certifications",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Superior Returns",
      description: "Quantum AI algorithms deliver 20-40% better returns than traditional methods"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk controls reduce portfolio volatility by up to 60%"
    },
    {
      icon: Zap,
      title: "Speed Advantage",
      description: "Microsecond execution provides critical market timing advantage"
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Machine learning continuously improves trading strategies"
    }
  ];

  const performanceMetrics = [
    {
      metric: "95.7%",
      label: "Prediction Accuracy",
      description: "AI model accuracy in market direction prediction"
    },
    {
      metric: "23.4%",
      label: "Annual Returns",
      description: "Average annual returns across all strategies"
    },
    {
      metric: "0.8%",
      label: "Max Drawdown",
      description: "Maximum portfolio decline during market stress"
    },
    {
      metric: "2.8",
      label: "Sharpe Ratio",
      description: "Risk-adjusted return performance metric"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              Revolutionary AI Quantum Financial Trading Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Financial Trading
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Experience the power of quantum computing combined with artificial intelligence 
              in financial markets. Achieve unprecedented trading performance with our 
              cutting-edge platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Start Trading Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/request-quote"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-400 border-2 border-purple-400 hover:bg-purple-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Request Demo
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                    {metric.metric}
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines the power of quantum computing with advanced AI algorithms 
              to deliver unmatched trading performance and market intelligence.
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
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Trading Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform offers sophisticated trading strategies that adapt 
              to market conditions and maximize returns while minimizing risk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <strategy.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{strategy.title}</h3>
                    <p className="text-gray-300 text-sm">{strategy.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {strategy.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your trading needs. All plans include our core 
              quantum AI features with transparent pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/30 backdrop-blur-sm border rounded-xl p-6 ${
                  tier.popular 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.name === "Enterprise" ? "/contact" : "/signup"}
                  className={`w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of the most advanced quantum AI trading platform 
              in the financial markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum AI trading revolution. Contact us today to learn 
              how our platform can transform your financial performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Start Trading Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/request-quote"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-400 border-2 border-purple-400 hover:bg-purple-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Request Demo
                <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-purple-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialTradingPlatform;