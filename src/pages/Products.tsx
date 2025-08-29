import React from 'react';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Products
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Revolutionary technology products designed to transform how you work, create, and grow.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">ZionAI Content Studio</h3>
            <p className="text-gray-300 mb-6">AI-Powered Content Creation Platform</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$299/month</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">SmartLead Pro</h3>
            <p className="text-gray-300 mb-6">Intelligent Lead Generation & CRM</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$199/month</p>
          </div>
        </div>
        <div className="mt-16">
          <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            📞 Call +1 (302) 464-0950
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;