import React from 'react';
import { Link } from 'react-router-dom';

const Cybersecurity: React.FC = () => {
  const securityServices = [
    {
      title: "Threat Detection & Response",
      description: "Advanced threat detection and incident response capabilities",
      features: ["SIEM Implementation", "Endpoint Detection", "Behavioral Analytics", "24/7 Monitoring"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive security testing and vulnerability management",
      features: ["Penetration Testing", "Security Audits", "Code Reviews", "Risk Assessments"]
    },
    {
      title: "Security Training",
      description: "Employee security awareness and training programs",
      features: ["Phishing Simulations", "Security Workshops", "Compliance Training", "Best Practices"]
    },
    {
      title: "Compliance & Governance",
      description: "Regulatory compliance and security governance frameworks",
      features: ["SOC 2", "ISO 27001", "GDPR", "HIPAA Compliance"]
    }
  ];

  const threatLandscape = [
    {
      threat: "Ransomware Attacks",
      description: "Malicious software that encrypts files and demands payment",
      protection: "Regular backups, email filtering, endpoint protection"
    },
    {
      threat: "Phishing Scams",
      description: "Deceptive emails designed to steal credentials",
      protection: "Security training, email security, multi-factor authentication"
    },
    {
      threat: "Data Breaches",
      description: "Unauthorized access to sensitive information",
      protection: "Access controls, encryption, monitoring, incident response"
    },
    {
      threat: "Insider Threats",
      description: "Security risks from employees or contractors",
      protection: "User behavior analytics, access reviews, training"
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for data security",
      benefits: ["Customer Trust", "Risk Management", "Operational Excellence"]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      benefits: ["Global Recognition", "Best Practices", "Continuous Improvement"]
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance",
      benefits: ["Data Privacy", "Customer Rights", "Legal Compliance"]
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      benefits: ["Healthcare Compliance", "Patient Privacy", "Legal Protection"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cyber
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Security
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with enterprise-grade security solutions and proactive threat defense
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Secure Your Digital Future</h2>
                <p className="text-gray-300 mb-6">
                  In today's interconnected world, cybersecurity is not optional. Our comprehensive security solutions protect your business from evolving threats while ensuring compliance with industry standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Proactive threat detection and response</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Compliance with industry regulations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">24/7 security monitoring and support</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🔒</div>
                <p className="text-gray-300 text-lg">Enterprise-Grade Security Solutions</p>
              </div>
            </div>
          </div>

          {/* Security Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Security Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business
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
                  
                  <div className="mb-4">
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

          {/* Threat Landscape */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Understanding the Threat Landscape</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed about current cybersecurity threats and our protection strategies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {threatLandscape.map((threat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{threat.threat}</h3>
                  <p className="text-gray-300 mb-4">{threat.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Protection Measures:</h4>
                    <p className="text-gray-300 text-sm">{threat.protection}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Frameworks */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compliance & Governance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet regulatory requirements and build customer trust with proven compliance frameworks
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{framework.name}</h3>
                  <p className="text-gray-300 mb-4">{framework.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {framework.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Security Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to implementing comprehensive cybersecurity solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assess</h3>
                <p className="text-gray-300 text-sm">Evaluate current security posture and identify risks</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Create comprehensive security strategy and architecture</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implement</h3>
                <p className="text-gray-300 text-sm">Deploy security solutions and monitoring systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Monitor</h3>
                <p className="text-gray-300 text-sm">Continuous monitoring and threat response</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our cybersecurity solutions can protect your business and ensure compliance
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;