import React from 'react';
import { SEO } from '../../components/SEO';

const HealthcareSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Healthcare Solutions - Zion Tech Group" 
        description="Clinical AI, patient analytics, secure interoperability, and compliance-ready platforms." 
      />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Accelerate outcomes with AI diagnostics, care management analytics, FHIR-based integrations, and HIPAA-compliant data flows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Diagnostics</h3>
            <p className="text-gray-400">
              Advanced machine learning algorithms for early disease detection and accurate diagnosis.
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Patient Analytics</h3>
            <p className="text-gray-400">
              Comprehensive patient data analysis for personalized care and treatment optimization.
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">HIPAA Compliance</h3>
            <p className="text-gray-400">
              Secure, compliant data handling with end-to-end encryption and audit trails.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading healthcare organizations in leveraging AI and advanced analytics to improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSolutions;
