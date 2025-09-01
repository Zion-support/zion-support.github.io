import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  MessageSquare,
  FileText,
  Eye,
  Search,
  Filter,
  Analytics,
  Cpu,
  Database,
  Cloud,
  Lock,
  Award,
  Clock,
  DollarSign,
  TrendingDown,
  AlertTriangle,
  Activity,
  PieChart,
  LineChart,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIFinancialRiskManagement = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms analyze financial data to identify and predict potential risks"
    },
    {
      icon: BarChart3,
      title: "Real-time Risk Monitoring",
      description: "Continuous monitoring of financial markets, portfolios, and transactions for immediate risk alerts"
    },
    {
      icon: Target,
      title: "Predictive Risk Modeling",
      description: "Forecast potential financial risks using historical data and market trend analysis"
    },
    {
      icon: Zap,
      title: "Automated Risk Mitigation",
      description: "AI-driven recommendations and automated actions to minimize financial exposure"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensure compliance with financial regulations including Basel III, Solvency II, and Dodd-Frank"
    },
    {
      icon: Globe,
      title: "Multi-Asset Coverage",
      description: "Comprehensive risk management across stocks, bonds, derivatives, commodities, and cryptocurrencies"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Perfect for financial advisors and small investment firms",
      features: [
        "Up to $10M portfolio monitoring",
        "Basic risk assessment tools",
        "Standard compliance reporting",
        "Email support",
        "Basic API access",
        "Daily risk updates"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Ideal for medium-sized financial institutions and asset managers",
      features: [
        "Up to $100M portfolio monitoring",
        "Advanced AI risk modeling",
        "Real-time risk alerts",
        "Custom compliance dashboards",
        "Priority support",
        "Full API access",
        "Multi-portfolio management",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Institutional",
      price: "$1,999",
      period: "/month",
      description: "For large financial institutions and hedge funds",
      features: [
        "Unlimited portfolio monitoring",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated risk manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Portfolio Risk Management",
      description: "Monitor and manage risk across diverse investment portfolios with AI-driven insights",
      icon: TrendingDown
    },
    {
      title: "Credit Risk Assessment",
      description: "Evaluate creditworthiness and predict default probabilities using advanced AI models",
      icon: ShieldCheck
    },
    {
      title: "Market Risk Analysis",
      description: "Identify market volatility patterns and predict potential market disruptions",
      icon: Activity
    },
    {
      title: "Operational Risk Control",
      description: "Monitor internal processes and identify operational risks before they impact business",
      icon: AlertTriangle
    }
  ];

  const riskMetrics = [
    {
      icon: TrendingDown,
      title: "Value at Risk (VaR)",
      value: "2.3%",
      change: "-15.2%",
      trend: "down",
      description: "95% confidence level"
    },
    {
      icon: AlertTriangle,
      title: "Risk Score",
      value: "Low",
      change: "Stable",
      trend: "stable",
      description: "Overall portfolio risk"
    },
    {
      icon: ShieldCheck,
      title: "Compliance Score",
      value: "98.7%",
      change: "+2.1%",
      trend: "up",
      description: "Regulatory compliance"
    },
    {
      icon: Activity,
      title: "Volatility Index",
      value: "12.4",
      change: "-8.3%",
      trend: "down",
      description: "Portfolio volatility"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Financial Risk Management | Zion Tech Group"
        description="Transform your financial risk management with AI-powered analytics. Get real-time risk monitoring, predictive modeling, and automated mitigation strategies."
        keywords="financial risk management, AI risk assessment, portfolio risk, credit risk, market risk, regulatory compliance"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>AI-Powered Financial Risk Management</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Financial Risk
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your financial risk management with cutting-edge AI that monitors, predicts, and mitigates risks 
                in real-time. Protect your assets and ensure regulatory compliance with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Risk Metrics Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">{metric.title}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className={`text-sm font-medium mb-1 ${
                    metric.trend === 'up' ? 'text-green-400' : 
                    metric.trend === 'down' ? 'text-red-400' : 'text-blue-400'
                  }`}>
                    {metric.change}
                  </div>
                  <div className="text-xs text-gray-400">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Risk Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines advanced machine learning with comprehensive financial expertise to provide 
                unparalleled risk management capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI Financial Risk Management platform can transform your business across various 
                financial services and risk management scenarios.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your financial institution. All plans include our core AI risk management features.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-blue-500 scale-105' 
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
                      : 'border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Risk Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading financial institutions that are already using AI to protect their assets and ensure regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialRiskManagement;