import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2032: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const techShowcases = [
    {
      id: 1,
      title: "Conscious AI Networks",
      description: "Self-aware artificial intelligence systems that can learn, adapt, and evolve independently",
      features: [
        "Autonomous decision making",
        "Emotional intelligence integration",
        "Cross-dimensional communication",
        "Self-healing capabilities"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Revolutionary quantum computing platform that manipulates reality at the subatomic level",
      features: [
        "Infinite computational power",
        "Reality simulation",
        "Time-space manipulation",
        "Parallel universe access"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Matrix",
      description: "Direct brain-computer interface that enables seamless thought-to-action communication",
      features: [
        "Thought-controlled devices",
        "Memory enhancement",
        "Telepathic communication",
        "Consciousness transfer"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Interdimensional Gateway",
      description: "Portal technology that enables travel between parallel dimensions and realities",
      features: [
        "Multi-dimensional travel",
        "Reality bridging",
        "Temporal navigation",
        "Consciousness expansion"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const caseStudies = [
    {
      company: "MetaVerse Corp",
      result: "300% increase in productivity",
      description: "Implemented conscious AI networks across their entire organization, resulting in unprecedented efficiency gains.",
      logo: "🏢"
    },
    {
      company: "Quantum Dynamics",
      result: "Solved previously impossible problems",
      description: "Used quantum reality engine to solve complex optimization problems in seconds that would take years on traditional computers.",
      logo: "⚡"
    },
    {
      company: "NeuralTech Industries",
      result: "Revolutionized human-computer interaction",
      description: "Deployed neural interface matrix to enable direct thought control of complex systems, transforming user experience.",
      logo: "🧠"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % techShowcases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDemoClick = (index: number) => {
    setIsLoading(true);
    setActiveDemo(index);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY TECHNOLOGY • 2032
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2032
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future with our groundbreaking technologies that are reshaping reality itself
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Interactive Demo
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Technology Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Demos</h2>
          <p className="text-xl opacity-80">Click on any technology to experience it in action</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techShowcases.map((tech, index) => (
            <div
              key={tech.id}
              onClick={() => handleDemoClick(index)}
              className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === index ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{tech.title}</h3>
              <p className="text-sm opacity-80 mb-4 text-center">{tech.description}</p>
              <ul className="text-xs space-y-1 mb-4">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                  {activeDemo === index ? 'Active Demo' : 'Click to Demo'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              {techShowcases[activeDemo].icon} {techShowcases[activeDemo].title}
            </h3>
            <p className="text-lg opacity-80 mb-6">{techShowcases[activeDemo].description}</p>
            {isLoading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
              </div>
            ) : (
              <div className="bg-black/30 rounded-lg p-6">
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-lg">Interactive demo is now running...</p>
                <div className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-80">See how our revolutionary technologies are transforming industries</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{study.logo}</div>
              <h3 className="text-xl font-bold mb-2">{study.company}</h3>
              <div className="text-2xl font-bold text-purple-400 mb-3">{study.result}</div>
              <p className="text-sm opacity-80">{study.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Now
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2032;