import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  Shield, 
  MapPin, 
  BarChart3, 
  Zap, 
  Users, 
  Globe, 
  Lock,
  Cpu,
  Network,
  Activity,
  Eye,
  Settings,
  Smartphone,
  Database,
  Cloud,
  Server,
  Wifi,
  Satellite,
  Atom,
  Coins,
  DollarSign,
  Phone,
  Mail,
  Target,
  Rocket,
  Brain,
  Gauge,
  AlertTriangle,
  CheckCircle,
  PieChart,
  LineChart,
  CandlestickChart
} from 'lucide-react';

const AIQuantumFinancialTradingPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Quantum Financial Trading Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered quantum financial trading platform. Real-time market analysis, quantum computing optimization, predictive trading, and intelligent portfolio management for institutional and retail traders." />
        <meta name="keywords" content="AI quantum trading, financial platform, algorithmic trading, portfolio management, market analysis, quantum computing, trading automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-quantum-financial-trading-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Financial
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trading Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your trading with AI-powered quantum computing, real-time market analysis, 
              predictive algorithms, and intelligent portfolio optimization. The future of finance is here.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Trading Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced financial trading capabilities ever created with AI and quantum computing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Computing */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Atom className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Computing Integration</h3>
              <p className="text-gray-300">
                Quantum algorithms for portfolio optimization, risk assessment, and market prediction 
                providing 1000x faster computation than classical computers.
              </p>
            </div>

            {/* AI Market Analysis */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Market Analysis</h3>
              <p className="text-gray-300">
                Real-time sentiment analysis, news impact assessment, and predictive modeling 
                with 95% accuracy in market direction prediction.
              </p>
            </div>

            {/* Algorithmic Trading */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Algo Trading</h3>
              <p className="text-gray-300">
                High-frequency trading algorithms, arbitrage detection, and market making strategies 
                with sub-millisecond execution times.
              </p>
            </div>

            {/* Risk Management */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Risk Management</h3>
              <p className="text-gray-300">
                Real-time risk assessment, portfolio stress testing, and automated stop-loss management 
                reducing drawdowns by up to 70%.
              </p>
            </div>

            {/* Portfolio Optimization */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <PieChart className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Portfolio Optimization</h3>
              <p className="text-gray-300">
                Quantum-powered portfolio rebalancing, asset allocation optimization, and 
                correlation analysis for maximum returns with minimal risk.
              </p>
            </div>

            {/* Market Data */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Market Data</h3>
              <p className="text-gray-300">
                Global market feeds, cryptocurrency data, forex rates, and commodity prices 
                with nanosecond latency and 99.99% uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Instruments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Trading Instruments
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trade across all major asset classes with our advanced platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Stocks & ETFs</h3>
              <p className="text-gray-300 text-sm">
                Global equity markets with real-time pricing and advanced order types
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cryptocurrencies</h3>
              <p className="text-gray-300 text-sm">
                Major crypto pairs with 24/7 trading and advanced charting
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Forex</h3>
              <p className="text-gray-300 text-sm">
                Major, minor, and exotic currency pairs with tight spreads
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Commodities</h3>
              <p className="text-gray-300 text-sm">
                Gold, oil, silver, and agricultural futures with leverage options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your trading volume and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$99</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Up to $100K trading volume
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Basic AI analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Standard market data
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-xl border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$299</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Up to $1M trading volume
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Advanced AI & quantum features
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Algorithmic trading
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Risk management tools
                </li>
              </ul>
              <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">Custom</div>
                <div className="text-gray-400">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Unlimited trading volume
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Full quantum computing access
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Custom algorithm development
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Dedicated support team
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  SLA guarantees
                </li>
              </ul>
              <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Trading Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented trading performance, accuracy, and profitability with AI and quantum computing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">1000x Faster Computation</h3>
                  <p className="text-gray-300">
                    Quantum computing provides exponential speed improvements for complex financial 
                    calculations and portfolio optimization.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">95% Market Prediction Accuracy</h3>
                  <p className="text-gray-300">
                    AI algorithms analyze market patterns, news sentiment, and technical indicators 
                    for highly accurate trading signals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">70% Reduction in Drawdowns</h3>
                  <p className="text-gray-300">
                    Advanced risk management systems automatically adjust positions and implement 
                    stop-loss strategies to protect capital.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sub-millisecond Execution</h3>
                  <p className="text-gray-300">
                    High-frequency trading capabilities with ultra-low latency for capturing 
                    market opportunities in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Global Market Access</h3>
                  <p className="text-gray-300">
                    Trade across all major exchanges worldwide with real-time data feeds and 
                    multi-currency support.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Lock className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Bank-Grade Security</h3>
                  <p className="text-gray-300">
                    Military-grade encryption, multi-factor authentication, and secure infrastructure 
                    ensuring your funds and data remain protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies for maximum performance, reliability, and security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-300 text-sm">
                IBM Q, Google Quantum, and custom quantum algorithms
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm">
                TensorFlow, PyTorch, and custom neural networks
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High-Performance Computing</h3>
              <p className="text-gray-300 text-sm">
                GPU clusters, FPGA acceleration, and low-latency networks
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-300 text-sm">
                AWS, Azure, and Google Cloud with global distribution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of financial trading with our AI-powered quantum platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
              Contact Sales Team
            </button>
          </div>
          <p className="text-gray-400 mt-6">
            No credit card required • 30-day free trial • Full support included
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialTradingPlatform;