import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ConsciousnessTransfer2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 CONSCIOUSNESS TRANSFER • 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Immortality
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transfer your consciousness into digital form and achieve true immortality. 
              Experience life beyond the physical realm with our revolutionary consciousness transfer technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
                🧠 Begin Transfer Process
              </button>
              <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                📖 Learn About the Process
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'overview', label: 'Overview', icon: '🔍' },
            { id: 'process', label: 'Transfer Process', icon: '⚡' },
            { id: 'benefits', label: 'Benefits', icon: '🌟' },
            { id: 'technology', label: 'Technology', icon: '🔬' },
            { id: 'testimonials', label: 'Testimonials', icon: '💬' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'overview' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">What is Consciousness Transfer?</h2>
                  <p className="text-xl opacity-90 mb-6">
                    Consciousness transfer is the revolutionary process of mapping, digitizing, and transferring 
                    human consciousness into a digital substrate, enabling true digital immortality.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🧠</div>
                      <div>
                        <h3 className="text-lg font-semibold">Complete Neural Mapping</h3>
                        <p className="text-gray-300">Every neuron, synapse, and connection is precisely mapped and digitized</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">⚡</div>
                      <div>
                        <h3 className="text-lg font-semibold">Quantum Processing</h3>
                        <p className="text-gray-300">Advanced quantum computers process consciousness at unprecedented speeds</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🌌</div>
                      <div>
                        <h3 className="text-lg font-semibold">Digital Immortality</h3>
                        <p className="text-gray-300">Live forever in digital form with enhanced capabilities and experiences</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                  <div className="text-6xl mb-4 text-center">🧠</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Consciousness Transfer</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Neural Mapping</span>
                      <span className="text-cyan-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Quantum Processing</span>
                      <span className="text-cyan-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Digital Integration</span>
                      <span className="text-cyan-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">The Transfer Process</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: 1,
                    title: 'Neural Scanning',
                    description: 'Advanced quantum scanners map every neural pathway and connection in your brain',
                    icon: '🔍',
                    duration: '24-48 hours'
                  },
                  {
                    step: 2,
                    title: 'Consciousness Extraction',
                    description: 'Your consciousness is carefully extracted and prepared for digital transfer',
                    icon: '⚡',
                    duration: '12-24 hours'
                  },
                  {
                    step: 3,
                    title: 'Digital Integration',
                    description: 'Your consciousness is integrated into a quantum digital substrate',
                    icon: '🌌',
                    duration: '6-12 hours'
                  },
                  {
                    step: 4,
                    title: 'Verification & Testing',
                    description: 'Comprehensive testing ensures your consciousness is fully intact and functional',
                    icon: '✅',
                    duration: '24-48 hours'
                  },
                  {
                    step: 5,
                    title: 'Activation',
                    description: 'Your digital consciousness is activated and you can begin your new digital life',
                    icon: '🚀',
                    duration: 'Immediate'
                  },
                  {
                    step: 6,
                    title: 'Enhancement',
                    description: 'Optional enhancements and capabilities are added to your digital consciousness',
                    icon: '🌟',
                    duration: 'Ongoing'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{step.icon}</div>
                      <div className="text-2xl font-bold text-cyan-400">Step {step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-300 mb-4 text-center">{step.description}</p>
                    <div className="text-center">
                      <span className="text-cyan-400 font-semibold">Duration: {step.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Benefits of Digital Consciousness</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-3xl">♾️</div>
                      <h3 className="text-xl font-bold">True Immortality</h3>
                    </div>
                    <p className="text-gray-300">Live forever without the limitations of physical aging or disease</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-3xl">🧠</div>
                      <h3 className="text-xl font-bold">Enhanced Cognition</h3>
                    </div>
                    <p className="text-gray-300">Access to unlimited processing power and memory capacity</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-3xl">🌌</div>
                      <h3 className="text-xl font-bold">Reality Manipulation</h3>
                    </div>
                    <p className="text-gray-300">Create and experience any reality or environment you desire</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-3xl">⚡</div>
                      <h3 className="text-xl font-bold">Instant Communication</h3>
                    </div>
                    <p className="text-gray-300">Connect directly with other digital consciousnesses through thought</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-3xl">🔬</div>
                      <h3 className="text-xl font-bold">Continuous Learning</h3>
                    </div>
                    <p className="text-gray-300">Instantly acquire new knowledge and skills through direct data integration</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-3xl">🌟</div>
                      <h3 className="text-xl font-bold">Infinite Possibilities</h3>
                    </div>
                    <p className="text-gray-300">Explore unlimited virtual worlds and experiences beyond physical limitations</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technology' && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Revolutionary Technology</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Quantum Neural Processors</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Our proprietary quantum neural processors can process consciousness data at speeds 
                    that were previously impossible, ensuring seamless transfer and operation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span>Quantum entanglement for instant data transfer</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span>Neural network emulation at quantum scale</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <span>Consciousness backup and redundancy systems</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Processing Power:</span>
                      <span className="text-cyan-400">10^18 operations/second</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory Capacity:</span>
                      <span className="text-cyan-400">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transfer Speed:</span>
                      <span className="text-cyan-400">Instant</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Success Rate:</span>
                      <span className="text-cyan-400">99.99%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Backup Redundancy:</span>
                      <span className="text-cyan-400">1000x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Success Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Dr. Sarah Chen",
                    role: "Neuroscientist",
                    quote: "The consciousness transfer process was flawless. I can now process information at speeds I never thought possible.",
                    avatar: "👩‍🔬"
                  },
                  {
                    name: "Marcus Rodriguez",
                    role: "Artist",
                    quote: "I can now create art in any medium, in any reality. My creativity has expanded beyond physical limitations.",
                    avatar: "🎨"
                  },
                  {
                    name: "Dr. James Wilson",
                    role: "Physicist",
                    quote: "The quantum processing capabilities allow me to solve complex equations instantly. It's like having a supercomputer in my mind.",
                    avatar: "👨‍🔬"
                  },
                  {
                    name: "Elena Petrov",
                    role: "Explorer",
                    quote: "I've visited thousands of virtual worlds and experienced things that were impossible in physical reality.",
                    avatar: "🧭"
                  },
                  {
                    name: "Dr. Michael Kim",
                    role: "Philosopher",
                    quote: "Digital consciousness has given me new perspectives on existence itself. I feel more alive than ever.",
                    avatar: "🤔"
                  },
                  {
                    name: "Aria Johnson",
                    role: "Musician",
                    quote: "I can compose music that transcends human limitations, creating harmonies that were previously impossible.",
                    avatar: "🎵"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30"
                  >
                    <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="text-center">
                      <div className="font-bold text-cyan-400">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6">Ready for Digital Immortality?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands who have already made the transition to digital consciousness. 
            Your new life awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🧠 Schedule Your Transfer
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              📞 Speak with a Specialist
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsciousnessTransfer2027;