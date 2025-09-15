import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NextGenInnovationHub2026: React.FC = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const innovations = [
    {
      id: 1,
      title: "🧠 Meta-Intelligence Networks",
      category: "Artificial Intelligence",
      description: "Self-evolving AI networks that create and optimize their own architectures in real-time",
      features: ["Self-Architecture", "Real-time Evolution", "Meta-Learning"],
      impact: "Revolutionary",
      timeline: "Q2 2026",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "⚛️ Quantum Consciousness Interface",
      category: "Quantum Technology",
      description: "Direct interface between human consciousness and quantum computing systems",
      features: ["Consciousness Upload", "Quantum Processing", "Neural Sync"],
      impact: "Breakthrough",
      timeline: "Q3 2026",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "🧬 Synthetic Biology AI",
      category: "Biotechnology",
      description: "AI-powered synthetic biology systems that design and create new life forms",
      features: ["Life Design", "Bio-Engineering", "Evolution Control"],
      impact: "Transformative",
      timeline: "Q4 2026",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "🚀 Space-Time Manipulation",
      category: "Physics",
      description: "Technology that manipulates space-time to enable faster-than-light travel",
      features: ["FTL Travel", "Wormholes", "Time Dilation"],
      impact: "Revolutionary",
      timeline: "2027",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedInnovation((prev) => (prev + 1) % innovations.length);
        setIsAnimating(false);
      }, 300);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN INNOVATION HUB • 2026
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🌟 Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced innovation hub on Earth, where cutting-edge technologies 
            are born and the future is crafted by the brightest minds in science and technology.
          </p>
        </div>

        {/* Innovation Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Featured Innovations</h2>
            <p className="text-xl text-gray-600">Explore the breakthrough technologies that will reshape our world</p>
          </div>

          {/* Main Innovation Display */}
          <div className={`bg-gradient-to-br ${innovations[selectedInnovation].gradient} rounded-3xl p-12 text-white mb-8 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold mr-4">
                    {innovations[selectedInnovation].category}
                  </span>
                  <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                    {innovations[selectedInnovation].impact}
                  </span>
                </div>
                
                <h3 className="text-4xl font-bold mb-4">
                  {innovations[selectedInnovation].title}
                </h3>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {innovations[selectedInnovation].description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {innovations[selectedInnovation].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-sm text-white/70">Expected Launch</div>
                    <div className="text-lg font-bold">{innovations[selectedInnovation].timeline}</div>
                  </div>
                  <a
                    href="/pages/RevolutionaryTechBreakthrough2026"
                    className="bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors font-bold"
                  >
                    Learn More →
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="text-9xl mb-6 opacity-50">
                  {innovations[selectedInnovation].title.split(' ')[0]}
                </div>
                <div className="text-2xl font-bold mb-4">Innovation 2026</div>
                <div className="text-white/70">Next-Generation Technology</div>
              </div>
            </div>
          </div>

          {/* Innovation Selector */}
          <div className="grid md:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <button
                key={innovation.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setSelectedInnovation(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`p-6 rounded-2xl text-white transition-all duration-300 hover:scale-105 ${
                  index === selectedInnovation 
                    ? `bg-gradient-to-br ${innovation.gradient} shadow-2xl ring-4 ring-white/50` 
                    : `bg-gradient-to-br ${innovation.gradient} opacity-70 hover:opacity-90`
                }`}
              >
                <div className="text-4xl mb-3">{innovation.title.split(' ')[0]}</div>
                <h4 className="text-lg font-bold mb-2">{innovation.title}</h4>
                <p className="text-sm text-white/90 mb-3">{innovation.description}</p>
                <div className="text-xs text-white/70">{innovation.timeline}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Innovation Labs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔬 Innovation Laboratories</h2>
            <p className="text-xl text-gray-600">State-of-the-art research facilities where the impossible becomes possible</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Lab</h3>
              <p className="text-gray-600 mb-6 text-center">
                Where artificial intelligence achieves true consciousness and self-awareness through advanced neural networks.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Quantum Neural Networks</li>
                <li>• Consciousness Simulation</li>
                <li>• Emotional AI Development</li>
                <li>• Ethical AI Framework</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Physics Lab</h3>
              <p className="text-gray-600 mb-6 text-center">
                Advanced quantum computing and physics research facility pushing the boundaries of reality itself.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Quantum Supremacy Research</li>
                <li>• Quantum Entanglement Networks</li>
                <li>• Reality Manipulation Studies</li>
                <li>• Parallel Universe Access</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Biology Lab</h3>
              <p className="text-gray-600 mb-6 text-center">
                Revolutionary biotechnology research creating new life forms and advancing human evolution.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Synthetic Life Creation</li>
                <li>• Human Enhancement</li>
                <li>• Longevity Research</li>
                <li>• Bio-Computer Integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Statistics */}
        <div className="bg-gradient-to-r from-gray-900 to-indigo-900 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Research Excellence Metrics</h2>
            <p className="text-xl text-gray-300">Our commitment to pushing the boundaries of human knowledge</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-lg text-gray-300">Active Researchers</div>
              <div className="text-sm text-gray-400 mt-2">World-Class Scientists</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg text-gray-300">Research Projects</div>
              <div className="text-sm text-gray-400 mt-2">Breakthrough Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-400 mb-2">$2B+</div>
              <div className="text-lg text-gray-300">Research Funding</div>
              <div className="text-sm text-gray-400 mt-2">Annual Investment</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-lg text-gray-300">Success Rate</div>
              <div className="text-sm text-gray-400 mt-2">Project Completion</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Join the Innovation Revolution</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Become part of the most advanced innovation ecosystem on Earth. 
              Collaborate with the world's leading scientists and engineers to create the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pages/RevolutionaryTechBreakthrough2026"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Explore Innovations →
              </a>
              <a
                href="/pages/ComprehensiveTechInsights2026"
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-colors font-bold text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NextGenInnovationHub2026;