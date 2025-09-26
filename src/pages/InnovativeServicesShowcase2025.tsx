import React from 'react';

const InnovativeServicesShowcase2025 = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Innovative Services Showcase 2025
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive suite of cutting-edge services designed to drive your business forward.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
          <p className="text-gray-600 mb-4">
            Advanced artificial intelligence solutions for automation, analytics, and decision-making.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Machine Learning Models</li>
            <li>• Natural Language Processing</li>
            <li>• Computer Vision</li>
            <li>• Predictive Analytics</li>
          </ul>
          <a href="/pages/AdvancedAITransformation2025" className="text-purple-600 hover:text-purple-700 font-semibold">
            Learn More →
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">☁️</div>
          <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
          <p className="text-gray-600 mb-4">
            Scalable cloud infrastructure and deployment solutions for modern applications.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Cloud Migration</li>
            <li>• Infrastructure as Code</li>
            <li>• DevOps Automation</li>
            <li>• Multi-Cloud Management</li>
          </ul>
          <a href="/pages/AdvancedTechSolutions2025" className="text-blue-600 hover:text-blue-700 font-semibold">
            Explore →
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🔗</div>
          <h3 className="text-xl font-semibold mb-2">Blockchain Solutions</h3>
          <p className="text-gray-600 mb-4">
            Secure, decentralized solutions powered by blockchain technology.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Smart Contracts</li>
            <li>• DeFi Applications</li>
            <li>• NFT Platforms</li>
            <li>• Supply Chain Tracking</li>
          </ul>
          <a href="/pages/InnovationLanding2025" className="text-green-600 hover:text-green-700 font-semibold">
            Discover →
          </a>
        </div>
      </div>
    </main>
  );
};

export default InnovativeServicesShowcase2025;