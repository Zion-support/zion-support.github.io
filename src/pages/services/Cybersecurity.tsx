import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, AlertTriangle, Users, Database, Network, Zap } from 'lucide-react';

const Cybersecurity = () => {
=======
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, AlertTriangle, Users, Database, Network, Zap } from 'lucide-react';

const Cybersecurity: React.FC = () => {
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
  const securityServices = [
    {
      icon: Shield,
      title: "Threat Detection & Response",
      description: "Advanced security monitoring and incident response to protect your digital assets.",
      features: ["24/7 Monitoring", "Real-time Alerts", "Incident Response", "Threat Intelligence"]
    },
    {
      icon: Lock,
      title: "Access Control & Identity",
      description: "Comprehensive identity and access management solutions for your organization.",
      features: ["Multi-factor Authentication", "Single Sign-On", "Role-based Access", "Privileged Access Management"]
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "End-to-end encryption and data security to safeguard sensitive information.",
      features: ["Data Encryption", "Backup Security", "Compliance Management", "Data Loss Prevention"]
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Advanced network protection and segmentation to secure your infrastructure.",
      features: ["Firewall Management", "Network Segmentation", "Intrusion Detection", "VPN Solutions"]
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance for security, availability, and confidentiality"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management systems"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for data privacy"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance"
    }
  ];
<<<<<<< HEAD

  const securityFeatures = [
    { name: "Zero Trust Architecture", icon: "🔐", description: "Never trust, always verify security model" },
    { name: "Multi-Factor Authentication", icon: "🔑", description: "Enhanced access control and security" },
    { name: "Encryption at Rest & Transit", icon: "🔒", description: "End-to-end data protection" },
    { name: "24/7 Security Operations", icon: "👁️", description: "Continuous monitoring and response" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Protect Your Digital
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Assets</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive cybersecurity solutions to defend against evolving threats and ensure 
              your business remains secure in an increasingly digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Protected
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
=======

  const securityFeatures = [
    { name: "Zero Trust Architecture", icon: "🔐", description: "Never trust, always verify security model" },
    { name: "Multi-Factor Authentication", icon: "🔑", description: "Enhanced access control and security" },
    { name: "Encryption at Rest & Transit", icon: "🔒", description: "End-to-end data protection" },
    { name: "24/7 Security Operations", icon: "👁️", description: "Continuous monitoring and response" }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Protect your business with enterprise-grade cybersecurity solutions designed to detect, prevent, and respond to evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Security Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From threat detection to compliance management, we provide end-to-end cybersecurity solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
<<<<<<< HEAD
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
=======
              <div
                key={service.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                      <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Governance
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet regulatory requirements and industry standards with our comprehensive compliance frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-white/10 rounded-lg p-6 text-center hover:border-red-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{framework.name}</h3>
                <p className="text-sm text-gray-400">{framework.description}</p>
              </motion.div>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Compliance & <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Governance</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet regulatory requirements with our comprehensive compliance frameworks and security governance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div
                key={framework.name}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-zion-cyan mb-3">{framework.name}</h3>
                <p className="text-zion-slate-light text-sm">{framework.description}</p>
              </div>
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge security technologies and methodologies to protect your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-white/10 rounded-lg p-6 text-center hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.name}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Security Features</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Leverage cutting-edge security technologies to protect your digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.name}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Business?</span>
          </h2>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 mb-8">
            Don't wait until it's too late. Get comprehensive cybersecurity protection today.
=======
          <p className="text-xl text-zion-slate-light mb-8">
            Get a comprehensive security assessment and discover how we can protect your digital assets.
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;