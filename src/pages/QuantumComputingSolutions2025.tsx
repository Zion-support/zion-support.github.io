import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const QuantumComputingSolutions2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-bold mb-6">
            ⚛️ QUANTUM COMPUTING SOLUTIONS 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Unlock the Power of
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Quantum Computing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience the future of computing with our revolutionary quantum solutions. Solve complex problems exponentially faster and unlock new possibilities in cryptography, optimization, and AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg">
              🚀 Explore Quantum Solutions
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg">
              📊 Quantum Demo
            </button>
          </div>
        </div>

        {/* Quantum Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌌 Quantum Computing Applications</h2>
            <p className="text-xl text-gray-600">Revolutionary solutions powered by quantum mechanics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Application 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100">
              <div className="text-5xl mb-6">🔐</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable encryption using quantum key distribution and quantum-resistant algorithms for ultimate security.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Quantum key distribution</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Post-quantum cryptography</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Quantum random number generation</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Secure with Quantum →
              </button>
            </div>

            {/* Application 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
              <div className="text-5xl mb-6">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quantum Drug Discovery</h3>
              <p className="text-gray-600 mb-6">
                Accelerate pharmaceutical research with quantum simulations that model molecular interactions at unprecedented speeds.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Molecular simulation</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Protein folding analysis</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Drug interaction modeling</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Discover Drugs →
              </button>
            </div>

            {/* Application 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quantum Optimization</h3>
              <p className="text-gray-600 mb-6">
                Solve complex optimization problems in logistics, finance, and operations with quantum algorithms.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Portfolio optimization</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Route optimization</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Optimize Operations →
              </button>
            </div>

            {/* Application 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quantum Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Revolutionize AI with quantum machine learning algorithms that process data exponentially faster.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Quantum neural networks</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Quantum feature mapping</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Quantum clustering</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn with Quantum →
              </button>
            </div>

            {/* Application 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quantum Financial Modeling</h3>
              <p className="text-gray-600 mb-6">
                Advanced financial risk assessment and trading algorithms powered by quantum computing.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Risk analysis</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Monte Carlo simulation</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Algorithmic trading</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Model Finances →
              </button>
            </div>

            {/* Application 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quantum Climate Modeling</h3>
              <p className="text-gray-600 mb-6">
                Advanced climate simulations and environmental modeling using quantum computational power.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Weather prediction</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Climate change modeling</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Environmental impact analysis</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Model Climate →
              </button>
            </div>
          </div>
        </section>

        {/* Quantum Advantages */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">⚡ Quantum Computing Advantages</h2>
            <p className="text-xl text-gray-600">Why quantum computing is the future of problem-solving</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Exponential Speed</h3>
                  <p className="text-gray-600">
                    Quantum computers can solve certain problems exponentially faster than classical computers, reducing computation time from years to minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Parallel Processing</h3>
                  <p className="text-gray-600">
                    Quantum superposition allows quantum computers to process multiple solutions simultaneously, dramatically increasing computational power.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quantum Entanglement</h3>
                  <p className="text-gray-600">
                    Quantum entanglement enables instant correlation between quantum bits, allowing for unprecedented communication and computation capabilities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quantum Tunneling</h3>
                  <p className="text-gray-600">
                    Quantum tunneling allows quantum computers to explore solution spaces more efficiently, finding optimal solutions that classical computers might miss.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Unbreakable Security</h3>
                  <p className="text-gray-600">
                    Quantum cryptography provides theoretically unbreakable security, ensuring data protection against even the most advanced cyber threats.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Revolutionary Algorithms</h3>
                  <p className="text-gray-600">
                    Quantum algorithms like Shor's and Grover's provide breakthrough solutions to problems that are intractable for classical computers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Performance Metrics */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🚀 Quantum Performance Metrics</h2>
            <p className="text-xl opacity-90">Real performance gains achieved with quantum computing</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-indigo-400 mb-2">10^15</div>
              <div className="text-lg opacity-90">Speed Improvement</div>
              <div className="text-sm opacity-75 mt-2">For specific algorithms</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
              <div className="text-sm opacity-75 mt-2">Quantum error correction</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-400 mb-2">1000x</div>
              <div className="text-lg opacity-90">Energy Efficiency</div>
              <div className="text-sm opacity-75 mt-2">Compared to classical</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Security Level</div>
              <div className="text-sm opacity-75 mt-2">Quantum cryptography</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience Quantum Computing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unprecedented computational power. Get started with our quantum computing solutions and transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg">
              ⚛️ Start Quantum Journey
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
              📞 Quantum Consultation
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuantumComputingSolutions2025;