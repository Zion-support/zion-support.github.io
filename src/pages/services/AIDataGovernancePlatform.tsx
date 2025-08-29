import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Database, 
  Lock, 
  Eye, 
  TrendingUp, 
  Users, 
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Settings,
  Monitor,
  Globe,
  Zap,
  Target,
  Rocket,
  Star,
  Award,
  Clock,
  ArrowRight,
  Play
} from 'lucide-react';

export default function AIDataGovernancePlatform() {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Data Discovery",
      description: "Automatically identify and classify sensitive data across your entire data ecosystem"
    },
    {
      icon: Lock,
      title: "Intelligent Access Control",
      description: "Dynamic permission management based on user behavior and data sensitivity"
    },
    {
      icon: Eye,
      title: "Real-time Data Monitoring",
      description: "Continuous surveillance of data access patterns and potential security threats"
    },
    {
      icon: TrendingUp,
      title: "Compliance Automation",
      description: "Automated compliance reporting for GDPR, CCPA, HIPAA, and other regulations"
    },
    {
      icon: Users,
      title: "Role-Based Governance",
      description: "Granular access control with automated role assignment and privilege management"
    },
    {
      icon: BarChart3,
      title: "Data Lineage & Audit",
      description: "Complete traceability of data from source to consumption with detailed audit trails"
    }
  ];

  const complianceFrameworks = [
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data subjects",
      icon: Globe,
      status: "Full Compliance"
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act compliance for California residents",
      icon: Shield,
      status: "Full Compliance"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act for healthcare data",
      icon: Lock,
      status: "Full Compliance"
    },
    {
      name: "SOX",
      description: "Sarbanes-Oxley Act compliance for financial reporting",
      icon: BarChart3,
      status: "Full Compliance"
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      icon: Award,
      status: "Full Compliance"
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2 Type II compliance",
      icon: CheckCircle,
      status: "Full Compliance"
    }
  ];

  const pricing = [
    {
      name: "Foundation",
      price: "$599",
      period: "/month",
      description: "Perfect for small organizations starting their data governance journey",
      features: [
        "Up to 1TB data under management",
        "Basic AI discovery",
        "Standard compliance templates",
        "Email support",
        "Basic audit trails",
        "Role-based access control"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing companies with complex data governance needs",
      features: [
        "Up to 10TB data under management",
        "Advanced AI capabilities",
        "All compliance frameworks",
        "Priority support",
        "Advanced analytics",
        "Custom workflows",
        "Data lineage tracking",
        "Real-time monitoring"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade data governance",
      features: [
        "Unlimited data under management",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom development",
        "API access",
        "Multi-tenant support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Compliance Risk",
      description: "Automated compliance monitoring reduces regulatory violations by 90%",
      metric: "90% risk reduction",
      icon: Shield
    },
    {
      title: "Improve Data Security",
      description: "AI-powered threat detection prevents data breaches before they happen",
      metric: "99.9% security uptime",
      icon: Lock
    },
    {
      title: "Accelerate Data Access",
      description: "Streamlined governance processes speed up data access by 5x",
      metric: "5x faster access",
      icon: Zap
    },
    {
      title: "Reduce Operational Costs",
      description: "Automation reduces manual governance tasks by 70%",
      metric: "70% cost reduction",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Data Governance Platform - Zion Tech Group"
        description="Revolutionize data governance with AI-powered discovery, compliance automation, and intelligent access control. Ensure data security and regulatory compliance."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Data Governance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Data Governance Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data governance with AI-powered discovery, compliance automation, 
              and intelligent access control. Ensure data security and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Watch Demo
              </button>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Data Governance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to govern, secure, and manage your data effectively
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Compliance Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet all major regulatory requirements with automated compliance management
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <framework.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{framework.name}</h3>
                    <p className="text-gray-300 mb-3">{framework.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {framework.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real results our AI Data Governance Platform delivers
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 mb-3">{benefit.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your data governance needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-900 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Data Governance?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join leading organizations that have revolutionized their data governance with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}