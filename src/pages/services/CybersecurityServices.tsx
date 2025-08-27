import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, Network, ArrowRight, CheckCircle, Cloud } from 'lucide-react';
const CybersecurityServices = () => {
    const securityServices = [
        {
            title: "Threat Detection & Response",
            description: "Advanced threat detection systems with real-time monitoring and rapid response capabilities.",
            icon: Eye,
            features: [
                "24/7 Security Monitoring",
                "Threat Intelligence",
                "Incident Response",
                "Forensic Analysis",
                "Threat Hunting"
            ]
        },
        {
            title: "Network Security",
            description: "Comprehensive network protection with firewalls, intrusion detection, and secure architecture.",
            icon: Network,
            features: [
                "Firewall Management",
                "Intrusion Detection",
                "VPN Solutions",
                "Network Segmentation",
                "Traffic Analysis"
            ]
        },
        {
            title: "Identity & Access Management",
            description: "Secure user authentication and authorization with multi-factor authentication and role-based access.",
            icon: Users,
            features: [
                "Multi-Factor Authentication",
                "Single Sign-On (SSO)",
                "Role-Based Access Control",
                "Privileged Access Management",
                "Identity Governance"
            ]
        },
        {
            title: "Data Protection & Encryption",
            description: "End-to-end data encryption and protection for sensitive information at rest and in transit.",
            icon: Lock,
            features: [
                "Data Encryption",
                "Key Management",
                "Data Loss Prevention",
                "Backup Security",
                "Compliance Monitoring"
            ]
        },
        {
            title: "Security Auditing & Compliance",
            description: "Comprehensive security assessments and compliance with industry standards and regulations.",
            icon: Shield,
            features: [
                "Security Assessments",
                "Penetration Testing",
                "Compliance Auditing",
                "Risk Assessments",
                "Security Training"
            ]
        },
        {
            title: "Cloud Security",
            description: "Secure cloud environments with advanced security controls and monitoring.",
            icon: Cloud,
            features: [
                "Cloud Security Posture",
                "Container Security",
                "API Security",
                "Cloud Access Security",
                "Data Sovereignty"
            ]
        }
    ];
    const benefits = [
        "Protect against evolving cyber threats",
        "Ensure compliance with industry regulations",
        "Safeguard sensitive customer data",
        "Maintain business continuity",
        "Build customer trust and confidence",
        "Reduce financial and reputational risk"
    ];
    const complianceStandards = [
        "SOC 2 Type II",
        "ISO 27001",
        "GDPR",
        "HIPAA",
        "PCI DSS",
        "NIST Framework"
    ];
    const securityTechnologies = [
        "SIEM Solutions",
        "EDR/XDR Platforms",
        "Next-Gen Firewalls",
        "Zero Trust Architecture",
        "AI-Powered Security",
        "Blockchain Security"
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-red-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cybersecurity Services
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
            Protect your business with enterprise-grade cybersecurity solutions. 
            Stay ahead of threats with our comprehensive security services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Secure Your Business
            </Link>
            <Link to="/request-quote" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our cybersecurity services provide end-to-end protection for your 
              digital assets, infrastructure, and sensitive data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (<div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                      {feature}
                    </li>))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </div>))}
          </div>
        </div>
      </section>
      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Industry Compliance & Standards
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We help organizations meet and maintain compliance with industry 
              standards and regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (<div key={index} className="bg-slate-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white"/>
                </div>
                <p className="text-slate-700 font-semibold text-sm">{standard}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Security Services?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience enterprise-grade security with proven expertise and 
              cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white"/>
                </div>
                <p className="text-lg text-slate-700">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Advanced Security Technologies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We leverage the latest security technologies and best practices 
              to protect your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {securityTechnologies.map((tech, index) => (<div key={index} className="bg-slate-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <p className="text-slate-700 font-semibold text-sm">{tech}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Let's discuss how our cybersecurity 
            services can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Security Assessment
            </Link>
            <Link to="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>);
};
export default CybersecurityServices;
