import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Star, Globe, Lock, Cpu, Target, Award, BarChart3, DollarSign, Rocket, Atom } from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIQuantumFinancialTrading: React.FC = () => {
  const features = [
    'Quantum-enhanced AI algorithms for market prediction',
    'Real-time multi-asset trading across global markets',
    'Advanced risk management with quantum risk modeling',
    'High-frequency trading with microsecond execution',
    'Portfolio optimization using quantum computing principles',
    'Regulatory compliance and audit trail automation',
    'Machine learning models for pattern recognition',
    'Real-time market sentiment analysis',
    'Automated trading strategies with human oversight',
    'Multi-exchange connectivity and arbitrage detection'
  ];

  const benefits = [
    'Increase trading performance by 40-60% through quantum AI',
    'Reduce risk exposure with advanced predictive modeling',
    'Execute trades 1000x faster than traditional systems',
    'Optimize portfolio allocation in real-time',
    'Generate alpha through market inefficiency detection'
  ];

  const pricing = [
    {
      plan: 'Professional',
      price: '$4,999',
      period: 'month',
      features: ['Up to $10M AUM', 'Basic quantum algorithms', 'Standard market access', 'Email support', 'Basic reporting'],
      popular: false
    },
    {
      plan: 'Institutional',
      price: '$12,999',
      period: 'month',
      features: ['Up to $100M AUM', 'Advanced quantum models', 'Global market access', 'Priority support', 'Advanced analytics', 'Custom strategies'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$29,999',
      period: 'month',
      features: ['Unlimited AUM', 'Custom quantum algorithms', 'Direct market access', 'Dedicated support', 'White-label solution', 'On-premise deployment'],
      popular: false
    }
  ];

  const marketAccess = [
    'NYSE, NASDAQ, LSE, TSE, HKEX',
    'Forex markets (all major pairs)',
    'Cryptocurrency exchanges',
    'Commodities and futures',
    'Bond markets and ETFs',
    'International markets'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      <SEO 
        title="AI Quantum Financial Trading Platform | Zion Tech Group"
        description="Revolutionary AI-powered quantum trading platform that combines quantum computing with advanced AI for unprecedented trading performance and risk management."
        keywords="AI trading, quantum computing, financial trading, algorithmic trading, risk management, portfolio optimization"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Atom className="w-8 h-8 text-purple-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              AI Quantum Financial Trading Platform
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Revolutionize your trading with quantum-enhanced AI algorithms, real-time market analysis, and unprecedented execution speed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Trading
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-300 text-purple-300 font-semibold rounded-lg hover:bg-purple-300 hover:text-purple-900 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum-Powered Trading Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines the latest advances in quantum computing with cutting-edge AI to deliver superior trading performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Access Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Market Access
            </h2>
            <p className="text-xl text-gray-600">
              Trade across all major global markets with institutional-grade connectivity and execution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketAccess.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">{market}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Trading Performance
            </h2>
            <p className="text-xl text-gray-600">
              Experience measurable improvements in trading performance, risk management, and portfolio optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg border border-green-100"
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Institutional-Grade Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Competitive pricing designed for professional traders and institutional investors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                  plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Revolutionize Your Trading?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join institutional traders who have already transformed their performance with quantum AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Trading Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialTrading;