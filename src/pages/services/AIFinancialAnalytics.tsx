import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Shield, 
  Brain,
  Target,
  Zap,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart,
  PieChart,
  LineChart,
  AlertTriangle,
  Award,
  Globe,
  Smartphone,
  Database,
  Server,
  Cloud,
  Activity,
  Lock,
  Eye
} from 'lucide-react';

const AIFinancialAnalytics: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "AI-Powered Financial Forecasting",
      description: "Advanced machine learning algorithms that predict market trends, revenue patterns, and financial performance with 90%+ accuracy."
    },
    {
      icon: <BarChart className="w-6 h-6 text-green-600" />,
      title: "Real-Time Financial Dashboards",
      description: "Comprehensive financial analytics dashboards with real-time data visualization, KPI tracking, and customizable reporting."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Risk Assessment & Management",
      description: "AI-driven risk analysis that identifies potential financial threats, market volatility, and investment risks in real-time."
    },
    {
      icon: <Target className="w-6 h-6 text-red-600" />,
      title: "Portfolio Optimization",
      description: "Intelligent portfolio management with automated rebalancing, diversification strategies, and performance optimization recommendations."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: "Automated Financial Reporting",
      description: "AI-generated financial reports, compliance documentation, and regulatory filings with automated accuracy checks."
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: "Multi-Market Analysis",
      description: "Global financial market analysis covering stocks, bonds, commodities, cryptocurrencies, and alternative investments."
    }
  ];

  const benefits = [
    "Increase investment returns by 15-25%",
    "Reduce financial risk exposure by 40%",
    "Automate 80% of financial analysis tasks",
    "Improve decision-making speed by 60%",
    "Reduce compliance costs by 30%",
    "Achieve 95% forecast accuracy"
  ];

  const useCases = [
    {
      title: "Investment Management",
      description: "Professional portfolio management with AI-driven asset allocation, risk assessment, and performance optimization for institutional and retail investors.",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Corporate Finance",
      description: "Enterprise financial planning, budgeting, cash flow management, and strategic financial decision support for businesses of all sizes.",
      icon: <BarChart3 className="w-8 h-8 text-green-500" />
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment, stress testing, and mitigation strategies for financial institutions and corporate treasuries.",
      icon: <Shield className="w-8 h-8 text-red-500" />
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring, reporting, and audit preparation for financial regulations including SOX, Basel III, and GDPR.",
      icon: <Lock className="w-8 h-8 text-purple-500" />
    }
  ];

  const pricing = [
    {
      plan: "Professional",
      price: "$799",
      period: "per month",
      features: [
        "Up to 10 portfolios",
        "Basic AI forecasting",
        "Standard analytics",
        "Risk assessment",
        "Email support",
        "Mobile app access"
      ]
    },
    {
      plan: "Institutional",
      price: "$1,999",
      period: "per month",
      features: [
        "Up to 100 portfolios",
        "Advanced AI models",
        "Custom dashboards",
        "API access",
        "Priority support",
        "White-label solution",
        "Advanced reporting"
      ]
    },
    {
      plan: "Enterprise",
      price: "$4,999",
      period: "per month",
      features: [
        "Unlimited portfolios",
        "Custom AI training",
        "Dedicated support",
        "On-premise deployment",
        "Advanced integrations",
        "SLA guarantees",
        "Custom development"
      ]
    }
  ];

  const marketData = [
    {
      metric: "Market Coverage",
      value: "150+",
      description: "Global markets and exchanges"
    },
    {
      metric: "Data Points",
      value: "10M+",
      description: "Real-time financial data points"
    },
    {
      metric: "Forecast Accuracy",
      value: "90%+",
      description: "AI prediction accuracy"
    },
    {
      metric: "Response Time",
      value: "<100ms",
      description: "Real-time data latency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Financial Analytics Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionize your financial decision-making with AI-powered analytics. 
              Get real-time insights, predictive forecasting, and intelligent risk 
              management for superior investment performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Watch Demo
                <Play className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Financial Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive financial analytics 
              with predictive insights, risk management, and automated reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored financial analytics solutions for various industries 
              with specific requirements and compliance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform processes massive amounts of financial data to deliver 
              accurate insights and predictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {marketData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {data.value}
                </div>
                <div className="text-gray-900 font-semibold mb-1">
                  {data.metric}
                </div>
                <div className="text-gray-600 text-sm">
                  {data.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered financial analytics deliver quantifiable improvements 
              across all key performance indicators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your financial analytics needs and scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  index === 1 ? 'border-purple-500 scale-105' : 'border-gray-200'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.plan}
                  </h3>
                  <div className="text-4xl font-bold text-purple-600 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Return on Investment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI financial analytics platform delivers significant ROI within the first year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">15-25%</div>
              <div className="text-gray-600">Investment Returns</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Risk Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-gray-600">Task Automation</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-600 mb-2">3-6</div>
              <div className="text-gray-600">Months to ROI</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Financial Analytics?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join financial institutions and investors who trust our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Empowering the future through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">+1 302 464 0950</p>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
              <p className="text-gray-400">364 E Main St STE 1008</p>
              <p className="text-gray-400">Middletown DE 19709</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Solutions</li>
                <li>IT Services</li>
                <li>Micro SaaS</li>
                <li>Financial Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-white">
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIFinancialAnalytics;