import React from "react";
import { motion } from "framer-moti, on";import { TrendingUp, DollarSign;
  Brain;
  Zap;
  CheckCircle;
  Clock;
  Shield;
  Users;
  BarChart3;
  Lock;
  Globe;
  Award;
  Star;
  ArrowRight;
  Phone;
  Mail;
  MapPin;
  ExternalLink;
  TrendingUp;
  Target;
  Cpu;
  Activity
} from "lucide-react";import { SEO } from "../../components/S, EO";export default function AIFinancialTrading() {

  const features  = [
    {
      icon: <Brain className="w-6 h-6" /,>title: "AI-Powered Market Analysi,
    s";description: "Advanced machine learning algorithms analyze market patterns,
    sentimen, t, and trends with 92% accuracy"
    },
    {
      icon: <TrendingUp className="w-6 h-6" /, >,title: "Predictive Trading Signals, ",description: "Real-time trading signals based on AI analysis of multiple data sources and market indicators"
   ,
     }{
      icon: <Target className="w-6 h-6" /, >,title: "Portfolio Optimization, ",description: "Intelligent portfolio rebalancing and risk management with automated position sizing"
   ,
     }{
      icon: <Activity className="w-6 h-6" /, >,title: "Real-time Market Monitoring, ",description: "24/7 market surveillance with instant alerts for trading opportunities and risk events"
   ,
     }{
      icon: <Shield className="w-6 h-6" /, >,title: "Advanced Risk Management, ",description: "Multi-layered risk controls including stop-loss automation and position limit management"
   ,  },
    {
      icon: <BarChart3 className="w-6 h-6" /, >,title: "Performance Analytics, ";description: "Comprehensive trading performance metrics,
    backtestin, g, and strategy optimization tools"
    }
  ],

  const pricing  = [
    {
      name: "Starter, ",price: "$299, ",period: "/month, ",features: [
        "Basic AI trading signals, ",
        "Portfolio tracking",
        "Email alerts",
        "Standard analytics",
        "Basic risk management"
      ]popular: false
   ,
     }{
      name: "Professional, ",price: "$799, ",period: "/month, ",features: [
        "Advanced AI algorithms, ",
        "Real-time signals",
        "Portfolio optimization",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom strategies"
      ],
      popular: true,  }{
      name: "Institutional, ",price: "$1,
    999, ",
      period: "/month, ",features: [
        "Custom AI models, ",
        "White-label platform",
        "Dedicated support",
        "SLA guarantees",
        "Advanced risk controls",
        "Multi-account management",
        "On-premise deployment"
      ],
      popular: false,  }
  ]const benefits  = [
    "Increase trading returns by 25-40%",
    "Reduce trading risks by 60%",
    "Automate 80% of trading decisions",
    "24/7 market monitoring and alerts",
    "Professional-grade risk management",
    "Access to institutional-level tools"
  ],

  const tradingStrategies = [
    {
      strategy: "Momentum Trading, ",description: "AI-powered momentum detection and trend following with dynamic position sizing,";performance: "35% annual return"
   ,
     }{
      strategy: "Mean Reversion, ",description: "Statistical arbitrage using machine learning to identify overbought/oversold conditions, ",performance: "28% annual return"
   ,  }{
      strategy: "Sentiment Analysis, ",description: "Social media and news sentiment analysis for market direction prediction, ",performance: "42% annual return"
   ,  },
    {
      strategy: "Multi-Factor Models, ",description: "Combined technical,
    fundamenta, l, and macroeconomic factor analysis",
      performance: "38% annual return"
   ,  }
  ]return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Financial Trading Platform - Zion Tech Group"
        description="Revolutionary AI platform for financial tradingportfolio optimization, and risk management. Increase returns by 25-40% while reducing risks by 60%."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0,
    y: 20,  }}
            animate={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.8,
     }}
          >
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
              AI-Powered Financial Trading Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your trading with intelligent algorithms,
    predictive analytic, s, and automated risk management. 
              Increase returns by 25-40% while reducing risks by 60%.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Trading with AI
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits *,
    /}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI Trading Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built by financial experts and AI engineers,
    our platform delivers institutional-grade trading capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit,
    index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0,
    y: 20,  }}whileInView={{ opacity: 1,
    y: 0,  }}
                transition={{ duration: 0.5,
    delay: index * 0.1,  }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover: border-yellow-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-white text-lg font-medium">{benefi,
    t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Trading Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to achieve superior trading performance and manage risk effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature,
    index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0,
    y: 20,  }}whileInView={{ opacity: 1,
    y: 0,  }}
                transition={{ duration: 0.5,
    delay: index * 0.1,  }}
                className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover: border-yellow-500 transition-all duration-300 group"
              >
                <div className="text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  {feature.ico,
    n}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Trading Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered trading strategies designed for consistent performance across market conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy,
    index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0,
    y: 20,  }}whileInView={{ opacity: 1,
    y: 0,  }}
                transition={{ duration: 0.5,
    delay: index * 0.1,  }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover: border-yellow-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{strategy.strateg,
    y}</h3>
                <p className="text-gray-300 mb-4">{strategy.description}</p>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-semibold">{strategy.performance}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your trading volume and sophistication requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan,
    index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0,
    y: 20,  }}whileInView={{ opacity: 1,
    y: 0,  }}
                transition={{ duration: 0.5,
    delay: index * 0.1,  }}
                className={`relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-yellow-500 ring-2 ring-yellow-500/20' 
                    : 'border-slate-700'
                } hover: border-yellow-500 transition-all duration-300,
    `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((featurefeatureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https: //ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-700 hover:to-orange-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                 ,
     }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0,
    x: -20,  }}whileInView={{ opacity: 1,
    x: 0,  }}
              transition={{ duration: 0.8,
     }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Market-Leading Trading Solution
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Market Price Range</p>
                    <p className="text-gray-300">$400 - $3000/month for similar solutions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Setup Time</p>
                    <p className="text-gray-300">1-3 days for account activation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">ROI Timeline</p>
                    <p className="text-gray-300">Immediate performance improvement</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Target Market</p>
                    <p className="text-gray-300">Individual tradershedge funds, investment firms</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0,
    x: 20,  }}whileInView={{ opacity: 1,
    x: 0,  }}
              transition={{ duration: 0.8,
     }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Return Increase</span>
                  <span className="text-yellow-400 font-semibold">25-40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Risk Reduction</span>
                  <span className="text-blue-400 font-semibold">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Signal Accuracy</span>
                  <span className="text-purple-400 font-semibold">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Automation Level</span>
                  <span className="text-green-400 font-semibold">80%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0,
    y: 20,  }}whileInView={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.8,  }}
            className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-12 border border-yellow-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders who have already revolutionized their trading performance with AI.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Trading Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information *, /}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-white font-semibold mb-2">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-yellow-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-white font-semibold mb-2">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-white font-semibold mb-2">Address</p>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://ziontechgroup.com"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Visit our website
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  ),
}