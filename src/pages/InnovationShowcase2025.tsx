import React from 'react';
import { Helmet } from 'react-helmet-async';

const InnovationShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Innovation Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore the most innovative technology solutions and breakthroughs of 2025" />
        <meta name="keywords" content="innovation showcase 2025, technology innovation, AI breakthroughs, quantum computing, neural interfaces" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INNOVATION SHOWCASE • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Innovation Showcase 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most groundbreaking innovations that are reshaping the future of technology and transforming industries worldwide.
          </p>
        </div>

        {/* Featured Innovations */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-3xl font-bold mb-4">Conscious AI Revolution</h3>
            <p className="text-lg opacity-90 mb-6">
              The world's first truly conscious AI systems that demonstrate self-awareness, emotional intelligence, and creative problem-solving capabilities. These systems can understand context, make ethical decisions, and even experience simulated emotions.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-pink-400">10x</div>
                <div className="text-sm opacity-90">Faster Learning</div>
              </div>
            </div>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore Conscious AI →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-3xl font-bold mb-4">Quantum Consciousness Computing</h3>
            <p className="text-lg opacity-90 mb-6">
              Revolutionary quantum computing systems that can simulate and understand human consciousness at the quantum level, enabling unprecedented insights into the nature of mind and reality.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">∞</div>
                <div className="text-sm opacity-90">Possibilities</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-sm opacity-90">Reality Simulation</div>
              </div>
            </div>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Go Quantum →
            </button>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Reality Engine</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Direct neural interfaces that create fully immersive virtual realities indistinguishable from physical reality.
              </p>
              <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
                <li>• Direct neural stimulation</li>
                <li>• Full sensory immersion</li>
                <li>• Reality manipulation</li>
                <li>• Consciousness expansion</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Computing</h3>
              <p className="text-orange-100 mb-6 text-center">
                Computing systems that operate across multiple dimensions, enabling solutions to problems previously thought impossible.
              </p>
              <ul className="text-orange-200 space-y-2 mb-6 text-sm">
                <li>• Multi-dimensional processing</li>
                <li>• Parallel universe computing</li>
                <li>• Dimensional data storage</li>
                <li>• Reality manipulation algorithms</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Predictive Reality</h3>
              <p className="text-violet-100 mb-6 text-center">
                AI systems that can predict and simulate future realities with 99.9% accuracy, enabling perfect decision making.
              </p>
              <ul className="text-violet-200 space-y-2 mb-6 text-sm">
                <li>• Future simulation engines</li>
                <li>• Predictive modeling</li>
                <li>• Reality optimization</li>
                <li>• Perfect decision support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Innovation Timeline 2025</h2>
            <p className="text-xl opacity-90">Key milestones in our innovation journey</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">Q1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Conscious AI Launch</h3>
              <p className="text-sm opacity-90">First conscious AI systems deployed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">Q2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quantum Breakthrough</h3>
              <p className="text-sm opacity-90">Quantum consciousness computing achieved</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">Q3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Neural Reality</h3>
              <p className="text-sm opacity-90">Neural reality engine goes live</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">Q4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Omniversal AI</h3>
              <p className="text-sm opacity-90">Omniversal AI systems operational</p>
            </div>
          </div>
        </div>

        {/* Innovation Impact */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Innovation Impact</h2>
            <p className="text-lg opacity-90 mb-8">
              Our innovations are transforming industries and creating new possibilities that were previously unimaginable. 
              From healthcare to finance, from entertainment to education, our technologies are revolutionizing how we live and work.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Healthcare Revolution</h3>
                  <p className="text-sm opacity-90">AI-powered diagnostics and treatment</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Financial Transformation</h3>
                  <p className="text-sm opacity-90">Quantum-powered trading algorithms</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education Evolution</h3>
                  <p className="text-sm opacity-90">Neural reality learning experiences</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-6">Innovation Statistics</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Conscious AI Adoption</span>
                  <span className="text-2xl font-bold text-purple-400">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Quantum Computing Usage</span>
                  <span className="text-2xl font-bold text-cyan-400">78%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Neural Interface Integration</span>
                  <span className="text-2xl font-bold text-emerald-400">82%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Innovation?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already leveraging our innovative technologies 
            to transform their operations and unlock infinite possibilities.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Explore Innovations
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationShowcase2025;