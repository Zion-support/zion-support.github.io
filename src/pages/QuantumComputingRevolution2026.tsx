import React from 'react';

const QuantumComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold mb-4">
            ⚛️ QUANTUM COMPUTING REVOLUTION 2026
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Quantum Leap Forward
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Experience the power of quantum computing and its potential to solve problems that are impossible for classical computers.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Supremacy</h3>
            <p className="text-gray-600">
              Achieve computational advantages that are exponentially faster than classical computers for specific problems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Algorithms</h3>
            <p className="text-gray-600">
              Leverage specialized algorithms designed to harness the unique properties of quantum mechanics.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🔐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Security</h3>
            <p className="text-gray-600">
              Implement quantum-resistant cryptography and quantum key distribution for ultimate security.
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quantum Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cryptography</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Quantum key distribution (QKD)</li>
                <li>• Post-quantum cryptography</li>
                <li>• Secure communication protocols</li>
                <li>• Quantum random number generation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Portfolio optimization</li>
                <li>• Supply chain management</li>
                <li>• Traffic routing optimization</li>
                <li>• Resource allocation problems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Simulation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Molecular and chemical simulation</li>
                <li>• Material science research</li>
                <li>• Drug discovery</li>
                <li>• Climate modeling</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Quantum machine learning algorithms</li>
                <li>• Quantum neural networks</li>
                <li>• Pattern recognition</li>
                <li>• Data classification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Qubits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Fidelity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10ms</div>
              <div className="text-lg opacity-90">Coherence Time</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Harness Quantum Power?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the quantum revolution and unlock unprecedented computational capabilities for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Quantum Solutions
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2026;