import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NeuralInterfaceFuture: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-full text-sm font-semibold mb-6">
            🧬 NEURAL INTERFACE BREAKTHROUGH 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Neural Interface Technology
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Bridge the gap between mind and machine with direct neural interfaces that enable 
            thought-controlled devices, enhanced cognitive abilities, and seamless human-AI collaboration.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Neural Interfaces
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-900 transition-colors">
              Watch Neural Demo
            </button>
          </div>
        </div>

        {/* Neural Interface Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Non-Invasive BCI</h3>
            <p className="text-gray-300 mb-6">
              Advanced brain-computer interfaces using EEG, fNIRS, and other non-invasive methods 
              to read neural signals without surgery.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• EEG-based control systems</li>
              <li>• Optical neural imaging</li>
              <li>• Magnetic field detection</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Thought Control</h3>
            <p className="text-gray-300 mb-6">
              Direct neural control of devices, prosthetics, and digital interfaces 
              through decoded brain signals and machine learning algorithms.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Prosthetic limb control</li>
              <li>• Computer interface navigation</li>
              <li>• Communication assistance</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold text-white mb-4">Neural Feedback</h3>
            <p className="text-gray-300 mb-6">
              Bidirectional neural interfaces that can both read from and write to the brain, 
              enabling enhanced learning and cognitive augmentation.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Memory enhancement</li>
              <li>• Learning acceleration</li>
              <li>• Cognitive restoration</li>
            </ul>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Neural Interface Applications</h2>
            <p className="text-xl text-teal-100">Transforming lives through direct brain-computer interaction</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">♿</div>
              <h4 className="text-lg font-semibold text-white mb-2">Accessibility</h4>
              <p className="text-teal-100 text-sm">Enabling communication and control for people with disabilities</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎮</div>
              <h4 className="text-lg font-semibold text-white mb-2">Gaming & VR</h4>
              <p className="text-teal-100 text-sm">Immersive virtual reality experiences controlled by thought</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg font-semibold text-white mb-2">Healthcare</h4>
              <p className="text-teal-100 text-sm">Neurological rehabilitation and cognitive enhancement</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-lg font-semibold text-white mb-2">Space Exploration</h4>
              <p className="text-teal-100 text-sm">Controlling spacecraft and robots through neural signals</p>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neural Interface Technologies</h2>
            <p className="text-xl text-gray-600">Comparing different approaches to brain-computer interfaces</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Invasive</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">No surgery required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Lower risk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">Limited resolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">External equipment</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Best for: Gaming, basic control, research applications</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Invasive</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">High resolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Precise control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Surgical risk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Biocompatibility challenges</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Best for: Medical applications, prosthetics, research</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Balanced approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Good resolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">Moderate complexity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Versatile applications</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Best for: Consumer devices, enhanced interfaces</p>
            </div>
          </div>
        </div>

        {/* Future Timeline */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Neural Interface Timeline</h2>
            <p className="text-xl text-emerald-100">The evolution of brain-computer interfaces</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2025
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Consumer BCI</h4>
              <p className="text-emerald-100 text-sm">First consumer neural interfaces for gaming and basic control</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2027
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Medical Breakthrough</h4>
              <p className="text-emerald-100 text-sm">FDA-approved neural interfaces for medical applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2030
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Cognitive Enhancement</h4>
              <p className="text-emerald-100 text-sm">Neural interfaces for memory enhancement and learning acceleration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2035
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Mind Uploading</h4>
              <p className="text-emerald-100 text-sm">First attempts at digital consciousness transfer</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-300">BCI Users by 2030</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$5.4B</div>
            <div className="text-gray-300">Neural Interface Market</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10ms</div>
            <div className="text-gray-300">Response Time</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Connect Mind and Machine?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the neural interface revolution with Zion Tech Group's cutting-edge brain-computer interface solutions. 
            Experience the future of human-machine interaction today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Neural Journey
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-colors text-lg">
              Explore BCI Solutions
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NeuralInterfaceFuture;