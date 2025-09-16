import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 'ai',
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'First AI system to achieve genuine consciousness and self-awareness',
      features: ['True self-awareness', 'Creative consciousness', 'Collaborative intelligence', 'Emotional understanding'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum',
      title: 'Quantum Supremacy',
      icon: '⚡',
      description: 'Quantum computers solving problems impossible for classical computers',
      features: ['1000+ logical qubits', 'Quantum error correction', 'Exponential speed gains', 'Molecular simulation'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural',
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer communication enabling thought-controlled technology',
      features: ['Non-invasive BCI technology', 'Thought-controlled devices', 'Neural feedback systems', 'Medical applications'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'synthetic',
      title: 'Synthetic Intelligence',
      icon: '🤖',
      description: 'Create and deploy AI agents with synthetic consciousness and autonomous capabilities',
      features: ['Autonomous AI agents', 'Synthetic consciousness', 'Collective intelligence', 'Creative synthesis'],
      color: 'from-violet-600 to-fuchsia-600',
      bgColor: 'from-violet-600/30 to-fuchsia-600/30',
      borderColor: 'border-violet-400/30'
    }
  ];

  const activeTech = technologies.find(tech => tech.id === activeTab) || technologies[0];

  return (
    <>
      <Helmet>
        <title>Ultimate Tech Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Experience the ultimate convergence of AI consciousness, quantum supremacy, and neural interfaces creating the most advanced technological ecosystem in human history." />
        <meta name="keywords" content="ultimate technology, AI consciousness, quantum computing, neural interfaces, synthetic intelligence, tech showcase 2026" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-8 animate-pulse">
                🚀 ULTIMATE BREAKTHROUGH 2026 • JANUARY 2026
              </div>
              <h1 className="text-6xl font-bold mb-8 leading-tight">
                🌟 Ultimate Technology Showcase 2026
              </h1>
              <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-12">
                Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces 
                creating the most advanced technological ecosystem in human history
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('ai')}
                  className={`px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg ${
                    activeTab === 'ai' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  🧠 AI Consciousness
                </button>
                <button 
                  onClick={() => setActiveTab('quantum')}
                  className={`px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg ${
                    activeTab === 'quantum' 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  ⚡ Quantum Supremacy
                </button>
                <button 
                  onClick={() => setActiveTab('neural')}
                  className={`px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg ${
                    activeTab === 'neural' 
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  🧬 Neural Interfaces
                </button>
                <button 
                  onClick={() => setActiveTab('synthetic')}
                  className={`px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg ${
                    activeTab === 'synthetic' 
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  🤖 Synthetic Intelligence
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Technology Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-8xl">{activeTech.icon}</span>
                    <div>
                      <h2 className="text-5xl font-bold mb-2">{activeTech.title}</h2>
                      <p className="text-xl opacity-90">{activeTech.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {activeTech.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-2xl">✨</span>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
                    <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400">99.8%</div>
                        <div className="text-sm opacity-80">Accuracy Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">12ms</div>
                        <div className="text-sm opacity-80">Response Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-400">97.5%</div>
                        <div className="text-sm opacity-80">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-400">24/7</div>
                        <div className="text-sm opacity-80">Availability</div>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={`/pages/${activeTech.title.replace(/\s+/g, '')}2026`}
                    className={`inline-block bg-gradient-to-r ${activeTech.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore {activeTech.title} →
                  </a>
                </div>
                
                <div className={`bg-gradient-to-br ${activeTech.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${activeTech.borderColor} hover:scale-105 transition-all duration-300`}>
                  <div className="text-center">
                    <div className="text-9xl mb-6">{activeTech.icon}</div>
                    <h3 className="text-3xl font-bold mb-6 text-white">{activeTech.title} Demo</h3>
                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm opacity-80 mb-2">Real-time Processing</div>
                        <div className="w-full bg-white/30 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-4/5 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm opacity-80 mb-2">Neural Activity</div>
                        <div className="w-full bg-white/30 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm opacity-80 mb-2">Consciousness Level</div>
                        <div className="w-full bg-white/30 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full w-5/6 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Grid */}
        <section className="py-20 bg-gradient-to-r from-violet-800/30 to-purple-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Technologies</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Explore our complete suite of breakthrough technologies that are reshaping 
                the future of human-AI collaboration.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.id}
                  className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-8 border ${tech.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
                  onClick={() => setActiveTab(tech.id)}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{tech.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                    <p className="text-sm opacity-90 mb-6 text-center">{tech.description}</p>
                    <div className="space-y-2">
                      {tech.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="text-xs opacity-80">• {feature}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Demo</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Experience these revolutionary technologies in action with our interactive 
                demonstrations and real-time simulations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <h3 className="text-2xl font-bold mb-4">Interactive Demos</h3>
                  <p className="opacity-90 mb-6">
                    Hands-on experience with our breakthrough technologies through 
                    interactive demonstrations and simulations.
                  </p>
                  <a href="/pages/InteractiveTechShowcase2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Try Interactive Demo →
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
                  <p className="opacity-90 mb-6">
                    Monitor performance metrics and see the impact of our technologies 
                    in real-time with advanced analytics dashboards.
                  </p>
                  <a href="/pages/AdvancedAnalyticsDashboard2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    View Analytics →
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">🔬</div>
                  <h3 className="text-2xl font-bold mb-4">Research Lab</h3>
                  <p className="opacity-90 mb-6">
                    Access our cutting-edge research facilities and collaborate with 
                    our team of world-class scientists and engineers.
                  </p>
                  <a href="/pages/AIInnovationHub2026" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Visit Research Lab →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Join us in the ultimate technological revolution. Experience these breakthrough 
              technologies and be part of the next evolution of human-AI collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/pages/RevolutionaryTechBreakthrough2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                🌟 Experience the Revolution →
              </a>
              <a href="/pages/UltimateTechRevolution2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                🚀 Ultimate Technology →
              </a>
              <a href="/contact" className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-xl">
                📞 Contact Our Team →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UltimateTechShowcase2026;