import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Zap, 
  Brain,
  Rocket,
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Globe,
  Lock,
  Users,
  BarChart3,
  Target,
  MessageCircle,
  Settings,
  Eye,
  Database
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIComplianceAssistant() {
  const features = [
    {
      icon: Shield,
      title: 'Regulatory Monitoring',
      description: 'Real-time tracking of regulatory changes and compliance requirements across jurisdictions'
    },
    {
      icon: Brain,
      title: 'AI Risk Assessment',
      description: 'Intelligent analysis of compliance risks and automated mitigation recommendations'
    },
    {
      icon: FileText,
      title: 'Document Compliance',
      description: 'Automated review and validation of documents for regulatory compliance'
    },
    {
      icon: BarChart3,
      title: 'Compliance Analytics',
      description: 'Comprehensive reporting and insights on compliance status and trends'
    },
    {
      icon: Zap,
      title: 'Automated Auditing',
      description: 'Streamlined audit processes with AI-powered compliance verification'
    },
    {
      icon: Target,
      title: 'Policy Management',
      description: 'Centralized policy creation, distribution, and compliance tracking'
    }
  ];

  const benefits = [
    'Reduce compliance violations by 80%',
    'Automate 70% of compliance tasks',
    'Cut audit preparation time by 60%',
    'Improve regulatory reporting accuracy by 90%',
    'Ensure 24/7 compliance monitoring',
    'Reduce compliance costs by 50%'
  ];

  const complianceAreas = [
    {
      area: 'GDPR & Data Privacy',
      description: 'Comprehensive data protection compliance for EU regulations'
    },
    {
      area: 'SOX & Financial Compliance',
      description: 'Financial reporting and internal control compliance'
    },
    {
      area: 'HIPAA & Healthcare',
      description: 'Healthcare data protection and privacy compliance'
    },
    {
      area: 'ISO Standards',
      description: 'Quality management and information security compliance'
    },
    {
      area: 'Industry-Specific Regulations',
      description: 'Tailored compliance for banking, insurance, and manufacturing'
    },
    {
      area: 'Environmental Compliance',
      description: 'Sustainability and environmental regulation compliance'
    }
  ];

  return (
    <>
      <SEO 
        title="AI Compliance Assistant - Automated Regulatory Compliance | Zion Tech Group"
        description="Streamline your compliance processes with our AI Compliance Assistant. Automated monitoring, risk assessment, and regulatory reporting for all industries."
        keywords="AI compliance, regulatory compliance, compliance automation, risk assessment, audit automation, regulatory monitoring"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Compliance Intelligence
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Compliance Assistant
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Automated Regulatory Compliance
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Stay ahead of regulatory changes with AI-powered compliance monitoring, automated risk assessment, 
                and intelligent policy management. Ensure your business remains compliant 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-900/50">
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
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI Compliance Assistant provides end-to-end compliance management with intelligent automation 
                and real-time monitoring capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transform Your Compliance Process
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience significant improvements in compliance efficiency, accuracy, and cost-effectiveness.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Compliance Coverage
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI Compliance Assistant covers all major regulatory frameworks and industry standards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{area.area}</h3>
                  <p className="text-slate-300">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Simplify Compliance?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of organizations that trust our AI Compliance Assistant to keep them 
                compliant and ahead of regulatory changes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}