import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Users, 
  Zap, 
  Globe, 
  Lock, 
  Eye,
  BarChart3,
  TrendingUp,
  Clock,
  Award,
  Star,
  Cpu,
  Database,
  Search,
  Filter,
  Download,
  Share2
} from 'lucide-react';

export default function AIComplianceAssistant() {
  const features = [
    {
      icon: Shield,
      title: "Automated Compliance Monitoring",
      description: "24/7 monitoring of regulatory changes and automatic updates to compliance requirements."
    },
    {
      icon: CheckCircle,
      title: "Risk Assessment & Scoring",
      description: "AI-powered risk analysis with real-time scoring and prioritization of compliance issues."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Intelligent document processing, classification, and automated compliance verification."
    },
    {
      icon: Users,
      title: "Role-Based Access Control",
      description: "Secure access management with granular permissions and audit trails."
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Instant notifications for compliance violations and regulatory changes."
    },
    {
      icon: Globe,
      title: "Multi-Jurisdiction Support",
      description: "Comprehensive coverage of global regulations including GDPR, CCPA, SOX, and more."
    }
  ];

  const benefits = [
    "Reduce compliance costs by 40-60% through automation",
    "Improve compliance accuracy by 95% with AI validation",
    "Reduce audit preparation time by 70%",
    "Minimize regulatory fines and penalties by 80%",
    "Enhance risk visibility and management by 90%",
    "Streamline compliance reporting and documentation"
  ];

  const regulations = [
    {
      name: "GDPR (EU)",
      description: "Data protection and privacy regulation for EU citizens",
      icon: Shield
    },
    {
      name: "CCPA (California)",
      description: "Consumer privacy rights and data protection in California",
      icon: Lock
    },
    {
      name: "SOX (Sarbanes-Oxley)",
      description: "Financial reporting and corporate governance standards",
      icon: FileText
    },
    {
      name: "HIPAA (Healthcare)",
      description: "Patient data protection and healthcare privacy standards",
      icon: Users
    },
    {
      name: "PCI DSS",
      description: "Payment card industry data security standards",
      icon: Lock
    },
    {
      name: "ISO 27001",
      description: "Information security management systems standard",
      icon: Shield
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Regulatory reporting, risk management, and compliance monitoring for banks and fintech companies"
    },
    {
      industry: "Healthcare",
      description: "HIPAA compliance, patient data protection, and medical record security"
    },
    {
      industry: "E-commerce",
      description: "Data privacy compliance, payment security, and customer data protection"
    },
    {
      industry: "Manufacturing",
      description: "Environmental compliance, safety regulations, and quality standards"
    },
    {
      industry: "Technology",
      description: "Data privacy, security compliance, and international regulatory adherence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Compliance Assistant - Zion Tech Group"
        description="Automate regulatory compliance with AI-powered monitoring, risk assessment, and governance solutions. Stay compliant with global regulations."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">AI Compliance Assistant</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Stay Compliant with
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                {" "}AI-Powered Governance
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate regulatory compliance, reduce risks, and ensure governance excellence with our 
              AI-powered compliance assistant that monitors, analyzes, and manages regulatory requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Start Compliance Audit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Compliance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Compliance Assistant provides end-to-end compliance management with 
              intelligent automation, real-time monitoring, and comprehensive reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Measurable Compliance Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your compliance operations with quantifiable improvements in efficiency, 
              accuracy, and risk management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-xl border border-green-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI compliance algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enterprise-grade security & privacy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global regulatory coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 compliance monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Proven compliance track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Global Regulatory Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Compliance Assistant supports compliance with major global regulations 
              and industry standards across all sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulations.map((regulation, index) => (
              <motion.div
                key={regulation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                    <regulation.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{regulation.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{regulation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Compliance Assistant is designed to work across industries, 
              providing tailored compliance solutions for your specific regulatory needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 p-12 rounded-2xl border border-green-400/20 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already revolutionized their compliance 
              operations with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

