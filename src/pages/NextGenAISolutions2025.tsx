import React from 'react';

const NextGenAISolutions2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Next-Gen AI Solutions 2025
          </h1>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto mb-8">
            Experience the future of artificial intelligence with our revolutionary solutions that are reshaping industries and creating unprecedented opportunities.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Autonomous AI Agents</h3>
            <p className="text-purple-200 mb-6 text-center">
              Self-managing AI systems that learn, adapt, and execute complex tasks without human intervention.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Self-learning algorithms</li>
              <li>• Autonomous decision making</li>
              <li>• Continuous optimization</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Edge AI Computing</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Deploy AI models directly on edge devices for real-time processing and reduced latency.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Real-time processing</li>
              <li>• Reduced latency</li>
              <li>• Offline capabilities</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🎨</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Generative AI 2.0</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Advanced content generation with unprecedented creativity and accuracy.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Multi-modal generation</li>
              <li>• Creative collaboration</li>
              <li>• Context-aware outputs</li>
            </ul>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary AI Technologies</h2>
            <p className="text-xl text-purple-200">Discover the cutting-edge technologies powering the future</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Neural Architecture Search</h3>
                  <p className="text-purple-200">Automatically discover optimal neural network architectures for your specific use case.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Federated Learning</h3>
                  <p className="text-purple-200">Train AI models across distributed data sources while maintaining privacy and security.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Explainable AI</h3>
                  <p className="text-purple-200">Understand and trust AI decisions with transparent, interpretable models.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Quantum Machine Learning</h3>
                  <p className="text-purple-200">Leverage quantum computing for exponentially faster AI training and inference.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Multi-Modal AI</h3>
                  <p className="text-purple-200">Process and understand text, images, audio, and video simultaneously.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Continual Learning</h3>
                  <p className="text-purple-200">AI systems that continuously learn and adapt without forgetting previous knowledge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our next-generation AI solutions to drive innovation and growth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenAISolutions2025;