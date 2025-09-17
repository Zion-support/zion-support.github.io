import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  const [activeInterface, setActiveInterface] = useState('non-invasive');
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(Math.random() * 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const interfaceTypes = [
    {
      type: "Non-Invasive BCI",
      description: "Advanced EEG and fNIRS technology for seamless brain-computer interaction",
      icon: "🧠",
      features: ["No surgery required", "Real-time processing", "High accuracy", "Portable design"],
      applications: ["Gaming", "Medical rehabilitation", "Communication", "Entertainment"]
    },
    {
      type: "Invasive Neural Implant",
      description: "Microelectrode arrays for direct neural signal recording and stimulation",
      icon: "🔬",
      features: ["Direct neural access", "Ultra-high resolution", "Bidirectional communication", "Long-term stability"],
      applications: ["Paralysis treatment", "Memory enhancement", "Sensory restoration", "Cognitive augmentation"]
    },
    {
      type: "Optogenetics Interface",
      description: "Light-based neural control using genetically modified neurons",
      icon: "💡",
      features: ["Precise cell targeting", "Temporal control", "Reversible effects", "Minimal invasiveness"],
      applications: ["Research", "Therapy", "Behavioral control", "Disease treatment"]
    },
    {
      type: "Quantum Neural Link",
      description: "Quantum-enhanced neural interfaces for unprecedented data transfer",
      icon: "⚡",
      features: ["Quantum entanglement", "Instantaneous transfer", "Unhackable security", "Infinite bandwidth"],
      applications: ["Telepathy", "Shared consciousness", "Remote control", "Neural cloud computing"]
    }
  ];

  const neuralCapabilities = [
    {
      capability: "Thought Control",
      description: "Control devices and applications with pure thought",
      accuracy: "99.7%",
      latency: "< 50ms",
      color: "from-purple-500 to-pink-500"
    },
    {
      capability: "Memory Enhancement",
      description: "Augment human memory with digital storage and retrieval",
      accuracy: "100%",
      latency: "Instant",
      color: "from-blue-500 to-cyan-500"
    },
    {
      capability: "Sensory Augmentation",
      description: "Add new senses and enhance existing ones",
      accuracy: "98.5%",
      latency: "< 20ms",
      color: "from-green-500 to-emerald-500"
    },
    {
      capability: "Emotional Regulation",
      description: "Monitor and regulate emotional states in real-time",
      accuracy: "96.2%",
      latency: "< 100ms",
      color: "from-orange-500 to-red-500"
    }
  ];

  const applications = [
    {
      category: "Medical",
      title: "Paralysis Recovery",
      description: "Restore movement to paralyzed patients through neural bypass technology",
      impact: "10,000+ patients treated",
      icon: "🏥"
    },
    {
      category: "Entertainment",
      title: "Immersive Gaming",
      description: "Control games with thoughts and experience virtual reality through neural input",
      impact: "Revolutionary gaming experience",
      icon: "🎮"
    },
    {
      category: "Communication",
      title: "Silent Speech",
      description: "Communicate without speaking through direct thought-to-text conversion",
      impact: "Break language barriers",
      icon: "💬"
    },
    {
      category: "Education",
      title: "Knowledge Transfer",
      description: "Direct knowledge upload and skill acquisition through neural interfaces",
      impact: "Instant learning",
      icon: "📚"
    },
    {
      category: "Workplace",
      title: "Enhanced Productivity",
      description: "Control multiple systems simultaneously through neural multitasking",
      impact: "10x productivity increase",
      icon: "💼"
    },
    {
      category: "Space",
      title: "Space Communication",
      description: "Maintain communication across vast distances using quantum neural links",
      impact: "Enable deep space missions",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 BREAKTHROUGH 2026 • NEURAL INTERFACE REVOLUTION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Bridge the gap between mind and machine with the most advanced neural interface technology ever created. 
              Control the digital world with your thoughts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsConnected(!isConnected)}
                className={`px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold ${
                  isConnected 
                    ? 'bg-gradient-to-r from-red-600 to-pink-600' 
                    : 'bg-gradient-to-r from-emerald-600 to-cyan-600'
                }`}
              >
                {isConnected ? 'Disconnect Neural Link' : 'Connect Neural Interface →'}
              </button>
              <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors">
                Try Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neural Activity Visualization */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🧠 Real-Time Neural Activity</h2>
          <p className="text-xl opacity-80">Monitor brain activity in real-time</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-2">Neural Activity</h3>
                <div className="w-full bg-emerald-900/30 rounded-full h-4 mb-2">
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-4 rounded-full"
                    style={{ width: `${neuralActivity}%` }}
                    animate={{ width: `${neuralActivity}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <p className="text-emerald-200">{neuralActivity.toFixed(1)}%</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold mb-2">Connection Status</h3>
                <p className={`text-2xl font-bold ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
                  {isConnected ? 'CONNECTED' : 'DISCONNECTED'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">📡</div>
                <h3 className="text-2xl font-bold mb-2">Signal Quality</h3>
                <p className="text-emerald-200">99.8% Clear</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interface Types */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🔬 Neural Interface Types</h2>
          <p className="text-xl opacity-80">Choose the perfect interface for your needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interfaceTypes.map((interfaceType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeInterface === interfaceType.type.toLowerCase().replace(' ', '-') ? 'ring-2 ring-emerald-400' : ''
              }`}
              onClick={() => setActiveInterface(interfaceType.type.toLowerCase().replace(' ', '-'))}
            >
              <div className="text-6xl mb-4 text-center">{interfaceType.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{interfaceType.type}</h3>
              <p className="text-emerald-100 mb-6 text-center">{interfaceType.description}</p>
              <div className="space-y-2 mb-6">
                {interfaceType.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="text-sm text-emerald-300">
                <strong>Applications:</strong> {interfaceType.applications.join(', ')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Neural Capabilities */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Neural Capabilities</h2>
          <p className="text-xl opacity-80">Unprecedented brain-computer integration</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {neuralCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{capability.capability}</h3>
              <p className="text-emerald-100 mb-6 text-center">{capability.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Accuracy:</span>
                  <span className={`font-bold bg-gradient-to-r ${capability.color} bg-clip-text text-transparent`}>
                    {capability.accuracy}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Latency:</span>
                  <span className={`font-bold bg-gradient-to-r ${capability.color} bg-clip-text text-transparent`}>
                    {capability.latency}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🌟 Revolutionary Applications</h2>
          <p className="text-xl opacity-80">Transforming every aspect of human life</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((application, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{application.icon}</div>
                <div className="flex-1">
                  <div className="text-sm text-emerald-300 mb-2">{application.category}</div>
                  <h3 className="text-xl font-bold mb-3">{application.title}</h3>
                  <p className="text-emerald-100 mb-4">{application.description}</p>
                  <div className="text-sm font-semibold text-cyan-300">{application.impact}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Safety and Ethics */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🛡️ Safety & Ethics</h2>
          <p className="text-xl opacity-80">Your safety and privacy are our top priorities</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold mb-6">Safety Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Neural Safety Protocols:</strong> Advanced monitoring prevents neural damage
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Emergency Disconnect:</strong> Instant disconnection in case of issues
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Signal Filtering:</strong> Advanced algorithms prevent harmful signals
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Medical Supervision:</strong> Continuous monitoring by neural specialists
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold mb-6">Privacy & Ethics</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Neural Privacy:</strong> Your thoughts remain completely private
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Consent Framework:</strong> Full control over what data is shared
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Ethical Guidelines:</strong> Strict adherence to neural interface ethics
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Transparent AI:</strong> Complete transparency in AI decision-making
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">🌟 Ready to Connect Your Mind?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Experience the future of human-computer interaction. Connect your mind to the digital world 
            and unlock capabilities you never thought possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Neural Interface Journey →
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;