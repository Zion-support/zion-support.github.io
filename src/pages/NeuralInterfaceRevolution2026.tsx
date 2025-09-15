import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of human-computer interaction with direct brain-computer interfaces 
              that enable seamless communication between mind and machine
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Technology →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🧠 Revolutionary Neural Technology</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Breakthrough neural interface technology that enables direct communication between the human brain and computers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Non-Invasive BCI",
              description: "Advanced brain-computer interfaces that don't require surgery",
              icon: "🧠",
              features: ["EEG Technology", "Real-time Processing", "High Accuracy", "User-Friendly"]
            },
            {
              title: "Thought Control",
              description: "Control devices and applications using only your thoughts",
              icon: "💭",
              features: ["Device Control", "Text Input", "Navigation", "Gaming"]
            },
            {
              title: "Neural Feedback",
              description: "Real-time feedback to enhance cognitive performance",
              icon: "🔄",
              features: ["Performance Monitoring", "Cognitive Training", "Memory Enhancement", "Focus Improvement"]
            },
            {
              title: "Medical Applications",
              description: "Restoring mobility and communication for patients",
              icon: "🏥",
              features: ["Paralysis Treatment", "Speech Restoration", "Motor Control", "Sensory Recovery"]
            },
            {
              title: "Augmented Reality",
              description: "Seamless integration with AR and VR environments",
              icon: "🥽",
              features: ["AR Integration", "VR Control", "Immersive Experience", "Hands-Free Operation"]
            },
            {
              title: "AI Integration",
              description: "Combining neural interfaces with artificial intelligence",
              icon: "🤖",
              features: ["AI Assistance", "Predictive Control", "Learning Adaptation", "Smart Automation"]
            }
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-white/90 mb-6 text-center">{tech.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gradient-to-r from-emerald-800/30 to-cyan-800/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🚀 Real-World Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how neural interface technology is transforming industries and improving lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  application: "Healthcare",
                  description: "Restoring mobility and communication for patients with neurological conditions",
                  impact: "95% improvement in quality of life"
                },
                {
                  application: "Education",
                  description: "Enhanced learning through direct brain-computer interaction",
                  impact: "3x faster learning rates"
                },
                {
                  application: "Entertainment",
                  description: "Immersive gaming and entertainment experiences",
                  impact: "Revolutionary user experience"
                },
                {
                  application: "Workplace",
                  description: "Hands-free operation of complex systems and machinery",
                  impact: "50% increase in productivity"
                }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-bold mb-2">{app.application}</h3>
                  <p className="text-white/90 mb-3">{app.description}</p>
                  <div className="text-emerald-300 font-semibold">{app.impact}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Technology Timeline</h3>
              <div className="space-y-6">
                {[
                  { year: "2024", milestone: "First non-invasive BCI prototype" },
                  { year: "2025", milestone: "Clinical trials begin" },
                  { year: "2026", milestone: "Commercial release" },
                  { year: "2027", milestone: "Mass adoption begins" },
                  { year: "2028", milestone: "Full integration with AR/VR" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                    <div>
                      <div className="font-semibold">{item.milestone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold mb-4">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the neural interface revolution and discover how this technology can transform your life
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Try Neural Interface →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;