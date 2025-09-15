import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NextGenTechShowcase2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-bold mb-6">
            🚀 NEXT-GEN TECH 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Showcase
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience the future today with our cutting-edge innovations in AI, quantum computing, 
            neural interfaces, and autonomous systems that are reshaping entire industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🎯 Book Demo
            </button>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
              📊 View ROI Calculator
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
              📖 Download Whitepaper
            </button>
          </div>
        </div>

        {/* Featured Technologies */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Featured Technologies</h2>
            <p className="text-xl text-gray-600">Breakthrough innovations that are transforming industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Neural Interface AI</h3>
              <p className="text-gray-600 mb-6">
                Direct brain-computer interfaces enabling thought-controlled applications, 
                cognitive enhancement, and seamless human-AI collaboration.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Market Size</span>
                  <span className="font-semibold">$15.2B by 2027</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">ROI Timeline</span>
                  <span className="font-semibold">6-12 months</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Computing Suite</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary quantum algorithms for optimization, cryptography, 
                and drug discovery with exponential speed improvements.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Processing Power</span>
                  <span className="font-semibold">1Mx faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Security Level</span>
                  <span className="font-semibold">Quantum-proof</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous AI Agents</h3>
              <p className="text-gray-600 mb-6">
                Self-learning AI systems that handle complex business processes, 
                make decisions, and adapt to changing environments autonomously.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Efficiency Gain</span>
                  <span className="font-semibold">+400%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Cost Reduction</span>
                  <span className="font-semibold">-60%</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Meet Our Agents →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">Spatial Computing</h3>
              <p className="text-gray-600 mb-6">
                Immersive 3D environments where physical and digital worlds merge, 
                enabling new forms of collaboration and interaction.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Immersion Level</span>
                  <span className="font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Adoption Rate</span>
                  <span className="font-semibold">+250% YoY</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter Spatial World →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold mb-4">Bio-Digital Fusion</h3>
              <p className="text-gray-600 mb-6">
                Integration of biological systems with digital technology for 
                personalized medicine, bio-monitoring, and enhanced human capabilities.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Accuracy</span>
                  <span className="font-semibold">99.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Response Time</span>
                  <span className="font-semibold">Real-time</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Discover Fusion →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Space Tech Solutions</h3>
              <p className="text-gray-600 mb-6">
                Advanced space technology applications including satellite networks, 
                space manufacturing, and interplanetary communication systems.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Coverage</span>
                  <span className="font-semibold">Global</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Latency</span>
                  <span className="font-semibold">< 50ms</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Reach for Stars →
              </button>
            </div>
          </div>
        </section>

        {/* Innovation Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📅 Innovation Timeline</h2>
            <p className="text-xl text-gray-600">Our roadmap to the future</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q1 2025</div>
                    <h3 className="text-xl font-bold mb-2">Neural Interface Beta</h3>
                    <p className="text-gray-600">Launch of first-generation neural interface prototypes</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q2 2025</div>
                    <h3 className="text-xl font-bold mb-2">Quantum Breakthrough</h3>
                    <p className="text-gray-600">Achieve quantum advantage in optimization problems</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q3 2025</div>
                    <h3 className="text-xl font-bold mb-2">Autonomous AI Network</h3>
                    <p className="text-gray-600">Deploy self-managing AI agent ecosystem</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q4 2025</div>
                    <h3 className="text-xl font-bold mb-2">Spatial Computing Platform</h3>
                    <p className="text-gray-600">Launch immersive collaboration environments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">📊 Proven Results</h2>
              <p className="text-xl opacity-90">Real impact from our next-gen technologies</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">$2.4B</div>
                <div className="text-lg opacity-90">Cost Savings</div>
                <div className="text-sm opacity-75">Across all deployments</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">98.7%</div>
                <div className="text-lg opacity-90">Success Rate</div>
                <div className="text-sm opacity-75">Project completion</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-lg opacity-90">Enterprise Clients</div>
                <div className="text-sm opacity-75">Fortune 500 companies</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-lg opacity-90">Support</div>
                <div className="text-sm opacity-75">Global coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the technological revolution. Our next-generation solutions are ready to 
              catapult your business into the future. Get started today with a personalized consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🚀 Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                📞 Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                💬 Chat with Expert
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NextGenTechShowcase2025;