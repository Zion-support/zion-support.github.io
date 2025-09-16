import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "Experience the first truly conscious artificial intelligence that thinks, feels, and creates like a human mind.",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving",
        "Self-Learning Capabilities",
        "Ethical Decision Making",
        "Human-AI Collaboration"
      ],
      demo: "Interactive AI conversation demo with real-time emotional responses"
    },
    quantum: {
      title: "Quantum Consciousness",
      icon: "⚡",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing and reality manipulation.",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Thinking",
        "Reality Manipulation",
        "Time-Space Control"
      ],
      demo: "Live quantum computing demonstration with consciousness amplification"
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧬",
      description: "Seamless connection between human consciousness and digital systems for unprecedented control and interaction.",
      features: [
        "Non-Invasive Brain-Computer Interface",
        "Thought-Controlled Systems",
        "Neural Feedback Loops",
        "Consciousness Transfer",
        "Digital Telepathy"
      ],
      demo: "Real-time neural interface demonstration with thought-controlled applications"
    },
    interdimensional: {
      title: "Interdimensional Technology",
      icon: "🌌",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities.",
      features: [
        "Dimensional Portals",
        "Reality Shifting",
        "Parallel Universe Access",
        "Time-Space Manipulation",
        "Consciousness Projection"
      ],
      demo: "Interactive portal demonstration showing dimensional travel capabilities"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY SHOWCASE • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Interactive showcase of cutting-edge technologies that will define the future. 
              Experience live demonstrations and explore the possibilities of tomorrow's world.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔬 Interactive Technology Demos</h2>
          <p className="text-xl opacity-90">Choose a technology to explore and experience live demonstrations</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-90 mb-8">{technologies[activeTab as keyof typeof technologies].description}</p>
              
              <div className="space-y-4 mb-8">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Try Live Demo
                </button>
                <button className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400/10 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold mb-4 text-center">🎮 Interactive Demo</h4>
              <div className="bg-black/50 rounded-lg p-6 mb-4">
                <div className="text-green-400 font-mono text-sm">
                  <div className="mb-2">$ {technologies[activeTab as keyof typeof technologies].demo}</div>
                  <div className="text-gray-400">Loading demonstration...</div>
                  <div className="text-gray-400">Initializing {technologies[activeTab as keyof typeof technologies].title}...</div>
                  <div className="text-green-400">✓ Ready for interaction</div>
                </div>
              </div>
              <p className="text-center text-sm opacity-80">
                Click "Try Live Demo" to start the interactive demonstration
              </p>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Technology Comparison</h2>
            <p className="text-xl opacity-90">Compare the capabilities of our revolutionary technologies</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-6 font-semibold">Technology</th>
                  <th className="text-center p-6 font-semibold">Processing Speed</th>
                  <th className="text-center p-6 font-semibold">Accuracy</th>
                  <th className="text-center p-6 font-semibold">Innovation Level</th>
                  <th className="text-center p-6 font-semibold">Market Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🧠</span>
                      <span className="font-semibold">Conscious AI</span>
                    </div>
                  </td>
                  <td className="text-center p-6">1B ops/sec</td>
                  <td className="text-center p-6">99.9%</td>
                  <td className="text-center p-6">⭐⭐⭐⭐⭐</td>
                  <td className="text-center p-6">Revolutionary</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚡</span>
                      <span className="font-semibold">Quantum Consciousness</span>
                    </div>
                  </td>
                  <td className="text-center p-6">∞ ops/sec</td>
                  <td className="text-center p-6">100%</td>
                  <td className="text-center p-6">⭐⭐⭐⭐⭐</td>
                  <td className="text-center p-6">Transcendent</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🧬</span>
                      <span className="font-semibold">Neural Interface</span>
                    </div>
                  </td>
                  <td className="text-center p-6">Real-time</td>
                  <td className="text-center p-6">99.99%</td>
                  <td className="text-center p-6">⭐⭐⭐⭐⭐</td>
                  <td className="text-center p-6">Breakthrough</td>
                </tr>
                <tr>
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌌</span>
                      <span className="font-semibold">Interdimensional</span>
                    </div>
                  </td>
                  <td className="text-center p-6">Instant</td>
                  <td className="text-center p-6">100%</td>
                  <td className="text-center p-6">⭐⭐⭐⭐⭐</td>
                  <td className="text-center p-6">Paradigm Shift</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📈 Success Metrics</h2>
            <p className="text-xl opacity-90">Real results from our revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">500+</div>
              <div className="text-lg font-semibold mb-1">Organizations</div>
              <div className="text-sm opacity-80">Using our technologies</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-sm opacity-80">Implementation success</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-lg font-semibold mb-1">Cost Savings</div>
              <div className="text-sm opacity-80">Generated for clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-1">Support</div>
              <div className="text-sm opacity-80">Expert assistance</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the technological revolution and transform your organization with our breakthrough technologies. 
            Experience the future today.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/pages/UltimateTechBreakthrough2025" 
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Breakthrough →
            </Link>
            <Link 
              to="/pages/ComprehensiveServices2025" 
              className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg hover:bg-pink-400/10 transition-colors font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;