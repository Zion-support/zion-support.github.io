import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Cpu, 
  Database, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Handshake,
  Code,
  Server,
  Network,
  Smartphone,
  Monitor,
  HardDrive,
  FileText,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Zap,
  Users,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Eye,
  Lock,
  Globe,
  Cloud,
  Settings,
  AlertTriangle,
  Activity as ActivityIcon
} from 'lucide-react';

export default function QuantumAIFinancialTradingPlatform() {
  const features = [
    {
      title: "Quantum Computing Algorithms",
      description: "Leverage quantum computing power for complex financial modeling and optimization",
      icon: Atom,
      benefits: ["Quantum portfolio optimization", "Risk assessment acceleration", "Market prediction models"]
    },
    {
      title: "AI-Powered Market Analysis",
      description: "Advanced machine learning algorithms that analyze market patterns and trends",
      icon: Brain,
      benefits: ["Real-time market insights", "Pattern recognition", "Predictive analytics"]
    },
    {
      title: "High-Frequency Trading",
      description: "Ultra-fast execution with microsecond latency for competitive advantage",
      icon: Zap,
      benefits: ["Sub-millisecond execution", "Low latency infrastructure", "High throughput processing"]
    },
    {
      title: "Risk Management System",
      description: "Comprehensive risk assessment and management across all trading activities",
      icon: Shield,
      benefits: ["Real-time risk monitoring", "Portfolio stress testing", "Compliance automation"]
    }
  ];

  const tradingInstruments = [
    {
      name: "Stocks & ETFs",
      description: "Trade equities and exchange-traded funds with advanced analytics",
      icon: TrendingUp,
      features: ["Real-time pricing", "Technical analysis", "Fundamental data"]
    },
    {
      name: "Options & Futures",
      description: "Advanced derivatives trading with sophisticated risk management",
      icon: BarChart3,
      features: ["Options strategies", "Futures contracts", "Risk modeling"]
    },
    {
      name: "Forex Trading",
      description: "Global currency trading with AI-powered exchange rate predictions",
      icon: Globe,
      features: ["Major pairs", "Cross rates", "Economic indicators"]
    },
    {
      name: "Cryptocurrency",
      description: "Digital asset trading with blockchain integration",
      icon: Coins,
      features: ["Major cryptocurrencies", "DeFi tokens", "Smart contracts"]
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "For individual traders and small funds",
      features: [
        "Up to $1M trading volume",
        "Basic quantum algorithms",
        "Standard market data",
        "Email support",
        "Basic risk management"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Institutional",
      price: "$12,999",
      period: "/month",
      description: "For hedge funds and investment firms",
      features: [
        "Up to $100M trading volume",
        "Advanced quantum algorithms",
        "Premium market data",
        "Priority support",
        "Advanced risk management",
        "Custom strategies"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large financial institutions",
      features: [
        "Unlimited trading volume",
        "Custom quantum models",
        "Real-time market data",
        "24/7 dedicated support",
        "White-label solutions",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const performanceMetrics = [
    {
      metric: "Execution Speed",
      value: "< 1ms",
      description: "Ultra-low latency trading execution"
    },
    {
      metric: "Success Rate",
      value: "99.7%",
      description: "High success rate in trade execution"
    },
    {
      metric: "Risk Reduction",
      value: "45%",
      description: "Average reduction in portfolio risk"
    },
    {
      metric: "ROI Improvement",
      value: "32%",
      description: "Average improvement in returns"
    }
  ];

  const useCases = [
    {
      industry: "Hedge Funds",
      description: "Advanced portfolio optimization and risk management for institutional investors",
      results: "45% improvement in risk-adjusted returns"
    },
    {
      industry: "Investment Banks",
      description: "High-frequency trading and market making with quantum computing advantage",
      results: "60% faster execution times"
    },
    {
      industry: "Asset Managers",
      description: "AI-powered asset allocation and rebalancing strategies",
      results: "38% reduction in portfolio volatility"
    },
    {
      industry: "Retail Traders",
      description: "Professional-grade trading tools with AI assistance",
      results: "25% improvement in trading performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum AI Trading Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum AI
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Financial Trading
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your trading with the world's first quantum computing-powered AI trading platform. 
              Experience unprecedented speed, accuracy, and profitability in financial markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 right-20 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Unmatched Performance
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our quantum AI platform delivers exceptional results that traditional trading systems cannot match.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ActivityIcon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                <p className="text-zion-slate-light text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Trading Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of trading with our cutting-edge quantum AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Instruments Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Trading Instruments
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Trade across multiple asset classes with our unified quantum AI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tradingInstruments.map((instrument, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{instrument.name}</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <instrument.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">{instrument.description}</p>
                
                <ul className="space-y-2">
                  {instrument.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how our quantum AI trading platform transforms operations across the financial industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">{useCase.description}</p>
                
                <div className="flex items-center text-green-400 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span>{useCase.results}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect trading plan for your needs. All plans include our core quantum AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 shadow-2xl shadow-green-500/20' 
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

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'bg-zion-purple/20 text-green-400 border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Your Trading?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join the elite traders already using our quantum AI platform to gain unprecedented 
              advantages in financial markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Call Us</h3>
              <p className="text-green-400 font-semibold">+1 302 464 0950</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
              <p className="text-green-400 font-semibold">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Visit Us</h3>
              <p className="text-green-400 font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}