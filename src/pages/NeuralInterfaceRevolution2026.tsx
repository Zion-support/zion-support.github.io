import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  const [activeInterface, setActiveInterface] = useState(0);

  const neuralInterfaces = [
    {
      title: "Non-Invasive BCI",
      description: "Direct brain-computer communication without surgery",
      icon: "🧠",
      features: ["EEG-based control", "Thought recognition", "Mental commands", "Real-time feedback"],
      applications: ["Gaming", "Accessibility", "Medical rehabilitation", "Cognitive enhancement"],
      status: "Available Now"
    },
    {
      title: "Invasive Neural Implants",
      description: "Surgical implants for high-precision neural control",
      icon: "🔬",
      features: ["Micro-electrode arrays", "High-resolution signals", "Bidirectional communication", "Long-term stability"],
      applications: ["Paralysis treatment", "Memory restoration", "Sensory replacement", "Motor control"],
      status: "Clinical Trials"
    },
    {
      title: "Optogenetics Interface",
      description: "Light-based neural control using genetic modification",
      icon: "💡",
      features: ["Precise cell targeting", "Temporal control", "Minimal invasiveness", "Reversible activation"],
      applications: ["Research", "Therapy", "Behavioral modification", "Neural mapping"],
      status: "Research Phase"
    },
    {
      title: "Magnetic Stimulation",
      description: "Non-invasive neural stimulation using magnetic fields",
      icon: "🧲",
      features: ["Focused stimulation", "No surgery required", "Temporary effects", "Safe operation"],
      applications: ["Depression treatment", "Memory enhancement", "Pain management", "Cognitive training"],
      status: "FDA Approved"
    },
    {
      title: "Ultrasound Interface",
      description: "Focused ultrasound for deep brain stimulation",
      icon: "🌊",
      features: ["Deep penetration", "High precision", "Non-invasive", "Reversible"],
      applications: ["Parkinson's treatment", "Epilepsy control", "Mood regulation", "Memory enhancement"],
      status: "Clinical Trials"
    },
    {
      title: "Hybrid Neural Systems",
      description: "Combination of multiple interface technologies",
      icon: "🔗",
      features: ["Multi-modal input", "Enhanced accuracy", "Redundancy", "Adaptive learning"],
      applications: ["Advanced prosthetics", "Virtual reality", "AI integration", "Human augmentation"],
      status: "Development"
    }
  ];

  const applications = [
    {
      category: "Medical & Healthcare",
      icon: "🏥",
      useCases: [
        "Paralysis rehabilitation",
        "Memory restoration",
        "Depression treatment",
        "Epilepsy control",
        "Chronic pain management"
      ],
      impact: "Transforming healthcare outcomes"
    },
    {
      category: "Accessibility & Inclusion",
      icon: "♿",
      useCases: [
        "Wheelchair control",
        "Communication devices",
        "Visual prosthetics",
        "Hearing restoration",
        "Mobility assistance"
      ],
      impact: "Enabling independence for millions"
    },
    {
      category: "Gaming & Entertainment",
      icon: "🎮",
      useCases: [
        "Mind-controlled games",
        "Virtual reality immersion",
        "Emotional gaming",
        "Telepathic multiplayer",
        "Immersive storytelling"
      ],
      impact: "Revolutionizing entertainment"
    },
    {
      category: "Education & Learning",
      icon: "🎓",
      useCases: [
        "Accelerated learning",
        "Memory enhancement",
        "Language acquisition",
        "Skill transfer",
        "Cognitive training"
      ],
      impact: "Transforming how we learn"
    },
    {
      category: "Workplace & Productivity",
      icon: "💼",
      useCases: [
        "Hands-free computing",
        "Mental typing",
        "Data visualization",
        "Remote collaboration",
        "Cognitive augmentation"
      ],
      impact: "Enhancing human capabilities"
    },
    {
      category: "Military & Defense",
      icon: "🛡️",
      useCases: [
        "Pilot control systems",
        "Squad communication",
        "Threat detection",
        "Decision support",
        "Human-machine teams"
      ],
      impact: "Advancing defense capabilities"
    }
  ];

  const caseStudies = [
    {
      patient: "Sarah Chen",
      condition: "Spinal cord injury",
      solution: "Non-invasive BCI for wheelchair control",
      results: "Regained independence, returned to work",
      timeline: "6 months"
    },
    {
      patient: "Marcus Johnson",
      condition: "Severe depression",
      solution: "Magnetic stimulation therapy",
      results: "90% reduction in symptoms, medication-free",
      timeline: "3 months"
    },
    {
      patient: "Elena Rodriguez",
      condition: "Memory loss from stroke",
      solution: "Neural interface memory training",
      results: "80% memory function restored",
      timeline: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-24 h-24 bg-emerald-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-teal-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse delay-2000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION 2026 • MIND-MACHINE FUSION
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Neural Interface Revolution
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Bridge the gap between mind and machine with revolutionary neural interfaces that enable direct brain-computer communication and human augmentation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Neural Interfaces →
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neural Interface Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🧠 Neural Interface Technologies</h2>
            <p className="text-xl text-gray-600">Explore the different types of neural interfaces available</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neuralInterfaces.map((interface_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  activeInterface === index ? 'ring-2 ring-emerald-500 scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setActiveInterface(index)}
              >
                <div className="text-6xl mb-4 text-center">{interface_.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{interface_.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{interface_.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {interface_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <ul className="space-y-1">
                    {interface_.applications.map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {app}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`rounded-lg p-3 text-center ${
                  interface_.status === 'Available Now' ? 'bg-green-100 text-green-700' :
                  interface_.status === 'FDA Approved' ? 'bg-blue-100 text-blue-700' :
                  interface_.status === 'Clinical Trials' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  <span className="text-sm font-semibold">{interface_.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications by Category */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Applications by Category</h2>
            <p className="text-xl text-gray-600">Discover how neural interfaces are transforming different industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{app.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {app.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-4 text-center">
                  <span className="text-sm font-semibold text-emerald-700">{app.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
            <p className="text-xl opacity-90">Real people, real results from neural interface technology</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{study.patient}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Condition:</h4>
                  <p className="text-sm opacity-80">{study.condition}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-sm opacity-80">{study.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <p className="text-sm opacity-80">{study.results}</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 border border-green-400/30">
                  <span className="text-sm font-semibold text-green-300">Timeline: {study.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Why Neural Interfaces?</h2>
            <p className="text-xl text-gray-600">Unlock the full potential of human-machine collaboration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🧠", title: "Direct Communication", description: "Control devices with your thoughts" },
              { icon: "♿", title: "Accessibility", description: "Restore independence for people with disabilities" },
              { icon: "⚡", title: "Speed", description: "Faster than traditional input methods" },
              { icon: "🔮", title: "Future-Ready", description: "Prepare for the next generation of computing" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Mind and Machine?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the neural interface revolution and discover how direct brain-computer communication can transform your life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;