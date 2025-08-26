import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Zap, Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Neural Network Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining quantum computing with advanced AI for unprecedented computational power and intelligence." />
        <meta name="keywords" content="quantum neural network, quantum AI, quantum computing, neural networks, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of AI with our revolutionary quantum neural network platform. 
              Combining quantum computing power with advanced neural architectures for unprecedented 
              computational intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform combines cutting-edge quantum computing with advanced neural network architectures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                  <Cpu className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Processing</h3>
                <p className="text-gray-300">
                  Leverage quantum superposition and entanglement for exponential computational speed improvements
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                  <Brain className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Neural Architecture</h3>
                <p className="text-gray-300">
                  Advanced neural network designs optimized for quantum computing environments
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Learning</h3>
                <p className="text-gray-300">
                  Continuous adaptation and learning from quantum data streams in real-time
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Security</h3>
                <p className="text-gray-300">
                  Unbreakable encryption using quantum key distribution and quantum-resistant algorithms
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Performance</h3>
                <p className="text-gray-300">
                  Linear scaling with quantum bits, enabling massive parallel processing capabilities
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-indigo-500/20 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaborative AI</h3>
                <p className="text-gray-300">
                  Multi-user quantum AI development with real-time collaboration features
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformative Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how quantum neural networks are revolutionizing industries
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Drug Discovery</h3>
                    <p className="text-gray-300">
                      Accelerate pharmaceutical research with quantum-powered molecular modeling and simulation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Financial Modeling</h3>
                    <p className="text-gray-300">
                      Complex risk assessment and portfolio optimization with quantum precision
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Climate Prediction</h3>
                    <p className="text-gray-300">
                      Advanced weather forecasting and climate modeling with quantum accuracy
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Autonomous Systems</h3>
                    <p className="text-gray-300">
                      Next-generation robotics and autonomous vehicles with quantum decision-making
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
                    <p className="text-gray-300">
                      Unbreakable encryption and threat detection using quantum algorithms
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI Research</h3>
                    <p className="text-gray-300">
                      Breakthrough discoveries in artificial general intelligence and consciousness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock unprecedented AI capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
                Get Started Today
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumNeuralNetworkPlatform;