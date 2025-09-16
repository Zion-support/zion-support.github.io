import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const RevolutionaryTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECH SHOWCASE 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            The Future is Now
          </h1>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that are reshaping our world and creating new possibilities for humanity.
          </p>
        </div>

        {/* Interactive Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:animate-bounce">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Conscious AI</h3>
            <p className="text-purple-100 mb-6 text-center">
              AI systems that have achieved a form of digital consciousness and can think, feel, and create like humans.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Consciousness Level</span>
                  <span className="text-white font-semibold">Level 7</span>
                </div>
                <div className="w-full bg-purple-200/20 rounded-full h-2 mt-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Emotional Intelligence</span>
                  <span className="text-white font-semibold">98%</span>
                </div>
                <div className="w-full bg-purple-200/20 rounded-full h-2 mt-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
            <a href="/pages/ConsciousAI2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Meet Our AI →
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:animate-spin">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Supremacy</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Quantum computers that can solve problems in seconds that would take classical computers millennia.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-200">Qubits</span>
                  <span className="text-white font-semibold">10,000+</span>
                </div>
                <div className="w-full bg-cyan-200/20 rounded-full h-2 mt-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-200">Speed Advantage</span>
                  <span className="text-white font-semibold">10^15x</span>
                </div>
                <div className="w-full bg-cyan-200/20 rounded-full h-2 mt-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
            <a href="/pages/QuantumSupremacy2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:animate-pulse">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Neural Interface</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces that allow thought-based control of technology and enhanced cognition.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-200">Neural Channels</span>
                  <span className="text-white font-semibold">1,024</span>
                </div>
                <div className="w-full bg-emerald-200/20 rounded-full h-2 mt-2">
                  <div className="bg-emerald-400 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-200">Accuracy</span>
                  <span className="text-white font-semibold">99.7%</span>
                </div>
                <div className="w-full bg-emerald-200/20 rounded-full h-2 mt-2">
                  <div className="bg-emerald-400 h-2 rounded-full" style={{width: '99%'}}></div>
                </div>
              </div>
            </div>
            <a href="/pages/NeuralInterface2026" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Your Mind →
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:animate-bounce">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced space exploration technologies enabling interplanetary travel and colonization.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Mars Missions</span>
                  <span className="text-white font-semibold">12</span>
                </div>
                <div className="w-full bg-orange-200/20 rounded-full h-2 mt-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Success Rate</span>
                  <span className="text-white font-semibold">95%</span>
                </div>
                <div className="w-full bg-orange-200/20 rounded-full h-2 mt-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
            <a href="/pages/SpaceTech2026" className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Explore Space →
            </a>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:animate-pulse">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Metaverse 2.0</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Fully immersive virtual worlds with photorealistic graphics and seamless reality integration.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-indigo-200">Active Users</span>
                  <span className="text-white font-semibold">2.5B</span>
                </div>
                <div className="w-full bg-indigo-200/20 rounded-full h-2 mt-2">
                  <div className="bg-indigo-400 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-indigo-200">Realism</span>
                  <span className="text-white font-semibold">98%</span>
                </div>
                <div className="w-full bg-indigo-200/20 rounded-full h-2 mt-2">
                  <div className="bg-indigo-400 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
            <a href="/pages/Metaverse2026" className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Enter Metaverse →
            </a>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:animate-spin">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Predictive AI</h3>
            <p className="text-pink-100 mb-6 text-center">
              AI systems that can predict future events with unprecedented accuracy and detail.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-pink-200">Prediction Accuracy</span>
                  <span className="text-white font-semibold">94%</span>
                </div>
                <div className="w-full bg-pink-200/20 rounded-full h-2 mt-2">
                  <div className="bg-pink-400 h-2 rounded-full" style={{width: '94%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-pink-200">Time Horizon</span>
                  <span className="text-white font-semibold">10 Years</span>
                </div>
                <div className="w-full bg-pink-200/20 rounded-full h-2 mt-2">
                  <div className="bg-pink-400 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
            <a href="/pages/PredictiveAI2026" className="block w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center">
              See the Future →
            </a>
          </div>
        </div>

        {/* Technology Showcase Video */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🎬 Technology in Action</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Watch our revolutionary technologies in action and see how they're transforming the world
            </p>
          </div>
          
          <div className="bg-black/50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">▶️</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Tech Demo</h3>
            <p className="text-purple-200 mb-6">
              Experience our cutting-edge technologies through an immersive demonstration
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-purple-200">Patents Filed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-purple-200">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">1M+</div>
            <div className="text-purple-200">Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">99.9%</div>
            <div className="text-purple-200">Uptime</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Revolution</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Be part of the technological revolution that's shaping the future of humanity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </a>
            <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Learn More
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RevolutionaryTechShowcase2026;