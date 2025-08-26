import React from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Check, Shield, Lock, Eye, AlertTriangle, Users, Database, Globe } from 'lucide-react';

export default function Cybersecurity() {
  const securityServices = [
    {
      title: "Security Assessment & Testing",
      description: "Comprehensive security audits, penetration testing, and vulnerability assessments",
      features: ["Penetration Testing", "Security Audits", "Vulnerability Scanning", "Risk Assessment"],
      icon: <Shield className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Identity & Access Management",
      description: "Secure user authentication, authorization, and identity governance",
      features: ["Multi-Factor Authentication", "Single Sign-On", "Role-Based Access", "Identity Federation"],
      icon: <Users className="h-8 w-8 text-green-500" />
    },
    {
      title: "Security Monitoring & Response",
      description: "24/7 threat detection, monitoring, and incident response",
      features: ["SIEM Implementation", "Threat Detection", "Incident Response", "Security Analytics"],
      icon: <Eye className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Risk Management & Compliance",
      description: "Compliance frameworks and risk management strategies",
      features: ["SOC 2 Compliance", "ISO 27001", "GDPR Compliance", "Risk Assessment"],
      icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Data Protection & Privacy",
      description: "Data encryption, backup, and privacy protection solutions",
      features: ["Data Encryption", "Backup & Recovery", "Privacy Controls", "Data Classification"],
      icon: <Database className="h-8 w-8 text-red-500" />
    },
    {
      title: "Network & Infrastructure Security",
      description: "Network security, firewall management, and secure architecture",
      features: ["Firewall Management", "Network Segmentation", "VPN Solutions", "Secure Architecture"],
      icon: <Globe className="h-8 w-8 text-indigo-500" />
    }
  ];

  const complianceFrameworks = [
    { name: "SOC 2 Type II", description: "Service Organization Control compliance" },
    { name: "ISO 27001", description: "Information security management standard" },
    { name: "GDPR", description: "General Data Protection Regulation compliance" },
    { name: "HIPAA", description: "Healthcare data protection compliance" },
    { name: "PCI DSS", description: "Payment card industry security standards" },
    { name: "NIST", description: "National Institute of Standards and Technology" }
  ];

  const securityTechnologies = [
    { name: "Next-Gen Firewalls", category: "Network Security" },
    { name: "SIEM Solutions", category: "Monitoring & Analytics" },
    { name: "EDR/XDR Platforms", category: "Endpoint Security" },
    { name: "Zero Trust Architecture", category: "Access Control" },
    { name: "Threat Intelligence", category: "Proactive Defense" },
    { name: "Cloud Security", category: "Cloud Protection" }
  ];

  const benefits = [
    "Protect sensitive data and intellectual property",
    "Meet regulatory compliance requirements",
    "Reduce security incident response time",
    "Enhance customer trust and brand reputation",
    "Minimize financial and operational risks",
    "Stay ahead of evolving cyber threats"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cybersecurity Services - Zion Tech Group Security & Compliance Solutions"
        description="Comprehensive cybersecurity services including threat detection, compliance management, and data protection to secure your business."
        keywords="cybersecurity, security services, threat detection, compliance, data protection, SOC2, ISO27001"
        canonical="https://ziontechgroup.com/services/cybersecurity"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
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

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end cybersecurity solutions designed to protect your business infrastructure, data, and operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Security Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection that adapts to your business needs and compliance requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet industry standards and regulatory requirements with our compliance expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{framework.name}</h3>
                <p className="text-gray-600 text-sm">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Security Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and platforms for comprehensive threat protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityTechnologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-blue-600 text-sm font-medium">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to identifying, assessing, and mitigating security risks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive security evaluation and risk analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">Customized security roadmap and implementation plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Deploy security solutions and establish monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-gray-600 text-sm">Ongoing monitoring, updates, and security improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a comprehensive security assessment and discover how we can protect your digital assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}