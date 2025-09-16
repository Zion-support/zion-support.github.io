import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Next-Gen Innovation Hub 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore the future of innovation with our Next-Gen Innovation Hub featuring cutting-edge technologies for 2026." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN INNOVATION • 2026 VISION
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
            Welcome to the world's most advanced innovation hub where cutting-edge technologies 
            converge to create unprecedented possibilities for the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Join the Hub
            </button>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous AI Systems</h3>
            <p className="text-purple-100 mb-4">
              Self-evolving AI systems with independent decision-making capabilities and continuous learning.
            </p>
            <div className="text-3xl font-bold text-indigo-300">24/7 Active</div>
          </div>

          <div className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
            <div className="text-6xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Metaverse Integration</h3>
            <p className="text-purple-100 mb-4">
              Seamless convergence of virtual and physical worlds with holographic interfaces.
            </p>
            <div className="text-3xl font-bold text-violet-300">Infinite Scale</div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
            <div className="text-6xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Biotech Revolution</h3>
            <p className="text-purple-100 mb-4">
              AI-powered biological system optimization and life extension technologies.
            </p>
            <div className="text-3xl font-bold text-green-300">Life Extension</div>
          </div>
        </div>

        {/* Interactive Demos Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Interactive Technology Demos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-4">Live AI Demo</h3>
              <p className="text-purple-100 mb-6">
                Experience real-time AI decision making and problem solving in action.
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Demo
              </button>
            </div>
            <div className="bg-gradient-to-br from-rose-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30">
              <h3 className="text-2xl font-bold mb-4">Virtual Reality Lab</h3>
              <p className="text-purple-100 mb-6">
                Step into immersive virtual environments and interact with future technologies.
              </p>
              <button className="bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter VR Lab
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-300 mb-2">1000+</div>
            <div className="text-purple-100">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">50+</div>
            <div className="text-purple-100">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-300 mb-2">10K+</div>
            <div className="text-purple-100">Innovators</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-300 mb-2">99%</div>
            <div className="text-purple-100">Success Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
            Join the innovation revolution and be part of the future. Our Next-Gen Innovation Hub 
            is where tomorrow's technologies are being created today.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
            Start Innovating
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;