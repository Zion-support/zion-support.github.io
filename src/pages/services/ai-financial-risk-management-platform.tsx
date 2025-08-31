import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  AlertTriangle, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Activity,
  Target,
  Zap,
  Lock,
  Eye,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  PieChart,
  LineChart,
  AlertCircle,
  TrendingDown,
  FileText,
  History,
  Settings,
  Monitor
} from 'lucide-react';

export default function AIFinancialRiskManagementPlatform() {
  const features = [
    "Real-time Risk Monitoring & Alerts",
    "AI-Powered Fraud Detection & Prevention",
    "Advanced Credit Risk Assessment",
    "Market Risk Analysis & Prediction",
    "Operational Risk Management",
    "Compliance Monitoring & Reporting",
    "Portfolio Risk Optimization",
    "Stress Testing & Scenario Analysis",
    "Regulatory Compliance Automation",
    "Custom Risk Model Development"
  ];

  const benefits = [
    "Reduce financial losses by 70%",
    "Improve fraud detection accuracy to 99.8%",
    "Cut compliance costs by 60%",
    "Accelerate risk assessment by 85%",
    "Enhance regulatory reporting by 90%",
    "Increase portfolio returns by 25%"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small financial institutions and fintech startups",
      features: [
        "Basic risk monitoring",
        "Fraud detection alerts",
        "Standard compliance reporting",
        "Email support",
        "5 user seats"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing financial services companies",
      features: [
        "Advanced AI risk models",
        "Real-time fraud prevention",
        "Comprehensive compliance suite",
        "Priority support",
        "25 user seats",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large banks and financial institutions",
      features: [
        "Custom AI model training",
        "Unlimited risk monitoring",
        "24/7 dedicated support",
        "Custom development",
        "Unlimited user seats",
        "On-premise deployment",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const riskTypes = [
    {
      name: "Credit Risk",
      description: "Assess and manage lending risks with AI-powered credit scoring and default prediction",
      icon: AlertTriangle,
      metrics: ["Default probability", "Credit scoring", "Portfolio risk", "Concentration analysis"]
    },
    {
      name: "Market Risk",
      description: "Monitor market volatility and assess portfolio exposure to market movements",
      icon: TrendingDown,
      metrics: ["VaR calculation", "Stress testing", "Scenario analysis", "Correlation modeling"]
    },
    {
      name: "Operational Risk",
      description: "Identify and mitigate operational risks across all business processes",
      icon: Shield,
      metrics: ["Process monitoring", "Incident tracking", "Loss database", "Risk assessment"]
    },
    {
      name: "Fraud Risk",
      description: "Detect and prevent fraudulent activities in real-time using advanced AI",
      icon: Eye,
      metrics: ["Real-time detection", "Pattern recognition", "Behavioral analysis", "Alert management"]
    }
  ];

  const useCases = [
    {
      title: "Banking Risk Management",
      description: "Comprehensive risk management for retail and commercial banking operations",
      icon: DollarSign,
      impact: "Reduce losses by 70%"
    },
    {
      title: "Investment Portfolio Risk",
      description: "Advanced portfolio risk analysis and optimization for investment firms",
      icon: BarChart3,
      impact: "Increase returns by 25%"
    },
    {
      title: "Insurance Risk Assessment",
      description: "AI-powered underwriting and claims risk assessment for insurance companies",
      icon: Shield,
      impact: "Improve accuracy by 85%"
    },
    {
      title: "Fintech Compliance",
      description: "Automated compliance monitoring and reporting for financial technology companies",
      icon: Lock,
      impact: "Cut costs by 60%"
    }
  ];

  const stats = [
    { number: '500+', label: 'Financial Institutions', icon: Users },
    { number: '99.8%', label: 'Fraud Detection Accuracy', icon: Shield },
    { number: '70%', label: 'Loss Reduction', icon: TrendingUp },
    { number: '85%', label: 'Faster Risk Assessment', icon: Clock }
  ];

  const complianceFeatures = [
    {
      name: "Regulatory Reporting",
      description: "Automated generation of regulatory reports for Basel III, SOX, and other frameworks",
      icon: FileText
    },
    {
      name: "Audit Trail",
      description: "Complete audit trail of all risk assessments and decisions for compliance purposes",
      icon: History
    },
    {
      name: "Policy Management",
      description: "Centralized management of risk policies and procedures with automated enforcement",
      icon: Settings
    },
    {
      name: "Real-time Monitoring",
      description: "Continuous monitoring of compliance status with instant alerts for violations",
      icon: Monitor
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Risk Management Platform - Zion Tech Group</title>
        <meta name="description" content="Transform financial risk management with AI-powered analytics. Reduce losses by 70%, improve fraud detection to 99.8%, and cut compliance costs by 60%." />
        <meta name="keywords" content="financial risk management, AI risk analytics, fraud detection, compliance monitoring, credit risk assessment" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-financial-risk-management-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                AI-Powered Risk Management
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Financial Risk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Management Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Revolutionize your financial risk management with AI-powered analytics that detect threats in real-time, 
                predict risks before they materialize, and ensure complete regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Risk Management</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive risk management tools powered by artificial intelligence to protect your financial assets and ensure compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Types Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Risk <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coverage of all major financial risk types with AI-powered analysis and management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {riskTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{type.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div className="space-y-2">
                    {type.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the real impact that AI-powered financial risk management delivers to your organization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how leading financial institutions are using our platform to manage risks and ensure compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                    {useCase.impact}
                  </div>
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your financial risk management needs. Start small, scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20 scale-105' 
                      : 'border-white/10 hover:border-blue-400/50'
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
                    <div className="text-4xl font-bold text-cyan-400 mb-1">{plan.price}</div>
                    <div className="text-gray-400 mb-4">{plan.period}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Risk Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join hundreds of financial institutions that have revolutionized their risk management with AI-powered analytics. 
                Start your free trial today and see the impact in just 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Need Help Getting Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our financial risk management experts are here to help you implement the perfect risk strategy for your organization.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="https://ziontechgroup.com/services"
                    className="inline-flex items-center px-6 py-3 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                  >
                    View All Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}