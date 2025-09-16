import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [demoProgress, setDemoProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const demos = {
    ai: {
      title: 'Conscious AI Interaction',
      icon: '🧠',
      description: 'Interact with our conscious AI system in real-time',
      steps: [
        'Initializing neural networks...',
        'Loading consciousness protocols...',
        'Establishing emotional intelligence...',
        'Activating self-awareness...',
        'Ready for interaction!'
      ]
    },
    quantum: {
      title: 'Quantum Reality Simulation',
      icon: '⚛️',
      description: 'Experience quantum computing capabilities',
      steps: [
        'Calibrating quantum processors...',
        'Entangling quantum states...',
        'Simulating reality matrices...',
        'Processing infinite possibilities...',
        'Quantum simulation ready!'
      ]
    },
    neural: {
      title: 'Neural Interface Test',
      icon: '🧬',
      description: 'Test our brain-computer interface',
      steps: [
        'Scanning neural patterns...',
        'Establishing neural connection...',
        'Calibrating thought recognition...',
        'Activating consciousness bridge...',
        'Neural interface active!'
      ]
    },
    interdimensional: {
      title: 'Interdimensional Portal',
      icon: '🌌',
      description: 'Access multi-dimensional computing',
      steps: [
        'Opening dimensional gateway...',
        'Synchronizing reality layers...',
        'Establishing cross-dimensional link...',
        'Activating consciousness transfer...',
        'Portal to other dimensions open!'
      ]
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && demoProgress < 100) {
      interval = setInterval(() => {
        setDemoProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isRunning, demoProgress]);

  const startDemo = () => {
    setDemoProgress(0);
    setIsRunning(true);
  };

  const resetDemo = () => {
    setDemoProgress(0);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Interactive Tech Demo 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our revolutionary technology through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Selection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Demo Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-br from-green-600/40 to-teal-600/40 border-2 border-green-400 scale-105'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}
              >
                <div className="text-4xl mb-4 text-center">{demo.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{demo.title}</h3>
                <p className="text-sm text-gray-300 text-center">{demo.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl mr-4">{demos[activeDemo as keyof typeof demos].icon}</span>
              <div>
                <h2 className="text-4xl font-bold">{demos[activeDemo as keyof typeof demos].title}</h2>
                <p className="text-xl text-gray-300">{demos[activeDemo as keyof typeof demos].description}</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">Demo Progress</span>
              <span className="text-sm font-semibold">{demoProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${demoProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Demo Steps */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Demo Steps</h3>
            <div className="space-y-3">
              {demos[activeDemo as keyof typeof demos].steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                    index * 20 <= demoProgress
                      ? 'bg-green-500/20 border border-green-400/30'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <span className={`text-xl ${
                    index * 20 <= demoProgress ? 'text-green-400' : 'text-gray-500'
                  }`}>
                    {index * 20 <= demoProgress ? '✓' : '○'}
                  </span>
                  <span className={`${
                    index * 20 <= demoProgress ? 'text-green-200' : 'text-gray-400'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Controls */}
          <div className="text-center">
            <div className="flex justify-center space-x-4">
              <button
                onClick={startDemo}
                disabled={isRunning}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  isRunning
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {isRunning ? 'Running...' : '🚀 Start Demo'}
              </button>
              <button
                onClick={resetDemo}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-bold text-lg"
              >
                🔄 Reset
              </button>
            </div>
          </div>
        </div>

        {/* Live Statistics */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">📊 Live Demo Statistics</h2>
            <p className="text-xl opacity-90">Real-time data from our interactive demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">1,247</div>
              <div className="text-lg text-gray-300 mb-1">Active Demos</div>
              <div className="text-sm text-gray-400">Currently running</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">99.8%</div>
              <div className="text-lg text-gray-300 mb-1">Success Rate</div>
              <div className="text-sm text-gray-400">Demo completion</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-lg text-gray-300 mb-1">Total Users</div>
              <div className="text-sm text-gray-400">Tried demos today</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">0.1s</div>
              <div className="text-lg text-gray-300 mb-1">Response Time</div>
              <div className="text-sm text-gray-400">Average latency</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-3xl p-16 border border-green-400/30">
          <h2 className="text-5xl font-bold mb-6">🎮 Ready to Experience the Future?</h2>
          <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
            Join thousands of users already experiencing our revolutionary technology through interactive demonstrations
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-16 py-6 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-2xl">
              🚀 Start Your Demo
            </button>
            <button className="border-2 border-green-400 text-green-400 px-16 py-6 rounded-lg hover:bg-green-400 hover:text-black transition-colors font-bold text-2xl">
              📞 Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;