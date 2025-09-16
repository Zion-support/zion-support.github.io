import React from "react";

const InnovativeServicesShowcase2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Innovative Services Showcase 2025</h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our comprehensive suite of innovative services designed to transform your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
            <p className="text-indigo-100 mb-6">Cutting-edge artificial intelligence services for your business needs.</p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Machine Learning Implementation</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision Solutions</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4">Cloud Services</h3>
            <p className="text-purple-100 mb-6">Scalable cloud infrastructure and deployment solutions.</p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Cloud Migration</li>
              <li>• Infrastructure as Code</li>
              <li>• DevOps Automation</li>
              <li>• Multi-cloud Management</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30">
            <h3 className="text-2xl font-bold mb-4">Blockchain Solutions</h3>
            <p className="text-pink-100 mb-6">Secure, decentralized solutions powered by blockchain technology.</p>
            <ul className="text-pink-200 space-y-2 text-sm">
              <li>• Smart Contract Development</li>
              <li>• DeFi Applications</li>
              <li>• NFT Marketplaces</li>
              <li>• Supply Chain Tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;