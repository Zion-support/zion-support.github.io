import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceTechnology2026: React.FC = () => {
  const [neuralActivity, setNeuralActivity] = useState(75);
  const [interfaceType, setInterfaceType] = useState('non-invasive');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE 2026 • MIND-MACHINE CONNECTION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Neural Interface Technology 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Bridge the gap between mind and machine with our revolutionary neural interface technology. 
              Experience direct brain-computer communication and unlock the full potential of human-AI collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Neural Interfaces
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold">
                Try Neural Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neural Activity Monitor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🧠 Neural Activity Monitor</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience real-time neural activity monitoring and see how our technology interprets brain signals
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Neural Activity Level</h3>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Activity Level: {neuralActivity}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={neuralActivity}
                      onChange={(e) => setNeuralActivity(parseInt(e.target.value))}
                      className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span>Alpha Waves:</span>
                      <span className="text-emerald-400 font-mono">
                        {Math.round(neuralActivity * 0.8)} Hz
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span>Beta Waves:</span>
                      <span className="text-emerald-400 font-mono">
                        {Math.round(neuralActivity * 1.2)} Hz
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span>Gamma Waves:</span>
                      <span className="text-emerald-400 font-mono">
                        {Math.round(neuralActivity * 0.6)} Hz
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Interface Type</h3>
                  <div className="space-y-4 mb-6">
                    {['non-invasive', 'semi-invasive', 'invasive'].map((type) => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="interfaceType"
                          value={type}
                          checked={interfaceType === type}
                          onChange={(e) => setInterfaceType(e.target.value)}
                          className="w-4 h-4 text-emerald-600"
                        />
                        <span className="capitalize">{type.replace('-', ' ')} Interface</span>
                      </label>
                    ))}
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg">
                    <div className="text-sm text-emerald-200 mb-2">Signal Quality</div>
                    <div className="text-2xl font-bold text-emerald-400">
                      {interfaceType === 'non-invasive' ? '85%' : 
                       interfaceType === 'semi-invasive' ? '95%' : '99%'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Neural Activity Visualization */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-center">Real-time Neural Activity</h3>
                <div className="bg-black/50 rounded-lg p-6">
                  <div className="h-32 flex items-end space-x-1">
                    {Array.from({ length: 50 }, (_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-emerald-400 to-teal-400 rounded-sm"
                        style={{
                          height: `${Math.random() * neuralActivity + 10}%`,
                          width: '2px',
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-center mt-4 text-emerald-300 text-sm">
                    Brain signals being processed in real-time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Interface Technologies */}
      <section className="py-20 bg-gradient-to-r from-emerald-800/30 to-teal-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🔬 Neural Interface Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the cutting-edge neural interface technologies that are revolutionizing human-computer interaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Non-Invasive BCI",
                description: "Advanced EEG-based brain-computer interfaces that require no surgery or implants",
                features: ["EEG Sensors", "Real-time Processing", "Wireless Communication", "User-Friendly"]
              },
              {
                icon: "⚡",
                title: "Neural Signal Processing",
                description: "Advanced algorithms that decode and interpret complex neural signals in real-time",
                features: ["Signal Decoding", "Pattern Recognition", "Machine Learning", "Real-time Analysis"]
              },
              {
                icon: "🎯",
                title: "Thought Control",
                description: "Direct control of devices and applications through pure thought and intention",
                features: ["Device Control", "App Navigation", "Text Input", "Gaming Control"]
              },
              {
                icon: "🔄",
                title: "Neural Feedback",
                description: "Bidirectional communication that provides sensory feedback directly to the brain",
                features: ["Sensory Feedback", "Haptic Response", "Visual Feedback", "Audio Integration"]
              },
              {
                icon: "🧬",
                title: "Memory Enhancement",
                description: "Neural interfaces that can enhance memory formation and retrieval processes",
                features: ["Memory Boost", "Learning Acceleration", "Recall Enhancement", "Cognitive Training"]
              },
              {
                icon: "🌐",
                title: "Neural Networks",
                description: "Direct connection between human neural networks and artificial neural networks",
                features: ["AI Integration", "Neural Synchronization", "Enhanced Processing", "Collaborative Intelligence"]
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                <p className="text-emerald-100 mb-6 text-center">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-emerald-200 text-sm flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🚀 Neural Interface Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Revolutionary applications of neural interface technology that are transforming lives and industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Medical Rehabilitation",
                description: "Restore mobility and communication for patients with paralysis or neurological conditions",
                benefits: [
                  "Paralysis recovery",
                  "Speech restoration",
                  "Motor function recovery",
                  "Quality of life improvement"
                ],
                icon: "🏥"
              },
              {
                title: "Gaming & Entertainment",
                description: "Immersive gaming experiences controlled directly by thought and emotion",
                benefits: [
                  "Thought-controlled gaming",
                  "Emotional response gaming",
                  "Virtual reality integration",
                  "Enhanced immersion"
                ],
                icon: "🎮"
              },
              {
                title: "Education & Learning",
                description: "Accelerated learning through direct neural stimulation and memory enhancement",
                benefits: [
                  "Faster learning",
                  "Memory enhancement",
                  "Skill acquisition",
                  "Knowledge retention"
                ],
                icon: "📚"
              },
              {
                title: "Workplace Productivity",
                description: "Enhanced productivity through direct brain-computer interaction and cognitive augmentation",
                benefits: [
                  "Hands-free computing",
                  "Multi-tasking enhancement",
                  "Decision support",
                  "Cognitive augmentation"
                ],
                icon: "💼"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{app.title}</h3>
                <p className="text-emerald-100 mb-6 text-center">{app.description}</p>
                <ul className="space-y-3">
                  {app.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-emerald-200 text-sm flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-emerald-800/30 to-teal-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🏆 Neural Interface Success Stories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real stories of how neural interface technology is transforming lives and creating new possibilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                condition: "Paralysis Recovery",
                result: "Regained Movement",
                description: "After a spinal cord injury, Sarah used our neural interface to regain control of her limbs and walk again",
                icon: "🚶‍♀️"
              },
              {
                name: "Marcus Johnson",
                condition: "Learning Enhancement",
                result: "300% Faster Learning",
                description: "Marcus used neural interface technology to accelerate his learning, mastering new skills 300% faster than traditional methods",
                icon: "🧠"
              },
              {
                name: "Elena Rodriguez",
                condition: "Gaming Innovation",
                result: "Revolutionary Gaming",
                description: "Elena became a professional gamer using thought-controlled gaming, achieving unprecedented levels of immersion and control",
                icon: "🎮"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{story.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-center">{story.name}</h3>
                <div className="text-center mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold">
                    {story.result}
                  </span>
                </div>
                <p className="text-emerald-100 text-center mb-2 text-sm font-medium">{story.condition}</p>
                <p className="text-emerald-200 text-center text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Mind and Machine?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Experience the future of human-computer interaction with our revolutionary neural interface technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Neural Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg">
                Schedule Neural Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeuralInterfaceTechnology2026;