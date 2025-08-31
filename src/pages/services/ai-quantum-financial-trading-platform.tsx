import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, Shield, Brain, Zap, Globe, Users, TrendingUp, 
  Award, Clock, CheckCircle, ArrowRight, Play, 
  BarChart3, Cpu, Network, Satellite, MapPin, 
  Smartphone, Database, Server, Lock, Eye, 
  Shield, Activity, Target, Star, Rocket, Atom,
  TrendingUp, PieChart, LineChart, BarChart, 
  Calculator, Target, Zap, Globe, Building
} from 'lucide-react';

export default function AIQuantumFinancialTradingPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'Quantum AI Algorithms',
      description: 'Advanced quantum computing algorithms for superior trading performance'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and regulatory compliance frameworks'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Instant market analysis and predictive modeling capabilities'
    },
    {
      icon: Network,
      title: 'Global Market Access',
      description: 'Connect to major exchanges and markets worldwide'
    },
    {
      icon: Atom,
      title: 'Quantum Advantage',
      description: 'Leverage quantum computing for complex financial calculations'
    },
    {
      icon: Lock,
      title: 'Risk Management',
      description: 'Advanced risk assessment and portfolio protection systems'
    }
  ];

  const benefits = [
    'Increase trading performance by up to 300%',
    'Reduce risk through quantum-powered analysis',
    'Access to global markets 24/7',
    'Real-time portfolio optimization',
    'Advanced compliance and audit trails',
    'Scalable infrastructure for any trading volume'
  ];

  const tradingCapabilities = [
    {
      title: 'Algorithmic Trading',
      description: 'High-frequency and algorithmic trading strategies',
      icon: Cpu
    },
    {
      title: 'Portfolio Management',
      description: 'Intelligent portfolio optimization and rebalancing',
      icon: PieChart
    },
    {
      title: 'Risk Assessment',
      description: 'Real-time risk analysis and mitigation strategies',
      icon: Shield
    },
    {
      title: 'Market Analysis',
      description: 'Deep market insights and trend prediction',
      icon: LineChart
    },
    {
      title: 'Compliance Monitoring',
      description: 'Automated regulatory compliance and reporting',
      icon: CheckCircle
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive trading performance metrics',
      icon: BarChart
    }
  ];

  const useCases = [
    {
      title: 'Investment Banks',
      description: 'Large-scale institutional trading and portfolio management',
      icon: Building
    },
    {
      title: 'Hedge Funds',
      description: 'Advanced quantitative trading strategies',
      icon: TrendingUp
    },
    {
      title: 'Asset Managers',
      description: 'Portfolio optimization and risk management',
      icon: PieChart
    },
    {
      title: 'Trading Firms',
      description: 'High-frequency and algorithmic trading operations',
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Atom className="w-4 h-4" />
              <span>AI Quantum Financial Trading</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Financial
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Trading Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your trading operations with our AI-powered quantum financial trading platform. 
              Experience unprecedented speed, accuracy, and performance in global financial markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Trading Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines quantum computing power with advanced AI for superior trading performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Capabilities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Trading Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced tools and features for professional trading operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-300">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Quantum Advantage in Trading
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our quantum-powered platform delivers unprecedented performance improvements, 
                enabling traders to achieve superior results while managing risk effectively.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Trading Performance
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">300%</div>
                      <div className="text-gray-300">Performance Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400">24/7</div>
                      <div className="text-gray-300">Market Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform serves diverse financial institutions and trading operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Quantum Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of financial trading with Zion Tech Group's quantum-powered platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}