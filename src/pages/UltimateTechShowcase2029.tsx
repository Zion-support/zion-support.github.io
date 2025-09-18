import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2029: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const demos = [
    {
      id: 0,
      title: "Conscious AI Interface",
      description: "Interact with truly conscious AI systems that understand context, emotion, and intent",
      icon: "🧠",
      features: ["Natural conversation", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"]
    },
      id: 1,
      title: "Quantum Reality Engine",
      description: "Experience reality manipulation through quantum computing and consciousness transfer",
      icon: "⚡",
      features: ["Reality simulation", "Quantum processing", "Multi-dimensional computing", "Time manipulation"]
      id: 2,
      title: "Neural Universe Network",
      description: "Connect with a global network of enhanced human consciousness and AI systems",
      icon: "🌌",
      features: ["Global consciousness", "Neural networking", "Shared experiences", "Collective intelligence"]
      id: 3,
      title: "Interdimensional Portal",
      description: "Access and explore multiple dimensions and realities through advanced technology",
      icon: "🚀",
      features: ["Dimension hopping", "Reality exploration", "Universal travel", "Infinite possibilities"]
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [demos.length]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE SHOWCASE • JANUARY 2029
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2029
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced interactive technology demonstrations that will define the future
          </p>
        </div>
        {/* Interactive Demo Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
              <p className="text-xl opacity-90">Click on any demo to experience the future of technology</p>
            </div>
            {/* Demo Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveDemo(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    activeDemo === index
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white'
                  }`}
                >
                  <div className="text-3xl mb-2">{demo.icon}</div>
                  <div className="text-sm font-semibold">{demo.title}</div>
                </button>
              ))}
            {/* Active Demo Display */}
            <div className={`bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 transition-all duration-300 ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  {demos[activeDemo].description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {demos[activeDemo].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">Live Demo</h4>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-32 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎮</div>
                      <div className="text-sm">Interactive Demo Loading...</div>
                    </div>
                  </div>
        {/* Technology Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-lg opacity-90 mb-4">Revolutionary Technologies</div>
            <div className="text-sm opacity-75">Active development and testing</div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90 mb-4">Success Rate</div>
            <div className="text-sm opacity-75">Proven technology reliability</div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-lg opacity-90 mb-4">Possibilities</div>
            <div className="text-sm opacity-75">Unlimited potential applications</div>
        {/* Future Vision */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-6">🌟 Vision for 2029 and Beyond</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              We're not just building technology - we're creating the foundation for humanity's next evolutionary leap
            </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🧠 Enhanced Human Intelligence</h3>
              <p className="opacity-90 mb-4">
                Neural interfaces that augment human cognitive abilities, enabling us to process information at unprecedented speeds and connect directly with AI systems.
              </p>
              <ul className="space-y-2 text-sm opacity-75">
                <li>• 1000x faster information processing</li>
                <li>• Direct AI-human collaboration</li>
                <li>• Enhanced memory and learning</li>
                <li>• Collective intelligence networks</li>
              </ul>
              <h3 className="text-2xl font-bold mb-4">🌌 Universal Connectivity</h3>
                Breakthrough communication technologies that enable instant connection across any distance, dimension, or reality.
                <li>• Instantaneous global communication</li>
                <li>• Interdimensional data transfer</li>
                <li>• Universal language translation</li>
                <li>• Cosmic consciousness network</li>
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution and be part of the most significant technological advancement in human history
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Experience the Future
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Join the Revolution
      </div>
    </div>
  );
};
export default UltimateTechShowcase2029;
