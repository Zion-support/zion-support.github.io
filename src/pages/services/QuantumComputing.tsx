import React from 'react';

const QuantumComputing: React.FC = () => {
  const applications = [
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems that are intractable for classical computers.",
      useCases: ["Supply Chain Optimization", "Financial Portfolio Management", "Logistics Planning"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum algorithms to enhance machine learning capabilities.",
      useCases: ["Pattern Recognition", "Data Classification", "Feature Selection"]
    },
    {
      title: "Quantum Cryptography",
      description: "Ultra-secure communication using quantum key distribution.",
      useCases: ["Secure Communications", "Data Encryption", "Identity Verification"]
    },
    {
      title: "Quantum Simulation",
      description: "Simulate complex quantum systems for research and development.",
      useCases: ["Material Science", "Drug Discovery", "Climate Modeling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quantum Computing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the next frontier of computing with quantum technology solutions
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Quantum Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {app.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        <span className="text-gray-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Quantum Computing Services</h2>
          <p className="text-gray-300 mb-6">
            Our quantum computing experts can help you explore and implement quantum solutions 
            for your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QuantumComputing };
export default QuantumComputing;