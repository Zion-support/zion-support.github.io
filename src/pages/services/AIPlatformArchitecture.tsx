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
            <h3 className="text-xl font-bold text-white mb-3">Data Pipeline Integration</h3>
            <p className="text-gray-300 mb-6">
              Seamless integration with existing data sources and pipelines, 
              enabling real-time data processing and analytics.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Model Management</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive model lifecycle management with versioning, 
              monitoring, and automated deployment capabilities.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Platform Architecture Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Features</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• High availability and fault tolerance</li>
                <li>• Security and compliance built-in</li>
                <li>• Multi-tenant architecture</li>
                <li>• API-first design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Performance & Scale</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Auto-scaling capabilities</li>
                <li>• Load balancing and optimization</li>
                <li>• Real-time processing</li>
                <li>• Global deployment support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your AI Platform?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our expert architects will design and implement a robust AI platform 
            that meets your specific requirements and scales with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Start Building
            </a>
            <a 
              href="/about"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPlatformArchitecture;