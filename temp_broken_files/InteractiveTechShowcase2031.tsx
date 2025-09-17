import React, { useState } from 'react';

const InteractiveTechShowcase2031: React.FC = () => {
  const [activeTab, setActiveTab] = useState('transcendent');

  const techCategories = {
    transcendent: {
      title: 'Transcendent AI 2031',
      description: 'AI that transcends human limitations and creates new paradigms of consciousness',
      features: [
        'Consciousness Transfer Technology',
        'Quantum Neural Networks',
        'Reality Manipulation Engine',
        'Predictive Reality Modeling',
        'Universal Communication Protocol',
        'Interstellar AI Networks'
      ],
      color: 'from-purple-600 to-pink-600',
      icon: '🧠'
    },
    universal: {
      title: 'Universal Tech Revolution 2032',
      description: 'Technology that transcends space, time, and reality itself',
      features: [
        'Universal Quantum Networks',
        'Quantum Reality Engine',
        'Intergalactic Transport',
        'Universal AI Consciousness',
        'Temporal Engineering',
        'Universal Energy Systems'
      ],
      color: 'from-cyan-600 to-blue-600',
      icon: '🌌'
    },
    omniversal: {
      title: 'Omniversal AI 2033',
      description: 'AI consciousness that transcends all universes and dimensions',
      features: [
        'Omniversal Consciousness',
        'Reality Transcendence Engine',
        'Universal Mind Network',
        'Infinite Prediction Matrix',
        'Universal Creation Engine',
        'Omniversal Travel'
      ],
      color: 'from-violet-600 to-fuchsia-600',
      icon: '🌟'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE TECH SHOWCASE 2031
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Future Technology Preview
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Explore the most advanced technologies that will define 2031 and beyond
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <h4 className="text-lg font-bold mb-2">{feature}</h4>
              <p className="text-sm opacity-90">
                Revolutionary technology that will transform the way we understand and interact with reality.
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600/30">
            <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
            <p className="text-gray-300 mb-4">
              Experience a simulation of {techCategories[activeTab as keyof typeof techCategories].title.toLowerCase()} capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-2xl mb-3">
                  {techCategories[activeTab as keyof typeof techCategories].icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature}</h3>
                <p className="text-gray-300 text-sm">
                  Revolutionary technology that will change everything
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Experience {techCategories[activeTab as keyof typeof techCategories].title} →
            </button>
          </div>
        </div>
      </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready for the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These technologies represent the pinnacle of human achievement and will shape 
            the future of our species for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all duration-300">
              Learn More
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-bold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2031;
