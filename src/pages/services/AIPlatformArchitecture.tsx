import React from 'react';

const AIPlatformArchitecture: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Platform Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build scalable, enterprise-grade AI platforms with robust architecture 
            that supports your organization's growth and innovation needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-400 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Scalable Infrastructure</h3>
            <p className="text-gray-300 mb-6">
              Cloud-native architecture that scales automatically with your AI workloads, 
              ensuring optimal performance and cost efficiency.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-purple-400 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Microservices Architecture</h3>
            <p className="text-gray-300 mb-6">
              Modular, containerized services that enable rapid development, 
              deployment, and maintenance of AI applications.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">API-First Design</h3>
            <p className="text-gray-300 mb-6">
              RESTful and GraphQL APIs that provide seamless integration 
              with existing systems and third-party services.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Build Your AI Platform?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert architects design and implement a robust AI platform 
            tailored to your specific business requirements.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPlatformArchitecture;