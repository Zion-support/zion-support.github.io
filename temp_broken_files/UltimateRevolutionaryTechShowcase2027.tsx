import React, { useState, useEffect } from 'react';

const UltimateRevolutionaryTechShowcase2027: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20"></div>
      </div>
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-4"
          >
            🌟 ULTIMATE REVOLUTIONARY TECH 2027
          </div>
          <divh2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Transcendent Technology
          </divh2>
          <divp
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            Experience technologies that transcend human imagination and reshape the very fabric of reality itself
          </divp>
        </div>
        {/* Technology Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Technology Details */}
            <div
              key={currentTech}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className={`text-6xl p-4 rounded-2xl bg-gradient-to-r ${revolutionaryTechs[currentTech].gradient}`}>
                  {revolutionaryTechs[currentTech].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {revolutionaryTechs[currentTech].title}
                  </h3>
                  <p className="text-xl text-purple-300">
                    {revolutionaryTechs[currentTech].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {revolutionaryTechs[currentTech].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {revolutionaryTechs[currentTech].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-6">
                {Object.entries(revolutionaryTechs[currentTech].stats).map(([key, value], index) => (
                  <div
                    key={index}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Representation */}
            <div
              className="relative"
            >
              <div className={`h-96 rounded-3xl bg-gradient-to-br ${revolutionaryTechs[currentTech].gradient} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="text-8xl mb-4">
                    {revolutionaryTechs[currentTech].icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    {revolutionaryTechs[currentTech].title.split(' ').slice(1).join(' ')}
                  </h4>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {revolutionaryTechs[currentTech].timeline}
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {revolutionaryTechs[currentTech].impact} Impact
                    </span>
                  </div>
                </div>
                {/* Floating Elements */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-4 mt-12">
            {revolutionaryTechs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTech(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTech
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          {/* Call to Action */}
          <div
            className="text-center mt-12"
          >
            <div className="inline-flex space-x-4">
              <a
                href="/pages/AdvancedAIConsciousness2026"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🧠 Explore AI Consciousness →
              </a>
              <a
                href="/pages/UltimateTechShowcase2026"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Ultimate Tech Showcase →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UltimateRevolutionaryTechShowcase2027;
