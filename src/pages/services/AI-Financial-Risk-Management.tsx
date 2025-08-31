import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Globe,
  Database,
  Settings,
  Eye,
  Star,
  Target
} from 'lucide-react';

const AIFinancialRiskManagement: React.FC = () => {
  const features = [
    {
      icon: TrendingDown,
      title: "Real-time Risk Monitoring",
      description: "24/7 monitoring of market conditions, portfolio performance, and risk indicators"
    },
    {
      icon: Shield,
      title: "AI-Powered Risk Assessment",
      description: "Advanced ML algorithms analyze historical data to predict potential risk scenarios"
    },
    {
      icon: BarChart3,
      title: "Portfolio Stress Testing",
      description: "Simulate extreme market conditions to evaluate portfolio resilience"
    },
    {
      icon: AlertTriangle,
      title: "Early Warning System",
      description: "Proactive alerts for emerging risks before they impact your investments"
    },
    {
      icon: DollarSign,
      title: "Regulatory Compliance",
      description: "Automated compliance reporting for Basel III, Solvency II, and other regulations"
    },
    {
      icon: Clock,
      title: "Instant Risk Reporting",
      description: "Real-time dashboards and automated reports for stakeholders and regulators"
    }
  ];

  const benefits = [
    "Reduce portfolio losses by up to 35% through early risk detection",
    "Achieve 99.7% accuracy in risk prediction using AI models",
    "Cut compliance reporting time by 75% with automation",
    "Improve risk-adjusted returns by 20-40%",
    "Real-time monitoring across all asset classes and geographies",
    "Automated regulatory compliance across multiple jurisdictions"
  ];

  const pricing = [
    {
      plan: "Professional",
      price: "$3,500",
      period: "/month",
      features: [
        "Up to $100M portfolio monitoring",
        "Basic AI risk models",
        "Daily risk reports",
        "Email alerts",
        "Standard compliance tools",
        "Email support"
      ]
    },
    {
      plan: "Enterprise",
      price: "$8,500",
      period: "/month",
      features: [
        "Up to $1B portfolio monitoring",
        "Advanced AI risk models",
        "Real-time monitoring",
        "Custom risk thresholds",
        "Full compliance suite",
        "Priority support",
        "API access"
      ]
    },
    {
      plan: "Institutional",
      price: "$22,000",
      period: "/month",
      features: [
        "Unlimited portfolio monitoring",
        "Custom AI model training",
        "Multi-asset class support",
        "24/7 dedicated support",
        "White-label solutions",
        "Custom integrations",
        "On-premise options"
      ]
    }
  ];

  const useCases = [
    {
      title: "Hedge Funds",
      description: "Monitor complex derivative portfolios and detect correlation breakdowns",
      icon: Target
    },
    {
      title: "Asset Managers",
      description: "Optimize portfolio allocation based on real-time risk metrics",
      icon: BarChart3
    },
    {
      title: "Banks",
      description: "Comply with Basel III requirements and monitor credit risk exposure",
      icon: Shield
    },
    {
      title: "Insurance Companies",
      description: "Manage investment portfolio risks and ensure Solvency II compliance",
      icon: TrendingDown
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <TrendingDown className="w-4 h-4 mr-2" />
              AI-Powered Risk Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                {" "}Risk Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your investments with AI-driven risk management. Monitor portfolios in real-time, 
              predict market risks, and ensure regulatory compliance across all asset classes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Risk Management Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage cutting-edge AI to identify, assess, and mitigate financial risks in real-time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Designed for Financial Institutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored solutions for different types of financial organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Risk Management
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See measurable improvements in risk detection, portfolio performance, and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your organization's risk management needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  index === 1 
                    ? 'border-red-500/50 bg-red-500/5' 
                    : 'border-slate-700'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    index === 1
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'border border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Protect Your Investments?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading financial institutions that trust our AI-powered risk management platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-2">Contact Us</h3>
              <p>kleber@ziontechgroup.com</p>
              <p>+1 (302) 464-0950</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <a 
                href="https://ziontechgroup.com" 
                className="text-red-400 hover:text-red-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialRiskManagement;