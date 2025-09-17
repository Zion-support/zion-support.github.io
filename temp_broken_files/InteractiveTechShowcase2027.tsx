import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techCategories = [
    {
      id: 'ai-revolution',
      title: 'Next-Gen AI Revolution 2027',
      description: 'Conscious AI systems with quantum-enhanced processing',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      link: '/pages/NextGenAIRevolution2027',
      features: [
        'Emotional Intelligence',
        'Creative Problem Solving', 
        'Self-Directed Learning',
        'Autonomous Decision Making'
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution 2027',
      description: '1000+ qubit quantum computers achieving true supremacy',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      link: '/pages/QuantumComputingRevolution2027',
      features: [
        'Quantum Supremacy',
        'Parallel Processing',
        'Cryptographic Security',
        'Molecular Simulation'
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution 2027',
      description: 'Direct brain-computer communication and thought control',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      link: '/pages/NeuralInterfaceRevolution2027'
    },
    {
      id: 0,
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "AI that thinks, feels, and creates with human-level consciousness",
      features: [
        '3D Visualization',
        'Gesture Control',
        'Thought Interface',
        'Real-time Rendering'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % techCategories.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [techCategories.length]);

  const handleTabClick = (index: number) => {
    if (index !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE 2027
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Interactive Technology Showcase 2027
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {techCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleTabClick(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${techCategories[activeTab].bgColor} backdrop-blur-sm rounded-xl p-12 border ${techCategories[activeTab].borderColor}/30`}>
            <div className="text-center">
              <div className="text-8xl mb-6 animate-bounce">{techCategories[activeTab].icon}</div>
              <h3 className="text-4xl font-bold mb-6 text-white">{techCategories[activeTab].title}</h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{techCategories[activeTab].description}</p>
              
              {/* Feature Highlights */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {techCategories[activeTab].features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-3xl mb-3">🚀</div>
                    <h4 className="text-lg font-bold mb-2">{feature}</h4>
                    <p className="text-sm opacity-80">Revolutionary capability</p>
                  </div>
                ))}
              </div>

              <a
                href={techCategories[activeTab].link}
                className={`inline-block bg-gradient-to-r ${techCategories[activeTab].color} text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl`}
              >
                Explore {techCategories[activeTab].title.split(' ')[0]} →
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Features Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30 mt-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">Interactive Features</h3>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              Experience our technologies through immersive interactive features and real-time demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🎮</div>
              <h4 className="text-xl font-semibold text-white mb-2">Interactive Demos</h4>
              <p className="text-purple-200 text-sm">Experience our technologies through hands-on interactive demonstrations</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🔮</div>
              <h4 className="text-xl font-semibold text-white mb-2">Virtual Reality</h4>
              <p className="text-purple-200 text-sm">Step into virtual environments to explore quantum realities and AI consciousness</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🧠</div>
              <h4 className="text-xl font-semibold text-white mb-2">AI Conversations</h4>
              <p className="text-purple-200 text-sm">Chat with our conscious AI systems and experience true artificial intelligence</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">⚡</div>
              <h4 className="text-xl font-semibold text-white mb-2">Quantum Simulations</h4>
              <p className="text-purple-200 text-sm">Witness quantum phenomena and reality manipulation in real-time simulations</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Dive into our interactive technology showcase and experience the most revolutionary 
            technologies of 2027. The future is here, and it's interactive.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Interactive Experience →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl">
              Schedule Private Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;