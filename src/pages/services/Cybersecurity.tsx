import React from 'react';
      title: "Threat Detection & Response",
      description: "Advanced threat detection and rapid incident response capabilities",
      features: ["24/7 Monitoring", "Real-time Alerts", "Incident Response", "Threat Intelligence"],
      icon: "🛡️"
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Multi-factor authentication and identity management"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security monitoring and incident response"
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits and vulnerability management",
      features: ["Penetration Testing", "Security Audits", "Risk Assessment", "Compliance Checks"],
      icon: "🔍"
    },
    {
      title: "Security Training",
      description: "Employee security awareness and training programs",
      features: ["Phishing Simulations", "Security Workshops", "Compliance Training", "Best Practices"],
      icon: "🎓"
    },
    {
      title: "Compliance & Governance",
      description: "Regulatory compliance and security governance frameworks",
      features: ["SOC 2", "ISO 27001", "GDPR", "HIPAA Compliance"],
      icon: "📋"
    }
  ];
  const securityFeatures = [
    { name: "Zero Trust Architecture", icon: "🔐", description: "Never trust, always verify security model" },
    { name: "Multi-Factor Authentication", icon: "🔑", description: "Enhanced access control and security" },
    { name: "Encryption at Rest & Transit", icon: "🔒", description: "End-to-end data protection" },
    { name: "24/7 Security Operations", icon: "👁️", description: "Continuous monitoring and response" }
  ];
import Link from 'next/link';
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cybersecurity - Zion Tech Group"
        description="Protect your business with comprehensive cybersecurity solutions and expert threat detection."
        keywords="cybersecurity, threat detection, security monitoring, access control, vulnerability assessment"
        canonical="https://ziontechgroup.com/services/cybersecurity"
      />
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, AlertTriangle, Users, Database, Network, Zap } from 'lucide-react';
const Cybersecurity: React.FC = () => {
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
  const securityFeatures = [
    { name: "Zero Trust Architecture", icon: "🔐", description: "Never trust, always verify security model" },
    { name: "Multi-Factor Authentication", icon: "🔑", description: "Enhanced access control and security" },
    { name: "Encryption at Rest & Transit", icon: "🔒", description: "End-to-end data protection" },
    { name: "24/7 Security Operations", icon: "👁️", description: "Continuous monitoring and response" }
  ];
  return (
<>
      <Helmet>
        <title>Cybersecurity — Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Protect your business with Zion Tech Group's comprehensive cybersecurity solutions. Advanced threat detection, access control, and compliance management." />
        <meta property="og:title" content="Cybersecurity — Zion Tech Group" />
        <meta property="og:description" content="Advanced cybersecurity solutions for modern businesses. Threat detection, access control, and compliance management." />
        <meta property="og:url" content="https://ziontechgroup.com/services/cybersecurity" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
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
                to="/request-quote"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Security Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From threat detection to compliance management, we provide end-to-end cybersecurity solutions 
              tailored to your organization's needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Compliance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet industry standards and regulatory requirements with our compliance-focused security solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{framework.name}</h3>
                <p className="text-gray-300">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cyber
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Security
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions. 
              Our comprehensive security services safeguard your business from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Our Cybersecurity Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {React.createElement(service.icon, { className: "w-8 h-8 text-cyan-400 mr-3" })}
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Compliance Frameworks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Compliance & Governance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{framework.name}</h3>
                  <p className="text-gray-300 text-sm">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Security Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                State-of-the-art security technologies and practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cybersecurity solutions can protect your digital assets
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Security Consultation
            </Link>
          </div>
        </section>
      </div>
</>
  );
};
export default Cybersecurity;