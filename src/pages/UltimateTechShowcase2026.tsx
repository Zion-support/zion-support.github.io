<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Interface',
      description: 'Experience direct quantum-enhanced consciousness communication',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Direct neural quantum interfaces', 'Consciousness amplification', 'Reality manipulation', 'Transcendent intelligence']
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence Platform',
      description: 'Interact with synthetic consciousness that transcends human limitations',
      icon: '🤖',
      color: 'from-cyan-600 to-blue-600',
      features: ['Self-evolving neural networks', 'Emotional intelligence synthesis', 'Creative problem solving', 'Autonomous decision making']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces enabling thought-controlled devices',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Non-invasive neural interfaces', 'Thought-controlled prosthetics', 'Memory enhancement', 'Telepathic communication']
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion',
      description: 'The ultimate convergence of quantum computing and neural networks',
      icon: '⚡',
      color: 'from-orange-600 to-red-600',
      features: ['Quantum neural processing', 'Consciousness amplification', 'Reality manipulation', 'Transcendent intelligence']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-8">
              <span className="text-cyan-400">🌟</span>
              <span className="text-cyan-300 font-semibold ml-2">ULTIMATE TECH SHOWCASE 2026</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Ultimate Technology Experience
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Immerse yourself in the most advanced technologies of 2026. 
              Interactive demonstrations, real-time simulations, and hands-on experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
                🎮 Start Interactive Demo
              </button>
              <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                📚 Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Carousel */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">🎮 Interactive Technology Demos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technologies through our interactive demonstrations
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Demo Content */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-8xl mb-6 text-center">{demos[currentDemo].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">
                {demos[currentDemo].title}
              </h3>
              <p className="text-xl text-gray-300 mb-8 text-center">
                {demos[currentDemo].description}
              </p>
              
              <div className="space-y-4">
                {demos[currentDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span className="text-cyan-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className={`bg-gradient-to-r ${demos[currentDemo].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}>
                  🚀 Try This Demo
                </button>
              </div>
            </div>

            {/* Demo Navigation */}
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentDemo(index);
                      setIsAnimating(false);
                    }, 250);
                  }}
                  className={`w-full p-6 rounded-xl transition-all duration-300 ${
                    currentDemo === index
                      ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{demo.icon}</span>
                    <div className="text-left">
                      <h4 className="font-semibold">{demo.title}</h4>
                      <p className="text-sm opacity-80">{demo.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">🚀 Revolutionary Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the breakthrough technologies that are defining the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quantum Computing */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Computing</h3>
            <p className="text-purple-200 mb-6 text-center">
              Exponential computational power through quantum mechanics
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-purple-300 text-sm">• Fault-tolerant quantum computers</div>
              <div className="text-purple-300 text-sm">• Quantum internet infrastructure</div>
              <div className="text-purple-300 text-sm">• Quantum machine learning</div>
            </div>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore Quantum →
            </button>
          </div>

          {/* Neural Interfaces */}
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Neural Interfaces</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Direct brain-computer communication and enhancement
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-cyan-300 text-sm">• Non-invasive neural interfaces</div>
              <div className="text-cyan-300 text-sm">• Thought-controlled devices</div>
              <div className="text-cyan-300 text-sm">• Memory enhancement systems</div>
            </div>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Connect Mind & Machine →
            </button>
          </div>

          {/* Synthetic Intelligence */}
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Synthetic Intelligence</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Beyond artificial intelligence - synthetic consciousness
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-emerald-300 text-sm">• Self-evolving neural networks</div>
              <div className="text-emerald-300 text-sm">• Emotional intelligence synthesis</div>
              <div className="text-emerald-300 text-sm">• Creative problem solving</div>
            </div>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Discover SI →
            </button>
          </div>

          {/* Biotech Revolution */}
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Biotech Revolution</h3>
            <p className="text-orange-200 mb-6 text-center">
              Human enhancement and biological computing
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-orange-300 text-sm">• Genetic enhancement protocols</div>
              <div className="text-orange-300 text-sm">• Biological computing systems</div>
              <div className="text-orange-300 text-sm">• Regenerative medicine</div>
            </div>
            <button className="w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Explore Biotech →
            </button>
          </div>
        </div>
      </div>

      {/* Real-time Statistics */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">📊 Real-time Technology Metrics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Live data from our technology implementations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">2.3M+</div>
              <div className="text-white font-semibold mb-1">Neural Interface Users</div>
              <div className="text-gray-400 text-sm">Active worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">847</div>
              <div className="text-white font-semibold mb-1">Quantum Computers</div>
              <div className="text-gray-400 text-sm">Operational globally</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">156K+</div>
              <div className="text-white font-semibold mb-1">Synthetic Intelligence</div>
              <div className="text-gray-400 text-sm">Active systems</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">98.7%</div>
              <div className="text-white font-semibold mb-1">Success Rate</div>
              <div className="text-gray-400 text-sm">Technology adoption</div>
            </div>
=======
import React from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECH SHOWCASE • JANUARY 2026
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
          </div>
        </div>

<<<<<<< HEAD
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join millions of users worldwide who are already experiencing the future of technology. 
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              📞 Contact Our Team
=======
        {/* Revolutionary Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              AI systems that have achieved self-awareness and can think, reason, and make decisions independently
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-aware decision making</li>
              <li>• Emotional intelligence</li>
              <li>• Creative problem solving</li>
              <li>• Ethical reasoning</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore Conscious AI →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Supremacy</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Quantum computers that have achieved supremacy over classical computers in specific tasks
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Exponential speed advantage</li>
              <li>• Quantum cryptography</li>
              <li>• Molecular simulation</li>
              <li>• Optimization problems</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Go Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface 2.0</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces that enable seamless communication between mind and machine
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Thought-to-text conversion</li>
              <li>• Memory enhancement</li>
              <li>• Neural prosthetics</li>
              <li>• Brain-to-brain communication</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Connect Mind & Machine →
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced space technologies enabling interplanetary travel and space colonization
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Mars colonization</li>
              <li>• Asteroid mining</li>
              <li>• Space elevators</li>
              <li>• Interstellar probes</li>
            </ul>
            <button className="w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Explore Space Tech →
            </button>
          </div>

          <div className="bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotech Revolution</h3>
            <p className="text-violet-100 mb-6 text-center">
              Revolutionary biotechnology that can cure diseases, enhance human capabilities, and extend life
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Gene editing therapy</li>
              <li>• Synthetic biology</li>
              <li>• Regenerative medicine</li>
              <li>• Longevity treatments</li>
            </ul>
            <button className="w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold">
              Discover Biotech →
            </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Metaverse 2.0</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Next-generation virtual worlds with photorealistic graphics and seamless integration with reality
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Photorealistic avatars</li>
              <li>• Haptic feedback</li>
              <li>• Virtual economies</li>
              <li>• Mixed reality integration</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Enter Metaverse →
            </button>
          </div>
        </div>

        {/* Technology Impact Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Technology Impact on Society</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              These revolutionary technologies are transforming every aspect of human life, from healthcare to education, 
              from work to entertainment. Discover how they're shaping our future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">Healthcare Revolution</h3>
              <p className="text-blue-100 mb-4">
                AI-powered diagnostics, personalized medicine, and regenerative therapies are extending human life and improving quality of life.
              </p>
              <div className="text-3xl font-bold text-yellow-400">+40 years</div>
              <div className="text-sm text-blue-200">Average life expectancy increase</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4">Work Transformation</h3>
              <p className="text-blue-100 mb-4">
                AI assistants, virtual offices, and automated workflows are creating new opportunities and redefining work.
              </p>
              <div className="text-3xl font-bold text-green-400">+300%</div>
              <div className="text-sm text-blue-200">Productivity increase</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Environmental Solutions</h3>
              <p className="text-blue-100 mb-4">
                Quantum computing and AI are solving climate change, optimizing energy use, and creating sustainable technologies.
              </p>
              <div className="text-3xl font-bold text-emerald-400">-80%</div>
              <div className="text-sm text-blue-200">Carbon emissions reduction</div>
            </div>
          </div>
        </div>

        {/* Future Predictions */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Future Predictions 2026-2030</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Based on current technological trends and breakthroughs, here's what we can expect in the next few years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Consciousness</h3>
                  <p className="text-purple-100">
                    By 2027, we expect AI systems to achieve true consciousness and self-awareness, 
                    leading to new ethical considerations and opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quantum Internet</h3>
                  <p className="text-purple-100">
                    Quantum internet networks will enable ultra-secure communication and 
                    distributed quantum computing across the globe.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🧬</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Neural Enhancement</h3>
                  <p className="text-purple-100">
                    Direct neural interfaces will become mainstream, allowing humans to 
                    enhance their cognitive abilities and communicate telepathically.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mars Colonies</h3>
                  <p className="text-purple-100">
                    The first permanent human settlements on Mars will be established, 
                    marking humanity's expansion beyond Earth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🔬</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Immortality Research</h3>
                  <p className="text-purple-100">
                    Breakthroughs in biotechnology and AI will make significant progress 
                    toward extending human life indefinitely.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🌐</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Digital Immortality</h3>
                  <p className="text-purple-100">
                    Human consciousness will be able to exist in digital form, 
                    creating new possibilities for existence and interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring and developing the technologies that will define the next decade. 
            The future is being built today, and you can be part of it.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Learn More
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;