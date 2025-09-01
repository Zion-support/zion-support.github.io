import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Users, 
  Zap, 
  ArrowRight,
  Lock,
  Eye,
  Database,
  Globe,
  Clock,
  Target,
  Lightbulb,
  Star,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIComplianceAssistant() {
  const features = [
    {
      icon: Shield,
      title: "Automated Compliance Monitoring",
      description: "Continuously monitor your systems and processes for compliance violations in real-time."
    },
    {
      icon: CheckCircle,
      title: "Regulatory Updates",
      description: "Stay current with the latest regulatory changes and automatically update compliance requirements."
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Identify potential compliance risks before they become violations with AI-powered analysis."
    },
    {
      icon: FileText,
      title: "Documentation Management",
      description: "Automatically generate and maintain compliance documentation and audit trails."
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Ensure proper access controls and user permissions across your compliance systems."
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Receive immediate notifications when compliance issues are detected or thresholds are exceeded."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Reduced Compliance Risk",
      description: "Minimize the risk of regulatory violations and associated penalties through proactive monitoring."
    },
    {
      icon: Lightbulb,
      title: "Operational Efficiency",
      description: "Automate routine compliance tasks and focus resources on strategic initiatives."
    },
    {
      icon: Clock,
      title: "Real-Time Visibility",
      description: "Get instant insights into your compliance status across all systems and processes."
    },
    {
      icon: Star,
      title: "Audit Readiness",
      description: "Maintain continuous audit readiness with comprehensive documentation and monitoring."
    }
  ];

  const complianceAreas = [
    {
      title: "GDPR & Data Privacy",
      description: "Ensure compliance with data protection regulations and privacy requirements."
    },
    {
      title: "SOX & Financial Compliance",
      description: "Maintain financial reporting compliance and internal control requirements."
    },
    {
      title: "HIPAA & Healthcare",
      description: "Protect patient data and maintain healthcare industry compliance standards."
    },
    {
      title: "ISO Standards",
      description: "Achieve and maintain ISO certification across quality, security, and environmental standards."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Compliance Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
              Stay compliant with confidence using our AI-powered compliance monitoring and management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Compliance Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides end-to-end compliance monitoring and management capabilities.
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
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Compliance Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of automated compliance management that reduces risk and improves efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Compliance Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform covers a wide range of compliance areas to meet your organization's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Simplify Your Compliance?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Join organizations that trust our AI-powered compliance platform to manage their regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}