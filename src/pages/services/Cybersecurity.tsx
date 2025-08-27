import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      description: "Health Insurance Portability and Accountability Act compliance for healthcare data"
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
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions. 
              Advanced threat detection, access control, and compliance management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Advanced Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.name}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cybersecurity experts help you build a robust security foundation and protect your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Security Assessment
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
</>
  );
};
export default Cybersecurity;