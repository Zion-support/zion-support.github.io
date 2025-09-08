import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, FileText, Users, Zap, Globe, Award, BarChart3, Lock, Eye, Clock } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIComplianceAssistant() {
  const features = [
    {
      icon: Shield,
      title: "Automated Compliance Monitoring",
      description: "24/7 monitoring of regulatory requirements and automatic alerts for compliance issues"
    },
    {
      icon: CheckCircle,
      title: "Policy Management",
      description: "Centralized policy creation, distribution, and tracking with AI-powered updates"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "AI-driven risk identification and mitigation strategies for regulatory compliance"
    },
    {
      icon: FileText,
      title: "Documentation Automation",
      description: "Automated generation and maintenance of compliance documentation and reports"
    },
    {
      icon: Users,
      title: "Training & Certification",
      description: "Automated compliance training programs with progress tracking and certification"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant updates on regulatory changes and their impact on your business"
    }
  ];

  const benefits = [
    "Reduce compliance violations by 90%",
    "Cut compliance costs by 60%",
    "Automate 80% of compliance tasks",
    "Ensure 24/7 regulatory monitoring",
    "Improve audit readiness by 95%",
    "Reduce manual compliance work by 70%"
  ];

  const complianceAreas = [
    {
      title: "GDPR & Data Privacy",
      description: "Automated data protection compliance with privacy impact assessments and consent management"
    },
    {
      title: "SOX & Financial Compliance",
      description: "Financial reporting compliance with automated controls testing and documentation"
    },
    {
      title: "HIPAA & Healthcare",
      description: "Healthcare data protection with automated privacy rule compliance and breach detection"
    },
    {
      title: "ISO Standards",
      description: "Quality management system compliance with automated audit preparation and monitoring"
    }
  ];

  const capabilities = [
    "Regulatory change monitoring and alerts",
    "Automated compliance gap analysis",
    "Policy and procedure management",
    "Compliance training automation",
    "Audit trail and documentation",
    "Risk assessment and mitigation",
    "Incident reporting and tracking",
    "Compliance dashboard and reporting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Compliance Assistant - Zion Tech Group"
        description="Automate regulatory compliance with AI-powered monitoring, risk assessment, and policy management for enterprise security."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Compliance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Compliance Assistant
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your compliance operations with intelligent automation. Our AI Compliance 
              Assistant monitors regulations, manages policies, and ensures your business stays 
              compliant 24/7 with minimal manual effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Get Compliant
              </button>
              <button className="px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-slate-900 transition-all duration-300">
                Compliance Audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Compliance Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI Compliance Assistant covers all aspects of regulatory compliance 
              with intelligent automation and real-time monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-red-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Measurable Compliance Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions deliver quantifiable improvements in compliance efficiency and risk reduction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Regulatory Coverage
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive coverage across major regulatory frameworks and industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-slate-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with enterprise-grade AI technology for reliable compliance management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Simplify Compliance?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations already using AI to stay compliant and reduce risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

