import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Target,
  Activity,
  Globe,
  Lock,
  PieChart,
  LineChart
} from 'lucide-react';

const AIFinancialTrading = () => {
  return (
    <>
      <Helmet>
        <title>AI Financial Trading Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your trading with AI-powered financial trading platform. Advanced algorithms, real-time analysis, and automated trading strategies for maximum returns." />
        <meta name="keywords" content="AI trading, algorithmic trading, financial AI, trading automation, investment AI, trading algorithms" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-financial-trading" />
      </Helmet>

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
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-green-500/10 rounded-2xl">
                  <TrendingUp className="w-16 h-16 text-green-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Financial
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  {" "}Trading Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Maximize your trading potential with our advanced AI-powered financial trading platform. 
                Leverage machine learning algorithms, real-time market analysis, and automated trading 
                strategies for superior returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Start Trading
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-600 hover:border-green-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Demo
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Trading Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI trading platform combines cutting-edge technology with financial expertise 
                to deliver unparalleled trading performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-green-400" />,
                  title: "AI-Powered Analysis",
                  description: "Advanced machine learning algorithms analyze market patterns, news sentiment, and economic indicators in real-time."
                },
                {
                  icon: <Target className="w-8 h-8 text-green-400" />,
                  title: "Automated Trading",
                  description: "Execute trades automatically based on AI-generated signals with customizable risk management parameters."
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-green-400" />,
                  title: "Portfolio Optimization",
                  description: "AI-driven portfolio rebalancing and optimization to maximize returns while minimizing risk exposure."
                },
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Risk Management",
                  description: "Advanced risk assessment and management tools to protect your investments and limit potential losses."
                },
                {
                  icon: <Activity className="w-8 h-8 text-green-400" />,
                  title: "Real-Time Monitoring",
                  description: "24/7 market monitoring with instant alerts and notifications for trading opportunities and risks."
                },
                {
                  icon: <Globe className="w-8 h-8 text-green-400" />,
                  title: "Multi-Market Access",
                  description: "Trade across global markets including stocks, forex, commodities, and cryptocurrencies from a single platform."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Trading Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI trading algorithms have consistently outperformed traditional trading methods.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Key Advantages</h3>
                <div className="space-y-6">
                  {[
                    "Average annual returns of 25-40%",
                    "Risk-adjusted returns 3x better than market",
                    "24/7 automated trading execution",
                    "Emotion-free trading decisions",
                    "Advanced backtesting capabilities",
                    "Real-time market sentiment analysis"
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{advantage}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
              >
                <h4 className="text-xl font-semibold text-white mb-6">Performance Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Annual Return</span>
                    <span className="text-green-400 font-semibold">32.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sharpe Ratio</span>
                    <span className="text-green-400 font-semibold">2.8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Max Drawdown</span>
                    <span className="text-green-400 font-semibold">8.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Win Rate</span>
                    <span className="text-green-400 font-semibold">78%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trading Strategies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI Trading Strategies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform offers a variety of AI-powered trading strategies tailored to different market conditions and risk profiles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <LineChart className="w-8 h-8 text-green-400" />,
                  title: "Momentum Trading",
                  description: "AI identifies and capitalizes on market momentum patterns with high-frequency trading algorithms."
                },
                {
                  icon: <PieChart className="w-8 h-8 text-green-400" />,
                  title: "Arbitrage Trading",
                  description: "Exploit price differences across markets and exchanges with lightning-fast execution."
                },
                {
                  icon: <Target className="w-8 h-8 text-green-400" />,
                  title: "Mean Reversion",
                  description: "AI identifies overbought/oversold conditions and executes trades based on statistical analysis."
                },
                {
                  icon: <Brain className="w-8 h-8 text-green-400" />,
                  title: "Sentiment Analysis",
                  description: "Trade based on news sentiment, social media analysis, and market psychology indicators."
                },
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Risk Parity",
                  description: "Balanced portfolio allocation based on risk contribution rather than capital allocation."
                },
                {
                  icon: <Activity className="w-8 h-8 text-green-400" />,
                  title: "Market Making",
                  description: "Provide liquidity to markets while profiting from bid-ask spreads using AI optimization."
                }
              ].map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-colors"
                >
                  <div className="mb-4">{strategy.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{strategy.title}</h3>
                  <p className="text-gray-300">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start AI-Powered Trading Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of traders who have revolutionized their trading with AI automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-600 hover:border-green-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialTrading;