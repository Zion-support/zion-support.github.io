import React from 'react';
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
              <div
                key={service.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
            ))}
          </div>
        </div>
      </section>

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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Business?</span>
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Get a comprehensive security assessment and discover how we can protect your digital assets.
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
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;