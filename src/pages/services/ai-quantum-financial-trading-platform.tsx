import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Coins,
  Activity,
  BarChart,
  Target,
  Handshake,
  Eye,
  Workflow,
  Bot,
  HardDrive,
  Building2,
  HelpCircle,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Timer,
  AlertTriangle,
  RefreshCw,
  PieChart,
  LineChart,
  CandlestickChart,
  Wallet,
  CreditCard,
  PiggyBank,
  TrendingDown,
  Percent,
  Calculator,
  Clock,
  Calendar,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

export default function AIQuantumFinancialTradingPlatform() {
  const features = [
    {
      title: 'Quantum AI Algorithms',
      description: 'Advanced quantum computing algorithms for market prediction and optimization',
      icon: Atom,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Real-time Market Analysis',
      description: 'Instant market data processing with AI-powered insights and predictions',
      icon: BarChart3,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Risk Management AI',
      description: 'Intelligent risk assessment and portfolio optimization',
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Multi-Asset Trading',
      description: 'Trade stocks, forex, crypto, and commodities with unified platform',
      icon: Coins,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models for market trend prediction',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Automated Trading',
      description: 'AI-driven trading bots with customizable strategies',
      icon: Bot,
      color: 'from-teal-600 to-blue-600'
    }
  ];

  const tradingInstruments = [
    {
      name: 'Stocks & ETFs',
      description: 'Global equity markets with real-time data',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Forex Trading',
      description: 'Major and exotic currency pairs',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cryptocurrency',
      description: 'Digital assets with 24/7 trading',
      icon: Coins,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Commodities',
      description: 'Gold, oil, and other raw materials',
      icon: HardDrive,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Options & Futures',
      description: 'Derivatives trading with advanced strategies',
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Bonds',
      description: 'Fixed income securities',
      icon: ShieldCheck,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Trader Basic',
      price: 199,
      period: '/month',
      description: 'Perfect for individual traders',
      features: [
        'Basic AI trading signals',
        'Real-time market data',
        'Mobile trading app',
        'Email support',
        'Basic risk management',
        '5 trading strategies'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Trader Pro',
      price: 499,
      period: '/month',
      description: 'Ideal for active traders',
      features: [
        'Advanced AI algorithms',
        'Quantum computing access',
        'Priority market data',
        'Phone support',
        'Advanced risk management',
        'Unlimited strategies',
        'API access',
        'Custom indicators'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Institutional',
      price: 1999,
      period: '/month',
      description: 'For professional trading firms',
      features: [
        'Custom AI models',
        'Dedicated quantum resources',
        'Institutional data feeds',
        'Dedicated support manager',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: 'Higher Returns',
      description: 'AI-powered strategies typically outperform traditional methods',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Risk Reduction',
      description: 'Advanced risk management reduces portfolio volatility',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '24/7 Trading',
      description: 'Automated trading never sleeps',
      icon: Clock,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Emotion-Free',
      description: 'AI removes human emotions from trading decisions',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Average Return',
      value: '23.7%',
      change: '+5.2%',
      trend: 'up',
      description: 'Annual portfolio performance'
    },
    {
      metric: 'Risk-Adjusted Return',
      value: '1.85',
      change: '+0.3',
      trend: 'up',
      description: 'Sharpe ratio improvement'
    },
    {
      metric: 'Max Drawdown',
      value: '-8.3%',
      change: '-2.1%',
      trend: 'down',
      description: 'Reduced portfolio risk'
    },
    {
      metric: 'Win Rate',
      value: '68.4%',
      change: '+4.7%',
      trend: 'up',
      description: 'Successful trade percentage'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="AI Quantum Financial Trading Platform | Zion Tech Group"
        description="Revolutionize your trading with AI-powered quantum computing. Advanced algorithms, real-time analysis, and automated trading strategies."
        keywords="AI trading, quantum computing, financial trading, automated trading, risk management, market analysis"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Financial Trading Platform
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Experience the future of trading with AI-powered quantum computing. 
              Get real-time market insights, automated trading strategies, and superior risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 text-center"
              >
                <h3 className="text-sm font-medium text-zion-slate-light mb-2">{metric.metric}</h3>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </div>
                <p className="text-xs text-zion-slate-light mt-2">{metric.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Trading Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with quantum computing to deliver 
              unprecedented trading capabilities and market insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Instruments */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Trading Instruments
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Access global markets with our comprehensive suite of trading instruments 
              and real-time data feeds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingInstruments.map((instrument, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${instrument.color} rounded-lg flex items-center justify-center mb-4`}>
                  <instrument.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{instrument.name}</h3>
                <p className="text-zion-slate-light">{instrument.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Trading Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Select the perfect plan for your trading needs. All plans include 
              our core AI features and real-time market data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue/30 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-zion-cyan/50 ring-2 ring-zion-cyan/20' 
                    : 'border-zion-purple/30'
                } hover:border-zion-cyan/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zion-slate-light ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                      : 'bg-zion-blue/50 text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Quantum Trading?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the advantages of AI-powered quantum computing in financial markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
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
              Join thousands of traders already using AI Quantum Trading to gain a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}