import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Atom, Brain, Shield, Target, Globe, TrendingUp } from 'lucide-react';

const QuantumComputingRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-8">
              <Atom className="w-5 h-5 mr-2 text-indigo-400" />
              <span className="text-sm font-medium">Quantum Computing Revolution 2027</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Quantum Leap Forward
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the revolutionary power of quantum computing that's solving 
              previously impossible problems and unlocking new frontiers in science, 
              medicine, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-innovation-hub-2026" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum AI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/ai-2027-revolutionary-breakthrough" 
                className="inline-flex items-center px-8 py-4 border border-indigo-400 rounded-lg font-semibold hover:bg-indigo-600/20 transition-all duration-300"
              >
                AI Breakthroughs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Capabilities Section */}
      <div className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve complex problems 
              that would take classical computers millions of years to complete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Capability 1 */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Supremacy</h3>
              <p className="text-gray-300 mb-6">
                Achieve computational advantages over classical computers for 
                specific problems, enabling breakthroughs in cryptography and optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• 10^18 operations per second</li>
                <li>• Exponential speedup</li>
                <li>• Parallel processing</li>
              </ul>
            </div>

            {/* Capability 2 */}
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary AI algorithms that leverage quantum properties 
                for faster training and more accurate predictions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Quantum neural networks</li>
                <li>• Quantum optimization</li>
                <li>• Pattern recognition</li>
              </ul>
            </div>

            {/* Capability 3 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Cryptography</h3>
              <p className="text-gray-300 mb-6">
                Unbreakable encryption methods that use quantum principles 
                to ensure absolute security for sensitive data.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Quantum key distribution</li>
                <li>• Unhackable communication</li>
                <li>• Future-proof security</li>
              </ul>
            </div>

            {/* Capability 4 */}
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Simulation</h3>
              <p className="text-gray-300 mb-6">
                Simulate complex quantum systems to discover new materials, 
                drugs, and understand fundamental physics.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Drug discovery</li>
                <li>• Material science</li>
                <li>• Climate modeling</li>
              </ul>
            </div>

            {/* Capability 5 */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Optimization</h3>
              <p className="text-gray-300 mb-6">
                Solve complex optimization problems in logistics, finance, 
                and resource allocation with quantum algorithms.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Supply chain optimization</li>
                <li>• Portfolio management</li>
                <li>• Route planning</li>
              </ul>
            </div>

            {/* Capability 6 */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Internet</h3>
              <p className="text-gray-300 mb-6">
                Ultra-secure quantum communication networks that enable 
                instant, unhackable data transmission across the globe.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Quantum entanglement</li>
                <li>• Instant communication</li>
                <li>• Global quantum network</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-24 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantum computing is already transforming industries and solving 
              real-world problems that were previously impossible to tackle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Healthcare */}
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-3xl font-bold mb-6 text-blue-400">Healthcare & Medicine</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Drug Discovery</h4>
                    <p className="text-gray-300">Accelerating the discovery of new medicines by simulating molecular interactions at quantum scale.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Personalized Medicine</h4>
                    <p className="text-gray-300">Analyzing individual genetic profiles to create customized treatment plans.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Protein Folding</h4>
                    <p className="text-gray-300">Understanding protein structures to develop treatments for diseases like Alzheimer's and cancer.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Finance */}
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold mb-6 text-green-400">Finance & Banking</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Risk Analysis</h4>
                    <p className="text-gray-300">Advanced portfolio optimization and risk assessment using quantum algorithms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Fraud Detection</h4>
                    <p className="text-gray-300">Real-time detection of fraudulent transactions using quantum machine learning.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Trading Algorithms</h4>
                    <p className="text-gray-300">High-frequency trading strategies optimized with quantum computing power.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Climate */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-3xl font-bold mb-6 text-purple-400">Climate & Environment</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Climate Modeling</h4>
                    <p className="text-gray-300">Accurate climate predictions to help combat global warming and environmental challenges.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Carbon Capture</h4>
                    <p className="text-gray-300">Designing efficient carbon capture materials to reduce greenhouse gas emissions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Renewable Energy</h4>
                    <p className="text-gray-300">Optimizing renewable energy systems for maximum efficiency and storage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-3xl font-bold mb-6 text-orange-400">Technology & Innovation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">AI Enhancement</h4>
                    <p className="text-gray-300">Quantum-powered AI systems with unprecedented processing capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Cybersecurity</h4>
                    <p className="text-gray-300">Quantum-resistant encryption and ultra-secure communication protocols.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Space Exploration</h4>
                    <p className="text-gray-300">Advanced navigation and communication systems for deep space missions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary performance improvements that are reshaping 
              what's possible in computing and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">10^18</div>
              <div className="text-lg text-gray-300">Operations per Second</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-lg text-gray-300">Faster than Classical</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-lg text-gray-300">Scalability Potential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-r from-indigo-900/40 to-purple-900/40">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum computing revolution and unlock unprecedented 
            computational power for your organization's most challenging problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Quantum Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/ai-innovation-hub-2026" 
              className="inline-flex items-center px-8 py-4 border border-indigo-400 rounded-lg font-semibold hover:bg-indigo-600/20 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2027;