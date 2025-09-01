import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  TrendingUp, 
  Brain, 
  Shield, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Users,
  Database,
  Network,
  Cpu,
  Server,
  Globe,
  Target,
  Activity,
  Fingerprint,
  Key,
  Search,
  BarChart3,
  LineChart,
  PieChart,
  Award,
  Phone,
  Mail,
  MapPin,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowUpDown,
  Wallet,
  CreditCard,
  Bitcoin,
  DollarSign as DollarSignIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIFinancialTradingPlatform() {

  const features = [
    {

      icon: Brain,
      title: "AI-Powered Trading Algorithms",
      description: "Advanced machine learning algorithms with 87.3% prediction accuracy for market movements"
    },
    {

      icon: TrendingUp,
      title: "Real-Time Market Analysis",
      description: "Instant market data processing with AI-driven insights and trend identification"
    },
    {

      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and regulatory compliance"
    },
    {

      icon: Clock,
      title: "24/7 Trading Operations",
      description: "Continuous market monitoring and automated trading execution worldwide"
    }
  ];

  const services = [
    {

      title: "Algorithmic Trading",
      description: "AI-powered trading algorithms with backtesting and optimization capabilities",
      icon: LineChart,
      features: ["Strategy backtesting", "Risk management", "Portfolio optimization", "Performance analytics"]
    },
    {

      title: "Market Intelligence",
      description: "Real-time market analysis with AI-driven insights and predictive modeling",
      icon: BarChart3,
      features: ["Sentiment analysis", "News impact analysis", "Technical indicators", "Market forecasting"]
    },
    {

      title: "Portfolio Management",
      description: "Intelligent portfolio optimization with risk assessment and rebalancing",
      icon: PieChart,
      features: ["Asset allocation", "Risk assessment", "Rebalancing automation", "Performance tracking"]
    },
    {

      title: "Risk Management",
      description: "Comprehensive risk management with real-time monitoring and alerts",
      icon: Shield,
      features: ["Position monitoring", "Stop-loss automation", "Risk metrics", "Compliance checks"]
    }
  ];

  const technologies = [
    "GPT-4 & Claude 3.5 Integration",
    "Machine Learning Algorithms",
    "Natural Language Processing (NLP)",
    "Real-time Data Processing",
    "Blockchain Integration",
    "Cloud-Native Architecture",
    "API-First Design",
    "Advanced Analytics Engine"
  ];

  const pricing = [
    {

      plan: "Starter",
      price: "$499",
      period: "/month",
      features: [
        "Up to $100K portfolio",
        "Basic AI trading signals",
        "Market analysis tools",
        "Email support",
        "Basic risk management"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      plan: "Professional",
      price: "$1,999",
      period: "/month",
      features: [
        "Up to $1M portfolio",
        "Advanced AI algorithms",
        "Full trading automation",
        "Phone & email support",
        "Advanced risk management",
        "Custom strategies",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {

      plan: "Institutional",
      price: "$4,999",
      period: "/month",
      features: [
        "Unlimited portfolio size",
        "Custom AI models",
        "Dedicated support team",
        "24/7 priority support",
        "Full platform customization",
        "White-label options",
        "Advanced compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const marketStats = [
    {

      metric: "Market Volume",
      value: "$2.1T",
      description: "Daily global trading volume",
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500"
    },
    {

      metric: "Success Rate",
      value: "87.3%",
      description: "AI prediction accuracy",
      icon: CheckCircle2,
      color: "from-blue-400 to-purple-500"
    },
    {

      metric: "ROI",
      value: "156%",
      description: "Average annual return",
      icon: DollarSignIcon,
      color: "from-purple-400 to-pink-500"
    },
    {

      metric: "Response Time",
      value: "<50ms",
      description: "Market execution speed",
      icon: Zap,
      color: "from-orange-400 to-red-500"
    }
  ];

  const tradingPairs = [
    "Forex (EUR/USD, GBP/USD, USD/JPY)",
    "Cryptocurrencies (BTC, ETH, ADA, SOL)",
    "Stocks (S&P 500, NASDAQ, Dow Jones)",
    "Commodities (Gold, Silver, Oil, Gas)",
    "Indices (VIX, S&P 500, NASDAQ-100)",
    "Bonds (Treasury, Corporate, Municipal)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI Financial Trading Platform - Zion Tech Group"
        description="Revolutionary AI-powered financial trading platform with algorithmic trading, market intelligence, and portfolio management. Transform your trading with intelligent automation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              AI-Powered Financial Trading
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-emerald-600 bg-clip-text text-transparent">
                Trading Platform
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your trading with our AI-powered platform that provides algorithmic trading, 
              market intelligence, and portfolio management. Achieve consistent returns with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Trading Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI-powered trading platform combines cutting-edge technology with financial expertise 
              to provide comprehensive trading automation and analysis.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Trading Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From algorithmic trading to portfolio management, our AI trading platform covers every aspect 
              of modern financial trading and investment.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Performance & Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Understand the performance metrics and market impact of our AI trading platform.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.metric}</h3>
                <p className="text-3xl font-bold text-green-400 mb-2">{stat.value}</p>
                <p className="text-slate-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Pairs Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Supported Trading Pairs
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Trade across multiple asset classes with our comprehensive selection of trading pairs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingPairs.map((pair, index) => (
              <motion.div
                key={pair}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-green-400/30 transition-all duration-200"
              >
                <TrendingUp className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{pair}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your trading needs. All plans include our core AI features.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${

                  plan.popular 
                    ? 'border-green-400/50 bg-gradient-to-b from-green-500/10 to-slate-800/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-400 hover:to-blue-500'
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

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Trading Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to provide the most advanced trading capabilities available.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-green-400/30 transition-all duration-200"
              >
                <TrendingUp className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Enterprise-grade security and regulatory compliance for financial institutions and traders.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Bank-Level Security</h3>
              <p className="text-slate-300">256-bit encryption with multi-factor authentication and secure API access</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Regulatory Compliance</h3>
              <p className="text-slate-300">SEC, FINRA, and international regulatory compliance with audit trails</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Risk Management</h3>
              <p className="text-slate-300">Advanced risk controls with real-time monitoring and automated safeguards</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading traders and institutions that have already implemented AI-powered trading.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to revolutionize your trading? Contact our team for a personalized demo.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}