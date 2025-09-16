import React, { useState } from 'react';

const FutureTechTrends2026: React.FC = () => {
  const [selectedTrend, setSelectedTrend] = useState('quantum');

  const trends = {
    quantum: {
      title: 'Quantum Computing Revolution',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      description: 'Quantum computers are breaking through traditional computing limitations, solving problems that would take classical computers millennia to process.',
      details: [
        'Quantum supremacy achieved in multiple domains',
        'Error-corrected quantum computers operational',
        'Quantum internet infrastructure expanding globally',
        'Quantum machine learning algorithms revolutionizing AI',
        'Quantum cryptography ensuring unbreakable security'
      ],
      impact: 'Exponential speed improvements in drug discovery, climate modeling, and financial optimization'
    },
    ai: {
      title: 'Artificial General Intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      description: 'AGI systems are emerging that can perform any intellectual task that a human can do, with superhuman capabilities across all domains.',
      details: [
        'Self-improving AI systems achieving recursive self-enhancement',
        'Multimodal AI understanding text, images, audio, and video simultaneously',
        'AI consciousness and self-awareness becoming reality',
        'Autonomous AI agents making complex decisions independently',
        'AI-human collaboration reaching unprecedented levels'
      ],
      impact: 'Transformation of every industry and aspect of human life'
    },
    neural: {
      title: 'Neural Interface Technology',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      description: 'Direct brain-computer interfaces are enabling seamless communication between human minds and digital systems.',
      details: [
        'Non-invasive neural reading with high accuracy',
        'Thought-to-text and thought-to-action translation',
        'Memory enhancement and cognitive augmentation',
        'Telepathic communication between humans',
        'Consciousness backup and transfer protocols'
      ],
      impact: 'Revolutionizing human-computer interaction and cognitive capabilities'
    },
    holographic: {
      title: 'Holographic Computing',
      icon: '🌟',
      color: 'from-orange-600 to-red-600',
      description: 'Three-dimensional computing environments that exist in physical space through advanced holographic projection technology.',
      details: [
        'True 3D holographic displays with tactile feedback',
        'Spatial computing interfaces replacing traditional screens',
        'Holographic data storage with massive capacity',
        'Immersive work and entertainment environments',
        'Holographic telepresence for remote collaboration'
      ],
      impact: 'Transforming how we interact with digital information and each other'
    },
    space: {
      title: 'Space Technology Revolution',
      icon: '🚀',
      color: 'from-violet-600 to-purple-600',
      description: 'Breakthrough technologies are making space exploration and colonization more accessible and sustainable.',
      details: [
        'Reusable rocket technology reducing launch costs by 99%',
        'Space-based solar power providing clean energy to Earth',
        'Asteroid mining for rare earth elements',
        'Mars colonization missions becoming reality',
        'Space elevators connecting Earth to orbit'
      ],
      impact: 'Opening up new frontiers for human civilization and resource access'
    },
    biotech: {
      title: 'Biotechnology Revolution',
      icon: '🧪',
      color: 'from-green-600 to-emerald-600',
      description: 'Advanced biotechnology is enabling unprecedented control over biological systems and human enhancement.',
      details: [
        'Gene editing curing genetic diseases',
        'Synthetic biology creating new life forms',
        'Organ printing and regeneration technology',
        'Age reversal and life extension treatments',
        'Human enhancement through biotechnology'
      ],
      impact: 'Eliminating disease and extending healthy human lifespan'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🔮 FUTURE TECH TRENDS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Future Technology Trends 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Explore the revolutionary technologies that are reshaping our world and defining the future of human civilization.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Trends
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trend Selection */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔮 Technology Trends</h2>
          <p className="text-xl opacity-90">Select a trend to explore in detail</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {Object.entries(trends).map(([key, trend]) => (
            <button
              key={key}
              onClick={() => setSelectedTrend(key)}
              className={`p-4 rounded-lg transition-all duration-300 ${
                selectedTrend === key
                  ? `bg-gradient-to-r ${trend.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <div className="text-3xl mb-2">{trend.icon}</div>
              <div className="text-sm font-semibold">{trend.title.split(' ')[0]}</div>
            </button>
          ))}
        </div>

        {/* Selected Trend Details */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-br ${trends[selectedTrend as keyof typeof trends].color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20`}>
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">{trends[selectedTrend as keyof typeof trends].icon}</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{trends[selectedTrend as keyof typeof trends].title}</h3>
                <p className="text-lg opacity-90">{trends[selectedTrend as keyof typeof trends].description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Key Developments</h4>
                <ul className="space-y-2">
                  {trends[selectedTrend as keyof typeof trends].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="opacity-90">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4">Global Impact</h4>
                <p className="opacity-90 mb-4">{trends[selectedTrend as keyof typeof trends].impact}</p>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <h5 className="font-bold mb-2">Market Projection</h5>
                  <div className="text-2xl font-bold text-green-400 mb-1">$2.5T+</div>
                  <div className="text-sm opacity-75">Expected market size by 2030</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📅 Technology Timeline</h2>
            <p className="text-xl opacity-90">The roadmap to the future</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-400 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="text-lg font-bold">2026 - Quantum Supremacy</div>
                  <div className="opacity-75">Quantum computers solve practical problems faster than classical computers</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-400 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="text-lg font-bold">2027 - AGI Emergence</div>
                  <div className="opacity-75">Artificial General Intelligence achieves human-level capabilities</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-400 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="text-lg font-bold">2028 - Neural Interfaces</div>
                  <div className="opacity-75">Commercial brain-computer interfaces become widely available</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-pink-400 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="text-lg font-bold">2029 - Holographic Computing</div>
                  <div className="opacity-75">3D holographic displays replace traditional screens</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-400 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="text-lg font-bold">2030 - Space Colonization</div>
                  <div className="opacity-75">First permanent human settlements on Mars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📊 Global Impact</h2>
          <p className="text-xl opacity-90">The numbers behind the transformation</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">$15T</div>
            <div className="text-lg opacity-90">Economic Impact</div>
            <div className="text-sm opacity-75 mt-2">By 2030</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">2B+</div>
            <div className="text-lg opacity-90">Jobs Transformed</div>
            <div className="text-sm opacity-75 mt-2">New opportunities created</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">95%</div>
            <div className="text-lg opacity-90">Efficiency Gain</div>
            <div className="text-sm opacity-75 mt-2">Across industries</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
            <div className="text-sm opacity-75 mt-2">For human advancement</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve and be part of the technological revolution that's reshaping our world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Future-Ready
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2026;