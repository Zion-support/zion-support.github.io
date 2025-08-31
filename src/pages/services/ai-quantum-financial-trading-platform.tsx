import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Zap, Globe, Users, BarChart3, 
  Lock, Cpu, Network, Eye, AlertTriangle, CheckCircle,
  ArrowRight, Star, Award, Phone, Mail, MapPin, TrendingUp,
  DollarSign, Shield, Target, Gauge, Clock, PieChart
} from 'lucide-react';

const AIQuantumFinancialTradingPlatform: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Power",
      description: "Access to 1000+ qubit quantum computers for complex financial modeling"
    },
    {
      icon: Brain,
      title: "AI-Powered Trading",
      description: "Advanced machine learning algorithms for market prediction and analysis"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography to protect against future quantum threats"
    },
    {
      icon: Network,
      title: "Global Market Access",
      description: "Real-time trading across 150+ global markets and exchanges"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "ML-powered market forecasting with 95%+ accuracy rates"
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Advanced risk assessment and portfolio optimization algorithms"
    }
  ];

  const pricingTiers = [
    {
      name: "Professional Trader",
      price: "$5,000",
      period: "/month",
      description: "Perfect for individual traders and small investment firms",
      features: [
        "Up to $1M trading volume",
        "Basic quantum algorithms",
        "AI market analysis",
        "Risk management tools",
        "24/7 market access",
        "Basic analytics",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Institutional Trader",
      price: "$25,000",
      period: "/month",
      description: "Ideal for hedge funds and institutional investors",
      features: [
        "Up to $100M trading volume",
        "Advanced quantum algorithms",
        "Custom AI models",
        "Advanced risk management",
        "Real-time analytics",
        "Priority support",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise Trading",
      price: "$100,000",
      period: "/month",
      description: "For large financial institutions and multinational corporations",
      features: [
        "Unlimited trading volume",
        "Custom quantum solutions",
        "Dedicated AI infrastructure",
        "Enterprise risk management",
        "Advanced analytics",
        "White-label platform",
        "Dedicated support team",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Quantum Advantage",
      description: "Solve complex financial problems 1000x faster than classical computers",
      icon: Atom
    },
    {
      title: "AI Predictions",
      description: "95%+ accuracy in market forecasting and trend prediction",
      icon: Brain
    },
    {
      title: "Risk Reduction",
      description: "Advanced algorithms reduce portfolio risk by up to 60%",
      icon: Shield
    },
    {
      title: "Global Access",
      description: "Trade across 150+ markets with real-time execution",
      icon: Globe
    }
  ];

  const tradingStrategies = [
    {
      title: "Quantum Arbitrage",
      description: "Identify and execute arbitrage opportunities across global markets in milliseconds",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Market Making",
      description: "Intelligent market making with dynamic spread optimization",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio Optimization",
      description: "Quantum-powered portfolio optimization for maximum returns with minimal risk",
      icon: PieChart,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "High-Frequency Trading",
      description: "Ultra-low latency trading with quantum-enhanced execution algorithms",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Risk Management",
      description: "Real-time risk assessment and automated position sizing",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Sentiment Analysis",
      description: "AI-powered market sentiment analysis for informed trading decisions",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Financial Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Financial
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Trading Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your trading with the world's first AI-powered quantum financial platform. 
              Access 1000+ qubit quantum computers for unprecedented market analysis and trading execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Watch Demo
              </button>
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
              Revolutionary Trading Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced artificial intelligence 
              to deliver the most powerful financial trading solution ever created.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Trading Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how our quantum-AI platform can transform your trading approach 
              with strategies that were previously impossible to execute.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${strategy.color} rounded-lg flex items-center justify-center mb-4`}>
                  <strategy.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{strategy.title}</h3>
                <p className="text-gray-300">{strategy.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Quantum Trading Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of financial trading with proven results 
              and industry-leading quantum-AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your trading volume and quantum computing requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Trade with Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to learn more about accessing the world's most advanced 
              quantum financial trading platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialTradingPlatform;