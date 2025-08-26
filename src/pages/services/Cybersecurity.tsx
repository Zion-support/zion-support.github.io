import React from 'react';
import Head from 'next/head';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Cybersecurity: React.FC = () => {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments",
      icon: "🔍",
      features: ["Penetration Testing", "Vulnerability Scanning", "Security Audits", "Risk Assessment"]
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery from security incidents",
      icon: "🚨",
      features: ["24/7 Monitoring", "Incident Detection", "Response Planning", "Recovery Services"]
    },
    {
      title: "Security Architecture",
      description: "Design and implement secure system architectures",
      icon: "🏗️",
      features: ["Security Design", "Implementation", "Testing", "Documentation"]
    },
    {
      title: "Compliance & Governance",
      description: "Ensure compliance with security standards and regulations",
      icon: "📋",
      features: ["Policy Development", "Compliance Audits", "Training Programs", "Risk Management"]
    }
  ];

  const securityAreas = [
    "Network Security",
    "Application Security",
    "Data Protection",
    "Identity Management",
    "Cloud Security",
    "Mobile Security"
  ];

  const benefits = [
    "Protect sensitive data and intellectual property",
    "Maintain customer trust and brand reputation",
    "Ensure regulatory compliance",
    "Reduce security incident costs",
    "Improve business continuity",
    "Gain competitive advantage"
  ];

  const technologies = [
    "Firewalls & IDS/IPS",
    "SIEM & Log Management",
    "Encryption Tools",
    "Identity & Access Management",
    "Vulnerability Scanners",
    "Security Testing Tools"
  ];

  return (
    <>
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including security assessment, incident response, security architecture, and compliance. Protect your digital assets with Zion Tech Group." />
        <meta name="keywords" content="cybersecurity, security assessment, incident response, security architecture, compliance, data protection" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-red-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Cybersecurity
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your digital assets with comprehensive cybersecurity solutions. 
              From security assessment to incident response, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Secure Your Business
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cybersecurity solutions to protect your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Areas Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Security Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coverage across all critical security domains
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {securityAreas.map((area, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center hover:border-red-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Security Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-leading security tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center hover:border-red-500/50 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Cybersecurity Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with proven security expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how comprehensive cybersecurity can protect your organization 
              and give you peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Security Assessment
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cybersecurity;