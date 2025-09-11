import React from 'react';
import { Link } from 'react-router-dom';
import { CubeIcon, CpuChipIcon, BoltIcon, GlobeAltIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
const QuantumTechnology = () => {
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <CubeIcon className="h-12 w-12 text-purple-400"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing to solve complex problems that are impossible for classical computers. 
              Experience the future of computation with Zion Tech Group's quantum solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg">
                Get Started
              </Link>
              <Link to="/quantum-services" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Quantum Computing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Quantum Computing?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Quantum computing leverages the principles of quantum mechanics to process information in ways that 
                classical computers cannot. By using quantum bits (qubits) that can exist in multiple states simultaneously, 
                quantum computers can solve complex problems exponentially faster.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Superposition - Qubits can be in multiple states at once</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Entanglement - Qubits can be correlated across vast distances</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Quantum interference - Enables precise control over computations</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">
              <div className="text-center">
                <CpuChipIcon className="h-24 w-24 text-purple-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold mb-2">Quantum Advantage</h3>
                <p className="text-gray-300">
                  Solve problems in minutes that would take classical computers thousands of years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Quantum Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4">
                <CubeIcon className="h-8 w-8 text-purple-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Neural Networks</h3>
              <p className="text-gray-300">
                Advanced quantum machine learning algorithms for pattern recognition and data analysis.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-blue-600/20 rounded-lg w-fit mb-4">
                <BoltIcon className="h-8 w-8 text-blue-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Edge Computing</h3>
              <p className="text-gray-300">
                Distributed quantum computing solutions for real-time processing at the edge.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-green-600/20 rounded-lg w-fit mb-4">
                <GlobeAltIcon className="h-8 w-8 text-green-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Scalable quantum computing resources accessible through cloud platforms.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-orange-600/20 rounded-lg w-fit mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-orange-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Financial Trading</h3>
              <p className="text-gray-300">
                High-frequency trading algorithms powered by quantum computing for market advantage.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-cyan-600/20 rounded-lg w-fit mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-cyan-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Cryptography</h3>
              <p className="text-gray-300">
                Unbreakable encryption systems based on quantum mechanical principles.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-pink-600/20 rounded-lg w-fit mb-4">
                <CpuChipIcon className="h-8 w-8 text-pink-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Optimization</h3>
              <p className="text-gray-300">
                Solve complex optimization problems in logistics, manufacturing, and supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Quantum Computing Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Scientific Research</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Drug Discovery</h4>
                    <p className="text-gray-300">Simulate molecular interactions for pharmaceutical development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Climate Modeling</h4>
                    <p className="text-gray-300">Complex climate simulations for environmental research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Material Science</h4>
                    <p className="text-gray-300">Design new materials with specific properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Business & Industry</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Financial Modeling</h4>
                    <p className="text-gray-300">Risk assessment and portfolio optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Supply Chain Optimization</h4>
                    <p className="text-gray-300">Complex logistics and routing problems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Machine Learning</h4>
                    <p className="text-gray-300">Enhanced AI algorithms and pattern recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Quantum Computing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Exponential Speed</h4>
                  <p className="text-gray-300">Solve problems in minutes that would take classical computers years.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Complex Problem Solving</h4>
                  <p className="text-gray-300">Handle problems that are impossible for classical computers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Future-Proof Technology</h4>
                  <p className="text-gray-300">Stay ahead of the curve with cutting-edge quantum solutions.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Cost Efficiency</h4>
                  <p className="text-gray-300">Reduce computational costs for complex problem solving.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Innovation Leadership</h4>
                  <p className="text-gray-300">Lead your industry with quantum-powered innovation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Competitive Advantage</h4>
                  <p className="text-gray-300">Gain significant advantages over competitors using classical computing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with the power of quantum computing. Contact Zion Tech Group today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg">
              Schedule a Consultation
            </Link>
            <Link to="/quantum-services" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>);
};
export default QuantumTechnology;
