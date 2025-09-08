import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Target, 
  CheckCircle,
  ArrowRight,
  Rocket,
  Play,
  Eye,
  Zap,
  Globe,
  Shield,
  Activity,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Lock,
  Users,
  Clock,
  AlertTriangle,
  Star,
  Award,
  TrendingDown,
  PieChart,
  LineChart,
  CandlestickChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIFinancialTrading() {
  const features = [
    {
      title: "AI-Powered Market Analysis",
      description: "Advanced machine learning algorithms analyze market patterns with 98% accuracy",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Trading Signals",
      description: "Instant buy/sell recommendations based on AI market analysis",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Management",
      description: "AI-driven portfolio optimization and risk assessment",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Multi-Asset Trading",
      description: "Trade stocks, forex, crypto, and commodities with unified AI platform",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 4999,
      features: ['Up to $100K portfolio', 'Basic AI signals', 'Email support', '5 trading strategies'],
      popular: false
    },
    {
      name: 'Professional',
      price: 9999,
      features: ['Up to $1M portfolio', 'Advanced AI algorithms', 'Priority support', '25 strategies', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 19999,
      features: ['Unlimited portfolio', 'Custom AI models', '24/7 support', 'Unlimited strategies', 'White-label'],
      popular: false
    }
  ];

  const benefits = [
    { title: "Increase Returns", metric: "35%", description: "AI-driven strategies outperform market averages" },
    { title: "Reduce Risk", metric: "60%", description: "Advanced risk management minimizes losses" },
    { title: "24/7 Trading", metric: "Always On", description: "AI never sleeps, trades around the clock" },
    { title: "ROI Timeline", metric: "6 months", description: "See measurable returns quickly" }
  ];

  const tradingStrategies = [
    {
      name: "Momentum Trading",
      description: "AI identifies trending assets and optimal entry/exit points",
      success: "87%",
      risk: "Medium"
    },
    {
      name: "Arbitrage",
      description: "Exploit price differences across markets automatically",
      success: "92%",
      risk: "Low"
    },
    {
      name: "Mean Reversion",
      description: "AI predicts when assets return to historical averages",
      success: "78%",
      risk: "Medium"
    },
    {
      name: "Portfolio Optimization",
      description: "Dynamic asset allocation for maximum returns",
      success: "94%",
      risk: "Low"
    }
  ];

  const integrations = [
    "Interactive Brokers", "TD Ameritrade", "E*TRADE", "Charles Schwab", "Fidelity",
    "Robinhood", "Webull", "Alpaca", "Polygon", "IEX Cloud", "Alpha Vantage",
    "Yahoo Finance", "Bloomberg", "Reuters", "MarketWatch", "TradingView",
    "MetaTrader", "NinjaTrader", "ThinkOrSwim", "Zapier", "Webhooks"
  ];

  const markets = [
    "Stocks", "Options", "Futures", "Forex", "Cryptocurrency", "Commodities",
    "Bonds", "ETFs", "Mutual Funds", "Real Estate", "Private Equity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <SEO 
        title="AI Financial Trading - Zion Tech Group"
        description="AI-powered financial trading platform for automated market analysis, real-time signals, and portfolio optimization. Maximize returns with cutting-edge AI trading technology."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-zion-cyan font-medium">AI Trading Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Financial
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                  Trading
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Revolutionize your trading with AI technology that analyzes markets in real-time, 
                generates profitable signals, and optimizes your portfolio for maximum returns 
                while minimizing risk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
                >
                  Watch Demo
                  <Play className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">AI Trading Bot</div>
                      <div className="text-slate-400 text-sm">Analyzing markets...</div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-white text-sm mb-2">Trading Status:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Portfolio: +$45,230</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Win Rate: 87%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 text-green-400">●</div>
                        <span className="text-slate-300 text-sm">Risk Level: Low</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">98%</div>
                    <div className="text-slate-400 text-sm">Prediction Accuracy</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Financial Trading?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered platform delivers superior trading performance with measurable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">{benefit.metric}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trading Strategies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Advanced Trading Strategies</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            AI-powered strategies that adapt to market conditions and maximize returns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tradingStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{strategy.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      strategy.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                      strategy.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {strategy.risk}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-3">{strategy.description}</p>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{strategy.success} Success Rate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced AI technology designed specifically for financial trading excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your trading volume and AI capabilities needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border ${
                plan.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : 'border-slate-700/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">${plan.price}</div>
                <div className="text-slate-400">per month</div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/contact"
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/50'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl border border-green-500/20 p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Revolutionize Your Trading?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join thousands of traders who are already using AI to maximize their returns. 
            Start your free trial today and experience the future of financial trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
            >
              Schedule Demo
              <Play className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}