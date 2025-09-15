import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  const techCategories = {
    ai: {
      title: 'Artificial Intelligence Revolution',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      technologies: [
        {
          name: 'Autonomous AI Agents',
          description: 'Self-operating AI systems that can make complex decisions and execute tasks independently.',
          features: ['Self-learning algorithms', 'Autonomous decision making', 'Real-time adaptation', 'Human-AI collaboration'],
          status: 'Live'
        },
        {
          name: 'Generative AI 3.0',
          description: 'Next-generation AI that can create, design, and innovate across multiple domains.',
          features: ['Multi-modal generation', 'Creative problem solving', 'Cross-domain learning', 'Ethical AI frameworks'],
          status: 'Beta'
        },
        {
          name: 'Quantum AI Processing',
          description: 'AI systems powered by quantum computing for exponential processing capabilities.',
          features: ['Quantum neural networks', 'Exponential speedup', 'Complex optimization', 'Quantum machine learning'],
          status: 'Research'
        }
      ]
    },
    quantum: {
      title: 'Quantum Computing Breakthrough',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      technologies: [
        {
          name: 'Quantum Supremacy 2.0',
          description: 'Achieving quantum advantage in practical applications beyond theoretical demonstrations.',
          features: ['Real-world applications', 'Commercial quantum computers', 'Quantum cloud services', 'Hybrid classical-quantum systems'],
          status: 'Live'
        },
        {
          name: 'Quantum Internet',
          description: 'Global quantum communication network enabling unhackable, instant data transmission.',
          features: ['Quantum entanglement', 'Unhackable encryption', 'Instant communication', 'Quantum teleportation'],
          status: 'Beta'
        },
        {
          name: 'Quantum AI Fusion',
          description: 'Combining quantum computing with AI for unprecedented computational power.',
          features: ['Quantum neural networks', 'Quantum optimization', 'Quantum machine learning', 'Quantum-enhanced AI'],
          status: 'Research'
        }
      ]
    },
    neural: {
      title: 'Neural Interface Technology',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      technologies: [
        {
          name: 'Non-Invasive BCI',
          description: 'Brain-computer interfaces that require no surgical implantation for direct neural control.',
          features: ['Thought control', 'Neural feedback', 'Real-time processing', 'Safe operation'],
          status: 'Live'
        },
        {
          name: 'Neural Augmentation',
          description: 'Enhancing human cognitive abilities through direct neural interface technology.',
          features: ['Memory enhancement', 'Cognitive acceleration', 'Sensory expansion', 'Neural plasticity'],
          status: 'Beta'
        },
        {
          name: 'Collective Intelligence',
          description: 'Connecting multiple human minds for collaborative problem-solving and creativity.',
          features: ['Mind-to-mind communication', 'Shared cognition', 'Collective problem solving', 'Enhanced creativity'],
          status: 'Research'
        }
      ]
    },
    space: {
      title: 'Space Technology Revolution',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-400',
      bgColor: 'from-orange-600/30 to-red-600/30',
      technologies: [
        {
          name: 'Space Elevator',
          description: 'Revolutionary transportation system connecting Earth to space using carbon nanotube cables.',
          features: ['Affordable space access', 'Carbon nanotube technology', 'Orbital manufacturing', 'Space tourism'],
          status: 'Live'
        },
        {
          name: 'Mars Colonization',
          description: 'Establishing permanent human settlements on Mars with advanced life support systems.',
          features: ['Sustainable habitats', 'Advanced life support', 'Mars terraforming', 'Interplanetary travel'],
          status: 'Beta'
        },
        {
          name: 'Asteroid Mining',
          description: 'Extracting valuable resources from asteroids for Earth and space-based industries.',
          features: ['Rare earth extraction', 'Space manufacturing', 'Resource abundance', 'Economic transformation'],
          status: 'Research'
        }
      ]
    }
  };

  const handleTabChange = (tab) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <>
      <Helmet>
        <title>Ultimate Tech Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Experience the ultimate showcase of cutting-edge technology innovations in 2026. Explore AI, quantum computing, neural interfaces, and space technology." />
        <meta name="keywords" content="ultimate tech showcase, technology 2026, AI revolution, quantum computing, neural interfaces, space technology" />
        <meta property="og:title" content="Ultimate Tech Showcase 2026 | Zion Tech Group" />
        <meta property="og:description" content="Discover the most advanced technology innovations that are reshaping our world and creating new possibilities for the future." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://zion.tech/pages/UltimateTechShowcase2026" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🌟 ULTIMATE SHOWCASE • JANUARY 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Tech Showcase 2026
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Experience the most comprehensive collection of revolutionary technologies that are defining the future of human civilization.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Technology Tabs */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(techCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
                >
                  <span className="text-2xl mr-2">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Technology Content */}
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-4xl mr-3">{techCategories[activeTab].icon}</span>
                  {techCategories[activeTab].title}
                </h2>
                <p className="text-xl opacity-80">Explore the latest innovations in this revolutionary field</p>
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {techCategories[activeTab].technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${techCategories[activeTab].bgColor} backdrop-blur-sm rounded-xl p-6 border ${techCategories[activeTab].borderColor}/30 hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{tech.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tech.status === 'Live' ? 'bg-green-500/20 text-green-300' :
                        tech.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                    <p className="text-gray-200 mb-4">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
              <p className="text-xl opacity-90">Experience these technologies in action</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered Innovation</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">AI Creativity Score</span>
                      <span className="text-2xl font-bold text-purple-300">98%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Problem Solving Efficiency</span>
                      <span className="text-2xl font-bold text-cyan-300">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold mb-4 text-center">Quantum Processing Power</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Quantum Speedup</span>
                      <span className="text-2xl font-bold text-emerald-300">10^9x</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Quantum Coherence</span>
                      <span className="text-2xl font-bold text-orange-300">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators who are already leveraging these revolutionary technologies to create extraordinary outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/pages/RevolutionaryTechBreakthrough2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Breakthroughs →
              </a>
              <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold text-lg">
                Read Insights →
              </a>
              <a href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UltimateTechShowcase2026;