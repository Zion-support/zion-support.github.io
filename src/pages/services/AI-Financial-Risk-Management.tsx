import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Eye,
  PenTool,
  BarChart3,
  MessageSquare,
  Calendar,
  DollarSign,
  AlertTriangle,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIFinancialRiskManagement = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms analyze market data, credit scores, and financial indicators in real-time"
    },
    {
      icon: BarChart3,
      title: "Real-time Market Monitoring",
      description: "Continuous monitoring of global markets, currencies, commodities, and financial instruments"
    },
    {
      icon: TrendingUp,
      title: "Predictive Risk Modeling",
      description: "AI-driven forecasting models predict potential risks and market movements before they occur"
    },
    {
      icon: Target,
      title: "Portfolio Risk Analysis",
      description: "Comprehensive risk assessment for investment portfolios with stress testing and scenario analysis"
    },
    {
      icon: Users,
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring for Basel III, Solvency II, and other regulatory frameworks"
    },
    {
      icon: Zap,
      title: "Automated Risk Alerts",
      description: "Instant notifications for critical risk thresholds and market anomalies"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Perfect for financial advisors and small investment firms",
      features: [
        "Up to 100 portfolio risk assessments/month",
        "Basic market monitoring",
        "5 asset class coverage",
        "Email support",
        "Standard reporting",
        "Basic dashboard"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$899",
      period: "/month",
      description: "Ideal for banks, hedge funds, and large financial institutions",
      features: [
        "Up to 10,000 portfolio assessments/month",
        "Advanced AI analytics & insights",
        "Unlimited asset classes",
        "Priority support",
        "Custom reporting & dashboards",
        "API access",
        "Team collaboration tools",
        "Advanced risk modeling"
      ],
      popular: true
    },
    {
      name: "Institutional",
      price: "$2,499",
      period: "/month",
      description: "For major financial institutions with complex risk management needs",
      features: [
        "Unlimited portfolio assessments",
        "Custom AI models & algorithms",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations & APIs",
        "Advanced security & compliance",
        "SLA guarantees",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: AlertTriangle,
      title: "Early Risk Detection",
      description: "Identify potential risks up to 48 hours before traditional methods with AI-powered analysis"
    },
    {
      icon: TrendingDown,
      title: "Reduced Losses",
      description: "Minimize portfolio losses by up to 35% through proactive risk management"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Monitor risk metrics 24/7 with automated alerts and notifications"
    },
    {
      icon: PieChart,
      title: "Portfolio Optimization",
      description: "Optimize portfolio allocation based on AI-driven risk-return analysis"
    },
    {
      icon: LineChart,
      title: "Regulatory Compliance",
      description: "Ensure compliance with financial regulations through automated monitoring and reporting"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce operational costs by up to 40% through automated risk management processes"
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Investment Management",
      description: "Portfolio risk assessment, asset allocation optimization, and performance monitoring for investment firms"
    },
    {
      icon: Shield,
      title: "Banking & Lending",
      description: "Credit risk assessment, loan portfolio management, and regulatory compliance for financial institutions"
    },
    {
      icon: BarChart,
      title: "Insurance",
      description: "Underwriting risk assessment, claims analysis, and actuarial modeling for insurance companies"
    },
    {
      icon: Globe,
      title: "Corporate Treasury",
      description: "Foreign exchange risk management, interest rate hedging, and cash flow optimization"
    }
  ];

  const riskMetrics = [
    {
      metric: "Value at Risk (VaR)",
      description: "AI-powered calculation of potential portfolio losses at different confidence levels"
    },
    {
      metric: "Expected Shortfall",
      description: "Advanced risk measure that considers tail risk beyond traditional VaR"
    },
    {
      metric: "Stress Testing",
      description: "Scenario analysis under extreme market conditions and economic scenarios"
    },
    {
      metric: "Correlation Analysis",
      description: "Real-time monitoring of asset correlations and diversification effectiveness"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Financial Risk Management | Zion Tech Group"
        description="Transform your financial risk management with AI-powered analytics. Monitor, predict, and mitigate risks with cutting-edge machine learning technology."
        keywords="AI financial risk management, risk assessment, portfolio risk, market monitoring, financial analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Financial Risk Management</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI Financial
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Risk Management
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your financial risk management with AI-powered analytics. Monitor, predict, 
                and mitigate risks with cutting-edge machine learning technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features for Financial Risk Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform provides everything you need to identify, assess, and manage 
                financial risks across all asset classes and market conditions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Metrics Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Risk Metrics & Analytics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform provides comprehensive risk metrics and analytics to help you 
                make informed financial decisions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {riskMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{metric.metric}</h3>
                  <p className="text-gray-300 text-lg">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered financial risk management platform is designed to work 
                across various financial institutions and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our AI Risk Management Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of financial institutions that have transformed their risk 
                management with our AI-powered platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your financial institution's needs. 
                Start free and upgrade as you grow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' 
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Financial Risk Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of financial institutions using AI to manage risks more effectively and drive better returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
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

export default AIFinancialRiskManagement;