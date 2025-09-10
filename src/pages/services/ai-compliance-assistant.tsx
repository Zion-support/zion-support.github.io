import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3, 
  Zap,
  Eye,
  Lock,
  Globe,
  Settings
} from 'lucide-react';
import SEO from '../../../components/SEO';

const AIComplianceAssistant: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory Monitoring",
      description: "Real-time tracking of regulatory changes across multiple jurisdictions with automated alerts and updates."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Analysis",
      description: "AI-powered review of contracts, policies, and documents for compliance risks and required changes."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Automated risk scoring and identification of potential compliance violations before they occur."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Audit Automation",
      description: "Streamlined audit processes with AI-generated reports and compliance checklists."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Compliance Analytics",
      description: "Comprehensive dashboards showing compliance status, trends, and areas for improvement."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Reporting",
      description: "Generate regulatory reports automatically with real-time data and AI-powered insights."
    }
  ];

  const benefits = [
    {
      metric: "80%",
      description: "Reduction in compliance violations"
    },
    {
      metric: "70%",
      description: "Automation of compliance tasks"
    },
    {
      metric: "90%",
      description: "Faster regulatory updates"
    },
    {
      metric: "60%",
      description: "Cost savings on compliance"
    }
  ];

  const complianceAreas = [
    {
      title: "GDPR & Data Privacy",
      description: "Ensure data protection compliance with automated consent management and privacy impact assessments."
    },
    {
      title: "Financial Regulations",
      description: "Meet SOX, Basel III, and other financial compliance requirements with AI-powered monitoring."
    },
    {
      title: "Industry Standards",
      description: "Comply with ISO, SOC2, HIPAA, and other industry-specific standards automatically."
    },
    {
      title: "Environmental Compliance",
      description: "Track and report on environmental regulations and sustainability requirements."
    }
  ];

  return (
    <>
      <SEO 
        title="AI Compliance Assistant - Zion Tech Group"
        description="Automate compliance monitoring, risk assessment, and regulatory reporting with AI-powered tools. Reduce violations by 80% and automate 70% of compliance tasks."
        keywords="AI compliance, regulatory compliance, compliance automation, risk assessment, audit automation, regulatory monitoring"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Compliance Assistant
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                Stay ahead of regulatory changes with AI-powered compliance monitoring, automated risk assessment, and intelligent reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
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
                Intelligent Compliance Features
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our AI Compliance Assistant combines machine learning with regulatory expertise to keep your organization compliant and secure.
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
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-cyan-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Organizations using our AI Compliance Assistant see significant improvements in compliance efficiency and risk reduction.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-cyan-200">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas Section */}
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
                Comprehensive Coverage
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                From data privacy to financial regulations, our AI Compliance Assistant covers all major compliance areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-cyan-200">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Simplify Compliance?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join organizations already using AI to stay compliant and reduce regulatory risks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIComplianceAssistant;