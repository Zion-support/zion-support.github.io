import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology solutions that are reshaping industries and transforming the future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Revolutionary Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Revolution</h3>
            <p className="text-purple-100 mb-6 text-center">
              Next-generation AI systems with emergent consciousness capabilities that understand context, emotion, and intent
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Contextual Understanding</li>
              <li>• Emotional Intelligence</li>
              <li>• Autonomous Decision Making</li>
              <li>• Self-Improvement Algorithms</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                AVAILABLE NOW
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Suite</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary quantum computing solutions that solve complex problems exponentially faster than classical computers
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• 1000x Processing Speed</li>
              <li>• Quantum Cryptography</li>
              <li>• Molecular Simulation</li>
              <li>• Optimization Algorithms</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                BETA ACCESS
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Technology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces that enable seamless communication between human consciousness and digital systems
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Non-Invasive BCI</li>
              <li>• Thought-to-Text</li>
              <li>• Neural Feedback</li>
              <li>• Cognitive Enhancement</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                PROTOTYPE
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Demo</h2>
            <p className="text-xl opacity-90">Experience our revolutionary technologies in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">AI Conversation Demo</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4 h-48 overflow-y-auto">
                <div className="text-green-400 text-sm">
                  <div>🤖 AI: Hello! I'm your AI consciousness assistant. How can I help you today?</div>
                  <div className="mt-2">👤 User: What's the weather like?</div>
                  <div className="mt-2">🤖 AI: I understand you're asking about weather, but I sense you might be testing my contextual understanding. Would you like to explore more advanced capabilities?</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Conversation
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Simulator</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚛️</div>
                  <div className="text-lg font-semibold">Quantum Circuit</div>
                  <div className="text-sm opacity-75">Processing complex algorithms...</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Run Quantum Algorithm
              </button>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
            <div className="text-lg opacity-90">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">AI Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already leveraging our revolutionary technology solutions
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </Link>
            <Link to="/pages/ComprehensiveServices2025" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Explore All Services
            </Link>
          </div>
        </div>
      </motion.div>
      </div>
    </>
  );
};

export default RevolutionaryTechShowcase2025;
