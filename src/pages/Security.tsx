import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, Server, Users, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Multi-layered security architecture with advanced threat detection and prevention systems."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: Eye,
      title: "Privacy-First Approach",
      description: "Strict data privacy controls and compliance with international privacy regulations."
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Role-based access control with multi-factor authentication and session management."
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Cloud infrastructure with regular security audits and penetration testing."
    },
    {
      icon: Users,
      title: "Team Security",
      description: "Background-checked security professionals with ongoing security training."
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II Compliance",
    "ISO 27001 Information Security",
    "GDPR Compliance",
    "CCPA Compliance",
    "HIPAA Compliance (Healthcare)",
    "PCI DSS Compliance (Financial)"
  ];

  const securityMeasures = [
    "Regular security audits and penetration testing",
    "24/7 security monitoring and incident response",
    "Automated threat detection and response",
    "Regular security updates and patches",
    "Employee security awareness training",
    "Vendor security assessments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Security & Trust
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Your security is our top priority. We implement enterprise-grade security measures 
            to protect your data, maintain privacy, and ensure compliance with global standards.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Section */}
        <motion.div 
          className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Compliance & Certifications</h2>
            <p className="text-zion-slate-light text-lg">
              We maintain the highest standards of security compliance and regularly undergo 
              third-party audits to ensure our security measures meet industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-4">Security Standards</h3>
              <ul className="space-y-3">
                {complianceStandards.map((standard, index) => (
                  <li key={index} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-4">Security Measures</h3>
              <ul className="space-y-3">
                {securityMeasures.map((measure, index) => (
                  <li key={index} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    {measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Security Commitment */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Security Commitment</h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-3xl mx-auto">
              We understand that security is not just about technology—it's about trust. 
              We're committed to maintaining the highest security standards and being 
              transparent about our security practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center p-4 bg-zinc-800/50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-zion-cyan mr-3" />
                <span className="text-white font-medium">Report Security Issues</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-zinc-800/50 rounded-lg">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                <span className="text-white font-medium">Security Documentation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Security Team */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Questions About Security?</h3>
          <p className="text-zion-slate-light mb-6">
            Our security team is available to answer any questions about our security practices, 
            compliance, or security features.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Contact Security Team
          </a>
        </motion.div>
      </div>
    </div>
  );
}
