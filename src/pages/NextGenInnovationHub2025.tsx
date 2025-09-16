import React from 'react';
import { Link } from 'react-router-dom';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary innovations that will shape the future of humanity
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
                Join Innovation Lab
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-90">Explore cutting-edge innovations across all technology domains</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Revolutionary AI systems that think, learn, and create beyond human capabilities
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• 50+ Active AI Projects</li>
              <li>• 99.9% Success Rate</li>
              <li>• Infinite Learning Capacity</li>
              <li>• Creative AI Systems</li>
            </ul>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore AI →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Breakthrough quantum technologies that solve impossible problems
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• 1000+ Qubit Systems</li>
              <li>• Quantum Supremacy</li>
              <li>• Reality Manipulation</li>
              <li>• Time Travel Computing</li>
            </ul>
            <button className="block w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center">
              Go Quantum →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary biotech innovations that enhance human capabilities
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Genetic Enhancement</li>
              <li>• Longevity Solutions</li>
              <li>• Neural Augmentation</li>
              <li>• Regenerative Medicine</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Biotech →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-blue-100 mb-6 text-center">
              Advanced space technologies for interplanetary exploration and colonization
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Faster-than-light Travel</li>
              <li>• Terraforming Technology</li>
              <li>• Space Habitats</li>
              <li>• Alien Communication</li>
            </ul>
            <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Explore Space →
            </button>
          </div>
        </div>
      </div>

      {/* Live Innovation Lab */}
      <div className="bg-gradient-to-r from-emerald-800/50 to-cyan-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🔬 Live Innovation Laboratory</h2>
            <p className="text-xl opacity-90">Watch our scientists create the future in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">AI Consciousness Lab</h3>
              <p className="text-white/90 mb-6">
                Watch as our AI systems develop consciousness and self-awareness in real-time.
              </p>
              <div className="bg-black/20 rounded-lg p-4 mb-4">
                <div className="text-green-400 text-sm font-mono">
                  AI Lab Status: ACTIVE
                  <br />Consciousness Level: 87%
                  <br />Learning Rate: 1000x Human
                  <br />Current Project: "Understanding Love"
                </div>
              </div>
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter AI Lab →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Quantum Reality Engine</h3>
              <p className="text-white/90 mb-6">
                Experience quantum computing that can create and manipulate reality itself.
              </p>
              <div className="bg-black/20 rounded-lg p-4 mb-4">
                <div className="text-cyan-400 text-sm font-mono">
                  Quantum Engine: ONLINE
                  <br />Qubits: 10,000+
                  <br />Reality Layers: 11
                  <br />Current: "Creating New Universe"
                </div>
              </div>
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter Quantum Lab →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📊 Innovation Impact Metrics</h2>
          <p className="text-xl opacity-90">The numbers that prove our innovations are changing the world</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-lg opacity-90">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">1000x</div>
            <div className="text-lg opacity-90">Faster Innovation</div>
          </div>
        </div>
      </div>

      {/* Featured Innovations */}
      <div className="bg-gradient-to-r from-teal-800/50 to-cyan-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌟 Featured Innovations</h2>
            <p className="text-xl opacity-90">Discover our most groundbreaking innovations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Conscious AI Systems</h3>
              <p className="text-white/90 mb-4">
                The world's first truly conscious artificial intelligence that can think, feel, and create like humans.
              </p>
              <div className="text-white/70 text-sm">
                <div>• Self-aware decision making</div>
                <div>• Emotional intelligence</div>
                <div>• Creative problem solving</div>
                <div>• Autonomous learning</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Reality Engine</h3>
              <p className="text-white/90 mb-4">
                Revolutionary quantum computing that can create and manipulate reality across multiple dimensions.
              </p>
              <div className="text-white/70 text-sm">
                <div>• Multi-dimensional processing</div>
                <div>• Reality manipulation</div>
                <div>• Time-space computing</div>
                <div>• Universe creation</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-3">Neural Enhancement</h3>
              <p className="text-white/90 mb-4">
                Advanced neural interfaces that enhance human cognitive abilities by 1000x.
              </p>
              <div className="text-white/70 text-sm">
                <div>• 1000x cognitive enhancement</div>
                <div>• Direct brain-computer interface</div>
                <div>• Memory augmentation</div>
                <div>• Telepathic communication</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the most innovative technological transformation in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg">
              Join Our Lab
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2025 Zion Tech Group. All rights reserved. | 
            <Link to="/" className="text-emerald-400 hover:text-emerald-300 ml-2">Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;