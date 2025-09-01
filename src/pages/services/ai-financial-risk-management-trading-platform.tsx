import React from 'react';
import { motion } from 'framer-motion';
import {

  TrendingUp, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Database,
  AlertTriangle,
  Lightbulb,
  DollarSign,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Zap,
  Clock,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertCircle,
  FileCheck,
  Calendar,
  Lock,
  Cloud,
  Server,
  Activity,
  Users,
  Target,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Settings as SettingsIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Filter as FilterIcon,
  Search as SearchIcon,
  AlertTriangle as AlertTriangleIcon,
  Lightbulb as LightbulbIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIFinancialRiskManagementTradingPlatform() {

  const features = [
    {

      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms that analyze market data, economic indicators, and portfolio performance to identify and quantify financial risks",
      benefits: ["Real-time risk scoring", "Portfolio stress testing", "Scenario analysis"]
    },
    {

      icon: TrendingUp,
      title: "Intelligent Trading Algorithms",
      description: "AI-driven trading strategies that automatically execute trades based on market conditions, risk parameters, and performance optimization",
      benefits: ["Algorithmic trading", "Market timing", "Portfolio rebalancing"]
    },
    {

      icon: Shield,
      title: "Comprehensive Risk Monitoring",
      description: "24/7 monitoring of market risks, credit risks, operational risks, and compliance risks with automated alerts and mitigation strategies",
      benefits: ["Risk alerts", "Compliance monitoring", "Automated mitigation"]
    },
    {

      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Real-time analytics platform providing insights into portfolio performance, risk metrics, and market opportunities",
      benefits: ["Performance tracking", "Risk metrics", "Market insights"]
    },
    {

      icon: Users,
      title: "Portfolio Management Tools",
      description: "Comprehensive portfolio management with AI-powered optimization, diversification strategies, and performance attribution analysis",
      benefits: ["Portfolio optimization", "Diversification", "Performance analysis"]
    },
    {

      icon: Activity,
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and reporting for financial regulations including Basel III, Solvency II, and Dodd-Frank",
      benefits: ["Regulatory reporting", "Compliance automation", "Audit trails"]
    }
  ];

  const pricingPlans = [
    {

      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Perfect for individual traders and small investment firms",
      features: [
        "Up to 10 portfolios",
        "Basic risk assessment",
        "Trading algorithms",
        "Standard analytics",
        "Email support",
        "Basic compliance",
        "Market data feeds"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Institutional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for mid-size investment firms and hedge funds",
      features: [
        "Up to 100 portfolios",
        "Advanced risk models",
        "Custom algorithms",
        "Real-time analytics",
        "Priority support",
        "Full compliance suite",
        "API access",
        "Advanced security"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {

      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large financial institutions and multinational banks",
      features: [
        "Unlimited portfolios",
        "Enterprise risk models",
        "Custom development",
        "24/7 dedicated support",
        "White-label options",
        "Advanced compliance",
        "Multi-currency support",
        "Global deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    "Portfolio risk management",
    "Algorithmic trading",
    "Compliance monitoring",
    "Market analysis",
    "Credit risk assessment",
    "Operational risk management"
  ];

  const targetIndustries = [
    "Investment Banks",
    "Hedge Funds",
    "Asset Management",
    "Insurance Companies",
    "Pension Funds",
    "Family Offices",
    "Trading Firms",
    "Financial Advisors"
  ];

  const benefits = [
    "Reduce portfolio risk by 40%",
    "Improve trading performance by 25%",
    "Cut compliance costs by 60%",
    "Automate risk monitoring",
    "Optimize portfolio allocation",
    "Enhance regulatory compliance"
  ];

  const riskMetrics = [
    "Value at Risk (VaR)",
    "Expected Shortfall",
    "Sharpe Ratio",
    "Maximum Drawdown",
    "Beta Analysis",
    "Correlation Analysis",
    "Stress Testing",
    "Scenario Analysis"
  ];

  const tradingFeatures = [
    "Algorithmic Trading",
    "High-Frequency Trading",
    "Portfolio Rebalancing",
    "Market Making",
    "Arbitrage Strategies",
    "Risk-Adjusted Returns",
    "Performance Attribution",
    "Backtesting Engine"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Financial Risk Management & Trading Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Transform your financial operations with AI-driven risk management, intelligent trading algorithms, and comprehensive compliance monitoring. 
              Maximize returns while minimizing risks with our advanced platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Advanced Financial Technology Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge machine learning with financial expertise to deliver unprecedented risk management and trading capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Metrics Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Risk Metrics
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced risk measurement and analysis tools to help you make informed investment decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200 text-center"
              >
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">{metric}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Advanced Trading Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sophisticated trading tools and algorithms to optimize your investment strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center"
              >
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Financial Services Pricing Plans
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that best fits your financial institution's needs. All plans include our core AI capabilities and compliance features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${

                  plan.popular 
                    ? 'border-blue-500 relative' 
                    : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Financial Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform addresses the full spectrum of financial risk management and trading needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200"
              >
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-green-500 mr-3" />
                  <span className="font-semibold text-slate-900">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transform Financial Operations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy with AI-powered financial technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200"
              >
                <div className="flex items-center">
                  <TrendingUp className="w-8 h-8 text-green-500 mr-4" />
                  <span className="font-semibold text-slate-900">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Financial Operations with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join leading financial institutions that trust our AI-powered platform for risk management and trading optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-slate-300 mb-2">Mobile: +1 302 464 0950</p>
              <p className="text-slate-300 mb-2">Email: kleber@ziontechgroup.com</p>
              <p className="text-slate-300">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-white">Home</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Financial Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/ai-financial-risk-management-trading-platform" className="text-slate-300 hover:text-white">Risk Management Platform</Link></li>
                <li><Link to="/services/ai-financial-trading-platform" className="text-slate-300 hover:text-white">Trading Platform</Link></li>
                <li><Link to="/services/ai-financial-risk-management-enhanced" className="text-slate-300 hover:text-white">Risk Management Enhanced</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-white">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}