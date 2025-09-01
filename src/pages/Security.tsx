import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Database, 
  Globe, 
  Server, 
  Key, 
  Fingerprint, 
  Network,
  Zap,
  Cloud,
  Brain,
  ArrowRight
} from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security with AI-powered threat detection and prevention',
      benefits: ['Real-time monitoring', 'Automated response', 'Zero-day protection']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit',
      benefits: ['AES-256 encryption', 'TLS 1.3 protocols', 'Secure key management']
    },
    {
      icon: Eye,
      title: 'Privacy Controls',
      description: 'Granular privacy settings and data access controls',
      benefits: ['Role-based access', 'Audit logging', 'GDPR compliance']
    },
    {
      icon: Users,
      title: 'Identity Management',
      description: 'Secure authentication and authorization systems',
      benefits: ['Multi-factor authentication', 'Single sign-on', 'Biometric support']
    }
  ];

  const complianceStandards = [
    {
      standard: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for security, availability, and confidentiality',
      status: 'Certified',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'Certified',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const securityMeasures = [
    {
      icon: Database,
      title: 'Data Security',
      measures: [
        'Encrypted data storage',
        'Regular security audits',
        'Data backup and recovery',
        'Access control policies'
      ]
    },
    {
      icon: Network,
      title: 'Network Security',
      measures: [
        'Firewall protection',
        'DDoS mitigation',
        'Intrusion detection',
        'Secure VPN access'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      measures: [
        'Hardened servers',
        'Regular patching',
        'Vulnerability scanning',
        'Physical security controls'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      measures: [
        'Multi-cloud security',
        'Identity federation',
        'Data sovereignty',
        'Compliance monitoring'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Security & Compliance - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, compliance standards, and commitment to protecting your data."
        keywords="security, compliance, data protection, cybersecurity, SOC 2, ISO 27001, GDPR, HIPAA"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Compliance</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your security is our priority. We implement industry-leading security measures 
                and maintain the highest compliance standards to protect your data.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security measures designed to protect your data and ensure 
                business continuity in today's evolving threat landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-orange-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Compliance Standards</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest industry standards and certifications to ensure 
                your data is protected according to global best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{standard.standard}</h3>
                    <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      <standard.icon className="w-4 h-4 mr-1" />
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Measures</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multi-layered security approach covering all aspects of data protection, 
                from physical infrastructure to application-level security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <measure.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{measure.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {measure.measures.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Commitment */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Security Commitment</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We believe that security is not just a feature, but a fundamental aspect of 
                everything we do. Our commitment to protecting your data is unwavering.
              </p>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <p className="text-white text-lg font-medium">
                  "Security is our foundation. We invest in the latest technologies and maintain 
                  rigorous standards to ensure your data remains protected at all times."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Security Questions?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our security team is here to answer your questions and provide detailed 
                information about our security practices and compliance status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Contact Security Team
                </a>
                <a
                  href="/compliance"
                  className="inline-flex items-center px-8 py-3 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  View Compliance Details
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Security;