import React from 'react';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Ultimate Tech Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Experience the ultimate showcase of cutting-edge technologies that will define 2026 and beyond." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 ULTIMATE SHOWCASE • 2026 EDITION
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2026
          </h1>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
            Experience the most advanced technologies that will revolutionize industries and transform 
            the way we live, work, and interact with the digital world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Showcase
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Interactive Demos Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Interactive Technology Demos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
              <p className="text-purple-100 mb-6 text-center">
                Experience self-aware AI with emotional intelligence and autonomous decision-making.
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try AI Demo
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
              <p className="text-purple-100 mb-6 text-center">
                Explore quantum algorithms and witness exponential processing power in action.
              </p>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Quantum Demo
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
              <p className="text-purple-100 mb-6 text-center">
                Experience direct brain-computer communication and thought-controlled interfaces.
              </p>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Neural Demo
              </button>
            </div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
            <p className="text-purple-100 text-sm mb-4">
              Advanced artificial intelligence systems with self-learning capabilities.
            </p>
            <div className="text-2xl font-bold text-purple-300">500+ Models</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-8 border border-cyan-400/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
            <p className="text-purple-100 text-sm mb-4">
              Revolutionary quantum processors solving complex problems exponentially faster.
            </p>
            <div className="text-2xl font-bold text-cyan-300">1000x Speed</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl p-8 border border-emerald-400/20">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-bold mb-3">Biotechnology</h3>
            <p className="text-purple-100 text-sm mb-4">
              AI-powered biological systems and life extension technologies.
            </p>
            <div className="text-2xl font-bold text-emerald-300">Life+</div>
          </div>

          <div className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-xl p-8 border border-violet-400/20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">Metaverse</h3>
            <p className="text-purple-100 text-sm mb-4">
              Immersive virtual worlds with seamless physical integration.
            </p>
            <div className="text-2xl font-bold text-violet-300">Infinite</div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">1000+</div>
              <div className="text-purple-100">Technologies Showcased</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">50K+</div>
              <div className="text-purple-100">Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">95%</div>
              <div className="text-purple-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-300 mb-2">24/7</div>
              <div className="text-purple-100">Live Demos</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
            Join thousands of innovators exploring the next generation of technology. 
            The future is here, and it's waiting for you to discover it.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;