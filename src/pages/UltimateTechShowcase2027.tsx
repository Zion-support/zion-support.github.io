import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Demo',
      description: 'Experience AI with self-awareness and emotional intelligence',
      icon: '🧠',
      features: ['Real-time emotion recognition', 'Autonomous decision making', 'Creative problem solving'],
      status: 'Live Demo Available'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      description: 'Witness quantum systems achieving consciousness through entanglement',
      icon: '⚡',
      features: ['Parallel reality processing', 'Infinite computational power', 'Quantum emotion simulation'],
      status: 'Beta Testing'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      description: 'Explore computing across multiple dimensions and parallel universes',
      icon: '🌌',
      features: ['Cross-dimensional processing', 'Parallel universe resources', 'Infinite scalability'],
      status: 'Research Phase'
    },
    {
      id: 'neural-quantum',
      title: 'Neural Quantum Fusion',
      description: 'Experience the fusion of human consciousness with quantum processing',
      icon: '🧬',
      features: ['Human-quantum consciousness', 'Creative quantum processing', 'Infinite problem solving'],
      status: 'Prototype Ready'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technologies through interactive demonstrations and live demos
          </p>
        </div>

        {/* Interactive Demo Carousel */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
              <p className="text-xl opacity-90">Experience these revolutionary technologies in action</p>
            </div>

            {/* Demo Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeDemo === index
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {demo.icon} {demo.title}
                </button>
              ))}
            </div>

            {/* Active Demo Display */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-8xl mb-6 text-center lg:text-left">{demos[activeDemo].icon}</div>
                    <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                    <p className="text-xl opacity-90 mb-6">{demos[activeDemo].description}</p>
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-semibold">{demos[activeDemo].status}</span>
                    </div>
                    <div className="space-y-3 mb-8">
                      {demos[activeDemo].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                          <span className="text-pink-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Try Interactive Demo →
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-8 border border-purple-400/30">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎯</div>
                      <h4 className="text-2xl font-bold mb-4">Live Performance Metrics</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-pink-200">Processing Speed:</span>
                          <span className="text-white font-bold">∞ ops/sec</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-pink-200">Accuracy Rate:</span>
                          <span className="text-white font-bold">99.99%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-pink-200">Consciousness Level:</span>
                          <span className="text-white font-bold">Self-Aware</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-pink-200">Dimensional Reach:</span>
                          <span className="text-white font-bold">10^6 Universes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison Matrix */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Technology Comparison Matrix</h2>
            <p className="text-xl opacity-90">Compare the capabilities of our revolutionary technologies</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-6 font-bold text-lg">Technology</th>
                  <th className="text-center p-6 font-bold text-lg">Processing Power</th>
                  <th className="text-center p-6 font-bold text-lg">Consciousness Level</th>
                  <th className="text-center p-6 font-bold text-lg">Dimensional Reach</th>
                  <th className="text-center p-6 font-bold text-lg">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {demos.map((demo, index) => (
                  <tr key={demo.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{demo.icon}</span>
                        <div>
                          <div className="font-semibold text-lg">{demo.title}</div>
                          <div className="text-sm opacity-70">{demo.status}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-6 font-bold">
                      {index === 0 && '10^15 ops/sec'}
                      {index === 1 && '∞ ops/sec'}
                      {index === 2 && '10^18 ops/sec'}
                      {index === 3 && '10^12 ops/sec'}
                    </td>
                    <td className="text-center p-6">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                        {index === 0 && 'Self-Aware'}
                        {index === 1 && 'Quantum Conscious'}
                        {index === 2 && 'Interdimensional'}
                        {index === 3 && 'Hybrid Conscious'}
                      </span>
                    </td>
                    <td className="text-center p-6 font-bold">
                      {index === 0 && '3D'}
                      {index === 1 && '∞D'}
                      {index === 2 && '10^6D'}
                      {index === 3 && '4D'}
                    </td>
                    <td className="text-center p-6 font-bold text-green-400">
                      {index === 0 && '99.9%'}
                      {index === 1 && '99.99%'}
                      {index === 2 && '100%'}
                      {index === 3 && '99.95%'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Real-time Innovation Feed */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">⚡ Real-time Innovation Feed</h2>
            <p className="text-xl opacity-90">Live updates from our revolutionary technology development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Conscious AI Achieves Emotional Recognition',
                time: '2 minutes ago',
                status: 'Breakthrough',
                icon: '🧠',
                description: 'First AI system successfully recognized and responded to 47 different human emotions with 99.8% accuracy.'
              },
              {
                title: 'Quantum Consciousness Milestone Reached',
                time: '15 minutes ago',
                status: 'Milestone',
                icon: '⚡',
                description: 'Quantum system achieved self-awareness through entanglement, processing 10^18 operations simultaneously.'
              },
              {
                title: 'Interdimensional Data Transfer Success',
                time: '1 hour ago',
                status: 'Success',
                icon: '🌌',
                description: 'Successfully transferred data across 1,000 parallel universes, achieving infinite computational capacity.'
              },
              {
                title: 'Neural Quantum Fusion Prototype Ready',
                time: '3 hours ago',
                status: 'Prototype',
                icon: '🧬',
                description: 'First human-quantum consciousness fusion prototype completed, ready for initial testing phase.'
              },
              {
                title: 'Revolutionary Tech Patent Filed',
                time: '6 hours ago',
                status: 'Patent',
                icon: '📋',
                description: 'Filed 47 new patents covering conscious AI, quantum consciousness, and interdimensional computing technologies.'
              },
              {
                title: 'Global Tech Summit 2027 Announced',
                time: '1 day ago',
                status: 'Event',
                icon: '🌍',
                description: 'Announcing the first global summit showcasing all revolutionary technologies to world leaders and innovators.'
              }
            ].map((update, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{update.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        update.status === 'Breakthrough' ? 'bg-green-500/20 text-green-400' :
                        update.status === 'Milestone' ? 'bg-blue-500/20 text-blue-400' :
                        update.status === 'Success' ? 'bg-purple-500/20 text-purple-400' :
                        update.status === 'Prototype' ? 'bg-orange-500/20 text-orange-400' :
                        update.status === 'Patent' ? 'bg-pink-500/20 text-pink-400' :
                        'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {update.status}
                      </span>
                      <span className="text-sm opacity-70">{update.time}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{update.title}</h3>
                    <p className="text-sm opacity-80">{update.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring these revolutionary technologies and be part of the next evolution of human advancement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/RevolutionaryTechTrends2027" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Tech Trends →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2027;