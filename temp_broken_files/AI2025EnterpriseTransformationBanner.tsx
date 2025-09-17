import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025EnterpriseTransformationBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">🏢 ENTERPRISE TRANSFORMATION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025 Enterprise Transformation
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
            Revolutionize your enterprise with AI 2025 technologies. Complete digital transformation, 
            intelligent automation, and data-driven decision making that delivers unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ai-2025-enterprise-transformation"
              className="bg-white text-slate-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Enterprise Transformation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-all"
            >
              Get Enterprise Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}