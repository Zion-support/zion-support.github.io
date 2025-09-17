import React from 'react';

const RevolutionaryAIServicesShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH AI SERVICES • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary AI Services Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Transform your business with our cutting-edge AI solutions that are reshaping industries and solving impossible problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced MLOps Platform</h3>
            <p className="text-blue-100 mb-6 text-center">
              Automated machine learning operations with self-healing pipelines, continuous optimization, and real-time inference
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Automated model training and deployment</li>
              <li>• Real-time inference with sub-millisecond latency</li>
              <li>• ML observability and drift detection</li>
              <li>• Self-healing architecture</li>
            </ul>
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-green-400">95%</span>
              <span className="text-blue-200 ml-2">Uptime</span>
            </div>
            <a href="/pages/AdvancedMLOps2025" className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Explore MLOps Platform →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum AI Solutions</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum-enhanced AI for solving impossible computational problems with exponential speedup
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum neural networks and optimization</li>
              <li>• Quantum machine learning algorithms</li>
              <li>• Quantum cryptography and security</li>
              <li>• Drug discovery and molecular simulation</li>
            </ul>
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-green-400">300%</span>
              <span className="text-purple-200 ml-2">Speedup</span>
            </div>
            <a href="/pages/QuantumAI2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Discover Quantum AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous AI Systems</h3>
            <p className="text-green-100 mb-6 text-center">
              Self-managing AI systems that operate independently, learn continuously, and deliver unprecedented results
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• Self-learning intelligence</li>
              <li>• Autonomous decision making</li>
              <li>• Self-healing architecture</li>
              <li>• Continuous optimization</li>
            </ul>
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-green-400">99.9%</span>
              <span className="text-green-200 ml-2">Accuracy</span>
            </div>
            <a href="/pages/AutonomousSystems2025" className="block w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center">
              Deploy Autonomous AI →
            </a>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <h4 className="text-xl font-bold mb-2">Enterprise Clients</h4>
            <p className="text-gray-300 text-sm">Trust our AI solutions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
            <h4 className="text-xl font-bold mb-2">Cost Savings</h4>
            <p className="text-gray-300 text-sm">Delivered to clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
            <h4 className="text-xl font-bold mb-2">Support</h4>
            <p className="text-gray-300 text-sm">Round-the-clock assistance</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
            <h4 className="text-xl font-bold mb-2">SLA</h4>
            <p className="text-gray-300 text-sm">Service level agreement</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already using our revolutionary AI services
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/AdvancedMLOps2025" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </a>
            <a href="/pages/QuantumAI2025" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAIServicesShowcase;