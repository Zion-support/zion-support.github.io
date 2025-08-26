import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions powered by AI, quantum computing, and autonomous systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
              <p className="text-gray-300">Cutting-edge artificial intelligence services</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
              <p className="text-gray-300">Scalable cloud infrastructure and automation</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-gray-300">End-to-end business process modernization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
