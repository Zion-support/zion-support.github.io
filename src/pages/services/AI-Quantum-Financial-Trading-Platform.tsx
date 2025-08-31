import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Brain, 
  Atom, 
  Shield, 
  BarChart3, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Lock,
  Eye,
  Clock,
  Users,
  Star,
  Target,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIQuantumFinancialTradingPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum AI Algorithms",
      description: "Advanced quantum computing algorithms for market prediction and optimization"
    },
    {
      icon: Atom,
      title: "Quantum Entanglement",
      description: "Leverage quantum entanglement for real-time market correlation analysis"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered market trend prediction with quantum-enhanced accuracy"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable quantum encryption for secure financial transactions"
    },
    {
      icon: BarChart3,
      title: "Portfolio Optimization",
      description: "Quantum-optimized portfolio management and risk assessment"
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-fast quantum computing for microsecond trading decisions"
    }
  ];

  const tradingStrategies = [
    {
      title: "Quantum Arbitrage",
      description: "Identify and exploit market inefficiencies across global exchanges",
      icon: Globe,
      successRate: "94.7%"
    },
    {
      title: "Sentiment Analysis",
      description: "AI-powered social media and news sentiment analysis for trading signals",
      icon: Brain,
      successRate: "89.3%"
    },
    {
      title: "Risk Management",
      description: "Advanced risk assessment using quantum probability calculations",
      icon: Shield,
      successRate: "96.2%"
    },
    {
      title: "Portfolio Rebalancing",
      description: "Automated portfolio optimization using quantum algorithms",
      icon: PieChart,
      successRate: "91.8%"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional Trader",
      price: "$5,000",
      period: "/month",
      description: "For individual traders and small funds",
      features: [
        "Up to $1M trading volume",
        "Basic quantum algorithms",
        "Standard market data",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      cta: "Start Trading",
      popular: false
    },
    {
      name: "Institutional",
      price: "$25,000",
      period: "/month",
      description: "For hedge funds and institutional investors",
      features: [
        "Up to $100M trading volume",
        "Advanced quantum algorithms",
        "Real-time market data",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "White-label solutions"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$100,000",
      period: "/month",
      description: "For large financial institutions",
      features: [
        "Unlimited trading volume",
        "Custom quantum algorithms",
        "All market data feeds",
        "24/7 dedicated support",
        "Full customization",
        "On-premise deployment",
        "SLA guarantees",
        "Compliance reporting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const performanceMetrics = [
    { metric: "Average Return", value: "23.7%", change: "+5.2%", positive: true },
    { metric: "Sharpe Ratio", value: "2.8", change: "+0.4", positive: true },
    { metric: "Max Drawdown", value: "8.3%", change: "-2.1%", positive: true },
    { metric: "Win Rate", value: "76.4%", change: "+3.7%", positive: true }
  ];

  return (
    <>
      <SEO 
        title="AI Quantum Financial Trading Platform | Zion Tech Group"
        description="Revolutionize your trading with our AI Quantum Financial Trading Platform. Quantum algorithms, predictive analytics, and ultra-fast execution for maximum returns."
        keywords="quantum trading, AI trading, financial technology, quantum computing, algorithmic trading, fintech"
        canonical="https://ziontechgroup.com/services/ai-quantum-financial-trading-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Quantum Trading</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Quantum Financial
                <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Trading Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your trading with quantum computing and AI. 
                Experience unprecedented accuracy, speed, and returns in financial markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Start Trading Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center space-x-2 border border-green-500/30 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
                  <span>View Demo</span>
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 bg-slate-800/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-sm text-gray-400 mb-2">{metric.metric}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className={`text-sm ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum-Powered Trading Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines the power of quantum computing with advanced AI 
                to deliver unprecedented trading capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Strategies Section */}
        <section className="py-20 bg-slate-800/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Trading Strategies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our proven quantum-enhanced trading strategies that deliver 
                consistent returns across all market conditions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tradingStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <strategy.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{strategy.successRate}</div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{strategy.title}</h3>
                  <p className="text-gray-300 text-lg">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Competitive Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your trading volume and requirements. 
                Scale up as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-green-500/50 bg-gradient-to-br from-slate-800/80 to-green-900/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-500/30 text-green-400 hover:bg-green-500/10'
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
        <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Dominate the Markets?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the quantum trading revolution and experience unprecedented 
                accuracy and returns in financial markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 border border-green-500/30 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
                >
                  <span>Schedule Demo</span>
                  <Clock className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIQuantumFinancialTradingPlatform;