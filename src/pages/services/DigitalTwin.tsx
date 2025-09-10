import React from 'react';
import { Cpu, Eye, BarChart3, Settings } from 'lucide-react';
import SEO from '../../components/SEO';

const DigitalTwin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Twin Solutions - Zion Tech Group"
        description="Advanced digital twin technology for real-time monitoring and optimization"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Twin Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create digital replicas of physical assets for real-time monitoring, analysis, and optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
            <p className="text-gray-300">
              Continuous monitoring of physical assets through digital twins
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <Eye className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300">
              AI-powered predictions and insights for better decision making
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
            <p className="text-gray-300">
              Optimize performance and efficiency through digital simulation
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Custom Solutions</h3>
            <p className="text-gray-300">
              Tailored digital twin solutions for your specific needs
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Contact us to learn how digital twin technology can revolutionize your business processes
          </p>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwin;