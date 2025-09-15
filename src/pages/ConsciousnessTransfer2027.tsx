import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ConsciousnessTransfer2027: React.FC = () => {
  const [selectedTransfer, setSelectedTransfer] = useState<string | null>(null);

  const transferTypes = [
    {
      id: 'digital',
      title: 'Digital Consciousness Transfer',
      description: 'Transfer your consciousness into digital substrates for immortality and enhanced capabilities',
      icon: '💾',
      features: ['Immortal digital existence', 'Enhanced processing power', 'Instant backup and restoration', 'Multi-dimensional awareness']
    },
    {
      id: 'quantum',
      title: 'Quantum Consciousness Transfer',
      description: 'Transfer consciousness through quantum entanglement for instantaneous communication across space-time',
      icon: '⚛️',
      features: ['Instantaneous transfer', 'Quantum superposition states', 'Temporal consciousness', 'Universal connectivity']
    },
    {
      id: 'synthetic',
      title: 'Synthetic Body Transfer',
      description: 'Transfer consciousness into advanced synthetic bodies with enhanced physical capabilities',
      icon: '🤖',
      features: ['Enhanced physical abilities', 'Customizable form', 'Disease immunity', 'Extended lifespan']
    },
    {
      id: 'collective',
      title: 'Collective Consciousness',
      description: 'Merge consciousness with others to form collective intelligence and shared experiences',
      icon: '🧠',
      features: ['Shared knowledge', 'Collective problem solving', 'Enhanced creativity', 'Emotional resonance']
    }
  ];

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
              Transcend Physical Limitations
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Break free from the constraints of biological existence. Transfer your consciousness 
              into digital, quantum, or synthetic substrates and experience true immortality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                🚀 Begin Transfer Process
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                🧠 Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transfer Types Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Transfer Method
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the consciousness transfer method that best suits your goals and aspirations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {transferTypes.map((transfer, index) => (
            <motion.div
              key={transfer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                selectedTransfer === transfer.id ? 'ring-2 ring-cyan-400' : ''
              }`}
              onClick={() => setSelectedTransfer(transfer.id)}
            >
              <div className="text-6xl mb-4 text-center">{transfer.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{transfer.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{transfer.description}</p>
              <ul className="text-purple-200 space-y-2 mb-6 text-sm">
                {transfer.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Select This Method →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Overview */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            The Transfer Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advanced consciousness transfer process ensures complete preservation of your identity and memories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Consciousness Mapping',
              description: 'Complete neural mapping and consciousness analysis',
              icon: '🧠'
            },
            {
              step: '02',
              title: 'Identity Preservation',
              description: 'Secure backup and verification of all memories and personality traits',
              icon: '💾'
            },
            {
              step: '03',
              title: 'Transfer Execution',
              description: 'Safe transfer to selected substrate with real-time monitoring',
              icon: '⚡'
            },
            {
              step: '04',
              title: 'Integration & Verification',
              description: 'Complete integration and verification of successful transfer',
              icon: '✅'
            }
          ].map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                {step.icon}
              </div>
              <div className="text-cyan-400 font-bold text-sm mb-2">STEP {step.step}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Safety & Ethics */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Safety & Ethical Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our consciousness transfer technology adheres to the highest safety and ethical standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">100% Safe</h3>
              <p className="text-gray-300 text-sm">
                Advanced safety protocols ensure zero risk of consciousness loss or corruption
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-2">Ethically Approved</h3>
              <p className="text-gray-300 text-sm">
                All procedures are approved by international consciousness ethics boards
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Privacy Protected</h3>
              <p className="text-gray-300 text-sm">
                Your consciousness data is encrypted and protected with military-grade security
              </p>
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

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transcend?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards immortality and enhanced consciousness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsciousnessTransfer2027;