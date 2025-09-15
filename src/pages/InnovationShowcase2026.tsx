import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const InnovationShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 animate-pulse">
            🌟 INNOVATION SHOWCASE 2026 • BREAKTHROUGH TECHNOLOGIES
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Innovation Showcase 2026
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover the most revolutionary innovations that are reshaping our world and creating 
            unprecedented opportunities for the future.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#innovations" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </a>
            <a href="#demo" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg">
              Watch Demo
            </a>
          </div>
        </div>

        {/* Revolutionary Innovations Grid */}
        <section id="innovations" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Revolutionary Innovations</h2>
            <p className="text-xl text-gray-600">Cutting-edge technologies that are changing the world</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Synthetic Intelligence */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-6xl mb-6 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Intelligence</h3>
              <p className="text-purple-100 mb-6 text-center">
                AI systems with synthetic consciousness that can think, learn, and create independently.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-purple-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Autonomous reasoning
                </div>
                <div className="flex items-center text-sm text-purple-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Creative synthesis
                </div>
                <div className="flex items-center text-sm text-purple-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Collective intelligence
                </div>
              </div>
              <a href="/pages/SyntheticIntelligence2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
                Explore Synthetic AI →
              </a>
            </div>

            {/* Quantum-Neural Fusion */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-6xl mb-6 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum-Neural Fusion</h3>
              <p className="text-cyan-100 mb-6 text-center">
                The convergence of quantum computing and neural networks for unprecedented processing power.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-cyan-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Quantum neural networks
                </div>
                <div className="flex items-center text-sm text-cyan-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Exponential learning
                </div>
                <div className="flex items-center text-sm text-cyan-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Quantum supremacy
                </div>
              </div>
              <a href="/pages/QuantumNeuralFusion2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
                Experience Fusion →
              </a>
            </div>

            {/* Neural Interface Revolution */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-6xl mb-6 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Revolution</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Direct brain-computer interfaces that enable seamless mind-machine communication.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-emerald-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Non-invasive BCI
                </div>
                <div className="flex items-center text-sm text-emerald-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Thought control
                </div>
                <div className="flex items-center text-sm text-emerald-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Neural feedback
                </div>
              </div>
              <a href="/pages/NeuralInterfaceRevolution2026" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
                Connect Mind & Machine →
              </a>
            </div>

            {/* Advanced Quantum Computing */}
            <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-6xl mb-6 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Advanced Quantum Computing</h3>
              <p className="text-violet-100 mb-6 text-center">
                Next-generation quantum processors with 1000+ logical qubits and quantum supremacy.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-violet-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  1000+ logical qubits
                </div>
                <div className="flex items-center text-sm text-violet-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Quantum supremacy
                </div>
                <div className="flex items-center text-sm text-violet-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Molecular simulation
                </div>
              </div>
              <a href="/pages/AdvancedQuantumComputing2026" className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center">
                Go Quantum →
              </a>
            </div>

            {/* Next-Gen AI Revolution */}
            <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-6xl mb-6 text-center">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Next-Gen AI Revolution</h3>
              <p className="text-rose-100 mb-6 text-center">
                Revolutionary AI systems that are redefining what's possible in artificial intelligence.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-rose-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Autonomous agents
                </div>
                <div className="flex items-center text-sm text-rose-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Self-evolving systems
                </div>
                <div className="flex items-center text-sm text-rose-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Creative generation
                </div>
              </div>
              <a href="/pages/NextGenAIRevolution2026" className="block w-full bg-white text-rose-600 py-3 rounded-lg hover:bg-rose-50 transition-colors font-semibold text-center">
                Experience AI Revolution →
              </a>
            </div>

            {/* Revolutionary Tech Blog */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-6xl mb-6 text-center">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary Tech Blog</h3>
              <p className="text-amber-100 mb-6 text-center">
                In-depth insights and analysis of the latest technological breakthroughs and trends.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-amber-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Expert analysis
                </div>
                <div className="flex items-center text-sm text-amber-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Trend insights
                </div>
                <div className="flex items-center text-sm text-amber-200">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Future predictions
                </div>
              </div>
              <a href="/pages/RevolutionaryTechBlog2026" className="block w-full bg-white text-amber-600 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold text-center">
                Read Tech Blog →
              </a>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">🎮 Interactive Innovation Demo</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Experience our innovations in action with interactive demonstrations and real-time simulations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
                <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered Demo</h3>
                <p className="text-blue-100 mb-6 text-center">
                  Watch our synthetic intelligence systems in action, making autonomous decisions and learning in real-time.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Processing Speed</span>
                      <span className="text-sm font-bold text-green-400">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '99.9%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Learning Accuracy</span>
                      <span className="text-sm font-bold text-blue-400">98.5%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '98.5%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Autonomous Decisions</span>
                      <span className="text-sm font-bold text-purple-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center mt-6">
                  Try Interactive Demo →
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
                <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Demo</h3>
                <p className="text-green-100 mb-6 text-center">
                  Experience direct brain-computer interaction with our neural interface technology.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Signal Strength</span>
                      <span className="text-sm font-bold text-green-400">95.2%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '95.2%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Response Time</span>
                      <span className="text-sm font-bold text-teal-400">12ms</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Accuracy Rate</span>
                      <span className="text-sm font-bold text-emerald-400">97.8%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full" style={{width: '97.8%'}}></div>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="block w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center mt-6">
                  Experience Neural Interface →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Statistics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Innovation Impact</h2>
            <p className="text-xl text-gray-600">The measurable impact of our revolutionary innovations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg text-gray-600 mb-2">Innovations Deployed</div>
              <div className="text-sm text-gray-500">Across 50+ industries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">$2.5B</div>
              <div className="text-lg text-gray-600 mb-2">Value Created</div>
              <div className="text-sm text-gray-500">For our clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-lg text-gray-600 mb-2">Success Rate</div>
              <div className="text-sm text-gray-500">Project delivery</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-lg text-gray-600 mb-2">Innovation Support</div>
              <div className="text-sm text-gray-500">Global availability</div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🗺️ Future Innovation Roadmap</h2>
            <p className="text-xl text-gray-600">What's coming next in our innovation journey</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">Q1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Q1 2026</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Advanced Neural Interfaces</li>
                  <li>• Quantum-Neural Integration</li>
                  <li>• Synthetic AI Agents</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">Q2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Q2 2026</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Quantum Supremacy Platform</li>
                  <li>• Autonomous AI Systems</li>
                  <li>• Edge Computing Revolution</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">Q3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Q3 2026</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mind-Machine Fusion</li>
                  <li>• Quantum AI Integration</li>
                  <li>• Synthetic Consciousness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future with revolutionary innovations that are changing the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Start Your Innovation Journey
            </a>
            <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-lg">
              Explore More Innovations
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InnovationShowcase2026;