import React from 'react';
import { Helmet } from 'react-helmet-async';

        {/* Case Studies Tab */}
        {activeTab === 'case-studies' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto"></p>
                Real patient outcomes demonstrating the transformative power of neural interface technology</p>
              </p>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{study.patient}</h3>
                  <p className="text-white/80 mb-4 font-semibold">{study.condition}</p>
                  <p className="text-white/70 mb-6">{study.treatment}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></span>
                          <span className="text-white/70">{result}</span>
                        </li>
                      ))}
                    </ul>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-white/60">Timeline: {study.timeline}</span>
                    <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"></button>
                      Full Story</button>
                    </button>
              ))}
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Begin Your Neural Journey</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto"></p>
                Ready to explore the possibilities of neural interface technology? </p>
                Let's discuss how it can transform your life or business.</p>
              </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📧</span>
                    <span>neural@ziontechgroup.com</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📞</span>
                    <span>+1 (555) 123-4567</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌐</span>
                    <span>www.ziontechgroup.com/neural</span>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Request Consultation</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <select className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="">Select Interest Area</option>
                    <option value="medical">Medical Applications</option>
                    <option value="gaming">Gaming & Entertainment</option>
                    <option value="communication">Communication</option>
                    <option value="enhancement">Human Enhancement</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  ></button>
                    Request Consultation</button>
                  </button>
                </form>
        )}
      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect Mind and Machine?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"></p>
              Join the neural interface revolution and unlock the full potential of human-computer interaction</p>
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-800 to-cyan-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">High-Speed Neural Link</h3>
            <p className="text-gray-300">
              Ultra-fast neural data transmission with latency under 1 millisecond for real-time control.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Precision Control</h3>
            <p className="text-gray-300">
              Control devices with thought alone with 99.9% accuracy and sub-millimeter precision.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-800 to-orange-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">💭</div>
            <h3 className="text-2xl font-bold mb-4">Thought Communication</h3>
            <p className="text-gray-300">
              Direct thought-to-thought communication between individuals and AI systems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-800 to-pink-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-4">Immersive Gaming</h3>
            <p className="text-gray-300">
              Complete virtual reality control through neural signals for ultimate gaming experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Medical Applications</h3>
            <p className="text-gray-300">
              Restore movement and communication for people with paralysis and neurological conditions.
            </p>
          </div>
        </div>

        {/* Technology Specifications */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technology Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6">Neural Interface Specs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Signal Resolution</span>
                  <span className="text-white font-bold">1024 channels</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Sampling Rate</span>
                  <span className="text-white font-bold">10,000 Hz</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Latency</span>
                  <span className="text-white font-bold">&lt; 1ms</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Accuracy</span>
                  <span className="text-white font-bold">99.9%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Capabilities</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Thought Recognition</span>
                  <span className="text-white font-bold">1000+ commands</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Emotion Detection</span>
                  <span className="text-white font-bold">Real-time</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Memory Enhancement</span>
                  <span className="text-white font-bold">10x capacity</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Learning Speed</span>
                  <span className="text-white font-bold">1000x faster</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-900 to-blue-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Consumer Applications</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Smart home control</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Virtual reality gaming</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Augmented reality navigation</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Digital communication</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Applications</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✓</span>
                <span>Medical diagnostics</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✓</span>
                <span>Engineering design</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✓</span>
                <span>Scientific research</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✓</span>
                <span>Space exploration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-400 to-cyan-500 text-black px-8 py-4 rounded-full text-xl font-bold inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">
            Experience Neural Interface →
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>