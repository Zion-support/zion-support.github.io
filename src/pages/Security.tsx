import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Server, 
  Database,
  Network,
  Key,
  FileText,
  Award,
  Globe,
  Zap
} from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Multi-layered security architecture with advanced threat detection and prevention systems.",
      features: ["Advanced Firewall Protection", "DDoS Mitigation", "Real-time Threat Monitoring"]
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit using industry-standard protocols.",
      features: ["AES-256 Encryption", "TLS 1.3", "Zero-Knowledge Architecture"]
    },
    {
      icon: Users,
      title: "Access Control",
      description: "Comprehensive identity and access management with multi-factor authentication.",
      features: ["Role-Based Access Control", "MFA Support", "Single Sign-On (SSO)"]
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Secure cloud infrastructure with regular security audits and penetration testing.",
      features: ["SOC 2 Type II Certified", "Regular Security Audits", "Penetration Testing"]
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for security, availability, and confidentiality.",
      status: "Certified",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management systems.",
      status: "In Progress",
      icon: AlertTriangle,
      color: "text-yellow-400"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data protection.",
      status: "Compliant",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance.",
      status: "Compliant",
      icon: CheckCircle,
      color: "text-green-400"
    }
  ];

  const securityPractices = [
    {
      title: "Regular Security Audits",
      description: "Quarterly comprehensive security assessments by third-party experts.",
      frequency: "Quarterly"
    },
    {
      title: "Penetration Testing",
      description: "Regular ethical hacking exercises to identify and fix vulnerabilities.",
      frequency: "Bi-annually"
    },
    {
      title: "Security Training",
      description: "Ongoing security awareness training for all team members.",
      frequency: "Monthly"
    },
    {
      title: "Incident Response",
      description: "24/7 security monitoring with rapid incident response procedures.",
      frequency: "24/7"
    }
  ];

  const dataProtection = [
    {
      icon: Database,
      title: "Data Residency",
      description: "Choose where your data is stored with options across multiple regions."
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Secure network architecture with private connections and VPN support."
    },
    {
      icon: Key,
      title: "Key Management",
      description: "Secure key management with hardware security modules (HSM) support."
    },
    {
      icon: Eye,
      title: "Privacy Controls",
      description: "Granular privacy controls and data anonymization capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600/20 rounded-full">
              <Shield className="h-16 w-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Security & Trust
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your security is our top priority. We implement enterprise-grade security measures 
            and maintain the highest standards of data protection and privacy.
          </p>
        </motion.div>

        {/* Security Features */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="h-10 w-10 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Compliance Standards */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <standard.icon className={`h-12 w-12 ${standard.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{standard.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  standard.status === 'Certified' || standard.status === 'Compliant'
                    ? 'bg-green-600/20 text-green-400'
                    : 'bg-yellow-600/20 text-yellow-400'
                }`}>
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Practices */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <Zap className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{practice.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{practice.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium">
                  {practice.frequency}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Data Protection */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Data Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataProtection.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Commitment */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-12 border border-green-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Security Commitment</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are committed to maintaining the highest standards of security and privacy. 
                Our security team works around the clock to protect your data and ensure 
                compliance with industry standards and regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
                >
                  Contact Security Team
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Security Resources */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Security Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <FileText className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Security Whitepaper</h3>
              <p className="text-gray-300 mb-4">Download our comprehensive security overview</p>
              <a
                href="/security-whitepaper"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Download PDF
              </a>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Certifications</h3>
              <p className="text-gray-300 mb-4">View our security certifications and audits</p>
              <a
                href="/certifications"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                View Details
              </a>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Globe className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Security Blog</h3>
              <p className="text-gray-300 mb-4">Latest security insights and updates</p>
              <a
                href="/blog/security"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Read Articles
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Security;