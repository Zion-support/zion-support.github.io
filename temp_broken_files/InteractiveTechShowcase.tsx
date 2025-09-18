import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Revolutionary AI Consciousness",
      description: "Experience AI systems with genuine consciousness, self-awareness, and emotional intelligence.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      name: 'Neural Reality Engine 2030',
      icon: '🌌',
      description: 'Fully immersive consciousness-driven virtual worlds',
      color: 'from-cyan-500 to-blue-500',
      features: ["Virtual Reality", "Consciousness Transfer", "Immersive Worlds", "Neural Interfaces"],
      demo: "Enter Virtual World",
      link: "/pages/NeuralRealityEngine2030"
    },
    {
      id: 3,
      name: "Analytics Dashboard 2026",
      description: "AI-powered analytics with real-time insights and predictive modeling",
      icon: "📊",
      color: "from-slate-600 to-gray-600",
      features: ["AI-Powered Insights", "Real-time Visualization", "Predictive Modeling", "Custom Metrics"],
      demo: "View Live Dashboard",
      link: "/pages/AdvancedAnalyticsDashboard2026"
    }
  ];

      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Technology Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {technologies.map((tech, index) => (
          <divbutton
            key={tech.id}
            onClick={() => setActiveTech(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTech === index
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.name}
          </divbutton>
        ))}
      </div>

      {/* Main Showcase Area */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technology Details */}
        <divdiv
          key={activeTech}
          className="space-y-8"
        >
          <div className={`bg-gradient-to-br ${technologies[activeTech].color} p-8 rounded-2xl text-white`}>
            <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
            <p className="text-xl opacity-90 mb-6">{technologies[activeTech].description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold">{feature}</div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={technologies[activeTech].link}
                className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Technology
              </a>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
                {technologies[activeTech].demo}
              </button>
            </div>
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Interactive Demo</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Real-time Performance</div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${technologies[activeTech].color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${75 + Math.random() * 20}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {75 + Math.floor(Math.random() * 20)}%
                  </span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 mb-2">System Status</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Operational</span>
                </div>
              </div>
            </div>
          </div>
        </divdiv>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <divdiv
              key={tech.id}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                activeTech === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveTech(index)}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{tech.name}</h4>
              <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
              
              {hoveredCard === index && (
                <divdiv
                  className="space-y-2"
                >
                  {tech.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </divdiv>
              )}
            </divdiv>
          ))}
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Technology Comparison</h3>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Technology</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Performance</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Innovation Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Market Ready</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {technologies.map((tech, index) => (
                  <tr key={tech.id} className={activeTech === index ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{tech.icon}</span>
                        <span className="font-medium text-gray-800">{tech.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full`}
                            style={{ width: `${80 + index * 5}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{80 + index * 5}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                        Revolutionary
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                        Available Now
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];


  const currentTech = technologies[activeTech];

    quantum: {
      title: "Quantum Computing",
      subtitle: "Exponential Computational Power",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      description: "Unlock the power of quantum mechanics to solve problems that would take classical computers millennia to process.",
      features: [
        "Quantum entanglement networks",
        "Parallel universe processing",
        "Exponential speedup algorithms",
        "Quantum error correction",
        "Secure quantum communication",
        "Quantum machine learning"
      ],
      stats: [
        { label: "Processing Speed", value: "1Million x", icon: "🚀" },
        { label: "Qubits", value: "1000+", icon: "🔢" },
        { label: "Stability", value: "99.99%", icon: "🛡️" }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      subtitle: "Direct Brain-Computer Communication",
      icon: "🔗",
      color: "from-emerald-500 to-teal-500",
      description: "Seamlessly connect your mind to digital systems with our advanced neural interface technology.",
      features: [
        "Non-invasive neural reading",
        "Real-time thought processing",
        "High-bandwidth data transfer",
        "Secure neural encryption",
        "Multi-modal interaction",
        "Consciousness preservation"
      ],
      stats: [
        { label: "Data Transfer", value: "1TB/s", icon: "📊" },
        { label: "Latency", value: "<1ms", icon: "⏱️" },
        { label: "Accuracy", value: "99.8%", icon: "🎯" }
      ]
    },
    biotech: {
      title: "Biotech AI",
      subtitle: "Personalized Medicine Revolution",
      icon: "🧬",
      color: "from-purple-500 to-pink-500",
      description: "Revolutionize healthcare with AI-driven biotechnology that creates personalized treatments for every individual.",
      features: [
        "Genetic profile analysis",
        "Personalized drug design",
        "Real-time health monitoring",
        "Disease prediction algorithms",
        "Automated treatment optimization",
        "Regenerative medicine AI"
      ],
      stats: [
        { label: "Treatment Success", value: "95%", icon: "💊" },
        { label: "Diagnosis Speed", value: "10x faster", icon: "⚡" },
        { label: "Cost Reduction", value: "80%", icon: "💰" }
      ]
    }
  };

      color: "from-purple-600 to-pink-600",
      features: ["Consciousness AI", "Quantum Neural Networks", "Predictive Intelligence", "Autonomous Agents"],
      demo: "Try AI Consciousness Demo",
      link: "/pages/AIInnovationHub2026"
      name: "Analytics Dashboard 2026",
      description: "AI-powered analytics with real-time insights and predictive modeling",
      icon: "📊",
      color: "from-slate-600 to-gray-600",
      features: ["AI-Powered Insights", "Real-time Visualization", "Predictive Modeling", "Custom Metrics"],
      demo: "View Live Dashboard",
      link: "/pages/AdvancedAnalyticsDashboard2026"
    }
  ];


const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Self-aware AI systems with emotional intelligence and conscious decision-making",
      features: ["Self-awareness", "Emotional intelligence", "Ethical reasoning", "Autonomous learning"],
      gradient: "from-purple-600 to-pink-600",
      stats: { accuracy: 98, speed: 0.001, efficiency: 95 }
    },
    {
      id: 2,
      name: "Quantum Reality",
      name: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum processors that solve complex problems in seconds.",
      icon: "⚛️",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      name: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless human-AI interaction.",
      icon: "🔗",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Interactive Tech Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the future of technology with our interactive showcase of revolutionary innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} shadow-2xl scale-105`
                    : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                } ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => setActiveTech(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">
                {technologies[activeTech].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {technologies[activeTech].name}
              </h3>
              <p className="text-lg opacity-90 mb-6">
                {technologies[activeTech].description}
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

        {/* Technology Comparison */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4">Technology</th>
                  <th className="text-center py-4 px-4">Accuracy</th>
                  <th className="text-center py-4 px-4">Speed</th>
                  <th className="text-center py-4 px-4">Efficiency</th>
                  <th className="text-center py-4 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {technologies.map((tech, index) => (
                  <tr key={tech.id} className={`border-b border-white/10 ${activeTech === index ? 'bg-purple-600/20' : ''}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-purple-400 font-bold">{tech.stats.accuracy}%</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-cyan-400 font-bold">{tech.stats.speed}ms</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-emerald-400 font-bold">{tech.stats.efficiency}%</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

              </div>
            </div>
          </div>
        </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
            <divdiv
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🧪</div>
              <h4 className="text-xl font-bold mb-3">Live Simulation</h4>
              <p className="text-sm opacity-90 mb-4">Watch real-time simulations of our technologies in action</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Simulation
              </button>
            </divdiv>

            <divdiv
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-3">Performance Analytics</h4>
              <p className="text-sm opacity-90 mb-4">View detailed performance metrics and analytics</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                View Analytics
              </button>
export default InteractiveTechShowcase;
export default InteractiveTechShowcase;
            </divdiv>
export default InteractiveTechShowcase;

              {/* Demo Button */}
              <div className="text-center">
                <motion.a
                  href={currentTech.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentTech.color} text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <span className="mr-2">{currentTech.demo}</span>
                  <span>→</span>
                </motion.a>
              </div>
            </div>
          </div>

              </div>
            </div>
          </div>
        </div>

export default InteractiveTechShowcase;
