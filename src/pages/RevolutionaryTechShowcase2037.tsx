import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2037: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const demos = [
    {
      id: 'conscious-ai-demo',
      title: 'Conscious AI Demonstration',
      description: 'Watch as our AI systems demonstrate true consciousness, creativity, and emotional intelligence.',
      features: [
        'Real-time Consciousness Display',
        'Emotional Response Simulation',
        'Creative Problem Solving',
        'Self-Awareness Demonstration'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      duration: '15 min'
    },
    {
      id: 'quantum-demo',
      title: 'Quantum Computing Showcase',
      description: 'Experience quantum computing solving problems that would take classical computers millennia.',
      features: [
        'Quantum Supremacy Display',
        'Parallel Universe Computing',
        'Instantaneous Problem Solving',
        'Reality Manipulation'
      ],
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      duration: '20 min'
    },
    {
      id: 'dimensional-demo',
      title: 'Interdimensional Technology',
      description: 'Witness the creation and manipulation of parallel dimensions in real-time.',
      features: [
        'Dimension Creation',
        'Reality Branching',
        'Cross-Dimensional Travel',
        'Universe Simulation'
      ],
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      duration: '25 min'
    },
    {
      id: 'synthetic-reality-demo',
      title: 'Synthetic Reality Engine',
      description: 'Experience perfect virtual worlds indistinguishable from reality.',
      features: [
        'Perfect Reality Simulation',
        'Consciousness Transfer',
        'Immortality Protocols',
        'Infinite World Generation'
      ],
      icon: '🌍',
      color: 'from-orange-600 to-red-600',
      duration: '30 min'
    }
  ];

  const handleDemoStart = (demoId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Demo would start here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
              🚀 REVOLUTIONARY SHOWCASE • JANUARY 2037
            </div>
            <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2037
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-12">
              Experience the most advanced technology demonstrations that will change everything you know about reality
            </p>
          </div>

          {/* Interactive Demo Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {demos.map((demo, index) => (
                <div
                  key={demo.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group ${
                    activeDemo === index ? 'ring-2 ring-purple-400 scale-105' : ''
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${demo.color} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                      {demo.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{demo.title}</h3>
                      <p className="text-lg opacity-90 mb-4">{demo.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-300">Duration: {demo.duration}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDemoStart(demo.id);
                          }}
                          className={`bg-gradient-to-r ${demo.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          disabled={isLoading}
                        >
                          {isLoading ? 'Starting...' : 'Start Demo'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Demo Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <div className="text-center mb-12">
                <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                  {demos[activeDemo].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Demo Features</h3>
                  <ul className="space-y-4">
                    {demos[activeDemo].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Demo Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Revolutionary Impact</span>
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-indigo-400 to-purple-400 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>User Engagement</span>
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '98%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Technology Readiness</span>
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-indigo-400/30">
                    <h3 className="text-xl font-bold mb-4">Experience Level</h3>
                    <div className="text-3xl font-bold text-indigo-300 mb-2">Revolutionary</div>
                    <div className="text-sm text-indigo-200">This demo will fundamentally change your understanding of technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h2 className="text-4xl font-bold mb-8">Ready to Experience the Impossible?</h2>
            <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
              Join thousands of pioneers who have already experienced these revolutionary technologies. 
              Your perception of reality will never be the same.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-6 rounded-xl hover:bg-cyan-400/10 transition-colors font-bold text-xl">
                Schedule Private Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2037;