import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const CybersecurityFortress2025: React.FC = () => {
  const services = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced AI systems that identify and neutralize threats before they cause damage.",
      icon: "🤖",
      features: ["Behavioral Analysis", "Anomaly Detection", "Threat Intelligence", "Automated Response"]
    },
    {
      title: "Zero Trust Architecture",
      description: "Comprehensive security framework that assumes no trust and verifies everything.",
      icon: "🔐",
      features: ["Identity Verification", "Access Control", "Network Segmentation", "Continuous Monitoring"]
    },
    {
      title: "Compliance Automation",
      description: "Automated compliance management for regulatory requirements and industry standards.",
      icon: "📋",
      features: ["GDPR Compliance", "HIPAA Compliance", "SOC 2 Compliance", "ISO 27001"]
    },
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring with real-time threat detection and incident response.",
      icon: "🛡️",
      features: ["24/7 SOC", "Real-time Alerts", "Incident Response", "Forensic Analysis"]
    }
  ];

  const threats = [
    {
      threat: "Ransomware Attacks",
      description: "Protect against sophisticated ransomware with AI-powered detection and prevention.",
      protection: "99.9%",
      icon: "🔒"
    },
    {
      threat: "Phishing Attempts",
      description: "Advanced email security to detect and block phishing attempts and social engineering.",
      protection: "98.5%",
      icon: "🎣"
    },
    {
      threat: "Data Breaches",
      description: "Comprehensive data protection with encryption and access controls.",
      protection: "99.8%",
      icon: "📊"
    },
    {
      threat: "DDoS Attacks",
      description: "Robust network protection against distributed denial-of-service attacks.",
      protection: "99.9%",
      icon: "🌊"
    }
  ];

  const securityLayers = [
    {
      layer: "Perimeter Security",
      description: "First line of defense with firewalls, intrusion detection, and network monitoring.",
      technologies: ["Next-Gen Firewalls", "IPS/IDS", "Web Application Firewalls", "DDoS Protection"]
    },
    {
      layer: "Identity & Access",
      description: "Secure identity management with multi-factor authentication and access controls.",
      technologies: ["MFA", "SSO", "IAM", "Privileged Access Management"]
    },
    {
      layer: "Data Protection",
      description: "Comprehensive data security with encryption, backup, and loss prevention.",
      technologies: ["End-to-End Encryption", "Data Loss Prevention", "Backup Solutions", "Data Classification"]
    },
    {
      layer: "Endpoint Security",
      description: "Protect all endpoints with advanced antivirus and behavioral monitoring.",
      technologies: ["EDR", "Antivirus", "Patch Management", "Device Control"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-full text-sm font-semibold mb-6">
                🛡️ NEW: Cybersecurity Fortress 2025
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Cybersecurity Fortress
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade security solutions with AI-powered threat detection, 
                zero-trust architecture, and compliance automation. Protect your business 
                from evolving cyber threats.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Secure Your Business
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Security Assessment
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multi-layered security solutions designed to protect your business from 
                the most sophisticated cyber threats.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Protection */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your business against the most sophisticated cyber threats with 
                our advanced security solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{threat.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{threat.threat}</h3>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      {threat.protection} Protection
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{threat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Multi-Layered Security Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Defense in depth with multiple security layers to ensure comprehensive protection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-2xl font-semibold mb-3">{layer.layer}</h3>
                  <p className="text-gray-600 mb-4">{layer.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {layer.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full mr-2"></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet regulatory requirements and industry standards with our comprehensive 
                compliance solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "GDPR", description: "Data Protection" },
                { name: "HIPAA", description: "Healthcare Privacy" },
                { name: "SOC 2", description: "Security Controls" },
                { name: "ISO 27001", description: "Information Security" },
                { name: "PCI DSS", description: "Payment Security" },
                { name: "NIST", description: "Cybersecurity Framework" }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">{cert.name}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-500">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-600 via-slate-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Don't wait for a security breach. Protect your business with our comprehensive 
                cybersecurity solutions and expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-slate-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Security Assessment
                </button>
                <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CybersecurityFortress2025;