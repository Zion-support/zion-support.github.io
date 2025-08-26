import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const CybersecurityServices: React.FC = () => {
  const securityServices = [
    {
      title: "Threat Detection & Response",
      description: "Advanced threat detection systems with real-time monitoring and automated response",
      features: ["SIEM Implementation", "Threat Intelligence", "Incident Response", "Security Monitoring"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits and penetration testing to identify weaknesses",
      features: ["Penetration Testing", "Security Audits", "Code Review", "Infrastructure Assessment"]
    },
    {
      title: "Security Training & Awareness",
      description: "Employee security training programs to build a security-conscious culture",
      features: ["Phishing Simulations", "Security Workshops", "Compliance Training", "Best Practices"]
    },
    {
      title: "Compliance & Governance",
      description: "Help organizations meet regulatory requirements and industry standards",
      features: ["SOC 2 Compliance", "GDPR Compliance", "HIPAA Compliance", "ISO 27001"]
    }
  ];

  return (
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
            Enterprise-grade security solutions and threat protection for your digital assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Security Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from evolving threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Security Solutions?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proactive Protection</h3>
              <p className="text-gray-300">Advanced threat detection prevents attacks before they happen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-gray-300">Round-the-clock security monitoring and incident response</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Compliance Ready</h3>
              <p className="text-gray-300">Meet industry standards and regulatory requirements</p>
=======
const Cybersecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Protect your digital assets with comprehensive security solutions.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Threat Detection</h3>
              <p className="text-slate-600">Advanced monitoring and threat intelligence systems.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Security Audits</h3>
              <p className="text-slate-600">Comprehensive security assessments and compliance.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Incident Response</h3>
              <p className="text-slate-600">24/7 security monitoring and rapid response.</p>
>>>>>>> 74265048d1cf68c9d39ff50c17bc7dd25683f253
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

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
            Contact Us Today
          </Link>
=======
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Business Today</h2>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">Get Started</Link>
>>>>>>> 74265048d1cf68c9d39ff50c17bc7dd25683f253
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default CybersecurityServices;
=======
export default Cybersecurity;
>>>>>>> 74265048d1cf68c9d39ff50c17bc7dd25683f253
