import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your enterprise with our cutting-edge AI solutions and revolutionary technology services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link 
            href="/services/ai-workflow-automation"
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">AI Workflow Automation</h3>
            <p className="text-gray-300 mb-6">
              Automate complex business processes with intelligent AI workflows that adapt and optimize in real-time.
            </p>
            <div className="text-blue-400 font-semibold">Learn More →</div>
          </Link>

          <Link 
            href="/services/ai-virtual-assistant"
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">AI Virtual Assistant</h3>
            <p className="text-gray-300 mb-6">
              Deploy intelligent virtual assistants that understand context and provide personalized support.
            </p>
            <div className="text-green-400 font-semibold">Learn More →</div>
          </Link>

          <Link 
            href="/services/ai-data-analytics"
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">AI Data Analytics</h3>
            <p className="text-gray-300 mb-6">
              Unlock insights from your data with advanced AI analytics and predictive modeling.
            </p>
            <div className="text-purple-400 font-semibold">Learn More →</div>
          </Link>
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;