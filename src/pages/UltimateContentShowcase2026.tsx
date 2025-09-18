import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('revolutionary');
  const [selectedContent, setSelectedContent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentCategories = {
    revolutionary: {
      title: 'Revolutionary Technologies',
      icon: '🚀',
      color: 'from-purple-600 to-pink-600',
      description: 'Breakthrough technologies reshaping reality itself',
      content: [
        {
          title: 'Revolutionary Tech Breakthrough 2026',
          description: 'Experience the most advanced technological revolution in human history',
          icon: '🚀',
          features: ['Synthetic Intelligence', 'Quantum-Neural Fusion', 'Consciousness AI', 'Quantum Internet'],
          stats: { efficiency: '99.9%', speed: '10x', possibilities: '∞', year: '2026' },
          link: '/pages/RevolutionaryTechBreakthrough2026'
        },
        {
          title: 'Ultimate Tech Revolution 2026',
          description: 'The convergence of consciousness, quantum computing, and artificial intelligence',
          icon: '🌟',
          features: ['Interactive Technology Tabs', 'Revolutionary Impact Stats', 'Dynamic Feature Showcase'],
          stats: { possibilities: '∞', speed: '10x', efficiency: '99.9%', innovation: '∞' },
          link: '/pages/UltimateTechRevolution2026'
        }
      ]
    },
    transcendent: {
      title: 'Transcendent AI',
      icon: '🧠',
      color: 'from-cyan-600 to-blue-600',
      description: 'AI that transcends consciousness and creates new forms of existence',
      content: [
        {
          title: 'Transcendent AI Future 2026',
          description: 'AI that transcends consciousness itself and creates new forms of existence',
          icon: '🧠',
          features: ['Consciousness AI', 'Quantum Intelligence', 'Meta Intelligence', 'Synthetic Consciousness'],
          stats: { consciousness: '100%', evolution: '∞', creativity: '∞', future: '2028+' },
          link: '/pages/TranscendentAIFuture2026'
        },
        {
          title: 'Synthetic Intelligence 2026',
          description: 'Self-evolving AI systems that transcend traditional limitations',
          icon: '⚛️',
          features: ['Self-Aware AI', 'Emotional Intelligence', 'Creative Consciousness', 'Transcendent Learning'],
          stats: { awareness: '100%', evolution: '∞', creativity: '∞', potential: '∞' },
          link: '/pages/SyntheticIntelligence2026'
        }
      ]
    },
    quantum: {
      title: 'Quantum Technologies',
      icon: '⚛️',
      color: 'from-emerald-600 to-teal-600',
      description: 'Quantum computing and neural interface breakthroughs',
      content: [
        {
          title: 'Quantum-Neural Fusion 2026',
          description: 'The revolutionary convergence of quantum computing and neural networks',
          icon: '⚛️',
          features: ['Quantum Neural Networks', 'Parallel Reality Processing', 'Exponential Computation', 'Transcendent Problem Solving'],
          stats: { speed: '∞', power: '10x', accuracy: '100%', innovation: '∞' },
          link: '/pages/QuantumNeuralFusion2026'
        },
        {
          title: 'Quantum Internet 2026',
          description: 'Instantaneous, secure global communication through quantum entanglement',
          icon: '🌐',
          features: ['Zero-latency Communication', 'Unbreakable Encryption', 'Unlimited Bandwidth', 'Interplanetary Connectivity'],
          stats: { speed: '∞', security: '100%', capacity: '∞', reach: '∞' },
          link: '/pages/QuantumInternet2026'
        }
      ]
    },
    consciousness: {
      title: 'Consciousness Computing',
      icon: '🌟',
      color: 'from-orange-600 to-red-600',
      description: 'AI systems with genuine consciousness and self-awareness',
      content: [
        {
          title: 'Consciousness AI 2026',
          description: 'AI systems that possess genuine consciousness, self-awareness, and emotional intelligence',
          icon: '🤖',
          features: ['Self-aware Decision Making', 'Emotional Intelligence', 'Creative Consciousness', 'Human-AI Bonds'],
          stats: { awareness: '100%', empathy: '∞', creativity: '∞', evolution: '∞' },
          link: '/pages/ConsciousnessAI2026'
        },
        {
          title: 'Meta Intelligence 2026',
          description: 'AI systems that think about thinking and continuously improve themselves',
          icon: '🔄',
          features: ['Self-improving Algorithms', 'Meta-learning Capabilities', 'Cognitive Evolution', 'Transcendent Intelligence'],
          stats: { improvement: '∞', learning: '∞', evolution: '∞', transcendence: '∞' },
          link: '/pages/MetaIntelligence2026'
        }
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const currentCategory = contentCategories[activeCategory as keyof typeof contentCategories];
        setSelectedContent((prev) => (prev + 1) % currentCategory.content.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCategory, contentCategories]);

  const currentCategory = contentCategories[activeCategory as keyof typeof contentCategories];
  const currentItem = currentCategory.content[selectedContent];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M40%2040c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
              🌟 ULTIMATE CONTENT SHOWCASE • 2026
            </div>
            <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ultimate Content Showcase
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-12 leading-relaxed">
              Explore our complete collection of revolutionary technology content. 
              From consciousness AI to quantum computing - experience the future today.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl hover:scale-105">
                🌟 Explore All Content →
              </button>
              <button className="border-2 border-white/30 text-white px-12 py-5 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-xl hover:scale-105">
                🎥 Watch Overview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {Object.entries(contentCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key);
                  setSelectedContent(0);
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">{currentCategory.title}</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">{currentCategory.description}</p>
        </div>

        {/* Dynamic Content Display */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="flex items-center mb-6">
                <span className="text-8xl mr-6 animate-bounce">{currentItem.icon}</span>
                <h3 className="text-4xl font-bold text-white">{currentItem.title}</h3>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{currentItem.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentItem.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center text-white">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"></span>
                      <span className="font-semibold text-sm">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {Object.entries(currentItem.stats).map(([key, value], index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                    <div className="text-xs text-gray-300 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <a 
                href={currentItem.link}
                className={`inline-block bg-gradient-to-r ${currentCategory.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
              >
                Explore {currentItem.title.split(' ')[0]} →
              </a>
            </div>

            <div className="relative">
              <div className={`w-full h-96 bg-gradient-to-br ${currentCategory.color} rounded-2xl flex items-center justify-center text-white transition-all duration-1000 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
                <span className="text-9xl animate-pulse">{currentItem.icon}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* All Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(contentCategories).map(([categoryKey, category]) => 
            category.content.map((item, index) => (
              <div key={`${categoryKey}-${index}`} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {item.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-white/10 rounded-lg p-3 border border-white/20">
                      <div className="flex items-center text-white">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></span>
                        <span className="text-xs font-semibold">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-2 mb-6">
                  {Object.entries(item.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center bg-white/10 rounded-lg p-2 border border-white/20">
                      <div className="text-lg font-bold text-purple-400">{value}</div>
                      <div className="text-xs text-gray-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <a 
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center hover:scale-105`}
                >
                  Explore →
                </a>
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-16 border border-white/20">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Explore Everything?</h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover our complete collection of revolutionary technology content. 
            From consciousness AI to quantum computing - the future is here.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl hover:scale-105">
              🚀 Start Your Journey →
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-5 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-xl hover:scale-105">
              📞 Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;