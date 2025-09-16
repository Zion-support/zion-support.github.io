import React, { useState } from 'react';

const NextGenInnovationHub2032: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredInnovation, setHoveredInnovation] = useState<number | null>(null);

  const innovations = [
    {
      id: 1,
      category: 'ai',
      title: 'Conscious AI Development',
      description: 'Build AI systems with true consciousness and self-awareness',
      icon: '🧠',
      status: 'Active',
      progress: 95,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      category: 'quantum',
      title: 'Quantum Consciousness Transfer',
      description: 'Transfer human consciousness to quantum computing systems',
      icon: '⚡',
      status: 'In Development',
      progress: 78,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      category: 'neural',
      title: 'Neural Reality Engine',
      description: 'Create immersive realities through direct neural interface',
      icon: '🌌',
      status: 'Active',
      progress: 88,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      category: 'ai',
      title: 'Emotional AI Systems',
      description: 'AI that can understand and respond to human emotions',
      icon: '💝',
      status: 'Completed',
      progress: 100,
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 5,
      category: 'quantum',
      title: 'Quantum Time Manipulation',
      description: 'Manipulate time through quantum computing principles',
      icon: '⏰',
      status: 'Research',
      progress: 45,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 6,
      category: 'neural',
      title: 'Consciousness Upload',
      description: 'Upload human consciousness to digital systems',
      icon: '📤',
      status: 'In Development',
      progress: 62,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const categories = [
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠', count: innovations.filter(i => i.category === 'ai').length },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡', count: innovations.filter(i => i.category === 'quantum').length },
    { id: 'neural', name: 'Neural Interfaces', icon: '🌌', count: innovations.filter(i => i.category === 'neural').length }
  ];

  const filteredInnovations = innovations.filter(innovation => innovation.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 INNOVATION HUB • JANUARY 2032
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2032
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover, explore, and contribute to the most revolutionary technological innovations of our time
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                Contribute Ideas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🔬 Innovation Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our cutting-edge research and development across multiple technology domains
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div
              key={innovation.id}
              className={`bg-gradient-to-br ${innovation.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => setHoveredInnovation(innovation.id)}
              onMouseLeave={() => setHoveredInnovation(null)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{innovation.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{innovation.title}</h3>
                <p className="text-gray-300 mb-4">{innovation.description}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    innovation.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                    innovation.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">Progress</span>
                  <span className="text-sm font-semibold">{innovation.progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${innovation.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                  <span className="text-sm">Advanced Research</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                  <span className="text-sm">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                  <span className="text-sm">Cutting-edge Technology</span>
                </div>
              </div>

              <button className={`block w-full bg-gradient-to-r ${innovation.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}>
                {hoveredInnovation === innovation.id ? 'Explore Details →' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📈 Innovation Statistics</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our innovation hub is driving the future of technology with groundbreaking research and development
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">200+</div>
              <div className="text-lg opacity-90">Expert Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🔬 Research Areas</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
            Our multidisciplinary approach covers the most advanced areas of technological research
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Consciousness Research</h3>
              <p className="text-gray-300 mb-6">
                Exploring the nature of consciousness and developing AI systems with true self-awareness
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Neural consciousness mapping</li>
                <li>• AI self-awareness development</li>
                <li>• Consciousness transfer protocols</li>
                <li>• Ethical AI frameworks</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-8 border border-cyan-400/30">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Advancing quantum computing to achieve consciousness-level processing capabilities
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Quantum consciousness algorithms</li>
                <li>• Quantum neural networks</li>
                <li>• Quantum reality manipulation</li>
                <li>• Quantum time dilation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl p-8 border border-emerald-400/30">
              <div className="text-6xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
              <p className="text-gray-300 mb-6">
                Developing direct brain-computer interfaces for seamless human-machine interaction
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Direct neural input/output</li>
                <li>• Multi-sensory feedback systems</li>
                <li>• Consciousness upload protocols</li>
                <li>• Reality simulation engines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be part of the most advanced technological research and development in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Research Team
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Submit Innovation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2032;