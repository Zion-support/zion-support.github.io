import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-bold mb-6">
            ⚛️ QUANTUM REVOLUTION 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Quantum Computing Revolution
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience exponential computational power with our quantum computing solutions. 
            Solve impossible problems, break new frontiers, and unlock the future of computation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Quantum Demo
            </button>
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold">
              📊 Performance Calculator
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
              📖 Quantum Whitepaper
            </button>
          </div>
        </div>

        {/* Quantum Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">⚛️ Quantum Capabilities</h2>
            <p className="text-xl text-gray-600">Revolutionary computational power at your fingertips</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Drug Discovery</h3>
              <p className="text-gray-600 mb-6">
                Accelerate pharmaceutical research with quantum algorithms that simulate molecular interactions 
                at unprecedented speed and accuracy.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Speed Increase</span>
                  <span className="font-semibold">10,000x faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Accuracy</span>
                  <span className="font-semibold">99.9%</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Drug Discovery →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable encryption using quantum key distribution and post-quantum cryptographic algorithms 
                for ultimate security.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Security Level</span>
                  <span className="font-semibold">Unbreakable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Key Distribution</span>
                  <span className="font-semibold">Quantum-safe</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Secure with Quantum →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Optimization Problems</h3>
              <p className="text-gray-600 mb-6">
                Solve complex optimization challenges in logistics, finance, and manufacturing 
                with quantum annealing and variational algorithms.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Problem Size</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Solution Quality</span>
                  <span className="font-semibold">Optimal</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Optimize with Quantum →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🧮</div>
              <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Quantum machine learning algorithms that process vast datasets exponentially faster 
                than classical computers.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Processing Speed</span>
                  <span className="font-semibold">1Mx faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Pattern Recognition</span>
                  <span className="font-semibold">Quantum-enhanced</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn with Quantum →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Networking</h3>
              <p className="text-gray-600 mb-6">
                Ultra-secure quantum communication networks enabling instant, unhackable 
                data transmission across global distances.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Latency</span>
                  <span className="font-semibold">Instantaneous</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Security</span>
                  <span className="font-semibold">Quantum-proof</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Connect Quantum →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Materials Science</h3>
              <p className="text-gray-600 mb-6">
                Discover new materials with quantum simulations that model atomic behavior 
                with perfect accuracy for breakthrough innovations.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Simulation Accuracy</span>
                  <span className="font-semibold">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Discovery Speed</span>
                  <span className="font-semibold">50x faster</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Discover Materials →
              </button>
            </div>
          </div>
        </section>

        {/* Quantum Advantage Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📈 Quantum Advantage Timeline</h2>
            <p className="text-xl text-gray-600">Our roadmap to quantum supremacy</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q1 2025</div>
                    <h3 className="text-xl font-bold mb-2">50-Qubit Processor</h3>
                    <p className="text-gray-600">Launch of our first commercial quantum processor</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q2 2025</div>
                    <h3 className="text-xl font-bold mb-2">100-Qubit Breakthrough</h3>
                    <p className="text-gray-600">Achieve quantum advantage in optimization problems</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q3 2025</div>
                    <h3 className="text-xl font-bold mb-2">Error-Corrected Quantum</h3>
                    <p className="text-gray-600">Launch fault-tolerant quantum computing</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q4 2025</div>
                    <h3 className="text-xl font-bold mb-2">Quantum Internet</h3>
                    <p className="text-gray-600">Deploy global quantum communication network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Performance Metrics */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-indigo-900 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">📊 Quantum Performance Metrics</h2>
              <p className="text-xl opacity-90">Proven quantum advantage across industries</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-400 mb-2">10,000x</div>
                <div className="text-lg opacity-90">Speed Increase</div>
                <div className="text-sm opacity-75">vs Classical Computing</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-lg opacity-90">Accuracy Rate</div>
                <div className="text-sm opacity-75">Quantum Simulations</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-lg opacity-90">Quantum Algorithms</div>
                <div className="text-sm opacity-75">Optimized Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-lg opacity-90">Quantum Access</div>
                <div className="text-sm opacity-75">Cloud Computing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏭 Quantum Industry Applications</h2>
            <p className="text-xl text-gray-600">Transforming industries with quantum computing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm mb-4">Risk modeling, fraud detection, algorithmic trading</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm mb-4">Drug discovery, protein folding, personalized medicine</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Aerospace</h3>
              <p className="text-gray-600 text-sm mb-4">Flight optimization, material design, navigation</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Energy</h3>
              <p className="text-gray-600 text-sm mb-4">Grid optimization, renewable energy, battery design</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-gray-600 text-sm mb-4">Climate modeling, particle physics, cosmology</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm mb-4">Supply chain optimization, quality control, logistics</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Enter the Quantum Era?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the quantum revolution and unlock computational power that was previously impossible. 
              Get started with our quantum computing platform and experience the future today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                ⚛️ Start Quantum Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                📞 Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                💬 Talk to Quantum Expert
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuantumComputingRevolution2025;