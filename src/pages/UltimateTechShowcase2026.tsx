import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techCategories = [
    {
      name: "AI Revolution",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      description: "Next-generation artificial intelligence that thinks, learns, and creates",
      technologies: [
        {
          name: "Autonomous AI Agents",
          description: "Self-managing AI systems that operate independently",
          status: "Available Now",
          impact: "300% efficiency increase"
        },
        {
          name: "Generative AI 2.0",
          description: "AI that creates content with human-like creativity",
          status: "Beta Testing",
          impact: "50% faster content creation"
        },
        {
          name: "Edge AI Computing",
          description: "Ultra-low latency AI processing at the edge",
          status: "Coming Soon",
          impact: "90% latency reduction"
        }
      ]
    },
    {
      name: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Exponential computing power for solving impossible problems",
      technologies: [
        {
          name: "Quantum Machine Learning",
          description: "Exponentially faster ML algorithms using quantum principles",
          status: "Research Phase",
          impact: "1000x speed improvement"
        },
        {
          name: "Quantum Cryptography",
          description: "Unbreakable encryption using quantum mechanics",
          status: "Pilot Program",
          impact: "100% security guarantee"
        },
        {
          name: "Molecular Simulation",
          description: "Simulate complex molecular interactions in real-time",
          status: "Available Now",
          impact: "Revolutionary drug discovery"
        }
      ]
    },
    {
      name: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      description: "Direct connection between mind and machine",
      technologies: [
        {
          name: "Brain-Computer Interfaces",
          description: "Thought-controlled computing and communication",
          status: "Clinical Trials",
          impact: "Mind-machine integration"
        },
        {
          name: "Neural Feedback Systems",
          description: "Real-time neural feedback for enhanced performance",
          status: "Beta Testing",
          impact: "40% cognitive enhancement"
        },
        {
          name: "Non-Invasive BCI",
          description: "Advanced non-invasive neural interfaces",
          status: "Available Now",
          impact: "Accessible mind control"
        }
      ]
    },
    {
      name: "Blockchain 3.0",
      icon: "🔗",
      color: "from-orange-600 to-red-600",
      description: "Next-generation decentralized technology",
      technologies: [
        {
          name: "Quantum-Safe Blockchain",
          description: "Future-proof blockchain resistant to quantum attacks",
          status: "Development",
          impact: "Future-proof security"
        },
        {
          name: "Cross-Chain Interoperability",
          description: "Seamless integration between blockchain networks",
          status: "Available Now",
          impact: "Unified ecosystem"
        },
        {
          name: "NFT 3.0 Technology",
          description: "Advanced NFTs with enhanced functionality",
          status: "Beta Testing",
          impact: "Revolutionary ownership"
        }
      ]
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <>
      <Helmet>
        <title>Ultimate Technology Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Experience the ultimate technology showcase featuring AI, quantum computing, neural interfaces, and blockchain innovations for 2026." />
        <meta name="keywords" content="ultimate tech showcase, AI 2026, quantum computing, neural interfaces, blockchain 3.0, technology innovation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
                🚀 ULTIMATE TECHNOLOGY SHOWCASE • 2026
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Tech Showcase
              </h1>
              <p className="text-2xl md:text-3xl opacity-90 max-w-5xl mx-auto mb-12">
                Experience the future of technology with our revolutionary innovations in AI, 
                Quantum Computing, Neural Interfaces, and Blockchain Technology
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                  🚀 Explore Technologies
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                  📞 Contact Experts
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Tabs */}
        <div className="container mx-auto px-4 py-20">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {techCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Technology Content */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{techCategories[activeTab].icon}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{techCategories[activeTab].name}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">{techCategories[activeTab].description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techCategories[activeTab].technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                    <p className="text-white/80 mb-6">{tech.description}</p>
                    
                    <div className="mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        tech.status === 'Available Now' ? 'bg-green-500/20 text-green-300' :
                        tech.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-300' :
                        tech.status === 'Pilot Program' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                    
                    <div className="text-sm text-white/60 mb-6">
                      <strong>Impact:</strong> {tech.impact}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Learn More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Interactive Technology Demo</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our technologies in action with interactive demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4">AI Agent Demo</h3>
              <p className="text-white/80 mb-6">Watch our autonomous AI agents in action</p>
              <div className="bg-black/50 rounded-lg p-6 mb-6">
                <div className="text-green-400 font-mono text-sm">
                  <div>🤖 AI Agent: Analyzing data patterns...</div>
                  <div>🧠 Neural Network: Processing 1M+ parameters</div>
                  <div>⚡ Decision: Optimizing workflow efficiency</div>
                  <div>✅ Result: 300% performance improvement</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try AI Demo →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-4">Quantum Computing Simulator</h3>
              <p className="text-white/80 mb-6">Experience quantum computing power</p>
              <div className="bg-black/50 rounded-lg p-6 mb-6">
                <div className="text-cyan-400 font-mono text-sm">
                  <div>⚡ Quantum State: |ψ⟩ = α|0⟩ + β|1⟩</div>
                  <div>🔢 Qubits: 50 quantum bits processing</div>
                  <div>🚀 Speed: 10^15 operations/second</div>
                  <div>🎯 Result: Solved in 0.001 seconds</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Quantum Demo →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the technology revolution and transform your business with our cutting-edge solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UltimateTechShowcase2026;