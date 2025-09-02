import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-8">
          We offer comprehensive technology solutions designed to drive innovation and business growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Intelligent automation and decision-making systems that transform business processes.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Predictive Analytics</li>
              <li>• Computer Vision</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Advanced threat protection and security consulting for enterprise-level protection.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Threat Detection & Response</li>
              <li>• Security Audits & Compliance</li>
              <li>• Penetration Testing</li>
              <li>• Security Training</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
            <p className="text-gray-300 mb-4">
              Scalable infrastructure and deployment automation for modern applications.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Cloud Migration</li>
              <li>• CI/CD Pipelines</li>
              <li>• Infrastructure as Code</li>
              <li>• Monitoring & Logging</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
            <p className="text-gray-300 mb-4">
              Advanced analytics and business intelligence solutions for data-driven decisions.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Business Intelligence</li>
              <li>• Data Warehousing</li>
              <li>• Real-time Analytics</li>
              <li>• Data Visualization</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Blockchain Solutions</h3>
            <p className="text-gray-300 mb-4">
              Secure, transparent, and efficient blockchain-based business solutions.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Smart Contracts</li>
              <li>• DeFi Platforms</li>
              <li>• Supply Chain Tracking</li>
              <li>• Digital Identity</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
            <p className="text-gray-300 mb-4">
              Business modernization and process optimization for the digital age.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Process Automation</li>
              <li>• Legacy System Modernization</li>
              <li>• Change Management</li>
              <li>• Digital Strategy</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our services can transform your business
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
