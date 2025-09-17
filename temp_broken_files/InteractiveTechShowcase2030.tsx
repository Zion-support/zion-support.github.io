const InteractiveTechShowcase2030: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-consciousness');
  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Experience true AI consciousness with emotional intelligence and self-awareness',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Emotional Recognition', 'Self-Reflection', 'Creative Generation', 'Moral Reasoning']
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine',
      description: 'Step into infinite parallel universes powered by quantum computing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Parallel Universes', 'Quantum Simulation', 'Consciousness Transfer', 'Reality Manipulation']
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Technology',
      description: 'Break through dimensional barriers and explore multiple realities',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: ['Dimensional Travel', 'Reality Shifting', 'Multi-verse Navigation', 'Infinite Exploration']
    }
  ];
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2030
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demos. 
            Click on different technologies to explore their capabilities in real-time.
          </p>
        </div>
        {/* Demo Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                  activeDemo === demo.id
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>
        </div>
        {/* Active Demo Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Content */}
          <div className="space-y-8">
            {demos.map((demo) => (
              activeDemo === demo.id && (
                <div key={demo.id} className="space-y-6">
                  <div className="text-6xl mb-4">{demo.icon}</div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {demo.title}
                  </h3>
                  <p className="text-xl opacity-90 leading-relaxed">
                    {demo.description}
                  </p>
                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-purple-300">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {demo.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${demo.color} rounded-full`}></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Interactive Elements */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-purple-300">Try It Now:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <button className={`bg-gradient-to-r ${demo.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                        🎮 Interactive Demo
                      </button>
                      <button className="border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold">
                        📺 Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Features */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">More Interactive Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-2">Gamified Learning</h4>
              <p className="text-gray-400">Learn through interactive games and challenges</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-2">Collaborative Demos</h4>
              <p className="text-gray-400">Experience technologies with friends and colleagues</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">Real-time Analytics</h4>
              <p className="text-gray-400">Track your progress and performance metrics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default InteractiveTechShowcase2030;
