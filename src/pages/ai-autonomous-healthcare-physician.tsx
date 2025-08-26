import React from 'react';

const AIAutonomousHealthcarePhysician: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Healthcare Physician
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform healthcare delivery with AI-powered autonomous physicians 
            that provide accurate diagnoses, treatment plans, and patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Advanced Diagnostics</h3>
            <p className="text-gray-300">
              AI-powered analysis of medical images, lab results, and patient data 
              to provide accurate and timely diagnoses with high confidence levels.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Personalized Treatment</h3>
            <p className="text-gray-300">
              Evidence-based treatment recommendations tailored to individual patient 
              profiles, medical history, and genetic factors.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Continuous Monitoring</h3>
            <p className="text-gray-300">
              Real-time patient monitoring with predictive analytics to identify 
              potential complications before they become critical.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Explore AI Healthcare
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousHealthcarePhysician;