import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Cutting-edge technology solutions designed to transform your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">AI Development</h3>
            <p className="text-gray-300 mb-6">Custom AI models and machine learning solutions.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$5,000 - $50,000</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
            <p className="text-gray-300 mb-6">Seamless cloud migration and scalable architecture.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$10,000 - $100,000</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6">Comprehensive security solutions and assessments.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$3,000 - $25,000</p>
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

export default Services;