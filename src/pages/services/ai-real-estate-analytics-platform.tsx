import React from 'react';
import { motion } from 'framer-motion';
import {

  Home, 
  TrendingUp, 
  Brain, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Clock,
  DollarSign,
  Target,
  Zap,
  Eye,
  Lock,
  Globe,
  Activity,
  LineChart,
  PieChart,
  AlertTriangle,
  Settings,
  Database,
  Phone,
  Mail,
  MapPin,
  Building,
  MapPinIcon,
  Calculator
} from 'lucide-react';

const AIRealEstateAnalyticsPlatform = () => {

  const features = [
    {

      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Market Analysis",
      description: "Advanced machine learning algorithms analyze real estate markets in real-time, providing predictive insights for investment decisions with 92% accuracy."
    },
    {

      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Property Valuation",
      description: "AI models predict property values based on market trends, neighborhood data, and economic indicators, helping investors make informed decisions."
    },
    {

      icon: <Building className="w-6 h-6" />,
      title: "Portfolio Optimization",
      description: "Intelligent portfolio management tools that optimize real estate investments based on risk tolerance, market conditions, and investment goals."
    },
    {

      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Geographic Market Intelligence",
      description: "Comprehensive geographic analysis including neighborhood trends, school ratings, crime statistics, and future development plans."
    }
  ];

  const benefits = [
    "Increase investment returns by 25-40% through AI-driven insights",
    "Reduce market research time from weeks to hours",
    "Identify undervalued properties before they hit the market",
    "Optimize portfolio allocation for maximum returns",
    "Stay ahead of market trends with predictive analytics",
    "Comprehensive risk assessment and mitigation strategies"
  ];

  const pricing = [
    {

      plan: "Starter",
      price: "$199",
      period: "/month",
      features: [
        "Basic market analysis",
        "Property valuation estimates",
        "Market trend reports",
        "Email support"
      ]
    },
    {

      plan: "Professional",
      price: "$399",
      period: "/month",
      features: [
        "Advanced AI analytics",
        "Portfolio optimization",
        "Real-time market alerts",
        "Priority support",
        "Custom reports"
      ]
    },
    {

      plan: "Enterprise",
      price: "$799",
      period: "/month",
      features: [
        "Full AI platform access",
        "Custom AI model training",
        "API access",
        "Dedicated account manager",
        "White-label solutions"
      ]
    }
  ];

  const useCases = [
    {

      title: "Real Estate Investors",
      description: "Identify high-potential properties and optimize investment portfolios with AI-driven insights."
    },
    {

      title: "Property Developers",
      description: "Analyze market demand and identify optimal locations for new developments."
    },
    {

      title: "Real Estate Agents",
      description: "Provide clients with data-driven market insights and property recommendations."
    },
    {

      title: "Financial Institutions",
      description: "Assess real estate collateral values and manage portfolio risk effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Home className="w-12 h-12 text-blue-500 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Real Estate Analytics
                <span className="text-blue-500 block">Platform</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your real estate investments with AI-powered market analysis, predictive valuations, 
              and intelligent portfolio optimization. Make data-driven decisions that maximize returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-blue-500 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Real Estate Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our advanced AI platform provides comprehensive real estate analytics that give you the competitive edge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Real Estate Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented growth and profitability with AI-driven insights and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your real estate business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800 p-8 rounded-lg border ${

                  index === 1 ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${

                    index === 1
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Real Estate Professional
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're an investor, developer, agent, or financial institution, our platform adapts to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
              >
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Revolutionize Your Real Estate Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of real estate professionals who have already transformed their business with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIRealEstateAnalyticsPlatform;