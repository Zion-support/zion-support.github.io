import React from 'react';


const UltimateContentShowcase: React.FC = () => {
  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2026",
      description: "Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces",
      image: "🚀",
      gradient: "from-cyan-500 to-purple-500",
      link: "/pages/UltimateTechBreakthrough2026",
      featured: true
    },
    {
      id: 2,
      title: "Next-Gen Innovation Hub 2026",
      description: "The world's most advanced innovation laboratory where cutting-edge technologies converge",
      image: "🔬",
      gradient: "from-blue-500 to-purple-500",
      link: "/pages/NextGenInnovationHub2026",
      featured: true
    },
    {
      id: 3,
      title: "Comprehensive Tech Blog 2026",
      description: "Stay updated with the latest insights, breakthroughs, and innovations in technology",
      image: "📚",
      gradient: "from-purple-500 to-pink-500",
      link: "/pages/ComprehensiveTechBlog2026",
      featured: true
    },
    {
      id: 4,
      title: "Revolutionary Tech Showcase 2026",
      description: "Discover breakthrough technologies that are reshaping the future of humanity",
      image: "🌟",
      gradient: "from-pink-500 to-red-500",
      link: "/pages/RevolutionaryTechShowcase2026",
      featured: false
    },
    {
      id: 5,
      title: "Advanced AI Solutions 2026",
      description: "Cutting-edge artificial intelligence solutions for the next generation",
      image: "🤖",
      gradient: "from-green-500 to-teal-500",
      link: "/pages/AdvancedAISolutions2026",
      featured: false
    },
    {
      id: 6,
      title: "Quantum Computing Solutions 2026",
      description: "Revolutionary quantum computing technology for exponential computational power",
      image: "⚡",
      gradient: "from-cyan-500 to-blue-500",
      link: "/pages/QuantumComputingSolutions2026",
      featured: false
    },
    {
      id: 7,
      title: "Comprehensive Case Studies 2026",
      description: "Real-world success stories showcasing technology transformations",
      image: "📊",
      gradient: "from-indigo-500 to-purple-500",
      link: "/pages/ComprehensiveCaseStudies2026",
      featured: true
    }
  ];
  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience our most advanced and revolutionary content featuring cutting-edge technologies, 
            innovative solutions, and breakthrough insights that are shaping the future
          </p>
        </motion.div>
        {/* Featured Content */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">🌟 Featured Content</h3>
            <p className="text-lg text-gray-300">Our most popular and impactful content</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.filter(item => item.featured).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-600/20 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-center text-white">
                  {item.title}
                </h4>
                <p className="text-gray-300 mb-6 text-center">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${item.gradient} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg`}
                >
                  Explore Now →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        {/* All Content Grid */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">📚 All Content</h3>
            <p className="text-lg text-gray-300">Complete collection of our technology content</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600/20 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h4 className="text-xl font-bold mb-3 text-center text-white">
                  {item.title}
                </h4>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${item.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 text-center"
        >
          <h3 className="text-4xl font-bold mb-6 text-white">🎮 Interactive Features</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our content through interactive demonstrations and immersive features
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-3">AI Consciousness Demo</h4>
              <p className="text-gray-300 mb-4">Interact with our AI consciousness system</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Demo →
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-3">Quantum Lab</h4>
              <p className="text-gray-300 mb-4">Experience quantum computing power</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter Lab →
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🧬</div>
              <h4 className="text-xl font-bold mb-3">Neural Interface</h4>
              <p className="text-gray-300 mb-4">Try brain-computer communication</p>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Connect →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default UltimateContentShowcase;
