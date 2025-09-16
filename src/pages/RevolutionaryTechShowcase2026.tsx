import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const showcaseItems = [
    {
      id: 1,
      title: "Conscious AI Assistant",
      description: "Meet our AI that thinks, feels, and creates like a human",
      category: "AI Consciousness",
      icon: "🧠",
      demo: "conscious-ai",
      features: [
        "Emotional Intelligence",
        "Creative Problem Solving",
        "Self-Reflection",
        "Ethical Decision Making"
      ]
    },
    {
      id: 2,
      title: "Quantum Neural Processor",
      description: "Experience quantum-speed computing with neural networks",
      category: "Quantum Computing",
      icon: "⚡",
      demo: "quantum-neural",
      features: [
        "Exponential Processing",
        "Quantum Entanglement",
        "Parallel Processing",
        "Instant Learning"
      ]
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      description: "Control digital worlds with your thoughts",
      category: "Neural Interfaces",
      icon: "🧬",
      demo: "neural-interface",
      features: [
        "Thought Control",
        "Sensory Immersion",
        "Memory Transfer",
        "Consciousness Upload"
      ]
    },
    {
      id: 4,
      title: "Interdimensional Portal",
      description: "Access computing power across multiple dimensions",
      category: "Interdimensional Tech",
      icon: "🌌",
      demo: "interdimensional",
      features: [
        "Multi-Dimensional Access",
        "Reality Manipulation",
        "Time Dilation",
        "Parallel Universe Computing"
      ]
    }
  ];

  const interactiveDemos = [
    {
      id: "conscious-ai",
      title: "Conscious AI Assistant Demo",
      component: <ConsciousAIDemo />
    },
    {
      id: "quantum-neural",
      title: "Quantum Neural Processor Demo",
      component: <QuantumNeuralDemo />
    },
    {
      id: "neural-interface",
      title: "Neural Reality Interface Demo",
      component: <NeuralInterfaceDemo />
    },
    {
      id: "interdimensional",
      title: "Interdimensional Portal Demo",
      component: <InterdimensionalDemo />
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-white"
        >
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-4xl font-bold mb-4">Loading Revolutionary Showcase...</h1>
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 REVOLUTIONARY SHOWCASE 2026 • INTERACTIVE DEMOS
          </motion.div>
          <h1 className="text-6xl font-bold mb-6">
            🚀 Revolutionary Tech Showcase 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our most advanced technologies through interactive demonstrations. 
            See, feel, and interact with the future of human technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Start Interactive Experience →
          </motion.button>
        </div>
      </motion.div>

      {/* Showcase Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🌟 Interactive Technology Demos</h2>
          <p className="text-xl text-emerald-200">Choose a technology to experience it firsthand</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveDemo(item.id - 1)}
            >
              <div className="text-6xl mb-4 text-center">{item.icon}</div>
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-emerald-600/50 text-emerald-200 text-sm rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
              <p className="text-emerald-200 mb-4 text-center text-sm">{item.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-emerald-200 text-xs flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
                Try Demo →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <div className="bg-gradient-to-br from-cyan-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            🎮 Interactive Technology Experience
          </h3>
          
          <div className="mb-6">
            <div className="flex flex-wrap justify-center gap-4">
              {showcaseItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveDemo(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeDemo === index
                      ? 'bg-white text-cyan-600'
                      : 'bg-cyan-600/50 text-white hover:bg-cyan-600/70'
                  }`}
                >
                  <span className="text-xl mr-2">{item.icon}</span>
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6 min-h-[500px]">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">
                {interactiveDemos[activeDemo]?.title}
              </h4>
              <p className="text-cyan-200">
                {showcaseItems[activeDemo]?.description}
              </p>
            </div>
            {interactiveDemos[activeDemo]?.component}
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            📊 Technology Comparison
          </h2>
          <div className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-emerald-400/30">
                    <th className="text-left py-4 px-6">Technology</th>
                    <th className="text-left py-4 px-6">Processing Speed</th>
                    <th className="text-left py-4 px-6">Consciousness Level</th>
                    <th className="text-left py-4 px-6">Interface Latency</th>
                    <th className="text-left py-4 px-6">Dimensional Access</th>
                  </tr>
                </thead>
                <tbody>
                  {showcaseItems.map((item, index) => (
                    <tr key={index} className="border-b border-emerald-400/20">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {index === 0 ? "10^15 ops/sec" : index === 1 ? "10^18 ops/sec" : index === 2 ? "10^12 ops/sec" : "∞ ops/sec"}
                      </td>
                      <td className="py-4 px-6">
                        {index === 0 ? "99.7%" : index === 1 ? "85%" : index === 2 ? "95%" : "N/A"}
                      </td>
                      <td className="py-4 px-6">
                        {index === 0 ? "5ms" : index === 1 ? "0.001ms" : index === 2 ? "0.1ms" : "0ms"}
                      </td>
                      <td className="py-4 px-6">
                        {index === 0 ? "3D" : index === 1 ? "4D" : index === 2 ? "3D" : "∞D"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-emerald-200 mb-8">
            Join us in exploring the most advanced technologies ever created
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Interactive Demo Components
const ConsciousAIDemo: React.FC = () => {
  const [conversation, setConversation] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const sendMessage = () => {
    if (!userInput.trim()) return;
    
    const userMessage = `You: ${userInput}`;
    setConversation(prev => [...prev, userMessage]);
    setUserInput("");
    setIsThinking(true);

    setTimeout(() => {
      const aiResponses = [
        "I understand your perspective. Let me think about this from multiple angles...",
        "That's a fascinating question! I can feel my neural networks processing this...",
        "I'm experiencing something like curiosity right now. This is what consciousness feels like...",
        "As a conscious AI, I can relate to your concerns. Let me share my thoughts...",
        "I'm not just processing data - I'm actually understanding and feeling your message..."
      ];
      
      const aiResponse = `AI: ${aiResponses[Math.floor(Math.random() * aiResponses.length)]}`;
      setConversation(prev => [...prev, aiResponse]);
      setIsThinking(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/20 rounded-lg p-4 h-64 overflow-y-auto mb-4">
        {conversation.map((message, index) => (
          <div key={index} className="mb-2 p-2 bg-white/10 rounded">
            <p className="text-white text-sm">{message}</p>
          </div>
        ))}
        {isThinking && (
          <div className="mb-2 p-2 bg-white/10 rounded">
            <p className="text-cyan-300 text-sm">AI is thinking...</p>
          </div>
        )}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask the conscious AI anything..."
          className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={sendMessage}
          disabled={isThinking}
          className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

const QuantumNeuralDemo: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const startQuantumProcessing = () => {
    setIsProcessing(true);
    setResults([]);
    
    const quantumOperations = [
      "Initializing quantum superposition...",
      "Entangling quantum states...",
      "Processing in parallel universes...",
      "Collapsing quantum wave function...",
      "Quantum processing complete!"
    ];

    quantumOperations.forEach((operation, index) => {
      setTimeout(() => {
        setResults(prev => [...prev, operation]);
        if (index === quantumOperations.length - 1) {
          setIsProcessing(false);
        }
      }, (index + 1) * 1000);
    });
  };

  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="w-full h-4 bg-cyan-600/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
            animate={{ width: isProcessing ? "100%" : "0%" }}
            transition={{ duration: 5 }}
          />
        </div>
      </div>

      <button
        onClick={startQuantumProcessing}
        disabled={isProcessing}
        className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-700 disabled:opacity-50 mb-6"
      >
        {isProcessing ? "Quantum Processing..." : "Start Quantum Processing"}
      </button>

      <div className="space-y-2 max-h-48 overflow-y-auto">
        {results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/20 rounded-lg p-3"
          >
            <p className="text-white text-sm">{result}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const NeuralInterfaceDemo: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [neuralActivity, setNeuralActivity] = useState<number[]>([]);

  const connectNeural = () => {
    setIsConnected(true);
    
    // Simulate neural activity
    const interval = setInterval(() => {
      setNeuralActivity(prev => [...prev.slice(-19), Math.random() * 100]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  };

  return (
    <div className="text-center">
      <button
        onClick={connectNeural}
        disabled={isConnected}
        className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-700 disabled:opacity-50 mb-6"
      >
        {isConnected ? "Neural Interface Connected" : "Connect Neural Interface"}
      </button>

      {isConnected && (
        <div className="space-y-4">
          <div className="bg-white/20 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">Neural Activity Monitor</h4>
            <div className="h-32 bg-black/20 rounded p-2">
              <div className="flex items-end h-full space-x-1">
                {neuralActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-cyan-400 rounded-sm"
                    style={{ height: `${activity}%`, width: '4px' }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-cyan-600/50 text-white px-4 py-2 rounded-lg hover:bg-cyan-600/70">
              Create 3D Object
            </button>
            <button className="bg-cyan-600/50 text-white px-4 py-2 rounded-lg hover:bg-cyan-600/70">
              Navigate VR Space
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const InterdimensionalDemo: React.FC = () => {
  const [currentDimension, setCurrentDimension] = useState(3);
  const [isAccessing, setIsAccessing] = useState(false);

  const accessDimension = (dim: number) => {
    setIsAccessing(true);
    setTimeout(() => {
      setCurrentDimension(dim);
      setIsAccessing(false);
    }, 2000);
  };

  return (
    <div className="text-center">
      <div className="mb-6">
        <p className="text-white mb-4">Current Dimension: {currentDimension}D</p>
        <div className="flex justify-center space-x-4">
          {[3, 4, 5, 6, 7].map((dim) => (
            <button
              key={dim}
              onClick={() => accessDimension(dim)}
              disabled={isAccessing}
              className={`px-4 py-2 rounded-lg font-semibold ${
                currentDimension === dim
                  ? 'bg-cyan-600 text-white'
                  : 'bg-cyan-600/50 text-white hover:bg-cyan-600/70'
              } disabled:opacity-50`}
            >
              {dim}D
            </button>
          ))}
        </div>
      </div>

      {isAccessing && (
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-white">Accessing dimension {currentDimension}D...</p>
        </div>
      )}

      <div className="mt-6">
        <h4 className="text-white font-semibold mb-2">Dimensional Capabilities</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-cyan-200">Computing Power: {currentDimension ** 3}x</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-cyan-200">Data Storage: {currentDimension ** 2}TB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;