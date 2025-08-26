import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Fingerprint, 
  Server, 
  Network, 
  CheckCircle,
  AlertTriangle,
  Users,
  FileText,
  Globe,
  Database,
  Cloud,
  Zap
} from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Multi-layered security architecture with advanced threat protection',
      features: ['Firewall Protection', 'Intrusion Detection', 'DDoS Mitigation']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data in transit and at rest',
      features: ['AES-256 Encryption', 'TLS 1.3', 'Zero-Knowledge Architecture']
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'Comprehensive privacy controls and data governance',
      features: ['GDPR Compliance', 'Data Minimization', 'User Consent Management']
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Advanced authentication and authorization systems',
      features: ['Multi-Factor Authentication', 'Role-Based Access', 'Single Sign-On']
    },
    {
      icon: Fingerprint,
      title: 'Identity Verification',
      description: 'Biometric and behavioral authentication methods',
      features: ['Biometric Authentication', 'Behavioral Analysis', 'Device Fingerprinting']
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with regular security audits',
      features: ['SOC 2 Type II', 'ISO 27001', 'Regular Penetration Testing']
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2 Type II', status: 'Certified', icon: CheckCircle, color: 'text-green-500' },
    { name: 'ISO 27001', status: 'Certified', icon: CheckCircle, color: 'text-green-500' },
    { name: 'GDPR', status: 'Compliant', icon: CheckCircle, color: 'text-green-500' },
    { name: 'CCPA', status: 'Compliant', icon: CheckCircle, color: 'text-green-500' },
    { name: 'HIPAA', status: 'Compliant', icon: CheckCircle, color: 'text-green-500' },
    { name: 'PCI DSS', status: 'Level 1', icon: CheckCircle, color: 'text-green-500' }
  ];

  const securityMetrics = [
    { metric: '99.99%', label: 'Uptime', description: 'Service availability' },
    { metric: '<50ms', label: 'Response Time', description: 'Average response' },
    { metric: '24/7', label: 'Monitoring', description: 'Security monitoring' },
    { metric: '0', label: 'Data Breaches', description: 'Security incidents' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Your data security is our top priority. We implement enterprise-grade security measures 
            and maintain the highest compliance standards to protect your business.
          </p>
        </motion.div>

        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {securityMetrics.map((item, index) => (
            <div
              key={index}
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {item.metric}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {item.label}
              </div>
              <div className="text-sm text-zion-slate-light">
                {item.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Comprehensive Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Compliance & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 flex items-center space-x-4 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <standard.icon className={`w-8 h-8 ${standard.color}`} />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {standard.name}
                  </h3>
                  <p className={`text-sm font-medium ${standard.color}`}>
                    {standard.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Our Security Commitment
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-4xl mx-auto">
            We understand that security is not just a feature—it's a fundamental requirement. 
            Our team of security experts continuously monitors, updates, and enhances our 
            security infrastructure to stay ahead of emerging threats and maintain the highest 
            standards of data protection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 font-semibold">
              Download Security Whitepaper
            </button>
            <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 font-semibold">
              Schedule Security Review
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;