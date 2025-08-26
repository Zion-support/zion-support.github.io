import React from 'react';
import { Link } from 'react-router-dom';

const Enterprise: React.FC = () => {
  const enterpriseSolutions = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Advanced analytics and business intelligence solutions that provide real-time insights and predictive capabilities.",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "Data Integration"]
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions with automated DevOps practices for enterprise-grade applications.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Performance Optimization"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions including SOC2 compliance automation and threat detection.",
      features: ["Threat Detection", "Compliance Automation", "Security Audits", "Incident Response"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation for modern enterprises.",
      features: ["Process Automation", "Change Management", "Technology Strategy", "ROI Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for enterprise-scale organizations 
              seeking digital transformation and competitive advantage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, idx) => (
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
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how our enterprise solutions can drive innovation, 
                efficiency, and growth for your organization.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;