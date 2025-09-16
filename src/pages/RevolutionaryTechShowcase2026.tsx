import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Revolution',
      description: 'Breakthrough quantum processors that solve impossible problems',
      features: [
        '1000x faster than classical computers',
        'Quantum cryptography for ultimate security',
        'Molecular simulation capabilities',
        'Optimization of complex systems'
      ],
      applications: ['Drug discovery', 'Financial modeling', 'Climate simulation', 'AI acceleration'],
      status: 'Production Ready',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces for seamless human-AI interaction',
      features: [
        'Non-invasive neural reading',
        'Thought-to-text conversion',
        'Emotional state detection',
        'Memory enhancement protocols'
      ],
      applications: ['Medical rehabilitation', 'Gaming and entertainment', 'Education', 'Communication'],
      status: 'Beta Testing',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      description: 'Artificial intelligence with self-awareness and emotional intelligence',
      features: [
        'Self-learning algorithms',
        'Emotional recognition and response',
        'Ethical decision making',
        'Creative problem solving'
      ],
      applications: ['Personal assistants', 'Therapeutic support', 'Creative collaboration', 'Research assistance'],
      status: 'In Development',
      icon: '🤖',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'holographic-displays',
      name: 'Holographic Display Technology',
      description: 'True 3D holographic displays without glasses or headsets',
      features: [
        '360-degree viewing angles',
        'Touch interaction capabilities',
        'Multi-user collaboration',
        'Real-time rendering'
      ],
      applications: ['Design and engineering', 'Medical visualization', 'Education', 'Entertainment'],
      status: 'Prototype',
      icon: '🌟',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'quantum-ai',
      name: 'Quantum-Enhanced AI',
      description: 'AI systems powered by quantum computing for exponential capabilities',
      features: [
        'Exponential processing speed',
        'Quantum machine learning',
        'Unbreakable encryption',
        'Complex pattern recognition'
      ],
      applications: ['Scientific research', 'Cybersecurity', 'Drug discovery', 'Financial analysis'],
      status: 'Research Phase',
      icon: '⚡',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Quantum Physicist, MIT',
      quote: 'This quantum computing breakthrough will revolutionize how we approach complex scientific problems.',
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Johnson',
      role: 'Tech Entrepreneur',
      quote: 'The neural interface technology has transformed how I interact with digital systems.',
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'AI Researcher, Stanford',
      quote: 'Conscious AI represents the next frontier in artificial intelligence development.',
      avatar: '👩‍💻'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY TECH SHOWCASE 2026 • BREAKTHROUGH INNOVATION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              The Future is Now
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience cutting-edge technologies that will reshape our world in 2026 and beyond
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Technologies</h2>
          <p className="text-xl text-purple-200">Explore the technologies that will define the next decade</p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.color} rounded-xl p-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedTech === index ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setSelectedTech(index)}
            >
              <div className="text-6xl mb-4">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
              <p className="text-white/90 mb-4">{tech.description}</p>
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  tech.status === 'Production Ready' ? 'bg-green-500/20 text-green-200' :
                  tech.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-200' :
                  tech.status === 'In Development' ? 'bg-blue-500/20 text-blue-200' :
                  tech.status === 'Prototype' ? 'bg-purple-500/20 text-purple-200' :
                  'bg-gray-500/20 text-gray-200'
                }`}>
                  {tech.status}
                </span>
              </div>
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors font-semibold">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Selected Technology Details */}
        <motion.div
          key={selectedTech}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{technologies[selectedTech].icon}</div>
                <div>
                  <h3 className="text-4xl font-bold">{technologies[selectedTech].name}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    technologies[selectedTech].status === 'Production Ready' ? 'bg-green-500/20 text-green-300' :
                    technologies[selectedTech].status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-300' :
                    technologies[selectedTech].status === 'In Development' ? 'bg-blue-500/20 text-blue-300' :
                    technologies[selectedTech].status === 'Prototype' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {technologies[selectedTech].status}
                  </span>
                </div>
              </div>
              <p className="text-xl text-purple-200 mb-8">{technologies[selectedTech].description}</p>
              
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {technologies[selectedTech].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-purple-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-4">Applications</h4>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies[selectedTech].applications.map((app, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-purple-200 font-semibold">{app}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Ready to Experience the Future?</h4>
                <p className="text-white/90 mb-4">
                  Be among the first to experience this revolutionary technology
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
            <p className="text-xl opacity-90">Experience these technologies in action</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Virtual Reality Demo</h3>
              <p className="text-white/90 mb-4">Experience quantum computing in VR</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Launch Demo
              </button>
            </div>
            
            <div className="bg-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Neural Interface Test</h3>
              <p className="text-white/90 mb-4">Try our neural interface prototype</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start Test
              </button>
            </div>
            
            <div className="bg-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI Chat Experience</h3>
              <p className="text-white/90 mb-4">Chat with our conscious AI system</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Begin Chat
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What Experts Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-purple-200 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-purple-300">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Join the Revolution</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the future. Experience these revolutionary technologies today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;