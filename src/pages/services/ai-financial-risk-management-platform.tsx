import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Target,
  Lock,
  Search,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  PieChart,
  LineChart,
  Eye,
  Settings,
  Filter,
  Globe,
  Database,
  DollarSign,
  Star,
  Play,
  Calculator,
  ChartBar,
  CreditCard,
  Building2,
  Wallet,
  PiggyBank,
  ArrowUpDown,
  Percent,
  Target,
  AlertCircle,
  TrendingDown,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIFinancialRiskManagementPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms that analyze market data, credit profiles, and economic indicators in real-time",
      benefits: ["Real-time risk scoring", "Predictive modeling", "Market volatility analysis", "Credit risk assessment"]
    },
    {
      icon: Shield,
      title: "Comprehensive Risk Monitoring",
      description: "24/7 monitoring of portfolio risks, market conditions, and regulatory compliance with instant alerts",
      benefits: ["Continuous monitoring", "Instant risk alerts", "Regulatory compliance", "Portfolio stress testing"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Market Analytics",
      description: "AI-driven market forecasting and trend analysis to identify opportunities and potential risks",
      benefits: ["Market trend prediction", "Opportunity identification", "Risk mitigation strategies", "Performance optimization"]
    },
    {
      icon: BarChart3,
      title: "Portfolio Optimization",
      description: "Intelligent portfolio rebalancing and optimization based on risk tolerance and market conditions",
      benefits: ["Dynamic rebalancing", "Risk-adjusted returns", "Diversification analysis", "Performance tracking"]
    },
    {
      icon: Zap,
      title: "Automated Compliance",
      description: "Automated regulatory reporting and compliance monitoring for financial institutions",
      benefits: ["Regulatory reporting", "Compliance monitoring", "Audit trails", "Policy enforcement"]
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and comprehensive audit logging",
      benefits: ["End-to-end encryption", "Role-based access", "Audit trails", "SOC 2 compliance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Perfect for financial advisors and small investment firms",
      features: [
        "Up to 50 portfolios",
        "Basic risk assessment",
        "Market analytics",
        "Email support",
        "Standard security",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Ideal for banks, hedge funds, and large financial institutions",
      features: [
        "Up to 500 portfolios",
        "Advanced risk modeling",
        "Real-time monitoring",
        "Priority support",
        "Advanced security",
        "Compliance automation",
        "Custom integrations",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Institutional",
      price: "$4,999",
      period: "/month",
      description: "For large institutional investors and global financial networks",
      features: [
        "Unlimited portfolios",
        "Custom AI models",
        "Advanced integrations",
        "24/7 dedicated support",
        "Custom training",
        "Multi-currency support",
        "Global market access",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Investment Banks",
      description: "Manage trading risks, optimize portfolios, and ensure regulatory compliance with real-time monitoring",
      metrics: ["40% risk reduction", "25% performance improvement", "100% compliance rate"]
    },
    {
      industry: "Hedge Funds",
      description: "Advanced risk modeling, portfolio optimization, and market opportunity identification",
      metrics: ["35% volatility reduction", "30% return enhancement", "Enhanced risk-adjusted returns"]
    },
    {
      industry: "Asset Management",
      description: "Portfolio optimization, risk assessment, and performance tracking for institutional clients",
      metrics: ["50% faster risk assessment", "20% portfolio optimization", "Improved client reporting"]
    },
    {
      industry: "Commercial Banks",
      description: "Credit risk assessment, regulatory compliance, and portfolio risk management",
      metrics: ["90% compliance automation", "60% faster risk assessment", "Enhanced regulatory reporting"]
    }
  ];

  const benefits = [
    "Reduce portfolio risk by 40% through AI-powered optimization",
    "Improve risk-adjusted returns by 25% with intelligent portfolio management",
    "Save up to $200,000 annually in compliance and risk management costs",
    "Achieve 100% regulatory compliance with automated monitoring",
    "Real-time risk alerts prevent potential losses and market exposure",
    "Enhanced portfolio performance through intelligent diversification"
  ];

  const riskTypes = [
    "Market Risk",
    "Credit Risk",
    "Operational Risk",
    "Liquidity Risk",
    "Regulatory Risk",
    "Counterparty Risk"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              AI-Powered Financial Technology
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Financial Risk
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Management Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your financial risk management with AI-powered analytics, real-time monitoring, 
              and predictive insights. Optimize portfolios, ensure compliance, and maximize returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-emerald-400/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Financial Risk Management Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to modernize your risk management and optimize financial performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform covers all major types of financial risk with AI-powered analysis and monitoring
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskTypes.map((riskType, index) => (
              <motion.div
                key={riskType}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{riskType}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that best fits your financial institution and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-emerald-500/50 bg-gradient-to-br from-slate-800/50 to-emerald-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Financial Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored risk management solutions for different financial institutions and investment strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div>
                  <h4 className="text-emerald-400 font-medium mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-3 h-3 text-emerald-400 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Risk Management?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join hundreds of financial institutions that have already revolutionized their risk management with AI-powered analytics
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-emerald-400/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}