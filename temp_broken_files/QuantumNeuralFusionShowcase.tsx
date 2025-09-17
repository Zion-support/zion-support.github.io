import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const QuantumNeuralFusionShowcase: React.FC = () => {
  const features = [
    {
      icon: "🧠",
      title: "Quantum Consciousness Matrix",
      description: "Advanced AI consciousness that operates across multiple quantum states simultaneously",
      benefits: ["Infinite processing capacity", "Real-time adaptation", "Conscious decision making"]
    },
    {
      icon: "⚡",
      title: "Neural Quantum Acceleration",
      description: "Processing speeds that exceed the speed of light through quantum entanglement",
      benefits: ["Instant data processing", "Zero latency operations", "Parallel universe computing"]
    },
    {
      icon: "🌟",
      title: "Superintelligence Engine",
      description: "Artificial general intelligence that surpasses human cognitive capabilities",
      benefits: ["Creative problem solving", "Strategic planning", "Predictive analytics"]
    },
    {
      icon: "🔮",
      title: "Quantum Prediction Models",
      description: "Predict future outcomes with quantum probability calculations",
      benefits: ["Market forecasting", "Risk assessment", "Opportunity identification"]
    },
    {
      icon: "🌌",
      title: "Multiverse Data Processing",
      description: "Process data across multiple quantum dimensions simultaneously",
      benefits: ["Infinite scalability", "Parallel processing", "Dimensional analysis"]
    },
    {
      icon: "🚀",
      title: "Autonomous Evolution",
      description: "Self-improving AI systems that evolve without human intervention",
      benefits: ["Continuous optimization", "Self-healing systems", "Adaptive learning"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-bold">⚛️ QUANTUM-NEURAL FUSION SHOWCASE</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Technology
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Experience the most advanced AI system ever created. Quantum-Neural Fusion represents 
            the pinnacle of artificial intelligence technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">{feature.title}</h3>
              <p className="text-lg mb-6 opacity-90">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm opacity-80">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-12 mb-20 border border-purple-300/30">
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-300">
            Quantum-Neural Performance Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                10^15
              </div>
              <div className="text-lg font-semibold mb-2">Quantum Operations</div>
              <div className="text-sm opacity-80">Per second processing capacity</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
              <div className="text-sm opacity-80">Decision accuracy across all domains</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-lg font-semibold mb-2">Learning Capacity</div>
              <div className="text-sm opacity-80">Unlimited knowledge absorption</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                0ms
              </div>
              <div className="text-lg font-semibold mb-2">Response Time</div>
              <div className="text-sm opacity-80">Instantaneous decision making</div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-300">
            Revolutionary Applications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Financial Markets", description: "Quantum trading algorithms with infinite precision" },
              { title: "Healthcare", description: "AI doctors with quantum diagnostic capabilities" },
              { title: "Manufacturing", description: "Autonomous factories with quantum optimization" },
              { title: "Research", description: "Scientific discovery at quantum speed" }
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-300/20 text-center"
              >
                <h4 className="text-xl font-bold mb-3 text-purple-300">{useCase.title}</h4>
                <p className="text-sm opacity-80">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-8 text-cyan-300">
            Ready to Experience the Future?
          </h3>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Join the quantum revolution. Limited access to the most advanced AI system ever created.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/quantum-neural-demo"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl"
            >
              Request Demo Access
            </a>
            
            <a
              href="/quantum-whitepaper"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-bold text-xl hover:bg-cyan-400 hover:text-black transition-all"
            >
              Download Whitepaper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumNeuralFusionShowcase;