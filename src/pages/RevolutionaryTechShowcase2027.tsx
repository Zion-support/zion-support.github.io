import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

const RevolutionaryTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "AI that thinks, feels, and creates with human-level consciousness",
      features: [
        "Emotional Intelligence",
        "Creative Problem Solving", 
        "Self-Directed Learning",
        "Autonomous Decision Making"
      ],
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechTrends2027"
    },
    {
      id: 2,
      title: "Quantum Computing",
      icon: "⚡",
      description: "Revolutionary computing power that transcends classical limitations",
      features: [
        "Quantum Supremacy",
        "Parallel Processing",
        "Cryptographic Security",
        "Molecular Simulation"
      ],
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechTrends2027"
    },
    {
      id: 3,
      title: "Holographic Technology",
      icon: "🔮",
      description: "Three-dimensional interfaces that revolutionize human-computer interaction",
      features: [
        "3D Visualization",
        "Gesture Control",
        "Thought Interface",
        "Real-time Rendering"
      ],
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechTrends2027"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <>
      <Helmet>
        <title>Revolutionary Tech Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Experience the future of technology with our revolutionary 2027 showcase featuring AI, quantum computing, and neural interfaces." />
        <meta name="keywords" content="revolutionary technology, AI 2027, quantum computing, neural interfaces, future tech" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2027
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of technology through immersive, interactive demonstrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${tech.gradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => handleTechClick(index)}
              >
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-300 mb-6">{tech.description}</p>
                
                <div className="space-y-2 mb-6">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                    FUTURE
                  </span>
                  <a
                    href={tech.link}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                  >
                    Explore →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join millions of users who are already experiencing these revolutionary technologies 
              through our interactive demonstrations
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="/pages/RevolutionaryTechBreakthrough2027" 
                className="bg-white text-purple-600 px-10 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
              >
                🚀 Start Interactive Demo
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg"
              >
                📞 Schedule Private Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RevolutionaryTechShowcase2027;