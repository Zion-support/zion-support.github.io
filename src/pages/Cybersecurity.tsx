import React from 'react';
import { Link } from 'react-router-dom';
const Cybersecurity: React.FC = () => {,
  const services = [,
    {
title: "Security Audits & Assessments","
      description: "Comprehensive security evaluation of your systems and infrastructure",",
      features: [
        "Vulnerability assessments","
        "Penetration testing","
        "Code security reviews","
        "Compliance audits","
        "Risk analysis reports""
      ],
      price: "$2,500 - $15,000","
      duration: "1-4 weeks""
    },
    {
      title: "Threat Monitoring & Detection","
      description: "24/7 monitoring and threat detection services",",
      features: [
        "SIEM implementation","
        "Real-time threat detection","
        "Incident response","
        "Security analytics","
        "Threat intelligence""
      ],
      price: "$3,000 - $8,000/month","
      duration: "Ongoing""
    },
    {
      title: "Compliance Management","
      description: "Ensure compliance with industry standards and regulations",",
      features: [
        "SOC 2 Type II","
        "ISO 27001","
        "GDPR compliance","
        "HIPAA compliance","
        "PCI DSS""
      ],
      price: "$5,000 - $25,000","
      duration: "3-6 months""
    },
    {
      title: "Security Training & Awareness","
      description: "Educate your team on cybersecurity best practices",",
      features: [
        "Phishing simulations","
        "Security awareness training","
        "Incident response training","
        "Policy development","
        "Regular assessments""
      ],
      price: "$1,500 - $5,000","
      duration: "Ongoing""
    }
  ];,
  const technologies = [
    "AWS Security Hub", "Azure Security Center", "Splunk", "QRadar", "CrowdStrike","
    "Palo Alto Networks", "Fortinet", "Check Point", "Nessus", "Burp Suite","
    "OWASP ZAP", "Metasploit", "Wireshark", "Nmap", "Kali Linux""
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">"
      {/* Hero Section */}
<div className="bg-gradient-to-r from-red-600 to-orange-600 py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
          <h1 className="text-5xl font-bold text-white mb-6">Cybersecurity Services</h1>"
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">"
            Protect your digital assets with comprehensive cybersecurity solutions.
            Our expert team provides 24/7 monitoring, threat detection, and compliance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-red-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get Security Assessment
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold text-lg"" />,
              View Pricing
            </Link>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cybersecurity Services</h2>"
            <p className="text-xl text-gray-600">Comprehensive protection for your digital infrastructure</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">"
                <div className="p-8">"
                  <div className="text-4xl mb-4">🔒</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-2 mb-6">"
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">"
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">"
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />"
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">"
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>"
                      <div className="text-sm text-gray-500">{service.duration}</div>"
                    </div>
                    <Link to="/contact""
                      className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"" />,
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Technologies Section */}
      <div className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Technologies</h2>"
            <p className="text-xl text-gray-600">We work with industry-leading security tools and platforms</p>"
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">"
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors">"
                <span className="text-gray-700 font-medium">{tech}</span>"
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Process Section */}
      <div className="py-20 bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Process</h2>"
            <p className="text-xl text-gray-600">How we protect your business</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-red-600">1</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>"
              <p className="text-gray-600">Comprehensive security evaluation and vulnerability analysis</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-orange-600">2</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>"
              <p className="text-gray-600">Develop customized security strategy and implementation plan</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-yellow-600">3</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>"
              <p className="text-gray-600">Deploy security solutions and monitoring systems</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-green-600">4</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring</h3>"
              <p className="text-gray-600">24/7 monitoring and continuous security optimization</p>"
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-red-600 to-orange-600">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">"
          <h2 className="text-4xl font-bold text-white mb-6">Secure Your Business Today</h2>"
          <p className="text-xl text-red-100 mb-8">"
            Don't wait for a security breach. Get comprehensive protection for your digital assets.'
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-red-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get Free Security Assessment
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold text-lg"" />,
              View Security Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
