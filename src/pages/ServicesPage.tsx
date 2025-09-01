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
            <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-4">
              Intelligent automation and decision-making systems that transform business operations.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Predictive Analytics</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
            <p className="text-gray-300 mb-4">
              Scalable cloud infrastructure and streamlined development operations.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Cloud Migration</li>
              <li>• Container Orchestration</li>
              <li>• CI/CD Pipelines</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Advanced threat protection and security solutions for modern businesses.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Threat Detection</li>
              <li>• Zero Trust Security</li>
              <li>• Compliance Management</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
            <p className="text-gray-300 mb-4">
              Transform raw data into actionable insights for better decision-making.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Business Intelligence</li>
              <li>• Real-time Dashboards</li>
              <li>• Data Visualization</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Blockchain Solutions</h3>
            <p className="text-gray-300 mb-4">
              Secure, transparent, and decentralized applications for various industries.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Smart Contracts</li>
              <li>• Supply Chain Tracking</li>
              <li>• Digital Identity</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
            <p className="text-gray-300 mb-4">
              End-to-end digital transformation services to modernize your business.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Process Automation</li>
              <li>• Legacy Modernization</li>
              <li>• Change Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
