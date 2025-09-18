import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2037: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2037
          </div>
          <h1 className="text-6xl font-bold mb-6">🚀 Revolutionary Tech Showcase 2037</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Interactive showcase of cutting-edge technologies that will define the future of humanity
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Showcase →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
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
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Manipulate Reality
                </button>
              </div>
            </div>
          </div>

          {/* Quantum Neural Interface */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h2 className="text-3xl font-bold mb-4 text-center">Quantum Neural Interface</h2>
            <p className="text-cyan-100 mb-6 text-center text-lg">
              Direct brain-computer interface with quantum computing systems for enhanced cognition
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Neural Enhancement</h3>
                <p className="text-sm opacity-80">Amplify your cognitive abilities by 10,000x</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Quantum Processing</h3>
                <p className="text-sm opacity-80">Access infinite computational power through your mind</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Reality Manipulation</h3>
                <p className="text-sm opacity-80">Control physical reality through quantum mechanics</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-3 px-6 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Connect Interface →
              </button>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-semibold mb-2">Dimensional Portal</h3>
              <p className="text-sm opacity-80 mb-4">Explore interdimensional computing</p>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Enter Portal
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90">Join us in exploring the most advanced technologies ever created</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Experience
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2037;