import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, AlertTriangle, BarChart3, DollarSign, Brain, Lock, Activity } from 'lucide-react';

export default function AIFinancialRiskManagement() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms for comprehensive risk analysis and prediction"
    },
    {
      icon: AlertTriangle,
      title: "Real-time Threat Detection",
      description: "Continuous monitoring and instant alerts for emerging financial risks"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast potential risks and market volatility with precision"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated regulatory compliance checking and reporting"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Optimization",
      description: "AI-driven portfolio management and risk-adjusted return optimization"
    },
    {
      icon: Lock,
      title: "Fraud Detection",
      description: "Advanced pattern recognition to identify and prevent fraudulent activities"
    }
  ];

  const riskTypes = [
    {
      title: "Market Risk",
      description: "Monitor market volatility, price movements, and trading risks",
      icon: "📈",
      coverage: "95%"
    },
    {
      title: "Credit Risk",
      description: "Assess borrower creditworthiness and default probabilities",
      icon: "💳",
      coverage: "98%"
    },
    {
      title: "Operational Risk",
      description: "Identify operational failures and process-related risks",
      icon: "⚙️",
      coverage: "92%"
    },
    {
      title: "Liquidity Risk",
      description: "Monitor cash flow and liquidity position management",
      icon: "💧",
      coverage: "97%"
    },
    {
      title: "Regulatory Risk",
      description: "Track compliance with financial regulations and standards",
      icon: "📋",
      coverage: "99%"
    },
    {
      title: "Cybersecurity Risk",
      description: "Protect against digital threats and data breaches",
      icon: "🔒",
      coverage: "96%"
    }
  ];

  const industries = [
    {
      name: "Banking & Finance",
      description: "Comprehensive risk management for financial institutions",
      benefits: ["Regulatory compliance", "Credit risk assessment", "Market volatility monitoring"]
    },
    {
      name: "Investment Management",
      description: "Portfolio risk analysis and optimization for asset managers",
      benefits: ["Portfolio optimization", "Risk-adjusted returns", "Market timing insights"]
    },
    {
      name: "Insurance",
      description: "Actuarial risk modeling and claims fraud detection",
      benefits: ["Claims fraud detection", "Actuarial modeling", "Premium optimization"]
    },
    {
      name: "Corporate Finance",
      description: "Enterprise risk management and financial planning",
      benefits: ["Cash flow forecasting", "Operational risk management", "Strategic planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Financial
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Risk Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protect your financial assets with AI-powered risk management solutions that provide 
              real-time monitoring, predictive analytics, and automated compliance across all risk categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Risk Management Features
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive AI-driven solutions for identifying, analyzing, and mitigating financial risks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our AI platform covers all major financial risk categories with industry-leading accuracy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskTypes.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{risk.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{risk.title}</h3>
                  <p className="text-gray-300 mb-4">{risk.description}</p>
                  <div className="bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-lg p-3">
                    <div className="text-emerald-400 font-semibold text-lg">{risk.coverage}</div>
                    <div className="text-gray-400 text-sm">Detection Accuracy</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Tailored risk management solutions for different financial sectors and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Proven Risk Management Results
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our AI-powered platform delivers measurable improvements in risk detection and management
              </p>
              <div className="space-y-6">
                {[
                  { metric: "Risk Detection Accuracy", value: "96.5%", improvement: "+23% vs traditional methods" },
                  { metric: "False Positive Reduction", value: "85%", improvement: "Significant improvement in efficiency" },
                  { metric: "Processing Speed", value: "Real-time", improvement: "Instant risk assessment" },
                  { metric: "Compliance Coverage", value: "99.2%", improvement: "Complete regulatory compliance" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{stat.metric}</span>
                      <span className="text-emerald-400 font-bold text-xl">{stat.value}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{stat.improvement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Risk Dashboard Preview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-white">Market Risk</span>
                  </div>
                  <div className="text-green-400 font-semibold">Low</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-white">Credit Risk</span>
                  </div>
                  <div className="text-yellow-400 font-semibold">Medium</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-white">Operational Risk</span>
                  </div>
                  <div className="text-green-400 font-semibold">Low</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-white">Liquidity Risk</span>
                  </div>
                  <div className="text-green-400 font-semibold">Low</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Financial Future
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Don't let financial risks threaten your organization. Implement AI-powered risk management today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Start Risk Assessment
              </button>
              <button className="px-8 py-4 border border-emerald-400 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                Request Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}