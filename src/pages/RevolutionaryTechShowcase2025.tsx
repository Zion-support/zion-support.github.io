import React, { useState } from 'react';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Conscious AI Revolution",
      description: "Experience the next generation of artificial intelligence that thinks, feels, and creates like humans",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving",
        "Self-Learning Capabilities",
        "Ethical Decision Making",
        "Human-AI Collaboration"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Unlock the power of quantum mechanics for unprecedented computational capabilities",
      features: [
        "Exponential Speed Processing",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Optimization Algorithms",
        "Quantum Machine Learning"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Connect your mind directly to digital systems for seamless human-computer interaction",
      features: [
        "Non-Invasive Brain-Computer Interface",
        "Thought-Controlled Systems",
        "Neural Feedback Loops",
        "Memory Enhancement",
        "Telepathic Communication"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    interdimensional: {
      title: "Interdimensional Computing",
      description: "Access parallel dimensions and alternate realities through revolutionary technology",
      features: [
        "Dimensional Portal Technology",
        "Reality Shifting Capabilities",
        "Parallel Universe Access",
        "Multiverse Communication",
        "Temporal Manipulation"
      ],
      icon: "🌌",
      color: "from-violet-600 to-purple-600"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Interactive showcase of cutting-edge technologies that will define the future of humanity
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Live Demo</h3>
                <div className="bg-black/50 rounded-lg p-6 mb-4">
                  <div className="text-green-400 font-mono text-sm">
                    {activeTab === 'ai' && '> AI: "I understand your request and will process it with emotional intelligence..."'}
                    {activeTab === 'quantum' && '> Quantum: "Calculating 10^15 operations per second..."'}
                    {activeTab === 'neural' && '> Neural: "Neural interface established. Ready for thought commands..."'}
                    {activeTab === 'interdimensional' && '> Portal: "Accessing parallel dimension 7.3.2.1..."'}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Try Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Technology Comparison</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Compare the capabilities and performance metrics of our revolutionary technologies
            </p>
          </div>

          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-6">Technology</th>
                    <th className="text-left py-4 px-6">Processing Speed</th>
                    <th className="text-left py-4 px-6">Accuracy</th>
                    <th className="text-left py-4 px-6">Energy Efficiency</th>
                    <th className="text-left py-4 px-6">Scalability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6 font-semibold">Conscious AI</td>
                    <td className="py-4 px-6">10^18 ops/sec</td>
                    <td className="py-4 px-6">99.9%</td>
                    <td className="py-4 px-6">95%</td>
                    <td className="py-4 px-6">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6 font-semibold">Quantum Computing</td>
                    <td className="py-4 px-6">10^15 ops/sec</td>
                    <td className="py-4 px-6">99.99%</td>
                    <td className="py-4 px-6">90%</td>
                    <td className="py-4 px-6">High</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6 font-semibold">Neural Interface</td>
                    <td className="py-4 px-6">Real-time</td>
                    <td className="py-4 px-6">98.5%</td>
                    <td className="py-4 px-6">85%</td>
                    <td className="py-4 px-6">Medium</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Interdimensional</td>
                    <td className="py-4 px-6">Instantaneous</td>
                    <td className="py-4 px-6">100%</td>
                    <td className="py-4 px-6">80%</td>
                    <td className="py-4 px-6">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl font-bold text-purple-400 mb-2">10M+</div>
            <div className="text-lg opacity-90">Active Users</div>
          </div>
          <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Uptime</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500%</div>
            <div className="text-lg opacity-90">Efficiency Gain</div>
          </div>
          <div className="text-center bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
            <div className="text-4xl font-bold text-violet-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the revolution and be among the first to experience these groundbreaking technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;