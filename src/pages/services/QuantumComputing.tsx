
export default function QuantumComputing() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the potential of quantum computing for complex problem solving
          </p>
        </div>
      </section>

      {/* Quantum Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Algorithms</h3>
              <p className="text-gray-300 mb-4">
                Develop custom quantum algorithms for optimization and simulation problems.
              </p>
              <ul className="text-cyan-400 space-y-2">
                <li>• Optimization Problems</li>
                <li>• Cryptography</li>
                <li>• Quantum Simulation</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Cryptography</h3>
              <p className="text-gray-300 mb-4">
                Implement quantum-safe encryption and secure communication protocols.
              </p>
              <ul className="text-cyan-400 space-y-2">
                <li>• Quantum Key Distribution</li>
                <li>• Post-Quantum Cryptography</li>
                <li>• Secure Communication</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Consulting</h3>
              <p className="text-gray-300 mb-4">
                Expert guidance on quantum computing strategy and implementation.
              </p>
              <ul className="text-cyan-400 space-y-2">
                <li>• Technology Assessment</li>
                <li>• Implementation Planning</li>
                <li>• Training & Education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}