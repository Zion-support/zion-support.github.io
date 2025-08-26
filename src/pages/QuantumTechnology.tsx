import React from 'react';
import { Link } from 'react-router-dom';

const QuantumTechnology: React.FC = () => {
  const quantumServices = [
    {
      title: "Quantum Computing Solutions",
      description: "Advanced quantum computing applications for complex problem-solving and optimization.",
      applications: ["Financial Modeling", "Drug Discovery", "Logistics Optimization", "Cryptography"]
    },
    {
      title: "Quantum Neural Networks",
      description: "Hybrid quantum-classical neural networks for enhanced machine learning capabilities.",
      applications: ["Pattern Recognition", "Optimization Problems", "Quantum Machine Learning", "AI Enhancement"]
    },
    {
      title: "Quantum Cryptography",
      description: "Quantum-safe cryptographic solutions for future-proof security infrastructure.",
      applications: ["Secure Communications", "Key Distribution", "Post-Quantum Security", "Network Protection"]
    },
    {
      title: "Quantum Research & Development",
      description: "Cutting-edge research in quantum algorithms and quantum information science.",
      applications: ["Algorithm Development", "Quantum Simulation", "Research Partnerships", "Technology Transfer"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quantum
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future with quantum computing solutions that solve previously 
              intractable problems and unlock new possibilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {quantumServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Applications</h4>
                  <ul className="space-y-1">
                    {service.applications.map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Explore Quantum Possibilities</h3>
              <p className="text-gray-300 mb-6">
                Ready to harness the power of quantum technology? Let's discuss how quantum 
                solutions can transform your business operations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Discuss Quantum Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumTechnology;