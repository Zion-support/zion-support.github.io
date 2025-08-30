import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Brain, 
  BarChart3, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  Star, 
  ChartLine,
  Activity,
  Target,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Cpu,
  Database,
  Search,
  Filter,
  PieChart,
  LineChart
} from 'lucide-react';

export default function AIFinancialAnalytics() {
  const features = [
    {
      icon: Brain,
      title: 'AI Market Prediction',
      description: 'Advanced AI algorithms predict market movements with 87% accuracy using real-time data analysis'
    },
    {
      icon: ChartLine,
      title: 'Real-time Analytics',
      description: 'Live financial data analysis and market insights updated every second for optimal decision making'
    },
    {
      icon: Target,
      title: 'Portfolio Optimization',
      description: 'AI-powered portfolio rebalancing and risk management for maximum returns with minimal risk'
    },
    {
      icon: Activity,
      title: 'Risk Assessment',
      description: 'Machine learning risk models that identify potential market threats and investment opportunities'
    },
    {
      icon: BarChart3,
      title: 'Sentiment Analysis',
      description: 'AI analysis of market sentiment from news, social media, and financial reports'
    }
  ];

  const benefits = [
    'Increase investment returns by 35%',
    'Reduce portfolio risk by 40%',
    'Make data-driven decisions in real-time',
    'Automate trading strategies',
    'Access institutional-grade analytics',
    '24/7 market monitoring and alerts'
  ];

  const services = [
    {
      title: 'Enterprise Financial Platform',
      description: 'Complete AI-powered financial analytics and trading platform for institutions',
      price: 'From $5,999/month',
      features: ['AI market prediction', 'Portfolio optimization', 'Risk management', 'Trading automation', 'Real-time analytics', 'Custom integrations']
    },
    {
      title: 'AI Trading Algorithms',
      description: 'Custom AI trading strategies and automated execution systems',
      price: 'From $3,499/month',
      features: ['Strategy development', 'Backtesting', 'Live trading', 'Performance analytics', 'Risk controls', 'API access']
    },
    {
      title: 'Portfolio Intelligence',
      description: 'AI-powered portfolio analysis and optimization tools',
      price: 'From $2,499/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Rebalancing', 'Performance tracking', 'Custom reports']
    },
    {
      title: 'Market Intelligence',
      description: 'Real-time market data and AI-powered insights',
      price: 'From $1,999/month',
      features: ['Market data feeds', 'AI insights', 'Sentiment analysis', 'Economic indicators', 'Custom alerts']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for market prediction and risk assessment' },
    { name: 'Natural Language Processing', description: 'AI analysis of financial news and market sentiment' },
    { name: 'Real-time Analytics', description: 'High-frequency data processing and analysis' },
    { name: 'Blockchain Integration', description: 'Secure and transparent financial transactions' },
    { name: 'Cloud Computing', description: 'Scalable and reliable cloud infrastructure' }
  ];

  const assetClasses = [
    {
      class: 'Stocks & Equities',
      description: 'AI-powered stock selection and market timing strategies',
      performance: 'Average 25% annual returns'
    },
    {
      class: 'Cryptocurrencies',
      description: 'Advanced crypto trading algorithms and portfolio management',
      performance: 'Average 45% annual returns'
    },
    {
      class: 'Forex & Commodities',
      description: 'AI-driven currency and commodity trading strategies',
      performance: 'Average 18% annual returns'
    },
    {
      class: 'Fixed Income',
      description: 'Intelligent bond portfolio optimization and yield enhancement',
      performance: 'Average 12% annual returns'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Financial Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Analytics</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your financial strategy with AI-powered market prediction, portfolio optimization, 
              and automated trading. Increase returns by 35% while reducing risk by 40%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Trading Today
              </a>
              <a
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Financial Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered financial platform combines cutting-edge technology with financial expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Financial Analytics?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience unprecedented financial performance and risk management capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Classes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Asset Class Coverage
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AI-powered strategies across all major asset classes for diversified returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assetClasses.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{asset.class}</h3>
                <p className="text-gray-400 mb-4">{asset.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {asset.performance}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Financial Packages
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect package for your financial analytics and trading needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                  index === 0 ? 'border-green-500/50 bg-green-500/5' : 'border-slate-700'
                }`}
              >
                {index === 0 && (
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full inline-flex justify-center items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    index === 0
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-slate-600 text-slate-300 hover:border-green-500/50 hover:text-green-400'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Financial Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest AI, machine learning, and financial technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Strategy?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading institutions already using AI to revolutionize their financial operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}