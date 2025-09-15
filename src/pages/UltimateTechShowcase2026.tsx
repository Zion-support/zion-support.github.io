<<<<<<< HEAD
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const UltimateTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE SHOWCASE • 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Ultimate Technology Showcase 2026
          </h1>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto mb-8">
            Experience the most comprehensive collection of cutting-edge technologies that will define the next decade
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🌟 Explore Showcase →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              🎯 Interactive Demo
            </button>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Artificial Intelligence</h3>
            <p className="text-purple-200 text-center text-sm">
              Next-generation AI systems with human-level reasoning and creativity
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Computing</h3>
            <p className="text-cyan-200 text-center text-sm">
              Revolutionary quantum processors solving impossible problems
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Biotechnology</h3>
            <p className="text-emerald-200 text-center text-sm">
              Synthetic biology and genetic engineering breakthroughs
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Space Technology</h3>
            <p className="text-orange-200 text-center text-sm">
              Advanced space exploration and colonization technologies
            </p>
          </div>
        </div>

        {/* Featured Technologies */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 Featured Technologies</h2>
            <p className="text-xl text-indigo-200">The most revolutionary innovations of 2026</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Synthetic Intelligence</h4>
              <p className="text-gray-300 text-center mb-4">
                Self-evolving AI systems that transcend traditional limitations and create new possibilities.
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">BREAKTHROUGH</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚛️</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Quantum-Neural Fusion</h4>
              <p className="text-gray-300 text-center mb-4">
                The convergence of quantum computing and neural networks for unprecedented processing power.
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">REVOLUTIONARY</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧬</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Neural Interfaces</h4>
              <p className="text-gray-300 text-center mb-4">
                Direct brain-computer communication enabling thought-controlled technology.
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">FUTURE</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌱</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Synthetic Biology</h4>
              <p className="text-gray-300 text-center mb-4">
                Engineered biological systems producing medicines, materials, and energy.
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">INNOVATION</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🛸</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Autonomous Spacecraft</h4>
              <p className="text-gray-300 text-center mb-4">
                AI-powered vehicles capable of independent space exploration and colonization.
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">ADVANCED</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🔮</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Predictive AI</h4>
              <p className="text-gray-300 text-center mb-4">
                Systems that can anticipate future scenarios and make optimal decisions.
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">INTELLIGENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🎯 Interactive Technology Demos</h2>
            <p className="text-xl text-gray-300">Experience these technologies in action</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">🤖 AI Assistant Demo</h3>
              <div className="bg-black/30 rounded-lg p-6 mb-4 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <p className="text-purple-200">Interactive AI Assistant</p>
                  <p className="text-sm text-gray-400">Click to start conversation</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🚀 Launch Demo
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">⚛️ Quantum Simulator</h3>
              <div className="bg-black/30 rounded-lg p-6 mb-4 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚛️</div>
                  <p className="text-cyan-200">Quantum Computing Simulator</p>
                  <p className="text-sm text-gray-400">Experience quantum algorithms</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                ⚛️ Run Simulation
              </button>
            </div>
          </div>
        </div>

        {/* Technology Timeline */}
        <div className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-emerald-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">📅 Technology Roadmap 2026-2030</h2>
            <p className="text-xl text-emerald-200">The evolution of technology over the next 5 years</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2026
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Synthetic Intelligence Launch</h3>
                <p className="text-gray-300">First commercial synthetic intelligence systems with self-evolving capabilities.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2027
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Quantum-Neural Integration</h3>
                <p className="text-gray-300">Full integration of quantum computing with neural networks for exponential processing power.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2028
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Neural Interface Commercial</h3>
                <p className="text-gray-300">Consumer brain-computer interfaces enabling direct thought control of devices.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2029
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Space Colonization</h3>
                <p className="text-gray-300">First permanent human settlements on Mars and the Moon with advanced life support systems.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2030
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Digital Immortality</h3>
                <p className="text-gray-300">First successful human consciousness transfer to digital platforms, achieving digital immortality.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold text-white mb-4">Experience the Future Today</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Join us in exploring the most advanced technologies that will shape the next decade and beyond.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🌟 Start Exploring
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                📞 Contact Experts
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
=======
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const techDemos = [
    {
      id: 'ai-synthesis',
      title: 'AI Synthesis Engine',
      description: 'Watch our AI create, iterate, and optimize solutions in real-time',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Real-time generation', 'Self-optimization', 'Creative problem solving']
    },
    {
      id: 'quantum-sim',
      title: 'Quantum Simulation',
      description: 'Experience quantum computing power solving complex optimization problems',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: ['Exponential speed', 'Complex optimization', 'Quantum algorithms']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface',
      description: 'Direct brain-computer interaction with thought-controlled systems',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Thought control', 'Neural patterns', 'Mind-machine sync']
    },
    {
      id: 'biotech-lab',
      title: 'Biotech Laboratory',
      description: 'Virtual lab environment for genetic engineering and synthetic biology',
      icon: '🧪',
      color: 'from-rose-600 to-pink-600',
      features: ['Gene editing', 'Synthetic biology', 'Molecular design']
    }
  ];

  const achievements = [
    { metric: '500+', label: 'Patents Filed', icon: '📋' },
    { metric: '99.9%', label: 'System Uptime', icon: '⚡' },
    { metric: '10x', label: 'Performance Boost', icon: '🚀' },
    { metric: '1M+', label: 'Active Users', icon: '👥' },
    { metric: '$2B+', label: 'Value Created', icon: '💰' },
    { metric: '50+', label: 'Countries', icon: '🌍' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % techDemos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDemoLaunch = (demoId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would launch the actual demo
      alert(`Launching ${demoId} demo...`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6">
              🌟 ULTIMATE TECHNOLOGY SHOWCASE • 2026
            </div>
            <h1 className="text-8xl font-bold text-white mb-6">
              Ultimate Tech Showcase
            </h1>
            <p className="text-3xl text-purple-200 mb-8 max-w-5xl mx-auto">
              Experience the most advanced technologies that are reshaping our world. 
              Interactive demos, live simulations, and breakthrough innovations await.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
                🚀 Launch Interactive Demo
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-10 py-5 rounded-lg hover:bg-purple-500/20 transition-all duration-300 text-xl">
                📺 Watch Full Presentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              🎮 Interactive Technology Demos
            </h2>
            <p className="text-2xl text-purple-200">
              Experience our technologies in action with live, interactive demonstrations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Selector */}
            <div className="space-y-6">
              {techDemos.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activeDemo === index
                      ? 'border-purple-400 bg-gradient-to-r from-purple-600/20 to-pink-600/20'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{demo.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{demo.title}</h3>
                      <p className="text-purple-200 mb-3">{demo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {demo.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Demo Display */}
            <div className="relative">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${techDemos[activeDemo].color} rounded-2xl p-8 text-white relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="text-8xl mb-4 animate-pulse">
                      {techDemos[activeDemo].icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      {techDemos[activeDemo].title}
                    </h3>
                    <p className="text-xl opacity-90 mb-6">
                      {techDemos[activeDemo].description}
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎯</div>
                      <h4 className="text-xl font-bold mb-2">Live Demo Status</h4>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300">Ready to Launch</span>
                      </div>
                      <button
                        onClick={() => handleDemoLaunch(techDemos[activeDemo].id)}
                        disabled={isLoading}
                        className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold disabled:opacity-50"
                      >
                        {isLoading ? 'Launching...' : 'Launch Demo'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              📊 Impact by the Numbers
            </h2>
            <p className="text-2xl text-purple-200">
              Our technologies are driving measurable impact across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.metric}</div>
                <div className="text-purple-200 text-lg">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              🌟 Revolutionary Technologies
            </h2>
            <p className="text-2xl text-purple-200">
              Explore our complete portfolio of breakthrough innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Synthetic Intelligence', icon: '🤖', desc: 'AI that thinks, creates, and evolves' },
              { title: 'Quantum Computing', icon: '⚡', desc: 'Exponential processing power' },
              { title: 'Neural Interfaces', icon: '🧬', desc: 'Direct mind-machine connection' },
              { title: 'Biotechnology', icon: '🧪', desc: 'Revolutionary biological solutions' },
              { title: 'Space Technology', icon: '🚀', desc: 'Next-generation space exploration' },
              { title: 'Cyber-Physical Systems', icon: '🌐', desc: 'Connected intelligent systems' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{tech.title}</h3>
                <p className="text-purple-200 text-center mb-6">{tech.desc}</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Technology
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-2xl mb-8 opacity-90">
              Join thousands of innovators who are already using our technologies 
              to build tomorrow's solutions today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-purple-600 px-10 py-5 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-xl">
                🚀 Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white/20 transition-all duration-300 text-xl">
                📞 Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> cursor/create-and-deploy-new-content-c439
    </div>
  );
};

export default UltimateTechShowcase2026;