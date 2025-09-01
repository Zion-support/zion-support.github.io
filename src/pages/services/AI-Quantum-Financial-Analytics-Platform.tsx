import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Quantum,
  Cpu,
  Database,
  Network,
  Lock,
  Globe,
  Users,
  Award,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Coins,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Bell,
  Clock,
  Calendar,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIQuantumFinancialAnalyticsPlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quantum AI-Powered Analytics",
      description: "Leverage quantum computing algorithms for ultra-fast financial data processing and pattern recognition"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-Time Market Intelligence",
      description: "Instant market insights with predictive analytics powered by quantum machine learning"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Risk Management",
      description: "AI-driven risk assessment with quantum-enhanced portfolio optimization algorithms"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Multi-Dimensional Analysis",
      description: "Comprehensive financial modeling across multiple dimensions and market scenarios"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Market Coverage",
      description: "Real-time data from 150+ global markets with localized insights and compliance"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, SOC 2 compliance, and quantum-resistant security protocols"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small investment firms and individual traders",
      features: [
        "Quantum AI Analytics Engine",
        "Real-time Market Data (10 markets)",
        "Basic Risk Assessment",
        "Standard Reporting",
        "Email Support",
        "5 User Licenses"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for mid-size financial institutions and hedge funds",
      features: [
        "Advanced Quantum AI Algorithms",
        "Global Market Coverage (50+ markets)",
        "Advanced Risk Management",
        "Custom Dashboards",
        "Priority Support",
        "25 User Licenses",
        "API Access",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large financial institutions and multinational corporations",
      features: [
        "Full Quantum Computing Access",
        "Unlimited Market Coverage",
        "Custom AI Model Training",
        "White-label Solutions",
        "Dedicated Account Manager",
        "Unlimited Users",
        "Advanced API & SDK",
        "On-premise Deployment",
        "Custom Compliance Features"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "10x Faster Analysis",
      description: "Quantum computing reduces analysis time from hours to minutes"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "95% Accuracy Improvement",
      description: "AI-powered predictions with unprecedented accuracy rates"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "30% Better Returns",
      description: "Optimized portfolio strategies delivering superior performance"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Risk Reduction",
      description: "Advanced risk modeling reduces portfolio volatility by 40%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Atom className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Financial Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your financial analysis with the world's first quantum AI-powered platform. 
              Get real-time insights, predictive analytics, and risk management at quantum speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
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
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of financial analytics with cutting-edge quantum AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your financial operations with unprecedented speed and accuracy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
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
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that best fits your organization's needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading financial institutions already using our quantum AI platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400">
              Ready to discuss how our AI Quantum Financial Analytics Platform can transform your business?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="https://ziontechgroup.com/services" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  All Services
                </a>
                <a href="https://ziontechgroup.com/pricing" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Pricing Guide
                </a>
                <a href="https://ziontechgroup.com/case-studies" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Case Studies
                </a>
                <a href="https://ziontechgroup.com/contact" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialAnalyticsPlatform;