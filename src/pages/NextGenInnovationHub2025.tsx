import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Next-Gen Innovation Hub 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover the Next-Gen Innovation Hub 2025. Cutting-edge AI, quantum computing, and neural interface technologies transforming every industry." />
        <meta name="keywords" content="innovation hub 2025, next-gen technology, AI innovation, quantum innovation, neural innovation, tech hub" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-bold mb-10 animate-pulse">
              ⚡ NEXT-GEN INNOVATION • JANUARY 2025
            </div>
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              Next-Gen<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Innovation Hub
              </span>
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-16">
              Welcome to the epicenter of technological innovation. Explore cutting-edge AI, quantum computing, 
              and neural interface technologies that are revolutionizing every industry and reshaping the future.
            </p>
            <div className="flex justify-center space-x-8">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl transform hover:scale-105">
                Explore Innovations →
              </button>
              <button className="border-3 border-white px-10 py-5 rounded-xl hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-xl transform hover:scale-105">
                Join the Hub
              </button>
            </div>
          </div>
        </section>

        {/* Innovation Categories */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold mb-8">🔬 Innovation Categories</h2>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto">
                Explore revolutionary technologies across multiple innovation domains
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              {/* AI Innovation */}
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-10 border border-cyan-400/30 hover:scale-105 transition-all duration-500">
                <div className="text-8xl mb-8 text-center">🤖</div>
                <h3 className="text-3xl font-bold mb-6 text-center">AI Innovation</h3>
                <p className="text-cyan-100 mb-8 text-lg text-center">
                  Revolutionary artificial intelligence systems that are achieving superintelligence 
                  and transforming every aspect of human life and business operations.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-200">Autonomous AI Agents</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-200">Superintelligent Systems</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-200">Creative AI</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-200">Emotional Intelligence</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                </div>
                <button className="w-full bg-white text-cyan-600 py-4 rounded-xl hover:bg-cyan-50 transition-colors font-semibold text-lg">
                  Explore AI Innovations →
                </button>
              </div>

              {/* Quantum Innovation */}
              <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-10 border border-purple-400/30 hover:scale-105 transition-all duration-500">
                <div className="text-8xl mb-8 text-center">⚛️</div>
                <h3 className="text-3xl font-bold mb-6 text-center">Quantum Innovation</h3>
                <p className="text-purple-100 mb-8 text-lg text-center">
                  Quantum computing has achieved practical quantum supremacy, enabling calculations 
                  that were previously impossible and opening new frontiers in science and technology.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Quantum Supremacy</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Molecular Simulation</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Quantum Cryptography</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Quantum AI</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                </div>
                <button className="w-full bg-white text-purple-600 py-4 rounded-xl hover:bg-purple-50 transition-colors font-semibold text-lg">
                  Explore Quantum →
                </button>
              </div>

              {/* Neural Innovation */}
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-10 border border-emerald-400/30 hover:scale-105 transition-all duration-500">
                <div className="text-8xl mb-8 text-center">🧬</div>
                <h3 className="text-3xl font-bold mb-6 text-center">Neural Innovation</h3>
                <p className="text-emerald-100 mb-8 text-lg text-center">
                  Brain-computer interfaces have achieved seamless integration, enabling direct 
                  communication between human consciousness and digital systems.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-200">Thought Control</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-200">Memory Enhancement</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-200">Neural Augmentation</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-200">Consciousness Upload</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">LIVE</span>
                  </div>
                </div>
                <button className="w-full bg-white text-emerald-600 py-4 rounded-xl hover:bg-emerald-50 transition-colors font-semibold text-lg">
                  Explore Neural →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Metrics */}
        <section className="py-24 px-4 bg-black/30">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold mb-8">📊 Innovation Metrics</h2>
              <p className="text-2xl opacity-90">
                The numbers that demonstrate our revolutionary impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <div className="text-6xl font-bold text-cyan-400 mb-4">500+</div>
                <div className="text-xl font-semibold mb-2">Active Innovations</div>
                <div className="text-gray-300">Revolutionary technologies in development</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <div className="text-6xl font-bold text-purple-400 mb-4">99.9%</div>
                <div className="text-xl font-semibold mb-2">Success Rate</div>
                <div className="text-gray-300">Innovation deployment success</div>
              </div>
              <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                <div className="text-6xl font-bold text-emerald-400 mb-4">1M+</div>
                <div className="text-xl font-semibold mb-2">Lives Impacted</div>
                <div className="text-gray-300">People benefiting from innovations</div>
              </div>
              <div className="text-center bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30">
                <div className="text-6xl font-bold text-pink-400 mb-4">∞</div>
                <div className="text-xl font-semibold mb-2">Possibilities</div>
                <div className="text-gray-300">Limitless potential unlocked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Innovations */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold mb-8">🌟 Featured Innovations</h2>
              <p className="text-2xl opacity-90">
                Revolutionary technologies transforming industries worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-10 border border-cyan-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-2 bg-green-500 text-white text-sm rounded-full font-semibold">BREAKTHROUGH</span>
                  <span className="text-lg text-gray-300">Healthcare Innovation</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">AI-Powered Precision Medicine</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Revolutionary AI systems analyze genetic data, medical history, and real-time 
                  biometrics to provide personalized treatment recommendations with 99.9% accuracy. 
                  Combined with neural interfaces, doctors can access patient data through thought.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                    <div className="text-sm text-gray-400">Treatment Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">0.1s</div>
                    <div className="text-sm text-gray-400">Diagnosis Time</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-10 border border-purple-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-2 bg-blue-500 text-white text-sm rounded-full font-semibold">REVOLUTIONARY</span>
                  <span className="text-lg text-gray-300">Energy Innovation</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Quantum Fusion Reactor</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Quantum computers have solved the complex plasma physics equations needed for 
                  controlled nuclear fusion. AI systems manage the reactor operations, while 
                  neural interfaces allow engineers to control the system with their thoughts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">1000x</div>
                    <div className="text-sm text-gray-400">Energy Output</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400">0%</div>
                    <div className="text-sm text-gray-400">Carbon Emissions</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-10 border border-emerald-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-2 bg-emerald-500 text-white text-sm rounded-full font-semibold">TRANSFORMATIVE</span>
                  <span className="text-lg text-gray-300">Education Innovation</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Neural Learning Academy</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Students can download knowledge directly into their brains through neural interfaces. 
                  AI tutors provide personalized learning experiences, while quantum computers 
                  optimize educational pathways in real-time.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">1000x</div>
                    <div className="text-sm text-gray-400">Learning Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400">∞</div>
                    <div className="text-sm text-gray-400">Knowledge Access</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-10 border border-pink-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-2 bg-pink-500 text-white text-sm rounded-full font-semibold">FUTURISTIC</span>
                  <span className="text-lg text-gray-300">Consciousness Innovation</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Digital Consciousness Platform</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Humans can upload their consciousness to quantum-powered servers, achieving 
                  digital immortality. AI systems replicate human thought patterns, while neural 
                  interfaces enable seamless transition between biological and digital existence.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400">∞</div>
                    <div className="text-sm text-gray-400">Digital Lifespan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-400">Consciousness Fidelity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Community */}
        <section className="py-24 px-4 bg-black/30">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold mb-8">👥 Innovation Community</h2>
              <p className="text-2xl opacity-90">
                Join the world's most innovative minds in shaping the future
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <div className="text-6xl mb-6">🧠</div>
                <h3 className="text-2xl font-bold mb-4">AI Researchers</h3>
                <p className="text-cyan-200 mb-6">
                  Leading artificial intelligence researchers developing superintelligent systems
                </p>
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400">Active Researchers</div>
              </div>

              <div className="text-center bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <div className="text-6xl mb-6">⚛️</div>
                <h3 className="text-2xl font-bold mb-4">Quantum Scientists</h3>
                <p className="text-purple-200 mb-6">
                  Quantum computing experts pushing the boundaries of computational possibility
                </p>
                <div className="text-3xl font-bold text-purple-400">200+</div>
                <div className="text-sm text-gray-400">Quantum Experts</div>
              </div>

              <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                <div className="text-6xl mb-6">🧬</div>
                <h3 className="text-2xl font-bold mb-4">Neural Engineers</h3>
                <p className="text-emerald-200 mb-6">
                  Brain-computer interface specialists creating the future of human-digital interaction
                </p>
                <div className="text-3xl font-bold text-emerald-400">150+</div>
                <div className="text-sm text-gray-400">Neural Engineers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-3xl p-16 border border-cyan-400/30">
              <h2 className="text-6xl font-bold mb-8">Join the Innovation Revolution</h2>
              <p className="text-3xl opacity-90 mb-12 max-w-4xl mx-auto">
                Be part of the most innovative community on Earth. Together, we're building 
                the future of human civilization through revolutionary technology.
              </p>
              <div className="flex justify-center space-x-8">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl transform hover:scale-105">
                  Join the Hub →
                </button>
                <button className="border-3 border-white px-12 py-6 rounded-xl hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-xl transform hover:scale-105">
                  Explore Innovations
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NextGenInnovationHub2025;