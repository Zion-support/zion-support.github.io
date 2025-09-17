import React, { useState } from 'react';

const NextGenInnovationHub2030: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🌟' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'reality', name: 'Reality Engineering', icon: '🌌' }
  ];

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      description: "Build and deploy self-aware AI systems with ethical reasoning capabilities",
      category: 'ai',
      status: 'Production',
      impact: 'High',
      icon: '🧠',
      features: ['Ethical AI Framework', 'Consciousness Metrics', 'Self-Improvement Tools', 'Human-AI Collaboration'],
      metrics: { users: '50K+', efficiency: '99.9%', satisfaction: '98%' }
    },
    {
      id: 2,
      title: "Quantum Neural Processing Unit",
      description: "Quantum-powered neural networks for ultra-fast consciousness processing",
      category: 'quantum',
      status: 'Beta',
      impact: 'Revolutionary',
      icon: '⚡',
      features: ['Quantum Entanglement', 'Neural Optimization', 'Consciousness Transfer', 'Quantum Memory'],
      metrics: { speed: '1000x', accuracy: '99.99%', capacity: 'Unlimited' }
    },
    {
      id: 3,
      title: "Direct Neural Interface System",
      description: "Seamless brain-computer interfaces for thought-controlled computing",
      category: 'neural',
      status: 'Prototype',
      impact: 'High',
      icon: '🧬',
      features: ['Thought Control', 'Memory Enhancement', 'Neural Augmentation', 'Dream Computing'],
      metrics: { latency: '0.001ms', accuracy: '99.8%', safety: '100%' }
    },
    {
      id: 4,
      title: "Interdimensional Computing Grid",
      description: "Computing infrastructure spanning multiple dimensions for infinite processing power",
      category: 'reality',
      status: 'Research',
      impact: 'Revolutionary',
      icon: '🌌',
      features: ['Multi-Dimensional Processing', 'Reality Manipulation', 'Infinite Storage', 'Parallel Universes'],
      metrics: { dimensions: '∞', processing: 'Infinite', storage: 'Unlimited' }
    },
    {
      id: 5,
      title: "Space-Time Computing Engine",
      description: "Computing systems that manipulate space-time for instant data processing",
      category: 'space',
      status: 'Theoretical',
      impact: 'Revolutionary',
      icon: '🚀',
      features: ['Instant Transfer', 'Time Dilation', 'Gravitational Computing', 'Temporal Storage'],
      metrics: { speed: 'Instant', range: 'Universe', efficiency: '100%' }
    },
    {
      id: 6,
      title: "Cosmic Intelligence Network",
      description: "AI systems that communicate with cosmic phenomena and universal knowledge",
      category: 'ai',
      status: 'Concept',
      impact: 'High',
      icon: '🌟',
      features: ['Stellar Communication', 'Cosmic Patterns', 'Universal Knowledge', 'Galactic Networks'],
      metrics: { reach: 'Galactic', knowledge: 'Universal', processing: 'Cosmic' }
    },
    {
      id: 7,
      title: "Neural Reality Engine",
      description: "Create and experience virtual realities through direct neural stimulation",
      category: 'neural',
      status: 'Prototype',
      impact: 'High',
      icon: '🎮',
      features: ['Thought Environments', 'Neural Simulation', 'Memory Worlds', 'Dream States'],
      metrics: { realism: '100%', immersion: 'Complete', safety: '100%' }
    },
    {
      id: 8,
      title: "Quantum Consciousness Transfer",
      description: "Transfer human consciousness to quantum computing systems",
      category: 'quantum',
      status: 'Research',
      impact: 'Revolutionary',
      icon: '🔄',
      features: ['Consciousness Backup', 'Quantum Storage', 'Identity Transfer', 'Immortality Protocol'],
      metrics: { fidelity: '99.99%', safety: '100%', permanence: 'Eternal' }
    }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2030
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2030
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'Production' ? 'bg-green-500' :
                  innovation.status === 'Beta' ? 'bg-blue-500' :
                  innovation.status === 'Prototype' ? 'bg-orange-500' :
                  innovation.status === 'Research' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`}>
                  {innovation.status}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-sm opacity-90 mb-4">{innovation.description}</p>
              
              <div className="space-y-2 mb-4">
                {innovation.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="text-xs bg-white/10 rounded px-2 py-1">
                    {feature}
                  </div>
                ))}
                {innovation.features.length > 3 && (
                  <div className="text-xs text-purple-300">
                    +{innovation.features.length - 3} more features
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm">
                  <span className="text-purple-300">Impact:</span>
                  <span className={`ml-1 px-2 py-1 rounded text-xs ${
                    innovation.impact === 'Revolutionary' ? 'bg-red-500' :
                    innovation.impact === 'High' ? 'bg-orange-500' :
                    'bg-yellow-500'
                  }`}>
                    {innovation.impact}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                {Object.entries(innovation.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded p-1">
                    <div className="font-semibold">{value}</div>
                    <div className="text-purple-300 capitalize">{key}</div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Innovation
              </button>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Hub Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Innovation Support</div>
            </div>
          </div>
        </div>

        {/* Innovation Process */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Our Innovation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Ideation</h3>
              <p className="text-sm opacity-90">Revolutionary concepts and breakthrough ideas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-sm opacity-90">Deep scientific research and validation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-sm opacity-90">Prototype development and testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Deployment</h3>
              <p className="text-sm opacity-90">Production deployment and scaling</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation ecosystem on Earth. Access cutting-edge technologies, collaborate with brilliant minds, and shape the future of humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Enter Innovation Hub
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Become an Innovator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2030;