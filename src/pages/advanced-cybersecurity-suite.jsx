import React from 'react';
import Link from 'next/link';
const AdvancedCybersecuritySuite = () => {
    const features = [
        {
            title: "Threat Detection",
            description: "Advanced AI-powered threat detection and response",
            icon: "🛡️"
        },
        {
            title: "Vulnerability Assessment",
            description: "Comprehensive security scanning and analysis",
            icon: "🔍"
        },
        {
            title: "Compliance Automation",
            description: "Automated compliance monitoring and reporting",
            icon: "📋"
        },
        {
            title: "Incident Response",
            description: "24/7 security monitoring and rapid response",
            icon: "🚨"
        }
    ];
    const securityModules = [
        {
            title: "Network Security",
            description: "Advanced firewall, intrusion detection, and network monitoring",
            features: ["Next-gen firewall", "IDS/IPS", "Network segmentation", "Traffic analysis"]
        },
        {
            title: "Endpoint Protection",
            description: "Comprehensive endpoint security and device management",
            features: ["Antivirus", "EDR", "Device control", "Application whitelisting"]
        },
        {
            title: "Cloud Security",
            description: "Multi-cloud security and compliance management",
            features: ["CSPM", "Cloud DLP", "Identity management", "API security"]
        },
        {
            title: "Data Protection",
            description: "Data encryption, backup, and recovery solutions",
            features: ["Encryption at rest", "Backup automation", "DR planning", "Data classification"]
        }
    ];
    const complianceFrameworks = [
        "SOC 2 Type II",
        "ISO 27001",
        "NIST Cybersecurity Framework",
        "GDPR",
        "HIPAA",
        "PCI DSS"
    ];
    const threatIntelligence = [
        {
            category: "Real-time Monitoring",
            description: "24/7 security operations center with AI-powered threat detection"
        },
        {
            category: "Threat Hunting",
            description: "Proactive threat hunting and intelligence gathering"
        },
        {
            category: "Incident Response",
            description: "Rapid incident response with automated playbooks"
        },
        {
            category: "Forensic Analysis",
            description: "Advanced digital forensics and evidence collection"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Cybersecurity Suite
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity protection for modern enterprises. Our advanced suite 
              combines AI-powered threat detection, automated compliance, and expert security 
              management to protect your digital assets.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Enterprise-Grade Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>))}
            </div>
          </div>
          
          {/* Security Modules */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Security Modules</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {securityModules.map((module, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{module.title}</h3>
                  <p className="text-gray-300 mb-4">{module.description}</p>
                  
                  <div className="space-y-2">
                    {module.features.map((feature, idx) => (<div key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </div>))}
                  </div>
                </div>))}
            </div>
          </div>
          
          {/* Compliance Frameworks */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Compliance & Standards</h2>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                Our cybersecurity suite helps you meet and maintain compliance with major 
                industry standards and regulatory frameworks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {complianceFrameworks.map((framework, index) => (<div key={index} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                    <span className="text-blue-400 font-semibold">{framework}</span>
                  </div>))}
              </div>
            </div>
          </div>
          
          {/* Threat Intelligence */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Threat Intelligence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {threatIntelligence.map((intel, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{intel.category}</h3>
                  <p className="text-gray-300">{intel.description}</p>
                </div>))}
            </div>
          </div>
          
          {/* Security Dashboard */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Unified Security Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-300 text-sm">Live security metrics and threat alerts</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automated Response</h3>
                  <p className="text-gray-300 text-sm">AI-powered incident response and remediation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics & Reporting</h3>
                  <p className="text-gray-300 text-sm">Comprehensive security analytics and compliance reports</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Cybersecurity Suite?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Business Protection</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    Protect critical business assets and data
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    Maintain business continuity and reputation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    Reduce financial and operational risks
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    Ensure regulatory compliance
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Advantages</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    AI-powered threat detection and response
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    Unified security management platform
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    24/7 security monitoring and support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    Scalable architecture for enterprise growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Enterprise?</h3>
              <p className="text-gray-300 mb-6">
                Get comprehensive cybersecurity protection with our advanced suite. 
                Contact us today to discuss your security needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Security Assessment
                </Link>
                <Link to="/services" className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
export default AdvancedCybersecuritySuite;
