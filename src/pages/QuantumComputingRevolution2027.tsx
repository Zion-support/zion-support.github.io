import React, { useState, useEffect } from 'react';

const QuantumComputingRevolution2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const quantumApplications = [
    {
      title: "Cryptography & Security",
      description: "Quantum-resistant encryption and secure communication systems",
      icon: "🔐",
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "Unbreakable encryption",
        "Secure key distribution",
        "Quantum key exchange",
        "Post-quantum cryptography"
      ]
    },
    {
      title: "Optimization Problems",
      description: "Solving complex optimization challenges across industries",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      benefits: [
        "Supply chain optimization",
        "Financial portfolio management",
        "Route optimization",
        "Resource allocation"
      ]
    },
    {
      title: "Drug Discovery",
      description: "Accelerating pharmaceutical research and development",
      icon: "💊",
      color: "from-green-500 to-teal-500",
      benefits: [
        "Molecular simulation",
        "Protein folding prediction",
        "Drug interaction analysis",
        "Personalized medicine"
      ]
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate simulation and environmental research",
      icon: "🌍",
      color: "from-orange-500 to-red-500",
      benefits: [
        "Weather prediction",
        "Climate change modeling",
        "Carbon capture optimization",
        "Renewable energy planning"
      ]
    }
  ];

  const quantumTechnologies = [
    {
      name: "Quantum Gates",
      description: "Fundamental building blocks of quantum circuits",
      complexity: "High"
    },
    {
      name: "Quantum Algorithms",
      description: "Specialized algorithms for quantum computers",
      complexity: "Very High"
    },
    {
      name: "Quantum Error Correction",
      description: "Maintaining quantum coherence and accuracy",
      complexity: "Extreme"
    },
    {
      name: "Quantum Networking",
      description: "Connecting quantum computers over distances",
      complexity: "Very High"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-slate-900 rounded-full text-sm font-bold mb-6">
            ⚛️ QUANTUM REVOLUTION 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quantum Computing Revolution
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Experience the power of quantum computing that's solving problems impossible for classical computers and revolutionizing entire industries.
          </p>
        </div>

        {/* Quantum Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {quantumApplications.map((app, index) => (
            <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-purple-400/50">
              <div className={`w-20 h-20 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{app.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">{app.title}</h3>
              <p className="text-slate-300 mb-6">{app.description}</p>
              <div className="space-y-2">
                {app.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-slate-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Technologies Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-slate-700/50">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Quantum Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumTechnologies.map((tech, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">{tech.name}</h3>
                <p className="text-slate-300 mb-4 text-sm">{tech.description}</p>
                <div className="inline-block px-3 py-1 bg-slate-600/50 rounded-full text-xs text-slate-300">
                  {tech.complexity} Complexity
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Advantage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">Quantum Advantage</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Exponential Speedup</h4>
                  <p className="text-slate-300">Solve problems in seconds that would take classical computers millennia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🔬</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Scientific Breakthroughs</h4>
                  <p className="text-slate-300">Enable discoveries in physics, chemistry, and materials science</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🌐</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Global Impact</h4>
                  <p className="text-slate-300">Transform industries from finance to healthcare to climate science</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">Performance Metrics</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">1000x</div>
                <div className="text-slate-300">Faster than Classical</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-slate-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-slate-300">Quantum Cloud Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Timeline */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-slate-700/50">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Quantum Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2025</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Quantum Supremacy</h3>
              <p className="text-slate-300">First practical quantum advantage demonstrated</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2026</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Commercial Launch</h3>
              <p className="text-slate-300">Quantum computers available for enterprise use</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2027</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Mass Adoption</h3>
              <p className="text-slate-300">Quantum computing becomes mainstream technology</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Be among the first to harness the power of quantum computing and transform your business with unprecedented computational capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Quantum Journey
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2027;