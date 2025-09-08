import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  TrendingUp, 
  Brain, 
  Zap, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Shield,
  Activity,
  Target,
  LineChart,
  PieChart,
  AlertTriangle,
  Globe,
  Lock,
  Users,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIFinancialTrading() {
  const features = [
    {
      title: "Predictive Market Analysis",
      description: "AI-powered market prediction with 94% accuracy using advanced machine learning algorithms",
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Real-time Trading Signals",
      description: "Instant buy/sell signals with risk assessment and portfolio optimization",
      icon: Activity,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Portfolio Risk Management",
      description: "Advanced risk assessment and automated portfolio rebalancing",
      icon: Shield,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Asset Trading",
      description: "Support for stocks, forex, crypto, and commodities with unified platform",
      icon: Globe,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Sentiment Analysis",
      description: "AI-driven sentiment analysis from news, social media, and market data",
      icon: TrendingUp,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive trading performance metrics and optimization insights",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 499,
      period: "month",
      description: "Perfect for individual traders and beginners",
      features: [
        "Up to $100K portfolio",
        "Basic AI predictions",
        "Standard trading signals",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: 1299,
      period: "month",
      description: "Ideal for active traders and growing portfolios",
      features: [
        "Up to $1M portfolio",
        "Advanced AI analytics",
        "Real-time signals",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "Training sessions"
      ],
      cta: "Get Started",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: 2999,
      period: "month",
      description: "For institutional investors and large portfolios",
      features: [
        "Unlimited portfolio size",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 priority support",
        "White-label solutions",
        "Advanced risk management",
        "Custom compliance rules",
        "On-site training"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "94% Accuracy",
      description: "Industry-leading accuracy in market prediction and trading signals",
      icon: Target,
      metric: "94%"
    },
    {
      title: "35% ROI Increase",
      description: "Significant improvement in trading returns and portfolio performance",
      icon: TrendingUp,
      metric: "35%"
    },
    {
      title: "24/7 Trading",
      description: "Round-the-clock automated trading and monitoring",
      icon: Clock,
      metric: "24/7"
    },
    {
      title: "Risk Reduction",
      description: "Advanced risk management reduces portfolio volatility",
      icon: Shield,
      metric: "60%"
    }
  ];

  const useCases = [
    {
      title: "Stock Trading",
      description: "AI-powered stock selection and timing for optimal entry/exit points",
      icon: LineChart,
      examples: ["Stock screening", "Entry timing", "Exit strategies"]
    },
    {
      title: "Forex Trading",
      description: "Currency pair analysis and automated forex trading strategies",
      icon: Globe,
      examples: ["Currency analysis", "Trend prediction", "Risk management"]
    },
    {
      title: "Cryptocurrency Trading",
      description: "Digital asset trading with AI-driven market analysis",
      icon: TrendingUp,
      examples: ["Crypto analysis", "Market timing", "Portfolio diversification"]
    },
    {
      title: "Portfolio Management",
      description: "Automated portfolio optimization and risk management",
      icon: PieChart,
      examples: ["Asset allocation", "Risk balancing", "Performance tracking"]
    }
  ];

  const markets = [
    {
      name: "Stocks",
      icon: LineChart,
      description: "Equity markets and individual stock trading",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Forex",
      icon: Globe,
      description: "Foreign exchange and currency trading",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Cryptocurrency",
      icon: TrendingUp,
      description: "Digital assets and blockchain trading",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Commodities",
      icon: BarChart3,
      description: "Raw materials and futures trading",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Options",
      icon: Target,
      description: "Derivatives and options trading strategies",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "ETFs",
      icon: PieChart,
      description: "Exchange-traded funds and index trading",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <>
      <SEO 
        title="AI Financial Trading | Zion Tech Group"
        description="Revolutionary AI-powered financial trading platform. 94% accuracy, 35% ROI increase, and 24/7 automated trading. Start your free trial today."
        keywords="AI trading, financial trading, algorithmic trading, stock trading, forex trading, crypto trading, portfolio management"
        canonical="https://ziontechgroup.com/services/ai-financial-trading"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-green-600/20 to-blue-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Financial Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Financial Trading
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your trading with AI-powered market analysis. 
                94% accuracy, 35% ROI increase, and 24/7 automated trading for optimal results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary Trading AI Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with deep financial expertise 
                to deliver unprecedented trading accuracy and returns.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Proven Results & Benefits
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Join thousands of traders who have transformed their portfolios 
                with our AI-powered trading platform.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text mb-4">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Trading Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From stock trading to portfolio management, our AI platform handles 
                every aspect of financial trading and investment.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-slate-300 mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Markets Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Trading Markets
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI platform supports all major financial markets and asset classes 
                for comprehensive trading opportunities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {markets.map((market, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${market.color} rounded-lg flex items-center justify-center mb-4`}>
                    <market.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{market.name}</h3>
                  <p className="text-slate-300">{market.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your trading volume and portfolio size. 
                All plans include our core AI features and 24/7 support.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-emerald-500/50 ring-2 ring-emerald-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
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
        <section className="py-20 bg-gradient-to-r from-emerald-600/20 via-green-600/20 to-blue-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Trading?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join thousands of traders who have already revolutionized 
                their portfolios with AI. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-300">
                  Ready to revolutionize your trading? Contact our team to learn more.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-slate-300">{contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-slate-300">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-slate-300">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}