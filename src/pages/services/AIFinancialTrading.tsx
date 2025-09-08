import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Zap, 
  Brain, 
  CheckCircle,
  BarChart3,
  Target,
  Clock,
  Users,
  Globe,
  Lock,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Activity,
  PieChart,
  LineChart,
  AlertTriangle,
  Settings,
  Database,
  Network
} from 'lucide-react';

export default function AIFinancialTrading() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze market patterns and predict trends with 85% accuracy'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Trading',
      description: 'Execute trades in milliseconds with our ultra-low latency infrastructure'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Intelligent risk assessment and automated stop-loss mechanisms'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Optimization',
      description: 'AI-driven portfolio rebalancing and diversification strategies'
    },
    {
      icon: Globe,
      title: 'Multi-Market Access',
      description: 'Trade across global markets with unified interface and real-time data'
    },
    {
      icon: Zap,
      title: 'Automated Strategies',
      description: 'Custom algorithmic trading strategies with backtesting capabilities'
    }
  ];

  const tradingStrategies = [
    {
      name: 'Momentum Trading',
      description: 'AI identifies momentum shifts and executes trades at optimal entry/exit points',
      successRate: '87%',
      avgReturn: '12.5%'
    },
    {
      name: 'Arbitrage Trading',
      description: 'Real-time price difference detection across multiple exchanges',
      successRate: '94%',
      avgReturn: '8.2%'
    },
    {
      name: 'Mean Reversion',
      description: 'Statistical analysis identifies overbought/oversold conditions',
      successRate: '82%',
      avgReturn: '15.3%'
    },
    {
      name: 'Sentiment Analysis',
      description: 'NLP analysis of news and social media for market sentiment',
      successRate: '79%',
      avgReturn: '18.7%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for individual traders',
      features: [
        'Up to $100K trading volume',
        'Basic AI strategies',
        'Real-time market data',
        'Mobile app access',
        'Email support',
        'Basic risk management'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for active traders',
      features: [
        'Up to $1M trading volume',
        'Advanced AI strategies',
        'Custom algorithms',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Portfolio optimization'
      ],
      popular: true
    },
    {
      name: 'Institutional',
      price: '$3,999',
      period: '/month',
      description: 'For hedge funds and institutions',
      features: [
        'Unlimited trading volume',
        'Full AI suite',
        'Custom development',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '85% Success Rate',
      description: 'AI algorithms consistently outperform traditional trading methods'
    },
    {
      icon: Clock,
      title: '24/7 Trading',
      description: 'Automated trading never sleeps, capturing opportunities globally'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Intelligent risk management reduces potential losses by 60%'
    },
    {
      icon: DollarSign,
      title: 'Higher Returns',
      description: 'Average 15-25% annual returns with proper risk management'
    }
  ];

  const markets = [
    'Stocks & ETFs',
    'Forex (FX)',
    'Cryptocurrencies',
    'Commodities',
    'Options & Futures',
    'Bonds & Fixed Income'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Financial Trading Platform - Zion Tech Group"
        description="Revolutionary AI-powered financial trading platform with 85% success rate, real-time analysis, and automated strategies across global markets."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial Trading Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your trading with AI-powered analysis, automated strategies, and real-time execution 
              across global markets. Achieve 85% success rate with intelligent risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300"
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI trading platform combines advanced machine learning with institutional-grade infrastructure 
              to deliver unprecedented trading performance.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven AI Trading Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI algorithms have been backtested across multiple market cycles and consistently deliver 
              superior returns with controlled risk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{strategy.name}</h3>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">{strategy.successRate}</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{strategy.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-blue-400 font-semibold">{strategy.avgReturn}</div>
                  <div className="text-sm text-gray-400">Avg Annual Return</div>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Global Market Access
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trade across multiple asset classes and global markets from a single, unified platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {markets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 text-center hover:border-slate-600 transition-all duration-300"
              >
                <div className="text-white font-semibold">{market}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your trading volume and requirements. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/request-quote"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI trading platform delivers measurable improvements across all key performance metrics.
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start AI-Powered Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders already using AI to maximize their returns and minimize risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}