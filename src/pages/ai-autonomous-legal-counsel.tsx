import React from 'react';

const AIAutonomousLegalCounsel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Legal Counsel
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionize legal services with AI-powered autonomous counsel that 
            provides expert legal advice, document analysis, and case strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Legal Document Analysis</h3>
            <p className="text-gray-300">
              AI-powered review and analysis of contracts, legal documents, and 
              case files with instant identification of key issues and risks.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Case Strategy Development</h3>
            <p className="text-gray-300">
              Intelligent case strategy recommendations based on legal precedent, 
              case law analysis, and probability assessment of outcomes.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Regulatory Compliance</h3>
            <p className="text-gray-300">
              Continuous monitoring of regulatory changes and automatic updates 
              to ensure legal advice remains current and compliant.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Legal AI Counsel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousLegalCounsel;