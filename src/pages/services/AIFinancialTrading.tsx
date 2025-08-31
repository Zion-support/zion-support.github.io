import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Search,
  BookOpen,
  Clock,
  DollarSign,
  BarChart3,
  Lock,
  Eye,
  FileSearch,
  LineChart,
  Target,
  AlertTriangle,
  Database,
  Network,
  PieChart,
  TrendingDown,
  DollarSign as DollarIcon,
  Globe,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIFinancialTrading: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Trading Algorithms',
      description: 'Advanced machine learning algorithms for market analysis and automated trading decisions'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Market Analysis',
      description: 'Instant market insights and trend predictions using live data feeds'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment and portfolio protection with AI-driven insights'
    },
    {
      icon: Zap,
      title: 'High-Frequency Trading',
      description: 'Ultra-fast execution and microsecond response times for optimal trading performance'
    },
    {
      icon: Users,
      title: 'Portfolio Optimization',
      description: 'AI-driven portfolio rebalancing and asset allocation recommendations'
    },
    {
      icon: CheckCircle,
      title: 'Compliance & Regulation',
      description: 'Built-in regulatory compliance and audit trails for financial institutions'
    }
  ];

  const useCases = [
    {
      title: 'Algorithmic Trading',
      description: 'Automated trading strategies based on AI market analysis and predictions',
      icon: Cpu
    },
    {
      title: 'Portfolio Management',
      description: 'Intelligent portfolio optimization and risk-adjusted returns',
      icon: PieChart
    },
    {
      title: 'Market Prediction',
      description: 'AI-powered market trend analysis and forecasting',
      icon: TrendingUp
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation strategies',
      icon: Shield
    }
  ];

  const benefits = [
    'Increase trading accuracy by 85%',
    'Reduce trading costs by 60%',
    'Improve portfolio returns by 40%',
    'Enhanced risk management and control',
    '24/7 automated trading capabilities',
    'Scalable for any portfolio size'
  ];

  const tradingStrategies = [
    {
      title: 'Momentum Trading',
      description: 'AI-powered momentum detection and trend following',
      icon: TrendingUp
    },
    {
      title: 'Mean Reversion',
      description: 'Statistical arbitrage and price correction strategies',
      icon: TrendingDown
    },
    {
      title: 'Arbitrage',
      description: 'Cross-market and cross-asset arbitrage opportunities',
      icon: Globe
    },
    {
      title: 'Market Making',
      description: 'Automated market making and liquidity provision',
      icon: DollarIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-500/20 rounded-full">
                <TrendingUp className="w-12 h-12 text-green-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
              AI Financial Trading
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Revolutionize your trading with AI-powered algorithms, real-time market analysis, and intelligent portfolio optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 font-semibold rounded-lg transition-all duration-200"
              >
                Schedule Demo
              </Link>
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
              Advanced AI-Powered Trading Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI financial trading platform combines cutting-edge machine learning with financial expertise to deliver unprecedented trading performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Trading Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From algorithmic trading to portfolio management, our AI platform handles every aspect of financial trading
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Trading Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform implements sophisticated trading strategies for optimal market performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <strategy.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {strategy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Financial Trading?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your trading operations with unprecedented efficiency, accuracy, and returns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Trading with AI?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join leading financial institutions already using AI to revolutionize their trading operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 font-semibold rounded-lg transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialTrading;