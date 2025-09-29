import React from 'react';

const AIPlatformArchitecture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Platform Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build enterprise-grade AI platforms that scale. From data pipelines to model serving, 
            we architect AI systems that deliver consistent value across your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
              <span className="text-sm font-semibold text-blue-600">✓ Production Ready</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
              <span className="text-sm font-semibold text-green-600">✓ Scalable</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
              <span className="text-sm font-semibold text-purple-600">✓ Secure</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Data Pipeline Architecture</h3>
            <p className="text-gray-600">
              Design robust data pipelines that handle real-time streaming, batch processing, 
              and feature engineering at scale.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Model Serving Infrastructure</h3>
            <p className="text-gray-600">
              Deploy and serve ML models with high availability, auto-scaling, and 
              performance monitoring built-in.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Security & Governance</h3>
            <p className="text-gray-600">
              Implement comprehensive security controls, model governance, and 
              compliance frameworks for enterprise AI.
            </p>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Platform Architecture</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <h4 className="font-semibold">Data Layer</h4>
                <p className="text-sm text-gray-600 mt-2">Real-time & Batch Processing</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-6 mb-4">
                <h4 className="font-semibold">Feature Store</h4>
                <p className="text-sm text-gray-600 mt-2">Centralized Feature Management</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-6 mb-4">
                <h4 className="font-semibold">Model Registry</h4>
                <p className="text-sm text-gray-600 mt-2">Version Control & Deployment</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-6 mb-4">
                <h4 className="font-semibold">Serving Layer</h4>
                <p className="text-sm text-gray-600 mt-2">API Gateway & Load Balancing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our AI Platform Architecture?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🚀 Rapid Deployment</h3>
              <p className="text-blue-100">
                Get your AI platform up and running in weeks, not months. Our proven architecture 
                patterns accelerate time-to-value.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">📈 Enterprise Scale</h3>
              <p className="text-blue-100">
                Handle millions of requests per day with auto-scaling infrastructure and 
                distributed processing capabilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🔒 Production Ready</h3>
              <p className="text-blue-100">
                Built-in monitoring, logging, and alerting ensure your AI platform runs 
                reliably in production environments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">💰 Cost Optimized</h3>
              <p className="text-blue-100">
                Optimize compute costs with intelligent resource allocation and 
                right-sizing recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Platform?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your requirements and design a platform that scales with your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPlatformArchitecture;