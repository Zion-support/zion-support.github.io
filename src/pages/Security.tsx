import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Server, 
  Cloud, 
  Database, 
  Network, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  ExternalLink, 
  FileText, 
  Award, 
  FileCheck, 
  Globe, 
  Zap, 
  Brain, 
  ShieldCheck,
  Fingerprint,
  Lock,
  Security,
  CheckSquare,
  Audit,
  Activity,
  Backup,
  Recovery,
  Training,
  FileText,
  MessageCircle,
  Mail
} from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
              icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
      details: ['TLS 1.3 for data in transit', 'AES-256 for data at rest', 'Key rotation every 90 days']
    },
    {
      icon: ShieldCheck,
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with MFA options including SMS, authenticator apps, and hardware keys.',
      details: ['SMS verification', 'Authenticator apps', 'Hardware security keys', 'Biometric options']
    },
    {
      icon: Network,
      title: 'Advanced Network Security',
      description: 'Enterprise-grade network protection with DDoS mitigation and intrusion detection.',
      details: ['DDoS protection', 'Intrusion detection', 'Firewall management', 'Traffic monitoring']
    },
    {
      icon: Database,
      title: 'Secure Data Storage',
      description: 'Data is stored in secure, geographically distributed data centers with redundancy.',
      details: ['Geographic distribution', 'Data redundancy', 'Regular backups', 'Disaster recovery']
    },
    {
      icon: Users,
      title: 'Access Control',
      description: 'Role-based access control with granular permissions and audit logging.',
      details: ['Role-based permissions', 'Least privilege access', 'Audit logging', 'Session management']
    },
    {
              icon: Activity,
      title: '24/7 Security Monitoring',
      description: 'Continuous monitoring and threat detection with automated response systems.',
      details: ['Real-time monitoring', 'Threat detection', 'Automated response', 'Security analytics']
    }
  ];

  const complianceStandards = [
    {
              icon: FileCheck,
      title: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Service Organization Control 2 compliance for security, availability, and confidentiality.',
      validUntil: '2025-12-31'
    },
    {
      icon: Award,
      title: 'ISO 27001',
      status: 'Certified',
      description: 'International standard for information security management systems.',
      validUntil: '2025-06-30'
    },
    {
              icon: CheckSquare,
      title: 'GDPR Compliance',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance for EU data protection.',
      validUntil: 'Ongoing'
    },
    {
              icon: FileText,
      title: 'HIPAA Compliance',
      status: 'Compliant',
      description: 'Health Insurance Portability and Accountability Act compliance for healthcare data.',
      validUntil: 'Ongoing'
    },
    {
      icon: Security,
      title: 'PCI DSS',
      status: 'Level 1',
      description: 'Payment Card Industry Data Security Standard for payment processing.',
      validUntil: '2025-03-31'
    }
  ];

  const securityPractices = [
    {
      category: 'Data Protection',
      practices: [
        'Regular security audits and penetration testing',
        'Data classification and handling procedures',
        'Secure data disposal and destruction',
        'Privacy by design principles'
      ]
    },
    {
      category: 'Infrastructure Security',
      practices: [
        'Hardened server configurations',
        'Regular security patches and updates',
        'Vulnerability scanning and management',
        'Secure development lifecycle (SDLC)'
      ]
    },
    {
      category: 'Employee Security',
      practices: [
        'Background checks for all employees',
        'Regular security awareness training',
        'Non-disclosure agreements (NDAs)',
        'Incident response procedures'
      ]
    },
    {
      category: 'Third-Party Security',
      practices: [
        'Vendor security assessments',
        'Third-party risk management',
        'Contractual security requirements',
        'Regular vendor security reviews'
      ]
    }
  ];

  const incidentResponse = {
    phases: [
      {
        phase: 'Preparation',
        description: 'Establishing incident response plans, training teams, and setting up monitoring systems.',
        duration: 'Ongoing'
      },
      {
        phase: 'Identification',
        description: 'Detecting and confirming security incidents through monitoring and alerting systems.',
        duration: '0-15 minutes'
      },
      {
        phase: 'Containment',
        description: 'Isolating affected systems and preventing further damage or data loss.',
        duration: '15-60 minutes'
      },
      {
        phase: 'Eradication',
        description: 'Removing the root cause of the incident and securing affected systems.',
        duration: '1-4 hours'
      },
      {
        phase: 'Recovery',
        description: 'Restoring systems to normal operation and verifying security measures.',
        duration: '4-24 hours'
      },
      {
        phase: 'Lessons Learned',
        description: 'Documenting the incident, analyzing response effectiveness, and improving procedures.',
        duration: '24-72 hours'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="container-responsive text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Security & Compliance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan/90 max-w-3xl mx-auto"
          >
            Enterprise-grade security measures to protect your data and ensure compliance with industry standards
          </motion.p>
        </div>
      </div>

      <div className="container-responsive py-16">
        {/* Security Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Security First Approach</h2>
              <p className="text-zion-cyan/90 max-w-3xl mx-auto text-lg">
                At Zion Tech Group, security is not just a feature—it's fundamental to everything we do. 
                We implement industry-leading security measures to protect your data, maintain system integrity, 
                and ensure compliance with global security standards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">99.99% Uptime</h3>
                <p className="text-zion-cyan/80">Security measures ensure continuous service availability</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Multiple Certifications</h3>
                <p className="text-zion-cyan/80">SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS compliant</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-zion-cyan/80">Dedicated security professionals with decades of experience</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-cyan/80 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {detail}
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
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <standard.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    standard.status === 'Certified' ? 'text-green-400 bg-green-400/20' : 'text-blue-400 bg-blue-400/20'
                  }`}>
                    {standard.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{standard.title}</h3>
                <p className="text-zion-cyan/80 mb-4">{standard.description}</p>
                <div className="text-sm">
                  <span className="text-zion-cyan/60">Valid until: </span>
                  <span className="text-white">{standard.validUntil}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityPractices.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-zion-cyan" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start gap-3 text-zion-cyan/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Incident Response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Incident Response</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <div className="text-center mb-8">
              <p className="text-zion-cyan/90 text-lg max-w-3xl mx-auto">
                Our comprehensive incident response plan ensures rapid detection, containment, and resolution 
                of security incidents to minimize impact and maintain service availability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {incidentResponse.phases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/5 border border-zion-cyan/20 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                  </div>
                  <p className="text-zion-cyan/80 text-sm mb-2">{phase.description}</p>
                  <div className="text-xs text-zion-cyan/60">
                    <span>Typical duration: </span>
                    <span className="text-white">{phase.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Security Resources & Documentation
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Access our security documentation, whitepapers, and compliance reports to understand 
              our security posture and practices in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/security-whitepaper"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Security Whitepaper
              </a>
              <a
                href="/compliance-reports"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-futuristic transition-colors"
              >
                <Certificate className="w-5 h-5" />
                Compliance Reports
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Security Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions About Security?
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Our security team is available to answer your questions about our security measures, 
              compliance status, or any security-related concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Security Team
              </a>
              <a
                href="mailto:security@ziontechgroup.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-futuristic transition-colors"
              >
                <Mail className="w-5 h-5" />
                security@ziontechgroup.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;