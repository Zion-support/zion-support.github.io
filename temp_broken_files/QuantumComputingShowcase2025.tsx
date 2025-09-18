"use client";
import React{ useState } from 'react';
AtomZapCpuShieldTargetTrendingUpArrowRightPlayPause
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const QuantumComputingShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm mb-6">
            QUANTUM REVOLUTION 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Quantum Computing Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of computing with our revolutionary quantum solutions that transcend classical limitations and unlock infinite possibilities.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {quantumSolutions.map((solutionindex) => (
              <button
                key={solution.id}
                onClick={() => {
                  setActiveTab(index);
                  setIsAnimating(true);
                  setTimeout(() => setIsAnimating(false)500);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${solution.gradient} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {solution.title}
              </button>
            ))}
          </div>
          {/* Tab Content */}
            <div
              key={activeTab}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${quantumSolutions[activeTab].gradient} text-white font-bold text-sm mb-6`}>
                    {quantumSolutions[activeTab].subtitle}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {quantumSolutions[activeTab].title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {quantumSolutions[activeTab].description}
                  </p>
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
                    {quantumSolutions[activeTab].features.map((featureidx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Benefits:</h3>
                    {quantumSolutions[activeTab].benefits.map((benefitidx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/contact">
                    <button
                      className={`bg-gradient-to-r ${quantumSolutions[activeTab].gradient} hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </a>
                </div>
                {/* Visual */}
                <div className="relative">
                  <div
                    className={`p-16 rounded-3xl bg-gradient-to-br ${quantumSolutions[activeTab].gradient} shadow-2xl text-center`}
                  >
                    <quantumSolutions[activeTab].icon className="w-32 h-32 text-white mx-auto mb-6" />
                    {/* Quantum Animation */}
                    <div className="relative">
                      {[...Array(8)].map((_i) => (
                        <div
                          key={i}
                          className="absolute w-4 h-4 bg-white/30 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                            transformOrigin: '0 0',
                          }}
                            rotate: [0360],
                            scale: [1.51],
                          }}
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                          y: [0-30],
                          opacity: [010],
                        }}
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Use Cases Section */}
        <div
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCaseindex) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <useCase.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{useCase.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-3xl p-16 border border-white/10"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unprecedented computational capabilities that will transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact">
              <button
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
              >
                Schedule Quantum Consultation
                <ArrowRight className="w-6 h-6" />
              </button>
            </a>
            <a href="/quantum-computing-2025">
              <button
                className="border border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-lg"
              >
                Learn More About Quantum
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default QuantumComputingShowcase2025;
</div></div></div></div>