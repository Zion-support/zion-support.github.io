import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Server, 
  Users, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Globe,
  Database,
  Network,
  Fingerprint
} from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and security protocols protect your data and transactions.",
      features: ["256-bit SSL encryption", "PCI DSS compliance", "SOC 2 Type II certified"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Multi-Factor Authentication",
      description: "Enhanced account protection with multiple verification methods.",
      features: ["SMS verification", "Authenticator apps", "Hardware security keys"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Protection",
      description: "Your personal information is protected with strict privacy controls.",
      features: ["GDPR compliance", "Data anonymization", "User consent management"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Secure Infrastructure",
      description: "Built on secure cloud infrastructure with redundant systems.",
      features: ["AWS/Azure security", "Regular security audits", "24/7 monitoring"]
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for data security",
      status: "Certified",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance",
      status: "Compliant",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System",
      status: "In Progress",
      icon: <AlertTriangle className="w-5 h-5 text-yellow-400" />
    }
  ];

  const securityMeasures = [
    {
      category: "Data Protection",
      measures: [
        "End-to-end encryption for all data transmission",
        "Data encryption at rest using AES-256",
        "Regular automated backups with encryption",
        "Data retention policies and automated deletion"
      ]
    },
    {
      category: "Access Control",
      measures: [
        "Role-based access control (RBAC)",
        "Just-in-time access provisioning",
        "Session management and timeout controls",
        "IP whitelisting and geolocation restrictions"
      ]
    },
    {
      category: "Network Security",
      measures: [
        "DDoS protection and mitigation",
        "Web Application Firewall (WAF)",
        "Intrusion detection and prevention systems",
        "Regular vulnerability assessments and penetration testing"
      ]
    },
    {
      category: "Incident Response",
      measures: [
        "24/7 security monitoring and alerting",
        "Automated threat detection and response",
        "Incident response team and procedures",
        "Regular security incident reporting and analysis"
      ]
    }
  ];

  const securityTips = [
    {
      title: "Strong Passwords",
      description: "Use unique, complex passwords for each account and enable two-factor authentication.",
      icon: <Key className="w-5 h-5" />
    },
    {
      title: "Regular Updates",
      description: "Keep your software and devices updated with the latest security patches.",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Secure Connections",
      description: "Always use HTTPS connections and avoid public Wi-Fi for sensitive transactions.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Monitor Activity",
      description: "Regularly review your account activity and report any suspicious behavior.",
      icon: <Eye className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Your <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Security</span> is Our Priority
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            At Zion Tech Group, we implement enterprise-grade security measures to protect your data, 
            transactions, and privacy. Learn about our comprehensive security framework and compliance standards.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="text-zion-cyan mb-6">{feature.icon}</div>
              <h3 className="text-white font-semibold text-2xl mb-4">{feature.title}</h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Compliance Standards */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Compliance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">{standard.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{standard.name}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{standard.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  standard.status === 'Certified' || standard.status === 'Compliant' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Measures */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Comprehensive Security Measures</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {securityMeasures.map((category, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6">
                <h3 className="text-zion-cyan font-semibold text-xl mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.measures.map((measure, idx) => (
                    <li key={idx} className="flex items-start text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Tips */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {securityTips.map((tip, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-zion-cyan mb-4 flex justify-center">{tip.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{tip.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Resources */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              to="/privacy" 
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Privacy Policy</h3>
              <p className="text-zion-slate-light mb-4">Learn how we protect and handle your personal information</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                Read Policy →
              </span>
            </Link>

            <Link 
              to="/terms" 
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Terms of Service</h3>
              <p className="text-zion-slate-light mb-4">Understand our service terms and security commitments</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                View Terms →
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Security Team</h3>
              <p className="text-zion-slate-light mb-4">Contact our security team for questions or concerns</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                Contact Us →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Security Commitment */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-12 max-w-4xl mx-auto">
            <Shield className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Our Security Commitment</h2>
            <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">
              We are committed to maintaining the highest standards of security and privacy protection. 
              Our security framework is continuously updated to address emerging threats and maintain 
              compliance with industry standards and regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform inline-flex items-center"
              >
                Contact Security Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/faq" 
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Security FAQ
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}