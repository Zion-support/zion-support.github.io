import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Server, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Globe,
  Database,
  Network,
  Zap,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Security() {
  const [expandedCompliance, setExpandedCompliance] = useState<string | null>(null);

  const securityFeatures = [
    {
      category: "Data Protection",
      icon: Shield,
      features: [
        "End-to-end encryption for all data",
        "Secure data centers with 99.99% uptime",
        "Regular security audits and penetration testing",
        "Compliance with industry security standards"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Access Control",
      icon: Lock,
      features: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Single sign-on (SSO) integration",
        "Session management and timeout controls"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Network Security",
      icon: Network,
      features: [
        "DDoS protection and mitigation",
        "Web application firewall (WAF)",
        "Intrusion detection and prevention",
        "Secure VPN and remote access"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Monitoring & Response",
      icon: Eye,
      features: [
        "24/7 security monitoring",
        "Real-time threat detection",
        "Incident response procedures",
        "Security event logging and analysis"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const complianceFrameworks = [
    {
      standard: "ISO 27001",
      description: "Information Security Management System certification",
      status: "Certified",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    }
  ];

  const securityMetrics = [
    {
      metric: "99.99%",
      label: "Uptime",
      description: "Service availability guarantee"
    },
    {
      metric: "< 50ms",
      label: "Response Time",
      description: "Average API response time"
    },
    {
      metric: "256-bit",
      label: "Encryption",
      description: "AES encryption standard"
    },
    {
      metric: "24/7",
      label: "Monitoring",
      description: "Security monitoring coverage"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      text: 'security@ziontechgroup.com',
      href: 'mailto:security@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: 'Middletown, DE 19709',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade security measures and compliance standards to protect your data and ensure regulatory adherence
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Type II Compliant</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security measures to protect your data and infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.category}</h3>
                  </div>
                </div>

                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain compliance with major international standards and regulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.standard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{framework.standard}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm border ${framework.color}`}>
                    {framework.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key performance indicators that demonstrate our security commitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{metric.metric}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl border border-red-500/20 p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Have Security Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our security team for detailed information about our security measures and compliance status
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:security@ziontechgroup.com"
                className="inline-flex items-center space-x-2 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-all duration-200 font-medium border border-slate-600"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <contact.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                  {contact.href !== '#' ? (
                    <a
                      href={contact.href}
                      className="hover:text-red-400 transition-colors"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}