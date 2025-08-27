import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Database, 
  Lock, 
  Eye, 
  BarChart3, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Cpu,
  Network,
  Bot,
  Settings,
  FileText,
  Search,
  AlertTriangle,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  Zap,
  Target,
  Clock,
  ShoppingCart
} from 'lucide-react';

export default function AIDataGovernancePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Data Discovery",
      description: "Automatically discover, classify, and catalog data across your entire organization"
    },
    {
      icon: Shield,
      title: "Intelligent Compliance Monitoring",
      description: "Real-time monitoring and enforcement of data governance policies and regulations"
    },
    {
      icon: Database,
      title: "Data Quality Assessment",
      description: "AI-driven data quality scoring and automated remediation recommendations"
    },
    {
      icon: Lock,
      title: "Advanced Access Control",
      description: "Granular, role-based access control with AI-powered threat detection"
    },
    {
      icon: Eye,
      title: "Data Lineage Tracking",
      description: "Complete visibility into data flow, transformations, and usage across systems"
    },
    {
      icon: BarChart3,
      title: "Governance Analytics",
      description: "Comprehensive dashboards and reporting for data governance effectiveness"
    }
  ];

  const benefits = [
    "Ensure 100% regulatory compliance with GDPR, CCPA, and industry standards",
    "Reduce data security risks by up to 90% with AI-powered threat detection",
    "Improve data quality scores by 75% through automated monitoring and remediation",
    "Streamline data governance processes and reduce manual oversight by 80%",
    "Gain complete visibility into data usage and lineage across all systems",
    "Automate policy enforcement and reduce compliance violations by 95%"
  ];

  const pricingPlans = [
    {
      name: "Foundation",
      price: "$199",
      period: "/month",
      description: "Essential data governance for small to medium organizations",
      features: [
        "Up to 10 data sources",
        "Basic AI discovery",
        "Standard compliance templates",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "Comprehensive governance for growing enterprises",
      features: [
        "Up to 100 data sources",
        "Advanced AI capabilities",
        "Custom compliance policies",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Global",
      price: "$1,299",
      period: "/month",
      description: "Enterprise-grade solution for multinational organizations",
      features: [
        "Unlimited data sources",
        "Custom AI models",
        "Multi-region compliance",
        "Dedicated support",
        "White-label solution",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const complianceStandards = [
    {
      name: "GDPR",
      description: "European data protection regulation compliance",
      icon: Shield,
      features: ["Data subject rights", "Consent management", "Data portability"]
    },
    {
      name: "CCPA",
      description: "California consumer privacy act compliance",
      icon: Lock,
      features: ["Consumer rights", "Opt-out mechanisms", "Data disclosure"]
    },
    {
      name: "HIPAA",
      description: "Healthcare data protection standards",
      icon: Users,
      features: ["PHI protection", "Access controls", "Audit trails"]
    },
    {
      name: "SOX",
      description: "Financial reporting compliance",
      icon: FileText,
      features: ["Financial data integrity", "Access logging", "Change tracking"]
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Ensure regulatory compliance and data security for sensitive financial information",
      icon: TrendingUp
    },
    {
      title: "Healthcare",
      description: "Protect patient data and maintain HIPAA compliance across all systems",
      icon: Users
    },
    {
      title: "E-commerce",
      description: "Manage customer data privacy and ensure GDPR/CCPA compliance",
      icon: ShoppingCart
    },
    {
      title: "Manufacturing",
      description: "Govern industrial data and maintain intellectual property security",
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-6">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">AI-Powered Data Governance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Data Governance
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect, govern, and optimize your data with AI-powered intelligence. 
              Ensure compliance, security, and quality across your entire data ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Data Governance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to establish, maintain, and optimize your data governance framework with AI intelligence.
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Data Governance Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of data governance with AI-powered intelligence and automated compliance management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built-in Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Out-of-the-box compliance with major regulatory frameworks and industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{standard.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{standard.description}</p>
                <ul className="space-y-2 text-left">
                  {standard.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's data governance needs and compliance requirements.
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
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                      : 'border border-green-500/50 text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Data Governance Platform serves different industries and compliance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join organizations worldwide that trust our AI Data Governance Platform to protect their most valuable asset.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}