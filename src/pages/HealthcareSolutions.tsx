import React from 'react';

const HealthcareSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Healthcare Solutions
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Advanced technology solutions for healthcare providers
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">AI Diagnostics</h3>
            <p className="text-gray-300">AI-powered medical imaging and diagnosis</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Patient Care</h3>
            <p className="text-gray-300">Comprehensive patient management systems</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Compliance</h3>
            <p className="text-gray-300">HIPAA and regulatory compliance solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSolutions;