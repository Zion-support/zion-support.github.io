import React from 'react';
import SEO from '../../components/SEO';

const AIHealthcarePlatform: React.FC = () => {
  return (
    <>
      <SEO 
        title="AI Healthcare Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare platform for diagnosis, treatment, and patient care management."
        keywords="ai healthcare, medical ai, healthcare platform, diagnosis, treatment, medical technology"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Healthcare Platform
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform healthcare delivery with our advanced AI platform that enhances diagnosis accuracy, 
                streamlines treatment planning, and improves patient outcomes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI Healthcare Platform is currently in development. This revolutionary platform will provide:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  AI-powered diagnostic assistance
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Personalized treatment recommendations
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Patient monitoring and care management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Medical image analysis and interpretation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Drug interaction and side effect prediction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIHealthcarePlatform;